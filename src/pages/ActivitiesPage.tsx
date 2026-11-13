import React, { useState } from 'react';
import { PageId, Activity } from '../types';
import { EXTRACURRICULAR_ACTIVITIES, SCHOOL_INFO } from '../data/schoolData';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  Trophy,
  Heart,
  Users,
  ArrowRight,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Music,
  Activity as ActivityIcon,
  CircleDot,
  CheckCircle,
} from 'lucide-react';

interface ActivitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({
  onNavigate,
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
        return <Waves className="w-6 h-6 text-[#1B7A43]" />;
      case 'cook':
        return <UtensilsCrossed className="w-6 h-6 text-[#6DB33F]" />;
      case 'craft':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'dance':
        return <ActivityIcon className="w-6 h-6 text-rose-500" />;
      case 'music':
        return <Music className="w-6 h-6 text-emerald-700" />;
      case 'table-tennis':
        return <CircleDot className="w-6 h-6 text-emerald-600" />;
      case 'volleyball':
        return <Trophy className="w-6 h-6 text-[#1B7A43]" />;
      case 'football':
        return <Trophy className="w-6 h-6 text-[#6DB33F]" />;
      default:
        return <ActivityIcon className="w-6 h-6 text-[#1B7A43]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#071E12] via-[#0D2E1B] to-[#14532D] text-white py-16 lg:py-20 border-b border-[#144027]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#68D37E] block mb-2">
              Holistic Student Development
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Learning Beyond the Classroom.
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Students have a variety of clubs they engage in to build their self-esteem, competitiveness and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="bg-[#F2F9F4] border-b border-[#1B7A43]/15 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#1B7A43]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F9F4] text-[#1B7A43] flex items-center justify-center shrink-0 border border-[#1B7A43]/20">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0D2E1B]">Self-Esteem</h2>
                <p className="text-xs text-slate-600">Discovering talents and positive self-worth</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#1B7A43]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F9F4] text-[#6DB33F] flex items-center justify-center shrink-0 border border-[#6DB33F]/20">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0D2E1B]">Healthy Competitiveness</h2>
                <p className="text-xs text-slate-600">Striving for excellence with godly sportsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#1B7A43]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F9F4] text-[#0D2E1B] flex items-center justify-center shrink-0 border border-slate-300">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0D2E1B]">Unshakable Confidence</h2>
                <p className="text-xs text-slate-600">Courage to participate and lead in group settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid Section (Cards, No Stock Photos) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Filter By Discipline
              </span>
              <p className="text-sm text-[#0D2E1B] font-semibold">
                Showing {filteredActivities.length} Clubs & Activities
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1B7A43] text-white shadow-2xs'
                      : 'bg-[#F2F9F4] text-slate-700 hover:bg-[#E2F3E7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid with Elevated Visual Design & Handwriting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Thematic Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F9F4] border border-[#1B7A43]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getActivityIcon(act.iconType)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B7A43] bg-[#F2F9F4] px-2.5 py-1 rounded-full border border-[#1B7A43]/20">
                      {act.category}
                    </span>
                  </div>

                  <span className="font-script text-base text-[#6DB33F] font-bold block mb-1">
                    Leadership & Skill Club
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#0D2E1B] mb-2 group-hover:text-[#1B7A43] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1B7A43]/15 space-y-2">
                  <div className="text-[11px] text-slate-600">
                    <strong className="text-[#0D2E1B] block font-semibold mb-0.5">Value Nurtured:</strong>
                    <span className="font-script text-base text-[#1B7A43] font-bold block leading-tight">
                      {act.benefits}
                    </span>
                  </div>

                  {act.scheduleNote && (
                    <div className="text-[10px] text-[#1B7A43] font-semibold bg-[#F2F9F4] p-2 rounded-xl border border-[#1B7A43]/15">
                      {act.scheduleNote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Campus Clubs in Action Spotlight */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1B7A43] block mb-1">
                Authentic Campus Life
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2E1B]">
                Oak Learners in Action
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Real moments from our creative arts workshops, sports training, and inter-school Christian student conventions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white rounded-3xl overflow-hidden border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src="https://i.ibb.co/RGGrCntr/Whats-App-Image-2026-11-09-at-2-08-36-PM.jpg"
                    alt="Traditional Food Preparation at Oak International"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0D2E1B]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      Co-curricular Activities
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-bold text-[#0D2E1B] group-hover:text-[#1B7A43] transition-colors">
                    Traditional Food Preparation
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Learners build practical kitchen skills by preparing fresh local ingredients together.
                  </p>
                </div>
              </div>


              <div className="group bg-white rounded-3xl overflow-hidden border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src="https://i.ibb.co/DgmYZ1zr/Whats-App-Image-2026-11-09-at-12-25-21-PM-1.jpg"
                    alt="Physical Athletics & Sports at Oak International"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0D2E1B]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      Physical Sports
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-bold text-[#0D2E1B] group-hover:text-[#1B7A43] transition-colors">
                    Athletics & Physical Fitness
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Building cardiovascular stamina, agility, sportsmanship, and teamwork through active physical games.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-3xl overflow-hidden border-2 border-[#1B7A43]/20 hover:border-[#1B7A43] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src="https://i.ibb.co/0VD1KwXh/Whats-App-Image-2026-11-09-at-1-21-26-PM.jpg"
                    alt="Student Christian Convention"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0D2E1B]/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                      Student Convention
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg font-bold text-[#0D2E1B] group-hover:text-[#1B7A43] transition-colors">
                    Christian Convention
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Representing Oak International with excellence in academic, artistic, and biblical student conventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Callout */}
      <section className="py-16 bg-[#F2F9F4] border-t border-[#1B7A43]/15">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D2E1B]">
            Want to learn more about our student clubs?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Contact our admissions team to find out how our physical, creative, and life-skills clubs integrate into your child's weekly schedule.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 bg-[#1B7A43] hover:bg-[#156334] text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Enquire About Activities
            </button>
            <WhatsAppButton size="md" />
          </div>
        </div>
      </section>
    </div>
  );
};

