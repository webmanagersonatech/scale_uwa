import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="bg-[#f8f5f2] border-b border-[#e0d6ce] py-2.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ol className="flex items-center gap-1.5 list-none text-[13px] text-[#5a5652] flex-wrap">
                    <li className="flex items-center">
                        <Link href="/" className="text-[#AC1F2D] hover:underline no-underline">Home</Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>

                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">UWA</span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">Campus Life</span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
    return (
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none" />
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none" />
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none" />
            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="lg:max-w-[55%]">
                    <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 text-gray-700 text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
                        <span className="w-2 h-2 bg-gray-600 rounded-full" />
                        University of West Alabama
                    </div>
                    <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                        Campus Life: <span className="text-gray-700">Connections Beyond the Classroom</span>
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                        Your education includes so much more than going to class. At UWA, there are countless
                        opportunities to be a part of something great — from service organizations and Greek life
                        to clubs and organizations. The more involved you become, the richer and more rewarding
                        your college experience will be.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Section Row types ────────────────────────────────────────────────────────
type SectionRowProps = {
    imageSrc: string;
    imageAlt: string;
    /** "left" = image left, text right | "right" = text left, image right */
    imagePosition: "left" | "right";
    /** which corner gets the big rounded clip */
    roundedCorner: "top-right" | "bottom-left";
    title: string;
    body: React.ReactNode;
    ctaLabel: string;
    ctaHref: string;
};

function SectionRow({
    imageSrc,
    imageAlt,
    imagePosition,
    roundedCorner,
    title,
    body,
    ctaLabel,
    ctaHref,
}: SectionRowProps) {
    // Updated corner class to match the desired shape: top-right and bottom-left rounded
    const cornerClass =
        roundedCorner === "top-right"
            ? "rounded-tr-[80px] rounded-bl-[80px] rounded-tl-none rounded-br-none"  // Both top-right AND bottom-left
            : "rounded-bl-[80px] rounded-tr-[80px] rounded-tl-none rounded-br-none";  // Both as well

    const imageEl = (
        <div className="w-full lg:w-1/2">
            <div className={`overflow-hidden ${cornerClass} w-full aspect-[4/2.5]`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );

    const textEl = (
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
            <h2 className="font-serif text-2xl lg:text-3xl text-gray-900 font-bold leading-tight">
                {title}
            </h2>
            <div className="text-[#5a5652] text-sm lg:text-base leading-relaxed space-y-3">
                {body}
            </div>
            <div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                        bg-[#078671]
                        text-white
                        font-bold
                        uppercase
                        tracking-wide
                        text-xs sm:text-sm md:text-base lg:text-lg
                        px-6 sm:px-8 md:px-10 lg:px-12
                        py-2 sm:py-2
                        rounded-tr-[16px] sm:rounded-tr-[20px] md:rounded-tr-[24px]
                        rounded-bl-[16px] sm:rounded-bl-[20px] md:rounded-bl-[24px]
                        rounded-tl-none
                        rounded-br-none
                        w-auto
                        inline-flex
                        items-center
                        justify-center
                        hover:bg-[#067864]
                        transition-all
                        duration-300
                        shadow-md
                    "
                >
                    {ctaLabel}
                </motion.button>
            </div>
        </div>
    );

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20"
        >
            {imagePosition === "left" ? (
                <>{imageEl}{textEl}</>
            ) : (
                <>{textEl}{imageEl}</>
            )}
        </motion.div>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function CampusLifePage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-14">
                <div className="max-w-[1440px] mx-auto px-6">

                    <SectionRow
                        imageSrc="https://www.uwa.edu/app/uploads/2023/10/StudentInvolvement.jpg"
                        imageAlt="Students gathering on campus"
                        imagePosition="left"
                        roundedCorner="top-right"
                        title="Student Involvement"
                        body={
                            <p>
                                At the University of West Alabama, student clubs and organizations provide
                                opportunities for students of every interest. A college education starts in
                                the classroom, but the opportunities you seek out in your spare time can
                                advance your academics, serve as a means for connecting with other students,
                                provide leadership development and opportunities, encourage civic engagement,
                                and enhance your college experience.
                            </p>
                        }
                        ctaLabel="Student Involvement"
                        ctaHref="/campus-life/student-involvement"
                    />

                    <SectionRow
                        imageSrc="https://www.uwa.edu/app/uploads/2023/09/Campus-Activities_1235_WEB-768x512.jpg"
                        imageAlt="Students enjoying campus trails and outdoors"
                        imagePosition="right"
                        roundedCorner="bottom-left"
                        title="Student Life"
                        body={
                            <p>
                                Student life at UWA provides meaningful experiences through programs and
                                services for our campus community. From group fitness classes to outdoor
                                adventures and aquatics, and from intramural sports to open recreation —
                                there's something for you no matter your level of ability or expertise.
                            </p>
                        }
                        ctaLabel="Student Life"
                        ctaHref="/campus-life/student-life"
                    />

                    <SectionRow
                        imageSrc="https://www.uwa.edu/app/uploads/2025/03/Faulkner-Wooley-Guerrilla-Theatre-event-an-evening-of-scene-study-monologues-musical-theatre-performances-poetry-and-more-768x512.jpg"
                        imageAlt="Student performing on stage"
                        imagePosition="left"
                        roundedCorner="top-right"
                        title="Performing Arts"
                        body={
                            <p>
                                At UWA, students can explore their passion for the performing arts through
                                award-winning bands, choir, and theatre programs. Whether performing on stage,
                                singing in concert, or contributing behind the scenes, students gain valuable
                                leadership, teamwork, and creative experience while enriching campus life.
                                These opportunities help students build confidence, form lasting connections,
                                and make the most of their college experience.
                            </p>
                        }
                        ctaLabel="Performing Arts"
                        ctaHref="/campus-life/performing-arts"
                    />

                </div>
            </div>
        </>
    );
}