import React, { useEffect } from 'react';
import { SCHOOL_INFO, GRADE_LEVELS, CURRICULUM_PARTNERS } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { X, Download, ExternalLink, CheckCircle, FileText, MapPin, Phone, Mail } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden"
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

          <div className="flex items-center gap-3 mb-3">
            <SchoolCrest size="sm" variant="dark" />
            <span className="text-[#00C2B8] text-xs font-bold uppercase tracking-wider">
              Official School Prospectus & Curriculum Guide
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
            Oak International Christian School
          </h3>
          <p className="text-[#00C2B8] font-serif italic text-sm">
            "{SCHOOL_INFO.tagline}"
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Quick PDF Action Strip */}
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-500 text-slate-950 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-slate-950 font-semibold text-sm">
                  Official School Development Document (Oct 2026)
                </strong>
                <span className="text-xs text-slate-600">
                  Full curriculum breakdown, contact details & educational goals
                </span>
              </div>
            </div>

            <a
              href={SCHOOL_INFO.prospectusPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Open Original PDF</span>
            </a>
          </div>

          {/* School Overview Summary */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#0B192C] mb-2">
              School Mission & Goal
            </h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <p><strong>Mission:</strong> "{SCHOOL_INFO.mission}"</p>
              <p><strong>Goal:</strong> "{SCHOOL_INFO.goal}"</p>
            </div>
          </div>

          {/* Academic Pathway at a Glance */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#0B192C] mb-3">
              Academic Levels Offered
            </h4>
            <div className="space-y-3">
              {GRADE_LEVELS.map((g) => (
                <div key={g.id} className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <strong className="font-serif text-base text-[#0B192C]">{g.name}</strong>
                    <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {g.ageRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{g.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Partners */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#0B192C] mb-2">
              Curriculum Accreditation Partners
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {CURRICULUM_PARTNERS.map((p) => (
                <div key={p.short} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-900">{p.short}</strong>
                  <span className="text-[11px] text-slate-500">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="border-t border-slate-200 pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{SCHOOL_INFO.address}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{SCHOOL_INFO.phone}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>{SCHOOL_INFO.email}</span>
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-8 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="px-5 py-2 bg-[#0B192C] hover:bg-[#132A4A] text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            Enquire for Admissions
          </button>
        </div>
      </div>
    </div>
  );
};
