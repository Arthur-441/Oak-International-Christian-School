import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, CORE_PHILOSOPHY, LEADERSHIP_QUOTES, FLIER_PILLARS } from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import {
  Shield,
  BookOpen,
  Award,
  Compass,
  GraduationCap,
  Heart,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Check,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-16 lg:py-20 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block mb-2">
              About Our School
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Raising Leaders for Today & Tomorrow
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Oak International Christian School is a private Christian educational institution in
              Buwate, Kira, Uganda, dedicated to Christ-centred mastery learning and character formation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & School Introduction (Card-Based, No Stock Photos) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <SchoolCrest size="sm" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
                  Welcome to Oak International
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09262C] leading-tight">
                An Educational Experience That Nurtures an Outstanding Leader
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                {SCHOOL_INFO.welcomeIntro}
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We believe that every child is uniquely crafted by God with individual talents, cognitive strengths, and a divine destiny. Rather than forcing every student into a rigid, one-size-fits-all conveyor belt, our educational structure honours each learner's unique pace and mastery.
              </p>

              <div className="bg-[#F2F8F8] border border-[#00868F]/20 rounded-2xl p-6 space-y-3">
                <div className="font-serif font-bold text-lg text-[#09262C]">
                  "{SCHOOL_INFO.tagline}"
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  We are not merely preparing children for future careers; we are training them to lead with integrity, moral fortitude, and proactive initiative in their classrooms, homes, and communities today.
                </p>
              </div>
            </div>

            {/* Right Column: Refined Card Box (Replaced Image with Flier Pillars Card) */}
            <div className="lg:col-span-5">
              <div className="bg-[#09262C] text-white rounded-3xl p-8 border border-[#00868F]/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-[#00868F] flex items-center justify-center shrink-0">
                    <img
                      src="/assets/aistudio/oak_school_logo_transparent.png"
                      alt="Oak International Badge"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block">
                      Core Institutional Tenets
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">
                      The Oak Foundation
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#061C20] border border-[#00868F]/30 space-y-1">
                    <div className="font-marker text-lg text-[#00C2B8] uppercase tracking-wide">
                      Academic Excellence
                    </div>
                    <span className="font-script text-base text-emerald-300 font-bold block">
                      Self-Paced Mastery & Individualised Goals
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Individualised learning allowing each learner to progress according to their abilities and achieve true mastery.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#061C20] border border-[#00868F]/30 space-y-1">
                    <div className="font-marker text-lg text-[#6DB33F] uppercase tracking-wide">
                      Godly Character
                    </div>
                    <span className="font-script text-base text-emerald-300 font-bold block">
                      Word of God & Scriptural Habits
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Christian character and Biblical principles form the bedrock of our educational philosophy and everyday student discipline.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#061C20] border border-[#00868F]/30 space-y-1">
                    <div className="font-marker text-lg text-amber-300 uppercase tracking-wide">
                      Leadership Development
                    </div>
                    <span className="font-script text-base text-amber-200 font-bold block">
                      Trained for Today, Prepared for Tomorrow
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Training transformational leaders first for today, and then tomorrow, in any sphere of society.
                    </p>
                  </div>
                </div>

                <div className="text-xs text-center text-slate-400 pt-2 border-t border-white/10">
                  Buwate Campus &middot; Kira – Kasangati Road
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goal in Depth */}
      <section className="py-20 bg-[#F2F8F8] border-y border-[#00868F]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#00868F]/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00868F] text-white flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00868F] block mb-2">
                  Our Mission
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#09262C] mb-4">
                  Life Skills & Godly Character
                </h3>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-serif italic mb-6">
                  "{SCHOOL_INFO.mission}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Through balanced academic rigor and comprehensive physical and extracurricular activities, we anchor our students in Biblical truth so they become grounded, self-disciplined individuals.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6DB33F]">
                <CheckCircle className="w-4 h-4" />
                <span>Anchored in the Word of God</span>
              </div>
            </div>

            {/* Goal Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#00868F]/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#09262C] text-[#00C2B8] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00868F] block mb-2">
                  Our Goal
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#09262C] mb-4">
                  Developing Transformational Leaders
                </h3>
                <p className="text-[#09262C] text-base sm:text-lg leading-relaxed font-serif italic mb-6 font-semibold">
                  "{SCHOOL_INFO.goal}"
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our ultimate aspiration is to nurture young men and women who reflect the character of Christ—dependable in their commitments, fearless in moral conviction, and equipped to effect positive transformation wherever God calls them.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#00868F]">
                <CheckCircle className="w-4 h-4" />
                <span>God-Fearing &middot; Dependable &middot; Transformational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy & Three Core Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00868F]">
              Our Educational Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#09262C] mt-2">
              The Three Core Tenets
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              How we intentionally guide every learner from potential to fruitfulness.
            </p>
          </div>

          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2F8F8] rounded-2xl p-8 sm:p-10 border border-[#00868F]/20">
              <div className="lg:col-span-1 flex items-center justify-center">
                <span className="font-serif text-4xl font-bold text-[#00868F]">01</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                  Academic Excellence Through Individualised Learning
                </h3>
                <p className="text-slate-800 text-base leading-relaxed">
                  "Individualised learning that allows each learner to progress according to their abilities and achieve mastery."
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Traditional classrooms often move at an arbitrary group pace, leaving struggling students with knowledge gaps while faster learners grow disengaged. At Oak International, learners master each concept fully before moving to the next level.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-[#09262C]">Key Outcomes:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>No student left behind with undetected gaps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Daily goal-setting and self-discipline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Proven edge at higher levels of education</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2F8F8] rounded-2xl p-8 sm:p-10 border border-[#00868F]/20">
              <div className="lg:col-span-1 flex items-center justify-center">
                <span className="font-serif text-4xl font-bold text-[#00868F]">02</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                  Christian Character & Biblical Foundation
                </h3>
                <p className="text-slate-800 text-base leading-relaxed">
                  "Christian character and Biblical principles are an important part of our educational philosophy."
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Academic capability without moral grounding produces clever but untrustworthy individuals. We weave character traits—such as honesty, diligence, kindness, and reverence for God—into all daily learning materials and interpersonal interactions.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-[#09262C]">Key Outcomes:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Biblical worldview integrated into all subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Respect for authority and fellow students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Christ-like servanthood and compassionate spirit</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2F8F8] rounded-2xl p-8 sm:p-10 border border-[#00868F]/20">
              <div className="lg:col-span-1 flex items-center justify-center">
                <span className="font-serif text-4xl font-bold text-[#00868F]">03</span>
              </div>
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#09262C]">
                  Leadership Development for Today and Tomorrow
                </h3>
                <p className="text-slate-800 text-base leading-relaxed">
                  "We are training leaders — first for today, and then, tomorrow."
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  As John C. Maxwell noted, "Leadership is one life influencing another." We believe leadership begins in the present: taking ownership of one's desk, setting daily goals, speaking with clarity, and encouraging peers.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-[#09262C]">Key Outcomes:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Dependable and proactive initiative</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Confidence and public presentation skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6DB33F]" />
                  <span>Equipped to influence every sphere of society</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quotes Showcase */}
      <section className="py-20 bg-[#09262C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8]">
              Words That Guide Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
              Leadership Quotes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_QUOTES.map((q, idx) => (
              <div key={idx} className="bg-[#061C20] p-6 rounded-2xl border border-[#00868F]/30 flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-[#00C2B8]/40 mb-3" />
                  <p className="font-serif text-base sm:text-lg italic text-slate-100 mb-4">
                    "{q.quote}"
                  </p>
                </div>
                <div className="text-xs text-[#00C2B8] font-semibold">
                  {q.author || q.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-3xl text-[#09262C] font-bold">
            Visit Our School in Buwate, Kira
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We would be delighted to welcome you to our school, show you our learning center, and discuss your child's educational pathway.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-lg text-sm font-semibold bg-[#00868F] hover:bg-[#00747C] text-white shadow-sm transition-colors cursor-pointer"
            >
              Make an Enquiry
            </button>
            <button
              onClick={() => {
                onNavigate('academics');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-slate-300 hover:bg-slate-50 text-slate-800 transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Academics & ACE</span>
              <ArrowRight className="w-4 h-4 text-[#00868F]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
