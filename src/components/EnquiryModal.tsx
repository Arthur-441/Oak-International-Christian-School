import React, { useEffect } from 'react';
import { EnquiryForm } from './EnquiryForm';
import { X, GraduationCap, FileText, Download, Eye } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnrollmentForm?: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  onOpenEnrollmentForm,
}) => {
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
        <div className="bg-gradient-to-r from-[#F4FAF6] to-[#E6F5EC] text-[#0F3820] px-6 sm:px-8 py-6 relative border-b border-[#CFE8D8]">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-[#0F3820] hover:bg-white/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#319B59] text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions &amp; Enquiries</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820] mb-1">
            Have a Question for Us?
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
            Ask us about our Diagnostic Test, switching from other curricula, exit routes, or any other questions about our school.
          </p>
        </div>

        {/* Official Enrollment Form Quick Bar */}
        <div className="bg-white border-b border-[#E2EFE7] px-6 sm:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs text-[#0F3820]">
            <FileText className="w-4 h-4 text-[#319B59] shrink-0" />
            <span className="font-semibold">
              Ready to apply? Get our official Registration &amp; Enrollment Form (PDF)
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onOpenEnrollmentForm && (
              <button
                type="button"
                onClick={onOpenEnrollmentForm}
                className="px-3 py-1.5 bg-[#F4FAF6] hover:bg-[#E6F5EC] text-[#1F6E3D] border border-[#CFE8D8] rounded-lg text-xs font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#319B59]" />
                <span>View</span>
              </button>
            )}
            <a
              href={SCHOOL_INFO.enrollmentFormPdfUrl}
              download="Oak_International_Enrollment_Form.pdf"
              className="px-3 py-1.5 bg-[#1F6E3D] hover:bg-[#144D2B] text-white rounded-lg text-xs font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Body Form */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto">
          <EnquiryForm onSuccess={onClose} compact />
        </div>
      </div>
    </div>
  );
};

