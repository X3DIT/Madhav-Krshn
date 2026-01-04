import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import BentoCard from "./BentoCard";
import { ExternalLink, Instagram } from "lucide-react";

const FloatingCamera = lazy(() => import("./3d/FloatingCamera"));

const services = [
  {
    id: 1,
    title: "Brand Design",
    description: "Premium identity systems that communicate your vision with clarity and impact.",
    icon: "✦",
  },
  {
    id: 2,
    title: "Video Production",
    description: "Cinematic storytelling with VFX, motion design, and professional editing.",
    icon: "◈",
  },
  {
    id: 3,
    title: "Web Development",
    description: "Clean, responsive, production-ready websites with pixel-perfect execution.",
    icon: "◇",
  },
  {
    id: 4,
    title: "AI Automation",
    description: "Custom AI solutions and workflow automation for modern businesses.",
    icon: "⬡",
  },
];

const FrameVerseSection = () => {
  return (
    <section id="frameverse" className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        {/* Header with 3D Camera */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-primary/50 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-sm sm:text-base">FV</span>
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                  Founder & Creative Director
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter-custom">
                  FRAMEVERSE
                </h2>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              A creative studio agency delivering premium design, video production, and digital experiences 
              for brands that want to stand out.
            </p>
          </motion.div>
          
          {/* 3D Floating Camera - Hidden on mobile, shown on tablet+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-[250px] sm:h-[300px] lg:h-[350px] relative hidden sm:block"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-primary/30 border-t-primary animate-spin" />
              </div>
            }>
              <FloatingCamera className="w-full h-full" />
            </Suspense>
            
            {/* Glow effect behind camera */}
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <BentoCard key={service.id} delay={index * 0.1} className="group">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-primary/50 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {service.description}
              </p>
            </BentoCard>
          ))}
        </div>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="https://frameverse-studio.github.io/frameverse-website/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-primary text-primary-foreground font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            data-cursor-button
          >
            <span>Visit FrameVerse</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/frame.verse7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-border/50 font-mono text-xs sm:text-sm uppercase tracking-wider hover:border-primary/50 hover:bg-primary/5 transition-all"
            data-cursor-hover
          >
            <Instagram className="w-4 h-4" />
            <span>@frame.verse7</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameVerseSection;
