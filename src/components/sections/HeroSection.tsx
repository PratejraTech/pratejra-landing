'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { MagicButton } from '../ui/MagicButton';
import { OptimizedImage } from '../ui/optimized-image';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Enhanced Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Dotted Shader Background */}
            <div className="absolute inset-0 rounded-full opacity-30">
              <div className="w-full h-full rounded-full border-2 border-dashed border-emerald-400/50 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border border-dashed border-teal-400/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Black Circular Frame */}
            <div className="relative bg-black rounded-full p-4 shadow-2xl border border-gray-800">
              <OptimizedImage
                src="/media/logo.png"
                alt="Pratejra Logo"
                width={120}
                height={120}
                className="object-contain rounded-full"
                priority={true}
              />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <TypewriterText
            text="Cybersecurity That Serves Communities First"
            speed={80}
            className="block"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          <span className="text-community-400 font-semibold">Free protection for worthy causes.</span> We exist to shield non-profits, activists, and cultural stewards from digital threats—because when you protect others, someone should protect you.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-community-500 rounded-full animate-pulse"></div>
            <span>No cost for community orgs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-hope-500 rounded-full animate-pulse"></div>
            <span>72-hour rapid response</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-wisdom-500 rounded-full animate-pulse"></div>
            <span>Ethical AI protection</span>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-guardian-900/60 backdrop-blur-md rounded-2xl p-6 border border-community-500/30 shadow-2xl hover:border-community-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-community-500 to-community-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-community-500/20">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Community-First Security</h3>
            <p className="text-slate-300 text-sm">Built specifically for non-profits and activists. We understand your constraints and speak your language.</p>
            <div className="mt-3 text-xs text-community-400 font-medium">Free for community orgs</div>
          </div>

          <div className="bg-guardian-900/60 backdrop-blur-md rounded-2xl p-6 border border-hope-500/30 shadow-2xl hover:border-hope-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-hope-500 to-hope-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-hope-500/20">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">72-Hour Rapid Response</h3>
            <p className="text-slate-300 text-sm">When threats emerge, we're there within 72 hours. No bureaucracy, no waiting periods.</p>
            <div className="mt-3 text-xs text-hope-400 font-medium">Guaranteed response time</div>
          </div>

          <div className="bg-guardian-900/60 backdrop-blur-md rounded-2xl p-6 border border-wisdom-500/30 shadow-2xl hover:border-wisdom-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-wisdom-500 to-wisdom-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-wisdom-500/20">
              <span className="text-2xl">🕊️</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ethical AI Guardians</h3>
            <p className="text-slate-300 text-sm">AI that protects, not surveils. Our systems are designed to serve human rights and community safety.</p>
            <div className="mt-3 text-xs text-wisdom-400 font-medium">Privacy-first design</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagicButton
            size="lg"
            onClick={() => window.location.href = '/allies'}
            className="bg-gradient-to-r from-community-600 to-community-500 hover:from-community-500 hover:to-community-400 text-white shadow-lg shadow-community-500/25"
          >
            Get Free Protection
            <ArrowRight className="ml-2 w-6 h-6" />
          </MagicButton>

          <MagicButton
            variant="secondary"
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="bg-guardian-800/80 hover:bg-guardian-700/80 border-guardian-600 text-slate-300 hover:text-white"
          >
            Learn More
          </MagicButton>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">Trusted by community organizations worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-community-400">
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs">Communities Protected</div>
            </div>
            <div className="text-hope-400">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-xs">AI Responses Deployed</div>
            </div>
            <div className="text-wisdom-400">
              <div className="text-2xl font-bold">18</div>
              <div className="text-xs">Languages Supported</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;