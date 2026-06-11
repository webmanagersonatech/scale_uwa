import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation variants (matching your page) ─────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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

// ─── Curved Image Component with fixed height ─────────────────────────────────
interface CurvedImageProps {
    src: string;
    alt: string;
    className?: string;
}

function CurvedImage({ src, alt, className = "" }: CurvedImageProps) {
    return (
        <div 
            className={`overflow-hidden border-t-[6px] border-l-[6px] border-[#b3202d] ${className}`}
            style={{
                borderRadius: "0 180px 0 180px",
                height: "280px", // Fixed height for all images
            }}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

// ─── Honoring History Component (with image integrated) ───────────────────
function HonoringHistory() {
    const imageSrc = "https://sonatowers.com/webfiles/aboutus/mahatma-gandhi.webp";
    const imageAlt = "Gandhiji's visit to Karumuttu Thiagarajar Chettiar's home in Madurai, 1938";

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10 group"
            aria-labelledby="honoring-history-title"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Text Content */}
                <div className="flex-1">
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
                        <p>
                            This pledge became a turning point in India's freedom movement, symbolizing the power of simple
                            living and high thinking. The Sona Group continues to honor this legacy through its commitment
                            to education, technology, and social upliftment.
                        </p>
                    </div>
                </div>

                {/* Curved Image */}
                <div className="w-full lg:w-1/2">
                    <CurvedImage src={imageSrc} alt={imageAlt} />
                </div>
            </div>
        </motion.section>
    );
}

// ─── Bengaluru: The Silicon Oasis Born from Vision (with integrated images) ──
function BengaluruGenesis() {
    // Image for Genesis section
    const genesisImage = {
        src: "https://sonatowers.com/webfiles/projects/completed/sona-towers/sona-towers.webp",
        alt: "Sona Towers, Bengaluru - Modern technology hub"
    };

    // Image for Catalyst section
    const catalystImage = {
        src: "https://sonatowers.com/webfiles/aboutus/sattelite-1.webp",
        alt: "Historic meeting at technology park with C. Valliappa and Sam Pitroda"
    };

    // Image for Satellite section
    const satelliteImage = {
        src: "https://sonatowers.com/webfiles/aboutus/sattelite-2.webp",
        alt: "Satellite dish installation ceremony at Sona Towers"
    };

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

            {/* The Genesis Section with Image */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    <div className="flex-1 order-2 lg:order-1">
                        <h3 className="font-serif text-lg font-semibold text-gray-800 mb-3">
                            The Genesis: Valliappa Software Tech Park
                        </h3>
                        <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
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
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 order-1 lg:order-2">
                        <CurvedImage src={genesisImage.src} alt={genesisImage.alt} />
                    </div>
                </div>
            </motion.section>

            {/* The Catalyst Section with Image */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    <div className="w-full lg:w-2/5">
                        <CurvedImage src={catalystImage.src} alt={catalystImage.alt} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-serif text-lg font-semibold text-gray-800 mb-3">
                            The Catalyst: Attracting Global Tech Giants
                        </h3>
                        <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                            <p>
                                Texas Instruments, a name synonymous with cutting-edge technology, became the first international
                                software giant to recognize the potential of Bengaluru. They set up their software design centre
                                at VSTP, setting off a chain reaction that would transform the city forever.
                            </p>
                            <p>
                                Soon, the corridors of Sona Towers echoed with the footsteps of more global players. Verifone, Oracle, and Cisco —
                                each a titan in its own right — followed suit, establishing their presence in this burgeoning
                                tech hub. The IT boom in Bengaluru had begun, and there was no looking back.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* A Leap into the Future Section with Image */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="mb-10"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    <div className="flex-1 order-2 lg:order-1">
                        <h3 className="font-serif text-lg font-semibold text-gray-800 mb-3">
                            A Leap into the Future: India's First Satellite Uplink
                        </h3>
                        <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                            <p>
                                But the Sona Group's vision extended beyond terrestrial boundaries. In 1985, VSTP achieved another
                                milestone by installing India's first satellite dish with up-linking facilities.
                            </p>
                            <p>
                                This technological marvel, coupled with VSNL's earth station housed within the complex, positioned Bengaluru at the
                                forefront of India's telecommunications revolution.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 order-1 lg:order-2">
                        <CurvedImage src={satelliteImage.src} alt={satelliteImage.alt} />
                    </div>
                </div>
            </motion.section>

            {/* The Legacy Section */}
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
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <HonoringHistory />
                        <BengaluruGenesis />
                    </div>
                </div>
            </div>
        </>
    );
}