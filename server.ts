import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const SCHOOL_EMAIL = 'oakinternationalchristiansch@gmail.com';
const FORMSUBMIT_TARGET = process.env.FORMSUBMIT_KEY || '714808b1bae4a0a1ccae046d75d60fba';
const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

interface StoredEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  question: string;
  communicationModes: string[];
  emailDelivered: boolean;
  deliveryProvider: string;
  deliveryMessage?: string;
}

async function saveEnquiry(record: StoredEnquiry): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: StoredEnquiry[] = [];
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed as StoredEnquiry[];
    }
  } catch {
    existing = [];
  }
  existing.unshift(record);
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

async function sendViaResend(payload: {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  question: string;
  communicationModes: string[];
}): Promise<{ delivered: boolean; message?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { delivered: false, message: 'RESEND_API_KEY not configured' };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Oak Admissions <onboarding@resend.dev>',
        to: [SCHOOL_EMAIL],
        reply_to: payload.email,
        subject: `New Admission Enquiry (${payload.id}) - ${payload.fullName}`,
        text: [
          `Reference: ${payload.id}`,
          `Name: ${payload.fullName}`,
          `Phone: ${payload.phone}`,
          `Email: ${payload.email}`,
          `Preferred Contact: ${payload.communicationModes.join(', ')}`,
          '',
          'Question / Enquiry:',
          payload.question,
        ].join('\n'),
      }),
    });

    if (res.ok) {
      return { delivered: true };
    }
    const errText = await res.text();
    return { delivered: false, message: errText };
  } catch (err) {
    return {
      delivered: false,
      message: err instanceof Error ? err.message : 'Resend request failed',
    };
  }
}

async function sendViaFormSubmit(
  payload: {
    id: string;
    fullName: string;
    phone: string;
    email: string;
    question: string;
    communicationModes: string[];
  },
  originHeader?: string
): Promise<{ delivered: boolean; needsActivation: boolean; message?: string }> {
  const siteOrigin =
    originHeader || process.env.APP_URL || 'https://www.oakinternationalchristianschool.com';
  const targets =
    FORMSUBMIT_TARGET === SCHOOL_EMAIL ? [SCHOOL_EMAIL] : [FORMSUBMIT_TARGET, SCHOOL_EMAIL];

  let lastMsg = '';
  let anyNeedsActivation = false;

  for (const target of targets) {
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${target}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: siteOrigin,
          Referer: `${siteOrigin.replace(/\/$/, '')}/`,
        },
        body: JSON.stringify({
          reference_id: payload.id,
          name: payload.fullName,
          phone: payload.phone,
          email: payload.email,
          message: payload.question,
          preferred_communication: payload.communicationModes.join(', '),
          _captcha: 'false',
          _subject: `New Admission Enquiry - ${payload.fullName} (Oak International Christian School)`,
          _template: 'table',
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        success?: boolean | string;
        message?: string;
      } | null;

      const isSuccess = Boolean(data && (data.success === true || data.success === 'true'));
      if (res.ok && isSuccess) {
        return { delivered: true, needsActivation: false };
      }

      lastMsg = data?.message || `HTTP ${res.status}`;
      if (lastMsg.toLowerCase().includes('activation')) {
        anyNeedsActivation = true;
      }
    } catch (err) {
      lastMsg = err instanceof Error ? err.message : 'FormSubmit network error';
    }
  }

  return {
    delivered: false,
    needsActivation: anyNeedsActivation,
    message: lastMsg || 'FormSubmit delivery pending activation',
  };
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/enquiry', async (req, res) => {
    const body = (req.body || {}) as Record<string, unknown>;

    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const question = typeof body.question === 'string' ? body.question.trim() : '';
    const honey = typeof body._honey === 'string' ? body._honey.trim() : '';
    const communicationModes = Array.isArray(body.communicationModes)
      ? body.communicationModes.filter((m): m is string => typeof m === 'string' && m.trim().length > 0)
      : ['WhatsApp'];

    // Silent drop for spam bots triggering honeypot
    if (honey !== '') {
      res.json({
        ok: true,
        id: 'OAK-FILTERED',
        saved: false,
        emailDelivered: true,
        needsActivation: false,
      });
      return;
    }

    if (!fullName) {
      res.status(400).json({ ok: false, error: 'Please enter your full name.' });
      return;
    }
    if (!phone || phone.length < 8) {
      res.status(400).json({
        ok: false,
        error: 'Please enter a valid phone number with country or local code.',
      });
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
      return;
    }
    if (!question || question.length < 5) {
      res.status(400).json({ ok: false, error: 'Please write your question or inquiry.' });
      return;
    }

    const id = `OAK-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const normalizedModes = communicationModes.length > 0 ? communicationModes : ['WhatsApp'];

    let emailDelivered = false;
    let needsActivation = false;
    let deliveryProvider = 'server-record';
    let deliveryMessage = '';

    // 1. Prefer Resend API if configured
    if (process.env.RESEND_API_KEY) {
      const resendResult = await sendViaResend({
        id,
        fullName,
        phone,
        email,
        question,
        communicationModes: normalizedModes,
      });
      if (resendResult.delivered) {
        emailDelivered = true;
        deliveryProvider = 'resend';
      } else {
        deliveryMessage = resendResult.message || '';
      }
    }

    // 2. Otherwise try FormSubmit relay
    if (!emailDelivered) {
      const originHeader = typeof req.headers.origin === 'string' ? req.headers.origin : undefined;
      const fsResult = await sendViaFormSubmit(
        {
          id,
          fullName,
          phone,
          email,
          question,
          communicationModes: normalizedModes,
        },
        originHeader
      );
      emailDelivered = fsResult.delivered;
      needsActivation = fsResult.needsActivation;
      deliveryProvider = fsResult.delivered ? 'formsubmit' : 'server-record';
      deliveryMessage = fsResult.message || deliveryMessage;
    }

    try {
      await saveEnquiry({
        id,
        createdAt: new Date().toISOString(),
        fullName,
        phone,
        email,
        question,
        communicationModes: normalizedModes,
        emailDelivered,
        deliveryProvider,
        deliveryMessage: deliveryMessage || undefined,
      });
    } catch (err) {
      console.error('Failed to persist enquiry:', err);
    }

    res.json({
      ok: true,
      id,
      saved: true,
      emailDelivered,
      needsActivation,
      message: deliveryMessage || undefined,
    });
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
