import React, { useEffect, useState } from 'react';

const HeroSystemStatus: React.FC = () => {
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
    const timer = setTimeout(() => setIsVisible(true), 600);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`flex items-center justify-center gap-8 py-10 px-12 glass-card rounded-3xl border-2 border-community-500/40 shadow-2xl shadow-glow-community hover:border-community-400/60 hover:shadow-glow-community transition-all duration-500 group cursor-pointer transform-gpu perspective-container ${
      !prefersReducedMotion && isVisible ? 'hover:scale-105 hover:rotate-y-3 hover:translate-z-10' : ''
    }`}>
      {/* Optimized indicator with conditional animations */}
      <div className={`relative transition-transform duration-500 ${
        !prefersReducedMotion && isVisible ? 'group-hover:scale-110' : ''
      }`}>
        {/* Primary pulse - always visible but conditional animation */}
        <div className={`w-6 h-6 bg-wisdom-500 rounded-full shadow-xl shadow-wisdom-500/60 ${
          !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
        }`} />

        {/* Secondary effects - only if motion is allowed */}
        {!prefersReducedMotion && isVisible && (
          <>
            <div
              className="absolute inset-0 w-6 h-6 bg-wisdom-400/40 rounded-full animate-ping shadow-lg shadow-wisdom-400/30"
              style={{animationDuration: '2.5s'}}
            />
            <div
              className="absolute inset-1 w-4 h-4 bg-community-400/30 rounded-full animate-pulse"
              style={{animationDelay: '1s', animationDuration: '3s'}}
            />
          </>
        )}

        {/* Inner highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent group-hover:from-white/30 transition-all duration-500" />

        {/* Interactive ripple effect - conditional */}
        {!prefersReducedMotion && isVisible && (
          <div className="absolute inset-0 rounded-full bg-wisdom-400/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
        )}
      </div>

      {/* Enhanced text with gradient */}
      <span className="text-transparent bg-gradient-to-r from-wisdom-300 to-community-300 bg-clip-text font-bold text-xl tracking-wider group-hover:from-wisdom-200 group-hover:to-community-200 transition-all duration-500">
        System Active
      </span>

      {/* Enhanced background glow */}
      <div className="absolute inset-0 rounded-3xl bg-wisdom-400/5 blur-xl group-hover:bg-wisdom-400/10 transition-all duration-500" />

      {/* Shimmer effect on hover - conditional */}
      {!prefersReducedMotion && isVisible && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
      )}
    </div>
  );
};

export default HeroSystemStatus;