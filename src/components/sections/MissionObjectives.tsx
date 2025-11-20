import { MISSION_OBJECTIVES } from "../../constants";

/**
 * Mission objectives section component
 */
export function MissionObjectives() {
  return (
    <section className="py-24 px-6" aria-label="Mission objectives">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16 text-3xl md:text-4xl">Our Mission</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {MISSION_OBJECTIVES.map((objective) => (
            <article 
              key={objective.number}
              className="group relative border border-white/10 rounded-lg p-8 hover:border-[#4FC3F7]/50 transition-all duration-300 bg-white/[0.02]"
            >
              <div className="absolute top-6 right-6 text-5xl opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                {objective.number}
              </div>
              <div className="relative">
                <div className="text-[#4FC3F7] mb-3 text-sm tracking-widest">
                  {objective.number}
                </div>
                <h3 className="text-xl mb-3">{objective.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

