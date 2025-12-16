"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  HeroBackground,
  HeroLogo,
  HeroTitle,
  HeroNavigation,
  HeroSystemStatus,
  HeroDivider,
  HeroScrollIndicator
} from './hero';

const HeroPanel: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/allies', label: 'Allies' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <section className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Layer */}
      <HeroBackground />

      {/* Header Zone - Logo */}
      <header className="relative z-10 pt-16 pb-12">
        <HeroLogo />
      </header>

      {/* Main Content Zone - Centered */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto text-center space-y-16">
        <HeroTitle />
        <HeroNavigation navItems={navItems} currentPath={pathname} />
        <HeroSystemStatus />
        <HeroDivider />
      </main>

      {/* Footer Zone - Scroll Indicator */}
      <footer className="relative z-10 pb-8">
        <HeroScrollIndicator />
      </footer>
    </section>
  );
};

export default HeroPanel;