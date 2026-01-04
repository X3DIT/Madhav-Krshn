import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FrameVerseSection from "@/components/FrameVerseSection";
import ToolsSection from "@/components/ToolsSection";
import PhilosophySection from "@/components/PhilosophySection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Grid Background */}
      <div className="grid-background" />
      
      {/* Scanline Overlay */}
      <div className="scanline-overlay" />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FrameVerseSection />
        <ToolsSection />
        <PhilosophySection />
        <AboutSection />
        <TimelineSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
