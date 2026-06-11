import { motion } from "framer-motion";
import Link from "next/link";
import CtaSection from "../../components/CtaComponent";
// ─── Animation variants (matching your page) ─────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            UWA
                        </span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Mission & Vision
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section (matching your page's hero style) ─────────────────────────
function HeroSection() {
    return (
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none"></div>
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none"></div>
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="lg:max-w-[55%]">
                        <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 text-gray-700 text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
                            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                            University of West Alabama
                        </div>
                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            Mission & <span className="text-gray-700">Vision</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                            Enriching lives through education, service, and outreach — shaping leaders for West Alabama and beyond.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
}

// ─── Mission Component ──────────────────────────────────────────────────────
function OurMission() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby="mission-title"
        >
            <h2
                id="mission-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Our Mission
            </h2>

            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                <p>
                    The University of West Alabama is a state-supported, coeducational institution
                    of higher learning governed by a Board of Trustees appointed by the Governor.
                    As a regional institution, the University's foremost commitment is to meeting
                    the educational needs of the State and particularly of the West Alabama area.
                    Valuing a diverse student enrollment, though, also welcomes students from
                    throughout the United States and from other countries.
                </p>

                <p>
                    The primary mission of the University is to <strong className="text-[#AC1F2D]">enrich lives through education,
                        service and outreach</strong> by providing opportunities for students to pursue a quality
                    education through associate, baccalaureate, master's, education specialist and
                    doctoral degrees in liberal arts, natural sciences and mathematics, nursing,
                    technology, business and education. Importance is placed on providing opportunities
                    within the curricula for the development of enhanced skills in critical thinking,
                    communication, leadership and computer literacy. The University also seeks to
                    provide students with opportunities for growth beyond the classroom through a
                    wide range of extracurricular activities, programs and services and through the
                    maintenance of an environment of cultural and intellectual diversity.
                </p>

                <p>
                    Through the total educational experience that it provides and through its
                    encouragement of the free exchange of ideas among faculty, administration and
                    students, the University attempts to assist its students in developing the
                    important qualities of independent thinking and respect for the ideas of others
                    and in building firm foundations of personal integrity and character in order
                    to realize their quests for a philosophy of life and for self-fulfillment.
                </p>

                <p>
                    At the University of West Alabama, the emphasis is on the traditional learner,
                    but the institution is also committed to furthering the concept of lifelong
                    learning and serving the non-traditional student. It considers among its clientele
                    are high schools, businesses and industries, governmental agencies and professional
                    workers. In serving these diverse sectors, the institution employs not only
                    traditional means of delivery, but also seeks to expand its use of innovative
                    technologies, including distance learning and to network with other educational
                    institutions and agencies in order to more comprehensively address the needs
                    of its region.
                </p>

                <p>
                    In fulfilling its mission, the University seeks to employ a vibrant, talented
                    and diverse faculty. In the recruitment and retention of this faculty, as with
                    all members of the University community, the institution, consistent with its
                    academic heritage, maintains an openness to all qualified persons.
                </p>

                <p>
                    Excellence in teaching and advising is paramount to the faculty, but the
                    members are also committed to providing leadership and fostering positive
                    growth throughout West Alabama through research and public service, with
                    primary emphasis on that which meets the educational, social, cultural and
                    economic needs of the region.
                </p>
            </div>


        </motion.section>
    );
}

// ─── Vision Component ───────────────────────────────────────────────────────
function OurVision() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby="vision-title"
        >
            <h2
                id="vision-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Our Vision
            </h2>

            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                <p>
                    To offer quality education and effective services while establishing a model for leadership in our region and beyond.
                </p>


            </div>


        </motion.section>
    );
}



// ─── Main Page Component ────────────────────────────────────────────────────
export default function MissionVisionPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    {/* Main Content - Centered layout (no sidebar for this page) */}
                    <div className="mx-auto">
                        <OurMission />
                        <OurVision />
                        <CtaSection/>
                    </div>
                </div>
            </div>
        </>
    );
}