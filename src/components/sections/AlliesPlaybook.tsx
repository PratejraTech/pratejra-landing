import { motion } from "framer-motion";
import { Shield, Radio, FolderLock } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Protect",
    description: "Calm security help that keeps your people safe online and on the ground.",
    bullets: ["Fast risk triage calls", "Spin up safe chat rooms", "Friendly humans on standby"],
  },
  {
    icon: Radio,
    title: "Amplify",
    description: "Storytelling support, research, and listening posts that lift your message.",
    bullets: ["Clear research briefs", "Rapid myth-busting kits", "Localized listening posts"],
  },
  {
    icon: FolderLock,
    title: "Preserve",
    description: "Lightweight archival tooling and continuity plans for when pressure hits.",
    bullets: ["Distributed archives", "Consent-first data rooms", "Gentle resilience drills"],
  },
];

export function AlliesPlaybook() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50" aria-label="Allies playbook">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-16 rounded-[2.5rem] bg-background/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80 mb-3">allies playbook</p>
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-foreground via-emerald-200 to-foreground bg-clip-text text-transparent">
            Choose the support that fits
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Pick a pillar and we braid in beside you. Each lane combines software, research, and caring operators so you can
            focus on people instead of panic.
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
                className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6 flex flex-col gap-4 shadow-lg shadow-emerald-950/30"
              >
                <div className="w-12 h-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{pillar.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
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
