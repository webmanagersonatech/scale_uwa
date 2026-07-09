import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_PATH } from "../utils/config";
import Image from "next/image";

const Eventsection: NextPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Intersection Observer hooks
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

    const dotGridVariants = {
        hidden: { opacity: 0, rotate: -45, scale: 0.8 },
        visible: {
            opacity: 0.2,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.6, delay: 0.3 }
        }
    };

    // Event pattern background elements
    const EventPattern = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Event tickets pattern */}
            <motion.div
                className="absolute -left-20 top-10 opacity-[0.04]"
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg width="200" height="300" viewBox="0 0 200 300">
                    <rect x="10" y="20" width="180" height="260" rx="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
                    <circle cx="50" cy="250" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
                    <text x="40" y="150" fontSize="14" fill="currentColor" className="text-gray-400" fontFamily="serif">EVENT</text>
                    <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" className="text-gray-400" strokeDasharray="4 4" />
                    <line x1="20" y1="200" x2="180" y2="200" stroke="currentColor" strokeWidth="1" className="text-gray-400" strokeDasharray="4 4" />
                </svg>
            </motion.div>

            {/* Calendar pattern */}
            <motion.div
                className="absolute -right-10 bottom-20 opacity-[0.04]"
                initial={{ rotate: 12 }}
                animate={{ rotate: -5 }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg width="180" height="240" viewBox="0 0 180 240">
                    <rect x="20" y="20" width="140" height="200" rx="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                    <rect x="20" y="40" width="140" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400" />
                    <circle cx="50" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
                    <circle cx="90" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
                    <circle cx="130" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400" />
                    <text x="40" y="120" fontSize="32" fill="currentColor" className="text-gray-400" fontFamily="serif" fontWeight="bold">15</text>
                    <text x="40" y="145" fontSize="12" fill="currentColor" className="text-gray-400">JULY</text>
                    <line x1="30" y1="170" x2="150" y2="170" stroke="currentColor" strokeWidth="1" className="text-gray-400" strokeDasharray="4 4" />
                    <line x1="30" y1="180" x2="150" y2="180" stroke="currentColor" strokeWidth="1" className="text-gray-400" strokeDasharray="4 4" />
                </svg>
            </motion.div>

            {/* Confetti/Stars pattern */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-gray-300"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.05 + Math.random() * 0.05,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Event ribbon pattern */}
            <motion.div
                className="absolute top-1/3 -left-16 w-64 h-16 opacity-[0.04]"
                initial={{ x: -50 }}
                animate={{ x: 50 }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg viewBox="0 0 300 80" width="300" height="80">
                    <path d="M0,40 C40,10 80,70 120,40 C160,10 200,70 240,40 C280,10 320,70 360,40" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400" strokeDasharray="8 8" />
                    <text x="100" y="50" fontSize="16" fill="currentColor" className="text-gray-400" fontFamily="sans-serif" fontWeight="bold">✦ EVENT ✦</text>
                </svg>
            </motion.div>

            {/* Geometric pattern - event venue */}
            <div className="absolute inset-0 opacity-[0.03]">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`venue-${i}`}
                        className="absolute border-2 border-gray-300"
                        style={{
                            width: 80 + Math.random() * 120,
                            height: 80 + Math.random() * 120,
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '8px',
                        }}
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 40 + Math.random() * 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Microphone/Event icon pattern */}
            <motion.div
                className="absolute top-20 right-20 opacity-[0.04]"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            >
                <svg width="60" height="80" viewBox="0 0 60 80">
                    <rect x="20" y="20" width="20" height="30" rx="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                    <line x1="30" y1="50" x2="30" y2="65" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                    <path d="M15,65 L45,65" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                    <circle cx="30" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                </svg>
            </motion.div>

            {/* Sound wave pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.03]">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`wave-${i}`}
                        className="absolute bottom-0 bg-gray-400"
                        style={{
                            height: 10 + Math.random() * 30,
                            width: 2,
                            left: `${(i / 8) * 100}%`,
                        }}
                        animate={{
                            height: [10 + Math.random() * 20, 20 + Math.random() * 30, 10 + Math.random() * 20],
                        }}
                        transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <main className="flex items-center justify-center py-10 overflow-hidden relative">
            {/* Background - Light Gray to White Gradient with Event Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-50 to-white">
                <EventPattern />

                {/* Subtle event-themed overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(156,163,175,0.05)_0%,_transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(156,163,175,0.03)_0%,_transparent_70%)]" />

                {/* Pattern overlay - diagonal lines in light gray */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg width="100%" height="100%">
                        <pattern id="diagonal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="40" stroke="#9ca3af" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#diagonal)" />
                    </svg>
                </div>

                {/* Floating sparkles in gray */}
                <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            className="absolute w-0.5 h-0.5 bg-gray-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 0.08, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </div>

            <section className="relative z-10 w-full mx-auto max-w-[1440px] px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
                    {/* ── LEFT: Content block with background image ── */}
                    <motion.div
                        ref={contentRef}
                        className="w-full lg:w-[55%] flex flex-col justify-center relative overflow-hidden"
                        variants={contentVariants}
                        initial="hidden"
                        animate={isClient && contentInView ? "visible" : "hidden"}
                    >
                        {/* Background Image Layer */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={`${BASE_PATH}/homeimages/sonauwa.webp`}
                                alt="Event background"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
                            {/* Additional overlay to blend with right side */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-transparent"></div>
                        </div>

                        {/* Content wrapper - FIXED: Removed extra padding that caused height mismatch */}
                        <div className="relative z-10 px-6 py-6 lg:px-8 lg:py-8 xl:px-10 xl:py-10">
                            {/* Event Badge with animated shimmer */}
                            <motion.div variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-2 relative">
                                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-0.5 rounded-full tracking-wider relative overflow-hidden">
                                        <span className="relative z-10">NEW</span>
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </span>
                                    <span className="text-white/70 text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-red-400"></span>
                                        Event
                                    </span>
                                </div>
                            </motion.div>

                            {/* Section heading */}
                            <motion.div variants={itemVariants}>
                                <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.15] text-white mb-2">
                                    SONA-UWA Launches <br />
                                    <span className="text-white relative inline-block">
                                        1+1 International Pathway
                                        <motion.span
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </span>
                                </h2>
                            </motion.div>

                            {/* Sub-heading */}
                            <motion.div variants={itemVariants}>
                                <motion.p
                                    className="text-white text-xs sm:text-sm font-semibold tracking-[3px] uppercase mb-3 inline-block border-b-2 border-white pb-1.5"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    M.S. Data Science Programme
                                </motion.p>
                            </motion.div>

                            {/* Event Details */}
                            <motion.div variants={itemVariants} className="space-y-2 mb-4">
                                {/* Date */}
                                <div className="flex items-start gap-3 group">
                                    <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 border border-white/10 flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-white/90">Launch Date</p>
                                        <p className="text-xs text-white/80">3 July 2026</p>
                                    </div>
                                </div>

                                {/* Location / Type */}
                                <div className="flex items-start gap-3 group">
                                    <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 border border-white/10 flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-white/90">Programme Type</p>
                                        <p className="text-xs text-white/80">International Pathway • 1+1 Model</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* VIEW EVENT BUTTON - ENHANCED */}
                            <Link href="/events/sona-uwa-launches-1-1-international-pathway-programme-in-m-s-data-science">
                                <div className="relative z-10">
                                    <motion.button
                                        variants={itemVariants}
                                        className="
                inline-flex
                items-center
                justify-center
                bg-[#078671]
                text-white
                text-justify 
                font-bold
                uppercase
                tracking-wide
                text-xs 
                px-5 sm:px-7 md:px-8
                py-2 
                rounded-tr-[14px] sm:rounded-tr-[18px] md:rounded-tr-[20px]
                rounded-bl-[14px] sm:rounded-bl-[18px] md:rounded-bl-[20px]
                rounded-tl-none
                rounded-br-none
                hover:bg-[#067864]
                transition-all
                duration-300
                shadow-md
                whitespace-nowrap
                gap-2
                group
            "
                                        whileHover={{ x: 5, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <span>View Event</span>
                                        <svg
                                            className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>
                            </Link>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute bottom-3 right-3 flex gap-2 z-0"
                                variants={dotGridVariants}
                            >
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Screenshot Card ── */}
                   {/* ── RIGHT: Screenshot Card ── */}
<motion.div
    ref={imageRef}
    className="relative w-full lg:w-[45%] flex-shrink-0 flex flex-col justify-center"
    variants={imageVariants}
    initial="hidden"
    animate={isClient && imageInView ? "visible" : "hidden"}
>
    <div className="flex flex-col justify-center h-full">
        {/* Badge */}
        <motion.div variants={itemVariants}>
            <motion.p
                className="text-[#8c1d32] text-xs sm:text-sm font-semibold tracking-[3px] uppercase mt-0 mb-3 underline underline-offset-4 decoration-gray-400"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Official UWA Partner
            </motion.p>
        </motion.div>

        {/* Title - Compact */}
        <motion.div variants={itemVariants} className="mb-2">
            <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.15] leading-tight">
                Recognized by<span className=" text-red-600 font-serif"> UWA, USA</span>
            </h3>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                <strong>Sona Star Innovation</strong> is officially recognized by the
                <strong> University of West Alabama</strong> as its recruitment partner in India.
            </p>
        </motion.div>

        {/* Screenshot - MATCHING HEIGHT with left side */}
        <a
            href="https://www.uwa.edu/admissions/international-students/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex-1 relative"
        >
            <div className="relative w-full h-full min-h-[180px] max-h-[220px]">
                <Image
                    src={`${BASE_PATH}/homeimages/official-screenshot.webp`}
                    alt="University of West Alabama official partner listing"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Overlay - Subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* CTA - MATCHING DESIGN with View Event button */}
                <div className="absolute bottom-3 right-3">
                    <motion.button
                        className="
                            inline-flex
                            items-center
                            justify-center
                            bg-[#078671]
                            text-white
                            font-bold
                            uppercase
                            tracking-wide
                            text-xs 
                            px-4 sm:px-5
                            py-1.5 sm:py-2
                            rounded-tr-[12px] sm:rounded-tr-[14px]
                            rounded-bl-[12px] sm:rounded-bl-[14px]
                            rounded-tl-none
                            rounded-br-none
                            hover:bg-[#067864]
                            transition-all
                            duration-300
                            shadow-md
                            whitespace-nowrap
                            gap-2
                            group/btn
                        "
                        whileHover={{ x: 3, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View Official Listing</span>
                        <svg
                            className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </a>

        {/* Credit - Subtle */}
        <p className="mt-1 text-[11px] text-gray-400">
            Source: Official UWA website
        </p>
    </div>
</motion.div>
                </div>
            </section>
        </main>
    );
};

export default Eventsection;