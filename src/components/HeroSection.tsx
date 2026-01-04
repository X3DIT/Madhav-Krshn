import { motion } from "framer-motion";
import madhavPhoto from "@/assets/madhav-photo.jpg";
import TerminalText from "./TerminalText";
import StatusBadge from "./StatusBadge";
import { Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-radial opacity-30 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* System ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs text-muted-foreground tracking-widest uppercase"
            >
              SYSTEM_ID // MADHAV-MANU
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter-custom leading-[0.9]"
              >
                A KID WHO
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter-custom leading-[0.9]"
              >
                <span className="text-gradient-cyan">LOVES AI.</span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1"
            >
              <p className="text-lg md:text-xl text-muted-foreground">
                Student · Builder · AI Developer
              </p>
              <p className="text-muted-foreground font-mono text-sm">
                Designing systems, not slides.
              </p>
            </motion.div>

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex">
                <StatusBadge status="online" />
              </div>
              
              <div className="font-mono text-sm text-muted-foreground">
                <TerminalText 
                  text="Awaiting input..." 
                  delay={1500}
                  typingSpeed={80}
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="https://www.instagram.com/5yung.krshn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                data-cursor-hover
              >
                <Instagram className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/madhav-manu-ab8b13399/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                data-cursor-hover
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider">LinkedIn</span>
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["FrameVerse", "Tools", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="px-4 py-2 border border-border/50 text-sm font-mono uppercase tracking-wider 
                           hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  data-cursor-hover
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none order-first lg:order-last mb-8 lg:mb-0"
          >
            {/* Portrait Container */}
            <div className="relative w-full h-full overflow-hidden border border-border/30">
              <img
                src={madhavPhoto}
                alt="Madhav Manu - AI Developer & Founder"
                className="w-full h-full object-cover object-center"
              />
              
              {/* CRT Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" 
                     style={{ backgroundSize: "100% 4px" }} />
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-2 sm:-right-4 top-1/4 glass-card p-2 sm:p-4 border border-border/50"
            >
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-1">EXPERIENCE</div>
              <div className="text-lg sm:text-2xl font-bold text-black">5+ <span className="text-[10px] sm:text-sm font-normal text-muted-foreground">years</span></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -left-2 sm:-left-4 bottom-1/4 glass-card p-2 sm:p-4 border border-border/50"
            >
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-1">LOCATION</div>
              <div className="text-[10px] sm:text-sm font-medium text-black">Pathanamthitta, Kerala</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-border/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
