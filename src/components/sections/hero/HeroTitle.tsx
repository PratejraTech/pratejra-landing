import React, { useEffect, useState } from 'react';

const HeroTitle: React.FC = () => {
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
    const timer = setTimeout(() => setIsVisible(true), 400);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-8 group cursor-default">
      <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-tight bg-gradient-to-r from-wisdom-300 via-wisdom-200 to-community-300 bg-clip-text text-transparent drop-shadow-lg transition-all duration-1000 ${
        !prefersReducedMotion && isVisible ? 'group-hover:from-wisdom-200 group-hover:via-wisdom-100 group-hover:to-community-200' : ''
      }`}>
        Pratejra/Shaivra
      </h1>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl text-guardian-100 font-light tracking-wider drop-shadow-md transition-all duration-1000 ${
        !prefersReducedMotion && isVisible ? 'group-hover:text-guardian-50 group-hover:tracking-widest' : ''
      }`}>
        The Veil Between Worlds
        {/* Shimmer effect - only if motion is allowed */}
        {!prefersReducedMotion && isVisible && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-1000" />
        )}
      </h2>
    </div>
  );
};

export default HeroTitle;