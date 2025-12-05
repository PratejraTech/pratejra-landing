import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pratejra appeared when we needed them most. Their silent operation saved our community from exploitation without anyone knowing they were there.",
    author: "Maria Rodriguez",
    role: "Community Leader",
    organization: "Neighborhood Collective",
  },
  {
    quote: "The precision and care with which they handled our sensitive data was remarkable. They truly operate as benevolent ghosts in the digital realm.",
    author: "Dr. James Chen",
    role: "Director",
    organization: "Cultural Heritage Foundation",
  },
  {
    quote: "Shaivra's approach transformed our crisis response. They didn't just solve the problem—they taught us to prevent it from happening again.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    organization: "Humanitarian Aid Network",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Voices from the Field
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We rarely name our partners publicly, but their stories speak for themselves.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
                <div className="text-sm text-blue-400">{testimonial.organization}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-8">Trusted by organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-500 font-mono">NGO Alliance</div>
            <div className="text-slate-500 font-mono">Cultural Preservation Society</div>
            <div className="text-slate-500 font-mono">Human Rights Network</div>
            <div className="text-slate-500 font-mono">Environmental Coalition</div>
            <div className="text-slate-500 font-mono">Community Support Initiative</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;