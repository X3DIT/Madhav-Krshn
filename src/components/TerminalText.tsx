import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TerminalTextProps {
  text: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
  typingSpeed?: number;
}

const TerminalText = ({ 
  text, 
  className = "", 
  delay = 0,
  showCursor = true,
  typingSpeed = 50
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [hasStarted, text, typingSpeed]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
          animate={{ opacity: isTyping ? 1 : [1, 0] }}
          transition={{ 
            duration: isTyping ? 0 : 0.8, 
            repeat: isTyping ? 0 : Infinity,
            repeatType: "reverse"
          }}
        />
      )}
    </span>
  );
};

export default TerminalText;
