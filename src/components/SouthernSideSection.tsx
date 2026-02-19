import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { ExternalLink, Mail, GraduationCap, Building2, Bot, Lightbulb, Users, Briefcase, AlertCircle } from "lucide-react";
import southernsideLogo from "@/assets/southernside-logo.png";

const services = [
    {
        id: 1,
        title: "AI Awareness for Schools",
        description: "Workshops for Class 6+ on AI literacy, real-world tools, ethics & career awareness.",
        icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        id: 2,
        title: "AI Consulting",
        description: "Workflow automation, chatbot development & AI strategy for institutions & businesses.",
        icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        id: 3,
        title: "Government Chatbots",
        description: "Public-service AI chatbots with local language support for citizen assistance.",
        icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
        id: 4,
        title: "Organizational AI Strategy",
        description: "AI tool stack setup, prompt engineering systems & efficiency modernization.",
        icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
];

const SouthernSideSection = () => {
    return (
        <section id="southernside" className="py-16 sm:py-24 relative">
            <div className="container px-4 sm:px-6">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <img src={southernsideLogo} alt="SouthernSide Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                                    Founder & AI Educator
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter-custom">
                                    SOUTHERNSIDE
                                </h2>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-amber-500/40 bg-amber-500/10 text-amber-500">
                                <AlertCircle className="w-3 h-3" />
                                In Development
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-blue-500/40 bg-blue-500/10 text-blue-500">
                                <Building2 className="w-3 h-3" />
                                Seeking Gov Collaboration
                            </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary/80 mb-4 italic">
                            "AI is the new literacy."
                        </p>

                        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4">
                            An AI education and consulting initiative making artificial intelligence practical,
                            ethical, and accessible for schools, institutions, government bodies, and organizations.
                        </p>

                        {/* Category Tags */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border/50 text-muted-foreground">
                                <GraduationCap className="w-3 h-3" />
                                AI Education
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-border/50 text-muted-foreground">
                                <Building2 className="w-3 h-3" />
                                Consulting
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-primary/30 text-primary/70">
                                <Users className="w-3 h-3" />
                                Class 6+ | Institutions
                            </span>
                        </div>
                    </motion.div>

                    {/* Mission Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-[250px] sm:h-[300px] lg:h-[350px] relative flex items-center justify-center"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Animated AI Icon */}
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="w-32 h-32 sm:w-40 sm:h-40 border-2 border-primary/30 rounded-full flex items-center justify-center"
                                >
                                    <Bot className="w-16 h-16 sm:w-20 sm:h-20 text-primary/60" />
                                </motion.div>
                                <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16 border-l-2 border-primary/40 pl-4 sm:pl-6 max-w-3xl"
                >
                    <p className="text-sm sm:text-base text-muted-foreground italic">
                        "Empowering students to become AI-literate, ethically responsible users — not passive consumers.
                        Making AI practical for rural and semi-urban schools, institutions, and government bodies."
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="mb-3 sm:mb-4">
                    <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                        Core Offerings
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
                    {services.map((service, index) => (
                        <BentoCard key={service.id} delay={index * 0.1} className="group">
                            <div className="text-primary/50 group-hover:text-primary transition-colors mb-3 sm:mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {service.description}
                            </p>
                        </BentoCard>
                    ))}
                </div>

                {/* Target Audience */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 sm:mb-10"
                >
                    <div className="mb-3 sm:mb-4">
                        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                            Target Audience
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors">
                            <GraduationCap className="w-4 h-4 text-primary/60" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                Schools (Class 6+)
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors">
                            <Building2 className="w-4 h-4 text-primary/60" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                Educational Institutions
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors">
                            <Users className="w-4 h-4 text-primary/60" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                Government Bodies
                            </span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 border border-border/30 hover:border-primary/40 transition-colors">
                            <Briefcase className="w-4 h-4 text-primary/60" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                                Professionals & Organizations
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                    <a
                        href="mailto:madhavmanu.official@gmail.com?subject=SouthernSide%20Inquiry"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-primary text-primary-foreground font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                        data-cursor-button
                    >
                        <span>Get in Touch</span>
                        <Mail className="w-4 h-4" />
                    </a>
                    <a
                        href="mailto:madhavmanu.official@gmail.com?subject=SouthernSide%20Partnership"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-border/50 font-mono text-xs sm:text-sm uppercase tracking-wider hover:border-primary/50 hover:bg-primary/5 transition-all"
                        data-cursor-hover
                    >
                        <Building2 className="w-4 h-4" />
                        <span>Partnership Inquiry</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SouthernSideSection;
