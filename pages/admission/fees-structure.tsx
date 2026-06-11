import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CostItem {
    label: string;
    amount: string;
    note?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const EXCHANGE_RATE = { rate: 95, asOf: "May 30, 2026" };

const FULL_UWA = {
    badge: "Full UWA Route",
    badgeColor: "bg-gray-100 text-gray-600",
    subtitle: "Both years on campus at University of West Alabama, USA",
    items: [
        { label: "Year 1 at UWA (COA)", amount: "$24,248–$28,138" },
        { label: "Year 2 at UWA (COA)", amount: "$24,248–$28,138" },
        { label: "Tuition (15 credits/yr)", amount: "$12,870 / yr" },
    ],
    totalLabel: "Total Estimate (2 Years)",
    totalAmount: "~₹46 lakh",
    totalSub: "≈ $48,496–$56,276",
    highlight: false,
};

const RECOMMENDED = {
    badge: "Recommended",
    badgeColor: "bg-gray-100 text-gray-600",
    subtitle: "Year 1 at Sona Star, SCALE Bengaluru · Year 2 at UWA, Alabama",
    items: [
        { label: "Year 1 at Sona Star, SCALE", amount: "₹7,50,000" },
        { label: "Year 2 at UWA (COA)", amount: "$17,248" },
        {
            label: "Potential Scholarship",
            amount: "Up to $5,000",
            note: "Merit-based, subject to eligibility",
        },
    ],
    totalLabel: "Total Estimate (2 Years)",
    totalAmount: "~₹23.9 lakh",
    totalSub: "vs ₹46 lakh for full UWA route",
    highlight: true,
};

// ─── Breadcrumb ──────────────────────────────────────────────────────────────
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
                        <Link href="/admissions" className="text-[#AC1F2D] hover:underline no-underline">Admissions</Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">Fee & Pathway Cost</span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Savings Badge ────────────────────────────────────────────────────────────
function SavingsBadge() {
    return (
        <div className="flex justify-center my-8">
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200  px-5 py-2.5">
                <span className="text-green-700 font-bold text-sm">💰 Save ~75% with the Pathway Model</span>
                <span className="text-green-600 text-xs border-l border-green-300 pl-3">vs Full UWA Route</span>
            </div>
        </div>
    );
}

// ─── Single Comparison Card ──────────────────────────────────────────────────
function ComparisonCard({ data }: { data: typeof RECOMMENDED | typeof FULL_UWA }) {
    const isHighlighted = data.highlight;

    return (
        <div
            className={`flex flex-col  border p-5
                ${isHighlighted
                    ? "border-[#AC1F2D] bg-white"
                    : "border-[#AC1F2D] bg-white"
                }`}
        >
            {/* Header - simplified */}
            <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${data.badgeColor}`}>
                        {data.badge}
                    </span>
                    {isHighlighted && (
                        <span className="text-xs text-gray-500">
                            1+1 Model
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-600">{data.subtitle}</p>
            </div>

            {/* Cost items - simplified */}
            <div className="space-y-3 mb-5">
                {data.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-700">{item.label}</p>
                            {item.note && (
                                <p className="text-xs text-gray-400">{item.note}</p>
                            )}
                        </div>
                        <span className={`text-sm font-medium text-[#AC1F2D]`}>
                            {item.amount}
                        </span>
                    </div>
                ))}
            </div>

            {/* Total - simplified */}
            <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1">{data.totalLabel}</p>
                <p className={`text-2xl font-bold text-[#AC1F2D]`}>
                    {data.totalAmount}
                </p>
                {data.totalSub && (
                    <p className="text-xs text-gray-400 mt-1">{data.totalSub}</p>
                )}
            </div>
        </div>
    );
}

// ─── VS Divider ───────────────────────────────────────────────────────────────
function VsDivider() {
    return (
        <div className="flex items-center justify-center">
            <div className="hidden lg:flex flex-col items-center gap-2 self-center">
                <div className="w-px h-16 bg-gray-200" />
                <span className="text-xs font-bold text-gray-400 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    VS
                </span>
                <div className="w-px h-16 bg-gray-200" />
            </div>
            <div className="lg:hidden flex items-center gap-3 my-2">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs font-bold text-gray-400 bg-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    VS
                </span>
                <div className="h-px flex-1 bg-gray-200" />
            </div>
        </div>
    );
}

// ─── Fee Notes ────────────────────────────────────────────────────────────────
function FeeNotes() {
    const year2INR = 17248 * EXCHANGE_RATE.rate;


    return (
        <div className="border-t border-gray-200 py-6 mt-8 bg-white">
            <ul className="space-y-3  mx-auto">
                <li className="flex items-start justify-center gap-2.5 text-gray-600 text-sm leading-relaxed">
                    <span className="text-[#AC1F2D] mt-0.5">•</span>
                    <span className="text-center">
                        <strong>Savings:</strong> Compared to completing both years directly at UWA, this pathway saves approximately{" "}
                        <strong className="text-gray-800">~75%</strong> on total tuition and living costs.
                    </span>
                </li>
            </ul>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FeeStructurePage() {
    return (
        <>
            {/* Hero */}
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
                                Transparent pricing for your{" "}
                                <strong className="text-gray-800 text-lg md:text-xl">MS in Data Science</strong> — compare both routes side by side.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Main Content */}
            <div className="py-10">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">

                        {/* Intro */}
                        <div className="mb-6 text-center">
                            <p className="text-[#5a5652] text-base leading-relaxed">
                                The <strong className="text-[#AC1F2D] text-lg">MS in Data Science</strong> offers a{" "}
                                <strong className="text-[#AC1F2D]">1+1 pathway model</strong> — pay Indian tuition for Year 1,
                                then complete your degree on campus at the University of West Alabama.
                            </p>
                        </div>

                        {/* Savings Banner */}
                        <SavingsBadge />

                        {/* Comparison Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-0 items-stretch">
                            <ComparisonCard data={RECOMMENDED} />
                            <VsDivider />
                            <ComparisonCard data={FULL_UWA} />
                        </div>

                        {/* Notes */}
                        <FeeNotes />

                    </div>
                </div>
            </div>
        </>
    );
}