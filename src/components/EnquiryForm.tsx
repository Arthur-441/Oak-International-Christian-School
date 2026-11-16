import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Mail } from 'lucide-react';

interface EnquiryFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

interface SubmissionReceipt extends EnquiryFormData {
  referenceId: string;
  emailDelivered: boolean;
  needsActivation?: boolean;
}

const FORMSUBMIT_ACTIVATION_KEY = '714808b1bae4a0a1ccae046d75d60fba';

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSuccess, compact = false }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    question: '',
    communicationModes: ['WhatsApp'],
  });

  const [honey, setHoney] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedReceipt, setSubmittedReceipt] = useState<SubmissionReceipt | null>(null);

  const availableModes: ('Phone Call' | 'WhatsApp' | 'Email')[] = [
    'Phone Call',
    'WhatsApp',
    'Email',
  ];

  const handleModeToggle = (mode: 'Phone Call' | 'WhatsApp' | 'Email') => {
    setFormData((prev) => {
      const exists = prev.communicationModes.includes(mode);
      const newModes = exists
        ? prev.communicationModes.filter((m) => m !== mode)
        : [...prev.communicationModes, mode];
      return {
        ...prev,
        communicationModes: newModes.length > 0 ? newModes : [mode],
      };
    });
  };

  const clearFieldError = (field: keyof EnquiryFormData) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number with country or local code.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.question.trim()) {
      errs.question = 'Please write your question or inquiry.';
    } else if (formData.question.trim().length < 5) {
      errs.question = 'Please provide a little more detail in your question.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitViaDirectFormSubmit = async (): Promise<{
    delivered: boolean;
    needsActivation: boolean;
    errorMessage?: string;
  }> => {
    const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ACTIVATION_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        message: formData.question.trim(),
        preferred_communication: formData.communicationModes.join(', '),
        _honey: honey,
        _captcha: 'false',
        _subject: `New Admission Enquiry - ${formData.fullName.trim()} (Oak International Christian School)`,
        _template: 'table',
      }),
    });

    const data = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    const delivered = Boolean(
      response.ok && data && (data.success === true || data.success === 'true')
    );
    const msg = data?.message || '';
    const needsActivation = msg.toLowerCase().includes('activation');

    return {
      delivered,
      needsActivation,
      errorMessage: delivered ? undefined : msg || 'Email relay pending confirmation.',
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    if (honey.trim() !== '') {
      setSubmittedReceipt({
        ...formData,
        referenceId: 'OAK-RECEIVED',
        emailDelivered: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiRes = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          question: formData.question.trim(),
          communicationModes: formData.communicationModes,
          _honey: honey,
        }),
      });

      const isJsonResponse = (apiRes.headers.get('content-type') || '').includes('application/json');
      // On static hosting (e.g. Netlify) the Express API isn't running: the SPA
      // fallback returns index.html (HTML, status 200) or a 404/405 instead.
      if (apiRes.status === 404 || apiRes.status === 405 || !isJsonResponse) {
        const direct = await submitViaDirectFormSubmit();
        setSubmittedReceipt({
          ...formData,
          referenceId: `OAK-${Date.now().toString(36).toUpperCase().slice(-6)}`,
          emailDelivered: direct.delivered,
          needsActivation: direct.needsActivation,
        });
        return;
      }

      const apiData = (await apiRes.json().catch(() => null)) as {
        ok?: boolean;
        id?: string;
        emailDelivered?: boolean;
        needsActivation?: boolean;
        error?: string;
      } | null;

      if (!apiRes.ok || !apiData?.ok) {
        setSubmitError(
          apiData?.error ||
            'Unable to submit enquiry at this time. Please check your details or reach us directly on WhatsApp.'
        );
        return;
      }

      setSubmittedReceipt({
        ...formData,
        referenceId: apiData.id || `OAK-${Date.now().toString(36).toUpperCase().slice(-6)}`,
        emailDelivered: Boolean(apiData.emailDelivered),
        needsActivation: Boolean(apiData.needsActivation),
      });
    } catch {
      try {
        const direct = await submitViaDirectFormSubmit();
        setSubmittedReceipt({
          ...formData,
          referenceId: `OAK-${Date.now().toString(36).toUpperCase().slice(-6)}`,
          emailDelivered: direct.delivered,
          needsActivation: direct.needsActivation,
        });
      } catch {
        setSubmitError(
          'Network error while submitting your enquiry. Please try again or contact us directly via WhatsApp or email.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      question: '',
      communicationModes: ['WhatsApp'],
    });
    setHoney('');
    setErrors({});
    setSubmitError(null);
    setSubmittedReceipt(null);
  };

  if (submittedReceipt) {
    const enquiryBody =
      `Hello Oak International Christian School,\n\n` +
      `Reference: ${submittedReceipt.referenceId}\n` +
      `Name: ${submittedReceipt.fullName}\n` +
      `Phone: ${submittedReceipt.phone}\n` +
      `Email: ${submittedReceipt.email}\n` +
      `Preferred Contact: ${submittedReceipt.communicationModes.join(', ')}\n\n` +
      `Question:\n${submittedReceipt.question}`;

    const whatsappEnquiryMessage = encodeURIComponent(enquiryBody);
    const mailtoSubject = encodeURIComponent(
      `Admissions Enquiry (${submittedReceipt.referenceId}) - ${submittedReceipt.fullName}`
    );
    const mailtoBody = encodeURIComponent(enquiryBody);

    return (
      <div className="bg-[#F4FAF6] border border-[#CFE8D8] rounded-2xl p-6 sm:p-8 text-slate-800 animate-in fade-in duration-300">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#E6F5EC] text-[#1F6E3D] flex items-center justify-center shadow-2xs border border-[#CFE8D8]">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-[#1F6E3D] border border-[#CFE8D8]">
            Ref: {submittedReceipt.referenceId}
          </span>
        </div>

        <h4 className="font-serif text-2xl font-bold text-[#0F3820] mb-2">
          Thank You, {submittedReceipt.fullName}!
        </h4>

        {submittedReceipt.emailDelivered ? (
          <p className="text-slate-700 text-sm mb-5 leading-relaxed">
            Your enquiry has been recorded and delivered directly to our admissions inbox (
            <strong>{SCHOOL_INFO.email}</strong>). We have noted your preferred mode of contact (
            {submittedReceipt.communicationModes.join(', ')}).
          </p>
        ) : (
          <p className="text-slate-700 text-sm mb-5 leading-relaxed">
            Your enquiry has been recorded (Ref: <strong>{submittedReceipt.referenceId}</strong>)
            with your preferred contact mode ({submittedReceipt.communicationModes.join(', ')}).
            For the fastest reply, send a copy straight to our admissions team via WhatsApp or your
            Email app below.
          </p>
        )}

        <div className="bg-white rounded-xl p-4 border border-[#DCEFE2] text-xs text-slate-600 space-y-1.5 mb-6 shadow-2xs">
          <p>
            <strong>Direct Admissions Line:</strong> {SCHOOL_INFO.phone}
          </p>
          <p>
            <strong>Official Admissions Email:</strong> {SCHOOL_INFO.email}
          </p>
          <p>
            <strong>Campus Location:</strong> {SCHOOL_INFO.address}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={`https://wa.me/256783368459?text=${whatsappEnquiryMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-[#1F6E3D] hover:bg-[#0F3820] text-white font-semibold text-sm rounded-xl text-center shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </a>
          <a
            href={`mailto:${SCHOOL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="flex-1 py-3 px-4 bg-white hover:bg-[#E6F5EC] text-[#0F3820] border border-[#CFE8D8] font-semibold text-sm rounded-xl text-center shadow-2xs transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#319B59]" />
            <span>Send via Email App</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="py-3 px-5 border border-slate-300 hover:bg-white text-slate-700 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
          >
            New Question
          </button>
          {onSuccess && (
            <button
              type="button"
              onClick={onSuccess}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Hidden honeypot field to catch spam bots */}
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Full Name <span className="text-amber-700">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="name"
          value={formData.fullName}
          onChange={(e) => {
            clearFieldError('fullName');
            setFormData({ ...formData, fullName: e.target.value });
          }}
          placeholder="e.g. Sarah Mukasa"
          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.fullName
              ? 'border-red-400 focus:ring-red-200'
              : 'border-slate-300 focus:border-[#319B59] focus:ring-[#E6F5EC]'
          }`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Phone Number <span className="text-amber-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              clearFieldError('phone');
              setFormData({ ...formData, phone: e.target.value });
            }}
            placeholder="e.g. 0783 000000 or +256..."
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-[#319B59] focus:ring-[#E6F5EC]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Email Address <span className="text-amber-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              clearFieldError('email');
              setFormData({ ...formData, email: e.target.value });
            }}
            placeholder="parent@example.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-[#319B59] focus:ring-[#E6F5EC]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="question"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Your Question <span className="text-amber-700">*</span>
        </label>
        <textarea
          id="question"
          name="message"
          rows={compact ? 3 : 5}
          value={formData.question}
          onChange={(e) => {
            clearFieldError('question');
            setFormData({ ...formData, question: e.target.value });
          }}
          placeholder="Ask us about our Diagnostic Test, switching from other curricula, exit routes, grade placement, or any other questions about our school..."
          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.question
              ? 'border-red-400 focus:ring-red-200'
              : 'border-slate-300 focus:border-[#319B59] focus:ring-[#E6F5EC]'
          }`}
        />
        {errors.question && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.question}</span>
          </p>
        )}
      </div>

      {/* Preferred Mode of Communication */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Preferred Mode of Communication:
        </label>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {availableModes.map((mode) => {
            const isChecked = formData.communicationModes.includes(mode);
            return (
              <label
                key={mode}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg border text-sm cursor-pointer select-none transition-all ${
                  isChecked
                    ? 'bg-[#E6F5EC] border-[#319B59]/60 text-[#0F3820] font-medium'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleModeToggle(mode)}
                  className="w-4 h-4 accent-[#1F6E3D] text-[#319B59] rounded border-slate-300 focus:ring-[#319B59]"
                />
                {mode === 'Phone Call' && <Phone className="w-3.5 h-3.5 text-[#1F6E3D]" />}
                {mode === 'WhatsApp' && <MessageCircle className="w-3.5 h-3.5 text-[#319B59]" />}
                {mode === 'Email' && <Mail className="w-3.5 h-3.5 text-[#1F6E3D]" />}
                <span>{mode}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Submit Error Alert */}
      {submitError && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">Notice</p>
            <p className="mt-0.5">{submitError}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#1F6E3D] hover:bg-[#0F3820] active:bg-[#0F3820] text-white font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Sending to Admissions...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
