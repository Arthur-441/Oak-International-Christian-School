import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, CURRICULUM_PARTNERS } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { WhatsAppButton } from './WhatsAppButton';
import { Phone, Mail, MapPin, ChevronRight, Heart, Instagram, Facebook, FileText, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenEnrollmentForm?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry, onOpenEnrollmentForm }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071E12] text-slate-300 border-t border-[#144027]">
      {/* Upper Footer CTA Strip - Brand Green */}
      <div className="bg-[#1B7A43] py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[#E2F3E7] block mb-1">
              Admissions & Enquiries Open
            </span>
            <h3 className="font-serif text-2xl text-white font-bold">
              Ready to nurture your child's leadership potential?
            </h3>
            <p className="text-[#E2F3E7] text-sm mt-1">
              Ask about our Diagnostic Test, curriculum switching, and individualised learning in Buwate, Kira.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-lg text-sm font-bold bg-[#0D2E1B] hover:bg-[#071E12] text-white shadow-md transition-colors cursor-pointer"
            >
              Enrol Now
            </button>
            <WhatsAppButton size="md" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: School Identity with Official Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SchoolCrest size="md" variant="dark" />
              <div>
                <span className="block font-serif font-bold text-lg text-white leading-tight">
                  Oak International
                </span>
                <span className="block text-xs font-bold text-[#68D37E] tracking-wider uppercase">
                  Christian School
                </span>
              </div>
            </div>

            <p className="text-[#68D37E] font-serif italic text-sm font-medium">
              "{SCHOOL_INFO.tagline}"
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A private Christian school raising outstanding, God-fearing, dependable and
              transformational leaders through the Accelerated Christian Curriculum.
            </p>

            <div className="pt-1 text-xs text-slate-300">
              <span className="text-[#6DB33F] font-bold">Office Hours:</span> {SCHOOL_INFO.campusHours}
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#68D37E] block mb-2">
                Follow Us Online
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oak International on Instagram (@oicacademyug)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 text-slate-300 hover:text-white border border-white/10 hover:border-transparent transition-all flex items-center justify-center cursor-pointer shadow-xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oak International on Facebook (OICAcademyUg)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-white/10 hover:border-transparent transition-all flex items-center justify-center cursor-pointer shadow-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SCHOOL_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oak International on X (@OICAcademyUg)"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-black text-slate-300 hover:text-white border border-white/10 hover:border-transparent transition-all flex items-center justify-center cursor-pointer shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('academics')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>Academics & ACE Curriculum</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('activities')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>Extracurricular Activities</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>Graduation & School Life</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="flex items-center gap-1.5 hover:text-[#68D37E] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1B7A43]" />
                  <span>Contact & Enquiries</span>
                </button>
              </li>
              <li className="pt-1">
                {onOpenEnrollmentForm ? (
                  <button
                    onClick={onOpenEnrollmentForm}
                    className="flex items-center gap-1.5 text-[#68D37E] hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Enrollment Form (PDF)</span>
                  </button>
                ) : (
                  <a
                    href={SCHOOL_INFO.enrollmentFormPdfUrl}
                    download="Oak_International_Enrollment_Form.pdf"
                    className="flex items-center gap-1.5 text-[#68D37E] hover:text-white font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Enrollment Form (PDF)</span>
                  </a>
                )}
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-b border-slate-800 pb-2">
              Contact & Location
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#68D37E] mt-1 shrink-0" />
                <span className="leading-snug">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6DB33F] shrink-0" />
                <a
                  href={SCHOOL_INFO.phoneTel}
                  className="hover:text-[#68D37E] transition-colors font-medium text-white"
                >
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#68D37E] mt-0.5 shrink-0" />
                <a
                  href={SCHOOL_INFO.emailMailto}
                  className="hover:text-[#68D37E] transition-colors break-all"
                >
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <WhatsAppButton size="sm" className="w-full justify-center" />
              </li>
            </ul>
          </div>

          {/* Col 4: Curriculum Partners with Real Cropped Logos */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 border-b border-slate-800 pb-2">
              Curriculum Partners
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {CURRICULUM_PARTNERS.map((partner) => (
                <div
                  key={partner.short}
                  className="bg-white rounded-lg p-2 flex flex-col items-center justify-center border border-white/20 hover:border-[#1B7A43] transition-all group"
                  title={`${partner.name} - ${partner.motto}`}
                >
                  <div className="h-9 w-full flex items-center justify-center p-1">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#0D2E1B] tracking-tight truncate w-full text-center mt-1">
                    {partner.short}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2.5 leading-tight italic">
              Global accreditation pathway for university entry locally & abroad.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & School Motto */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {SCHOOL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Building Godly Character</span>
            <span aria-hidden="true">&middot;</span>
            <span>Mastery-Based Education</span>
            <span aria-hidden="true">&middot;</span>
            <span>Kira, Uganda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
