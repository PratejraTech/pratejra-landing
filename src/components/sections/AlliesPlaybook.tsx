import { motion } from "framer-motion";
import { Shield, Radio, FolderLock } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Protect",
    description: "Threat intelligence, counter-harassment, and protective comms for ground teams.",
    bullets: ["Risk triage war-room", "Secure channel deployment", "Guardian-on-call rotations"],
  },
  {
    icon: Radio,
    title: "Amplify",
    description: "Narrative ops and research cells that expose truth without exposing your people.",
    bullets: ["OSINT dossiers", "Rapid myth-busting kits", "Localized listening posts"],
  },
  {
    icon: FolderLock,
    title: "Preserve",
    description: "Archival tooling and continuity planning that keep movements intact under pressure.",
    bullets: ["Distributed archives", "Consent-driven data rooms", "Resilience drills"],
  },
];

export function AlliesPlaybook() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" aria-label="Allies playbook">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-indigo-950/40 pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-16 rounded-[2.5rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-violet-200/80 mb-3">allies playbook</p>
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-foreground via-violet-300 to-foreground bg-clip-text text-transparent">
            Craft the Outcome, Not the Noise
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Choose the axis that needs reinforcement and we braid in beside you. Each pillar blends technology, ritual,
            and disciplined operators to create visible change without spotlight.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-card via-card/70 to-violet-500/10 p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl border border-violet-500/40 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center text-violet-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{pillar.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-200/80">
                    Embedded within 72h · Fully discreet
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AlliesPlaybook;
