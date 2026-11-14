import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { WhatsAppButton } from './WhatsAppButton';
import {
  Phone,
  Mail,
  Menu,
  X,
  FileText,
  ArrowRight,
  Instagram,
  Facebook,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Download,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenEnrollmentForm?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
  onOpenEnrollmentForm,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAcademicsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics & ACE', hasDropdown: true },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Graduation & Life' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setAcademicsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Light Top Utility Bar (Scrolls cleanly away to keep sticky header compact) */}
      <div className="bg-[#F4FAF6] text-slate-600 text-xs py-2 px-4 border-b border-[#E2F0E7]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-600">
              <span className="font-semibold text-[#1F6E3D]">Buwate Campus:</span>
              <span>Kira-Kasangati Road, Wakiso</span>
            </span>
            <a
              href={SCHOOL_INFO.phoneTel}
              className="flex items-center gap-1.5 text-[#0F3820] hover:text-[#319B59] transition-colors font-semibold"
              title="Call School Admissions"
            >
              <Phone className="w-3.5 h-3.5 text-[#319B59]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            <a
              href={SCHOOL_INFO.emailMailto}
              className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-[#319B59] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#319B59]" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs ml-auto flex-wrap justify-end">
            {onOpenEnrollmentForm && (
              <button
                type="button"
                onClick={onOpenEnrollmentForm}
                title="View or Download Official Enrollment Form (PDF)"
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#E6F5EC] text-[#1F6E3D] border border-[#CFE8D8] text-[11px] font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#319B59]" />
                <span>Enrollment Form (PDF)</span>
              </button>
            )}

            <div className="flex items-center gap-1.5 border-r border-[#D6ECDF] pr-2.5">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Oak International on Instagram (@oicacademyug)"
                className="w-6 h-6 rounded-md bg-white hover:bg-[#E6F5EC] text-slate-600 hover:text-[#1F6E3D] border border-slate-200/80 transition-all flex items-center justify-center cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Oak International on Facebook (OICAcademyUg)"
                className="w-6 h-6 rounded-md bg-white hover:bg-[#E6F5EC] text-slate-600 hover:text-[#1F6E3D] border border-slate-200/80 transition-all flex items-center justify-center cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={SCHOOL_INFO.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Oak International on X (@OICAcademyUg)"
                className="w-6 h-6 rounded-md bg-white hover:bg-[#E6F5EC] text-slate-600 hover:text-[#1F6E3D] border border-slate-200/80 transition-all flex items-center justify-center cursor-pointer"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <WhatsAppButton size="sm" />
          </div>
        </div>
      </div>

      {/* Main Sticky Pure-White Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'border-[#D9EDE1] shadow-sm py-2.5'
            : 'border-[#E6F2EB] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: School Crest + Crisp Single Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 focus-visible:outline-2 focus-visible:outline-[#319B59] rounded-xl cursor-pointer"
          >
            <SchoolCrest size="md" variant="light" />
            <span className="font-serif font-bold text-lg sm:text-xl text-[#0F3820] tracking-tight leading-tight group-hover:text-[#319B59] transition-colors whitespace-nowrap">
              Oak International
            </span>
          </button>

          {/* Zone 2: Clean Typography Navigation Links with Hover & Active Highlight + Dropdown */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setAcademicsMenuOpen(true)}
                    onMouseLeave={() => setAcademicsMenuOpen(false)}
                  >
                    <div
                      className={`inline-flex items-center rounded-lg transition-colors ${
                        active
                          ? 'bg-[#E6F5EC] text-[#1F6E3D] font-semibold'
                          : 'text-slate-700 hover:text-[#1F6E3D] hover:bg-[#F4FAF6]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className="relative pl-3.5 pr-1.5 py-2 whitespace-nowrap shrink-0 cursor-pointer group/nav"
                      >
                        <span>{item.label}</span>
                        <span
                          className={`absolute bottom-1 left-3.5 right-1.5 h-0.5 bg-[#319B59] rounded-full transition-transform duration-200 origin-left ${
                            active ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'
                          }`}
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => setAcademicsMenuOpen((prev) => !prev)}
                        aria-expanded={academicsMenuOpen}
                        aria-label="Toggle Academics submenu"
                        className="pr-2.5 pl-1 py-2 cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            academicsMenuOpen ? 'rotate-180 text-[#319B59]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {academicsMenuOpen && (
                      <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-dropdown-slide">
                        <div className="bg-white rounded-2xl shadow-xl border border-[#DCEFE2] p-2 space-y-1">
                          <button
                            type="button"
                            onClick={() => handleNavClick('academics')}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F4FAF6] text-slate-700 hover:text-[#1F6E3D] transition-colors flex items-start gap-3 cursor-pointer"
                          >
                            <BookOpen className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                            <div>
                              <span className="block text-xs font-bold text-[#0F3820]">
                                ACE Curriculum &amp; Stages
                              </span>
                              <span className="block text-[11px] text-slate-500">
                                Step by Step (3 yrs) to Grade 12
                              </span>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setAcademicsMenuOpen(false);
                              onOpenEnquiry();
                            }}
                            className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F4FAF6] text-slate-700 hover:text-[#1F6E3D] transition-colors flex items-start gap-3 cursor-pointer"
                          >
                            <GraduationCap className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                            <div>
                              <span className="block text-xs font-bold text-[#0F3820]">
                                Diagnostic Placement
                              </span>
                              <span className="block text-[11px] text-slate-500">
                                Schedule an assessment enquiry
                              </span>
                            </div>
                          </button>

                          {onOpenEnrollmentForm && (
                            <button
                              type="button"
                              onClick={() => {
                                setAcademicsMenuOpen(false);
                                onOpenEnrollmentForm();
                              }}
                              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#F4FAF6] text-slate-700 hover:text-[#1F6E3D] transition-colors flex items-start gap-3 cursor-pointer"
                            >
                              <FileText className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                              <div>
                                <span className="block text-xs font-bold text-[#0F3820]">
                                  Enrollment Form (PDF)
                                </span>
                                <span className="block text-[11px] text-slate-500">
                                  Preview &amp; download 7-page form
                                </span>
                              </div>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer group/nav ${
                    active
                      ? 'bg-[#E6F5EC] text-[#1F6E3D] font-semibold'
                      : 'text-slate-700 hover:text-[#1F6E3D] hover:bg-[#F4FAF6]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#319B59] rounded-full transition-transform duration-200 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1F6E3D] hover:bg-[#144D2B] active:bg-[#0F3820] rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-1.5 min-h-[40px]"
            >
              <span>Enrol Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:text-[#1F6E3D] rounded-xl hover:bg-[#F4FAF6] focus-visible:outline-2 focus-visible:outline-[#319B59] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Smooth Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E6F2EB] px-4 pt-3 pb-6 shadow-xl animate-dropdown-slide">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-left transition-colors cursor-pointer min-h-[44px] ${
                      active
                        ? 'bg-[#E6F5EC] text-[#1F6E3D] font-bold'
                        : 'text-slate-700 hover:bg-[#F4FAF6] hover:text-[#1F6E3D]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="text-[#319B59] text-xs font-semibold">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-[#1F6E3D] hover:bg-[#144D2B] rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
              >
                Make an Enquiry
              </button>
              {onOpenEnrollmentForm && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnrollmentForm();
                  }}
                  className="w-full py-3 px-4 text-center font-semibold text-sm text-[#1F6E3D] bg-[#F4FAF6] hover:bg-[#E6F5EC] border border-[#CFE8D8] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-[#319B59]" />
                  <span>Enrollment Form (PDF)</span>
                </button>
              )}
              <a
                href={SCHOOL_INFO.enrollmentFormPdfUrl}
                download="Oak_International_Enrollment_Form.pdf"
                className="w-full py-2.5 px-4 text-center font-medium text-xs text-slate-600 hover:text-[#1F6E3D] flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Direct PDF Download</span>
              </a>
              <WhatsAppButton className="w-full justify-center" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};
