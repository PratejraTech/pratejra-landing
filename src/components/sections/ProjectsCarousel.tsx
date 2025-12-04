import { useState } from "react";
import { motion } from "framer-motion";
import { Project, ActiveSection } from "../../types";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { getStatusBadgeColor } from "../../utils/status";
import { useCarouselAutoRotate } from "../../hooks/useCarouselAutoRotate";

interface ProjectsCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

/**
 * Projects carousel component
 */
export function ProjectsCarousel({ projects, onProjectClick }: ProjectsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  
  // Auto-rotate carousel
  useCarouselAutoRotate(api);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 pointer-events-none" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto space-y-10"
      >
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">active workbench</p>
          <h2 className="text-4xl font-semibold text-foreground">Projects we&apos;re tending</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            A sampling of tools and collectives currently in our care. Some are public, others prefer to stay in the quiet garden.
          </p>
        </div>

        <div className="relative border border-emerald-500/30 rounded-[2.5rem] bg-background/30 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-10 shadow-2xl shadow-emerald-900/30">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <CarouselItem key={`${project.name}-${index}`} className="pl-2 md:pl-4 basis-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => onProjectClick(project)}
                      className="group relative border border-emerald-500/20 rounded-[2rem] p-6 md:p-8 bg-gradient-to-br from-foreground/5 via-transparent to-transparent cursor-pointer flex flex-col min-h-[220px] hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/30 transition-all duration-500"
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${project.name} project`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onProjectClick(project);
                        }
                      }}
                    >
                      <div className="absolute top-5 right-5">
                        <div
                          className={`relative w-3 h-3 rounded-full ${getStatusBadgeColor(project.statusColor)}`}
                          aria-label={`Status: ${project.status}`}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                            transition={{ duration: 2.4, repeat: Infinity }}
                            className={`absolute inset-0 rounded-full ${getStatusBadgeColor(project.statusColor)} blur-sm`}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="mb-5 flex justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-emerald-100" aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-center text-foreground mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
}
