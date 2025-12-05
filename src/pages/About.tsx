import React from 'react';
import { Shield, Eye, Sword, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Benevolent Ghosts
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Silent protectors... unbound spirit guided by ancient wisdom.
            Financial gain takes a back seat to the mission.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We operate as ghosts—unseen, unfettered, yet ever-present in the shadows of need.
                Our work transcends traditional boundaries, serving communities, preserving heritage,
                and countering exploitation with the precision of ancient wisdom and modern intelligence.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every decision is anchored in our core principles: benevolence, precision, secrecy, security, and wisdom.
                If an idea doesn't nourish people, stories, or helpers, it waits.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Core Values
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Compassion drives action, not profit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Every strike is calculated, every word measured
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Operations remain veiled, identities protected
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Data and lives are fortified against threats
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Ancient insights guide modern tactics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Living Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Sense & Settle</h3>
              <p className="text-slate-300">
                We map people, risks, and energy levels so any plan centers those realities.
              </p>
            </div>
            <div className="text-center">
              <Sword className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Co-create & Prototype</h3>
              <p className="text-slate-300">
                We sketch shoulder-to-shoulder, test with the smallest crew, and expand only when it feels right.
              </p>
            </div>
            <div className="text-center">
              <Scale className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Teach & Transition</h3>
              <p className="text-slate-300">
                We leave rituals, docs, and humans available for check-ins once you take the lead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;