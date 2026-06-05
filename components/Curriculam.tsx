
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
    const [startIndex, setStartIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3);

    // Handle responsive cards per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setCardsPerPage(2); // Tablet: 2 cards
            } else {
                setCardsPerPage(3); // Desktop: 3 cards
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalCards = cards.length;
    const maxStartIndex = Math.max(0, totalCards - cardsPerPage);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    };

    const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section id="curriculum"
            ref={ref}
            className="w-full py-12 bg-white overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-[#8c1d32] text-sm font-semibold tracking-[4px] uppercase mb-3">
                        Curriculum Snapshot
                    </p>
                    <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif text-gray-900 mb-4">
                        What You Will Study
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A Data Science pathway built around programming, statistics, analytics,
                        machine learning, visualization, and applied projects.
                    </p>
                    <div className="w-16 h-0.5 bg-[#8c1d32] mx-auto" />
                </motion.div>

                {/* Navigation Arrows - hide if only one page */}
                {maxStartIndex > 0 && (
                    <div className="flex justify-end gap-2 mb-4">
                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            className={`p-2 rounded border transition-all duration-300 ${
                                startIndex === 0
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                    : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                            }`}
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={startIndex >= maxStartIndex}
                            className={`p-2 rounded border transition-all duration-300 ${
                                startIndex >= maxStartIndex
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                    : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                            }`}
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}

                {/* Cards grid - responsive columns */}
                <div className="overflow-hidden">
                    <motion.div
                        key={startIndex}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={`grid gap-5 ${
                            cardsPerPage === 1 
                                ? "grid-cols-1 max-w-sm mx-auto" 
                                : cardsPerPage === 2 
                                    ? "grid-cols-1 sm:grid-cols-2" 
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        }`}
                    >
                        {visibleCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={startIndex + i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                                    whileHover={{ y: -4 }}
                                    className="group border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="p-5">
                                        {/* Icon */}
                                        <div className="mb-4">
                                            <Icon size={24} className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300" strokeWidth={1.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif text-lg font-medium text-gray-900 mb-1.5">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Pagination Dots - show only if more than one page */}
                {maxStartIndex > 0 && (
                    <div className="flex justify-center gap-1.5 mt-6">
                        {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setStartIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${
                                    startIndex === idx
                                        ? "w-6 h-1 bg-gray-600"
                                        : "w-1.5 h-1 bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}