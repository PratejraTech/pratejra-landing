import { motion } from "framer-motion";
import { MISSION_OBJECTIVES } from "../../constants";

/**
 * Mission objectives section component
 */
export function MissionObjectives() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50" aria-label="Mission objectives">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative border-x border-violet-500/20 px-6 sm:px-8 lg:px-12 py-12">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-4 mb-16 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-8 text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-foreground via-violet-400 to-foreground bg-clip-text text-transparent"
          >
            Our Mission
          </motion.h2>
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-l from-transparent via-violet-500/50 to-violet-500/50" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {MISSION_OBJECTIVES.map((objective, index) => (
            <motion.article 
              key={objective.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative border-2 border-border rounded-xl p-8 hover:border-violet-500/50 transition-all duration-300 bg-gradient-to-br from-card via-card to-violet-500/5 shadow-sm hover:scale-[1.02] hover:to-violet-500/15"
            >
              <div className="absolute top-6 right-6 text-5xl opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                {objective.number}
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-3 text-sm tracking-widest font-medium">
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

