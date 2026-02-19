import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { Bot, Cpu, MessageSquare, Zap, Code, Sparkles, Brain, LayoutDashboard } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Multi-Model Intelligence",
        description: "Seamlessly switch between multiple LLMs to find the best fit for your conversation.",
        icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
        colSpan: 2,
    },
    {
        id: 2,
        title: "Real-time Processing",
        description: "Experience lightning-fast responses with optimized streaming capabilities.",
        icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
        colSpan: 1,
    },
    {
        id: 3,
        title: "modern UI",
        description: "A sleek, glassmorphic interface designed for clarity and ease of use.",
        icon: <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />,
        colSpan: 1,
    },
    {
        id: 4,
        title: "Developer Friendly",
        description: "Built with modern tech stack allowing easy extensions and custom integrations.",
        icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
        colSpan: 2, // Changed to 2 to fill the row if we have 4 items in a 4-col grid, or adjust layout
    },
];

const ChatBotSection = () => {
    return (
        <section id="chatbot" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] right-[10%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                            AI Experiment
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-4 sm:mb-6 px-2"
                    >
                        Multi-LLM <span className="text-primary">ChatBot</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2"
                    >
                        A personal fun project exploring the capabilities of various Large Language Models.
                        Designed to test, compare, and interact with different AI personalities in one unified interface.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {features.map((feature, index) => (
                        <BentoCard
                            key={feature.id}
                            colSpan={feature.colSpan as any}
                            delay={index * 0.1}
                            className="group hover:border-primary/30 transition-colors"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Decorative element */}
                                <div className="mt-4 flex justify-end">
                                    <Sparkles className="w-4 h-4 text-primary/20 group-hover:text-primary/60 transition-colors" />
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </div>

                {/* Tech Stack / Footer of Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center flex flex-col items-center gap-6"
                >
                    <a
                        href="#" // TODO: Replace with actual ChatBot URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground font-mono text-xs sm:text-sm uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>Visit ChatBot</span>
                    </a>

                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm">
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-mono text-muted-foreground">Powered by generic LLM APIs</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ChatBotSection;
