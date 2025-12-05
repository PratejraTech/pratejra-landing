import React from 'react';
import { Shield, Eye, Sword, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Benevolent Ghosts Concept
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Benevolent Ghosts are silent protectors, bound by a code of wisdom, compassion, discretion, and precision.
            They do not act for profit or political gain; their strength lies in their invisibility, their restraint,
            and their commitment to right action.
          </p>
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
            <p className="text-slate-300 italic">
              Just as ghosts can pass unseen through walls, Shaivra's operations move fluidly through the barriers
              that hinder truth and protection — whether those barriers are digital firewalls, disinformation campaigns,
              or the bureaucracies of oppressive systems.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Essence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Brand Essence
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Pratejra/Shaivra go together and is more than an organization — it is a veil between worlds.
                Born from the fusion of ancient spiritual discipline and a developing, modern intelligence-like craftsmanship.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                With the paradox of offensive-defensive highlighting the need for both the light and the shadow for effective engagement.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Shaivra operates as a network of benevolent ghost warriors: unseen, agile, and unwavering in their purpose.
              </p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Pratejra vs Shaivra
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-blue-400 font-semibold">Pratejra (The Light)</h4>
                  <p className="text-slate-300 text-sm">The vision and the defensive of the vulnerable</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="text-slate-400 font-semibold">Shaivra (The Shadow)</h4>
                  <p className="text-slate-300 text-sm">The mindset that there is virtue in noble battle, diligent preparation and strategic superiority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Brand Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Benevolence Before All</h3>
              <p className="text-slate-300">Actions must serve life, truth, and dignity.</p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Precision Without Noise</h3>
              <p className="text-slate-300">The right move, at the right time, for the right reason.</p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Secrecy + Consent</h3>
              <p className="text-slate-300">Power without accountability is corruption; we reject it.</p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Security</h3>
              <p className="text-slate-300">Our discernment protects our people, and those that we offer our protection.</p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Wisdom Over Speed</h3>
              <p className="text-slate-300">We act decisively but never rashly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Alignment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Operational Alignment
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-4xl mx-auto">
            Shaivra blends ancient disciplines with cutting-edge AI-powered intelligence capabilities.
            We operate through three core principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Circle of Protection</h3>
              <p className="text-slate-300">
                Any mission must begin with an assessment of how it shields, preserves, or uplifts.
              </p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Ghost Step</h3>
              <p className="text-slate-300">
                Operations leave no unnecessary trace, ensuring discretion and safety for all involved.
              </p>
            </div>
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <Scale className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Mirror of Truth</h3>
              <p className="text-slate-300">
                Internal review and ethical vetting precede every action, ensuring alignment with our benevolent mandate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;