import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolCrest } from './SchoolCrest';
import { WhatsAppButton } from './WhatsAppButton';
import { Phone, Mail, MessageCircle, Menu, X, FileText, ArrowRight, Instagram, Facebook } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenProspectus?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
  onOpenProspectus,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics & ACE' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'School Life' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Strip with Flier Brand Colors */}
      <div className="bg-[#061C20] text-slate-300 text-xs py-2 px-4 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#00C2B8] font-medium tracking-wide">
              <span>Buwate Campus:</span>
              <span className="text-slate-300">Kira-Kasangati Road, Wakiso</span>
            </span>
            <a
              href={SCHOOL_INFO.phoneTel}
              className="flex items-center gap-1.5 text-white hover:text-[#00C2B8] transition-colors font-medium"
              title="Call School Admissions"
            >
              <Phone className="w-3.5 h-3.5 text-[#6DB33F]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            <a
              href={SCHOOL_INFO.emailMailto}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-[#00C2B8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#6DB33F]" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3.5 text-xs ml-auto">
            {/* Social Media Links */}
            <div className="flex items-center gap-2 border-r border-[#0A333A] pr-3.5 mr-1">
              <a
                href={SCHOOL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Oak International on Instagram (@oicacademyug)"
                className="w-6 h-6 rounded-md bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Oak International on Facebook (OICAcademyUg)"
                className="w-6 h-6 rounded-md bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {onOpenProspectus ? (
              <button
                onClick={onOpenProspectus}
                className="hidden lg:flex items-center gap-1.5 text-slate-200 hover:text-[#00C2B8] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6DB33F]" />
                <span>School Guide (PDF)</span>
              </button>
            ) : (
              <a
                href={SCHOOL_INFO.prospectusPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 text-slate-200 hover:text-[#00C2B8] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#6DB33F]" />
                <span>School Guide (PDF)</span>
              </a>
            )}
            <WhatsAppButton size="sm" />
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Official Badge from Flier */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none cursor-pointer"
          >
            <SchoolCrest size="md" variant="transparent" />
            <div>
              <span className="block font-serif font-bold text-lg sm:text-xl text-[#09262C] tracking-tight leading-tight group-hover:text-[#00868F] transition-colors whitespace-nowrap">
                Oak International
              </span>
              <span className="block text-[11px] font-bold text-[#00868F] tracking-wider uppercase leading-none">
                Christian School
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'text-[#00868F] font-bold'
                      : 'text-slate-600 hover:text-[#00868F]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00868F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Flier Teal Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#00868F] hover:bg-[#00747C] active:bg-[#005F66] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Enrol Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-left transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#F2F8F8] text-[#00868F] font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="text-[#00868F] text-xs font-bold uppercase">Current</span>}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 text-center font-semibold text-sm text-white bg-[#00868F] hover:bg-[#00747C] rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Make an Enquiry
              </button>
              <WhatsAppButton className="w-full justify-center" />

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={SCHOOL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 text-center text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 text-center text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenProspectus) onOpenProspectus();
                }}
                className="w-full py-2 text-center text-xs text-slate-600 hover:text-slate-900 underline flex items-center justify-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6DB33F]" />
                <span>View School Information Guide (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
