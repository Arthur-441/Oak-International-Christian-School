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
        return <Waves className="w-6 h-6 text-[#00868F]" />;
      case 'cook':
        return <UtensilsCrossed className="w-6 h-6 text-[#6DB33F]" />;
      case 'craft':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'dance':
        return <ActivityIcon className="w-6 h-6 text-rose-500" />;
      case 'music':
        return <Music className="w-6 h-6 text-indigo-600" />;
      case 'table-tennis':
        return <CircleDot className="w-6 h-6 text-emerald-600" />;
      case 'volleyball':
        return <Trophy className="w-6 h-6 text-[#00868F]" />;
      case 'football':
        return <Trophy className="w-6 h-6 text-[#6DB33F]" />;
      default:
        return <ActivityIcon className="w-6 h-6 text-[#00868F]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#061C20] via-[#09262C] to-[#005C66] text-white py-16 lg:py-20 border-b border-[#0A333A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C2B8] block mb-2">
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
      <section className="bg-[#F2F8F8] border-b border-[#00868F]/15 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#00868F]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F8F8] text-[#00868F] flex items-center justify-center shrink-0 border border-[#00868F]/20">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#09262C]">Self-Esteem</h2>
                <p className="text-xs text-slate-600">Discovering talents and positive self-worth</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#00868F]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F8F8] text-[#6DB33F] flex items-center justify-center shrink-0 border border-[#6DB33F]/20">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#09262C]">Healthy Competitiveness</h2>
                <p className="text-xs text-slate-600">Striving for excellence with godly sportsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#00868F]/20 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F2F8F8] text-[#09262C] flex items-center justify-center shrink-0 border border-slate-300">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#09262C]">Unshakable Confidence</h2>
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
              <p className="text-sm text-[#09262C] font-semibold">
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
                      ? 'bg-[#00868F] text-white shadow-2xs'
                      : 'bg-[#F2F8F8] text-slate-700 hover:bg-[#E5F1F2]'
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
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#00868F]/20 hover:border-[#00868F] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Thematic Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F8F8] border border-[#00868F]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getActivityIcon(act.iconType)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00868F] bg-[#F2F8F8] px-2.5 py-1 rounded-full border border-[#00868F]/20">
                      {act.category}
                    </span>
                  </div>

                  <span className="font-script text-base text-[#6DB33F] font-bold block mb-1">
                    Leadership & Skill Club
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#09262C] mb-2 group-hover:text-[#00868F] transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#00868F]/15 space-y-2">
                  <div className="text-[11px] text-slate-600">
                    <strong className="text-[#09262C] block font-semibold mb-0.5">Value Nurtured:</strong>
                    <span className="font-script text-base text-[#00868F] font-bold block leading-tight">
                      {act.benefits}
                    </span>
                  </div>

                  {act.scheduleNote && (
                    <div className="text-[10px] text-[#00868F] font-semibold bg-[#F2F8F8] p-2 rounded-xl border border-[#00868F]/15">
                      {act.scheduleNote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Callout */}
      <section className="py-16 bg-[#F2F8F8] border-t border-[#00868F]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#09262C]">
            Want to learn more about our student clubs?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Contact our admissions team to find out how our physical, creative, and life-skills clubs integrate into your child's weekly schedule.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 bg-[#00868F] hover:bg-[#00747C] text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
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

