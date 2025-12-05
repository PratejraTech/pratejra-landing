import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const stats = [
  { label: "Communities Supported", value: "47", detail: "Neighborhoods, clinics, and youth centers across five continents." },
  { label: "Rapid Missions", value: "120+", detail: "Moments where we steadied teams facing harassment or outages." },
  { label: "Languages Covered", value: "18", detail: "Local stewards help us speak with warmth and clarity." },
  { label: "Stories Preserved", value: "320TB", detail: "Photos, filings, and testimonies kept redundant and safe." },
];

const fieldNotes = [
  {
    title: "Community radio cooperative",
    description: "Built a quiet alert loop so hosts could flag harassment attempts in under five minutes.",
    tag: "Signal care",
  },
  {
    title: "Faith-based shelters",
    description: "Digitized intake, stored records redundantly, and trained caretakers on daily exports.",
    tag: "Continuity",
  },
  {
    title: "Youth climate collective",
    description: "Co-created myth-busting kits and multilingual social templates for rotating volunteers.",
    tag: "Narrative ops",
  },
];

const practices = [
  {
    title: "Sense & settle",
    description: "We map people, risks, and energy levels so any plan centers those realities.",
  },
  {
    title: "Co-create & prototype",
    description: "We sketch shoulder-to-shoulder, test with the smallest crew, and expand only when it feels right.",
  },
  {
    title: "Teach & transition",
    description: "We leave rituals, docs, and humans available for check-ins once you take the lead.",
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
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">Natural impact, steady hands.</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We rarely name partners publicly, but we can share rhythms that repeat: protect the people, preserve the story, and leave the door open for questions.
          </p>
        </motion.header>

        {/* Stats Grid */}
        <div ref={statsRef} className="modern-grid stagger-animation">
          {stats.map((stat, idx) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6 text-center hover:border-emerald-500/40 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">{stat.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.detail}</p>
            </motion.article>
          ))}
        </div>

        {/* Practices and Field Notes */}
        <div className="asymmetric-grid asymmetric-grid-2 gap-12">
          <div ref={fieldNotesRef} className="space-y-6 glassmorphism p-6 rounded-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80 mb-2">Field notes</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Examples from the last year.</h3>
              <p className="text-sm text-muted-foreground">
                Each mission begins with a natural question: "What eases the strain right now?"
              </p>
            </div>
            <div className="space-y-4">
              {fieldNotes.map((note, idx) => (
                <div key={note.title} className="rounded-lg border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-4 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    <span>{note.tag}</span>
                    <span>{idx + 1}</span>
                  </div>
                  <p className="text-base font-medium text-foreground mb-1">{note.title}</p>
                  <p className="text-sm text-muted-foreground">{note.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={practicesRef} className="space-y-6 glassmorphism p-6 rounded-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80 mb-2">Living practices</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">The cadence we rely on.</h3>
              <p className="text-sm text-muted-foreground">
                These principles keep the work natural. If any step feels rushed, we slow down together.
              </p>
            </div>
            <div className="space-y-3">
              {practices.map((practice, idx) => (
                <div key={practice.title} className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                    Step {idx + 1}
                  </p>
                  <p className="text-base text-foreground font-medium mb-1">{practice.title}</p>
                  <p className="text-sm text-muted-foreground">{practice.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent p-4 text-center hover:border-emerald-500/40 transition-all duration-300">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/90">
                Share a note → receive a warm intake link in under 24h.
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
