import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';

export interface LightboxPhotoItem {
  id: string;
  url: string;
  fallbackUrl?: string;
  title: string;
  category: string;
  caption?: string;
}

interface PhotoLightboxModalProps {
  photos: LightboxPhotoItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onViewAllGallery?: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onViewAllGallery,
}) => {
  const activePhoto =
    activeIndex !== null && photos[activeIndex] ? photos[activeIndex] : null;

  // Lock page scroll on both <html> and <body> while the lightbox is open
  useEffect(() => {
    if (!activePhoto) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [activePhoto]);

  // Keyboard navigation
  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && photos.length > 1) {
        onNext();
      } else if (e.key === 'ArrowLeft' && photos.length > 1) {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, photos.length, onClose, onNext, onPrev]);

  if (!activePhoto || activeIndex === null || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activePhoto.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-2 sm:p-6 backdrop-blur-md overscroll-contain"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94dvh] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#DCEFE2] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-[#F4FAF6] border-b border-[#DCEFE2] text-[#0F3820] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6E3D] bg-[#E6F5EC] px-2.5 py-1 rounded-full border border-[#CFE8D8] shrink-0">
              {activePhoto.category}
            </span>
            <span className="text-xs text-slate-600 font-medium truncate">
              Photo {activeIndex + 1} of {photos.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-600 hover:text-[#0F3820] hover:bg-[#E6F5EC] rounded-full transition-colors cursor-pointer shrink-0"
            title="Close (Esc)"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Photo Stage: guarantees the full image fits inside viewport without clipping */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center bg-slate-950 p-2 sm:p-4 overflow-hidden">
          <img
            key={activePhoto.id}
            src={activePhoto.url}
            alt={activePhoto.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (activePhoto.fallbackUrl && e.currentTarget.src !== activePhoto.fallbackUrl) {
                e.currentTarget.src = activePhoto.fallbackUrl;
              }
            }}
            className="max-h-[calc(94dvh-165px)] max-w-full w-auto h-auto object-contain rounded-lg select-none shadow-2xl"
          />

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#319B59] text-[#0F3820] hover:text-white border border-white/40 shadow-lg backdrop-blur-xs transition-all cursor-pointer"
              title="Previous photo (Left Arrow)"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-[#319B59] text-[#0F3820] hover:text-white border border-white/40 shadow-lg backdrop-blur-xs transition-all cursor-pointer"
              title="Next photo (Right Arrow)"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Controls */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-[#DCEFE2] text-[#0F3820] shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="min-w-0">
            <h3 className="font-serif text-sm sm:text-lg font-bold text-[#0F3820] leading-snug">
              {activePhoto.title}
            </h3>
            {activePhoto.caption && (
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                {activePhoto.caption}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            {onViewAllGallery && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onViewAllGallery();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F6E3D] hover:text-[#319B59] bg-[#F4FAF6] hover:bg-[#E6F5EC] border border-[#CFE8D8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>Open Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <span className="text-xs text-slate-500 font-mono">
              {activeIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
