'use client'

import { motion } from "framer-motion";

/**
 * Philosophy section component
 */
export function PhilosophySection() {
  const coreValues = [
    { title: "Benevolence Before All", desc: "Actions must serve life, truth, and dignity through ethical technology." },
    { title: "Precision Through Innovation", desc: "AI-driven analysis ensures the right solution, at the right time, with maximum efficiency." },
    { title: "Transparency + Security", desc: "Blockchain-verified operations with zero-trust architecture maintain accountability." },
    { title: "Quantum Security", desc: "Post-quantum cryptography and advanced threat detection protect our networks and partners." },
    { title: "Wisdom Augmented by AI", desc: "Machine learning enhances human judgment for decisive, calculated actions." }
  ];

  const operationalPrinciples = [
    {
      title: "Digital Risk Modeling",
      description: "Every mission begins with comprehensive threat intelligence, vulnerability assessment, and impact simulation using advanced analytics."
    },
    {
      title: "Ephemeral Operations",
      description: "Zero-knowledge deployments with automated cleanup, homomorphic encryption, and decentralized execution ensure complete operational security."
    },
    {
      title: "AI Ethical Framework",
      description: "Machine learning governance and decentralized consensus validate every decision against our principles, with human oversight for critical operations."
    }
  ];

  return (
    <span className="component-highlight component-container" data-component="philosophy-section">
      <section id="philosophy-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Philosophy and values">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Our Philosophy
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {/* Brand Essence */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          >
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">Brand Essence</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Pratejra/Shaivra is more than an organization — it is a bridge between tradition and innovation.
                Born from the fusion of ancient wisdom and cutting-edge technology, we deploy advanced solutions for those committed to positive change.
              </p>
              <p>
                We prioritize <strong>community</strong>, <strong>non-profits</strong>, and <strong>families</strong>. Every project must align with our core purpose of protection and empowerment.
              </p>
              <p>
                Shaivra operates as a network of cyber-protectors: leveraging AI, blockchain, and autonomous systems for invisible, precise, and impactful operations.
              </p>
            </div>
          </motion.article>

          {/* The Cyber-Ghosts Concept */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          >
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">The Cyber-Ghosts Concept</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Cyber-Ghosts are AI-enhanced protectors, guided by algorithms of wisdom, compassion, discretion, and precision.
                They operate beyond profit motives, utilizing machine learning for threat prediction, quantum encryption for security, and autonomous systems for execution.
              </p>
              <p>
                Like digital phantoms navigating cyberspace, Shaivra's operations bypass traditional barriers — from advanced persistent threats and deepfake campaigns
                to systemic vulnerabilities — deploying next-generation defenses that protect truth and empower the vulnerable.
              </p>
            </div>
          </motion.article>

          {/* The Benevolent Ghosts */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent"
          >
            <h2 className="text-2xl text-foreground mb-4 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">The Benevolent Ghosts Concept</h2>
             <p className="mb-4 text-sm">
               Cyber-Ghosts are <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">AI-enhanced protectors</span>, guided by algorithms of
               wisdom, compassion, discretion, and precision. They operate beyond profit motives, utilizing machine learning for threat prediction, quantum encryption for security, and autonomous systems for execution.
             </p>
             <p className="text-sm">
               Like digital phantoms navigating cyberspace, Shaivra's operations bypass traditional barriers — from advanced persistent threats and deepfake campaigns
               to systemic vulnerabilities — deploying <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">next-generation defenses</span> that protect truth and empower the vulnerable.
             </p>
          </motion.article>

          {/* Core Values */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          >
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  className="p-4 rounded-lg border-l-4 border-orange-400 bg-orange-50/50"
                >
                  <h3 className="text-gray-800 mb-2 font-medium">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Operational Principles */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          >
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">Operational Principles</h2>
            <div className="space-y-4">
              {operationalPrinciples.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                  className="p-6 rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <h3 className="text-gray-800 mb-3 font-medium">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Call to Alignment */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
            className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200 shadow-sm"
          >
            <h2 className="text-2xl text-gray-800 mb-6 font-semibold">Call to Alignment</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Shaivra does not recruit; it recognizes those already aligned with our mission of protection and innovation.
              </p>
              <p className="text-lg font-medium text-orange-700">
                To those who move through the world with precision, compassion, and discipline: our presence is your ally.
              </p>
              <p className="text-lg font-medium text-orange-700">
                To those who exploit, harm, or distort truth: our presence is your shadow.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
    </span>
  );
}
