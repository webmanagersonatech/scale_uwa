
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    FileText,
    ClipboardCheck,
    GraduationCap,
    FileCheck,
    Briefcase,
    Users,
    ArrowLeft,
    ArrowRight,
    Globe,
    Heart,
    Shield,
    CheckCircle2,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Counselling & Profile Review",
        description:
            "SCALE reviews your academic background, goals, and documentation readiness.",
        icon: Users,
    },
    {
        number: "02",
        title: "Application Submission",
        description:
            "Submit your application form, transcripts, passport copy, and supporting documents.",
        icon: FileText,
    },
    {
        number: "03",
        title: "Admission Review",
        description:
            "UWA reviews academic credentials and confirms admission eligibility.",
        icon: ClipboardCheck,
    },
    {
        number: "04",
        title: "Year 1 at SCALE",
        description:
            "Begin UWA-approved mapped coursework at SCALE, Bengaluru.",
        icon: GraduationCap,
    },
    {
        number: "05",
        title: "Visa Preparation",
        description:
            "Prepare financials, receive UWA documentation, and apply for F-1 student visa.",
        icon: FileCheck,
    },
    {
        number: "06",
        title: "Year 2 at UWA",
        description:
            "Complete remaining credits on campus in Livingston, Alabama, USA.",
        icon: Globe,
    },
    {
        number: "07",
        title: "OPT / Career Pathway",
        description:
            "Apply for OPT/STEM OPT subject to U.S. government rules and eligibility.",
        icon: Briefcase,
    },
];

export default function Admissions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4;
    const totalCards = steps.length;
    const maxStartIndex = totalCards - cardsPerPage;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    };

    const visibleSteps = steps.slice(startIndex, startIndex + cardsPerPage);

    return (
        <section id="admissions"
            ref={ref}
            className="w-full py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
                >
                    <p className="text-[#8c1d32] text-[11px] sm:text-sm font-semibold tracking-[3px] sm:tracking-[4px] uppercase mb-2 sm:mb-3">
                        Your Journey Begins
                    </p>
                    <h2 className="text-[32px] sm:text-[44px] md:text-[50px] lg:text-[52px] font-serif text-gray-900 mb-3 sm:mb-4 leading-tight">
                        Admission{" "}
                        <span className="text-[#8c1d32] relative inline-block">
                            Process
                            <svg
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                                height="6"
                                viewBox="0 0 200 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 5.5C40.5 2.5 120 1 199 5.5"
                                    stroke="#8c1d32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeDasharray="3 5"
                                />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 px-2">
                        Your journey from application to graduation — clear,
                        transparent, and fully supported every step of the way.
                    </p>
                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#8c1d32]/50 via-[#8c1d32] to-[#8c1d32]/50 mx-auto mt-4 sm:mt-5" />
                </motion.div>

                {/* Navigation Arrows */}
                <div className="flex justify-end gap-3 mb-8">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`p-2.5 rounded-full transition-all duration-300 ${startIndex === 0
                            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                            : "bg-white text-gray-600 hover:bg-[#8c1d32] hover:text-white shadow-sm hover:shadow-md cursor-pointer"
                            }`}
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= maxStartIndex}
                        className={`p-2.5 rounded-full transition-all duration-300 ${startIndex >= maxStartIndex
                            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                            : "bg-white text-gray-600 hover:bg-[#8c1d32] hover:text-white shadow-sm hover:shadow-md cursor-pointer"
                            }`}
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* Steps Flow - No Cards Design */}
                <div className="overflow-hidden">
                    <motion.div
                        key={startIndex}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
                    >
                        {visibleSteps.map((step, i) => {
                            const Icon = step.icon;
                            const actualIndex = startIndex + i;
                            const isLastInRow = i === visibleSteps.length - 1;
                            return (
                                <motion.div
                                    key={actualIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 + i * 0.05,
                                    }}
                                    className="relative"
                                >
                                    {/* Connector line between steps (horizontal on lg, vertical on mobile) */}
                                    {!isLastInRow && (
                                        <>
                                            {/* Desktop horizontal line */}
                                            <div className="hidden lg:block absolute top-12 left-[calc(100%+0.5rem)] w-8 h-px bg-gradient-to-r from-[#8c1d32]/30 to-transparent" />
                                            {/* Mobile vertical line */}
                                            <div className="lg:hidden absolute left-6 top-24 bottom-0 w-px bg-gradient-to-b from-[#8c1d32]/30 to-transparent" />
                                        </>
                                    )}

                                    <div className="flex gap-5">
                                        {/* Left side with number and icon */}
                                        <div className="flex flex-col items-center">
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-[#8c1d32]/10 flex items-center justify-center z-10 relative">
                                                    <Icon
                                                        size={20}
                                                        className="text-[#8c1d32]"
                                                        strokeWidth={1.7}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 rounded-full bg-[#8c1d32]/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <div className="text-xs font-bold text-[#8c1d32] mt-2">
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* Right side with content */}
                                        <div className="flex-1 pb-8 lg:pb-0">
                                            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Progress indicator dots */}
                                            <div className="flex gap-1 mt-3">
                                                {[0, 1, 2].map((dot) => (
                                                    <div
                                                        key={dot}
                                                        className="w-1 h-1 rounded-full bg-gray-300"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: totalCards - cardsPerPage + 1 }).map(
                        (_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setStartIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${startIndex === idx
                                    ? "w-8 h-1.5 bg-[#8c1d32]"
                                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        )
                    )}
                </div>


            </div>
        </section>
    );
}