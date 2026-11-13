import React from 'react';

interface SchoolCrestProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'transparent';
  showText?: boolean;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({
  className = '',
  size = 'md',
  variant = 'transparent',
  showText = false,
}) => {
  const dimensions = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className} shrink-0`}>
      <div
        className={`${dimensions} rounded-full overflow-hidden flex items-center justify-center shrink-0 ${
          variant === 'dark'
            ? 'bg-white p-1 shadow-xs border border-slate-200'
            : variant === 'light'
            ? 'bg-white p-1 shadow-xs border border-[#1B7A43]/30'
            : 'bg-white/95 p-0.5 shadow-2xs'
        }`}
      >
        <img
          src="/assets/aistudio/oak_school_logo_transparent.png"
          alt="Oak International Christian School Official Badge"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to original crop if transparent isn't loaded
            const target = e.currentTarget;
            target.src = '/assets/aistudio/oak_school_logo.png';
          }}
        />
      </div>

      {showText && (
        <div className="leading-tight">
          <span className="block font-serif font-bold text-base text-[#0D2E1B] tracking-tight whitespace-nowrap">
            Oak International
          </span>
          <span className="block text-[10px] font-semibold text-[#1B7A43] tracking-wider uppercase">
            Christian School
          </span>
        </div>
      )}
    </div>
  );
};
