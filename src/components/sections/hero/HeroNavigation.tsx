import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavItem {
  path: string;
  label: string;
}

interface HeroNavigationProps {
  navItems: NavItem[];
  currentPath: string;
}

const HeroNavigation: React.FC<HeroNavigationProps> = ({ navItems, currentPath }) => {
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
    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      clearTimeout(timer);
    };
  }, []);

  const getHoverColor = (index: number) => {
    const colors = [
      'hover:text-wisdom-400 hover:bg-wisdom-900/30',
      'hover:text-community-400 hover:bg-community-900/30',
      'hover:text-hope-400 hover:bg-hope-900/30',
      'hover:text-wisdom-400 hover:bg-wisdom-900/30',
      'hover:text-community-400 hover:bg-community-900/30'
    ];
    return colors[index] || 'hover:text-wisdom-400 hover:bg-wisdom-900/30';
  };

  return (
    <nav
      className="flex flex-wrap justify-center gap-4 py-12"
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item, index) => (
        <Link
          key={item.path}
          href={item.path}
          className={`group relative px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-500 ease-out backdrop-blur-md border ${
            currentPath === item.path
              ? 'bg-wisdom-600/30 text-white border-wisdom-500/50 shadow-2xl shadow-wisdom-500/20'
              : `bg-guardian-800/20 text-guardian-200 border-guardian-700/40 ${getHoverColor(index)} hover:border-wisdom-500/50`
          } focus:ring-2 focus:ring-wisdom-400 focus:outline-none ${
            !prefersReducedMotion && isVisible ? 'hover:transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1' : ''
          }`}
          aria-label={`Navigate to ${item.label}`}
          aria-current={currentPath === item.path ? 'page' : undefined}
        >
          {item.label}

          {/* Active indicator with conditional animation */}
          {currentPath === item.path && (
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-wisdom-400 rounded-full shadow-lg shadow-wisdom-400/50 ${
              !prefersReducedMotion && isVisible ? 'animate-pulse' : ''
            }`} />
          )}

          {/* Enhanced hover glow effect - conditional */}
          {!prefersReducedMotion && isVisible && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-wisdom-400/20 to-community-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
          )}

          {/* Subtle inner highlight - conditional */}
          {!prefersReducedMotion && isVisible && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default HeroNavigation;