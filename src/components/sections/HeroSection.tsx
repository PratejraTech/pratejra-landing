'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Protecting<br />
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Communities</span><br />
          in the<br />
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Digital Shadows</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          We stand as cyber-guardians for non-profits, activists, and cultural stewards. Our AI-enhanced protectors deploy quantum security and discreet operations to shield those who care for others.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Shielding</h3>
            <p className="text-gray-600 text-sm">Discreet protection for non-profits, activists, and cultural stewards facing digital threats.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-violet-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">👻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cyber-Ghosts</h3>
            <p className="text-gray-600 text-sm">AI-enhanced protectors operating beyond traditional barriers with wisdom and precision.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Benevolent Operations</h3>
            <p className="text-gray-600 text-sm">Ethical technology deployment focused on protection, not profit or surveillance.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/allies"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            Join Our Allies
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-emerald-300 hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg transform hover:scale-105"
          >
            Connect Securely
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;