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

    subtitle: "Sona Star , SCALE + UWA Pathway",
    description: "Year 1 at Sona Star, SCALE Bengaluru, Year 2 on campus at UWA, Alabama. Best value + US experience.",
    items: [
        { label: "Year 1 at Sona Star , SCALE", amount: "₹7,50,000" },
        { label: "Year 2 at UWA (COA)", amount: "$17,248" },
        { label: "Potential Scholarship", amount: "up to USD 5,000", note: "Merit-based, subject to eligibility" },
    ],
    totalLabel: "Total Estimate (2 Years)",
    totalAmount: "~₹23.9 lakh",
    savingsBadge: "Save ~50% vs Full UWA Route",
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
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border-2 border-[#AC1F2D] rounded-xl overflow-hidden shadow-lg transition-all relative"
        >
  
            {/* Header */}
            <div className="bg-gradient-to-r from-[#AC1F2D] to-[#8a1824] px-6 py-5">
              
                <p className="text-[#e8c8a0] text-sm font-medium">{RECOMMENDED_PATHWAY.subtitle}</p>
                <p className="text-white/80 text-sm mt-2 max-w-2xl">{RECOMMENDED_PATHWAY.description}</p>
            </div>

            {/* Body */}
            <div className="p-6">
                {/* Cost Items */}
                <div className="space-y-4 mb-6">
                    {RECOMMENDED_PATHWAY.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-start border-b border-[#f0e6e0] pb-3 last:border-0">
                            <div>
                                <span className="text-[#2c2c2a] font-medium text-[15px]">{item.label}</span>
                                {item.note && (
                                    <p className="text-[11px] text-[#8a7a6e] mt-0.5">{item.note}</p>
                                )}
                            </div>
                            <span className="text-[#AC1F2D] font-bold text-[16px] ml-4 whitespace-nowrap">
                                {item.amount}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total + Savings Row */}
                <div className="bg-gradient-to-r from-[#fdf5f0] to-[#fff8f3] rounded-lg p-5 mt-2 border border-[#e0d6ce]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <span className="text-[#2c2c2a] font-semibold text-base">{RECOMMENDED_PATHWAY.totalLabel}</span>
                            <span className="text-[#AC1F2D] font-bold text-3xl ml-3">{RECOMMENDED_PATHWAY.totalAmount}</span>
                        </div>
                        <div className="bg-[#AC1F2D]/10 px-4 py-2  border border-[#AC1F2D]/30 self-start md:self-auto">
                            <span className="text-[#AC1F2D] font-bold text-sm flex items-center gap-1">
                                {RECOMMENDED_PATHWAY.savingsBadge}
                            </span>
                        </div>
                    </div>

                    {/* Detailed breakdown */}
                    <div className="mt-4 pt-4 border-t border-[#e0d6ce] grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[#5a5652]">Year 1 (INR):</span>
                            <span className="font-semibold text-[#2c2c2a]">₹7,50,000</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#5a5652]">Year 2 (USD):</span>
                            <span className="font-semibold text-[#2c2c2a]">$17,248</span>
                        </div>
                        <div className="flex justify-between sm:col-span-2">
                            <span className="text-[#5a5652]">Year 2 (INR approx.):</span>
                            <span className="font-semibold text-[#2c2c2a]">
                                ₹{totalINRFromUSD.toLocaleString('en-IN')}
                            </span>
                        </div>
                        <div className="flex justify-between sm:col-span-2 pt-2 mt-1 border-t border-dashed border-[#e0d6ce]">
                            <span className="text-[#AC1F2D] font-bold">Total INR Investment:</span>
                            <span className="text-[#AC1F2D] font-bold text-lg">
                                ₹{(750000 + totalINRFromUSD).toLocaleString('en-IN')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Exchange Rate Note */}
                <div className="mt-4 text-[11px] text-center text-[#8a7a6e] bg-[#f8f5f2] p-3 rounded-lg">
                    <p>† USD to INR conversion rate: 1 USD = {EXCHANGE_RATE.rate} INR (indicative as of {EXCHANGE_RATE.asOf}). Actual costs may vary based on exchange rate fluctuations.</p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Additional Fee Notes Component ─────────────────────────────────────────
function FeeNotes() {
    const year2INR = 17248 * 95;
    const totalINR = 750000 + year2INR;

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-[#f8f5f2] border border-[#e0d6ce] rounded-xl p-6 mt-6"
        >
            <h4 className="text-[#AC1F2D] font-serif font-bold text-lg mb-3 flex items-center gap-2">
                <span>📋</span> Total Pathway Estimate Details
            </h4>
            <ul className="space-y-2">
                <li className="flex items-start gap-2 text-[#5a5652] text-sm leading-relaxed">
                    <span className="text-[#AC1F2D] text-lg leading-5">•</span>
                    <span>
                        Total Pathway estimate: India + USA in INR = ₹7,50,000 (1st year in India) + 
                        ₹{year2INR.toLocaleString('en-IN')} (2nd year in USA, conversion rate 1 USD = 95 INR on 30th May 2026) 
                        = <strong className="text-[#AC1F2D]">₹{totalINR.toLocaleString('en-IN')}/-</strong>
                    </span>
                </li>
                <li className="flex items-start gap-2 text-[#5a5652] text-sm leading-relaxed">
                    <span className="text-[#AC1F2D] text-lg leading-5">•</span>
                    <span>
                        <strong className="font-semibold">Savings:</strong> Compared to completing full 2 years directly at UWA, 
                        this pathway saves approximately <strong className="text-[#AC1F2D]">50%</strong> on total tuition and living costs.
                    </span>
                </li>
            </ul>
        </motion.div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────
export default function FeeStructurePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#AC1F2D] py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-white/5 pointer-events-none"></div>
                <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-[#ffe588]/10 pointer-events-none"></div>
                <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-[#ffe588]/5 pointer-events-none"></div>

                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="lg:max-w-[60%]">
                            <div className="inline-flex items-center gap-2 bg-[#ffe588]/20 border border-[#ffe588]/70 text-[#f8e8a0] text-[11px] tracking-[1.2px] uppercase py-1.5 px-4 rounded-full mb-4">
                                <span className="w-1.5 h-1.5 bg-[#ffe588] rounded-full"></span>
                                Affordable International Degree
                            </div>
                            <h1 className="font-serif text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
                                Fee & <span className="text-[#ffe588]">Pathway Cost</span>
                            </h1>
                            <p className="text-[#e8c8a0] text-base lg:text-lg max-w-[600px] leading-relaxed">
                                Transparent, structured pricing for your MS in Data Science — Year 1 in India, Year 2 at UWA, USA.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                <span className="block font-serif text-3xl text-[#ffe588] font-bold">₹7.5L</span>
                                <span className="block text-[11px] text-[#cdb89a] uppercase mt-1">Year 1 India</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                <span className="block font-serif text-3xl text-[#ffe588] font-bold">$17.2k</span>
                                <span className="block text-[11px] text-[#cdb89a] uppercase mt-1">Year 2 USA</span>
                            </div>
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
                                The MS in Data Science follows a <strong className="text-[#AC1F2D]">2-year pathway model</strong> designed to make U.S. education more accessible.
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