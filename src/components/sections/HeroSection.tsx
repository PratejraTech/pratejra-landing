import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGE_URLS } from "../../constants";

/**
 * Hero section component with main mantra and mission statement
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24" aria-label="Hero section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4FC3F7]/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Buddha Symbol */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-2xl animate-pulse" aria-hidden="true" />
            <ImageWithFallback 
              src={IMAGE_URLS.BUDDHA_MEDITATION}
              alt="Enlightenment symbol representing spiritual wisdom"
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
        <div className="mb-12">
          <div className="inline-block border border-[#4FC3F7]/30 rounded-lg px-8 py-4 bg-[#4FC3F7]/5 backdrop-blur-sm">
            <p className="text-lg md:text-xl italic text-[#4FC3F7]">
              "Through the unseen, we protect the sacred."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

