import { motion } from "framer-motion";
import Link from "next/link";


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

interface Profile {
    initials: string;
    name: string;
    title: string;
    imageSrc?: string;
    imageAlt?: string;
    socials?: SocialLink[];
}

// ─── Social Icons ─────────────────────────────────────────────────────────────
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const profiles: Profile[] = [
    {
        initials: "CV",
        name: "C. Valliappa",
        title: "Chairman",

        imageSrc: "/homeimages/valliappa-chairman-sona-gro.webp",

        // Update with your actual image path
        imageAlt: "C. Valliappa - Chairman",
    },
    {
        initials: "TV",
        name: "Thyagu Valliappa",
        title: "CEO",
        imageSrc: "/homeimages/thyagu-valliappa.webp", // Update with your actual image path
        imageAlt: "Thyagu Valliappa - CEO",
        socials: [
            // {
            //     href: "https://www.facebook.com/thyagu.valliappa/",
            //     label: "Facebook",
            //     icon: <FacebookIcon />,
            // },
            {
                href: "https://in.linkedin.com/in/thyagu-valliappa-3616a97",
                label: "LinkedIn",
                icon: <LinkedInIcon />,
            },
            {
                href: "https://x.com/ThyaguValliappa/",
                label: "X",
                icon: <XIcon />,
            },
            // {
            //     href: "https://youtube.com/@ttimewiththyaguvalliappa-gn8cq?si=dWrFKVS7IrB_o7z3",
            //     label: "YouTube",
            //     icon: <YouTubeIcon />,
            // },
        ],
    },
];

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
                    <li className="flex items-center">
                        <span className="text-[#5a5652] font-medium">About Us</span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Management Profiles
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
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none" />
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none" />
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="lg:max-w-[55%]">

                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            Management <span className="text-gray-700">Profiles</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                            Meet the leadership team guiding the University of West Alabama's mission and vision forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Profile Card ─────────────────────────────────────────────────────────────
function ProfileCard({ profile }: { profile: Profile }) {
    return (
        <motion.article
            variants={fadeInUp}
            className="bg-white border border-[#e0d6ce]  overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            aria-label={`${profile.name}, ${profile.title}`}
        >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-[#AC1F2D]" />

            <div className="p-6 text-center">
                {/* Large Image/Avatar */}
                <div className="flex justify-center mb-4">
                    {profile.imageSrc ? (
                        <img
                            src={profile.imageSrc}
                            alt={profile.imageAlt || `${profile.name} - ${profile.title}`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-[#e8cfc8] shadow-md"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-[#f5e8e0] border-4 border-[#e8cfc8] flex items-center justify-center text-[#AC1F2D] font-bold text-3xl select-none">
                            {profile.initials}
                        </div>
                    )}
                </div>

                {/* Name & Title */}
                <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-gray-900 leading-tight mb-2">
                        {profile.name}
                    </h3>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#AC1F2D] bg-[#f9eded] px-3 py-1 rounded-full">
                        {profile.title}
                    </span>
                </div>

                {/* Social Links */}
                {profile.socials && profile.socials.length > 0 && (
                    <div className="border-t border-[#f0e8e0] pt-4 mt-2">
                        <p className="text-[11px] uppercase tracking-widest text-[#a09890] font-medium mb-3">
                            Connect
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {profile.socials.map(({ href, label, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${profile.name} on ${label}`}
                                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#5a5652] border border-[#e0d6ce] px-3 py-1.5 rounded-full hover:text-[#AC1F2D] hover:border-[#AC1F2D] hover:bg-[#fdf5f5] transition-all duration-200"
                                >
                                    {icon}
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.article>
    );
}

// ─── Management Section ───────────────────────────────────────────────────────
function ManagementSection() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby="management-title"
        >
            <h2
                id="management-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Our Leadership
            </h2>

            <p className="text-[#5a5652] text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
                The University of West Alabama is led by a dedicated team committed to excellence in education,
                community engagement, and institutional growth across West Alabama and beyond.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.name} profile={profile} />
                ))}
            </div>
        </motion.section>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ManagementProfilesPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <ManagementSection />

                    </div>
                </div>
            </div>
        </>
    );
}