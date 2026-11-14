import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
    return typeof IntersectionObserver === 'undefined';
  });

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.06,
        rootMargin: '0px 0px -24px 0px',
      }
    );

    observer.observe(node);

    // Failsafe to ensure content is never stuck hidden
    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(true);
      observer.disconnect();
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible && delayMs ? `${delayMs}ms` : '0ms',
      }}
      className={`transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3.5'
      } ${className}`}
    >
      {children}
    </div>
  );
};
