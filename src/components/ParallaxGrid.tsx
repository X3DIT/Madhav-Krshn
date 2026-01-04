import { useEffect, useState } from "react";

const ParallaxGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax factor - lower = slower movement (0.3 = 30% of scroll speed)
  const parallaxOffset = scrollY * 0.15;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Main grid layer - moves slower */}
      <div
        className="absolute inset-0 w-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          height: "200%",
          top: "-50%",
        }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(0 0% 20% / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(0 0% 20% / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(0 0% 30% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Secondary floating dots - even slower */}
      <div
        className="absolute inset-0 w-full"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          height: "200%",
          top: "-50%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(0 0% 40% / 0.2) 2px, transparent 2px)`,
            backgroundSize: "120px 120px",
            backgroundPosition: "20px 20px",
          }}
        />
      </div>

      {/* Radial fade mask */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 0%) 80%)`,
        }}
      />
      
      {/* Top and bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, hsl(0 0% 0%) 0%, transparent 15%, transparent 85%, hsl(0 0% 0%) 100%)`,
        }}
      />
    </div>
  );
};

export default ParallaxGrid;
