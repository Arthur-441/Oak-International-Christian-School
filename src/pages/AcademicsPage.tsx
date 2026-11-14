import React from 'react';
import { PageId } from '../types';
import { GRADE_LEVELS, CURRICULUM_PARTNERS, SCHOOL_INFO } from '../data/schoolData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Reveal } from '../components/Reveal';
import {
  BookOpen,
  CheckCircle,
  Award,
  ArrowRight,
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
    <div className="w-full bg-white">
      {/* Unified Light Page Header Banner (No Slideshow) */}
      <section className="relative bg-gradient-to-br from-[#F4FAF6] via-white to-[#E6F5EC] text-[#0F3820] py-16 lg:py-20 border-b border-[#DCEFE2] overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden sm:block -top-16 -right-16 absolute w-64 h-64 rounded-full bg-[#319B59]/10 animate-float-slow pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block mb-2">
              Curriculum &amp; Learning Pathway
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3820] tracking-tight leading-tight mb-4">
              An Individualised Approach to Learning.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Accelerated Christian Education (ACE) &mdash; empowering each child to achieve true concept mastery at their own pace, grounded in Biblical truth.
            </p>
          </div>
        </div>
      </section>

      {/* ACE Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block">
                  The ACE Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] leading-tight">
                  Mastery Over Memorisation, Character Over Pressure
                </h2>

                <div className="bg-[#F4FAF6] border border-[#DCEFE2] rounded-2xl p-6 text-slate-800">
                  <p className="text-base sm:text-lg font-serif italic leading-relaxed text-[#0F3820]">
                    &ldquo;{SCHOOL_INFO.aceSummary}&rdquo;
                  </p>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Rather than forcing every student to move together regardless of comprehension, the Accelerated Christian Education curriculum divides each academic subject into bite-sized, self-instructional workbooks known as <strong>PACEs (Packets of Accelerated Christian Education)</strong>.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Students must achieve a rigorous mastery score before progressing to the next PACE. This ensures that foundational gaps are identified and resolved immediately, creating confident, independent learners who excel at higher levels of education.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFBF8] border border-[#DCEFE2]">
                    <CheckCircle className="w-4 h-4 text-[#319B59] mt-1 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#0F3820] block font-semibold text-sm">Individualised Pace</strong>
                      <span className="text-slate-600">No pressure to rush or wait for the class average</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFBF8] border border-[#DCEFE2]">
                    <CheckCircle className="w-4 h-4 text-[#319B59] mt-1 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#0F3820] block font-semibold text-sm">Biblical Integration</strong>
                      <span className="text-slate-600">Scriptural character traits in every subject PACE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: ACE Advantage - Light Crisp Surface */}
              <div className="lg:col-span-5">
                <div className="bg-[#F4FAF6] text-[#0F3820] rounded-3xl p-8 border border-[#CFE8D8] shadow-md space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#319B59] text-white flex items-center justify-center font-bold shadow-2xs">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0F3820]">The ACE Advantage</h3>
                      <p className="text-xs font-semibold text-[#319B59]">Mastery-Based Education</p>
                    </div>
                  </div>

                  <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                      <span>
                        <strong>Dedicated Workstation &ldquo;Offices&rdquo;:</strong> Each learner has an individual study carrel that reduces visual distractions, instilling focus and personal responsibility.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                      <span>
                        <strong>Daily Goal-Setting &amp; Flag System:</strong> Learners set personal page goals every morning and use the classic desk flag system to request supervisor guidance or score PACEs.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                      <span>
                        <strong>Diagnostic Placement:</strong> Accurately pinpoints where the learner is academically in reading, English, and math, prescribing an individualized path without guessing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                      <span>
                        <strong>University Readiness via ICCE:</strong> Recognized pathways to prestigious universities in Uganda and internationally via the International Certificate of Christian Education.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="w-full py-3.5 bg-[#1F6E3D] hover:bg-[#144D2B] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer text-center min-h-[44px]"
                    >
                      Have any questions for us?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 GRADE LEVELS PATHWAY */}
      <section className="py-20 bg-[#F4FAF6] border-y border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Academic Progression
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] mt-2">
                Our 4-Stage Educational Pathway
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                From early foundation through pre-school and high school graduation, each stage is structured for confidence, capability, and character.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {GRADE_LEVELS.map((level, index) => (
              <Reveal key={level.id} delayMs={index * 70}>
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCEFE2] hover:border-[#319B59]/50 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Level Tag & Stage Number */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#319B59] text-white font-bold text-xs flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1F6E3D]">
                        {level.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
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
                        type="button"
                        onClick={onOpenEnquiry}
                        className="text-xs font-bold text-[#1F6E3D] hover:text-[#319B59] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Enquire about {level.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="lg:col-span-4 bg-[#FAFBF8] p-6 rounded-2xl border border-[#DCEFE2] space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F3820]">
                      Key Programme Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {level.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#319B59] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Milestone Card - Soft Mint Highlight */}
                  <div className="lg:col-span-3 bg-[#E6F5EC] text-[#0F3820] p-6 rounded-2xl border border-[#BFE3CC] flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-[#1F6E3D] uppercase tracking-wider">
                          Academic Milestone
                        </span>
                        <span className="font-script text-base text-[#319B59] font-bold">
                          Pillar of Mastery
                        </span>
                      </div>
                      <p className="font-script text-lg text-[#0F3820] leading-snug">
                        &ldquo;{level.milestone}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#319B59]/20 text-[11px] text-[#1F6E3D] font-semibold flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#319B59]" />
                        <span>Mastery Verified &amp; Recorded</span>
                      </div>
                      {index === 3 && (
                        <button
                          type="button"
                          onClick={() => {
                            onNavigate('gallery');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-[#1F6E3D] hover:underline font-bold text-[11px] cursor-pointer"
                        >
                          View Graduation &rarr;
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC TEST CALLOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-[#F4FAF6] via-white to-[#E6F5EC] text-[#0F3820] rounded-3xl p-8 sm:p-12 border border-[#CFE8D8] shadow-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                    Admissions Diagnostic Testing
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820]">
                    Wondering Where Your Child Fits?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Whether transitioning from UNEB, Cambridge, or another international curriculum, our comprehensive Diagnostic Test pinpoints your child&apos;s exact reading, mathematical, and comprehension levels without guesswork.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="px-5 py-3 bg-[#1F6E3D] hover:bg-[#144D2B] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
                    >
                      Book a Diagnostic Consultation
                    </button>
                    <a
                      href={SCHOOL_INFO.enrollmentFormPdfUrl}
                      download="Oak_International_Enrollment_Form.pdf"
                      className="px-4 py-3 bg-white hover:bg-[#FAFBF8] text-[#1F6E3D] font-semibold text-xs sm:text-sm rounded-xl border border-[#CFE8D8] transition-colors inline-flex items-center gap-1.5 cursor-pointer min-h-[44px]"
                    >
                      <Download className="w-4 h-4 text-[#319B59]" />
                      <span>Enrollment Form (PDF)</span>
                    </a>
                    {onOpenEnrollmentForm && (
                      <button
                        type="button"
                        onClick={onOpenEnrollmentForm}
                        className="px-4 py-3 bg-white hover:bg-[#FAFBF8] text-slate-700 font-semibold text-xs sm:text-sm rounded-xl border border-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer min-h-[44px]"
                      >
                        <Eye className="w-4 h-4 text-[#319B59]" />
                        <span>Preview</span>
                      </button>
                    )}
                    <WhatsAppButton size="md" />
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-[#CFE8D8] shadow-md group">
                    <div className="aspect-[4/3] bg-[#F4FAF6]">
                      <img
                        src="https://i.ibb.co/hxgJHZ0g/Whats-App-Image-2026-11-11-at-10-28-37-AM-1.jpg"
                        alt="Future Engineers & Builders - Students Exploring Professions"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A7E6BE] block mb-0.5">
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
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM PARTNERS */}
      <section className="py-16 bg-[#F4FAF6] border-t border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Accreditation &amp; Partners
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820] mt-1">
                Global Curriculum Affiliations
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Our educational partners ensure international recognition and seamless progression into higher education worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {CURRICULUM_PARTNERS.map((partner, idx) => (
              <Reveal key={partner.short} delayMs={idx * 70}>
                <div className="h-full bg-white p-6 rounded-2xl border border-[#DCEFE2] hover:border-[#319B59] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="h-20 w-full flex items-center justify-center p-3 mb-4 rounded-xl bg-[#FAFBF8] border border-slate-100 group-hover:bg-[#F4FAF6] transition-colors">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>

                    <h4 className="font-serif font-bold text-lg text-[#0F3820] mb-1 group-hover:text-[#319B59] transition-colors">
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
                    <span className="font-script text-base text-[#1F6E3D] font-bold block leading-tight">
                      &ldquo;{partner.motto}&rdquo;
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
