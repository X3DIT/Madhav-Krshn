import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 sm:py-24 relative border-t border-border/30">
      <div className="container px-4 sm:px-6">
        {/* Fun End Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Bro... you scrolled all the way down?
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Respect.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16"
        >
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:manumadhav581@gmail.com"
                className="block text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                Email →
              </a>
              <a
                href="tel:+917510383501"
                className="block text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                Call →
              </a>
              <a
                href="https://wa.me/917510383501?text=Hi%20Madhav%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0AInterested%20in%3A%20%5BFrameVerse%20%2F%20SouthernSide%20%2F%20Collaboration%20%2F%20Other%5D%0A%0AMessage%3A%20"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                WhatsApp →
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/5yung.krshn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                <Instagram className="w-4 h-4" />
                Instagram →
              </a>
              <a
                href="https://www.linkedin.com/in/madhav-manu-ab8b13399/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn →
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Work
            </h4>
            <div className="space-y-3">
              {["Consulting", "Collaborations"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-foreground hover:text-primary transition-colors font-mono"
                  data-cursor-hover
                >
                  {item} →
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Projects
            </h4>
            <div className="space-y-3">
              <a
                href="https://frameverse-studio.github.io/frameverse-website/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                <ExternalLink className="w-3 h-3" />
                FrameVerse →
              </a>
              <a
                href="#southernside"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                <ExternalLink className="w-3 h-3" />
                SouthernSide →
              </a>
              <a
                href="https://www.instagram.com/frame.verse7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                data-cursor-hover
              >
                <Instagram className="w-3 h-3" />
                FrameVerse IG →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-xl sm:text-2xl font-black tracking-tighter">MM</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">
              Madhav Manu · Pathanamthitta, Kerala
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
              END OF TRANSMISSION
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] text-muted-foreground/50 mt-1">
              © {new Date().getFullYear()} · All systems operational
            </p>
          </div>
        </motion.div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="text-[20vw] font-black text-border/10 leading-none tracking-tighter text-center">
            MM
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
