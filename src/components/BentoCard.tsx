import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  delay?: number;
}

const BentoCard = ({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1,
  delay = 0 
}: BentoCardProps) => {
  const colSpanClasses = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-2 lg:col-span-3",
    4: "col-span-1 md:col-span-2 lg:col-span-4",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-1 md:row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`
        bento-card p-6 lg:p-8
        ${colSpanClasses[colSpan]}
        ${rowSpanClasses[rowSpan]}
        ${className}
      `}
    >
      <div className="relative z-10 h-full">{children}</div>
      
      {/* Scanline effect on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] animate-scan" />
      </div>
    </motion.div>
  );
};

export default BentoCard;
