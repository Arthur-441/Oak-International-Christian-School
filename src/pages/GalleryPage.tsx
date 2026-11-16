import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { PageId, GalleryCategory } from '../types';
import { DISCIPLINE_SHOWCASES, SCHOOL_INFO, SCHOOL_LIFE_GALLERY } from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Reveal } from '../components/Reveal';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import {
  CheckCircle,
  ExternalLink,
  Maximize2,
  Camera,
  Download,
  Eye,
  X,
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenEnrollmentForm?: () => void;
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Graduation',
  'Events',
  'Co-curricular Activities',
  'Convention',
  'Sports',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenEnquiry,
  onOpenEnrollmentForm,
}) => {
  // Discipline showcase filter state
  const [selectedDisciplineCategory, setSelectedDisciplineCategory] = useState<string>('All');
  const disciplineCategories = ['All', 'Academics', 'Character', 'Leadership', 'Life Skills', 'Activities'];

  // Flier preview modal state
  const [isFlierPreviewOpen, setIsFlierPreviewOpen] = useState(false);

  // Photo gallery filter & lightbox state
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<GalleryCategory>('All');
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);

  // Filtered gallery photos based on selected category tab
  const filteredPhotos =
    activeGalleryCategory === 'All'
      ? SCHOOL_LIFE_GALLERY
      : SCHOOL_LIFE_GALLERY.filter((p) => p.category === activeGalleryCategory);

  // Filtered discipline showcases
  const filteredShowcases =
    selectedDisciplineCategory === 'All'
      ? DISCIPLINE_SHOWCASES
      : DISCIPLINE_SHOWCASES.filter((item) => item.category === selectedDisciplineCategory);

  // Lightbox navigation helpers
  const handleNextPhoto = useCallback(() => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  }, [lightboxPhotoIndex, filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
    );
  }, [lightboxPhotoIndex, filteredPhotos.length]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxPhotoIndex(null);
  }, []);

  // Lock body & html scroll when Flier modal is open (PhotoLightboxModal handles its own scroll lock)
  useEffect(() => {
    if (!isFlierPreviewOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFlierPreviewOpen(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isFlierPreviewOpen]);

  // Helper count for each category
  const getCategoryCount = (cat: GalleryCategory): number => {
    if (cat === 'All') return SCHOOL_LIFE_GALLERY.length;
    return SCHOOL_LIFE_GALLERY.filter((p) => p.category === cat).length;
  };

  return (
    <div className="w-full bg-white">
      {/* Unified Light Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F4FAF6] via-white to-[#E6F5EC] py-16 lg:py-20 border-b border-[#DCEFE2]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#319B59]/10 animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 left-12 w-40 h-40 rounded-full bg-[#319B59]/5 animate-float-gentle"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F6E3D] bg-[#E6F5EC] border border-[#CFE8D8] px-3 py-1 rounded-full mb-4">
              School Life & Photo Gallery
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3820] tracking-tight leading-tight mb-4">
              Life at Oak International
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore our real school moments — from graduation milestones and vibrant assemblies to co-curricular clubs, sports, and Christian conventions.
            </p>
          </div>
        </div>
      </section>

      {/* Official Flier & Admissions Highlight Strip */}
      <section className="py-12 sm:py-14 bg-[#F4FAF6] border-b border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#CFE8D8] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Official Flier Showcase Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div
                  onClick={() => setIsFlierPreviewOpen(true)}
                  className="group relative rounded-2xl overflow-hidden border-2 border-[#319B59]/25 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer max-w-[280px]"
                >
                  <img
                    src={SCHOOL_INFO.flierImageUrl}
                    alt="Official Oak International Christian School Admissions Flier"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#0F3820]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-2xs">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to Expand Flier</span>
                  </div>
                </div>
              </div>

              {/* Right: Flier Description & Information */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <SchoolCrest size="sm" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F6E3D]">
                    Official School Admissions Document
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820]">
                  ACE Curriculum & Enrolment Information
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Featured above is the official Oak International Christian School admissions publication, displaying our curriculum pillars, kindergarten through Grade 12 educational pathway, self-paced learning model, and our student body.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F4FAF6] border border-[#DCEFE2]">
                    <strong className="block text-[#0F3820] font-semibold">Curriculum:</strong>
                    <span className="text-slate-600">Accelerated Christian Education (ACE)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F4FAF6] border border-[#DCEFE2]">
                    <strong className="block text-[#0F3820] font-semibold">Campus:</strong>
                    <span className="text-slate-600">Kira – Kasangati Road, Buwate</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F4FAF6] border border-[#DCEFE2]">
                    <strong className="block text-[#0F3820] font-semibold">Contact:</strong>
                    <span className="text-slate-600">0783 368459</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsFlierPreviewOpen(true)}
                    className="px-5 py-2.5 bg-[#319B59] hover:bg-[#1F6E3D] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size Flier</span>
                  </button>
                  <a
                    href={SCHOOL_INFO.enrollmentFormPdfUrl}
                    download="Oak_International_Enrollment_Form.pdf"
                    className="px-5 py-2.5 bg-[#1F6E3D] hover:bg-[#0F3820] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-[#E6F5EC]" />
                    <span>Download Enrollment Form (PDF)</span>
                  </a>
                  {onOpenEnrollmentForm && (
                    <button
                      onClick={onOpenEnrollmentForm}
                      className="px-4 py-2.5 border border-[#CFE8D8] bg-[#F4FAF6] hover:bg-[#E6F5EC] text-[#0F3820] text-xs font-semibold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#319B59]" />
                      <span>Preview Form</span>
                    </button>
                  )}
                  <button
                    onClick={onOpenEnquiry}
                    className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Enquire About Admissions</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================== */}
      {/* School Life Photo Gallery Section */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading & Category Filter Tabs */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#DCEFE2]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-[#319B59]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1F6E3D]">
                    School Life Photo Gallery
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F3820]">
                  Capturing Oak Moments
                </h2>
                <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                  Browse real photographs from our campus life, graduations, spiritual conventions, co-curricular workshops, and sports.
                </p>
              </div>

              {/* Filter Pill Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {GALLERY_CATEGORIES.map((cat) => {
                  const count = getCategoryCount(cat);
                  const isActive = activeGalleryCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveGalleryCategory(cat);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#319B59] text-white shadow-sm ring-2 ring-[#319B59]/25'
                          : 'bg-[#F4FAF6] text-slate-700 hover:bg-[#E6F5EC] border border-[#DCEFE2]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-white text-[#1F6E3D]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Gallery Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredPhotos.map((photo, index) => (
              <Reveal key={photo.id} delayMs={(index % 4) * 70}>
                <div
                  onClick={() => setLightboxPhotoIndex(index)}
                  className="group relative h-full bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#319B59]/60 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image Container with Portrait-Safe Top Framing */}
                  <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#F4FAF6]">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-top origin-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Subtle green overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F3820]/85 via-[#0F3820]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                      <div className="flex justify-end">
                        <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center text-white shadow-xs">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#B6E6C6] block mb-0.5">
                          {photo.category}
                        </span>
                        <p className="text-xs font-semibold text-white line-clamp-1">
                          Click to view full photo
                        </p>
                      </div>
                    </div>

                    {/* Top-left category tag badge (always visible) */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-[#1F6E3D] backdrop-blur-xs shadow-xs border border-[#CFE8D8]">
                        {photo.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Caption Footer */}
                  <div className="p-4 flex flex-col justify-between flex-grow bg-white">
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors line-clamp-1">
                        {photo.title}
                      </h3>
                      {photo.caption && (
                        <p className="text-slate-600 text-xs mt-1 line-clamp-3 leading-relaxed">
                          {photo.caption}
                        </p>
                      )}
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#1F6E3D] font-semibold">
                      <span className="group-hover:underline inline-flex items-center gap-1">
                        View details
                      </span>
                      <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-[#319B59] transition-colors" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Showing Count Information */}
          <div className="mt-8 text-center text-xs text-slate-500">
            Showing {filteredPhotos.length} of {SCHOOL_LIFE_GALLERY.length} authentic school photographs &bull; Oak International Christian School
          </div>
        </div>
      </section>

      {/* Disciplines & School Life Cards */}
      <section className="py-16 sm:py-20 bg-[#FAFBF8] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Controls */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#DCEFE2]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F6E3D] block">
                  Filter By Discipline
                </span>
                <p className="text-sm text-[#0F3820] font-semibold">
                  Showing {filteredShowcases.length} Core Areas
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {disciplineCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedDisciplineCategory(cat)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      selectedDisciplineCategory === cat
                        ? 'bg-[#319B59] text-white shadow-2xs'
                        : 'bg-[#F4FAF6] text-slate-700 hover:bg-[#E6F5EC] border border-[#DCEFE2]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredShowcases.map((disc, idx) => (
              <Reveal key={disc.id} delayMs={(idx % 3) * 80}>
                <div className="h-full bg-white rounded-3xl p-8 border border-[#DCEFE2] hover:border-[#319B59]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6E3D] bg-[#F4FAF6] px-3 py-1 rounded-full border border-[#CFE8D8]">
                        {disc.category}
                      </span>
                      <span className="font-script text-base text-[#319B59] font-bold">
                        Oak Discipline
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-3 group-hover:text-[#319B59] transition-colors">
                      {disc.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {disc.description}
                    </p>

                    <div className="bg-[#F4FAF6] p-4 rounded-2xl border border-[#DCEFE2] mb-5 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F6E3D] block">
                        Scriptural Foundation
                      </span>
                      <p className="font-script text-lg text-[#0F3820] leading-snug">
                        {disc.scripturalPrinciple}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DCEFE2]">
                    <div className="text-xs font-semibold text-[#0F3820] mb-2 uppercase tracking-wide">
                      Key Outcomes for Learners:
                    </div>
                    <ul className="space-y-1.5">
                      {disc.outcomes.map((out, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#319B59] shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Bright Light-Green Enquiry Strip */}
          <Reveal className="mt-16">
            <div className="bg-gradient-to-r from-[#F4FAF6] to-[#E6F5EC] text-[#0F3820] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#CFE8D8] shadow-xs">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1F6E3D] block">
                  Admissions Now Open
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#0F3820]">
                  Book a Visit to Our Buwate Learning Center
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  Experience our individualized workstations, observe our PACE curriculum in action, and schedule your child&apos;s diagnostic test.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  onClick={onOpenEnquiry}
                  className="px-6 py-3.5 bg-[#1F6E3D] hover:bg-[#0F3820] text-white text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Enrol Now
                </button>
                <WhatsAppButton size="md" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portal Photo Lightbox Modal (Viewport-Locked, Immune to Scroll) */}
      <PhotoLightboxModal
        photos={filteredPhotos}
        activeIndex={lightboxPhotoIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Portal Flier Lightbox Modal */}
      {isFlierPreviewOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Official Oak International Christian School Flier"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 sm:p-6 backdrop-blur-md overscroll-contain"
            onClick={() => setIsFlierPreviewOpen(false)}
          >
            <div
              className="relative max-w-2xl w-full max-h-[94dvh] bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#DCEFE2] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#F4FAF6] border-b border-[#DCEFE2] shrink-0">
                <span className="text-xs font-bold text-[#1F6E3D] uppercase tracking-wider">
                  Official Oak International Christian School Flier
                </span>
                <button
                  type="button"
                  onClick={() => setIsFlierPreviewOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-[#0F3820] hover:bg-[#E6F5EC] rounded-full transition-colors cursor-pointer"
                  aria-label="Close flier preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 min-h-0 p-3 bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={SCHOOL_INFO.flierImageUrl}
                  alt="Full Size Official Flier"
                  referrerPolicy="no-referrer"
                  className="max-h-[calc(94dvh-84px)] max-w-full w-auto h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
