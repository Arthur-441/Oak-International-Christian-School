import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, CORE_VALUES, LEADERSHIP_QUOTES } from '../data/schoolData';
import { SchoolCrest } from '../components/SchoolCrest';
import { Reveal } from '../components/Reveal';
import {
  Shield,
  Award,
  Compass,
  Heart,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="w-full bg-white">
      {/* Unified Light Page Header Banner (No Slideshow on Internal Pages) */}
      <section className="relative bg-gradient-to-br from-[#F4FAF6] via-white to-[#E6F5EC] text-[#0F3820] py-16 lg:py-20 border-b border-[#DCEFE2] overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden sm:block -top-16 -right-16 absolute w-64 h-64 rounded-full bg-[#319B59]/10 animate-float-slow pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block mb-2">
              About Our School
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3820] tracking-tight leading-tight mb-4">
              Raising Leaders for Today &amp; Tomorrow
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Oak International Christian School is a private Christian educational institution in
              Buwate, Kira, Uganda, dedicated to Christ-centred mastery learning and character formation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & School Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <SchoolCrest size="sm" variant="light" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                    Welcome to Oak International
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] leading-tight">
                  An Educational Experience That Nurtures an Outstanding Leader
                </h2>

                <p className="text-slate-700 text-base leading-relaxed">
                  {SCHOOL_INFO.welcomeIntro}
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  We believe that every child is uniquely crafted by God with individual talents, cognitive strengths, and a divine destiny. Rather than forcing every student into a rigid, one-size-fits-all conveyor belt, our educational structure honours each learner&apos;s unique pace and mastery.
                </p>

                <div className="bg-[#F4FAF6] border border-[#DCEFE2] rounded-2xl p-6 space-y-2.5">
                  <div className="font-serif font-bold text-lg text-[#0F3820]">
                    &ldquo;{SCHOOL_INFO.tagline}&rdquo;
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    We are not merely preparing children for future careers; we are training them to lead with integrity, moral fortitude, and proactive initiative in their classrooms, homes, and communities today.
                  </p>
                </div>
              </div>

              {/* Right Column: Bright Card Showcase */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAFBF8] rounded-3xl p-8 border border-[#DCEFE2] shadow-md space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white p-1 border border-[#CFE8D8] flex items-center justify-center shrink-0 shadow-2xs">
                      <img
                        src="/assets/aistudio/oak_school_logo_transparent.png"
                        alt="Oak International Badge"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block">
                        Core Institutional Tenets
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#0F3820]">
                        The Oak Foundation
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    <div className="p-4 rounded-2xl bg-white border border-[#DCEFE2] space-y-1">
                      <div className="font-marker text-base text-[#1F6E3D] uppercase tracking-wide">
                        Academic Excellence
                      </div>
                      <span className="font-script text-base text-[#319B59] font-bold block">
                        Self-Paced Mastery &amp; Individualised Goals
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Individualised learning allowing each learner to progress according to their abilities and achieve true mastery.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#DCEFE2] space-y-1">
                      <div className="font-marker text-base text-[#1F6E3D] uppercase tracking-wide">
                        Godly Character
                      </div>
                      <span className="font-script text-base text-[#319B59] font-bold block">
                        Word of God &amp; Scriptural Habits
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Christian character and Biblical principles form the bedrock of our educational philosophy and everyday student discipline.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#DCEFE2] space-y-1">
                      <div className="font-marker text-base text-[#1F6E3D] uppercase tracking-wide">
                        Leadership Development
                      </div>
                      <span className="font-script text-base text-[#319B59] font-bold block">
                        Trained for Today, Prepared for Tomorrow
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Training transformational leaders first for today, and then tomorrow, in any sphere of society.
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-center text-slate-500 pt-2 border-t border-[#DCEFE2]">
                    Buwate Campus &middot; Kira &ndash; Kasangati Road
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision, Mission & Goal in Depth */}
      <section className="py-20 bg-[#F4FAF6] border-y border-[#DCEFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <Reveal delayMs={0}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#DCEFE2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F5EC] text-[#319B59] flex items-center justify-center mb-6 border border-[#CFE8D8]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#319B59] block mb-2">
                    Our Vision
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-4">
                    Epitome of Transformation
                  </h3>
                  <p className="text-[#1F6E3D] text-base sm:text-lg leading-relaxed font-serif italic font-semibold mb-6">
                    &ldquo;{SCHOOL_INFO.vision}&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Nurturing every learner in Christ-like character and academic mastery so their lives stand as a testimony of purposeful transformation.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#319B59]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Christ-Centred Transformation</span>
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal delayMs={90}>
              <div className="h-full bg-white rounded-3xl p-8 sm:p-9 border border-[#DCEFE2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#319B59] text-white flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#319B59] block mb-2">
                    Our Mission
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-4">
                    Life Skills &amp; Godly Character
                  </h3>
                  <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-serif italic mb-6">
                    &ldquo;{SCHOOL_INFO.mission}&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Through balanced academic rigor and comprehensive physical and extracurricular activities, we anchor our students in Biblical truth so they become grounded, self-disciplined individuals.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#319B59]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Anchored in the Word of God</span>
                </div>
              </div>
            </Reveal>

            {/* Goal Card */}
            <Reveal delayMs={180}>
              <div className="h-full bg-gradient-to-br from-[#E6F5EC] to-white rounded-3xl p-8 sm:p-9 border border-[#319B59]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1F6E3D] text-white flex items-center justify-center mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F6E3D] block mb-2">
                    Our Goal
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-4">
                    Developing Transformational Leaders
                  </h3>
                  <p className="text-[#1F6E3D] text-base sm:text-lg leading-relaxed font-serif italic mb-6 font-semibold">
                    &ldquo;{SCHOOL_INFO.goal}&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our ultimate aspiration is to nurture young men and women who reflect the character of Christ&mdash;dependable in their commitments, fearless in moral conviction, and equipped to effect positive transformation wherever God calls them.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DCEFE2] flex items-center gap-2 text-xs font-bold text-[#1F6E3D]">
                  <CheckCircle className="w-4 h-4 text-[#319B59]" />
                  <span>God-Fearing &middot; Dependable &middot; Transformational</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Authentic Campus Fellowship & Community Spotlight */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delayMs={60}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59] shadow-xs hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden bg-[#F4FAF6] relative">
                  <img
                    src="https://i.ibb.co/yBWrh5VK/Whats-App-Image-2026-11-11-at-10-41-52-AM-1.jpg"
                    alt="School Assembly & Chapel Devotion at Oak International"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DCEFE2]">
                      Chapel &amp; Devotion
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors">
                    Morning Chapel &amp; Worship
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Pupils, educators, and supervisors united in scripture recitation, character pledges, and joyful praise to start each school day.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59] shadow-xs hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden bg-[#F4FAF6] relative">
                  <img
                    src="https://i.ibb.co/Xr1Tdqxd/Whats-App-Image-2026-11-11-at-10-28-37-AM.jpg"
                    alt="Future Doctors & Healthcare at Oak International Christian School"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DCEFE2]">
                      Events
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors">
                    Future Doctors &amp; Healthcare
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Learners step into the shoes of doctors and nurses, exploring healthcare through hands-on classroom role-play.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Educational Philosophy & Three Core Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Our Educational Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F3820] mt-2">
                The Three Core Tenets
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                How we intentionally guide every learner from potential to fruitfulness.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delayMs={0}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4FAF6] rounded-3xl p-8 sm:p-10 border border-[#DCEFE2]">
                <div className="lg:col-span-1 flex items-center justify-center">
                  <span className="font-serif text-4xl font-bold text-[#319B59]">01</span>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Academic Excellence Through Individualised Learning
                  </h3>
                  <p className="text-slate-800 text-base leading-relaxed">
                    &ldquo;Individualised learning that allows each learner to progress according to their abilities and achieve mastery.&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Traditional classrooms often move at an arbitrary group pace, leaving struggling students with knowledge gaps while faster learners grow disengaged. At Oak International, learners master each concept fully before moving to the next level.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] text-xs text-slate-700 space-y-2.5">
                  <div className="font-bold text-[#0F3820]">Key Outcomes:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>No student left behind with undetected gaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Daily goal-setting and self-discipline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Proven edge at higher levels of education</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4FAF6] rounded-3xl p-8 sm:p-10 border border-[#DCEFE2]">
                <div className="lg:col-span-1 flex items-center justify-center">
                  <span className="font-serif text-4xl font-bold text-[#319B59]">02</span>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Christian Character &amp; Biblical Foundation
                  </h3>
                  <p className="text-slate-800 text-base leading-relaxed">
                    &ldquo;Christian character and Biblical principles are an important part of our educational philosophy.&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Academic capability without moral grounding produces clever but untrustworthy individuals. We weave character traits&mdash;such as honesty, diligence, kindness, and reverence for God&mdash;into all daily learning materials and interpersonal interactions.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] text-xs text-slate-700 space-y-2.5">
                  <div className="font-bold text-[#0F3820]">Key Outcomes:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Biblical worldview integrated into all subjects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Respect for authority and fellow students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Christ-like servanthood and compassionate spirit</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4FAF6] rounded-3xl p-8 sm:p-10 border border-[#DCEFE2]">
                <div className="lg:col-span-1 flex items-center justify-center">
                  <span className="font-serif text-4xl font-bold text-[#319B59]">03</span>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#0F3820]">
                    Leadership Development for Today and Tomorrow
                  </h3>
                  <p className="text-slate-800 text-base leading-relaxed">
                    &ldquo;We are training leaders &mdash; first for today, and then, tomorrow.&rdquo;
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    As John C. Maxwell noted, &ldquo;Leadership is one life influencing another.&rdquo; We believe leadership begins in the present: taking ownership of one&apos;s desk, setting daily goals, speaking with clarity, and encouraging peers.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] text-xs text-slate-700 space-y-2.5">
                  <div className="font-bold text-[#0F3820]">Key Outcomes:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Dependable and proactive initiative</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Confidence and public presentation skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#319B59] shrink-0" />
                    <span>Equipped to influence every sphere of society</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Guiding Convictions - Our Core Values & Leadership Quotes */}
      <section className="py-20 bg-[#F4FAF6] border-t border-[#DCEFE2]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  <div className="h-full bg-white p-7 rounded-3xl border border-[#DCEFE2] hover:border-[#319B59]/60 shadow-2xs hover:shadow-lg flex flex-col justify-between transition-all group">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#E6F5EC] border border-[#CFE8D8] text-[#319B59] group-hover:bg-[#319B59] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F3820] mb-3">
                        {val.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">
                        {val.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1F6E3D]">
                        {val.tag}
                      </span>
                      <span className="text-[11px] text-slate-400 uppercase">Oak Value</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 pt-8 border-t border-[#DCEFE2]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#319B59]">
                Words That Guide Us
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-[#0F3820]">
                Leadership Quotes
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_QUOTES.map((q, idx) => (
              <Reveal key={idx} delayMs={idx * 60}>
                <div className="h-full bg-white p-6 rounded-2xl border border-[#DCEFE2] shadow-2xs flex flex-col justify-between">
                  <div>
                    <Quote className="w-6 h-6 text-[#319B59]/45 mb-3" />
                    <p className="font-serif text-base sm:text-lg italic text-[#0F3820] mb-4">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                  </div>
                  <div className="text-xs text-[#319B59] font-semibold">
                    {q.author || q.context}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-[#DCEFE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Reveal>
            <h2 className="font-serif text-3xl text-[#0F3820] font-bold">
              Visit Our School in Buwate, Kira
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
              We would be delighted to welcome you to our school, show you our learning center, and discuss your child&apos;s educational pathway.
            </p>
            <div className="pt-5 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-xl text-sm font-bold bg-[#1F6E3D] hover:bg-[#144D2B] text-white shadow-sm transition-colors cursor-pointer min-h-[44px]"
              >
                Make an Enquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate('academics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl text-sm font-semibold border border-[#CFE8D8] bg-[#F4FAF6] hover:bg-[#E6F5EC] text-[#0F3820] transition-colors cursor-pointer inline-flex items-center gap-2 min-h-[44px]"
              >
                <span>Explore Academics &amp; ACE</span>
                <ArrowRight className="w-4 h-4 text-[#319B59]" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
