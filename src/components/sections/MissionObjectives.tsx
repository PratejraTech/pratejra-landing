import { motion } from "framer-motion";
import { MISSION_OBJECTIVES } from "../../constants";

/**
 * Mission objectives section component
 */
export function MissionObjectives() {
  const accentGradients = [
    "from-emerald-500/15 via-background to-transparent",
    "from-teal-500/15 via-background to-transparent",
    "from-lime-500/15 via-background to-transparent",
    "from-cyan-500/15 via-background to-transparent",
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50" aria-label="Mission objectives">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.05] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-12 bg-background/30 backdrop-blur-sm rounded-[2.5rem]">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-4 mb-16 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-8 text-center text-3xl md:text-4xl font-semibold text-foreground"
          >
            What we show up for
          </motion.h2>
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-l from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center text-sm text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          These objectives anchor every decision. If an idea doesn&apos;t nourish people, stories, or helpers, it waits.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {MISSION_OBJECTIVES.map((objective, index) => (
            <motion.article 
              key={objective.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group relative border border-border rounded-3xl p-8 hover:border-emerald-500/40 transition-all duration-300 bg-gradient-to-br ${accentGradients[index % accentGradients.length]} shadow-sm hover:scale-[1.01]`}
            >
              <div className="absolute top-6 right-6 text-5xl opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                {objective.number}
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-3 text-sm tracking-widest font-medium">
                  {objective.number}
                </div>
                <h3 className="text-xl mb-3 font-medium">{objective.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {objective.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
