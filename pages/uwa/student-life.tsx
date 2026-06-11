import { motion } from "framer-motion";
import Link from "next/link";
import CtaSection from "../../components/CtaComponent";
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
                        <span className="text-[#5a5652] font-medium" aria-current="page">Student Life</span>
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

                        Student <span className="text-gray-700">Life</span>
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg  leading-relaxed">
                        Student Life provides meaningful experiences through programs and services to our campus
                        community. From group fitness classes and outdoor adventures and aquatics to intramural
                        sports, there's something for you no matter your level of ability or expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Activity Card ────────────────────────────────────────────────────────────
type ActivityCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    href: string;
    description: string;
};

function ActivityCard({ imageSrc, imageAlt, title, href, description }: ActivityCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
        >
            <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="
      w-full 
      h-full 
      object-cover
      rounded-tr-[16px] sm:rounded-tr-[20px] md:rounded-tr-[24px]
      rounded-bl-[16px] sm:rounded-bl-[20px] md:rounded-bl-[24px]
      rounded-tl-none
      rounded-br-none
    "
                />
            </div>
            <div>
                <div
                    // href={href}
                    className="font-serif text-base font-bold text-[#AC1F2D] hover:underline leading-snug"
                >
                    {title}
                </div>
                <p className="text-[#5a5652] text-sm leading-relaxed mt-1">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

// ─── Activities Grid ──────────────────────────────────────────────────────────
function ActivitiesGrid() {
    const activities: ActivityCardProps[] = [
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/09/Fitness-Center_0905_WEB-768x512.jpg",
            imageAlt: "Students working out at UWA Fitness Center",
            title: "UWA Fitness Center",
            href: "/campus-life/student-life/fitness-center",
            description:
                "Whether working out on your own or as part of a group, UWA Fitness Center has a fit for you. From group fitness and aquatic classes to free weights, cardio, and more, this is the place to push yourself.",
        },
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/10/Intramurals-768x466.jpg",
            imageAlt: "Students competing in intramural sports",
            title: "Intramurals",
            href: "/campus-life/student-life/intramurals",
            description:
                "UWA Intramurals offer students, faculty, and staff the chance to compete and have fun in a range of sports, tournaments, events, and more. Everyone is welcome regardless of skill level — it's a fun-first activity!",
        },
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/10/OutdoorRecreation-scaled-e1698698914382-768x615.jpg",
            imageAlt: "Students kayaking on a lake near campus",
            title: "Outdoor Recreation",
            href: "/campus-life/student-life/outdoor-recreation",
            description:
                "Livingston is close to some of the state's most beautiful parks and outdoor attractions. Hike the beautiful Sumter County Nature Trails and raft on the Sucarnooches River and Lake LU, right on the UWA campus, and much more.",
        },
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/09/Cinema_WEB.jpg",
            imageAlt: "University Cinema building exterior",
            title: "University Cinema",
            href: "/campus-life/student-life/university-cinema",
            description:
                "Our 90-seat cinema is owned by UWA and staffed by our students. Located about three blocks from campus, it's a public theater open to anyone, offering our Livingston community and our students a great experience.",
        },
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/06/NP_6057-768x512.jpg",
            imageAlt: "UWA cheerleaders at a game",
            title: "Cheerleading and Mascot",
            href: "/campus-life/student-life/cheerleading",
            description:
                "UWA Cheerleading squad members support UWA Athletics at appearances for the University and the Livingston community. They promote spirit at pre-game pep rallies, Tiger football and basketball games and much more!",
        },
        {
            imageSrc: "https://www.uwa.edu/app/uploads/2023/06/NP_1749-768x512.jpg",
            imageAlt: "Students at a campus event",
            title: "Student Event Announcements",
            href: "/campus-life/student-life/event-announcements",
            description:
                "The Office of Student Involvement and Communications will accept requests for announcements from registered clubs and organizations and residence halls. Campus departments may also submit requests for consideration, as space permits. If you have an event or post-event pictures you want to share, this is the place to do it.",
        },
    ];

    return (
        <section className="mb-12" aria-label="Student life activities">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {activities.map((activity) => (
                    <ActivityCard key={activity.title} {...activity} />
                ))}
            </div>
        </section>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function StudentLifePage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto px-6">
                    <ActivitiesGrid />
                    <CtaSection />
                </div>
            </div>

        </>
    );
}