import { motion } from "framer-motion";

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

export function ImpactPulse() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50" aria-label="Impact snapshots and field practices">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-950 pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-16 rounded-[2.75rem] space-y-12 bg-background/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">field telemetry</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Natural impact, steady hands.</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            We rarely name partners publicly, but we can share rhythms that repeat: protect the people, preserve the story,
            and leave the door open for questions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-foreground/5 to-transparent p-6 flex flex-col gap-2"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</p>
              <p className="text-4xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6 lg:p-8 space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80 mb-2">Field notes</p>
              <h3 className="text-2xl font-semibold text-foreground">Examples from the last year.</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Each mission begins with a natural question: “What eases the strain right now?” These vignettes show how that
                answer takes different shapes.
              </p>
            </div>
            <div className="space-y-5">
              {fieldNotes.map((note, idx) => (
                <div key={note.title} className="rounded-2xl border border-border/40 bg-background/30 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">
                    <span>{note.tag}</span>
                    <span>{idx + 1}</span>
                  </div>
                  <p className="text-lg font-medium text-foreground">{note.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{note.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 lg:p-8 flex flex-col gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80 mb-2">Living practices</p>
              <h3 className="text-2xl font-semibold text-foreground">The cadence we rely on.</h3>
              <p className="text-sm text-muted-foreground mt-2">
                These principles keep the work natural. If any step feels rushed, we slow down together.
              </p>
            </div>
            <div className="space-y-4">
              {practices.map((practice, idx) => (
                <div key={practice.title} className="p-5 rounded-2xl bg-background/40 border border-emerald-500/20">
                  <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-1">
                    Step {idx + 1}
                  </p>
                  <p className="text-lg text-foreground">{practice.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{practice.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-emerald-500/40 px-4 py-3 text-xs uppercase tracking-[0.4em] text-center text-emerald-100">
              Share a note → receive a warm intake link in under 24h.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ImpactPulse;
