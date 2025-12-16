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
    <div className="flex justify-center perspective-container">
      <div className={`relative transition-all duration-1000 transform-3d ${animationClasses} group-hover:rotate-y-12 group-hover:translate-z-20`}>
        {/* Mystical Background Effects - Enhanced with 3D */}
        <div className="absolute inset-0 rounded-full opacity-70" aria-hidden="true">
          <div
            className={`w-full h-full rounded-full border-2 border-dashed border-community-400/90 shadow-lg shadow-glow-community ${
              prefersReducedMotion ? '' : 'animate-glow-pulse'
            }`}
          />
          {!prefersReducedMotion && (
            <>
              <div
                className="absolute inset-2 rounded-full border border-dashed border-community-300/70 shadow-md shadow-community-300/15 animate-glow-pulse"
                style={{animationDelay: '1s'}}
              />
              <div
                className="absolute inset-4 rounded-full border border-dashed border-wisdom-400/60 shadow-sm shadow-wisdom-400/10 animate-glow-pulse"
                style={{animationDelay: '2s'}}
              />
            </>
          )}
        </div>

        {/* Logo Container with Enhanced Glass-morphism */}
        <div className="relative glass-card rounded-full p-8 shadow-2xl border-2 border-community-500/50 hover:border-community-400/70 hover:shadow-glow-community transition-all duration-500 group transform-3d hover:scale-110">
          {/* Inner glow effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-community-400/10 to-wisdom-400/5 blur-sm group-hover:from-community-400/20 group-hover:to-wisdom-400/10 transition-all duration-500" aria-hidden="true" />

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

        {/* Energy Ring - Enhanced with 3D */}
        {!prefersReducedMotion && (
          <div
            className="absolute inset-0 rounded-full border-2 border-community-400/60 animate-morph-blob shadow-lg shadow-glow-community"
            style={{animationDelay: '0.5s'}}
            aria-hidden="true"
          />
        )}

        {/* Interactive hover effect - Enhanced 3D glow */}
        <div className="absolute inset-0 rounded-full bg-community-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-150" aria-hidden="true" />
      </div>
    </div>
  );
};

export default HeroLogo;