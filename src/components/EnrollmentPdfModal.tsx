import React, { useEffect, useState, useRef } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import {
  X,
  Download,
  FileText,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

interface EnrollmentPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ENROLLMENT_PAGES = [
  { page: 1, title: 'Registration & Student Info', src: '/assets/enrollment-pages/page-1.png' },
  { page: 2, title: 'Academic History & Family Info', src: '/assets/enrollment-pages/page-2.png' },
  { page: 3, title: 'Religious, Medical & General Info', src: '/assets/enrollment-pages/page-3.png' },
  { page: 4, title: 'School & Financial Regulations', src: '/assets/enrollment-pages/page-4.png' },
  { page: 5, title: 'Regulations & Code of Conduct', src: '/assets/enrollment-pages/page-5.png' },
  { page: 6, title: 'Scriptural Guidance & Expectations', src: '/assets/enrollment-pages/page-6.png' },
  { page: 7, title: 'Student & Parent Agreement', src: '/assets/enrollment-pages/page-7.png' },
];

export const EnrollmentPdfModal: React.FC<EnrollmentPdfModalProps> = ({ isOpen, onClose }) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActivePage((prev) => {
          const next = Math.min(ENROLLMENT_PAGES.length, prev + 1);
          scrollToPage(next);
          return next;
        });
      } else if (e.key === 'ArrowLeft') {
        setActivePage((prev) => {
          const prevPage = Math.max(1, prev - 1);
          scrollToPage(prevPage);
          return prevPage;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const scrollToPage = (pageNumber: number) => {
    setActivePage(pageNumber);
    const el = pageRefs.current[pageNumber - 1];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official Enrollment Form PDF"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#09262C] text-white px-5 sm:px-7 py-4 border-b border-[#00868F]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <SchoolCrest size="sm" variant="dark" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C2B8] block">
                Official Registration Document &middot; 7 Pages
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                Oak International Enrollment Form (PDF)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              className="hidden sm:inline-flex px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/15 transition-colors items-center gap-1.5 cursor-pointer"
              title={isZoomed ? 'Fit Width' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              <span>{isZoomed ? 'Fit' : 'Zoom'}</span>
            </button>

            <a
              href={SCHOOL_INFO.enrollmentFormPdfUrl}
              download="Oak_International_Enrollment_Form.pdf"
              className="px-4 py-2 bg-[#00868F] hover:bg-[#00747C] text-white text-xs font-bold rounded-xl shadow-sm transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close enrollment form preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Jump Navigation Strip */}
        <div className="bg-[#061C20] border-b border-[#0A333A] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1.5">
            {ENROLLMENT_PAGES.map((p) => {
              const isCurrent = activePage === p.page;
              return (
                <button
                  key={p.page}
                  type="button"
                  onClick={() => scrollToPage(p.page)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#00868F] text-white shadow-xs'
                      : 'bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white'
                  }`}
                  title={p.title}
                >
                  Page {p.page}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-300 shrink-0">
            <button
              type="button"
              onClick={() => scrollToPage(Math.max(1, activePage - 1))}
              disabled={activePage === 1}
              className="p-1 rounded hover:bg-white/10 disabled:opacity-40 cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-[11px] text-[#00C2B8]">
              {activePage} / {ENROLLMENT_PAGES.length}
            </span>
            <button
              type="button"
              onClick={() => scrollToPage(Math.min(ENROLLMENT_PAGES.length, activePage + 1))}
              disabled={activePage === ENROLLMENT_PAGES.length}
              className="p-1 rounded hover:bg-white/10 disabled:opacity-40 cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Rendered Document Pages Feed (Zero Browser Chrome Blocking) */}
        <div
          ref={scrollContainerRef}
          className="flex-1 bg-slate-200/80 overflow-y-auto p-3 sm:p-6 space-y-6"
        >
          {ENROLLMENT_PAGES.map((p, index) => (
            <div
              key={p.page}
              ref={(el) => {
                pageRefs.current[index] = el;
              }}
              onMouseEnter={() => setActivePage(p.page)}
              className={`mx-auto bg-white rounded-xl shadow-md border border-slate-300/80 overflow-hidden transition-all ${
                isZoomed ? 'max-w-4xl' : 'max-w-2xl'
              }`}
            >
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-[#09262C]">
                  Page {p.page} of {ENROLLMENT_PAGES.length}
                </span>
                <span>{p.title}</span>
              </div>
              <img
                src={p.src}
                alt={`Oak International Enrollment Form - Page ${p.page}: ${p.title}`}
                className="w-full h-auto block select-none"
                loading={p.page <= 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Bottom Helpful Instructions */}
        <div className="bg-[#F2F8F8] border-t border-[#00868F]/20 px-5 sm:px-7 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#00868F] shrink-0" />
            <span>
              Download, complete, and submit this form to our Buwate Campus office or via{' '}
              <a
                href={SCHOOL_INFO.emailMailto}
                className="font-semibold text-[#00868F] hover:underline"
              >
                {SCHOOL_INFO.email}
              </a>
              .
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500 shrink-0">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#6DB33F]" />
              Kira – Kasangati Rd
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#00868F]" />
              0783 368459
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
