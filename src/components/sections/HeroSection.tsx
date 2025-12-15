'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';
import { MagicButton } from '../ui/MagicButton';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <TypewriterText
            text="Protecting Communities in the Digital Shadows"
            speed={80}
            className="block"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We stand as cyber-guardians for non-profits, activists, and cultural stewards. Our AI-enhanced protectors deploy quantum security and discreet operations to shield those who care for others.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 shadow-2xl">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Community Shielding</h3>
            <p className="text-gray-300 text-sm">Discreet protection for non-profits, activists, and cultural stewards facing digital threats.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-violet-500/30 shadow-2xl">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">👻</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Cyber-Ghosts</h3>
            <p className="text-gray-300 text-sm">AI-enhanced protectors operating beyond traditional barriers with wisdom and precision.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/30 shadow-2xl">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Benevolent Operations</h3>
            <p className="text-gray-300 text-sm">Ethical technology deployment focused on protection, not profit or surveillance.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagicButton
            size="lg"
            onClick={() => window.location.href = '/allies'}
          >
            Join Our Allies
            <ArrowRight className="ml-2 w-6 h-6" />
          </MagicButton>

          <MagicButton
            variant="secondary"
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Connect Securely
          </MagicButton>
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