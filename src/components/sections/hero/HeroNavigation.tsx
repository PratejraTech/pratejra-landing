import React from 'react';
import Link from 'next/link';

interface HeroNavigationProps {
  navItems: Array<{ path: string; label: string }>;
  currentPath: string;
}

const HeroNavigation: React.FC<HeroNavigationProps> = ({ navItems, currentPath }) => {
  return (
    <nav className="flex flex-wrap justify-center gap-3 md:gap-4 py-10">
      {navItems.map((item, index) => {
        const colors = [
          'hover:text-wisdom-400 hover:bg-wisdom-900/20 focus:ring-2 focus:ring-wisdom-400',
          'hover:text-community-400 hover:bg-community-900/20 focus:ring-2 focus:ring-community-400',
          'hover:text-hope-400 hover:bg-hope-900/20 focus:ring-2 focus:ring-hope-400',
          'hover:text-wisdom-400 hover:bg-wisdom-900/20 focus:ring-2 focus:ring-wisdom-400',
          'hover:text-community-400 hover:bg-community-900/20 focus:ring-2 focus:ring-community-400'
        ];
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 bg-guardian-800/30 backdrop-blur-sm border border-guardian-700/50 ${
              currentPath === item.path
                ? 'text-white bg-gradient-to-r from-wisdom-600/20 to-community-600/20 border border-wisdom-500/30'
                : `text-guardian-300 ${colors[index]} hover:transform hover:scale-105 hover:border-wisdom-500/30`
            }`}
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
            {currentPath === item.path && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-wisdom-400 rounded-full"></div>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeroNavigation;