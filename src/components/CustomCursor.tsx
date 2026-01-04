import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const followerSpringConfig = { damping: 20, stiffness: 200, mass: 0.8 };
  const followerX = useSpring(mouseX, followerSpringConfig);
  const followerY = useSpring(mouseY, followerSpringConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        !!target.closest("[data-cursor-hover]");
      
      const isBtn = 
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("[data-cursor-button]");

      if (isBtn) {
        const rect = (target.closest("button") || target.closest("[data-cursor-button]") || target).getBoundingClientRect();
        setButtonRect(rect);
        setIsButton(true);
      } else {
        setButtonRect(null);
        setIsButton(false);
      }

      setIsHovering(isInteractive);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setIsButton(false);
      setButtonRect(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkTouchDevice);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-foreground"
          animate={{
            width: isHovering ? 12 : 6,
            height: isHovering ? 12 : 6,
            opacity: isButton ? 0 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: isButton && buttonRect ? buttonRect.left + buttonRect.width / 2 : followerX,
          y: isButton && buttonRect ? buttonRect.top + buttonRect.height / 2 : followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-md border-2 border-primary/50"
          animate={{
            width: isButton && buttonRect ? buttonRect.width + 8 : isHovering ? 50 : 36,
            height: isButton && buttonRect ? buttonRect.height + 8 : isHovering ? 50 : 36,
            borderRadius: isButton ? 6 : 50,
            opacity: isHovering ? 1 : 0.4,
            borderColor: isHovering 
              ? "hsl(186 100% 50% / 0.8)" 
              : "hsl(186 100% 50% / 0.3)",
            boxShadow: isHovering 
              ? "0 0 20px hsl(186 100% 50% / 0.3), inset 0 0 20px hsl(186 100% 50% / 0.1)" 
              : "none",
          }}
          transition={{ 
            duration: 0.2, 
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
