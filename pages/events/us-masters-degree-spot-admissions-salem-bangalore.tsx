import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BASE_PATH } from "../../utils/config";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const CalendarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const GraduationCapIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
);

const FlagUSAIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
);

const BuildingIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const HourglassIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ClipboardIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

// ─── Modal Component ───────────────────────────────────────────────────────
function Modal({
    isOpen,
    onClose,
    imageSrc,
    imageAlt
}: {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}) {
    if (!isOpen) return null;

    // Close modal on backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white overflow-hidden shadow-2xl"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image container */}
                <div className="relative w-full h-[80vh]">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-contain"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="bg-[#f8f5f2] border-b border-[#e0d6ce] py-2.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ol className="flex items-center gap-1.5 list-none text-[13px] text-[#5a5652] flex-wrap">
                    <li className="flex items-center">
                        <Link href="/" className="text-[#334155] hover:underline no-underline">
                            Home
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <Link href="/events" className="text-[#334155] hover:underline no-underline">
                            Events
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            U.S. Master's Degree Spot Admissions – Salem & Bangalore
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
    return (
        <section
            className="relative py-12 lg:py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${BASE_PATH}/event/salem-banglore.webp)`,
            }}
        >
            {/* Black Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none" />

            {/* Decorative circles - keeping them but making them subtle */}
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="lg:max-w-[70%]">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
                            <span className="w-2 h-2 bg-[#ffe588] rounded-full" />
                            Spot Admissions Open
                        </div>

                        <h1 className="font-serif text-3xl lg:text-5xl text-white font-bold mb-4 leading-tight">
                            U.S. Master's Degree Spot Admissions –{" "}
                            <span className="text-[#ffe588]">Salem & Bangalore</span>
                        </h1>

                        <p className="text-gray-200 text-base lg:text-lg max-w-5xl leading-relaxed mb-6">
                            Meet and connect in person with faculty from the University of West Alabama, and get your
                            questions about admissions, curriculum, and career pathways answered directly. Choose the
                            session nearest you.
                        </p>

                        {/* Event date & location badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-2 bg-[#334155] text-white text-sm font-semibold py-2 px-4 rounded-full">
                                <CalendarIcon className="w-4 h-4" />
                                Salem — 6th October 2026
                            </div>
                            <div className="inline-flex items-center gap-2 bg-[#334155] text-white text-sm font-semibold py-2 px-4 rounded-full">
                                <CalendarIcon className="w-4 h-4" />
                                Bangalore — 8th October 2026
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


// ─── Event Content ──────────────────────────────────────────────────────────
function EventContent() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby="event-title"
        >
            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                <p>
                    We are delighted to announce that{" "}
                    <strong className="text-[#334155]">
                        U.S. Master's Degree Spot Admissions
                    </strong>{" "}
                    are now open for{" "}
                    <strong className="text-[#334155]">Salem & Bangalore</strong>! This is your
                    opportunity to secure admission to the{" "}
                    <strong className="text-[#334155]">
                        MS in Data Science (STEM) — International 1+1 Pathway
                    </strong>
                    , offered in collaboration with the{" "}
                    <a
                        href="https://www.uwa.edu"
                        className="text-[#334155] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        University of West Alabama, USA
                    </a>
                    .
                </p>

                {/* Event Details */}
                <div className="bg-gray-50 border-l-4 border-[#334155] p-4 my-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
                        {/* Salem */}
                        <div className="lg:pr-8">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPinIcon className="w-5 h-5 text-[#334155]" />
                                <strong className="text-[#334155] text-base">Salem</strong>
                            </div>
                            <div className="flex items-center gap-2 text-[#5a5652] mb-1">
                                <CalendarIcon className="w-4 h-4 text-[#334155] flex-shrink-0" />
                                <span>
                                    <strong className="text-[#334155]">Spot Registrations Open On:</strong>{" "}
                                    6th October 2026
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[#5a5652] mb-1">
                                <ClockIcon className="w-4 h-4 text-[#334155] flex-shrink-0" />
                                <span>
                                    <strong className="text-[#334155]">Time:</strong> 10:00 AM
                                </span>
                            </div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=TPT+Auditorium%2C+Sona+College%2C+Salem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-2 text-[#5a5652] cursor-pointer 
               rounded-lg px-2 py-1.5 -mx-2
                transition-all duration-200"
                            >
                                <MapPinIcon
                                    className="w-4 h-4 text-[#334155] flex-shrink-0 mt-1
                   group-hover:scale-110 transition-transform duration-200"
                                />

                                <span className="group-hover:underline group-hover:text-[#334155] transition-colors">
                                    <strong className="text-[#334155]">Venue:</strong>{" "}
                                    TPT Auditorium, Sona College, Salem
                                </span>
                            </a>
                        </div>
                        {/* Bengaluru */}
                        <div className="lg:border-l lg:border-gray-300 lg:pl-8">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Sona+Towers%2C+71+Millers+Road%2C+Bengaluru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 mb-2 w-fit cursor-pointer rounded-lg px-2 py-1 -mx-2 hover:bg-[#334155]/5 transition-all duration-200"
                            >
                                <MapPinIcon className="w-5 h-5 text-[#334155] group-hover:scale-110 transition-transform duration-200" />
                                <strong className="text-[#334155] text-base group-hover:underline">
                                    Bengaluru
                                </strong>
                            </a>

                            <div className="flex items-center gap-2 text-[#5a5652] mb-1">
                                <CalendarIcon className="w-4 h-4 text-[#334155] flex-shrink-0" />
                                <span>
                                    <strong className="text-[#334155]">Spot Registrations Open On:</strong>{" "}
                                    8th October 2026
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-[#5a5652] mb-1">
                                <ClockIcon className="w-4 h-4 text-[#334155] flex-shrink-0" />
                                <span>
                                    <strong className="text-[#334155]">Time:</strong> 10:00 AM
                                </span>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Sona+Towers%2C+71+Millers+Road%2C+Bengaluru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-2 text-[#5a5652] cursor-pointer rounded-lg px-2 py-1.5 -mx-2  transition-all duration-200"
                            >
                                <MapPinIcon className="w-4 h-4 text-[#334155] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />

                                <span className="group-hover:text-[#334155] transition-colors">
                                    <strong className="text-[#334155]">Venue:</strong>{" "}
                                    <span className="group-hover:underline">
                                        Sona Towers, 71 Millers Road, Bengaluru
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* About the Program */}
                <h2 className="font-serif text-xl text-[#334155] font-bold mt-6 mb-3">
                    About the Program
                </h2>
                <p>
                    The MS in Data Science at the University of West Alabama offers Indian students a direct pathway
                    to a U.S. postgraduate degree, backed by the credibility and legacy of the Sona Valliappa Group
                    — a name trusted in education for over a century.
                </p>
                <p>
                    This is a rare opportunity to explore studying in the United States without navigating the process
                    alone — with dedicated international admissions support and faculty access, now across two cities:
                    Salem and Bengaluru.
                </p>

                {/* Meet the Faculty */}
                <h2 className="font-serif text-xl text-[#334155] font-bold mt-6 mb-3">
                    Meet the Faculty
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4  shadow-sm">
                        <p className="font-bold text-[#334155]">Dr. Mark Davis</p>
                        <p className="text-sm">Dean of International Programs, The University of West Alabama, USA</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4  shadow-sm">
                        <p className="font-bold text-[#334155]">Dr. Akali Fulmer</p>
                        <p className="text-sm">International Admissions & Recruitment Advisor, The University of West Alabama, USA</p>
                    </div>
                </div>
                <p className="mt-2 text-sm italic">
                    Both faculty members will be present at each session.
                </p>

                {/* Why Attend */}
                <h2 className="font-serif text-xl text-[#334155] font-bold mt-6 mb-3">
                    Why Attend
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 list-none">
                    <li className="flex items-start gap-2">
                        <GraduationCapIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>Direct interaction with UWA faculty and admissions leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <FlagUSAIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>Learn about a U.S. Master's pathway in a high-demand field</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <BuildingIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>Backed by the trusted Sona Valliappa Group legacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <HourglassIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>Limited to 25 seats per city — spot registrations only</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <ClipboardIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>On-the-spot registration and guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <MapPinIcon className="w-5 h-5 text-[#334155] flex-shrink-0 mt-0.5" />
                        <span>Two convenient locations: Salem and Bengaluru</span>
                    </li>
                </ul>



                {/* Registration */}
                <h2 className="font-serif text-xl text-[#334155] font-bold mt-6 mb-3">
                    Registration
                </h2>


                {/* CTA - Register Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9EQeIuzXSFcHb3odQnNs3gDq0uFp4caul0BwtGv4rv-j00Q/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-[#334155] hover:text-[#1e293b] font-semibold py-3 rounded-full transition-colors duration-200"
                    >
                        Register — Salem, 6th Oct
                        <ArrowRightIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSePssBgDNCpld6-jcuCzY3UazgzQoqmcaGjrhl_5V4P5vahkA/viewform"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 text-[#334155] hover:text-[#1e293b] font-semibold py-3 px-8 rounded-full transition-colors duration-200"
                    >
                        Register — Bengaluru, 8th Oct
                        <ArrowRightIcon className="w-5 h-5" />
                    </a>
                </div>

                {/* Contact Us */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-xl text-[#334155] font-bold mb-3">
                            Contact Us
                        </h2>

                        <p className="flex items-center gap-2 flex-wrap text-base">
                            <PhoneIcon className="w-4 h-4 text-[#334155]" />
                            <a
                                href="tel:+919489725499"
                                className="text-[#334155] hover:underline"
                            >
                                +91 94897 25499
                            </a>
                            <span>|</span>
                            <a
                                href="tel:+919187698639"
                                className="text-[#334155] hover:underline"
                            >
                                +91 91876 98639
                            </a>
                        </p>
                    </div>

                    {/* Organized By */}
                    <div>
                        <p className="text-base">
                            <strong className="text-xl text-[#334155] block mb-1 font-bold">
                                Organized by
                            </strong>
                            Sona Star Innovation Pvt Ltd
                            <br />
                            × SCALE × Sona College of Technology
                        </p>
                    </div>

                    {/* In Partnership With */}
                    <div>
                        <p className="text-base">
                            <strong className="text-xl text-[#334155] block mb-1 font-bold">
                                In Partnership With
                            </strong>
                            The University of West Alabama
                        </p>
                    </div>

                </div>
                <p className="text-sm font-semibold text-[#334155] mt-2">
                    Learning is a Celebration!
                </p>
            </div>
        </motion.section>
    );
}

// ─── Image Gallery Section ──────────────────────────────────────────────────
function ImageGallery() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

    const images = [
        {
            src: `${BASE_PATH}/event/salemposter.webp`,
            alt: "SONA-UWA Event - Dignitaries and Chief Guests on Stage"
        },
        {
            src: `${BASE_PATH}/event/bangloreposter.webp`,
            alt: "SONA-UWA Event - Grand Inauguration Ceremony"
        },

    ];

    const handleImageClick = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
        setModalOpen(true);
    };

    return (
        <>
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
                aria-labelledby="gallery-title"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                            onClick={() => handleImageClick(image.src, image.alt)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            {/* Click to expand icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Modal */}
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                imageSrc={selectedImage.src}
                imageAlt={selectedImage.alt}
            />
        </>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function EventPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <EventContent />
                        <ImageGallery />
                    </div>
                </div>
            </div>
        </>
    );
}