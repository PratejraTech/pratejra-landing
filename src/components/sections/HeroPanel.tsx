"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { OptimizedImage } from '../ui/optimized-image';

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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-guardian-950 via-guardian-900 to-guardian-950 opacity-80" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">

        {/* Logo Section */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Mystical Background Effects */}
            <div className="absolute inset-0 rounded-full opacity-40">
              <div className="w-full h-full rounded-full border-2 border-dashed border-community-400/60 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border border-dashed border-hope-400/40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-wisdom-400/30 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Logo Container */}
            <div className="relative bg-guardian-900 rounded-full p-6 shadow-2xl border border-guardian-700 ring-2 ring-community-500/20">
              <OptimizedImage
                src="/media/logo.png"
                alt="Pratejra Logo"
                width={140}
                height={140}
                className="object-contain rounded-full"
                priority={true}
              />
            </div>

            {/* Energy Ring */}
            <div className="absolute inset-0 rounded-full border border-community-400/30 animate-ping" style={{animationDuration: '3s'}}></div>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-community-300 via-hope-300 to-wisdom-300 bg-clip-text text-transparent leading-none">
            Pratejra/Shaivra
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light tracking-widest">
            The Veil Between Worlds
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item, index) => {
            const colors = [
              'hover:text-community-400 hover:bg-community-900/20',
              'hover:text-hope-400 hover:bg-hope-900/20',
              'hover:text-wisdom-400 hover:bg-wisdom-900/20',
              'hover:text-community-400 hover:bg-community-900/20',
              'hover:text-hope-400 hover:bg-hope-900/20'
            ];
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? 'text-white bg-gradient-to-r from-community-600/20 to-hope-600/20 border border-community-500/30'
                    : `text-slate-300 ${colors[index]} hover:transform hover:scale-105`
                }`}
              >
                {item.label}
                {pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-community-400 rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* System Status */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <div className="w-3 h-3 bg-community-500 rounded-full animate-pulse shadow-sm shadow-community-500/50"></div>
          <span className="text-community-400 font-medium text-lg tracking-wide">System Active</span>
        </div>

        {/* Mystical Divider */}
        <div className="pt-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-community-400/50 to-transparent mx-auto"></div>
          <div className="flex justify-center mt-4">
            <div className="w-2 h-2 bg-hope-400 rounded-full animate-pulse mx-1" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-wisdom-400 rounded-full animate-pulse mx-1" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-community-400 rounded-full animate-pulse mx-1" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-community-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPanel;