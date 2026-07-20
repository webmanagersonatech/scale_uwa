import { motion } from "framer-motion";
import Link from "next/link";
import { BASE_PATH } from "../../utils/config";
import UWAOptionsSection from "../../components/AboutComponent";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

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
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Privacy Policy
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
            <div className="absolute -right-[60px] -top-[60px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none" />
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none" />
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div>
                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            <span className="text-gray-700">Privacy Policy</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl">
                            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Privacy Policy Content ──────────────────────────────────────────────────
interface PolicySection {
    id: string;
    title: string;
    content: string | string[];
}

const policySections: PolicySection[] = [
  {
    id: "information-collection",
    title: "What Information We Collect",
    content: [
      "SONA–UWA collects personal information in the following ways:",
      "When you voluntarily provide it to us by submitting enquiry forms, admission applications, scholarship requests, event registrations, or contacting us. This information may include your name, email address, mobile number, postal address, educational qualifications, preferred programme, and other admission-related details.",
      "When our website automatically collects technical information through cookies and similar technologies. This information may include your IP address, browser type, device information, operating system, pages visited, date and time of your visit, referring website, and website usage statistics.",
      "When authorised third-party service providers, such as analytics and marketing platforms, collect information on our behalf. This may include pages viewed, session duration, visitor location based on IP address, website interactions, and aggregated demographic insights."
    ]
  },

  {
    id: "information-use",
    title: "How We Use Personal Information",
    content: [
      "SONA–UWA uses the information collected through this website to:",
      "• Respond to enquiries and provide admission counselling.",
      "• Process applications for academic programmes and scholarships.",
      "• Communicate important updates regarding admissions, interviews, events, webinars, and programme information.",
      "• Improve website functionality, performance, accessibility, and user experience.",
      "• Analyse website traffic and visitor behaviour to enhance our digital services.",
      "• Comply with applicable legal, regulatory, and institutional requirements.",
      "We may occasionally use personal information for other legitimate educational or administrative purposes. Where appropriate, we will inform you about such use."
    ]
  },

  {
    id: "information-sharing",
    title: "With Whom We Share Personal Information",
    content: [
      "SONA–UWA does not sell, rent, or trade your personal information.",
      "We may share your information with trusted service providers who assist us in operating our website, processing applications, managing communications, conducting analytics, or providing related educational services. These providers are required to protect your information and use it only for authorised purposes.",
      "We may also share information with partner institutions, including the University of West Alabama, where necessary for admission processing, programme administration, or academic collaboration.",
      "Personal information may also be disclosed when required by applicable law, legal process, or to protect the rights, safety, security, and property of SONA–UWA, its students, staff, visitors, and partners."
    ]
  },

  {
    id: "cookies",
    title: "Cookies and Analytics",
    content: [
      "Our website uses cookies and analytics technologies to understand how visitors interact with our website and to improve user experience.",
      "Cookies help us remember your preferences, measure website performance, analyse traffic patterns, and provide relevant content.",
      "You may choose to disable cookies through your browser settings; however, some features of the website may not function as intended."
    ]
  },

  {
    id: "data-security",
    title: "How We Protect Your Information",
    content: [
      "SONA–UWA implements appropriate technical and organisational security measures to safeguard your personal information against unauthorised access, disclosure, alteration, or destruction.",
      "Security measures include secure servers, encrypted communications where applicable, controlled access to information, and regular monitoring of our systems.",
      "While we take reasonable steps to protect your information, no method of electronic transmission or storage can be guaranteed to be completely secure."
    ]
  },

  {
    id: "third-party-links",
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites, including partner universities, payment gateways, and external service providers.",
      "These websites operate independently and have their own privacy practices. SONA–UWA is not responsible for the privacy policies or content of third-party websites. We encourage you to review their privacy policies before providing personal information."
    ]
  }
];

// ─── Policy Section Component ────────────────────────────────────────────────
function PolicySection({ section }: { section: PolicySection }) {
    return (
        <motion.div
            variants={fadeInUp}
            id={section.id}
            className="mb-8 scroll-mt-20"
        >
            <h2 className="font-serif text-xl lg:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-[#e0d6ce]">
                {section.title}
            </h2>
            {Array.isArray(section.content) ? (
                <div className="space-y-3 text-[#5a5652] text-sm lg:text-base leading-relaxed">
                    {section.content.map((paragraph, index) => {
                        // Check if paragraph starts with • (bullet point)
                        if (paragraph.trim().startsWith('•')) {
                            return (
                                <p key={index} className="pl-6 text-[#5a5652]">
                                    {paragraph}
                                </p>
                            );
                        }
                        return (
                            <p key={index} className="text-[#5a5652]">
                                {paragraph}
                            </p>
                        );
                    })}
                </div>
            ) : (
                <p className="text-[#5a5652] text-sm lg:text-base leading-relaxed">
                    {section.content}
                </p>
            )}
        </motion.div>
    );
}

// ─── Table of Contents ──────────────────────────────────────────────────────
function TableOfContents() {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
                <h3 className="font-serif text-lg font-bold text-gray-800">
                    Jump to Section
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[#e0d6ce] to-transparent" />
            </div>
            
            <div className="flex flex-wrap gap-2">
                {policySections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="px-4 py-2 bg-[#f8f5f2] text-sm text-[#5a5652] rounded-full border border-[#e0d6ce] hover:bg-[#AC1F2D] hover:text-white hover:border-[#AC1F2D] transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        {section.title}
                    </a>
                ))}
            </div>
        </div>
    );
}

// ─── Last Updated ─────────────────────────────────────────────────────────────
function LastUpdated() {
    const lastUpdated = "January 15, 2026";

    return (
        <div className="text-sm text-[#8a8580] border-t border-[#e0d6ce] pt-4 mt-8">
            <p>Last Updated: {lastUpdated}</p>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        {/* Table of Contents */}
                        <TableOfContents />

                        {/* Policy Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="bg-white border border-[#e0d6ce]  p-6 lg:p-8"
                        >
                            {policySections.map((section) => (
                                <PolicySection key={section.id} section={section} />
                            ))}

                            {/* Last Updated */}
                            {/* <LastUpdated /> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}



