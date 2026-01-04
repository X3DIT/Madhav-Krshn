import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2019",
    title: "Started Design Journey",
    description: "Began learning graphic design, exploring visual communication and brand identity.",
    type: "milestone",
  },
  {
    year: "2021",
    title: "Video Production & Motion",
    description: "Expanded into video editing, After Effects, and motion design for clients.",
    type: "skill",
  },
  {
    year: "2022",
    title: "Web Development",
    description: "Built first responsive websites, mastered HTML, CSS, JavaScript, and Tailwind.",
    type: "skill",
  },
  {
    year: "2024",
    title: "AI & Automation Discovery",
    description: "Dove deep into AI tools, n8n, Make.com, and started building automation systems.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Founded FrameVerse",
    description: "Launched creative studio agency offering design, video, and AI solutions.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Sahayi AI Development",
    description: "Building AI-powered Panchayat helpdesk for government services in Kerala.",
    type: "project",
  },
  {
    year: "2026",
    title: "Current Focus",
    description: "12th grade studies + scaling FrameVerse + launching more AI tools.",
    type: "current",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 sm:py-24 relative">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1 border border-primary/30 bg-primary/5 mb-4 sm:mb-6">
            <span className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest">
              Journey
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter-custom">
            CAREER
            <span className="text-primary"> TIMELINE</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-primary bg-background z-10">
                {event.type === "current" && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-primary/30"
                  />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-10 sm:pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className={`p-4 sm:p-6 border border-border/30 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <span className="inline-block px-2 py-1 mb-2 font-mono text-[10px] sm:text-xs text-primary bg-primary/10">
                    {event.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight mb-1 sm:mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
