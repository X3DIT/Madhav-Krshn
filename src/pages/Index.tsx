import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FrameVerseSection from "@/components/FrameVerseSection";
import SouthernSideSection from "@/components/SouthernSideSection";
import ChatBotSection from "@/components/ChatBotSection";
import ToolsSection from "@/components/ToolsSection";
import PhilosophySection from "@/components/PhilosophySection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import ParallaxGrid from "@/components/ParallaxGrid";
import GoScroll from "@/components/GoScroll";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Parallax Grid Background */}
      <ParallaxGrid />

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
        <SouthernSideSection />
        <ChatBotSection />
        <ToolsSection />
        <PhilosophySection />
        <AboutSection />
        <TimelineSection />
      </main>

      {/* GoScroll Button */}
      <GoScroll />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
