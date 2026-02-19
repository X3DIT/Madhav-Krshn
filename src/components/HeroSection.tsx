import { motion } from "framer-motion";
import madhavPhoto from "@/assets/madhav-photo.jpg";
import TerminalText from "./TerminalText";
import StatusBadge from "./StatusBadge";
import { Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] sm:h-[800px] bg-glow-radial opacity-30 pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            {/* System ID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase"
            >
              SYSTEM_ID // MADHAV-MANU
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter-custom leading-[0.9] break-words"
              >
                A KID WHO
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter-custom leading-[0.9] break-words"
              >
                <span className="text-gradient-cyan">LOVES AI.</span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1 sm:space-y-2"
            >
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Student · Builder · AI Developer
              </p>
              <p className="text-muted-foreground font-mono text-xs sm:text-sm">
                Designing systems, not slides.
              </p>
            </motion.div>

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <div className="inline-flex">
                <StatusBadge status="online" />
              </div>

              <div className="font-mono text-xs sm:text-sm text-muted-foreground">
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
            >
              <a
                href="https://www.instagram.com/5yung.krshn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                data-cursor-hover
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-wider">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/madhav-manu-ab8b13399/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                data-cursor-hover
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-wider">LinkedIn</span>
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              {["FrameVerse", "SouthernSide", "Tools", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border/50 text-xs sm:text-sm font-mono uppercase tracking-wider 
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
            className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:mx-0 order-first lg:order-last mb-6 sm:mb-8 lg:mb-0"
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
              className="absolute -right-1 sm:-right-2 md:-right-4 top-1/4 glass-card p-2 sm:p-3 md:p-4 border border-border/50 hidden sm:block"
            >
              <div className="font-mono text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mb-0.5 sm:mb-1">EXPERIENCE</div>
              <div className="text-base sm:text-lg md:text-2xl font-bold text-black">5+ <span className="text-[9px] sm:text-[10px] md:text-sm font-normal text-muted-foreground">years</span></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -left-1 sm:-left-2 md:-left-4 bottom-1/4 glass-card p-2 sm:p-3 md:p-4 border border-border/50 hidden sm:block"
            >
              <div className="font-mono text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mb-0.5 sm:mb-1">LOCATION</div>
              <div className="text-[9px] sm:text-[10px] md:text-sm font-medium text-black">Pathanamthitta, Kerala</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Creative Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3"
      >
        {/* Mouse outline */}
        <div className="relative w-7 h-12 border-2 border-primary/40 rounded-full overflow-hidden group">
          {/* Scroll wheel dot */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
          />
          {/* Trail glow */}
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
          />
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-primary/20 rounded-full"
          />
        </div>

        {/* Scroll text */}
        <motion.span
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          Scroll
        </motion.span>

        {/* Animated chevrons */}
        <div className="flex flex-col items-center -mt-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0], y: [0, 4, 8] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 border-r border-b border-primary/50 rotate-45 -mt-1.5"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
