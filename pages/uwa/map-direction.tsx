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
                    <li className="flex items-center">
                        <span className="text-[#AC1F2D] hover:underline no-underline"> UWA</span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">Directions</span>
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
                        Map & <span className="text-gray-700">Directions</span>
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                        Find your way to the University of West Alabama in Livingston, Alabama.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Map Embed ────────────────────────────────────────────────────────────────
function MapEmbed() {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-full mb-10 border border-gray-200 overflow-hidden"
        >
            <iframe
                title="The University of West Alabama"
                src="https://maps.google.com/maps?q=The%20University%20of%20West%20Alabama,%20100%20US-11,%20Livingston,%20AL%2035470,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </motion.div>
    );
}

// ─── Info Card (teal bordered) ────────────────────────────────────────────────
function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#3a7a6e] rounded-lg p-6 mb-6"
        >
            <h2 className="font-serif text-base font-bold text-[#2d6057] mb-4">
                {title}
            </h2>
            {children}
        </motion.div>
    );
}

// ─── Address Card ─────────────────────────────────────────────────────────────
function AddressCard() {
    return (
        <InfoCard title="Address">
            <div className="flex items-start  gap-3 text-[#5a5652] text-sm leading-relaxed mb-4">
                <svg
                    className="w-4 h-4 mt-0.5 text-[#AC1F2D] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                    />
                </svg>
                <div>
                    <p>University of West Alabama</p>
                    <p>100 US-11</p>
                    <p>Livingston, AL 35470</p>
                </div>
            </div>
            <a
                href="/printable-map.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#AC1F2D] hover:underline"
            >
                Download a printable map
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </InfoCard>
    );
}

// ─── Driving Directions Card ──────────────────────────────────────────────────
function DrivingDirectionsCard() {
    const directions = [
        {
            bold: "Traveling north/east (from Mississippi Area)",
            text: " on I-59/I-20, take the AL-28 exit, exit #17 (Livingston/Boyd). Turn right onto AL-28. Turn Right onto U.S. Highway 11 (first traffic signal).",
        },
        {
            bold: "Traveling south/west (from Tuscaloosa area)",
            text: " on I-59/I-20, take the AL-28 exit, exit #17 (Livingston/Boyd). Turn left onto AL-28. Turn Right onto U.S. Highway 11 (first traffic signal).",
        },
        {
            bold: null,
            text: "West on US-80, turn right onto AL-28 (Livingston). Turn right onto U.S. Highway 11.",
        },
        {
            bold: null,
            text: "North on AL-17, turn right onto U.S. Highway 11.",
        },
        {
            bold: null,
            text: "North on AL-43, turn left onto AL-28 in Linden. Turn left onto US-80. Turn right onto AL-28. Turn right onto U.S. Highway 11.",
        },
    ];

    return (
        <InfoCard title="General Driving Directions">
            <div className="space-y-3 text-[#5a5652] text-sm leading-relaxed">
                {directions.map((d, i) => (
                    <p key={i}>
                        {d.bold && <strong className="text-[#1a1a1a]">{d.bold}</strong>}
                        {d.text}
                    </p>
                ))}
            </div>
        </InfoCard>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function DirectionsPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-10">
                <div className="max-w-[1440px] mx-auto px-6">
                    <MapEmbed />

                    <div >
                        <h2 className="font-serif text-2xl text-gray-900 font-bold mb-6">
                            Directions
                        </h2>
                        <AddressCard />
                        <DrivingDirectionsCard />
                    </div>
                </div>
            </div>
        </>
    );
}