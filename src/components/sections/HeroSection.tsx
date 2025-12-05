import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          From stillness,<br />
          <span className="text-blue-400">Pratejra</span> strikes.<br />
          From silence,<br />
          <span className="text-blue-400">Shaivra</span> shapes.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We Work While Doing the Work. We Ask For Little For We Have All We Need.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Explore Our Mission
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-slate-800/50"
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