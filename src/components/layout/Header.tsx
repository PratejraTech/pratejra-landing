'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useMouseTrail } from '../../hooks/useMouseTrail';
import { OptimizedImage } from '../ui/optimized-image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const trail = useMouseTrail();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/allies', label: 'Allies' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
           <Link href="/" className="flex items-center space-x-4 group perspective-container">
            <div className="relative transform-3d group-hover:rotate-y-6 group-hover:translate-z-10 transition-all duration-500">
              {/* Logo Container with Glass-morphism */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 glass-card rounded-2xl p-1.5 shadow-2xl border border-white/20 hover:border-community-400/50 hover:shadow-glow-community transition-all duration-500 group-hover:scale-110">
                {/* Inner glow effect */}
                <div className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-wisdom-400/10 to-community-400/5 blur-sm group-hover:from-wisdom-400/20 group-hover:to-community-400/10 transition-all duration-500" aria-hidden="true" />
                
                <OptimizedImage
                  src="/media/logo.png"
                  alt="Pratejra Logo"
                  width={56}
                  height={56}
                  sizes="(max-width: 768px) 48px, 56px"
                  className="object-contain rounded-xl drop-shadow-2xl relative z-10"
                  priority={true}
                />
                
                {/* Subtle inner shadow */}
                <div className="absolute inset-0 rounded-xl shadow-inner shadow-guardian-900/50 group-hover:shadow-guardian-900/30 transition-all duration-500" aria-hidden="true" />
              </div>
              
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-community-500 rounded-full animate-pulse shadow-sm shadow-community-500/50 ring-2 ring-guardian-900"></div>
            </div>
            <div>
               <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-community-400 via-wisdom-400 to-community-400 bg-clip-text text-transparent group-hover:from-community-300 group-hover:via-wisdom-300 group-hover:to-community-300 transition-all duration-300">
                Pratejra
              </h1>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">The Veil Between Worlds</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
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
                   className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform-gpu ${
                    pathname === item.path
                      ? 'text-white glass-card border border-community-500/30 shadow-glow-community'
                      : `text-slate-300 ${colors[index]} hover:scale-105 hover:translate-y-[-2px] backdrop-blur-sm`
                  }`}
                >
                  {item.label}
                   {pathname === item.path && (
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-community-400 rounded-full animate-pulse"></div>
                   )}
                </Link>
              );
            })}
          </nav>

          {/* Status, Theme Toggle & Mobile menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-community-500 rounded-full animate-pulse shadow-sm shadow-community-500/50"></div>
              <span className="text-sm text-community-400 font-medium">System Active</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl glass-card hover:bg-white/20 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-glow-wisdom hover:scale-110 active:scale-95"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />)}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-2xl glass-card hover:bg-white/20 text-slate-300 hover:text-white transition-all duration-300 hover:shadow-glow-community hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-4 py-6 space-y-2 glass-overlay backdrop-blur-xl">
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
                     className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                      pathname === item.path
                        ? 'text-white glass-card border border-community-500/30 shadow-glow-community'
                        : `text-slate-300 ${colors[index]} backdrop-blur-sm`
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mouse Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-70 animate-pulse z-50"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            animationDelay: `${index * 25}ms`,
            filter: `blur(${index * 0.05}px)`,
          }}
        />
      ))}
    </header>
  );
};

export default Header;