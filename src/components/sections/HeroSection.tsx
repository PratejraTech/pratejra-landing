import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGE_URLS } from "../../constants";

type HeroSectionProps = {
  onNavigateToAllies?: () => void;
};

const heroHighlights = [
  {
    title: "Listen with care",
    description: "We start with one gentle call to learn who you serve and where the tensions live.",
  },
  {
    title: "Build with you",
    description: "We co-design tools and playbooks side-by-side so they feel like home to your team.",
  },
  {
    title: "Leave you ready",
    description: "We depart after documenting, training, and ensuring friendly humans stay on call.",
  },
];

const heroGuides = [
  { title: "Grounded tech", detail: "Simple software with thoughtful defaults." },
  { title: "Human pace", detail: "Sprint alongside community rhythms." },
  { title: "Shared stewardship", detail: "You keep ownership of data and direction." },
];

/**
 * Hero section with a softer, natural layout
 */
export function HeroSection({ onNavigateToAllies }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden border-b border-border/50"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.08),_transparent_45%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-16 left-20 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
          className="absolute bottom-12 right-12 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.6em] text-emerald-200/80 mb-4"
            >
              natural interface · human pace
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Softer software, shared stewardship.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              Pratejra/Shaivra pairs purpose-built tools with community rituals. We serve NGOs, neighborhood leaders, and
              cultural stewards who need discreet, steady collaborators.
            </motion.p>

            <div className="space-y-4 mb-10">
              {heroHighlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-foreground/5 via-transparent to-transparent"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-semibold text-emerald-100">
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-base font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onNavigateToAllies}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-lime-500 to-teal-500 text-sm font-semibold tracking-[0.35em] uppercase text-emerald-950 hover:shadow-lg hover:shadow-emerald-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                See the playbook
              </button>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-emerald-500/40 text-sm font-semibold tracking-[0.35em] uppercase text-foreground/80 hover:border-emerald-500/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background text-center"
              >
                Write to us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-[2.75rem] border border-emerald-500/30 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6 lg:p-8 space-y-6">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl bg-emerald-500/20" aria-hidden="true" />
                  <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30">
                    <ImageWithFallback
                      src={IMAGE_URLS.BUDDHA_MEDITATION}
                      alt="Calm figure meditating"
                      className="w-full h-64 object-cover opacity-90"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {heroGuides.map((guide) => (
                    <div key={guide.title} className="p-4 rounded-2xl bg-foreground/5 border border-border/30">
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{guide.title}</p>
                      <p className="text-sm text-foreground mt-2">{guide.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/90">Promise</p>
                <p className="text-lg text-foreground mt-3">
                  We build the quiet thing you need, teach every click, and leave you with the keys.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
