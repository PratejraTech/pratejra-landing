"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const stats = [
  { label: "Communities Empowered", value: "47", detail: "Global networks secured with enterprise-grade cybersecurity across five continents." },
  { label: "AI-Driven Responses", value: "120+", detail: "Automated threat mitigation and incident response systems deployed." },
  { label: "Multilingual AI Models", value: "18", detail: "Localized language processing for global operations and communication." },
  { label: "Quantum-Safe Archives", value: "320TB", detail: "Post-quantum encrypted data repositories with distributed redundancy." },
];

const fieldNotes = [
  {
    title: "Community radio network",
    description: "Deployed AI-powered harassment detection with automated response protocols, reducing incident response time to under 2 minutes.",
    tag: "AI security",
  },
  {
    title: "Faith-based shelters",
    description: "Implemented blockchain-verified intake systems, quantum-encrypted archives, and automated compliance reporting.",
    tag: "Digital continuity",
  },
  {
    title: "Youth climate collective",
    description: "Developed ML-driven misinformation detection and multilingual content generation for global volunteer coordination.",
    tag: "Smart narratives",
  },
];

const practices = [
  {
    title: "AI Risk Intelligence",
    description: "Machine learning analyzes stakeholder dynamics, threat landscapes, and resource allocation for optimal mission planning.",
  },
  {
    title: "Agile Prototyping",
    description: "Rapid development cycles with automated testing, ML validation, and iterative deployment ensure scalable solutions.",
  },
  {
    title: "Knowledge Automation",
    description: "AI-driven documentation, training systems, and monitoring tools enable seamless transitions and ongoing support.",
  },
];

export const ImpactPulse = React.memo(function ImpactPulse() {
  const statsRef = useScrollAnimation('scroll-reveal-up');
  const fieldNotesRef = useScrollAnimation('scroll-reveal-left');
  const practicesRef = useScrollAnimation('scroll-reveal-right');

  return (
    <span className="component-highlight component-container" data-component="impact-pulse">
      <section id="impact-pulse" className="modern-section relative px-4 sm:px-6 lg:px-8" aria-label="Impact snapshots and field practices">
        <div className="max-w-7xl mx-auto space-y-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">field telemetry</p>
           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">Technological impact, precision operations.</h3>
           <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
             We rarely name partners publicly, but we can share our technological rhythms: secure networks, preserve data integrity, and maintain open channels for collaboration.
           </p>
        </motion.header>

        {/* Stats Grid */}
          <div ref={statsRef as React.RefObject<HTMLDivElement>} className="modern-grid stagger-animation">
          {stats.map((stat, idx) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-orange-500/30 bg-black/40 backdrop-blur-md p-6 text-center hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">{stat.value}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{stat.detail}</p>
            </motion.article>
          ))}
        </div>

        {/* Practices and Field Notes */}
        <div className="asymmetric-grid asymmetric-grid-2 gap-12">
           <div ref={fieldNotesRef} className="space-y-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-gray-600/30 shadow-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-orange-400 mb-2">Field Operations</p>
              <h3 className="text-xl font-semibold text-white mb-2">Recent Mission Examples</h3>
              <p className="text-sm text-gray-300">
                Each deployment begins with a critical question: "How can technology ease the burden right now?"
              </p>
            </div>
            <div className="space-y-4">
              {fieldNotes.map((note, idx) => (
                <div key={note.title} className="rounded-lg border border-gray-600/30 bg-black/20 p-4 hover:border-orange-400 hover:bg-orange-900/20 transition-all duration-300">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
                    <span>{note.tag}</span>
                    <span>{idx + 1}</span>
                  </div>
                  <p className="text-base font-medium text-white mb-1">{note.title}</p>
                  <p className="text-sm text-gray-300">{note.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={practicesRef} className="space-y-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-gray-600/30 shadow-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-teal-400 mb-2">Operational Framework</p>
              <h3 className="text-xl font-semibold text-white mb-2">Our Proven Methodology</h3>
              <p className="text-sm text-gray-300">
                These principles ensure sustainable, effective operations. Quality over speed, always.
              </p>
            </div>
            <div className="space-y-3">
              {practices.map((practice, idx) => (
                <div key={practice.title} className="p-4 rounded-lg bg-black/20 border border-gray-600/30 hover:border-teal-400 hover:bg-teal-900/20 transition-all duration-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-1">
                    Phase {idx + 1}
                  </p>
                  <p className="text-base text-white font-medium mb-1">{practice.title}</p>
                  <p className="text-sm text-gray-300">{practice.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-center hover:border-orange-300 hover:bg-orange-100 transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.3em] text-orange-700">
                Ready to collaborate? → Contact us for a secure consultation.
              </p>
            </div>
          </div>
          </div>
      </div>
    </section>
  </span>
  );
});

ImpactPulse.displayName = 'ImpactPulse';

export default ImpactPulse;
