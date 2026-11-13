import React from 'react';
import { PageId } from '../types';
import { GRADE_LEVELS, CURRICULUM_PARTNERS, SCHOOL_INFO } from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  BookOpen,
  CheckCircle,
  HelpCircle,
  Award,
  ArrowRight,
  Shield,
  Layers,
  GraduationCap,
  Sparkles,
  FileText,
  Clock,
  Compass,
  Download,
  Eye,
} from 'lucide-react';

interface AcademicsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenEnrollmentForm?: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenEnrollmentForm,
}) => {
  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-16 lg:py-20 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block mb-2">
              Curriculum & Learning Pathway
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              An Individualised Approach to Learning.
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Accelerated Christian Education (ACE) — empowering each child to achieve true concept mastery at their own pace, grounded in Biblical truth.
            </p>
          </div>
        </div>
      </section>

      {/* ACE Curriculum Overview (Card-Based, No Stock Photos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block">
                The ACE Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09262C] leading-tight">
                Mastery Over Memorisation, Character Over Pressure
              </h2>

              <div className="bg-[#F2F8F8] border border-[#00868F]/30 rounded-2xl p-6 text-slate-800">
                <p className="text-base sm:text-lg font-serif italic leading-relaxed text-[#09262C]">
                  "{SCHOOL_INFO.aceSummary}"
                </p>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Rather than forcing every student to move together regardless of comprehension, the Accelerated Christian Education curriculum divides each academic subject into bite-sized, self-instructional workbooks known as <strong>PACEs (Packets of Accelerated Christian Education)</strong>.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Students must achieve a rigorous mastery score before progressing to the next PACE. This ensures that foundational gaps are identified and resolved immediately, creating confident, independent learners who excel at higher levels of education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F2F8F8] border border-[#00868F]/20">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] mt-1 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-[#09262C] block font-semibold text-sm">Individualised Pace</strong>
                    <span className="text-slate-600">No pressure to rush or wait for the class average</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F2F8F8] border border-[#00868F]/20">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] mt-1 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-[#09262C] block font-semibold text-sm">Biblical Integration</strong>
                    <span className="text-slate-600">Scriptural character traits in every subject PACE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: ACE Learning Center Structure */}
            <div className="lg:col-span-5">
              <div className="bg-[#09262C] text-white rounded-3xl p-8 border border-[#00868F]/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00868F] text-white flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">The ACE Advantage</h3>
                    <p className="text-xs text-[#00C2B8]">Mastery-Based Education</p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DB33F] mt-2 shrink-0" />
                    <span><strong>Dedicated Workstation "Offices":</strong> Each learner has an individual study carrel that reduces visual distractions, instilling focus and personal responsibility.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DB33F] mt-2 shrink-0" />
                    <span><strong>Daily Goal-Setting & Flag System:</strong> Learners set personal page goals every morning and use the classic desk flag system to request supervisor guidance or score PACEs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DB33F] mt-2 shrink-0" />
                    <span><strong>Diagnostic Placement:</strong> Accurately pinpoints where the learner is academically in reading, English, and math, prescribing an individualized path without guessing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6DB33F] mt-2 shrink-0" />
                    <span><strong>University Readiness via ICCE:</strong> Recognized pathways to prestigious universities in Uganda and internationally via the International Certificate of Christian Education.</span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-3 bg-[#00868F] hover:bg-[#00747C] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
                  >
                    Ask About Our Diagnostic Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 GRADE LEVELS PATHWAY - Pure Card Layout (No Stock Photos) */}
      <section className="py-20 bg-[#F2F8F8] border-y border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
              Academic Progression
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09262C] mt-2">
              Our 4-Stage Educational Pathway
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              From early foundation through pre-school and high school graduation, each stage is structured for confidence, capability, and character.
            </p>
          </div>

          <div className="space-y-8">
            {GRADE_LEVELS.map((level, index) => (
              <div
                key={level.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00868F]/20 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Level Tag & Stage Number */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#00868F] text-white font-bold text-xs flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00868F] bg-[#F2F8F8] px-2.5 py-1 rounded-md border border-[#00868F]/20">
                      {level.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                      {level.name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                      Age Range: {level.ageRange}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {level.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onOpenEnquiry}
                      className="text-xs font-bold text-[#00868F] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enquire about {level.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Highlights Card */}
                <div className="lg:col-span-4 bg-[#F2F8F8] p-6 rounded-2xl border border-[#00868F]/20 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#09262C]">
                    Key Programme Highlights:
                  </h4>
                  <ul className="space-y-2.5">
                    {level.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#6DB33F] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Replaced Image with Milestone & Outcomes Card */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#061C20] to-[#09262C] text-white p-6 rounded-2xl border border-[#00868F]/30 flex flex-col justify-between h-full shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#00C2B8] uppercase tracking-wider">
                        Academic Milestone
                      </span>
                      <span className="font-script text-base text-[#6DB33F] font-bold">
                        Pillar of Mastery
                      </span>
                    </div>
                    <p className="font-script text-lg text-slate-100 leading-snug">
                      "{level.milestone}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#6DB33F] font-semibold flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      <span>Mastery Verified & Recorded</span>
                    </div>
                    {index === 3 && (
                      <button
                        onClick={() => {
                          onNavigate('gallery');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-[#00C2B8] hover:underline font-bold text-[11px] cursor-pointer"
                      >
                        View Graduation &rarr;
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC TEST CALLOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white rounded-3xl p-8 sm:p-12 border border-[#00868F]/30 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8]">
                  Admissions Diagnostic Testing
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Wondering Where Your Child Fits?
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Whether transitioning from UNEB, Cambridge, or another international curriculum, our comprehensive Diagnostic Test pinpoints your child's exact reading, mathematical, and comprehension levels without guesswork.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenEnquiry}
                    className="px-5 py-3 bg-[#00868F] hover:bg-[#00747C] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Book a Diagnostic Consultation
                  </button>
                  <a
                    href={SCHOOL_INFO.enrollmentFormPdfUrl}
                    download="Oak_International_Enrollment_Form.pdf"
                    className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/25 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#00C2B8]" />
                    <span>Enrollment Form (PDF)</span>
                  </a>
                  {onOpenEnrollmentForm && (
                    <button
                      type="button"
                      onClick={onOpenEnrollmentForm}
                      className="px-4 py-3 bg-white/5 hover:bg-white/15 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-white/15 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#00C2B8]" />
                      <span>Preview</span>
                    </button>
                  )}
                  <WhatsAppButton size="md" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl group">
                  <div className="aspect-[4/3] bg-slate-900">
                    <img
                      src="https://i.ibb.co/hxgJHZ0g/Whats-App-Image-2026-11-11-at-10-28-37-AM-1.jpg"
                      alt="Career Exploration - Inspiring Young Minds to Dream Big and Explore Different Professions"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09262C]/90 via-[#09262C]/30 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C2B8] block mb-0.5">
                      Career Exploration
                    </span>
                    <p className="text-xs font-semibold text-white">
                      Inspiring Young Minds to Dream Big and Explore Different Professions
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CURRICULUM PARTNERS WITH REAL CROPPED LOGOS */}
      <section className="py-16 bg-[#F2F8F8] border-t border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
              Accreditation & Partners
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C] mt-1">
              Global Curriculum Affiliations
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Our educational partners ensure international recognition and seamless progression into higher education worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {CURRICULUM_PARTNERS.map((partner) => (
              <div
                key={partner.short}
                className="bg-white p-6 rounded-2xl border-2 border-[#00868F]/20 hover:border-[#00868F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Cropped Partner Logo */}
                  <div className="h-20 w-full flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-50/70 border border-slate-100 group-hover:bg-[#F2F8F8] transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <h4 className="font-serif font-bold text-lg text-[#09262C] mb-1 group-hover:text-[#00868F] transition-colors">
                    {partner.short}
                  </h4>
                  <div className="text-xs font-semibold text-slate-700 mb-2 leading-snug">
                    {partner.name}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                  <span className="font-script text-base text-[#00868F] font-bold block leading-tight">
                    "{partner.motto}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

