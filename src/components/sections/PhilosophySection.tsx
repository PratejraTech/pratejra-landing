import { motion } from "framer-motion";

/**
 * Philosophy section component
 */
export function PhilosophySection() {
  const coreValues = [
    { title: "Benevolence Before All", desc: "Actions must serve life, truth, and dignity." },
    { title: "Precision Without Noise", desc: "The right move, at the right time, for the right reason." },
    { title: "Secrecy + Consent", desc: "Power without accountability is corruption; we reject it." },
    { title: "Security", desc: "Our discernment protects our people, and those that we offer our protection." },
    { title: "Wisdom Over Speed", desc: "We act decisively but never rashly." }
  ];

  const operationalPrinciples = [
    {
      title: "The Circle of Protection",
      description: "Any mission must begin with an assessment of how it shields, preserves, or uplifts."
    },
    {
      title: "The Ghost Step",
      description: "Operations leave no unnecessary trace, ensuring discretion and safety for all involved."
    },
    {
      title: "The Mirror of Truth",
      description: "Internal review and ethical vetting precede every action, ensuring alignment with our purpose-driven mandate."
    }
  ];

  return (
    <span className="component-highlight component-container" data-component="philosophy-section">
      <section id="philosophy-section" className="modern-section layered-background relative min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-24" aria-label="Philosophy and values">
        <div className="max-w-6xl mx-auto relative">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-4 mb-12 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
           <motion.h1
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
             className="col-span-12 md:col-span-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-emerald-300 via-teal-200 to-foreground bg-clip-text text-transparent text-center"
           >
             Philosophy
           </motion.h1>
          <div className="col-span-12 md:col-span-2">
            <div className="h-px bg-gradient-to-l from-transparent via-emerald-500/50 to-emerald-500/50" />
          </div>
        </div>
        
        <div className="space-y-12 text-foreground leading-relaxed">
          {/* Brand Essence */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent"
          >
            <h2 className="text-2xl text-foreground mb-4 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">Brand Essence</h2>
            <p className="mb-4 text-sm">
              Pratejra/Shaivra is more than an organization — it is a <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">veil between worlds</span>. 
              Born from the fusion of ancient spiritual wisdom and modern stewardship, we build and protect on behalf of those seeking the same.
              We prioritise <strong>community</strong>, <strong>non-profits</strong>, and <strong>families</strong>. Projects must align with purpose.
            </p>
            <p className="text-sm">
              Shaivra operates as a network of <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">silent protectors</span>: 
              unseen, agile, and unwavering in their purpose.
            </p>
          </motion.article>

          {/* The Benevolent Ghosts */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent"
          >
            <h2 className="text-2xl text-foreground mb-4 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">The Benevolent Ghosts Concept</h2>
            <p className="mb-4 text-sm">
              Benevolent Ghosts are <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">silent protectors</span>, bound by a code of 
              wisdom, compassion, discretion, and precision. They do not act for profit or political gain; 
              their strength lies in their invisibility, their restraint, and their commitment to right action and the 8-fold path.
            </p>
            <p className="text-sm">
              Just as ghosts can pass unseen through walls, Shaivra's purpose & projects move fluidly through the barriers 
              that hinder <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">truth and protection</span> — whether those barriers are digital firewalls, disinformation campaigns, 
              or the bureaucracies of oppressive systems.
            </p>
          </motion.article>

          {/* Core Values */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent"
          >
            <h2 className="text-2xl text-foreground mb-6 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">Core Values</h2>
            <div className="space-y-4">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  className="border-l-2 pl-6 py-2 hover:border-emerald-500/60 transition-colors duration-300"
                  style={{ borderLeftColor: idx % 2 === 0 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(45, 212, 191, 0.4)' }}
                >
                  <h3 className="text-foreground mb-1 font-medium">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Operational Principles */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent"
          >
            <h2 className="text-2xl text-foreground mb-6 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">Operational Principles</h2>
            <div className="space-y-4">
              {operationalPrinciples.map((principle, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                  className="bg-gradient-to-br from-foreground/5 via-background to-emerald-500/10 border border-emerald-500/30 rounded-3xl p-6 shadow-sm hover:border-emerald-500/60 hover:to-emerald-500/15 transition-all duration-300"
                >
                  <h3 className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-2 font-medium">{principle.title}</h3>
                  <p className="text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Call to Alignment */}
          <motion.article 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
            className="border border-emerald-500/20 rounded-3xl p-6 bg-gradient-to-br from-foreground/5 to-transparent pt-12 mt-12"
          >
            <h2 className="text-2xl text-foreground mb-4 font-semibold bg-gradient-to-r from-foreground via-emerald-300 to-foreground bg-clip-text text-transparent">Call to Alignment</h2>
            <p className="mb-4 text-sm">
              Shaivra does not recruit; it <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">recognizes those already aligned</span>.
            </p>
            <p className="italic text-lg">
              To those who move through the world with precision, compassion, and discipline: 
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium"> our presence is your ally</span>.
            </p>
            <p className="italic text-lg mt-2">
              To those who exploit, harm, or distort truth: 
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium"> our presence is your shadow</span>.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
    </span>
  );
}
