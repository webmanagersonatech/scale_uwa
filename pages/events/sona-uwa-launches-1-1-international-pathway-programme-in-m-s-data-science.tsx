import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

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
                className="relative max-w-4xl w-full max-h-[90vh] bg-white  overflow-hidden shadow-2xl"
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
                        <Link href="/" className="text-[#AC1F2D] hover:underline no-underline">
                            Home
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <Link href="/events" className="text-[#AC1F2D] hover:underline no-underline">
                            Events
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            SONA–UWA Launches 1+1 International Pathway Programme in M.S. Data Science
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
        <section className="relative py-12 lg:py-16 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/homeimages/sonauwa.webp')" }}>
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
                            <span className="w-2 h-2 bg-[#AC1F2D] rounded-full" />
                            Event
                        </div>
                        <h1 className="font-serif text-3xl lg:text-5xl text-white font-bold mb-4 leading-tight">
                            SONA–UWA Launches 1+1 International Pathway Programme in{" "}
                            <span className="text-[#AC1F2D]">M.S. Data Science</span>
                        </h1>
                        <p className="text-gray-200 text-base lg:text-lg max-w-[680px] leading-relaxed">
                            In collaboration with the University of West Alabama, USA — held on 3rd July 2026 at
                            Sona College of Technology, Salem.
                        </p>
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
            <h2
                id="event-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Programme Launch
            </h2>

            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                <p>
                    We are delighted to share the successful launch of the{" "}
                    <strong className="text-[#AC1F2D]">
                        SONA–UWA 1+1 International Pathway Programme in MS in Data Science
                    </strong>
                    , held on{" "}
                    <strong className="text-[#AC1F2D]">3rd July 2026</strong> at the Sona Valliappa Auditorium,
                    in collaboration with the{" "}
                    <a
                        href="https://www.uwa.edu"
                        className="text-[#AC1F2D] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        University of West Alabama, USA
                    </a>
                    , at Sona College of Technology, Salem.
                </p>

                <p>
                    This unique Indo-American academic partnership has been designed for Indian students who
                    aspire to earn a U.S. master's degree and build global careers in{" "}
                    <strong className="text-[#AC1F2D]">
                        Data Science, Artificial Intelligence, Machine Learning, Analytics, and Business Intelligence
                    </strong>
                    .
                </p>

                <div className="bg-gray-50 border-l-4 border-[#AC1F2D] p-4 my-4">
                    <p className="text-[#5a5652]">
                        Through this pathway, students will complete{" "}
                        <strong className="text-[#AC1F2D]">Year 1 at SCALE, Bengaluru</strong>, and{" "}
                        <strong className="text-[#AC1F2D]">Year 2 at the University of West Alabama, USA</strong>.
                        The model offers students the advantage of beginning their international academic journey
                        in India, reducing the initial financial burden, and preparing themselves academically,
                        professionally, and personally before progressing to the United States.
                    </p>
                </div>

                <p>
                    <strong className="text-[#AC1F2D]">Mr. Thyagu Valliappa</strong>, Vice Chairman, Sona Institutions,
                    and Founder &amp; Chief Mentor, SCALE, emphasised that{" "}
                    <em className="text-[#AC1F2D]">
                        "at SCALE, our philosophy is 'for the industry, to the industry, and by the industry.'"
                    </em>{" "}
                    In line with this vision, the programme goes beyond academics and supports students through
                    communication training, value-added programmes, career readiness, industry exposure, and
                    U.S. settlement-readiness sessions.
                </p>

                <p>
                    The launch, held at the Sona Valliappa Auditorium, Salem, was graced by the august presence of{" "}
                    <strong className="text-[#AC1F2D]">Dr. Karthikeyan V</strong>, Director, Thiagarajar Polytechnic College;{" "}
                    <strong className="text-[#AC1F2D]">Dr. Kanagaraj</strong>, Principal (i/c), Thiagarajar Polytechnic College;{" "}
                    <strong className="text-[#AC1F2D]">Dr. S.R.R. Senthilkumar</strong>, Principal, Sona College of Technology;{" "}
                    <strong className="text-[#AC1F2D]">Dr. Kadhar Nawaz</strong>, Principal, Sona College of Arts and Science;{" "}
                    <strong className="text-[#AC1F2D]">Dr. M. Venugopal</strong>, Vice President – Operations, Sona Star Innovation Pvt. Ltd., Bangalore;{" "}
                    <strong className="text-[#AC1F2D]">Dr. Akilandeswari</strong>, Dean – Academics, Sona College of Technology;{" "}
                    <strong className="text-[#AC1F2D]">Dr. Sathiyabhama</strong>, Dean – Admissions, Sona College of Technology;{" "}
                    along with Heads of Departments, faculty members, students, and other distinguished members
                    of the Sona academic community.
                </p>

                <div className="bg-gray-50 border-l-4 border-[#AC1F2D] p-4 my-4">
                    <p className="text-[#5a5652]">
                        The launch meet provided a comprehensive overview of the programme structure, fee details,
                        scholarship opportunities, admission process, and partnership possibilities. More importantly,
                        it opened a new pathway for students from Salem and the wider region to pursue global education
                        in one of the most in-demand fields of the future.
                    </p>
                </div>

                <p className="text-lg font-semibold text-[#5a5652]">
                    We look forward to empowering students through this meaningful international pathway and
                    helping them build successful global careers in Data Science and emerging technologies.
                </p>

                <div className="mt-6 pt-4 border-t border-[#e0d6ce]">
                    <p className="text-[#5a5652]">
                        <strong>Learn more:</strong>{" "}
                        <a
                            href="https://www.scaleindia.in/sona-uwa"
                            className="text-[#AC1F2D] hover:underline font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.scaleindia.in/sona-uwa
                        </a>
                    </p>
                </div>
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
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_3_87ffc8fdca.webp&w=1200&q=75",
            alt: "SONA-UWA Event - Grand Inauguration Ceremony"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_18_4c59fcfb7b.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Dignitaries and Chief Guests on Stage"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_21_a89582e196.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Engaged Audience at the Venue"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_20_7903188b8d.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Keynote Speaking Session"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_19_ce3aca44b0.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Expert Panel Discussion"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_6_1dbf99430b.webp&w=1200&q=75",
            alt: "SONA-UWA Event - Group Photo with Attendees"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_11_fb710fb37d.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Closing Ceremony and Felicitation"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_16_e92a77816d.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Networking Session"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_14_59f0133f6d.JPG&w=1200&q=75",
            alt: "SONA-UWA Event - Award Presentation"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fscaleuwa_10_5ed7b8dcca.JPG&w=1920&q=75",
            alt: "SONA-UWA Event - Grand Venue Overview"
        }
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
                <h2
                    id="gallery-title"
                    className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
                >
                    Event Gallery
                </h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
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
                                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// ─── Media Coverage Section ──────────────────────────────────────────────────
function MediaCoverage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

    // Media coverage images - replace with actual media coverage images
    const mediaImages = [
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_5_bd2b5c654c.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - Financial Express Newspaper Feature"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_2_28805ee2ce.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - Business Standard Press Mention"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_1_3a9bc3e8e0.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - Economic Times Online Article"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_4_17172bb12b.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - CNBC TV18 Interview Segment"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_3_dd8a216e47.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - Forbes India Magazine Feature"
        },
        {
            src: "https://scaleindia.in/_next/image?url=https%3A%2F%2Fadmin.scaleindia.in%2Fuploads%2Fmediacoverage_6_a06e31af5a.webp&w=1200&q=75",
            alt: "ScaleIndia Media Coverage - YourStory Startup Coverage"
        }
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
                aria-labelledby="media-title"
            >
                <h2
                    id="media-title"
                    className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
                >
                    Media Coverage
                </h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {mediaImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                            onClick={() => handleImageClick(image.src, image.alt)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <MediaCoverage />
                    </div>
                </div>
            </div>
        </>
    );
}