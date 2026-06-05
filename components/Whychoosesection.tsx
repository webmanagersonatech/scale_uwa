import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
    {
        title: "Academic\nReadiness",
        description:
            "Strengthen Data Science fundamentals before entering the U.S. academic environment.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="32,10 8,24 32,34 56,24" />
                <path d="M20 30 v12 c0 6 12 10 12 10s12-4 12-10V30" />
                <line x1="56" y1="24" x2="56" y2="40" />
                <circle cx="56" cy="42" r="2.5" fill="currentColor" stroke="currentColor" />
                <rect x="22" y="44" width="20" height="13" rx="2" />
                <line x1="27" y1="49" x2="37" y2="49" />
                <line x1="27" y1="53" x2="34" y2="53" />
                <circle cx="44" cy="44" r="3" fill="none" />
                <line x1="46" y1="42" x2="49" y2="39" />
            </svg>
        ),
    },
    {
        title: "Technical\nSkills",
        description:
            "Build working confidence in Python, R, SQL, visualization, machine learning, and applied tools.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 52 V40 C14 37 10 30 10 24 C10 13 20 6 32 6 C44 6 54 13 54 24 C54 30 50 37 44 40 V52" />
                <line x1="20" y1="52" x2="44" y2="52" />
                <text x="22" y="30" fontSize="11" fill="currentColor" stroke="none" fontFamily="serif">x=3</text>
                <circle cx="32" cy="24" r="10" strokeDasharray="3 2" opacity="0.4" />
            </svg>
        ),
    },
    {
        title: "Portfolio\nBuilding",
        description:
            "Develop projects, GitHub profile, LinkedIn profile, and resume readiness.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="8" width="48" height="34" rx="3" />
                <path d="M24 14 C24 14 32 18 32 18 C32 18 40 14 40 14 V32 C40 32 32 36 32 36 C32 36 24 32 24 32 Z" />
                <line x1="32" y1="18" x2="32" y2="36" />
                <line x1="32" y1="42" x2="32" y2="52" />
                <line x1="20" y1="52" x2="44" y2="52" />
            </svg>
        ),
    },
    {
        title: "Communication",
        description:
            "Practice academic writing, presentations, interviews, and professional communication.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 24 L32 40 L56 24" />
                <path d="M12 28 L12 48 L32 60 L52 48 L52 28" />
                <circle cx="32" cy="24" r="6" />
                <path d="M20 16 L44 16" />
            </svg>
        ),
    },
    {
        title: "U.S.\nTransition",
        description:
            "Understand documentation, visa expectations, classroom culture, and international student readiness.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="32" r="22" />
                <path d="M32 10 L32 54" />
                <path d="M10 32 L54 32" />
                <circle cx="32" cy="32" r="8" />
                <path d="M32 22 L32 42" />
                <path d="M22 32 L42 32" />
            </svg>
        ),
    },
    {
        title: "Career\nPreparation",
        description:
            "Prepare for internships, job conversations, employer expectations, and career planning.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="12" y="22" width="40" height="34" rx="4" />
                <line x1="22" y1="14" x2="22" y2="26" />
                <line x1="42" y1="14" x2="42" y2="26" />
                <path d="M32 36 L32 48" />
                <path d="M26 42 L38 42" />
                <circle cx="32" cy="32" r="3" fill="currentColor" />
            </svg>
        ),
    },
];

export default function WhyChooseSection() {
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
        <section
            ref={ref}
            className="w-full py-12 sm:py-14 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden relative"

        >
            {/* Decorative circles - light gray tones */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gray-300/40" />
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-gray-300/30" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-gray-300/40" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full border border-gray-300/20" />
                <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full border border-gray-400/30" />
                <div className="absolute bottom-1/3 right-16 w-20 h-20 rounded-full border border-gray-400/25" />
                <div className="absolute top-2/3 left-1/4 w-8 h-8 rounded-full bg-gray-400/10" />

                {/* Thin elegant lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                    <line x1="10%" y1="30%" x2="25%" y2="30%" stroke="#6c757d" strokeWidth="0.5" strokeDasharray="4 8" />
                    <line x1="75%" y1="60%" x2="95%" y2="60%" stroke="#6c757d" strokeWidth="0.5" strokeDasharray="4 8" />
                    <line x1="85%" y1="15%" x2="85%" y2="35%" stroke="#6c757d" strokeWidth="0.5" strokeDasharray="3 6" />
                    <line x1="15%" y1="75%" x2="15%" y2="90%" stroke="#6c757d" strokeWidth="0.5" strokeDasharray="3 6" />
                    <line x1="5%" y1="85%" x2="20%" y2="70%" stroke="#adb5bd" strokeWidth="0.3" strokeDasharray="2 5" />
                    <line x1="80%" y1="10%" x2="90%" y2="20%" stroke="#adb5bd" strokeWidth="0.3" strokeDasharray="2 5" />
                </svg>

                <div className="absolute top-32 left-0 w-32 h-px bg-gradient-to-r from-gray-300/0 via-gray-400/20 to-gray-300/0" />
                <div className="absolute bottom-32 right-0 w-40 h-px bg-gradient-to-r from-gray-300/0 via-gray-400/20 to-gray-300/0" />
            </div>

            {/* Subtle noise/grain overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "120px",
                }}
            />

            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <p className="text-[#8c1d32] text-[10px] sm:text-sm font-semibold tracking-[2px] uppercase mb-4">
                        Why Year 1 at SCALE Matters
                    </p>
                    <h2 className="font-serif text-gray-900 text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] max-w-[780px] mx-auto">
                        Not Just a First Year.{" "}
                        <span className="underline underline-offset-8 decoration-gray-400">
                            A Preparation Year.
                        </span>
                    </h2>
                </motion.div>

                {/* Navigation Arrows - hide on mobile if only one page, otherwise show */}
                {maxStartIndex > 0 && (
                    <div className="flex justify-end gap-3 mb-5">
                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            className={`p-2 rounded-full border border-gray-300 transition-all duration-300 ${startIndex === 0
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100 hover:scale-110 cursor-pointer"
                                }`}
                        >
                            <ArrowLeft size={20} className="text-gray-700" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={startIndex >= maxStartIndex}
                            className={`p-2 rounded-full border border-gray-300 transition-all duration-300 ${startIndex >= maxStartIndex
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100 hover:scale-110 cursor-pointer"
                                }`}
                        >
                            <ArrowRight size={20} className="text-gray-700" />
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
                        className={`grid gap-5 ${cardsPerPage === 1
                                ? "grid-cols-1 max-w-sm mx-auto"
                                : cardsPerPage === 2
                                    ? "grid-cols-1 sm:grid-cols-2"
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >
                        {visibleCards.map((card, i) => (
                            <motion.div
                                key={startIndex + i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                                className="group relative border border-gray-200 backdrop-blur-sm bg-white/80 p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer overflow-hidden rounded-sm shadow-sm"
                            >
                                {/* Hover background fill */}
                                <motion.div
                                    className="absolute inset-0 bg-gray-50"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 mb-5 text-gray-800"
                                >
                                    {card.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className="relative z-10 font-serif text-gray-900 text-lg sm:text-xl leading-snug mb-3 whitespace-pre-line">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-6 max-w-[240px]">
                                    {card.description}
                                </p>

                                {/* Read More button */}
                            <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="
    relative z-10 mt-auto

    bg-[#078671]
    hover:bg-[#067864]

    text-white
    font-bold
    uppercase
    tracking-[2px]
    text-[11px]

    py-3 px-8

    rounded-tr-[20px]
    rounded-bl-[20px]
    rounded-tl-none
    rounded-br-none

    inline-flex
    items-center
    justify-center
    gap-2

    transition-all
    duration-300
    shadow-md
  "
>
  Read More
  <ArrowUpRight size={14} />
</motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots - show only if more than one page */}
                {maxStartIndex > 0 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setStartIndex(idx)}
                                className={`transition-all duration-300 rounded-full ${startIndex === idx
                                        ? "w-8 h-1.5 bg-gray-600"
                                        : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}