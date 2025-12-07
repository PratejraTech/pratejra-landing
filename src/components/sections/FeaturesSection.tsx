import React from 'react';
import { Shield, Eye, Sword, Scale } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'AI-Augmented Protectors',
    description: 'Machine learning-driven guardians, utilizing quantum-secure encryption, predictive analytics, and autonomous response systems. Operations remain ethically aligned and non-commercial.',
  },
  {
    icon: Eye,
    title: 'Digital Risk Assessment',
    description: 'Every mission begins with comprehensive threat modeling, vulnerability scanning, and impact analysis to ensure protective measures are precisely targeted.',
  },
  {
    icon: Sword,
    title: 'Zero-Trace Operations',
    description: 'Ephemeral infrastructure with automated cleanup, end-to-end encryption, and blockchain-verified audit trails ensure complete operational discretion.',
  },
  {
    icon: Scale,
    title: 'Ethical AI Governance',
    description: 'Decentralized decision frameworks and AI-powered ethical review systems validate every action against our principles of benevolence and precision.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Technology-Driven Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology integrated with proven operational methodologies. Every solution is tested, secure, and purpose-built for impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = [
              { bg: 'from-orange-50 to-yellow-50', hover: 'hover:border-orange-300 hover:shadow-orange-200/50', icon: 'text-orange-500', title: 'group-hover:text-orange-600' },
              { bg: 'from-yellow-50 to-orange-50', hover: 'hover:border-yellow-300 hover:shadow-yellow-200/50', icon: 'text-yellow-500', title: 'group-hover:text-yellow-600' },
              { bg: 'from-teal-50 to-blue-50', hover: 'hover:border-teal-300 hover:shadow-teal-200/50', icon: 'text-teal-500', title: 'group-hover:text-teal-600' },
              { bg: 'from-blue-50 to-teal-50', hover: 'hover:border-blue-300 hover:shadow-blue-200/50', icon: 'text-blue-500', title: 'group-hover:text-blue-600' }
            ];
            const colorScheme = colors[index % colors.length]!;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} rounded-xl p-6 border border-gray-200 ${colorScheme.hover} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-white to-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-200`}>
                  <feature.icon className={`w-6 h-6 ${colorScheme.icon}`} />
                </div>
                <h3 className={`text-xl font-semibold text-gray-800 mb-3 ${colorScheme.title} transition-colors`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white via-orange-50/50 to-yellow-50/50 rounded-2xl p-8 border border-orange-200/50 max-w-4xl mx-auto shadow-xl shadow-orange-100/20">
            <div className="relative">
              <Shield className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-orange-200/50 to-yellow-200/50 rounded-full blur-xl mx-auto"></div>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-500 bg-clip-text text-transparent mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 italic mb-6 font-serif">
              "Through advanced technology, we secure the future."
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Shaivra operates as a technology force multiplier for mission-aligned organizations. We deploy enterprise-grade cybersecurity, AI intelligence, and operational frameworks to empower vulnerable communities with capabilities previously reserved for nation-states.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;