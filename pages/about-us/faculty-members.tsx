import { motion } from "framer-motion";
import Link from "next/link";
import { BASE_PATH } from "../../utils/config";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface SocialLink {
    href: string;
    label: string;
    icon: React.ReactNode;
}

interface Faculty {
    initials: string;
    name: string;
    title: string;
    qualification?: string;        // New field for degrees (PhD, etc.)
    department?: string;          // New field for department/specialization
    expertise?: string[];         // New field for areas of expertise
    imageSrc?: string;
    imageAlt?: string;
    socials?: SocialLink[];
}

// ─── Social Icons (kept for potential faculty social links) ───────────────────
const FacebookIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-2.74-2.74A4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const XIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l16 16M20 4L4 20" />
    </svg>
);

const YouTubeIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
);

// ─── Faculty Data (Updated with correct titles and roles) ───────────────────────────────────────────
const facultyMembers: Faculty[] = [
    {
        initials: "MV",
        name: "Dr. M. Venugopal",
        title: "Vice President",
        qualification: "Ph.D., M.B.A.",
        department: "Office of the President",
        expertise: ["Strategic Leadership", "Higher Education Policy", "Institutional Development"],
        imageSrc: "/homeimages/dr_venu_mittapally_gopal.webp", // Update with actual path
        imageAlt: "Dr. M. Venugopal - Vice President",
        // socials: []  // Optional: add social links if available
    },
    {
        initials: "SM",
        name: "Dr. Sheelan Misra",
        title: "Dean (Marketing Strategy, IR & Industry Collaboration)",
        qualification: "Ph.D.",
        department: "Department of Business Administration",
        expertise: ["Marketing Strategy", "International Relations", "Industry Collaboration", "Management Studies"],
        imageSrc: "/homeimages/dr_sheelan_misra.webp", // Update with actual path
        imageAlt: "Dr. Sheelan Misra - Dean",
        // socials: []
    },
    {
        initials: "AN",
        name: "Akhil Narayan",
        title: "Learning and Development Manager",
        qualification: "MBA, B.Tech.",
        department: "Learning & Development",
        expertise: ["Corporate Training", "Curriculum Design", "Leadership Development", "Instructional Design"],
        imageSrc: "/homeimages/akhil.webp", // Update with actual path
        imageAlt: "Akhil Narayan - Learning and Development Manager",
    },
    {
        initials: "BB",
        name: "Dr. Butchi Babu Muvva",
        title: "Adjunct Professor | Director – AI & Business Intelligence",
        qualification: "Ph.D.",
        department: "Artificial Intelligence & Business Intelligence",
        expertise: [
            "Artificial Intelligence",
            "Business Intelligence",
            "Digital Innovation",
            "Social Impact through AI"
        ],
        imageSrc: "/homeimages/butchi_babu_muvva.jpg",
        imageAlt: "Dr. Butchi Babu Muvva - Adjunct Professor and Director AI & Business Intelligence",
    },

    {
        initials: "SC",
        name: "A. Sailesh Chandra",
        title: "Senior Operations & Digital Transformation Leader",
        qualification: "",
        department: "Operations & Digital Transformation",
        expertise: [
            "Operations Management",
            "Digital Transformation",
            "Business Process Optimization",
            "Strategic Leadership"
        ],
        imageSrc: "/homeimages/sailesh_chandra.jpg",
        imageAlt: "A. Sailesh Chandra - Senior Operations & Digital Transformation Leader",
    },
];

// ─── Breadcrumb (updated for Faculty) ────────────────────────────────────────
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
                    <li className="flex items-center">
                        <span className="text-[#5a5652] font-medium">About Us</span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Faculty Members
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section (updated for Faculty) ──────────────────────────────────────
function HeroSection() {
    return (
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute -right-[60px] -top-[60px]  h-[360px] rounded-full bg-gray-200/50 pointer-events-none" />
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none" />
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div >
                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            Our <span className="text-gray-700">Leadership & Faculty</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg  leading-relaxed">
                            Meet the distinguished educators, researchers, and administrators who mentor, challenge, and inspire our students every day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Faculty Card (enhanced to show department & expertise) ──────────────────
function FacultyCard({ faculty }: { faculty: Faculty }) {
    return (
        <motion.article
            variants={fadeInUp}
            className="bg-white border border-[#e0d6ce] overflow-hidden group transition-shadow duration-300 h-full flex flex-col"
            aria-label={`${faculty.name}, ${faculty.title}`}
        >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-[#AC1F2D]" />

            <div className="p-6 text-center flex flex-col items-center flex-grow">
                {/* Faculty Image/Avatar */}
                <div className="flex justify-center mb-4">
                    {faculty.imageSrc ? (
                        <img
                            src={`${BASE_PATH}${faculty.imageSrc}`}
                            alt={faculty.imageAlt || `${faculty.name} - ${faculty.title}`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#e8cfc8] shadow-md"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-[#f5e8e0] border-4 border-[#e8cfc8] flex items-center justify-center text-[#AC1F2D] font-bold text-3xl select-none">
                            {faculty.initials}
                        </div>
                    )}
                </div>

                {/* Name & Title */}
                <div className="mb-3">
                    <h3 className="font-serif text-xl font-bold text-gray-900 leading-tight mb-2">
                        {faculty.name}
                    </h3>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#AC1F2D]  px-3 py-1 ">
                        {faculty.title}
                    </span>
                </div>

            </div>
        </motion.article>
    );
}

// ─── Faculty Section ─────────────────────────────────────────────────────────
function FacultySection() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby="faculty-title"
        >
            <h2
                id="faculty-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Distinguished Leadership & Faculty
            </h2>

            <p className="text-[#5a5652] text-sm lg:text-base leading-relaxed mb-6 max-w-3xl">
                Our leadership team and faculty members are leaders in their fields, committed to academic excellence and student success.
                They bring a wealth of knowledge, research, and real-world experience to the classroom and the institution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {facultyMembers.map((faculty) => (
                    <FacultyCard key={faculty.name} faculty={faculty} />
                ))}
            </div>
        </motion.section>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FacultyMembersPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <FacultySection />
                    </div>
                </div>
            </div>
        </>
    );
}