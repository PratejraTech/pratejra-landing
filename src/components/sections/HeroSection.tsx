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
          Intelligent<br />
          <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">Solutions</span><br />
          for Modern<br />
          <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-teal-600 bg-clip-text text-transparent">Challenges</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          We harness cutting-edge AI and advanced analytics to deliver secure, scalable solutions that empower organizations and protect communities worldwide.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Intelligence</h3>
            <p className="text-gray-600 text-sm">Advanced machine learning algorithms for threat detection and predictive analytics.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quantum Security</h3>
            <p className="text-gray-600 text-sm">Post-quantum encryption and zero-trust architectures for unbreakable protection.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200/50 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rapid Deployment</h3>
            <p className="text-gray-600 text-sm">Automated systems for instant response and scalable infrastructure management.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/services"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            Explore Solutions
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-orange-300 hover:border-orange-500 text-orange-700 hover:text-orange-800 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-orange-50 hover:shadow-lg transform hover:scale-105"
          >
            Get Started
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