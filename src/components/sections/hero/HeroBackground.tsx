import React, { useEffect, useState } from 'react';

const HeroBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 opacity-90"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(59, 7, 100, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at top right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%),
          linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(59, 7, 100) 50%, rgb(15, 23, 42) 100%)
        `
      }}
      aria-hidden="true"
    >
      {/* Conditional ambient light effect */}
      {!prefersReducedMotion && (
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-wisdom-500/3 rounded-full blur-3xl animate-pulse"
          style={{animationDuration: '8s'}}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default HeroBackground;