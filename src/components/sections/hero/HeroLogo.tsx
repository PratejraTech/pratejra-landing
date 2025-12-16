import React, { useEffect, useState } from 'react';
import { OptimizedImage } from '../../ui/optimized-image';

const HeroLogo: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Stagger animation start to prevent initial performance hit
    const timer = setTimeout(() => setIsVisible(true), 200);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  const animationClasses = prefersReducedMotion
    ? ''
    : isVisible
      ? 'animate-float'
      : '';

  return (
    <div className="flex justify-center">
      <div className={`relative transition-all duration-1000 ${animationClasses}`}>
        {/* Mystical Background Effects - Reduced complexity */}
        <div className="absolute inset-0 rounded-full opacity-70" aria-hidden="true">
          <div
            className={`w-full h-full rounded-full border-2 border-dashed border-wisdom-400/90 shadow-lg shadow-wisdom-400/20 ${
              prefersReducedMotion ? '' : 'animate-glow'
            }`}
          />
          {!prefersReducedMotion && (
            <>
              <div
                className="absolute inset-2 rounded-full border border-dashed border-wisdom-300/70 shadow-md shadow-wisdom-300/15 animate-glow"
                style={{animationDelay: '1s'}}
              />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-community-400/60 shadow-sm shadow-community-400/10 animate-glow"
                style={{animationDelay: '2s'}}
              />
            </>
          )}
        </div>

        {/* Logo Container with Glass-morphism */}
        <div className="relative bg-gradient-to-br from-guardian-900/80 to-wisdom-900/60 rounded-full p-8 shadow-2xl border border-wisdom-700/70 ring-2 ring-wisdom-500/50 backdrop-blur-md hover:ring-wisdom-400/70 transition-all duration-500 group">
          {/* Inner glow effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-wisdom-400/10 to-community-400/5 blur-sm group-hover:from-wisdom-400/20 group-hover:to-community-400/10 transition-all duration-500" aria-hidden="true" />

          <OptimizedImage
            src="/media/logo.png"
            alt="Pratejra Logo"
            width={140}
            height={140}
            sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 140px"
            className="object-contain rounded-full drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
            priority={true}
          />

          {/* Subtle inner shadow */}
          <div className="absolute inset-0 rounded-full shadow-inner shadow-guardian-900/50 group-hover:shadow-guardian-900/30 transition-all duration-500" aria-hidden="true" />
        </div>

        {/* Energy Ring - Simplified */}
        {!prefersReducedMotion && (
          <div
            className="absolute inset-0 rounded-full border-2 border-wisdom-400/60 animate-morph shadow-lg shadow-wisdom-400/30"
            style={{animationDelay: '0.5s'}}
            aria-hidden="true"
          />
        )}

        {/* Interactive hover effect - Performance optimized */}
        <div className="absolute inset-0 rounded-full bg-wisdom-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-150" aria-hidden="true" />
      </div>
    </div>
  );
};

export default HeroLogo;