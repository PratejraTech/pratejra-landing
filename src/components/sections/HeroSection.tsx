import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGE_URLS } from "../../constants";

/**
 * Hero section component with floating grid design and full color palette
 */
export function HeroSection() {
  // Floating grid elements positions
  const gridItems = [
    { delay: 0.1, color: "indigo", position: "top-10 left-10", size: "w-24 h-24" },
    { delay: 0.2, color: "violet", position: "top-32 right-16", size: "w-16 h-16" },
    { delay: 0.3, color: "cyan", position: "bottom-32 left-20", size: "w-20 h-20" },
    { delay: 0.4, color: "emerald", position: "bottom-20 right-24", size: "w-12 h-12" },
    { delay: 0.5, color: "blue", position: "top-1/2 left-1/4", size: "w-14 h-14" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden border-b border-violet-500/30" aria-label="Hero section">
      {/* Multi-layer background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-violet-950/20 to-slate-950 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/8 via-transparent to-cyan-500/8 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" aria-hidden="true" />
      
      {/* Floating Grid Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
            className={`absolute ${item.position} ${item.size} rounded-2xl blur-xl ${
              item.color === 'indigo' ? 'bg-indigo-500/30' :
              item.color === 'violet' ? 'bg-violet-500/40' :
              item.color === 'cyan' ? 'bg-cyan-500/30' :
              item.color === 'emerald' ? 'bg-emerald-500/30' :
              'bg-blue-500/30'
            }`}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" aria-hidden="true" />

      {/* Main Content Container with Floating Grid Layout */}
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Floating Grid Container */}
        <div className="relative grid grid-cols-12 gap-6 lg:gap-8 items-center min-h-[80vh]">
          
          {/* Left Grid Column - Symbol & Accents */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-3 flex flex-col items-center lg:items-start gap-8"
          >
            {/* Floating Symbol Container */}
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-cyan-500/30 rounded-full blur-2xl -z-10"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-emerald-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
              />
              
              {/* Symbol */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/25 to-cyan-500/20 rounded-full blur-xl" />
                <ImageWithFallback 
                  src={IMAGE_URLS.BUDDHA_MEDITATION}
                  alt="Enlightenment symbol representing spiritual wisdom"
                  className="relative w-full h-full object-cover rounded-full opacity-70 border-2 border-violet-500/30"
                />
              </div>
            </div>

            {/* Color Accent Bars */}
            <div className="hidden lg:flex flex-col gap-2 w-full max-w-xs">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"
              />
            </div>
          </motion.div>

          {/* Center Grid Column - Main Content */}
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
            {/* Main Mantra with Multi-Color Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 leading-tight"
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold text-foreground"
              >
                From stillness, Pratejra strikes.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-indigo-400 via-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold"
              >
                From silence, Shaivra shapes.
              </motion.span>
            </motion.h1>

            {/* Core Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We Work While Doing the Work. <br className="hidden md:block" />
              We Ask For Little and Aspire to Deliver Much.
            </motion.p>

            {/* Mission Statement Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <div className="inline-block border-2 border-violet-500/50 rounded-2xl px-8 py-6 bg-gradient-to-br from-indigo-500/10 via-violet-500/15 via-cyan-500/10 to-emerald-500/10 backdrop-blur-md shadow-2xl shadow-violet-500/20 hover:border-violet-500/70 hover:shadow-violet-500/30 transition-all duration-500 hover:scale-[1.02]">
                <p className="text-lg md:text-xl italic bg-gradient-to-r from-indigo-300 via-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent font-medium">
                  "Through the unseen, we protect the sacred."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Grid Column - Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex col-span-3 flex-col items-end gap-8"
          >
            {/* Floating Color Orbs */}
            <div className="flex flex-col gap-4">
              {[
                { color: "indigo", delay: 0.8 },
                { color: "violet", delay: 0.9 },
                { color: "cyan", delay: 1.0 },
                { color: "emerald", delay: 1.1 },
                { color: "blue", delay: 1.2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.2, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    delay: item.delay
                  }}
                  className={`w-3 h-3 rounded-full ${
                    item.color === 'indigo' ? 'bg-indigo-400 shadow-lg shadow-indigo-500/50' :
                    item.color === 'violet' ? 'bg-violet-400 shadow-lg shadow-violet-500/50' :
                    item.color === 'cyan' ? 'bg-cyan-400 shadow-lg shadow-cyan-500/50' :
                    item.color === 'emerald' ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50' :
                    'bg-blue-400 shadow-lg shadow-blue-500/50'
                  }`}
                />
              ))}
            </div>

            {/* Vertical Accent Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "200px" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

