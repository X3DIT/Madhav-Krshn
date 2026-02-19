import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "FrameVerse", href: "#frameverse" },
  { label: "SouthernSide", href: "#southernside" },
  { label: "ChatBot", href: "#chatbot" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);

    // Always show at top, hide on scroll down, reveal on scroll up
    if (latest < 50) {
      setIsVisible(true);
    } else if (latest > previous && latest > 100) {
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    } else if (latest < previous) {
      setIsVisible(true);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Desktop: floating pill */}
        <div className="hidden md:block mx-auto mt-4 w-[90%] max-w-4xl transition-all duration-300 px-4"
          style={isScrolled ? { maxWidth: "64rem", width: "95%" } : {}}
        >
          <div className="bg-background/80 backdrop-blur-xl border border-border/30 rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between gap-2 md:gap-4">
              <a href="#" className="text-lg md:text-xl font-black tracking-tighter hover:text-primary transition-colors flex-shrink-0" data-cursor-hover>
                MM
              </a>
              <nav className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-1 justify-center">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap"
                    data-cursor-hover
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 border border-border/50 rounded-full">
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"
                  />
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground hidden lg:inline">
                    Available
                  </span>
                </div>
                <a
                  href="mailto:madhavmanu@example.com"
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-primary text-primary-foreground text-[10px] md:text-xs font-mono uppercase tracking-wider rounded-full hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
                  data-cursor-button
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: full-width sticky bar */}
        <div className="md:hidden">
          <div className={`bg-background/90 backdrop-blur-xl border-b transition-all duration-300 ${isScrolled ? "border-border/40 shadow-lg shadow-black/20" : "border-transparent"
            }`}>
            <div className="flex items-center justify-between px-4 h-14">
              <a href="#" className="text-base sm:text-lg font-black tracking-tighter hover:text-primary transition-colors">
                MM
              </a>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Status */}
                <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 border border-border/50 rounded-full">
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-green-500"
                  />
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-muted-foreground">
                    Available
                  </span>
                </div>

                {/* Hamburger */}
                <button
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 -mr-1 sm:-mr-2 hover:bg-muted/50 rounded-lg transition-colors active:scale-95"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col justify-center h-full px-6 pt-14">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block w-full py-5 border-b border-border/20 text-2xl font-bold tracking-tight text-foreground hover:text-primary active:bg-muted/30 transition-colors -mx-2 px-2 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-mono text-[10px] text-muted-foreground mr-3 align-middle">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="mailto:madhavmanu@example.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-8 flex items-center justify-center w-full py-4 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-widest rounded-xl active:scale-[0.98] transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </motion.a>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="absolute bottom-8 left-6 right-6 flex justify-between items-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  © 2026
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Madhav Manu
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
