"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Brain,
    Settings,
    PieChart,
    Database,
    Briefcase
} from "lucide-react";

const cards = [
    {
        title: "Data Analyst",
        description: "Dashboards, reporting, insights, and decision support.",
        icon: BarChart3,
    },
    {
        title: "Data Scientist",
        description: "Models, predictions, experimentation, and analytics solutions.",
        icon: Brain,
    },
    {
        title: "ML Engineer",
        description: "Machine learning pipelines, automation, and AI deployment.",
        icon: Settings,
    },
    {
        title: "BI Analyst",
        description: "Business intelligence, KPI tracking, and dashboards.",
        icon: PieChart,
    },
    {
        title: "Data Engineer",
        description: "Data pipelines, databases, and scalable data infrastructure.",
        icon: Database,
    },
    {
        title: "Analytics Consultant",
        description: "Client problem-solving using data, tools, and strategy.",
        icon: Briefcase,
    },
];

export default function CareerPathway() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 3;
    const totalCards = cards.length;
    const maxStartIndex = totalCards - cardsPerPage;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    };

    const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section
            ref={ref}
            className="w-full py-12 bg-gray-50 overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header */}


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center "
                >
                    <p className="text-[#8c1d32] text-sm font-semibold tracking-[4px] uppercase mb-3">
                        Career Pathway
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                        Build Careers Across Data-Driven Industries
                    </h2>

                    <div className="w-16 h-0.5 bg-[#8c1d32] mx-auto" />
                </motion.div>

                {/* Navigation Arrows */}
                <div className="flex justify-start  gap-2 mb-4">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`p-2 rounded border transition-all duration-300 ${startIndex === 0
                                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                            }`}
                    >
                        <ArrowLeft size={16} />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= maxStartIndex}
                        className={`p-2 rounded border transition-all duration-300 ${startIndex >= maxStartIndex
                                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                            }`}
                    >
                        <ArrowRight size={16} />
                    </button>
                </div>

                {/* Cards grid */}
                <div className="overflow-hidden">
                    <motion.div
                        key={startIndex}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
                                            <Icon size={24} className="text-gray-500 group-hover:text-[#8c1d32] transition-colors duration-300" strokeWidth={1.5} />
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

                {/* Pagination Dots */}
                <div className="flex justify-center gap-1.5 mt-6">
                    {Array.from({ length: totalCards - cardsPerPage + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setStartIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${startIndex === idx
                                    ? "w-6 h-1 bg-gray-600"
                                    : "w-1.5 h-1 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}