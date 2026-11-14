import React, { useState, useEffect, useCallback } from 'react';
import { PageId } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: string;
  kicker: string;
  heading: string;
  highlight: string;
  description: string;
  primaryCtaLabel: string;
  primaryAction: 'about' | 'academics' | 'gallery' | 'enquiry';
  secondaryCtaLabel: string;
  secondaryAction: 'enquiry' | 'about' | 'academics' | 'contact';
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-leaders',
    imageUrl: 'https://i.ibb.co/x8Rwk7LM/Whats-App-Image-2026-11-11-at-10-41-52-AM-2.jpg',
    imageAlt: 'Oak International Christian School student leaders co-hosting campus praise and events',
    imagePosition: 'object-[center_20%]',
    kicker: 'Oak International Christian School · Buwate, Kira',
    heading: "Raising Tomorrow's Leaders Through",
    highlight: 'Christ-Centred Education.',
    description:
      'A warm, individualised Accelerated Christian Education (ACE) community where each child thrives at their own pace with Godly character and confidence.',
    primaryCtaLabel: 'Explore Our School',
    primaryAction: 'about',
    secondaryCtaLabel: 'Enrol Now',
    secondaryAction: 'enquiry',
  },
  {
    id: 'slide-discovery',
    imageUrl: 'https://i.ibb.co/Xr1Tdqxd/Whats-App-Image-2026-11-11-at-10-28-37-AM.jpg',
    imageAlt: 'Early years learners engaged in joyful healthcare role-play at Oak International',
    imagePosition: 'object-[center_28%]',
    kicker: 'Step by Step (3 yrs) to Grade 12 · Mastery Learning',
    heading: 'Joyful Discovery &',
    highlight: 'Personalised Excellence.',
    description:
      'From our nurturing Early Years through Grade 12, self-paced mastery ensures zero learning gaps while cultivating curiosity, creativity, and purpose.',
    primaryCtaLabel: 'Explore Academics',
    primaryAction: 'academics',
    secondaryCtaLabel: 'Book Diagnostic Test',
    secondaryAction: 'enquiry',
  },
  {
    id: 'slide-choir',
    imageUrl: 'https://i.ibb.co/bMn4v4dM/Grad-1.jpg',
    imageAlt: 'Oak International Choir students singing harmoniously on stage',
    imagePosition: 'object-[center_20%]',
    kicker: 'Godliness · Integrity · Care · Excellence',
    heading: 'Rooted in Faith,',
    highlight: 'Vibrant in Community.',
    description:
      'Through uplifting chapel worship, music, culinary arts, and sports, our students grow into well-rounded, compassionate, and joyful young leaders.',
    primaryCtaLabel: 'Explore School Life',
    primaryAction: 'gallery',
    secondaryCtaLabel: 'Admissions & Visits',
    secondaryAction: 'contact',
  },
  {
    id: 'slide-future',
    imageUrl: 'https://i.ibb.co/FbbSfQTm/Whats-App-Image-2026-11-11-at-10-43-05-AM.jpg',
    imageAlt: 'Students and instructors in uniform showcasing leadership and teamwork',
    imagePosition: 'object-[center_22%]',
    kicker: 'Learner Today, Leader Tomorrow · Wakiso District',
    heading: 'Shaping Dependable Leaders for',
    highlight: 'Lifelong Impact.',
    description:
      'Equipping every learner with practical life skills, disciplined study habits, and recognised pathways to leading universities in Uganda and abroad.',
    primaryCtaLabel: 'Admissions & Enquiry',
    primaryAction: 'enquiry',
    secondaryCtaLabel: 'Learn More',
    secondaryAction: 'about',
  },
];

interface HeroSlideshowProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onNavigate,
  onOpenEnquiry,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleUserSelectSlide = (index: number) => {
    setIsPaused(true);
    goToSlide(index);
  };

  const handleUserArrow = (direction: 'prev' | 'next') => {
    setIsPaused(true);
    if (direction === 'prev') {
      handlePrev();
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      handleNext();
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleAction = (action: HeroSlide['primaryAction'] | HeroSlide['secondaryAction']) => {
    if (action === 'enquiry') {
      onOpenEnquiry();
      return;
    }
    onNavigate(action);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      aria-label="Oak International Christian School Highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="relative w-full overflow-hidden bg-[#F2FAF5] min-h-[540px] sm:min-h-[600px] lg:h-[calc(100vh-112px)] lg:min-h-[620px] lg:max-h-[820px] flex items-center"
    >
      {/* Background Uploaded Photography Layers with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.imageAlt}
              referrerPolicy="no-referrer"
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover ${slide.imagePosition} transition-transform duration-[5500ms] ease-out ${
                isActive ? 'scale-100' : 'scale-105'
              }`}
            />
          </div>
        );
      })}

      {/* Luminous White Scrim Gradient (Left-Heavy for Legibility, Open Photo Right) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white/95 via-white/82 to-white/25 lg:bg-gradient-to-r lg:from-white/96 lg:via-white/84 lg:to-white/15"
      />

      {/* Tasteful Floating Geometric & Botanical Decorative Elements (Orchardics-Inspired) */}
      <div aria-hidden="true" className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Soft Rounded Leaf Arc Top-Left */}
        <div className="hidden sm:block absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#319B59]/10 animate-float-slow" />
        {/* Warm Soft Cream Accent Circle Bottom-Left */}
        <div className="hidden md:block absolute bottom-10 left-[8%] w-20 h-20 rounded-full border-2 border-[#319B59]/20 bg-[#FAFBF8]/70 animate-float-gentle" />
        {/* Delicate Green Ring Accent */}
        <div className="hidden lg:block absolute top-16 left-[46%] w-10 h-10 rounded-full border-2 border-[#68C98D]/45 animate-float-gentle" />
        {/* Small Colourful Accent Circle */}
        <div className="hidden lg:block absolute bottom-20 left-[44%] w-5 h-5 rounded-full bg-[#319B59]/25 animate-float-slow" />
        {/* Subtle Dot Matrix Top-Left */}
        <svg
          className="hidden lg:block absolute top-12 left-8 w-24 h-24 text-[#319B59]/20"
          viewBox="0 0 80 80"
          fill="currentColor"
        >
          {[0, 20, 40, 60].map((x) =>
            [0, 20, 40, 60].map((y) => (
              <circle key={`${x}-${y}`} cx={x + 6} cy={y + 6} r="2.2" />
            ))
          )}
        </svg>
      </div>

      {/* Left-Aligned Foreground Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div
          key={activeSlide.id}
          className="max-w-xl lg:max-w-2xl space-y-5 animate-hero-text"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#1F6E3D]">
            {activeSlide.kicker}
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#0F3820] leading-[1.12] tracking-tight text-balance">
            {activeSlide.heading}{' '}
            <span className="text-[#319B59]">{activeSlide.highlight}</span>
          </h1>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            {activeSlide.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => handleAction(activeSlide.primaryAction)}
              className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#1F6E3D] hover:bg-[#144D2B] shadow-md shadow-[#1F6E3D]/20 hover:shadow-lg inline-flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              <span>{activeSlide.primaryCtaLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleAction(activeSlide.secondaryAction)}
              className="px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#1F6E3D] bg-white/90 hover:bg-[#E6F5EC] border border-[#319B59]/35 shadow-xs inline-flex items-center justify-center cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              {activeSlide.secondaryCtaLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Previous / Next Navigation Arrows */}
      <button
        type="button"
        onClick={() => handleUserArrow('prev')}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[#0F3820] hover:text-[#319B59] border border-slate-200/80 shadow-md items-center justify-center cursor-pointer backdrop-blur-xs"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => handleUserArrow('next')}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[#0F3820] hover:text-[#319B59] border border-slate-200/80 shadow-md items-center justify-center cursor-pointer backdrop-blur-xs"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom-Centre Circular Slide Indicators */}
      <div
        role="tablist"
        aria-label="Slideshow navigation"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#319B59]/20 shadow-sm"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}: ${slide.heading}`}
              onClick={() => handleUserSelectSlide(idx)}
              className="p-2 flex items-center justify-center cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-[#319B59]"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 h-2.5 bg-[#319B59]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[#319B59]/60'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
