import { motion } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

const SectionTitle = ({ number, title, className = "" }: SectionTitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-4 mb-12 ${className}`}
    >
      <span className="font-mono text-sm text-muted-foreground tracking-wider">
        {number}
      </span>
      <span className="text-muted-foreground">//</span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
    </motion.div>
  );
};

export default SectionTitle;
