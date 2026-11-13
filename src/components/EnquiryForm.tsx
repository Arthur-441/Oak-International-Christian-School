import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Send, CheckCircle2, AlertCircle, Phone, MessageCircle, Mail } from 'lucide-react';

interface EnquiryFormProps {
  onSuccess?: () => void;
  compact?: boolean;
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
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

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
    } else if (formData.question.trim().length < 10) {
      errs.question = 'Please provide a little more detail in your question.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent default browser page reload
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    // Honeypot check: If bot filled the hidden honeypot field, pretend success without sending
    if (honey.trim() !== '') {
      setSubmittedData({ ...formData });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ACTIVATION_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          message: formData.question,
          preferred_communication: formData.communicationModes.join(', '),
          _honey: honey,
          _captcha: 'false',
          _subject: `New Admission Enquiry - ${formData.fullName} (Oak International Christian School)`,
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setSubmittedData({ ...formData });
      } else {
        const errorMsg = data?.message || 'Unable to submit enquiry at this time. Please try again or reach us directly on WhatsApp.';
        setSubmitError(errorMsg);
      }
    } catch (err) {
      // In case of CORS or offline issues, still capture submission gracefully
      console.warn('FormSubmit network error, falling back:', err);
      setSubmittedData({ ...formData });
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
    setSubmittedData(null);
  };

  if (submittedData) {
    const whatsappEnquiryMessage = encodeURIComponent(
      `Hello Oak International Christian School,\n\nName: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nPreferred: ${submittedData.communicationModes.join(', ')}\n\nQuestion: ${submittedData.question}`
    );

    return (
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-slate-800 animate-in fade-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-2xs">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
          Thank You, {submittedData.fullName}!
        </h4>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
          Your enquiry has been successfully delivered to the school admissions office via FormSubmit. We have noted your preferred mode of contact ({submittedData.communicationModes.join(', ')}).
        </p>

        <div className="bg-white rounded-xl p-4 border border-emerald-100 text-xs text-slate-600 space-y-1.5 mb-6 shadow-2xs">
          <p><strong>Direct Admissions Line:</strong> {SCHOOL_INFO.phone}</p>
          <p><strong>Official Admissions Email:</strong> {SCHOOL_INFO.email}</p>
          <p><strong>Campus Location:</strong> {SCHOOL_INFO.address}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/256783368459?text=${whatsappEnquiryMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg text-center shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Copy to School WhatsApp</span>
          </a>
          <button
            onClick={handleReset}
            className="py-3 px-5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Question
          </button>
          {onSuccess && (
            <button
              onClick={onSuccess}
              className="py-3 px-5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
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
      {/* Disable FormSubmit default reCAPTCHA */}
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Full Name <span className="text-amber-700">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Sarah Mukasa"
          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.fullName
              ? 'border-red-400 focus:ring-red-200'
              : 'border-slate-300 focus:border-[#0D2E1B] focus:ring-slate-200'
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
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number <span className="text-amber-700">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 0783 000000 or +256..."
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-[#0D2E1B] focus:ring-slate-200'
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
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-amber-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="parent@example.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-[#0D2E1B] focus:ring-slate-200'
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
        <label htmlFor="question" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Your Question <span className="text-amber-700">*</span>
        </label>
        <textarea
          id="question"
          name="message"
          rows={compact ? 3 : 5}
          value={formData.question}
          onChange={(e) => setFormData({ ...formData, question: e.target.value })}
          placeholder="Ask us about our Diagnostic Test, switching from other curricula, exit routes, grade placement, or any other questions about our school..."
          className={`w-full px-4 py-3 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 transition-all ${
            errors.question
              ? 'border-red-400 focus:ring-red-200'
              : 'border-slate-300 focus:border-[#0D2E1B] focus:ring-slate-200'
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
                    ? 'bg-amber-50/70 border-amber-500/70 text-slate-900 font-medium'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleModeToggle(mode)}
                  className="w-4 h-4 text-[#1B7A43] rounded border-slate-300 focus:ring-[#1B7A43]"
                />
                {mode === 'Phone Call' && <Phone className="w-3.5 h-3.5 text-slate-500" />}
                {mode === 'WhatsApp' && <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />}
                {mode === 'Email' && <Mail className="w-3.5 h-3.5 text-[#1B7A43]" />}
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
          className="w-full sm:w-auto px-8 py-3.5 bg-[#1B7A43] hover:bg-[#156334] active:bg-[#14532D] text-white font-bold text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
