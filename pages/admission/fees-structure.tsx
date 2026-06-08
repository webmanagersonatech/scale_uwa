import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CostItem {
    label: string;
    amount: string;
    note?: string;
}

interface YearCost {
    title: string;
    subtitle: string;
    items: CostItem[];
    totalLabel: string;
    totalAmount: string;
}

// ─── Data (Only client-shared content) ─────────────────────────────────────
const YEAR1_COST: YearCost = {
    title: "Year 1 at SCALE, Bengaluru",
    subtitle: "Foundation Year in India",
    items: [
        { label: "SCALE Year 1 Programme Fee", amount: "₹7,50,000" },
    ],
    totalLabel: "Total Year 1 Cost",
    totalAmount: "₹7,50,000",
};

const YEAR2_COST: YearCost = {
    title: "Year 2 at UWA, Alabama, USA",
    subtitle: "Complete Your Degree in the United States",
    items: [
        { label: "UWA Year 2 estimated cost for 15 credits with housing, meal plan, Tiger One fee and insurance", amount: "$17,248" },
    ],
    totalLabel: "Total Year 2 Estimated Cost",
    totalAmount: "$17,248",
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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
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
                            Fees & Pathway Cost
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Cost Card Component ─────────────────────────────────────────────────────
function CostCard({ data, delay = 0 }: { data: YearCost; delay?: number }) {
    const totalInUSD = data.totalAmount === "$17,248" ? 17248 : null;
    const totalInINR = totalInUSD ? totalInUSD * EXCHANGE_RATE.rate : null;

    return (
        <motion.div
            variants={fadeInUp}
            custom={delay}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-[#e0d6ce] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
            <div className="bg-gradient-to-r from-[#AC1F2D] to-[#8a1824] px-6 py-4">
                <h2 className="text-white text-xl font-serif font-bold mb-1">{data.title}</h2>
                <p className="text-[#e8c8a0] text-sm">{data.subtitle}</p>
            </div>

            <div className="p-6">
                <div className="space-y-3 mb-6">
                    {data.items.map((item, idx) => (
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

                <div className="bg-[#fdf5f0] rounded-lg p-4 mt-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[#2c2c2a] font-semibold text-[15px]">{data.totalLabel}</span>
                        <span className="text-[#AC1F2D] font-bold text-xl">{data.totalAmount}</span>
                    </div>
                    {totalInINR && (
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#f0d8cc]">
                            <span className="text-[12px] text-[#5a5652]">Approx. INR equivalent</span>
                            <span className="text-[13px] font-semibold text-[#2c2c2a]">
                                ₹{totalInINR.toLocaleString('en-IN')}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Total Summary Component ─────────────────────────────────────────────────
function TotalSummary() {
    const totalINRFirstYear = 750000;
    const totalUSDSecondYear = 17248;
    const totalINRSecondYear = totalUSDSecondYear * EXCHANGE_RATE.rate;
    const grandTotalINR = totalINRFirstYear + totalINRSecondYear;

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden shadow-lg mt-8"
        >
            <div className="px-6 py-5 border-b border-white/10">
                <h3 className="text-white text-lg font-serif font-bold flex items-center gap-2">
                    <span className="text-2xl">💰</span> Total Pathway Investment
                </h3>
                <p className="text-[#a8b2c1] text-sm mt-1">Complete 2-year cost breakdown (India + USA)</p>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                        <p className="text-[#a8b2c1] text-xs uppercase tracking-wide">Year 1 (India)</p>
                        <p className="text-white text-2xl font-bold mt-1">₹7,50,000</p>
                        <p className="text-[#74b9ff] text-xs mt-1">SCALE, Bengaluru</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                        <p className="text-[#a8b2c1] text-xs uppercase tracking-wide">Year 2 (USA)</p>
                        <p className="text-white text-2xl font-bold mt-1">$17,248</p>
                        <p className="text-[#74b9ff] text-xs mt-1">UWA, Alabama</p>
                    </div>
                    <div className="bg-[#AC1F2D]/20 rounded-lg p-4 text-center border border-[#AC1F2D]/30">
                        <p className="text-[#e8c8a0] text-xs uppercase tracking-wide">Grand Total (INR)</p>
                        <p className="text-[#ffe588] text-2xl font-bold mt-1">
                            ₹{grandTotalINR.toLocaleString('en-IN')}
                        </p>
                        <p className="text-[#e8c8a0] text-xs mt-1">
                            @ 1 USD = {EXCHANGE_RATE.rate} INR (as of {EXCHANGE_RATE.asOf})
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:justify-between gap-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#ffe588] rounded-full"></span>
                            <span className="text-[#a8b2c1]">Total INR Investment:</span>
                            <span className="text-white font-semibold">₹{grandTotalINR.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#74b9ff] rounded-full"></span>
                            <span className="text-[#a8b2c1]">Total USD Investment:</span>
                            <span className="text-white font-semibold">${totalUSDSecondYear.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-[12px] text-center text-[#a8b2c1] border-t border-white/10 pt-4">
                    <p>† The USD to INR conversion rate is indicative based on {EXCHANGE_RATE.source} as of {EXCHANGE_RATE.asOf}. Actual costs may vary based on exchange rate fluctuations, living expenses, and individual choices.</p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Additional Fee Notes Component (Using only client shared notes) ─────────
function FeeNotes() {
    const notes = [
        "Total Pathway estimate: India + USA in INR = 7,50,000(1st yr in India) + 16,38,560 (2nd yr in USA, dollar conversion rate 1$=95 on 30th May 2026) = INR 23,88,560/-",
    ];

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-[#f8f5f2] border border-[#e0d6ce] rounded-xl p-6 mt-6"
        >
            <h4 className="text-[#AC1F2D] font-serif font-bold text-lg mb-3 flex items-center gap-2">
                <span>📋</span> Total Pathway Estimate
            </h4>
            <ul className="space-y-2">
                {notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#5a5652] text-sm leading-relaxed">
                        <span className="text-[#AC1F2D] text-lg leading-5">•</span>
                        <span>{note}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────
export default function FeesStructurePage() {
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
                                Fees & <span className="text-[#ffe588]">Pathway Cost</span>
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

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <CostCard data={YEAR1_COST} delay={0} />
                            <CostCard data={YEAR2_COST} delay={0.1} />
                        </motion.div>


                        <FeeNotes />

                        {/* Disclaimer */}
                        <div className="text-center mt-8 text-[11px] text-[#8a7a6e]">
                            <p>All figures are estimates and subject to change. For the most current fee structure, please contact the admissions office.</p>
                            <p className="mt-1">© {new Date().getFullYear()} SCALE + UWA Pathway. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}