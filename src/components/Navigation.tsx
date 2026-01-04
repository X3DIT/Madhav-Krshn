import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "FrameVerse", href: "#frameverse" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? "w-[95%] max-w-5xl" 
            : "w-[90%] max-w-4xl"
        }`}
      >
        <div className="bg-background/80 backdrop-blur-xl border border-border/30 rounded-full px-6 py-3 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="text-xl font-black tracking-tighter hover:text-primary transition-colors"
              data-cursor-hover
            >
              MM
            </a>

            {/* Nav Links - Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group"
                  data-cursor-hover
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Status Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-border/50 rounded-full">
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Available
                </span>
              </div>

              {/* Contact Button */}
              <a 
                href="mailto:madhavmanu@example.com"
                className="hidden sm:flex px-4 py-2 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider rounded-full hover:bg-primary/90 transition-all duration-300"
                data-cursor-button
              >
                Contact
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 hover:bg-muted/50 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-cursor-hover
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-50 bg-background/95 backdrop-blur-xl border border-border/30 rounded-2xl p-6 shadow-2xl shadow-black/30 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="mailto:madhavmanu@example.com"
              className="mt-4 px-4 py-3 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-wider text-center rounded-lg"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
