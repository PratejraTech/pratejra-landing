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

      {/* Features Section */}
      <FeaturesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin the Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join us in the veil between worlds. Let's discuss how we can serve your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Start the Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;