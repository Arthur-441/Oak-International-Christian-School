import React, { useEffect } from 'react';
import { EnquiryForm } from './EnquiryForm';
import { X, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#09262C] text-white px-6 sm:px-8 py-6 relative border-b border-[#00868F]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 text-[#00C2B8] text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions & Enquiries</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
            Have a Question for Us?
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
            Ask us about our Diagnostic Test, switching from other curricula, exit routes, or any other questions about our school.
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          <EnquiryForm onSuccess={onClose} compact />
        </div>
      </div>
    </div>
  );
};
