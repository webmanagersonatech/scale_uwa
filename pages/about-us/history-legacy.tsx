import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Animation variants (matching your page) ─────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Image Popup Modal Component ─────────────────────────────────────────────
interface ImageItem {
    src: string;
    alt: string;
    caption?: string;
}

interface ImagePopupProps {
    isOpen: boolean;
    onClose: () => void;
    images: ImageItem[];
    title: string;
}

function ImagePopup({ isOpen, onClose, images, title }: ImagePopupProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    // Reset state when popup opens with new images
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setImageLoading(true);
            setImageErrors({});
        }
    }, [isOpen, images]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex, images.length]);

    if (!isOpen) return null;

    const nextImage = () => {
        setImageLoading(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setImageLoading(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleImageError = () => {
        setImageErrors(prev => ({ ...prev, [currentIndex]: true }));
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const currentImage = images[currentIndex];
    const hasError = imageErrors[currentIndex];

    return (
        <>
            {/* Backdrop - Darker for better contrast */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
                aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
            >
                <div className="relative max-w-6xl w-full bg-white  overflow-hidden max-h-[90vh] flex flex-col">
                    {/* Close button - Improved styling */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 shadow-lg hover:scale-110"
                        aria-label="Close popup"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Title Bar - Clean red gradient */}
                    <div className="bg-gradient-to-r from-[#AC1F2D] to-[#8a1824] text-white px-6 py-4 flex-shrink-0">
                        <h3 id="popup-title" className="text-xl font-serif font-semibold pr-8">
                            {title}
                        </h3>
                    </div>

                    {/* Image Container - Clean background */}
                    <div className="relative bg-[#f5f5f5] min-h-[400px] flex-grow">
                        {imageLoading && !hasError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5] z-10">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#AC1F2D] border-t-transparent"></div>
                                    <p className="text-gray-600 text-sm font-medium">Loading image...</p>
                                </div>
                            </div>
                        )}

                        {hasError ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5]">
                                <div className="text-center p-6">
                                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Failed to load image</p>
                                    <p className="text-sm text-gray-500">Please check the image URL or try again later</p>
                                </div>
                            </div>
                        ) : (
                            <div className="relative w-full h-[55vh] md:h-[65vh] bg-[#f5f5f5]">
                                <img
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    className="w-full h-full object-contain"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            </div>
                        )}

                        {/* Navigation Buttons - Improved styling */}
                        {images.length > 1 && !hasError && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm hover:scale-110 shadow-lg"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm hover:scale-110 shadow-lg"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Counter - Sleek design */}
                        {images.length > 1 && !hasError && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                                {currentIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    {/* Caption - Clean and minimal */}
                    {currentImage.caption && !hasError && (
                        <div className="px-6 py-4 bg-white border-t border-gray-100 flex-shrink-0">
                            <p className="text-gray-600 text-center text-sm italic leading-relaxed">
                                {currentImage.caption}
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
}

// ─── Eye Icon Button Component for Inline Use ─────────────────────────────────
interface EyeIconButtonProps {
    onClick: () => void;
    imageCount: number;
    label: string;
}

function EyeIconButton({ onClick, imageCount, label }: EyeIconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center gap-1.5 ml-2 align-middle text-gray-500 hover:text-[#AC1F2D] transition-colors duration-200 group/eye"
            aria-label={`View ${imageCount} image(s) for ${label}`}
            title={`View images (${imageCount})`}
        >
            <svg
                className="w-5 h-5 group-hover/eye:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-xs font-medium">{imageCount}</span>
        </button>
    );
}

// ─── Section with Eye Icon (for inline eye icon on headings) ─────────────────
interface SectionWithEyeIconProps {
    title: string;
    children: React.ReactNode;
    images: ImageItem[];
    onImageClick: (title: string, images: ImageItem[]) => void;
}

function SectionWithEyeIcon({ title, children, images, onImageClick }: SectionWithEyeIconProps) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-8 last:mb-0"
        >
            <div className="flex items-center flex-wrap gap-2 mb-2">
                <h3 className="font-serif text-lg font-semibold text-gray-800">
                    {title}
                </h3>
                <EyeIconButton
                    onClick={() => onImageClick(title, images)}
                    imageCount={images.length}
                    label={title}
                />
            </div>
            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                {children}
            </div>
        </motion.section>
    );
}

// ─── Breadcrumb (matching your style) ────────────────────────────────────────
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
                        <Link href="/about" className="text-[#AC1F2D] hover:underline no-underline">
                            About Us
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            History and legacy
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section ──────────────────────────────────────────────────────────
function HeroSection() {
    return (
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none"></div>
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none"></div>
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="lg:max-w-[70%]">

                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            About <span className="text-gray-700">Sona Valliappa Group</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg max-w-[680px] leading-relaxed">
                            Over 100 years of legacy — pioneering India's textile, technology, and educational renaissance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Honoring History Component (no eye icon on main title, as requested) ───
function HonoringHistory({ onImageClick }: { onImageClick: (title: string, images: ImageItem[]) => void }) {
    const images: ImageItem[] = [
        {
            src: "https://sonatowers.com/webfiles/aboutus/mahatma-gandhi.webp",
            alt: "Gandhiji's visit to Karumuttu Thiagarajar Chettiar's home in Madurai, 1938",
            caption: "Gandhiji's historic visit to Madurai where he took the loincloth pledge in 1938 (Historical reenactment)"
        },

    ];

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10 group"
            aria-labelledby="honoring-history-title"
        >
            <h2
                id="honoring-history-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Honoring History: The Sona Group's 100-Year Legacy and Gandhiji's 1938 Pledge
            </h2>
            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                <p>
                    The Sona Group, with over 100 years of heritage, was founded by Karumuttu Thiagarajar Chettiar,
                    a key figure in early 20th-century textiles. In 1938, during Gandhiji's visit to Chettiar's home
                    in Madurai, he vowed to wear only his loincloth after witnessing the plight of impoverished workers.
                </p>
                <button
                    onClick={() => onImageClick("Historical Images", images)}
                    className="inline-flex items-center gap-2 mt-2 text-[#AC1F2D] hover:text-[#8a1824] transition-colors duration-200 font-medium"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Historical Gallery ({images.length} images)
                </button>
            </div>
        </motion.section>
    );
}

// ─── Bengaluru: The Silicon Oasis Born from Vision ───────────────────────────
function BengaluruGenesis({ onImageClick }: { onImageClick: (title: string, images: ImageItem[]) => void }) {
    // Images for "The Genesis: Valliappa Software Tech Park"
    const genesisImages: ImageItem[] = [
        {
            src: "https://sonatowers.com/webfiles/projects/completed/sona-towers/sona-towers.webp",
            alt: "Modern",
            caption: "Modern technology hub inspired by Sona Towers, Bengaluru"
        },
        {
            src: "https://sonatowers.com/webfiles/projects/completed/sona-towers/sona-towers-1.webp",
            alt: "Office building with modern architecture",
            caption: ""
        },
        {
            src: "https://sonatowers.com/webfiles/projects/completed/sona-towers/sona-towers-2.webp",
            alt: "Corporate office building",
            caption: ""
        }
    ];

    // Images for "The Catalyst: Attracting Global Tech Giants"
    const catalystImages: ImageItem[] = [
        {
            src: "https://sonatowers.com/webfiles/aboutus/sattelite-1.webp",
            alt: "Historic meeting at technology park",
            caption: "In 1984, Mr. Sam Pitroda, an internationally respected telecom inventor, entrepreneur, development thinker, and policymaker, is standing to the left of Sri C. Valliappa, Chairman of Sona Institutions in the photo taken at Sona Towers, Bangalore."
        },

    ];

    // Images for "A Leap into the Future: India's First Satellite Uplink"
    const satelliteImages: ImageItem[] = [
        {
            src: "https://sonatowers.com/webfiles/aboutus/sattelite-2.webp",
            alt: "Satellite dish installation ceremony",
            caption: "In 1984, the inauguration of Texas Instruments at Sona Towers was graced by the then Honorable Chief Minister, Sri Ramakrishna Hegde, as the chief guest. C. Valliappa, the then IT ambassador, and other dignitaries played a key role in fostering a vibrant IT community by connecting businesses."
        },

    ];

    return (
        <>
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
                aria-labelledby="bengaluru-title"
            >
                <h2
                    id="bengaluru-title"
                    className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
                >
                    Bengaluru: The Silicon Oasis Born from Vision
                </h2>

                <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                    <p>
                        In the annals of India's technological renaissance, one name stands out as a pioneer — The Sona Group.
                        Under the visionary leadership of Chairman Shri C. Valliappa, this conglomerate sowed the seeds
                        of what would become India's IT capital.
                    </p>
                </div>
            </motion.section>

            {/* The Genesis Subsection with Eye Icon */}
            <SectionWithEyeIcon
                title="The Genesis: Valliappa Software Tech Park"
                images={genesisImages}
                onImageClick={onImageClick}
            >
                <p>
                    In the 1980s, when India was still finding its footing in the global tech arena, the Sona Group made
                    a bold move. They established the Valliappa Software Tech Park (VSTP) on Millers Road, Bengaluru —
                    a decision that would alter the course of India's technological trajectory.
                </p>
                <p>
                    Now known as <strong className="text-[#AC1F2D]">'Sona Towers'</strong>, this architectural marvel became the epicenter
                    of a digital revolution. It wasn't just a building; it was a beacon, attracting some of the
                    world's most innovative tech giants to Indian shores.
                </p>
            </SectionWithEyeIcon>

            {/* The Catalyst Subsection with Eye Icon */}
            <SectionWithEyeIcon
                title="The Catalyst: Attracting Global Tech Giants"
                images={catalystImages}
                onImageClick={onImageClick}
            >
                <p>
                    Texas Instruments, a name synonymous with cutting-edge technology, became the first international
                    software giant to recognize the potential of Bengaluru. They set up their software design centre
                    at VSTP, setting off a chain reaction that would transform the city forever. Soon, the corridors
                    of Sona Towers echoed with the footsteps of more global players. Verifone, Oracle, and Cisco —
                    each a titan in its own right — followed suit, establishing their presence in this burgeoning
                    tech hub. The IT boom in Bengaluru had begun, and there was no looking back.
                </p>
            </SectionWithEyeIcon>

            {/* A Leap into the Future Subsection with Eye Icon */}
            <SectionWithEyeIcon
                title="A Leap into the Future: India's First Satellite Uplink"
                images={satelliteImages}
                onImageClick={onImageClick}
            >
                <p>
                    But the Sona Group's vision extended beyond terrestrial boundaries. In 1985, VSTP achieved another
                    milestone by installing India's first satellite dish with up-linking facilities. This technological
                    marvel, coupled with VSNL's earth station housed within the complex, positioned Bengaluru at the
                    forefront of India's telecommunications revolution.
                </p>
            </SectionWithEyeIcon>

            {/* The Legacy Section (no eye icon) */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
            >
                <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                    <h3 className="font-serif text-lg font-semibold text-gray-800 mt-4 mb-2">
                        The Legacy: Bengaluru as India's Silicon Valley
                    </h3>
                    <p>
                        Today, Bengaluru stands tall as the Silicon Valley of India, home to every major IT and electronic
                        company imaginable. This transformation from a quaint garden city to a global tech hub can be
                        traced back to that fateful decision by the Sona Group in the 1980s.
                    </p>
                    <p>
                        The foresight of Shri C. Valliappa and the Sona Group created a ripple effect, attracting talent,
                        fostering innovation, and catapulting Bengaluru onto the world stage. Their legacy lives on in
                        every line of code written, every startup launched, and every technological breakthrough achieved
                        in this vibrant city.
                    </p>
                    <p className="italic text-gray-700 pt-2">
                        As we marvel at Bengaluru's gleaming tech parks and bustling innovation centers, let us remember
                        the pioneers who dared to dream. The Sona Group's initiative didn't just construct a building;
                        it laid the foundation for India's technological future.
                    </p>
                </div>
            </motion.section>
        </>
    );
}

// ─── Main Page Component ────────────────────────────────────────────────────
export default function SonaValliappaAboutPage() {
    const [popupState, setPopupState] = useState<{
        isOpen: boolean;
        title: string;
        images: ImageItem[];
    }>({
        isOpen: false,
        title: "",
        images: [],
    });

    const handleImageClick = (title: string, images: ImageItem[]) => {
        setPopupState({
            isOpen: true,
            title,
            images,
        });
        // Prevent body scroll when popup is open
        document.body.style.overflow = 'hidden';
    };

    const handleClosePopup = () => {
        setPopupState({
            isOpen: false,
            title: "",
            images: [],
        });
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <HonoringHistory onImageClick={handleImageClick} />
                        <BengaluruGenesis onImageClick={handleImageClick} />
                    </div>
                </div>
            </div>

            {/* Image Popup Modal */}
            <ImagePopup
                isOpen={popupState.isOpen}
                onClose={handleClosePopup}
                images={popupState.images}
                title={popupState.title}
            />
        </>
    );
}