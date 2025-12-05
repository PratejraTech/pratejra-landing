import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Zap } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Essence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pratejra/Shaivra – Mission Driven Alignment
              </h2>
              <p className="text-lg text-slate-300 italic">
                "Ownership by noone, doing nothing, and going nowhere"
              </p>
              <p className="text-sm text-slate-400 mt-2">Sunyata Riom • Nov 11, 2025</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">The Vision</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  A vision of groups of people living in Mission Alignment while doing constructive work in a manner which is defensive of vulnerable people including children, families, and as the world descends into authoritarianism.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Owned by no-one, but held by everything, the mission is the facilitation through the development of people, and projects which contribute directly to the lives of others. Financial gain takes a back seat to spiritual gain despite the high potential financial value of the goals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                  <p className="text-slate-300 italic text-lg mb-4">
                    "Quite simply, the world and life itself cannot thrive off money alone. The instrument has become the chains which binds us."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Call to Alignment
            </h2>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Shaivra does not recruit; it recognizes those already aligned.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <p className="text-blue-400 font-semibold mb-2">To those who move through the world with precision, compassion, and discipline:</p>
                <p className="text-slate-300">our presence is your ally.</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <p className="text-red-400 font-semibold mb-2">To those who exploit, harm, or distort truth:</p>
                <p className="text-slate-300">our presence is your shadow.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Initiate Contact
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold rounded-lg transition-colors duration-200"
              >
                Learn Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;