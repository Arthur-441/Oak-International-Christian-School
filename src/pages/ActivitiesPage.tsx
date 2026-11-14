import React, { useState } from 'react';
import { PageId } from '../types';
import { EXTRACURRICULAR_ACTIVITIES } from '../data/schoolData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Reveal } from '../components/Reveal';
import {
  Trophy,
  Heart,
  Users,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Music,
  Activity as ActivityIcon,
  CircleDot,
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Sports', 'Life Skills', 'Creative Arts', 'Performing Arts'];

  const filteredActivities =
    selectedCategory === 'All'
      ? EXTRACURRICULAR_ACTIVITIES
      : EXTRACURRICULAR_ACTIVITIES.filter((a) => a.category === selectedCategory);

  const getActivityIcon = (iconType: string) => {
    switch (iconType) {
      case 'swim':
        return <Waves className="w-6 h-6 text-[#319B59]" />;
      case 'cook':
        return <UtensilsCrossed className="w-6 h-6 text-[#319B59]" />;
      case 'craft':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'dance':
        return <ActivityIcon className="w-6 h-6 text-rose-500" />;
      case 'music':
        return <Music className="w-6 h-6 text-[#1F6E3D]" />;
      case 'table-tennis':
        return <CircleDot className="w-6 h-6 text-[#319B59]" />;
      case 'volleyball':
        return <Trophy className="w-6 h-6 text-[#1F6E3D]" />;
      case 'football':
        return <Trophy className="w-6 h-6 text-[#319B59]" />;
      default:
        return <ActivityIcon className="w-6 h-6 text-[#319B59]" />;
    }
  };

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
              Holistic Student Development
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3820] tracking-tight leading-tight mb-4">
              Learning Beyond the Classroom.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Students have a variety of clubs they engage in to build their self-esteem, competitiveness and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="bg-[#F4FAF6] border-b border-[#DCEFE2] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#E6F5EC] text-[#319B59] flex items-center justify-center shrink-0 border border-[#CFE8D8]">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0F3820]">Self-Esteem</h2>
                <p className="text-xs text-slate-600">Discovering talents and positive self-worth</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#E6F5EC] text-[#319B59] flex items-center justify-center shrink-0 border border-[#CFE8D8]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0F3820]">Healthy Competitiveness</h2>
                <p className="text-xs text-slate-600">Striving for excellence with godly sportsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#DCEFE2] shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#E6F5EC] text-[#1F6E3D] flex items-center justify-center shrink-0 border border-[#CFE8D8]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0F3820]">Unshakable Confidence</h2>
                <p className="text-xs text-slate-600">Courage to participate and lead in group settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Filter By Discipline
              </span>
              <p className="text-sm text-[#0F3820] font-semibold">
                Showing {filteredActivities.length} Clubs &amp; Activities
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer min-h-[38px] ${
                    selectedCategory === cat
                      ? 'bg-[#319B59] text-white shadow-xs'
                      : 'bg-[#F4FAF6] text-slate-700 hover:bg-[#E6F5EC] border border-[#DCEFE2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((act, idx) => (
              <Reveal key={act.id} delayMs={idx * 60}>
                <div className="h-full bg-[#FAFBF8] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#DCEFE2] hover:border-[#319B59] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#DCEFE2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                        {getActivityIcon(act.iconType)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6E3D]">
                        {act.category}
                      </span>
                    </div>

                    <span className="font-script text-base text-[#319B59] font-bold block mb-1">
                      Leadership &amp; Skill Club
                    </span>

                    <h3 className="font-serif text-xl font-bold text-[#0F3820] mb-2 group-hover:text-[#319B59] transition-colors">
                      {act.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {act.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCEFE2] space-y-2">
                    <div className="text-[11px] text-slate-600">
                      <strong className="text-[#0F3820] block font-semibold mb-0.5">
                        Value Nurtured:
                      </strong>
                      <span className="font-script text-base text-[#1F6E3D] font-bold block leading-tight">
                        {act.benefits}
                      </span>
                    </div>

                    {act.scheduleNote && (
                      <div className="text-[11px] text-[#1F6E3D] font-medium bg-[#E6F5EC]/70 px-3 py-1.5 rounded-xl">
                        {act.scheduleNote}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Authentic Campus Clubs in Action Spotlight */}
          <div className="mt-16 pt-12 border-t border-[#DCEFE2]">
            <Reveal>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#319B59] block mb-1">
                  Authentic Campus Life
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820]">
                  Oak Learners in Action
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Real moments from our creative arts workshops, sports training, and inter-school Christian student conventions.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delayMs={0}>
                <div className="h-full group bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59] shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F4FAF6] relative">
                    <img
                      src="https://i.ibb.co/RGGrCntr/Whats-App-Image-2026-11-09-at-2-08-36-PM.jpg"
                      alt="Traditional Food Preparation at Oak International"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DCEFE2]">
                        Co-curricular Activities
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors">
                      Traditional Food Preparation
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Learners build practical kitchen skills by preparing fresh local ingredients together.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={90}>
                <div className="h-full group bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59] shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F4FAF6] relative">
                    <img
                      src="https://i.ibb.co/DgmYZ1zr/Whats-App-Image-2026-11-09-at-12-25-21-PM-1.jpg"
                      alt="Physical Athletics & Sports at Oak International"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DCEFE2]">
                        Physical Sports
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors">
                      Athletics &amp; Physical Fitness
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Building cardiovascular stamina, agility, sportsmanship, and teamwork through active physical games.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={180}>
                <div className="h-full group bg-white rounded-3xl overflow-hidden border border-[#DCEFE2] hover:border-[#319B59] shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F4FAF6] relative">
                    <img
                      src="https://i.ibb.co/0VD1KwXh/Whats-App-Image-2026-11-09-at-1-21-26-PM.jpg"
                      alt="Student Christian Convention"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3820] bg-white/92 backdrop-blur-xs px-3 py-1 rounded-full border border-[#DCEFE2]">
                        Student Convention
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-[#0F3820] group-hover:text-[#319B59] transition-colors">
                      Christian Convention
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Representing Oak International with excellence in academic, artistic, and biblical student conventions.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Callout */}
      <section className="py-16 bg-[#F4FAF6] border-t border-[#DCEFE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3820]">
              Want to learn more about our student clubs?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mt-2">
              Contact our admissions team to find out how our physical, creative, and life-skills clubs integrate into your child&apos;s weekly schedule.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-[#1F6E3D] hover:bg-[#144D2B] text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
              >
                Enquire About Activities
              </button>
              <WhatsAppButton size="md" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
