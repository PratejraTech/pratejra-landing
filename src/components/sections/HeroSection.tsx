import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          From stillness,<br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">Pratejra</span> shapes.<br />
          From silence,<br />
          <span className="bg-gradient-to-r from-violet-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Shaivra</span> strikes.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          We Work While Doing the Work. We Ask For Little For We Have All We Need.
        </p>

        {/* Sanskrit Mantra */}
        <div className="mb-12 p-6 bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-800/50 rounded-2xl border border-slate-600/30 backdrop-blur-sm">
          <p className="text-xl text-blue-300 italic font-serif mb-3 text-center">
            "Shaantāt hanti, maunāt srujati. Shaivraḥ."
          </p>
          <p className="text-sm text-slate-400 text-center">
            "From peace, slay; from silence, create."
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 hover:from-blue-700 hover:via-violet-700 hover:to-emerald-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            Explore Our Mission
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-slate-600 hover:border-violet-400 text-slate-300 hover:text-violet-400 font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-violet-500/20 transform hover:scale-105"
          >
            Initiate Contact
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;