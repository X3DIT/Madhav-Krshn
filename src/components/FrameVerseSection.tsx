import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import BentoCard from "./BentoCard";
import { ExternalLink, Instagram, Mail, Phone, MapPin, Camera, Users, Palette, Sparkles } from "lucide-react";

const FloatingCamera = lazy(() => import("./3d/FloatingCamera"));

const services = [
  {
    id: 1,
    title: "Event Coverage",
    description: "Weddings, engagements & cultural ceremonies with a documentary approach.",
    icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 2,
    title: "Natural Portraits",
    description: "Outdoor & studio sessions with personality-focused natural lighting.",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 3,
    title: "Heritage & Art",
    description: "Classical dance documentation — Kathakali, Mohiniyattam & cultural art forms.",
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: 4,
    title: "Brand Design",
    description: "Minimalist poster design, stencil art & branding assets for creatives.",
    icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
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
            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
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

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary/80 mb-4 italic">
              "Framing Stories Beyond Border."
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4">
              A Kerala-based artistic photography & creative studio specializing in natural light photography,
              cultural events, and artistic portraits that feel timeless, not staged.
            </p>

            {/* Location & Category Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border/50 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                Kerala | Bangalore
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border/50 text-muted-foreground">
                <Camera className="w-3 h-3" />
                Photography & Videography
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-primary/30 text-primary/70">
                Available Worldwide
              </span>
            </div>
          </motion.div>

          {/* 3D Floating Camera */}
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
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
          </motion.div>
        </div>

        {/* Mission Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 border-l-2 border-primary/40 pl-4 sm:pl-6 max-w-3xl"
        >
          <p className="text-sm sm:text-base text-muted-foreground italic">
            "An artistic endeavor to capture the fleeting moments of life with elegance and authenticity."
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-3 sm:mb-4">
          <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
            Core Services
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {services.map((service, index) => (
            <BentoCard key={service.id} delay={index * 0.1} className="group">
              <div className="text-primary/50 group-hover:text-primary transition-colors mb-3 sm:mb-4">
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

        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <a
            href="mailto:frameverse.agency@gmail.com?subject=FrameVerse Inquiry - Photography Services&body=Hello FrameVerse Team,%0D%0A%0D%0AI am interested in learning more about your photography services.%0D%0A%0D%0AService Type: [Event Coverage / Natural Portraits / Heritage %26 Art / Brand Design]%0D%0A%0D%0AEvent Date: %0D%0ALocation: %0D%0A%0D%0AAdditional Details:%0D%0A%0D%0A%0D%0ABest Regards,%0D%0A[Your Name]"
            className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors group"
            data-cursor-hover
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
              frameverse.agency@gmail.com
            </span>
          </a>
          <a
            href="tel:+917510383501"
            className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors group"
            data-cursor-hover
          >
            <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              +91 75103 83501
            </span>
          </a>
          <a
            href="tel:+918157853274"
            className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors group"
            data-cursor-hover
          >
            <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              +91 81578 53274
            </span>
          </a>
        </motion.div>

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
          <a
            href="https://frameverse-studio.github.io/frameverse-website/?utm_source=ig&utm_medium=social&utm_content=link_in_bio#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-border/50 font-mono text-xs sm:text-sm uppercase tracking-wider hover:border-primary/50 hover:bg-primary/5 transition-all"
            data-cursor-hover
          >
            <Mail className="w-4 h-4" />
            <span>Book a Session</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameVerseSection;
