import { motion } from "framer-motion";

const stats = [
  { label: "Communities Shielded", value: "47", detail: "Urban & rural regions fortified across 5 continents." },
  { label: "Operations Stabilized", value: "120+", detail: "Rapid-response missions preventing data loss & intimidation." },
  { label: "Languages Supported", value: "18", detail: "Localization + cultural stewards embedded in each engagement." },
  { label: "Sensitive Assets Preserved", value: "320TB", detail: "Archives, testimonies, and case files replicated & secured." },
];

const pulseSignals = [
  {
    title: "Signal → Shield",
    description: "We convert intelligence into protective envelopes that keep teams breathing room.",
  },
  {
    title: "Witness → Proof",
    description: "We transform vulnerable testimony into redundant, tamper-proof records.",
  },
  {
    title: "Threat → Silence",
    description: "We absorb digital aggression, rerouting attention away from those on the front line.",
  },
];

export function ImpactPulse() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50" aria-label="Impact pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-violet-950/30 to-slate-950 pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-16 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-violet-200/70 mb-4">impact telemetry</p>
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-foreground via-violet-300 to-cyan-200 bg-clip-text text-transparent">
            Proof of Quiet Force
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Shaivra operates in the margins—yet every mission leaves a measurable shift in safety, continuity, and morale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-card/90 to-violet-500/10 p-6"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80 mb-2">{stat.label}</p>
                <p className="text-4xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-indigo-900/40 via-transparent to-slate-900/60 p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-violet-200/70 mb-2">Field pulse</p>
              <h3 className="text-2xl font-semibold text-foreground">How we convert urgency into protection.</h3>
              <p className="text-sm text-muted-foreground mt-3">
                Every engagement follows a triad: sense, shield, and stabilize. The following signals describe the typical
                transformation that aligned partners experience when we enter the theatre.
              </p>
            </div>
            <div className="space-y-4">
              {pulseSignals.map((signal, idx) => (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="border border-violet-500/40 rounded-2xl p-4 bg-gradient-to-r from-violet-500/10 to-transparent"
                >
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-100">{signal.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{signal.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl border border-violet-500/30 px-4 py-3 text-xs uppercase tracking-[0.3em] text-center text-violet-100">
              Designate an operation → Receive encrypted intake within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactPulse;
