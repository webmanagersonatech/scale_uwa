import Link from "next/link";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CostItem {
    label: string;
    amount: string;
    note?: string;
}

// ─── Data (Only client-shared content) ─────────────────────────────────────
const RECOMMENDED_PATHWAY = {
    subtitle: "Sona Star, SCALE + UWA Pathway",
    description: "Year 1 at Sona Star, SCALE Bengaluru | Year 2 on campus at UWA, Alabama. Best value + US experience.",
    items: [
        { label: "Year 1 at Sona Star, SCALE", amount: "₹7,50,000" },
        { label: "Year 2 at UWA (COA)", amount: "$17,248" },
        { label: "Potential Scholarship", amount: "up to USD 5,000", note: "Merit-based, subject to eligibility" },
    ],
    totalLabel: "Total Estimate (2 Years)",
    totalAmount: "~₹23.9 lakh",
    savingsBadge: "Save ~72% vs Traditional MS", // Changed from ₹72 Lakhs to 72%
};

const EXCHANGE_RATE = {
    rate: 95,
    asOf: "May 30, 2026",
    source: "Reference exchange rate",
};

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Breadcrumb component ────────────────────────────────────────────────────
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
                        <Link href="/admissions" className="text-[#AC1F2D] hover:underline no-underline">
                            Admissions
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Fee & Pathway Cost
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Main Cost Card Component ─────────────────────────────────────────────────
function RecommendedPathwayCard() {
    const totalUSD = 17248;
    const totalINRFromUSD = totalUSD * EXCHANGE_RATE.rate;

    return (
        <div className="bg-white overflow-hidden">
            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-4">
                <p className="text-gray-500 text-sm font-medium">{RECOMMENDED_PATHWAY.subtitle}</p>
                <p className="text-gray-600 text-sm mt-2">{RECOMMENDED_PATHWAY.description}</p>
                
                {/* Two Key Numbers */}
                <div className="flex flex-wrap gap-3 mt-4">
                    <div className="border border-gray-300 rounded px-3 py-1.5">
                        <span className="text-gray-800 font-semibold text-sm">1+1</span>
                        <span className="text-gray-500 text-xs ml-1">Pathway Model</span>
                    </div>
                    <div className="border border-gray-300 rounded px-3 py-1.5">
                        <span className="text-gray-800 font-semibold text-sm">~72%</span>
                        <span className="text-gray-500 text-xs ml-1">Total Savings</span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-6">
                {/* Cost Items */}
                <div className="space-y-4 mb-6">
                    {RECOMMENDED_PATHWAY.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start border-b border-gray-100 pb-3 last:border-0">
                            <div>
                                <span className="text-gray-700 text-sm">{item.label}</span>
                                {item.note && (
                                    <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                                )}
                            </div>
                            <span className="text-gray-800 font-semibold text-sm ml-4 whitespace-nowrap">
                                {item.amount}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total Section */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div>
                            <span className="text-gray-600 text-sm">{RECOMMENDED_PATHWAY.totalLabel}</span>
                            <span className="text-gray-800 font-bold text-2xl ml-2">{RECOMMENDED_PATHWAY.totalAmount}</span>
                        </div>
                        <div className="border border-gray-300 px-3 py-1.5 bg-green-50">
                            <span className="text-green-700 text-xs font-medium">💰 {RECOMMENDED_PATHWAY.savingsBadge}</span>
                        </div>
                    </div>

                    {/* Detailed breakdown */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-sm py-1">
                            <span className="text-gray-500">Total INR Investment:</span>
                            <span className="text-gray-800 font-semibold">
                                ₹{(750000 + totalINRFromUSD).toLocaleString('en-IN')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Additional Fee Notes Component ─────────────────────────────────────────
function FeeNotes() {
    const year2INR = 17248 * 95;
    const totalINR = 750000 + year2INR;

    return (
        <div className="border-y border-gray-200 p-6 mt-6">
            <h4 className="text-gray-800 font-semibold text-lg mb-3 flex items-center gap-2">
                <span>📋</span> Total Pathway Estimate Details
            </h4>
            <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                    <span className="text-gray-500 text-lg leading-5">•</span>
                    <span>
                        Total Pathway estimate: India + USA in INR = ₹7,50,000 (1st year in India) + 
                        ₹{year2INR.toLocaleString('en-IN')} (2nd year in USA, conversion rate 1 USD = 95 INR on 30th May 2026) 
                        = <strong className="text-gray-800">₹{totalINR.toLocaleString('en-IN')}/-</strong>
                    </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                    <span className="text-gray-500 text-lg leading-5">•</span>
                    <span>
                        <strong className="font-semibold">Savings:</strong> Compared to completing full 2 years directly at UWA, 
                        this pathway saves approximately <strong className="text-gray-800">~72%</strong> on total tuition and living costs.
                    </span>
                </li>
            </ul>

            {/* OPT → Post-Study Work Visa (STEM) - Explicit Label */}
            <div className="mt-5 pt-4 border-t border-gray-200 p-4">
                <p className="text-gray-700 text-sm flex items-start gap-3">
                    <span className="text-gray-500 text-xl">🎓</span>
                    <span className="leading-relaxed">
                        <strong className="text-gray-800">OPT (Optional Practical Training):</strong> Functions as a 
                        <strong className="text-gray-800"> Post-Study Work Visa — STEM OPT Pathway</strong>. 
                        Eligible for <strong className="text-gray-800">36 months (3 years)</strong> of U.S. work authorization after graduation.
                    </span>
                </p>
            </div>
        </div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────
export default function FeeStructurePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="lg:max-w-[60%]">
                            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 text-[11px] tracking-[1.2px] uppercase py-1.5 px-4 rounded-full mb-4">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                Affordable International Degree 
                            </div>
                            <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 font-bold mb-4 leading-tight">
                                Fee & <span className="text-gray-600">Pathway Cost</span>
                            </h1>
                            <p className="text-gray-600 text-base lg:text-lg max-w-[600px] leading-relaxed">
                                Transparent, structured pricing for your <strong className="text-gray-800 text-lg md:text-xl">MS in Data Science</strong> — Year 1 at Sona Star, SCALE in India, Year 2 at UWA, USA.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Main Content Area */}
            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <div className="mb-8 text-center">
                            <p className="text-[#5a5652] text-base leading-relaxed">
                                The <strong className="text-[#AC1F2D] text-lg md:text-xl">MS in Data Science</strong> follows a <strong className="text-[#AC1F2D]">1+1 pathway model</strong> designed to make U.S. education more accessible.
                                Pay Indian tuition for your first year, then complete your degree on campus at the University of West Alabama.
                            </p>
                        </div>

                        {/* Single Recommended Card */}
                        <RecommendedPathwayCard />

                        {/* Additional Notes */}
                        <FeeNotes />

                        {/* Disclaimer */}
                        <div className="text-center mt-8 text-[11px] text-[#8a7a6e]">
                            <p>All figures are estimates and subject to change. For the most current fee structure, please contact the admissions office.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}