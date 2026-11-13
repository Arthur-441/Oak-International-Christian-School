import React from 'react';
import { PageId } from '../types';
import {
  SCHOOL_INFO,
  FLIER_PILLARS,
  CORE_PHILOSOPHY,
  CORE_VALUES,
  EXTRACURRICULAR_ACTIVITIES,
  DISCIPLINE_SHOWCASES,
  CURRICULUM_PARTNERS,
  ADMISSION_STEPS,
  GRADUATION_GALLERY,
} from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  ArrowRight,
  BookOpen,
  Shield,
  GraduationCap,
  Heart,
  CheckCircle,
  FileText,
  Compass,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Check,
  Download,
  Eye,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
  onOpenEnrollmentForm?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenEnrollmentForm,
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION - Forest Green & Oak Leaf Green Color Scheme */}
      <section className="relative bg-gradient-to-br from-[#071E12] via-[#0D2E1B] to-[#14532D] text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle Geometric Background Waves matching Flier Style */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="10" cy="10" r="40" fill="#1B7A43" />
            <circle cx="90" cy="80" r="50" fill="#6DB33F" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge & Tagline */}
              <div className="flex items-center gap-3">
                <SchoolCrest size="md" variant="dark" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#68D37E] block">
                    Oak International Christian School
                  </span>
                  <span className="text-xs text-slate-300 font-serif italic">
                    "{SCHOOL_INFO.tagline}"
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] text-balance">
                Raising Tomorrow's Leaders Through{' '}
                <span className="text-[#68D37E]">Christ-Centred Education.</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                Discover a personalised, mastery-based Christian learning environment where every
                learner is equipped with the knowledge, skills and Godly character to make a
                difference.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#1B7A43] hover:bg-[#156334] shadow-lg shadow-[#1B7A43]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Enrol Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <WhatsAppButton size="md" />

                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore School</span>
                </button>
              </div>

              {/* Flier Bullet Strips */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6DB33F]" />
                  <span>Kindergarten to Grade 12</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6DB33F]" />
                  <span>Self-Paced Learning</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-2 h-2 rounded-full bg-[#6DB33F]" />
                  <span>Individualised Instruction</span>
                </div>
              </div>
            </div>

            {/* Right Card: Modern Flier Feature Showcase Card (No Stock Photos) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#1B7A43]/30 text-slate-800 space-y-6 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B7A43]/10 rounded-bl-full pointer-events-none" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#1B7A43] block">
                      Official Curriculum
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0D2E1B]">
                      ACE Curriculum
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-[#F2F9F4] p-1.5 border-2 border-[#1B7A43] flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src="/assets/aistudio/oak_school_logo_transparent.png"
                      alt="Oak International Badge"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* The 3 Core Flier Pillars Styled with Authentic Handwritten Marker Font from Flier */}
                <div className="space-y-3.5">
                  {FLIER_PILLARS.map((p, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-gradient-to-r from-[#F2F9F4] to-white border border-[#1B7A43]/25 hover:border-[#1B7A43] transition-all shadow-2xs group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#1B7A43] text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 group-hover:bg-[#6DB33F] transition-colors">
                          <Check className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-marker text-lg sm:text-xl text-[#0D2E1B] uppercase tracking-wide leading-tight group-hover:text-[#1B7A43] transition-colors">
                            {p.title}
                          </div>
                          <div className="font-script text-base text-[#1B7A43] font-bold leading-tight mt-0.5">
                            {p.highlight}
                          </div>
                          <p className="text-xs text-slate-600 leading-snug mt-1">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call / WhatsApp Banner using uploaded WhatsApp button */}
                <div className="p-4 rounded-2xl bg-[#0D2E1B] text-white space-y-3 border border-[#1B7A43]/30 shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#68D37E] font-bold block">
                        Admissions Desk &middot; Buwate
                      </span>
                      <a
                        href={SCHOOL_INFO.phoneTel}
                        className="font-serif text-lg font-bold text-white hover:text-[#68D37E] transition-colors"
                      >
                        {SCHOOL_INFO.phone}
                      </a>
                    </div>
                    <span className="text-[11px] text-slate-300 font-serif italic text-right">
                      Kira – Kasangati Rd
                    </span>
                  </div>

                  <WhatsAppButton size="md" className="w-full justify-center" />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Step by Step (3 yrs) to Grade 12</span>
                  <button
                    onClick={() => {
                      onNavigate('academics');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#1B7A43] font-bold hover:underline cursor-pointer"
                  >
                    View Academic Stages &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADMISSIONS BULLETIN STRIP */}
      <section className="bg-[#156334] py-3.5 px-4 text-white text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <span className="font-bold uppercase tracking-wider text-slate-900 bg-white px-2 py-0.5 rounded text-[11px]">
              Admissions
            </span>
            <span className="text-white font-medium">
              Diagnostic Placement Assessments ongoing at Buwate Campus for all grade levels.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenEnquiry}
              className="text-[#E2F3E7] hover:text-white font-semibold underline cursor-pointer"
            >
              Schedule Diagnostic Test
            </button>
            <span className="opacity-40 hidden sm:inline">|</span>
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-bold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3. WELCOME & PHILOSOPHY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F9F4] border border-[#1B7A43]/30 text-[#1B7A43] text-xs font-bold uppercase tracking-wider">
                <span>Welcome to Oak International Christian School</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2E1B] font-bold leading-tight">
                An Educational Experience That Nurtures an Outstanding Leader
              </h2>
              <div className="w-16 h-1 bg-[#1B7A43] rounded-full" />
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                {SCHOOL_INFO.welcomeIntro}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Located along Kira–Kasangati Road in Buwate, our campus provides a tranquil, focused atmosphere where learners master concepts with joy and develop deep-seated Christian character.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#1B7A43]/25 shadow-xl group">
                <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src="https://i.ibb.co/x8Rwk7LM/Whats-App-Image-2026-11-11-at-10-41-52-AM-2.jpg"
                    alt="Oak International Christian School Campus Community"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Philosophy Cards with Enhanced Handwriting Annotations & Visual Beauty */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PHILOSOPHY.map((item, idx) => {
              const scriptSubtitles = [
                'Mastery & Self-Paced Instruction',
                'Biblical Truth In Daily Life',
                'Trained for Today, Ready for Tomorrow'
              ];
              const scriptTags = [
                'No Concept Gaps Left Behind',
                'Proverbs 22:6 Character',
                'John Maxwell Tenet'
              ];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-8 border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle Top Wave/Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#F2F9F4] rounded-bl-full pointer-events-none group-hover:bg-[#E2F3E7] transition-colors" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1B7A43] to-[#14532D] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                        0{idx + 1}
                      </div>
                      <span className="font-script text-lg font-bold text-[#1B7A43]">
                        {scriptTags[idx]}
                      </span>
                    </div>

                    <span className="font-script text-2xl text-[#1B7A43] font-bold block mb-1 tracking-wide">
                      {scriptSubtitles[idx]}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-[#0D2E1B] mb-3 group-hover:text-[#1B7A43] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#1B7A43]/15 flex items-center gap-2 text-xs text-[#1B7A43] font-semibold bg-[#F2F9F4]/60 p-3 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                    <span>{item.principle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VISION, MISSION & GOAL SECTION */}
      <section className="py-20 bg-[#F2F9F4] border-y border-[#1B7A43]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-[#1B7A43]/20 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#1B7A43] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0D2E1B]">
                  Epitome of Transformation
                </h3>
                <p className="font-serif text-xl text-[#1B7A43] italic font-semibold leading-relaxed pt-2">
                  "{SCHOOL_INFO.vision}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nurturing every learner in Christ-like character and academic mastery so their lives stand as a testimony of purposeful transformation.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6DB33F]">
                <CheckCircle className="w-4 h-4" />
                <span>Christ-Centred Transformation</span>
              </div>
            </div>

            {/* Card 2: Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-[#1B7A43]/20 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#1B7A43] text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0D2E1B]">
                  Equipping Each Learner
                </h3>
                <p className="font-serif text-lg text-slate-800 italic leading-relaxed pt-2">
                  "{SCHOOL_INFO.mission}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Through balanced academic rigor and comprehensive physical and extracurricular activities, we anchor our students in Biblical truth so they become grounded, self-disciplined individuals.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6DB33F]">
                <CheckCircle className="w-4 h-4" />
                <span>Basing on the Word of God</span>
              </div>
            </div>

            {/* Card 3: Goal & Leadership Vision */}
            <div className="bg-gradient-to-br from-[#071E12] to-[#14532D] text-white rounded-3xl p-8 sm:p-9 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#68D37E] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Our Goal</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Developing Transformational Leaders
                </h3>
                <p className="font-serif text-xl text-[#E2F3E7] font-semibold leading-relaxed pt-2">
                  "{SCHOOL_INFO.goal}"
                </p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  We seek to provide an educational experience that will nurture an outstanding leader equipped to excel at university levels and impact society with integrity.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-[#6DB33F]">
                <CheckCircle className="w-4 h-4" />
                <span>God-Fearing &middot; Dependable &middot; Transformational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIDING CONVICTIONS - OUR CORE VALUES */}
      <section className="py-20 bg-[#0D2E1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#68D37E]">
              Guiding Convictions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-white">
              Our Core Values
            </h2>
            <p className="text-slate-300 text-sm mt-3">
              The Biblical virtues of Godliness, Integrity, Care and Excellence that anchor our daily life and learning at Oak International.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComp =
                val.title === 'Godliness'
                  ? Sparkles
                  : val.title === 'Integrity'
                  ? Shield
                  : val.title === 'Care'
                  ? Heart
                  : Award;
              return (
                <div
                  key={val.id}
                  className="bg-[#071E12]/80 rounded-2xl p-7 border border-[#1B7A43]/30 flex flex-col justify-between hover:border-[#68D37E]/60 transition-colors"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#1B7A43]/30 border border-[#68D37E]/30 text-[#68D37E] flex items-center justify-center mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {val.title}
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-5">
                      {val.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#68D37E]">
                      {val.tag}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase">Oak Value</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ACADEMICS PREVIEW - Beautiful Card Layout (No Stock Photos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B7A43] block">
                Academics & ACE Curriculum
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2E1B] font-bold leading-tight">
                An Individualised Approach to Learning
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {SCHOOL_INFO.aceSummary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-[#F2F9F4] border border-[#1B7A43]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>Step by Step (3 years):</strong> Introduction to school environment and independence</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F9F4] border border-[#1B7A43]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>Preschool (4–5 years):</strong> Concepts preparing children to "be ready to read"</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F9F4] border border-[#1B7A43]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>ABC's with ACE and Christi (5–6 years):</strong> Multisensory phonetics program</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F9F4] border border-[#1B7A43]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>Grade 1–12:</strong> Self-paced mastery leading to universities in Uganda and abroad</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-[#1B7A43] hover:bg-[#156334] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Academic Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Diagnostic Test Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#0D2E1B] text-white rounded-3xl p-8 sm:p-10 border border-[#1B7A43]/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1B7A43] text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">Diagnostic Testing</h3>
                    <p className="text-xs text-[#68D37E]">Personalised Placement</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Our diagnostic assessment accurately identifies the learner's current reading, mathematical, and concept comprehension levels. This eliminates knowledge gaps and ensures an exact curriculum prescription.
                </p>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6DB33F]" />
                    <span>No student held back by class medians</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6DB33F]" />
                    <span>100% Concept Mastery testing before advancing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6DB33F]" />
                    <span>University exit routes both in Uganda and abroad</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full py-3 bg-[#1B7A43] hover:bg-[#156334] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer text-center"
                  >
                    Have any questions for us?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRADUATION CELEBRATIONS SPOTLIGHT - Real Students in Caps & Gowns */}
      <section className="py-20 bg-[#F2F9F4] border-t border-[#1B7A43]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2E1B] font-bold">
              Graduation at Oak International
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Honoring our students' diligence, character, and academic mastery as they complete their learning stages and prepare for higher education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GRADUATION_GALLERY.filter((photo) => ['grad-1', 'grad-2', 'grad-4'].includes(photo.id)).map((photo) => (
              <div
                key={photo.id}
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading="lazy"
                    onError={(e) => {
                      if (photo.fallbackUrl && e.currentTarget.src !== photo.fallbackUrl) {
                        e.currentTarget.src = photo.fallbackUrl;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0D2E1B]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      {photo.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0D2E1B] group-hover:text-[#1B7A43] transition-colors mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {photo.caption || photo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                    <span className="text-[11px] text-slate-400 font-normal">Buwate Campus</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXTRACURRICULAR ACTIVITIES PREVIEW - Clean Activity Cards (No Stock Photos) */}
      <section className="py-20 bg-white border-t border-[#1B7A43]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B7A43] block mb-2">
                Learning Beyond the Classroom
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D2E1B] font-bold">
                Extracurricular Clubs & Activities
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Students have a variety of clubs they engage in to build their self-esteem, competitiveness and confidence.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('activities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-semibold text-[#1B7A43] hover:underline transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All 8 Activities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXTRACURRICULAR_ACTIVITIES.slice(0, 4).map((act) => (
              <div
                key={act.id}
                onClick={() => {
                  onNavigate('activities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-6 border border-[#1B7A43]/20 hover:border-[#1B7A43] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B7A43] bg-[#F2F9F4] px-2.5 py-1 rounded-md border border-[#1B7A43]/20">
                      {act.category}
                    </span>
                    <span className="text-xs text-slate-400">Oak Club</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0D2E1B] mb-2">
                    {act.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <strong className="block text-[#0D2E1B] text-[11px] uppercase tracking-wide mb-0.5">
                    Value Nurtured:
                  </strong>
                  <span className="text-slate-600">{act.benefits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ADMISSIONS PROCEDURE - 4 Clear Real-World Steps */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B7A43]">
              Admissions Procedure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D2E1B] mt-2">
              How to Enrol Your Child
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              A transparent, welcoming admissions pathway designed to identify your child's exact learning level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((s) => (
              <div key={s.step} className="bg-[#F2F9F4] p-6 rounded-2xl border border-[#1B7A43]/20">
                <span className="font-mono text-2xl font-bold text-[#1B7A43] block mb-2">
                  {s.step}
                </span>
                <h3 className="font-serif font-bold text-base text-[#0D2E1B] mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Official Enrollment Form PDF Download Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#0D2E1B] to-[#14532D] rounded-3xl p-6 sm:p-8 text-white border border-[#1B7A43]/30 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#68D37E]">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#68D37E] block">
                  Official Admissions Document &middot; 7-Page PDF
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Registration &amp; Enrollment Form
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Includes Student &amp; Family Information, Medical &amp; Religious details, School &amp; Financial Regulations, and Code of Conduct. Download, complete, and submit to our Buwate Campus or via admissions email.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onOpenEnrollmentForm && (
                <button
                  onClick={onOpenEnrollmentForm}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/25 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#68D37E]" />
                  <span>Preview Form</span>
                </button>
              )}
              <a
                href={SCHOOL_INFO.enrollmentFormPdfUrl}
                download="Oak_International_Enrollment_Form.pdf"
                className="px-5 py-3 bg-[#1B7A43] hover:bg-[#156334] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Enrollment PDF</span>
              </a>
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3 bg-white hover:bg-slate-100 text-[#0D2E1B] text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Enquire Online</span>
                <ArrowRight className="w-4 h-4 text-[#1B7A43]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CURRICULUM PARTNERS STRIP - Genuine Partner Logos */}
      <section className="py-16 bg-[#F2F9F4] border-y border-[#1B7A43]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B7A43]">
              Accreditation & Partners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2E1B] mt-1">
              Curriculum Partners & Global Qualifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Recognized worldwide, providing pathways to higher education institutions in Uganda and across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {CURRICULUM_PARTNERS.map((partner) => (
              <div
                key={partner.short}
                className="bg-white rounded-2xl p-6 border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center group"
              >
                <div>
                  {/* Clean Logo Container */}
                  <div className="h-20 w-full flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-50/60 border border-slate-100 group-hover:bg-[#F2F9F4] transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#0D2E1B] mb-1 group-hover:text-[#1B7A43] transition-colors">
                    {partner.short}
                  </h3>
                  <div className="text-xs text-slate-700 font-medium mb-2 leading-snug">
                    {partner.name}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                  <span className="font-script text-base text-[#1B7A43] font-bold block leading-tight">
                    "{partner.motto}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#071E12] via-[#0D2E1B] to-[#14532D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#68D37E]">
            Admissions & Enquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Give Your Child an Education That Builds More Than Knowledge.
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how Oak International Christian School can help nurture your child's academic potential, Christian character and leadership abilities.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-4 rounded-xl text-base font-bold bg-[#1B7A43] hover:bg-[#156334] text-white shadow-lg shadow-[#1B7A43]/30 transition-all cursor-pointer"
            >
              Enrol Now
            </button>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
};
