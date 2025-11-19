import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'philosophy'>('home');

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-md group-hover:bg-[#4FC3F7]/30 transition-all" />
                <div className="relative w-full h-full bg-gradient-to-br from-[#4FC3F7] to-[#4FC3F7]/60 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#F5F5F5] rounded-full" />
                </div>
              </div>
              <span className="text-xl tracking-wider">Pratejra/Shaivra</span>
            </button>
            
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`transition-colors ${activeSection === 'home' ? 'text-[#4FC3F7]' : 'text-gray-400 hover:text-[#F5F5F5]'}`}
              >
                Mission
              </button>
              <button 
                onClick={() => setActiveSection('philosophy')}
                className={`transition-colors ${activeSection === 'philosophy' ? 'text-[#4FC3F7]' : 'text-gray-400 hover:text-[#F5F5F5]'}`}
              >
                Philosophy
              </button>
              <button
                onClick={() => setActiveSection('home')}   
                className="text-gray-400 hover:text-[#F5F5F5] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4FC3F7]/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative max-w-5xl mx-auto text-center">
              {/* Buddha Symbol */}
              <div className="mb-12 flex justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-2xl animate-pulse" />
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1529485726363-95c8d62f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGElMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2MDk1NTU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Enlightenment"
                    className="relative w-full h-full object-cover rounded-full opacity-60"
                  />
                </div>
              </div>

              {/* Main Mantra */}
              <h1 className="mb-8 leading-tight">
                <span className="block text-5xl md:text-7xl mb-4">
                  From stillness, Pratejra strikes.
                </span>
                <span className="block text-5xl md:text-7xl text-[#4FC3F7]">
                  From silence, Shaivra shapes.
                </span>
              </h1>

              {/* Core Statement */}
              <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
                We Work While Doing the Work. <br className="hidden md:block" />
                We Ask For Little and Aspire to Deliver Much.
              </p>

              {/* Mission Statement */}
              <div className="mb-20">
                <div className="inline-block border border-[#4FC3F7]/30 rounded-lg px-8 py-4 bg-[#4FC3F7]/5 backdrop-blur-sm">
                  <p className="text-lg md:text-xl italic text-[#4FC3F7]">
                    "Through the unseen, we protect the sacred."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Objectives */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-16 text-3xl md:text-4xl">Our Mission</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    number: "01",
                    title: "Humanitarian Protection",
                    description: "Shielding communities from harm, both physical and digital."
                  },
                  {
                    number: "02",
                    title: "Preservation of Heritage",
                    description: "Protecting cultural, historical, and environmental treasures."
                  },
                  {
                    number: "03",
                    title: "Countering Exploitation",
                    description: "Identifying and disrupting systems of corruption, oppression, and exploitation."
                  },
                  {
                    number: "04",
                    title: "Empowering the Aligned",
                    description: "Providing operational and business capabilities to organizations who act for benevolent causes."
                  }
                ].map((objective) => (
                  <div 
                    key={objective.number}
                    className="group relative border border-white/10 rounded-lg p-8 hover:border-[#4FC3F7]/50 transition-all duration-300 bg-white/[0.02]"
                  >
                    <div className="absolute top-6 right-6 text-5xl opacity-5 group-hover:opacity-10 transition-opacity">
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
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8 text-3xl md:text-4xl">Contact</h2>
              <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                For those already aligned, our presence is your ally. <br />
                To engage with us, reach out through the shadows.
              </p>
              
              <a 
                href="mailto:core@pratejra.build"
                className="inline-flex items-center space-x-3 border border-[#4FC3F7]/30 rounded-lg px-8 py-4 hover:bg-[#4FC3F7]/5 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-[#4FC3F7]" />
                <span className="text-lg">core@pratejra.build</span>
              </a>
            </div>
          </section>
        </>
      ) : (
        /* Philosophy Page */
        <section className="relative min-h-screen px-6 pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-12 text-4xl md:text-5xl">Philosophy</h1>
            
            <div className="space-y-12 text-gray-300 leading-relaxed">
              {/* Brand Essence */}
              <div>
                <h2 className="text-2xl text-[#F5F5F5] mb-4">Brand Essence</h2>
                <p className="mb-4">
                  Pratejra/Shaivra is more than an organization — it is a <span className="text-[#4FC3F7]">veil between worlds</span>. 
                  Born from the fusion of ancient spiritual wisdom and developing, leveraging modern intelligence & craftsmanship in service.
                  We aspire to build & protect, working on behalf of those who seek to do the same. We are not an organization, we're a Path.  
                  We prioritise <b>community</b>, <b>non-profits</b>, and <b>families</b>. Projects that align with a purpose.
                </p>
                <p>
                  Shaivra operates as a network of <span className="text-[#4FC3F7]">silent protectors</span>: 
                  unseen, agile, and unwavering in their purpose.
                </p>
              </div>

              {/* The Benevolent Ghosts */}
              <div>
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
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-2xl text-[#F5F5F5] mb-6">Core Values</h2>
                <div className="space-y-4">
                  {[
                    { title: "Benevolence Before All", desc: "Actions must serve life, truth, and dignity." },
                    { title: "Precision Without Noise", desc: "The right move, at the right time, for the right reason." },
                    { title: "Secrecy + Consent", desc: "Power without accountability is corruption; we reject it." },
                    { title: "Security", desc: "Our discernment protects our people, and those that we offer our protection." },
                    { title: "Wisdom Over Speed", desc: "We act decisively but never rashly." }
                  ].map((value, idx) => (
                    <div key={idx} className="border-l-2 border-[#4FC3F7]/30 pl-6 py-2">
                      <h3 className="text-[#F5F5F5] mb-1">{value.title}</h3>
                      <p className="text-gray-400">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Principles */}
              <div>
                <h2 className="text-2xl text-[#F5F5F5] mb-6">Operational Principles</h2>
                <div className="space-y-4">
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                    <h3 className="text-[#4FC3F7] mb-2">The Circle of Protection</h3>
                    <p>Any mission must begin with an assessment of how it shields, preserves, or uplifts.</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                    <h3 className="text-[#4FC3F7] mb-2">The Ghost Step</h3>
                    <p>Operations leave no unnecessary trace, ensuring discretion and safety for all involved.</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                    <h3 className="text-[#4FC3F7] mb-2">The Mirror of Truth</h3>
                    <p>Internal review and ethical vetting precede every action, ensuring alignment with our purpose-driven mandate.</p>
                  </div>
                </div>
              </div>

              {/* Call to Alignment */}
              <div className="border-t border-white/10 pt-12 mt-12">
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-md" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#4FC3F7] to-[#4FC3F7]/60 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F5F5F5] rounded-full" />
              </div>
            </div>
            <span className="tracking-wider">Pratejra/Shaivra</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            v1.0.0 — Authored by Sunyata, August 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
