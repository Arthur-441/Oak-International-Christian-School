import React from 'react';
import { PageId } from '../types';
import {
  SCHOOL_INFO,
  FLIER_PILLARS,
  CORE_PHILOSOPHY,
  LEADERSHIP_QUOTES,
  EXTRACURRICULAR_ACTIVITIES,
  DISCIPLINE_SHOWCASES,
  CURRICULUM_PARTNERS,
  ADMISSION_STEPS,
} from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  ArrowRight,
  BookOpen,
  Shield,
  GraduationCap,
  Quote,
  CheckCircle,
  FileText,
  Compass,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  Check,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION - Flier Teal & Leaf Green Color Scheme (Pure Card & Graphic Dignity, No Stock Photos) */}
      <section className="relative bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle Geometric Background Waves matching Flier Style */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="10" cy="10" r="40" fill="#00868F" />
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
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block">
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
                <span className="text-[#00C2B8]">Christ-Centred Education.</span>
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
                  className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#00868F] hover:bg-[#00747C] shadow-lg shadow-[#00868F]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
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
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#00868F]/30 text-slate-800 space-y-6 relative overflow-hidden">
                {/* Decorative Top Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00868F]/10 rounded-bl-full pointer-events-none" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00868F] block">
                      Official Curriculum
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                      ACE Curriculum
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-[#F2F8F8] p-1.5 border-2 border-[#00868F] flex items-center justify-center shrink-0 shadow-sm">
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
                      className="p-4 rounded-2xl bg-gradient-to-r from-[#F2F8F8] to-white border border-[#00868F]/25 hover:border-[#00868F] transition-all shadow-2xs group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#00868F] text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 group-hover:bg-[#6DB33F] transition-colors">
                          <Check className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-marker text-lg sm:text-xl text-[#09262C] uppercase tracking-wide leading-tight group-hover:text-[#00868F] transition-colors">
                            {p.title}
                          </div>
                          <div className="font-script text-base text-[#00868F] font-bold leading-tight mt-0.5">
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
                <div className="p-4 rounded-2xl bg-[#09262C] text-white space-y-3 border border-[#00868F]/30 shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#00C2B8] font-bold block">
                        Admissions Desk &middot; Buwate
                      </span>
                      <a
                        href={SCHOOL_INFO.phoneTel}
                        className="font-serif text-lg font-bold text-white hover:text-[#00C2B8] transition-colors"
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
                    className="text-[#00868F] font-bold hover:underline cursor-pointer"
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
      <section className="bg-[#00747C] py-3.5 px-4 text-white text-xs">
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
              className="text-[#E4F1F2] hover:text-white font-semibold underline cursor-pointer"
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
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8F8] border border-[#00868F]/30 text-[#00868F] text-xs font-bold uppercase tracking-wider">
              <span>Welcome to Oak International Christian School</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#09262C] font-bold leading-tight">
              An Educational Experience That Nurtures an Outstanding Leader
            </h2>
            <div className="w-16 h-1 bg-[#00868F] mx-auto rounded-full" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              {SCHOOL_INFO.welcomeIntro}
            </p>
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
                  className="bg-white rounded-3xl p-8 border-2 border-[#00868F]/20 hover:border-[#00868F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle Top Wave/Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#F2F8F8] rounded-bl-full pointer-events-none group-hover:bg-[#E5F1F2] transition-colors" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00868F] to-[#005C66] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                        0{idx + 1}
                      </div>
                      <span className="font-script text-lg font-bold text-[#00868F]">
                        {scriptTags[idx]}
                      </span>
                    </div>

                    <span className="font-script text-2xl text-[#00868F] font-bold block mb-1 tracking-wide">
                      {scriptSubtitles[idx]}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-[#09262C] mb-3 group-hover:text-[#00868F] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#00868F]/15 flex items-center gap-2 text-xs text-[#00868F] font-semibold bg-[#F2F8F8]/60 p-3 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                    <span>{item.principle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MISSION & GOAL SECTION - Replaced Photo with Editorial Statement Card */}
      <section className="py-20 bg-[#F2F8F8] border-y border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Mission */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#00868F]/20 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00868F] text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C]">
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

            {/* Right Card: Goal & Leadership Vision */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#061C20] to-[#005C66] text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00C2B8] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Our Goal</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Developing Transformational Leaders
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#E4F1F2] font-semibold leading-relaxed pt-2">
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

      {/* 5. LEADERSHIP QUOTES */}
      <section className="py-20 bg-[#09262C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8]">
              Guiding Convictions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-white">
              Leadership Quotes
            </h2>
            <p className="text-slate-300 text-sm mt-3">
              Words that guide our supervisors, students, and school culture every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_QUOTES.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#061C20]/80 rounded-2xl p-7 border border-[#00868F]/30 flex flex-col justify-between hover:border-[#00868F] transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#00C2B8]/40 mb-4" />
                  <p className="font-serif text-lg text-slate-100 italic leading-snug mb-4">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-[#00C2B8]">
                    {item.author || item.context}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase">Oak Ethos</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMICS PREVIEW - Beautiful Card Layout (No Stock Photos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block">
                Academics & ACE Curriculum
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#09262C] font-bold leading-tight">
                An Individualised Approach to Learning
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {SCHOOL_INFO.aceSummary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-[#F2F8F8] border border-[#00868F]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>Step by Step (3 years):</strong> Introduction to school environment and independence</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F8F8] border border-[#00868F]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>Preschool (4–5 years):</strong> Concepts preparing children to "be ready to read"</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F8F8] border border-[#00868F]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0" />
                  <span><strong>ABC's with ACE and Christi (5–6 years):</strong> Multisensory phonetics program</span>
                </div>
                <div className="p-3 rounded-lg bg-[#F2F8F8] border border-[#00868F]/20 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
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
                  className="px-6 py-3 bg-[#00868F] hover:bg-[#00747C] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Academic Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Diagnostic Test Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#09262C] text-white rounded-3xl p-8 sm:p-10 border border-[#00868F]/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00868F] text-white flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">Diagnostic Testing</h3>
                    <p className="text-xs text-[#00C2B8]">Personalised Placement</p>
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
                    className="w-full py-3 bg-[#00868F] hover:bg-[#00747C] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-colors cursor-pointer text-center"
                  >
                    Ask About Diagnostic Testing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXTRACURRICULAR ACTIVITIES PREVIEW - Clean Activity Cards (No Stock Photos) */}
      <section className="py-20 bg-[#F2F8F8] border-t border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00868F] block mb-2">
                Learning Beyond the Classroom
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#09262C] font-bold">
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
              className="text-xs sm:text-sm font-semibold text-[#00868F] hover:underline transition-colors inline-flex items-center gap-1.5 cursor-pointer"
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
                className="bg-white rounded-2xl p-6 border border-[#00868F]/20 hover:border-[#00868F] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00868F] bg-[#F2F8F8] px-2.5 py-1 rounded-md border border-[#00868F]/20">
                      {act.category}
                    </span>
                    <span className="text-xs text-slate-400">Oak Club</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#09262C] mb-2">
                    {act.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
                  <strong className="block text-[#09262C] text-[11px] uppercase tracking-wide mb-0.5">
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
              Admissions Procedure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09262C] mt-2">
              How to Enrol Your Child
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              A transparent, welcoming admissions pathway designed to identify your child's exact learning level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((s) => (
              <div key={s.step} className="bg-[#F2F8F8] p-6 rounded-2xl border border-[#00868F]/20">
                <span className="font-mono text-2xl font-bold text-[#00868F] block mb-2">
                  {s.step}
                </span>
                <h3 className="font-serif font-bold text-base text-[#09262C] mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 bg-[#00868F] hover:bg-[#00747C] text-white text-sm font-bold rounded-lg shadow-sm transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Begin Your Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. CURRICULUM PARTNERS STRIP - Genuine Partner Logos */}
      <section className="py-16 bg-[#F2F8F8] border-y border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
              Accreditation & Partners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C] mt-1">
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
                className="bg-white rounded-2xl p-6 border-2 border-[#00868F]/20 hover:border-[#00868F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center group"
              >
                <div>
                  {/* Clean Logo Container */}
                  <div className="h-20 w-full flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-50/60 border border-slate-100 group-hover:bg-[#F2F8F8] transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#09262C] mb-1 group-hover:text-[#00868F] transition-colors">
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
                  <span className="font-script text-base text-[#00868F] font-bold block leading-tight">
                    "{partner.motto}"
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8]">
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
              className="px-8 py-4 rounded-xl text-base font-bold bg-[#00868F] hover:bg-[#00747C] text-white shadow-lg shadow-[#00868F]/30 transition-all cursor-pointer"
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
