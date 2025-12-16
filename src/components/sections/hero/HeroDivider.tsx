import React, { useEffect, useState } from 'react';

const HeroDivider: React.FC = () => {
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

    // Stagger animation start
    const timer = setTimeout(() => setIsVisible(true), 800);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="py-20 relative">
      {/* Enhanced gradient line with glow effect */}
      <div className="relative mx-auto mb-10">
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-wisdom-400/80 to-transparent" />
        <div className="absolute inset-0 w-64 h-px bg-gradient-to-r from-transparent via-wisdom-300/40 to-transparent blur-sm" />
        <div className="absolute inset-0 w-64 h-px bg-gradient-to-r from-transparent via-community-400/30 to-transparent blur-md" />
      </div>

      {/* Optimized animated dots */}
      <div className="flex justify-center gap-8">
        {/* Primary dot - Wisdom */}
        <div className="relative">
          <div className={`w-4 h-4 bg-wisdom-400 rounded-full shadow-xl shadow-wisdom-400/50 ${
            !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
          }`} />
          {!prefersReducedMotion && isVisible && (
            <div
              className="absolute inset-0 w-4 h-4 bg-wisdom-300/50 rounded-full animate-ping"
              style={{animationDuration: '3s'}}
            />
          )}
        </div>

        {/* Secondary dot - Community */}
        <div className="relative">
          <div className={`w-4 h-4 bg-community-400 rounded-full shadow-xl shadow-community-400/50 ${
            !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
          }`} style={!prefersReducedMotion && isVisible ? {animationDelay: '0.7s'} : {}} />
          {!prefersReducedMotion && isVisible && (
            <div
              className="absolute inset-0 w-4 h-4 bg-community-300/50 rounded-full animate-ping"
              style={{animationDelay: '0.7s', animationDuration: '3.5s'}}
            />
          )}
        </div>

        {/* Tertiary dot - Hope */}
        <div className="relative">
          <div className={`w-4 h-4 bg-hope-400 rounded-full shadow-xl shadow-hope-400/50 ${
            !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
          }`} style={!prefersReducedMotion && isVisible ? {animationDelay: '1.4s'} : {}} />
          {!prefersReducedMotion && isVisible && (
            <div
              className="absolute inset-0 w-4 h-4 bg-hope-300/50 rounded-full animate-ping"
              style={{animationDelay: '1.4s', animationDuration: '4s'}}
            />
          )}
        </div>
      </div>

      {/* Subtle ambient glow - conditional */}
      {!prefersReducedMotion && isVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-20 bg-wisdom-400/5 rounded-full blur-2xl -mt-10" />
      )}
    </div>
  );
};

export default HeroDivider;