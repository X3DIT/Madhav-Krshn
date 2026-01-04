import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import SectionTitle from "./SectionTitle";
import BentoCard from "./BentoCard";
import StatusBadge from "./StatusBadge";

const RoboticEye = lazy(() => import("./3d/RoboticEye"));

const toolsData = [
  {
    id: 1,
    name: "Sahayi AI",
    description: "AI-powered assistant for government services and citizen support.",
    status: "development" as const,
    featured: true,
  },
  {
    id: 2,
    name: "WhatsApp Bots",
    description: "Multi-purpose automation bot for businesses and workflows.",
    status: "active" as const,
    featured: true,
  },
  {
    id: 3,
    name: "Internal Labs",
    description: "Experimental AI projects and R&D.",
    status: "coming-soon" as const,
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        {/* Section Header with Robotic Eye */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 flex-1 w-full"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
              Tools Built By Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-2 sm:ml-4 hidden sm:block" />
          </motion.div>
          
          {/* Robotic Eye - System Observer - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative hidden md:block"
          >
            <Suspense fallback={
              <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] border border-primary/20 flex items-center justify-center">
                <div className="w-8 h-8 border border-primary/30 border-t-primary animate-spin rounded-full" />
              </div>
            }>
              <RoboticEye size={100} className="lg:hidden" />
              <RoboticEye size={120} className="hidden lg:block" />
            </Suspense>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              System Observer
            </span>
          </motion.div>
        </div>

        {/* Featured Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {toolsData.filter(t => t.featured).map((tool, index) => (
            <BentoCard 
              key={tool.id}
              delay={index * 0.1}
              className="group relative min-h-[160px] sm:min-h-[200px]"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <StatusBadge status={tool.status} />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                  data-cursor-hover
                >
                  <span>EXPLORE</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Other Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolsData.filter(t => !t.featured).map((tool, index) => (
            <BentoCard 
              key={tool.id}
              delay={0.2 + index * 0.1}
              className="group"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {tool.name}
                </h4>
                <StatusBadge status={tool.status} />
              </div>
              <p className="text-xs text-muted-foreground">
                {tool.description}
              </p>
            </BentoCard>
          ))}
        </div>

        {/* FrameVerse Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 p-4 sm:p-6 border border-primary/30 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-primary/50 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-mono text-xs sm:text-sm">FV</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">FrameVerse</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Creative studio & production company</p>
            </div>
          </div>
          <a 
            href="https://frameverse-studio.github.io/frameverse-website/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-primary hover:underline w-full sm:w-auto text-center sm:text-left"
            data-cursor-hover
          >
            VISIT FRAMEVERSE →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
