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
    <section className="relative min-h-screen px-6 pt-32 pb-24" aria-label="Philosophy and values">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-12 text-4xl md:text-5xl">Philosophy</h1>
        
        <div className="space-y-12 text-gray-300 leading-relaxed">
          {/* Brand Essence */}
          <article>
            <h2 className="text-2xl text-[#F5F5F5] mb-4">Brand Essence</h2>
            <p className="mb-4">
              Pratejra/Shaivra is more than an organization — it is a <span className="text-[#4FC3F7]">veil between worlds</span>. 
              Born from the fusion of ancient spiritual wisdom and developing, leveraging modern intelligence & craftsmanship in service.
              We aspire to build & protect, working on behalf of those who seek to do the same. We are not an organization, we're a Path.  
              We prioritise <strong>community</strong>, <strong>non-profits</strong>, and <strong>families</strong>. Projects that align with a purpose.
            </p>
            <p>
              Shaivra operates as a network of <span className="text-[#4FC3F7]">silent protectors</span>: 
              unseen, agile, and unwavering in their purpose.
            </p>
          </article>

          {/* The Benevolent Ghosts */}
          <article>
            <h2 className="text-2xl text-[#F5F5F5] mb-4">The Benevolent Ghosts Concept</h2>
            <p className="mb-4">
              Benevolent Ghosts are <span className="text-[#4FC3F7]">silent protectors</span>, bound by a code of 
              wisdom, compassion, discretion, and precision. They do not act for profit or political gain; 
              their strength lies in their invisibility, their restraint, and their commitment to right action and the 8-fold path.
            </p>
            <p>
              Just as ghosts can pass unseen through walls, Shaivra's purpose & projects move fluidly through the barriers 
              that hinder <span className="text-[#4FC3F7]">truth and protection</span> — whether those barriers are digital firewalls, disinformation campaigns, 
              or the bureaucracies of oppressive systems.
            </p>
          </article>

          {/* Core Values */}
          <article>
            <h2 className="text-2xl text-[#F5F5F5] mb-6">Core Values</h2>
            <div className="space-y-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="border-l-2 border-[#4FC3F7]/30 pl-6 py-2">
                  <h3 className="text-[#F5F5F5] mb-1">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Operational Principles */}
          <article>
            <h2 className="text-2xl text-[#F5F5F5] mb-6">Operational Principles</h2>
            <div className="space-y-4">
              {operationalPrinciples.map((principle, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                  <h3 className="text-[#4FC3F7] mb-2">{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Call to Alignment */}
          <article className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-2xl text-[#F5F5F5] mb-4">Call to Alignment</h2>
            <p className="mb-4">
              Shaivra does not recruit; it <span className="text-[#4FC3F7]">recognizes those already aligned</span>.
            </p>
            <p className="italic text-lg">
              To those who move through the world with precision, compassion, and discipline: 
              <span className="text-[#4FC3F7]"> our presence is your ally</span>.
            </p>
            <p className="italic text-lg mt-2">
              To those who exploit, harm, or distort truth: 
              <span className="text-[#4FC3F7]"> our presence is your shadow</span>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

