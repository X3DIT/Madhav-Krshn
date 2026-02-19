import { motion } from "framer-motion";

const philosophyStats = [
  { value: "90%", label: "AI potential untapped" },
  { value: "10x", label: "Productivity gains possible" },
  { value: "∞", label: "Problems to solve" },
];

const PhilosophySection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive"
              />
              <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                Philosophy
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter-custom leading-[1.1] mb-4 sm:mb-6 px-2">
              I TRY TO MAKE
              <br />
              <span className="text-primary">AI USABLE.</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              Not just accessible. Not just available. Actually usable by real people, 
              solving real problems, in the real world.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border/30"
          >
            {philosophyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center px-1"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
