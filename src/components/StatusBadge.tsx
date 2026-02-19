import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: "active" | "development" | "coming-soon" | "online";
  className?: string;
}

const StatusBadge = ({ status, className = "" }: StatusBadgeProps) => {
  const statusConfig = {
    active: {
      text: "ACTIVE",
      dotColor: "bg-green-500",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    development: {
      text: "IN DEV",
      dotColor: "bg-amber-500",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    "coming-soon": {
      text: "SOON",
      dotColor: "bg-muted-foreground",
      borderColor: "border-muted-foreground/30",
      textColor: "text-muted-foreground",
      bgColor: "bg-muted/50",
    },
    online: {
      text: "ONLINE",
      dotColor: "bg-primary",
      borderColor: "border-primary/30",
      textColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border ${config.borderColor} ${config.bgColor} ${className}`}>
      <motion.div 
        className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}
        animate={{ 
          opacity: [1, 0.4, 1],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <span className={`font-mono text-[10px] uppercase tracking-wider ${config.textColor}`}>
        {config.text}
      </span>
    </div>
  );
};

export default StatusBadge;
