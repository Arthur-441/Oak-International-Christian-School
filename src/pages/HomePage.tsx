import React from 'react';
import { PageId } from '../types';
import {
  SCHOOL_INFO,
  CORE_PHILOSOPHY,
  CORE_VALUES,
  EXTRACURRICULAR_ACTIVITIES,
  CURRICULUM_PARTNERS,
  ADMISSION_STEPS,
  GRADUATION_GALLERY,
} from '../data/schoolData';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Reveal } from '../components/Reveal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  ArrowRight,
  Shield,
  GraduationCap,
  Heart,
  CheckCircle,
  FileText,
  Compass,
  Award,
  Sparkles,
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
    <div className="w-full bg-white">
      {/* 1. FULL-WIDTH UPLOADED PHOTO HERO SLIDESHOW (HOMEPAGE ONLY) */}
      <HeroSlideshow onNavigate={onNavigate} onOpenEnquiry={onOpenEnquiry} />

      {/* 2. AIRY ADMISSIONS ANNOUNCEMENT STRIP */}
      <section className="bg-[#E6F5EC] py-4 px-4 text-[#0F3820] border-b border-[#CFE8D8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs sm:text-sm">
            <span className="font-bold uppercase tracking-wider text-[#1F6E3D]">
              Admissions Open
            </span>
            <span aria-hidden="true" className="text-[#319B59]">
              &middot;
            </span>
            <span className="text-slate-700 font-medium">
              Diagnostic Placement Assessments ongoing at Buwate Campus for all grade levels.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm shrink-0">
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="text-[#1F6E3D] hover:text-[#144D2B] font-bold underline underline-offset-4 cursor-pointer"
            >
              Schedule Diagnostic Test
            </button>
            <span aria-hidden="true" className="text-[#319B59]/50 hidden sm:inline">
              |
            </span>
            <a
              href={SCHOOL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F6E3D] hover:text-[#319B59] hover:underline font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3. WELCOME & PHILOSOPHY SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block">
                  Welcome to Oak International Christian School
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0F3820] font-bold leading-tight">
                  An Educational Experience That Nurtures an Outstanding Leader
                </h2>
                <div className="w-16 h-1 bg-[#319B59] rounded-full" />
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                  {SCHOOL_INFO.welcomeIntro}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Located along Kira&ndash;Kasangati Road in Buwate, our campus provides a tranquil, focused atmosphere where learners master concepts with joy and develop deep-seated Christian character.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-[#DCEFE2] shadow-lg group bg-[#F4FAF6]">
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src="https://i.ibb.co/x8Rwk7LM/Whats-App-Image-2026-11-11-at-10-41-52-AM-2.jpg"
                      alt="Oak International Christian School Campus Community"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3 Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {CORE_PHILOSOPHY.map((item, idx) => {
              const scriptSubtitles = [
                'Mastery & Self-Paced Instruction',
                'Biblical Truth In Daily Life',
                'Trained for Today, Ready for Tomorrow',
              ];
              const scriptTags = [
                'No Concept Gaps Left Behind',
                'Proverbs 22:6 Character',
                'John Maxwell Tenet',
              ];
              return (
                <Reveal key={item.id} delayMs={idx * 90}>
                  <div className="h-full bg-[#FAFBF8] rounded-3xl p-8 border border-[#DCEFE2] hover:border-[#319B59]/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6F5EC]/60 rounded-bl-full pointer-events-none group-hover:bg-[#E6F5EC] transition-colors" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[#319B59] text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-[#1F6E3D] transition-colors">
                          0{idx + 1}
                        </div>
                        <span className="font-script text-lg font-bold text-[#1F6E3D]">
                          {scriptTags[idx]}
                        </span>
                      </div>

                      <span className="font-script text-2xl text-[#319B59] font-bold block mb-1 tracking-wide">
                        {scriptSubtitles[idx]}
                      </span>

                      <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-3 group-hover:text-[#1F6E3D] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-[#DCEFE2] flex items-center gap-2 text-xs text-[#1F6E3D] font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                      <span>{item.principle}</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VISION, MISSION & GOAL SECTION */}
      <section className="py-20 bg-[#F4FAF6] border-y border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {/* Card 1: Vision */}
            <Reveal delayMs={0}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#DCEFE2] hover:border-[#319B59]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#319B59] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Epitome of Transformation
                  </h3>
                  <p className="font-serif text-xl text-[#1F6E3D] italic font-semibold leading-relaxed pt-1">
                    &ldquo;{SCHOOL_INFO.vision}&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Nurturing every learner in Christ-like character and academic mastery so their lives stand as a testimony of purposeful transformation.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#319B59]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Christ-Centred Transformation</span>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Mission */}
            <Reveal delayMs={90}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#DCEFE2] hover:border-[#319B59]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#319B59] text-xs font-bold uppercase tracking-wider">
                    <Compass className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Equipping Each Learner
                  </h3>
                  <p className="font-serif text-lg text-slate-800 italic leading-relaxed pt-1">
                    &ldquo;{SCHOOL_INFO.mission}&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Through balanced academic rigor and comprehensive physical and extracurricular activities, we anchor our students in Biblical truth so they become grounded, self-disciplined individuals.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#319B59]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Basing on the Word of God</span>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Goal */}
            <Reveal delayMs={180}>
              <div className="h-full bg-gradient-to-br from-[#E6F5EC] to-[#F4FAF6] rounded-3xl p-8 sm:p-9 border border-[#319B59]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#1F6E3D] text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-[#319B59]" />
                    <span>Our Goal</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Developing Transformational Leaders
                  </h3>
                  <p className="font-serif text-xl text-[#1F6E3D] font-semibold leading-relaxed pt-1">
                    &ldquo;{SCHOOL_INFO.goal}&rdquo;
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    We seek to provide an educational experience that will nurture an outstanding leader equipped to excel at university levels and impact society with integrity.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#319B59]/20 flex items-center gap-2 text-xs font-semibold text-[#1F6E3D]">
                  <CheckCircle className="w-4 h-4 text-[#319B59]" />
                  <span>God-Fearing &middot; Dependable &middot; Transformational</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. GUIDING CONVICTIONS - OUR CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Guiding Convictions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-[#0F3820]">
                Our Core Values
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                The Biblical virtues of Godliness, Integrity, Care and Excellence that anchor our daily life and learning at Oak International.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp =
                val.title === 'Godliness'
                  ? Sparkles
                  : val.title === 'Integrity'
                  ? Shield
                  : val.title === 'Care'
                  ? Heart
                  : Award;
              return (
                <Reveal key={val.id} delayMs={idx * 80}>
                  <div className="h-full bg-[#F4FAF6] hover:bg-white rounded-3xl p-7 border border-[#DCEFE2] hover:border-[#319B59]/60 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#CFE8D8] text-[#319B59] group-hover:bg-[#319B59] group-hover:text-white flex items-center justify-center mb-5 shadow-2xs transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-3">
                        {val.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {val.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#DCEFE2] flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1F6E3D]">
                        {val.tag}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Oak Value</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ACADEMICS PREVIEW & DIAGNOSTIC TESTING */}
      <section className="py-20 bg-[#F4FAF6] border-y border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block">
                  Academics &amp; ACE Curriculum
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0F3820] font-bold leading-tight">
                  An Individualised Approach to Learning
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  {SCHOOL_INFO.aceSummary}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-[#DCEFE2] flex items-center gap-3 text-xs sm:text-sm text-slate-800 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>
                      <strong>Step by Step (3 years):</strong> Introduction to school environment and independence
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#DCEFE2] flex items-center gap-3 text-xs sm:text-sm text-slate-800 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>
                      <strong>Preschool (4&ndash;5 years):</strong> Concepts preparing children to &ldquo;be ready to read&rdquo;
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#DCEFE2] flex items-center gap-3 text-xs sm:text-sm text-slate-800 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>
                      <strong>ABC&apos;s with ACE and Christi (5&ndash;6 years):</strong> Multisensory phonetics program
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#DCEFE2] flex items-center gap-3 text-xs sm:text-sm text-slate-800 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>
                      <strong>Grade 1&ndash;12:</strong> Self-paced mastery leading to universities in Uganda and abroad
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('academics');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 bg-[#1F6E3D] hover:bg-[#144D2B] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Academic Pathway</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Diagnostic Test Card - Bright Crisp Card */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#CFE8D8] shadow-lg space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E6F5EC] text-[#1F6E3D] flex items-center justify-center border border-[#CFE8D8]">
                      <GraduationCap className="w-6 h-6 text-[#319B59]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-[#0F3820]">
                        Diagnostic Testing
                      </h3>
                      <p className="text-xs font-semibold text-[#319B59]">
                        Personalised Placement
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our diagnostic assessment accurately identifies the learner&apos;s current reading, mathematical, and concept comprehension levels. This eliminates knowledge gaps and ensures an exact curriculum prescription.
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-[#FAFBF8] p-5 rounded-2xl border border-[#DCEFE2]">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                      <span>No student held back by class medians</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                      <span>100% Concept Mastery testing before advancing</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                      <span>University exit routes both in Uganda and abroad</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="w-full py-3.5 px-6 bg-[#319B59] hover:bg-[#1F6E3D] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer text-center min-h-[44px]"
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

      {/* 7. GRADUATION CELEBRATIONS SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F3820] font-bold">
                Graduation at Oak International
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Honoring our students&apos; diligence, character, and academic mastery as they complete their learning stages and prepare for higher education.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GRADUATION_GALLERY.filter((photo) => ['grad-1', 'grad-2', 'grad-4'].includes(photo.id)).map((photo, idx) => (
              <Reveal key={photo.id} delayMs={idx * 90}>
                <div
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-full bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-[#F4FAF6]">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        if (photo.fallbackUrl && e.currentTarget.src !== photo.fallbackUrl) {
                          e.currentTarget.src = photo.fallbackUrl;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs border border-[#DCEFE2]">
                        {photo.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {photo.caption || photo.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end text-xs">
                      <span className="text-[11px] text-slate-500 font-medium">
                        Buwate Campus
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXTRACURRICULAR ACTIVITIES PREVIEW */}
      <section className="py-20 bg-[#F4FAF6] border-y border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block mb-2">
                  Learning Beyond the Classroom
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0F3820] font-bold">
                  Extracurricular Clubs &amp; Activities
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                  Students have a variety of clubs they engage in to build their self-esteem, competitiveness and confidence.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onNavigate('activities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-bold text-[#1F6E3D] hover:text-[#319B59] hover:underline transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>View All 8 Activities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXTRACURRICULAR_ACTIVITIES.slice(0, 4).map((act, idx) => (
              <Reveal key={act.id} delayMs={idx * 80}>
                <div
                  onClick={() => {
                    onNavigate('activities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-full bg-white rounded-2xl p-6 border border-[#DCEFE2] hover:border-[#319B59] shadow-2xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#319B59]">
                        {act.category}
                      </span>
                      <span className="text-slate-400">Oak Club</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors mb-2">
                      {act.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
                    <strong className="block text-[#0F3820] text-[11px] uppercase tracking-wide mb-0.5">
                      Value Nurtured:
                    </strong>
                    <span className="text-slate-600">{act.benefits}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ADMISSIONS PROCEDURE & ENROLLMENT FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Admissions Procedure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] mt-2">
                How to Enrol Your Child
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                A transparent, welcoming admissions pathway designed to identify your child&apos;s exact learning level.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((s, idx) => (
              <Reveal key={s.step} delayMs={idx * 80}>
                <div className="h-full bg-[#FAFBF8] p-6 rounded-2xl border border-[#DCEFE2] hover:border-[#319B59]/50 hover:bg-white transition-all shadow-2xs">
                  <span className="font-mono tabular-nums text-2xl font-bold text-[#319B59] block mb-2">
                    {s.step}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#0F3820] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Official Enrollment Form PDF Download Banner - Light Fresh Green */}
          <Reveal delayMs={120}>
            <div className="mt-10 bg-gradient-to-r from-[#E6F5EC] via-[#F2FAF5] to-[#E6F5EC] rounded-3xl p-6 sm:p-8 text-[#0F3820] border border-[#BFE3CC] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#CFE8D8] flex items-center justify-center shrink-0 text-[#319B59] shadow-2xs">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#1F6E3D] block">
                    Official Admissions Document &middot; 7-Page PDF
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F3820]">
                    Registration &amp; Enrollment Form
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Includes Student &amp; Family Information, Medical &amp; Religious details, School &amp; Financial Regulations, and Code of Conduct. Download, complete, and submit to our Buwate Campus or via admissions email.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {onOpenEnrollmentForm && (
                  <button
                    type="button"
                    onClick={onOpenEnrollmentForm}
                    className="px-5 py-3 bg-white hover:bg-[#FAFBF8] text-[#0F3820] text-xs sm:text-sm font-semibold rounded-xl border border-[#CFE8D8] transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <Eye className="w-4 h-4 text-[#319B59]" />
                    <span>Preview Form</span>
                  </button>
                )}
                <a
                  href={SCHOOL_INFO.enrollmentFormPdfUrl}
                  download="Oak_International_Enrollment_Form.pdf"
                  className="px-5 py-3 bg-[#1F6E3D] hover:bg-[#144D2B] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Enrollment PDF</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="px-5 py-3 bg-white hover:bg-[#E6F5EC] text-[#1F6E3D] text-xs sm:text-sm font-bold rounded-xl border border-[#319B59]/40 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Enquire Online</span>
                  <ArrowRight className="w-4 h-4 text-[#319B59]" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. CURRICULUM PARTNERS STRIP */}
      <section className="py-16 bg-[#F4FAF6] border-t border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Accreditation &amp; Partners
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820] mt-1">
                Curriculum Partners &amp; Global Qualifications
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Recognized worldwide, providing pathways to higher education institutions in Uganda and across the globe.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {CURRICULUM_PARTNERS.map((partner, idx) => (
              <Reveal key={partner.short} delayMs={idx * 70}>
                <div className="h-full bg-white rounded-2xl p-6 border border-[#DCEFE2] hover:border-[#319B59] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-center group">
                  <div>
                    <div className="h-20 w-full flex items-center justify-center p-3 mb-4 rounded-xl bg-[#FAFBF8] border border-slate-100 group-hover:bg-[#F4FAF6] transition-colors">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#0F3820] mb-1 group-hover:text-[#319B59] transition-colors">
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

      {/* 11. WARM WELCOME CALL TO ACTION SECTION */}
      <section className="py-20 bg-white border-t border-[#DCEFE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-[#F4FAF6] via-white to-[#E6F5EC] rounded-3xl p-8 sm:p-14 border border-[#CFE8D8] shadow-sm text-center space-y-6 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="hidden sm:block -top-12 -right-12 absolute w-40 h-40 rounded-full bg-[#319B59]/10 pointer-events-none"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] relative z-10 block">
                Admissions &amp; Enquiries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#0F3820] relative z-10">
                Give Your Child an Education That Builds More Than Knowledge.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                Discover how Oak International Christian School can help nurture your child&apos;s academic potential, Christian character and leadership abilities.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="px-8 py-3.5 rounded-xl text-base font-bold bg-[#1F6E3D] hover:bg-[#144D2B] text-white shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[44px]"
                >
                  Enrol Now
                </button>
                <WhatsAppButton size="lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
