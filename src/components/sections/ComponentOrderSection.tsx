"use client";

import { motion } from "framer-motion";
import { COMPONENT_ORDERS } from "../../constants";

/**
 * Component order workflow section
 */
export function ComponentOrderSection() {
  return (
    <span className="component-highlight component-container" data-component="component-order">
      <section
        id="component-order"
        className="modern-section relative px-4 sm:px-6 lg:px-8"
        aria-label="Component order workflow"
      >
        <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">component order</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">A natural flow from hello to handoff</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We keep the sequence predictable so your team knows exactly what happens next. If something feels off, we slow down together and adjust.
          </p>
        </motion.header>

        <div className="relative space-y-6">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-emerald-500/40" aria-hidden="true" />

          {COMPONENT_ORDERS.map((component, idx) => (
            <motion.article
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative md:pl-16"
            >
              <div className="flex gap-4 items-start rounded-xl border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-sm font-semibold text-emerald-100">
                    {component.id}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">{component.label}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{component.description}</p>
                </div>
              </div>
              {idx !== COMPONENT_ORDERS.length - 1 && (
                <div className="hidden md:block absolute left-[29px] top-full w-px h-6 bg-emerald-500/20" aria-hidden="true" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    </span>
  );
}

export default ComponentOrderSection;
