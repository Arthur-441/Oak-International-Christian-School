import React, { useState } from 'react';
import { PageId } from '../types';
import { DISCIPLINE_SHOWCASES, SCHOOL_INFO } from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  BookOpen,
  Shield,
  GraduationCap,
  Sparkles,
  Trophy,
  Heart,
  CheckCircle,
  FileText,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFlierPreviewOpen, setIsFlierPreviewOpen] = useState(false);

  const categories = ['All', 'Academics', 'Character', 'Leadership', 'Life Skills', 'Activities'];

  const filteredShowcases =
    selectedCategory === 'All'
      ? DISCIPLINE_SHOWCASES
      : DISCIPLINE_SHOWCASES.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-16 lg:py-20 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block mb-2">
              School Life & Disciplines
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Life at Oak International
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Explore the educational rhythm, character-building disciplines, and extracurricular pursuits that shape our learners every day.
            </p>
          </div>
        </div>
      </section>

      {/* Official Flier & Campus Media Highlight Strip */}
      <section className="py-12 bg-[#F2F8F8] border-b border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00868F]/25 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Official Flier Showcase Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => setIsFlierPreviewOpen(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-[#00868F]/30 shadow-md hover:shadow-xl transition-all cursor-pointer max-w-[280px]"
              >
                <img
                  src="/assets/aistudio/image_99934b46.png"
                  alt="Official Oak International Christian School Admissions Flier"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#09262C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-2xs">
                  <ExternalLink className="w-4 h-4" />
                  <span>Click to Expand Flier</span>
                </div>
              </div>
            </div>

            {/* Right: Flier Description & Information */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <SchoolCrest size="sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#00868F]">
                  Official School Admissions Document
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C]">
                ACE Curriculum & Enrolment Information
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Featured above is the official Oak International Christian School admissions publication, displaying our curriculum pillars, kindergarten through Grade 12 educational pathway, self-paced learning model, and our student body.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F2F8F8] border border-[#00868F]/20">
                  <strong className="block text-[#09262C] font-semibold">Curriculum:</strong>
                  <span className="text-slate-600">Accelerated Christian Education (ACE)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F2F8F8] border border-[#00868F]/20">
                  <strong className="block text-[#09262C] font-semibold">Campus:</strong>
                  <span className="text-slate-600">Kira – Kasangati Road, Buwate</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F2F8F8] border border-[#00868F]/20">
                  <strong className="block text-[#09262C] font-semibold">Contact:</strong>
                  <span className="text-slate-600">0783 368459</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsFlierPreviewOpen(true)}
                  className="px-5 py-2.5 bg-[#00868F] hover:bg-[#00747C] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Full Size Flier</span>
                </button>
                <button
                  onClick={onOpenEnquiry}
                  className="px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Enquire About Admissions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines & School Life Cards (Pure Cards, No Stock Photos) */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Filter By Discipline
              </span>
              <p className="text-sm text-[#09262C] font-semibold">
                Showing {filteredShowcases.length} Core Areas
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#00868F] text-white shadow-2xs'
                      : 'bg-[#F2F8F8] text-slate-700 hover:bg-[#E5F1F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid with Elevated Cards & Handwriting Script */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShowcases.map((disc) => (
              <div
                key={disc.id}
                className="bg-white rounded-3xl p-8 border-2 border-[#00868F]/20 hover:border-[#00868F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00868F] bg-[#F2F8F8] px-3 py-1 rounded-full border border-[#00868F]/20">
                      {disc.category}
                    </span>
                    <span className="font-script text-base text-[#6DB33F] font-bold">
                      Oak Discipline
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#09262C] mb-3 group-hover:text-[#00868F] transition-colors">
                    {disc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {disc.description}
                  </p>

                  <div className="bg-[#F2F8F8] p-4 rounded-2xl border border-[#00868F]/15 mb-5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00868F] block">
                      Scriptural Foundation
                    </span>
                    <p className="font-script text-lg text-[#09262C] leading-snug">
                      {disc.scripturalPrinciple}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#00868F]/15">
                  <div className="text-xs font-semibold text-[#09262C] mb-2 uppercase tracking-wide">
                    Key Outcomes for Learners:
                  </div>
                  <ul className="space-y-1.5">
                    {disc.outcomes.map((out, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F] shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Enquiry Strip */}
          <div className="mt-16 bg-[#09262C] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#00868F]/30 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8]">
                Admissions Now Open
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                Book a Visit to Our Buwate Learning Center
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Experience our individualized workstations, observe our PACE curriculum in action, and schedule your child's diagnostic test.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-[#00868F] hover:bg-[#00747C] text-white text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Enrol Now
              </button>
              <WhatsAppButton size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Flier Lightbox Modal */}
      {isFlierPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsFlierPreviewOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-3 bg-[#061C20] text-white">
              <span className="text-xs font-bold text-[#00C2B8] uppercase tracking-wider">
                Official Oak International Christian School Flier
              </span>
              <button
                onClick={() => setIsFlierPreviewOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-bold cursor-pointer"
              >
                Close &times;
              </button>
            </div>
            <div className="p-3 bg-slate-900 flex justify-center">
              <img
                src="/assets/aistudio/image_99934b46.png"
                alt="Full Size Official Flier"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
