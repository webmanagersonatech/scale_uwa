import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowUpRight,
    ArrowLeft,
    ArrowRight,
    Database,
    Code2,
    BarChart3,
    LineChart,
    Cpu,
    Eye
} from "lucide-react";

const cards = [
    {
        title: "Introduction to Data Science",
        description: "Data science lifecycle, applications, and problem framing.",
        icon: Database,
    },
    {
        title: "Data Science Tools",
        description: "Tools, techniques, workflows, and analytics environments.",
        icon: Code2,
    },
    {
        title: "Programming for Data Science",
        description: "Coding for analytics, automation, and problem-solving.",
        icon: BarChart3,
    },
    {
        title: "Data Analysis in R",
        description: "Statistical analysis, modelling, and interpretation.",
        icon: LineChart,
    },
    {
        title: "Visualization",
        description: "Data exploration, dashboards, and insight communication.",
        icon: Eye,
    },
    {
        title: "Machine & Deep Learning",
        description: "AI/ML methods, predictive modelling, and advanced analytics.",
        icon: Cpu,
    },
];

export default function CurriculumSnapshot() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="curriculum"
            ref={ref}
            className="w-full py-8 bg-white overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header - Reduced spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <p className="text-[#8c1d32] text-[10px] sm:text-sm font-semibold tracking-[4px] sm:tracking-[5px] uppercase mb-1">
                        Curriculum Snapshot
                    </p>

                    <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-serif text-gray-900 mb-2 leading-tight">
                        What You Will Study
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        A Data Science pathway built around programming, statistics, analytics,
                        machine learning, visualization, and applied projects.
                    </p>

                    <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                        <div className="w-1 h-1 rounded-full bg-[#8c1d32]"></div>
                        <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                    </div>
                </motion.div>

                {/* Cards grid - All cards shown, no pagination, reduced height */}
                <div className="overflow-hidden">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {cards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.05 + i * 0.03 }}
                                    whileHover={{ y: -2 }}
                                    className="group border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                                >
                                    <div className="p-4">
                                        {/* Icon - Smaller */}
                                        <div className="mb-2">
                                            <Icon size={20} className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300" strokeWidth={1.5} />
                                        </div>

                                        {/* Title - Tighter */}
                                        <h3 className="font-serif text-base font-medium text-gray-900 mb-1">
                                            {card.title}
                                        </h3>

                                        {/* Description - Compact */}
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}