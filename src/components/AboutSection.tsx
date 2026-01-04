import { motion } from "framer-motion";
import BentoCard from "./BentoCard";

const roles = [
  {
    id: 1,
    title: "Designer",
    years: "5+ Years",
    skills: ["UI/UX Design", "Brand Identity", "Web Design", "Graphic Design"],
  },
  {
    id: 2,
    title: "Video & Motion",
    years: "3+ Years",
    skills: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Motion Design"],
  },
  {
    id: 3,
    title: "AI & Automation",
    years: "Builder",
    skills: ["n8n", "Make.com", "OpenAI APIs", "WhatsApp Bots"],
  },
  {
    id: 4,
    title: "Web Developer",
    years: "Full-Stack",
    skills: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
  },
];

const interests = [
  "AI Startups",
  "GovTech",
  "Cybersecurity",
  "EdTech",
  "SaaS Products",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative bg-cyber-gradient">
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
              About Me
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter-custom mb-3 sm:mb-4">
            MULTI-ROLE
            <br />
            <span className="text-primary">BUILDER</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            12th-grade Computer Science student from Kerala. 
            Not just learning — actively building, testing, and deploying real projects.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {roles.map((role, index) => (
            <BentoCard key={role.id} delay={index * 0.1} className="group">
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <span className="font-mono text-[10px] sm:text-xs text-primary bg-primary/10 px-2 py-1 flex-shrink-0">
                  {role.years}
                </span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {role.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Languages */}
          <BentoCard delay={0.4}>
            <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["English", "Malayalam", "Manglish"].map((lang) => (
                <span 
                  key={lang}
                  className="px-3 py-1 border border-border/50 font-mono text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Interests */}
          <BentoCard delay={0.5}>
            <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Building Towards
            </h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span 
                  key={interest}
                  className="px-3 py-1 border border-primary/30 bg-primary/5 font-mono text-sm text-primary"
                >
                  {interest}
                </span>
              ))}
            </div>
          </BentoCard>
        </motion.div>

        {/* Mindset Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-muted-foreground italic">
            "I don't just ask 'what is AI' — I ask 'how do I make this work end-to-end, offline, scalable, and monetizable?'"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
