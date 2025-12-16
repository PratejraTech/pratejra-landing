'use client'

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { OptimizedImage } from '../ui/optimized-image';

const Footer: React.FC = () => {
  return (
    <footer className="relative glass-overlay border-t border-white/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - Takes more space on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group perspective-container">
              <div className="relative transform-3d group-hover:rotate-y-6 group-hover:translate-z-10 transition-all duration-500">
                {/* Logo Container with Glass-morphism */}
                <div className="relative w-12 h-12 glass-card rounded-2xl p-1.5 shadow-2xl border border-white/20 hover:border-community-400/50 hover:shadow-glow-community transition-all duration-500 group-hover:scale-110">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-wisdom-400/10 to-community-400/5 blur-sm group-hover:from-wisdom-400/20 group-hover:to-community-400/10 transition-all duration-500" aria-hidden="true" />
                  
                  <OptimizedImage
                    src="/media/logo.png"
                    alt="Pratejra Logo"
                    width={48}
                    height={48}
                    sizes="48px"
                    className="object-contain rounded-xl drop-shadow-2xl relative z-10"
                  />
                  
                  {/* Subtle inner shadow */}
                  <div className="absolute inset-0 rounded-xl shadow-inner shadow-guardian-900/50 group-hover:shadow-guardian-900/30 transition-all duration-500" aria-hidden="true" />
                </div>
                
                {/* Status indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-community-500 rounded-full animate-pulse shadow-sm shadow-community-500/50 ring-2 ring-guardian-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-community-300 transition-colors">Pratejra</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">The Veil Between Worlds</p>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed max-w-md">
              Benevolent Ghosts operating as a force multiplier for aligned organizations.
              Through the unseen, we protect the sacred.
            </p>

            <div className="flex items-center space-x-2 text-slate-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm italic">"Shaantāt hanti, maunāt srujati. Shaivraḥ."</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-slate-300 hover:text-community-400 transition-all duration-200 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-slate-300 hover:text-hope-400 transition-all duration-200 hover:translate-x-1"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-slate-300 hover:text-wisdom-400 transition-all duration-200 hover:translate-x-1"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-slate-300 hover:text-community-400 transition-all duration-200 hover:translate-x-1"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300 group">
                <div className="w-10 h-10 glass-card rounded-2xl flex items-center justify-center group-hover:bg-community-500/20 group-hover:shadow-glow-community transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 group-hover:text-community-400 transition-colors" />
                </div>
                <span className="text-sm">contact@pratejra.build</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300 group">
                <div className="w-10 h-10 glass-card rounded-2xl flex items-center justify-center group-hover:bg-hope-500/20 group-hover:shadow-glow-hope transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 group-hover:text-hope-400 transition-colors" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300 group">
                <div className="w-10 h-10 glass-card rounded-2xl flex items-center justify-center group-hover:bg-wisdom-500/20 group-hover:shadow-glow-wisdom transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-5 h-5 group-hover:text-wisdom-400 transition-colors" />
                </div>
                <span className="text-sm">Global Operations</span>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Follow</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 glass-card hover:bg-community-500/20 rounded-2xl flex items-center justify-center text-slate-300 hover:text-community-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-community transform-gpu"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass-card hover:bg-hope-500/20 rounded-2xl flex items-center justify-center text-slate-300 hover:text-hope-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-hope transform-gpu"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass-card hover:bg-wisdom-500/20 rounded-2xl flex items-center justify-center text-slate-300 hover:text-wisdom-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-wisdom transform-gpu"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>


          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2025 Pratejra/Shaivra. v1.0.0 Authored by Sunyata, August 2025.
              </p>
              <p className="text-slate-500 text-xs italic mt-1">
                It belongs to all those that carry the mission forwards.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
            </div>
          </div>

          {/* Subtle accent line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-community-500/50 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;