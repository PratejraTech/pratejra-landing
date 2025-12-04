import { motion } from "framer-motion";
import { COMPONENT_ORDERS } from "../../constants";

/**
 * Component order workflow section
 */
export function ComponentOrderSection() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50"
      aria-label="Component order workflow"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-950 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto relative border-x border-emerald-500/20 px-6 sm:px-8 lg:px-12 py-16 rounded-[2.5rem] bg-background/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">component order</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">A natural flow from hello to handoff</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            We keep the sequence predictable so your team knows exactly what happens next. If something feels off, we slow down
            together and adjust.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-emerald-500/40" aria-hidden="true" />
          <div className="space-y-8 md:space-y-10">
            {COMPONENT_ORDERS.map((component, idx) => (
              <motion.article
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative md:pl-16"
              >
                <div className="flex gap-4 items-start rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-foreground/5 via-transparent to-transparent p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="hidden md:flex w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 items-center justify-center text-sm font-semibold text-emerald-100"
                      aria-hidden="true"
                    >
                      {component.id}
                    </div>
                    <div className="md:hidden flex w-10 h-10 rounded-full bg-emerald-500/20 items-center justify-center text-xs tracking-[0.3em] text-emerald-100">
                      {component.id}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{component.label}</p>
                    <h3 className="text-2xl font-semibold text-foreground mt-2">{component.title}</h3>
                    <p className="text-sm text-foreground/80 mt-2">{component.description}</p>
                  </div>
                </div>
                {idx !== COMPONENT_ORDERS.length - 1 && (
                  <div className="hidden md:block absolute left-[29px] top-full w-px h-6 bg-emerald-500/20" aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentOrderSection;
