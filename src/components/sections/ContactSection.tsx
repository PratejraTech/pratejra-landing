import { Mail, Github } from "lucide-react";
import { EXTERNAL_URLS } from "../../constants";

/**
 * Contact section component
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5" aria-label="Contact information">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-3xl md:text-4xl">Contact</h2>
        <p className="text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          For those already aligned, our presence is your ally. <br />
          To engage with us, reach out through the shadows.
        </p>
        
        <a 
          href={EXTERNAL_URLS.EMAIL}
          className="inline-flex items-center space-x-3 border border-[#4FC3F7]/30 rounded-lg px-8 py-4 hover:bg-[#4FC3F7]/5 transition-all duration-300 group"
          aria-label="Send email to core@pratejra.build"
        >
          <Mail className="w-5 h-5 text-[#4FC3F7]" />
          <span className="text-lg">core@pratejra.build</span>
        </a>
        
        <a
          href={EXTERNAL_URLS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 border border-[#4FC3F7]/30 rounded-lg px-8 py-4 hover:bg-[#4FC3F7]/5 transition-all duration-300 group mt-4"
          aria-label="Visit GitHub repository"
        >
          <Github className="w-5 h-5 text-[#4FC3F7]" />
          <span className="text-lg">GitHub</span>
        </a>
      </div>
    </section>
  );
}

