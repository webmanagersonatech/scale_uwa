// pages/what-we-do.tsx (Next.js Pages Router)
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const WhatWeDo: NextPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Intersection Observer hooks for each section
    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.2
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.6
            }
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.7 }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#dc2626",
            transition: { type: "spring", stiffness: 400 }
        },
        tap: { scale: 0.95 }
    };

    const frameVariants = {
        hidden: { opacity: 0, x: -20, y: -20 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.1 }
        }
    };

    const dotGridVariants = {
        hidden: { opacity: 0, rotate: -45, scale: 0.8 },
        visible: {
            opacity: 0.2,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.6, delay: 0.3 }
        }
    };

    return (
        <main className="bg-white flex items-center justify-center pt-16 overflow-hidden">
            <section className="w-full mx-auto max-w-[1440px] px-4 ">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* ── LEFT: Content block with animations ── */}
                    <motion.div
                        ref={contentRef}
                        className="w-full lg:w-[55%]"
                        variants={contentVariants}
                        initial="hidden"
                        animate={isClient && contentInView ? "visible" : "hidden"}
                    >
                        {/* Section heading */}
                        <motion.div variants={itemVariants}>
                            <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] sm:leading-[1.15] lg:leading-[1.08] text-black mb-1">
                                About MS in Data Science{" "}
                                <span className="text-gray-400 font-light">--</span>
                            </h2>
                        </motion.div>

                        {/* Sub-heading */}
                        <motion.div variants={itemVariants}>
                            <motion.p
                                className="text-[#8c1d32] text-xs sm:text-sm font-semibold tracking-[3px] uppercase mt-3 mb-4 underline underline-offset-4 decoration-gray-400"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Master of Science in Data Science
                            </motion.p>
                        </motion.div>

                        {/* Body paragraph */}
                        <motion.p
                            className="text-sm text-gray-700 leading-relaxed  mb-8 max-w-xl"
                            variants={itemVariants}
                        >
                            With a Master of Science in Data Science Degree from the University of West Alabama, you will learn to blend theory with practical application and prepare to advance your career. This program's core courses in statistics, programming and machine learning will strengthen your foundational knowledge and help you stand out as a competitive job candidate. With specialized electives and hands-on projects, you will foster both technical expertise and problem-solving skills.
                        </motion.p>

                        {/* Vision & Mission columns - Repurposed as Program Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <motion.div variants={itemVariants} whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                                <h3 className="text-[#8c1d32] font-bold text-sm uppercase tracking-wide mb-2">
                                    Flexibility
                                </h3>
                                <p className="text-sm text-gray-700  leading-relaxed">
                                    This data science degree gives you the flexibility to fit study into your schedule, allowing you to balance education with professional commitments.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                                <h3 className="text-[#8c1d32] font-bold text-sm uppercase tracking-wide mb-2">
                                    Career Ready
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed ">
                                    Upon completion, you will have earned the skills and knowledge necessary to advance your data science career with confidence.
                                </p>
                            </motion.div>
                        </div>

                    </motion.div>

                    {/* ── RIGHT: Image block with animations (reduced height) ── */}
                    <motion.div
                        ref={imageRef}
                        className="relative w-full lg:w-[45%] flex-shrink-0"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isClient && imageInView ? "visible" : "hidden"}
                    >
                        {/* Red decorative border (top-left offset frame) */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-[85%] h-[85%] border-2 border-red-600 z-0"
                            variants={frameVariants}
                        />

                        {/* Main image with reduced height */}
                        <motion.div
                            className="relative z-10 w-full h-[260px] lg:h-[320px] overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="https://img.magnific.com/premium-vector/data-science-artificial-intelligence-big-data-machine-learning-sphere-with-surface-hexagons_127544-3154.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80"
                                alt="Industrial facility with steel structures"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Red badge – Years of Excellence repurposed */}
                        <motion.div
                            className="absolute bottom-0 right-0 z-20 bg-red-600 text-white px-6 py-5 text-center min-w-[130px] cursor-default"
                            variants={badgeVariants}
                            whileHover="hover"
                        >
                            <motion.p
                                className="text-4xl font-extrabold leading-none"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                            >
                                Top
                            </motion.p>
                            <p className="text-sm font-semibold tracking-wider mt-1 uppercase">
                                Ranked
                            </p>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase">
                                Program
                            </p>
                        </motion.div>

                        {/* Subtle dot-grid decoration (top-right) */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-24 h-24 z-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, #dc2626 1px, transparent 1px)",
                                backgroundSize: "8px 8px",
                            }}
                            variants={dotGridVariants}
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default WhatWeDo;