import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const GoScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 group overflow-hidden"
                    aria-label="Scroll to top"
                    data-cursor-button
                >
                    {/* Cyber Glow Effect */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 scale-100 group-hover:scale-105 transition-transform duration-500" />

                    <ChevronUp className="w-6 h-6 text-primary relative z-10" />

                    {/* Scanline Effect on Hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
                        <div className="w-full h-px bg-primary absolute top-0 animate-scanline-sweep" style={{ animationDuration: '2s' }} />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default GoScroll;
