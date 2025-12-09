'use client'

import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-t border-slate-700/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - Takes more space on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-10 h-10 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Pratejra/Shaivra</h3>
                <p className="text-sm text-slate-400">The Veil Between Worlds</p>
              </div>
            </div>

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
                className="block text-slate-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-slate-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-slate-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-slate-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
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
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-sm">contact@pratejra.build</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300 group">
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <Phone className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300 group">
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
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
                className="w-10 h-10 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-violet-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-violet-400 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>


          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
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
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;