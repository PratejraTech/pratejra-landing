import React, { useEffect, useState } from 'react';

const HeroScrollIndicator: React.FC = () => {
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
    const timer = setTimeout(() => setIsVisible(true), 1000);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  const bounceClass = prefersReducedMotion ? '' : isVisible ? 'animate-bounce' : '';

  return (
    <div className={`flex justify-center ${bounceClass} group cursor-pointer`}>
      <div className="relative w-8 h-12 border-2 border-guardian-400/60 rounded-full flex justify-center bg-guardian-900/20 backdrop-blur-sm shadow-lg hover:border-wisdom-400/80 hover:bg-guardian-900/30 transition-all duration-500">
        {/* Enhanced scroll indicator */}
        <div className={`w-1.5 h-4 bg-gradient-to-b from-wisdom-400 to-community-400 rounded-full mt-2 shadow-md shadow-wisdom-400/50 group-hover:shadow-wisdom-400/70 group-hover:from-wisdom-300 group-hover:to-community-300 transition-all duration-500 ${
          !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
        }`} />

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-wisdom-400/10 blur-sm group-hover:bg-wisdom-400/20 transition-all duration-500" />

        {/* Inner highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/5 group-hover:to-white/10 transition-all duration-500" />

        {/* Interactive pulse on hover - conditional */}
        {!prefersReducedMotion && isVisible && (
          <div className="absolute inset-0 rounded-full border-2 border-wisdom-400/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
        )}
      </div>
    </div>
  );
};

export default HeroScrollIndicator;