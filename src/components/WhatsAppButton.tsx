import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

export const UniversalWhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M16.002 3.003c-7.172 0-12.998 5.826-12.998 12.997 0 2.296.6 4.536 1.74 6.511l-1.844 6.732 6.89-1.808a12.95 12.95 0 0 0 6.212 1.564h.005c7.169 0 12.995-5.827 12.995-12.999 0-3.473-1.352-6.738-3.808-9.194a12.92 12.92 0 0 0-9.192-3.803zm7.618 18.599c-.318.895-1.579 1.64-2.185 1.745-.584.102-1.347.145-2.176-.12-1.385-.444-3.181-1.423-5.326-3.567-2.735-2.735-3.69-5.12-4.088-6.177-.397-1.056-.05-2.072.39-2.513.273-.273.606-.395.88-.395.204 0 .392.01.558.018.238.012.433.045.626.505.244.582.83 2.029.902 2.177.073.147.122.32.024.516-.097.195-.146.318-.292.489-.147.171-.31.382-.442.513-.147.147-.3.308-.129.601.171.293.762 1.258 1.636 2.036 1.127 1.003 2.077 1.314 2.37 1.46.293.147.465.122.636-.073.171-.195.733-.855.928-1.148.195-.293.39-.244.659-.147.269.098 1.71.806 2.003.953.293.147.489.22.562.342.073.122.073.708-.245 1.603z" />
  </svg>
);

interface WhatsAppButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid-green' | 'outline' | 'flier-badge';
  label?: string;
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  className = '',
  size = 'md',
  variant = 'solid-green',
  label,
  customMessage,
}) => {
  const message =
    customMessage ||
    'Hello Oak International Christian School, I would like to make an enquiry.';
  const href = `https://wa.me/256783368459?text=${encodeURIComponent(message)}`;

  const buttonText = label || 'Chat on WhatsApp';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-3 text-sm sm:text-base gap-2.5',
    lg: 'px-7 py-3.5 text-base sm:text-lg gap-3',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  if (variant === 'outline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Oak International Christian School"
        className={`inline-flex items-center justify-center font-bold text-[#1F6E3D] bg-white hover:bg-[#E6F5EC] border border-[#319B59]/40 hover:border-[#319B59] rounded-xl shadow-xs transition-all duration-200 cursor-pointer group ${sizeClasses} ${className}`}
      >
        <UniversalWhatsAppIcon
          className={`${iconSizes} text-[#25D366] group-hover:scale-110 transition-transform shrink-0`}
        />
        <span className="tracking-tight whitespace-nowrap">{buttonText}</span>
      </a>
    );
  }

  // Universal WhatsApp Green Button
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Oak International Christian School: +256 783 368459"
      className={`inline-flex items-center justify-center font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group ${sizeClasses} ${className}`}
    >
      <UniversalWhatsAppIcon
        className={`${iconSizes} fill-white group-hover:scale-110 transition-transform shrink-0`}
      />
      <span className="tracking-tight whitespace-nowrap">{buttonText}</span>
    </a>
  );
};

