import React from "react";
import { motion } from "framer-motion";
import { MISSION_OBJECTIVES } from "../../constants";

/**
 * Mission objectives section component
 */
export const MissionObjectives = React.memo(function MissionObjectives() {
  const accentGradients = [
    "from-emerald-500/15 via-background to-transparent",
    "from-teal-500/15 via-background to-transparent",
    "from-lime-500/15 via-background to-transparent",
    "from-cyan-500/15 via-background to-transparent",
  ];

  return (
    <span className="component-highlight component-container" data-component="mission-objectives">
      <section id="mission-objectives" className="modern-section relative px-4 sm:px-6 lg:px-8" aria-label="Mission objectives">
        <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <header className="text-center space-y-4 mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground"
          >
            What we show up for
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            These objectives anchor every decision. If an idea doesn&apos;t nourish people, stories, or helpers, it waits.
          </motion.p>
        </header>

        {/* Objectives Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {MISSION_OBJECTIVES.map((objective, index) => (
            <motion.article
              key={objective.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group relative border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300 bg-gradient-to-br ${accentGradients[index % accentGradients.length]} hover:shadow-md hover:shadow-emerald-900/10`}
            >
              <div className="absolute top-4 right-4 text-3xl opacity-5 group-hover:opacity-10 transition-opacity font-light" aria-hidden="true">
                {objective.number}
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-3 text-sm tracking-wider font-medium uppercase">
                  {objective.number}
                </div>
                <h3 className="text-lg mb-3 font-medium">{objective.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {objective.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </span>
  );
});

MissionObjectives.displayName = 'MissionObjectives';
