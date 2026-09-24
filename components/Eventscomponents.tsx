import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_PATH } from "../utils/config";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  EVENT DATA — add / edit events here, order = slide order          */
/* ------------------------------------------------------------------ */

type EventData = {
    id: string;
    badgeText: string;
    headingLines: [string, string];
    headingHighlight?: string;
    subheading: string;
    thumbnailImage: string;
    details: { label: string; value: string; icon: "calendar" | "globe" }[];
    ctaText: string;
    ctaHref: string;
    extraPoints?: string[];
    extraFootNote?: string;
    extraContact?: string;
};

const RIGHT_PANEL = {
    eyebrow: "Official UWA International partner",
    titlePrefix: "Recognized by",
    titleHighlight: "UWA, USA",
    description:
        "Sona Star Innovation is officially recognized by the University of West Alabama as its recruitment partner in India.",
    image: `${BASE_PATH}/homeimages/official-screenshot.webp`,
    imageAlt: "University of West Alabama official partner listing",
    imageHref: "https://www.uwa.edu/admissions/international-students/",
    imageCtaText: "View Official Listing",
    credit: "Source: Official UWA website",
};

const EVENTS: EventData[] = [
    {
        id: "us-masters-spot-admission",
        badgeText: "UPCOMING EVENT",
        headingLines: [
            "U.S. Master's Degree Spot Admissions",
            " Now Open — Salem & Bangalore!",
        ],
        headingHighlight: "Spot Admissions",
        subheading: "MS in Data Science (STEM) — International 1+1 Pathway",
        thumbnailImage: `${BASE_PATH}/event/salem-banglore-1.webp`,
        details: [
            { label: "Salem", value: "6th October 2026", icon: "calendar" },
            { label: "Bangalore", value: "8th October 2026", icon: "calendar" },
            { label: "Locations", value: "Salem & Bangalore", icon: "globe" },
        ],
        ctaText: "View Event",
        ctaHref: "/events/us-masters-degree-spot-admissions-salem-bangalore",
        extraFootNote: "*Subject to immigration rules, eligibility & university approval",
        extraContact: "9489725499 / 7010150947",
    },
    {
        id: "sona-uwa-1plus1",
        badgeText: "NEW",
        headingLines: ["SONA-UWA Launches", "1+1 International Pathway"],
        subheading: "M.S. Data Science Programme",
        thumbnailImage: `${BASE_PATH}/homeimages/sonauwa.webp`,
        details: [
            { label: "Launch Date", value: "3 July 2026", icon: "calendar" },
            {
                label: "Programme Type",
                value: "International Pathway • 1+1 Model",
                icon: "globe",
            },
        ],
        ctaText: "View Event",
        ctaHref:
            "/events/sona-uwa-launches-1-1-international-pathway-programme-in-m-s-data-science",
    },
];

/* ------------------------------------------------------------------ */

const Eventsection: NextPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const total = EVENTS.length;
    const event = EVENTS[slide];
    const goTo = (i: number) => setSlide((i + total) % total);
    const next = () => goTo(slide + 1);
    const prev = () => goTo(slide - 1);

    /* Renders heading text, wrapping the highlighted word(s) in a colored span */
    const renderHeading = (text: string, highlight?: string) => {
        if (!highlight) return text;
        const idx = text.indexOf(highlight);
        if (idx === -1) return text;
        const before = text.slice(0, idx);
        const match = text.slice(idx, idx + highlight.length);
        const after = text.slice(idx + highlight.length);
        return (
            <>
                {before}
                <span className="text-[#ffe588]">{match}</span>
                {after}
            </>
        );
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
                delayChildren: 0.2,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const IconCalendar = () => (
        <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );
    const IconGlobe = () => (
        <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
            />
        </svg>
    );
    const ArrowIcon = () => (
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
    );

    return (
        <main ref={sectionRef} className="flex items-center justify-center py-10 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-50 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(156,163,175,0.05)_0%,_transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(156,163,175,0.03)_0%,_transparent_70%)]" />
            </div>

            <section className="relative z-10 w-full mx-auto max-w-[1440px] px-6">
                <div className="flex flex-col lg:grid lg:grid-cols-[55fr_45fr] lg:items-stretch gap-10 lg:gap-16">
                    {/* LEFT: Carousel */}
                    <div className="relative w-full flex lg:h-full min-h-0">
                        <div className="relative w-full h-full min-h-0">
                            {/* The sliding card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="w-full h-full flex min-h-0"
                                >
                                    <motion.div
                                        className="flex flex-col justify-center relative overflow-hidden h-full w-full min-h-0"
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate={isClient && inView ? "visible" : "hidden"}
                                    >
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={event.thumbnailImage}
                                                alt={event.headingLines[0]}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-transparent" />
                                        </div>

                                        <div className="relative z-10 px-6 py-6 lg:px-8 lg:py-8 xl:px-10 xl:py-10">
                                            <motion.div variants={itemVariants}>
                                                <div className="flex items-center gap-3 mb-2 relative">
                                                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-0.5 rounded-full tracking-wider relative overflow-hidden">
                                                        <span className="relative z-10">{event.badgeText}</span>
                                                        <motion.span
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                            animate={{ x: ["-100%", "100%"] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        />
                                                    </span>
                                                    <span className="text-white/70 text-xs font-medium tracking-wider uppercase flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-red-400" />
                                                        Event
                                                    </span>
                                                </div>
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.15] text-white mb-2">
                                                    {renderHeading(event.headingLines[0], event.headingHighlight)} <br />
                                                    <span className="text-white relative inline-block">
                                                        {event.headingLines[1]}
                                                        <motion.span
                                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                                                            initial={{ scaleX: 0 }}
                                                            animate={{ scaleX: 1 }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                        />
                                                    </span>
                                                </h2>
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <motion.p
                                                    className="text-white text-xs sm:text-sm font-semibold tracking-[3px] uppercase mb-3 inline-block border-b-2 border-white pb-1.5"
                                                    whileHover={{ x: 5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {event.subheading}
                                                </motion.p>
                                            </motion.div>
                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-wrap gap-4 mb-4"
                                            >
                                                {event.details.map((d) => (
                                                    <div
                                                        key={d.label}
                                                        className="flex items-start gap-3 group"
                                                    >
                                                        <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 border border-white/10 flex-shrink-0">
                                                            {d.icon === "calendar" ? <IconCalendar /> : <IconGlobe />}
                                                        </div>

                                                        <div>
                                                            <p className="text-[10px] font-semibold text-white/90">
                                                                {d.label}
                                                            </p>
                                                            <p className="text-xs text-white/80">
                                                                {d.value}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>

                                            <Link href={event.ctaHref}>
                                                <div className="relative z-10">
                                                    <motion.button
                                                        variants={itemVariants}
                                                        className="inline-flex items-center justify-center bg-[#078671] text-white font-bold uppercase tracking-wide text-xs px-5 sm:px-7 md:px-8 py-2 rounded-tr-[14px] sm:rounded-tr-[18px] md:rounded-tr-[20px] rounded-bl-[14px] sm:rounded-bl-[18px] md:rounded-bl-[20px] rounded-tl-none rounded-br-none hover:bg-[#067864] transition-all duration-300 shadow-md whitespace-nowrap gap-2 group"
                                                        whileHover={{ x: 5, y: -2 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.6 }}
                                                    >
                                                        <span>{event.ctaText}</span>
                                                        <ArrowIcon />
                                                    </motion.button>
                                                </div>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Carousel arrows */}
                            {total > 1 && (
                                <>
                                    <button
                                        aria-label="Previous event"
                                        onClick={prev}
                                        className="absolute top-1/2 -translate-y-1/2 -left-5 z-30 w-10 h-10 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <svg className="w-4 h-4 text-gray-700 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        aria-label="Next event"
                                        onClick={next}
                                        className="absolute top-1/2 -translate-y-1/2 -right-5 z-30 w-10 h-10 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <svg className="w-4 h-4 text-gray-700 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Pagination dots */}
                            {total > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                                    {EVENTS.map((e, i) => (
                                        <button
                                            key={e.id}
                                            aria-label={`Go to event ${i + 1}`}
                                            onClick={() => goTo(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                                i === slide ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT: fixed UWA recognition panel */}
                    <motion.div
                        className="relative w-full flex-shrink-0 flex flex-col lg:h-full min-h-0"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isClient && inView ? "visible" : "hidden"}
                    >
                        <div className="flex flex-col h-full min-h-0">
                            <motion.div variants={itemVariants}>
                                <motion.p
                                    className="text-[#8c1d32] text-xs sm:text-sm font-semibold tracking-[3px] uppercase mt-0 mb-3 underline underline-offset-4 decoration-gray-400"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {RIGHT_PANEL.eyebrow}
                                </motion.p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="mb-2">
                                <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.15]">
                                    {RIGHT_PANEL.titlePrefix}
                                    <span className="text-red-600 font-serif"> {RIGHT_PANEL.titleHighlight}</span>
                                </h3>
                                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                                    {RIGHT_PANEL.description}
                                </p>
                            </motion.div>

                            <a
                                href={RIGHT_PANEL.imageHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex-1 relative min-h-[220px]"
                            >
                                <div className="relative w-full h-full min-h-[220px]">
                                    <Image
                                        src={RIGHT_PANEL.image}
                                        alt={RIGHT_PANEL.imageAlt}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-3 right-3">
                                        <motion.button
                                            className="inline-flex items-center justify-center bg-[#078671] text-white font-bold uppercase tracking-wide text-xs px-4 sm:px-5 py-1.5 sm:py-2 rounded-tr-[12px] sm:rounded-tr-[14px] rounded-bl-[12px] sm:rounded-bl-[14px] rounded-tl-none rounded-br-none hover:bg-[#067864] transition-all duration-300 shadow-md whitespace-nowrap gap-2 group/btn"
                                            whileHover={{ x: 3, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{RIGHT_PANEL.imageCtaText}</span>
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
                            <p className="mt-1 text-[11px] text-gray-400">{RIGHT_PANEL.credit}</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Eventsection;