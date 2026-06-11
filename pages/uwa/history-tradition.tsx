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
                        <span className="text-[#5a5652] font-medium">UWA</span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">History & Traditions</span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
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
                        History & <span className="text-gray-700">Traditions</span>
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                        A legacy of excellence since 1835 — shaping education and leadership in West Alabama for nearly two centuries.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Timeline Item ────────────────────────────────────────────────────────────
interface TimelineItemProps {
    year: string;
    description: string;
    isLast?: boolean;
}

function TimelineItem({ year, description, isLast = false }: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-8">
            {!isLast && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-[#e0d6ce]" />
            )}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#AC1F2D] border-4 border-[#f5e8e0]" />
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#e0d6ce] hover:shadow-md transition-shadow">
                <span className="text-2xl font-bold text-[#AC1F2D] font-serif block mb-3">{year}</span>
                <p className="text-[#5a5652] leading-relaxed text-sm lg:text-base">{description}</p>
            </div>
        </div>
    );
}

// ─── History Content ──────────────────────────────────────────────────────────
function HistoryContent() {
    const timelineEvents = [
        { year: "1881", description: "From 1881 to 1910, the school at Livingston was under the direction of the noted educator and reformer Julia Tutwiler, who succeeded in getting a small appropriation from the State Legislature in 1883 to establish normal school training for girls at Livingston Female Academy. According to statements in the University archives, this is believed to be the first State appropriation in Alabama made exclusively for the education of women. The first normal school diplomas were granted in 1886." },
        { year: "1907", description: "Livingston Female Academy and State Normal College continued as a private institution with some State support until 1907, when the State assumed full control. However, it remained under its own board of trustees until the Legislature created a State Board of Trustees for all the normal schools in 1911. In 1919, this board was abolished and all state normal schools were placed under the supervision of the State Board of Education." },
        { year: "1929", description: "In 1929, the school at Livingston became State Teachers College, Livingston, Alabama, with the authority to confer the degree of Bachelor of Science. The Bachelor of Arts degree was authorized in 1947. Although the institution had begun accepting male students soon after 1900, the student body remained predominantly female through the 1950s." },
        { year: "1957", description: "In 1957, the name was again changed by an act of Legislature — this time to Livingston State College — and the following year, the mission of the institution was broadened when the Graduate Division was established and the College was authorized to confer master's degrees in the field of professional education." },
        { year: "1967", description: "In 1967, an act of the Legislature created Livingston University with its own Board of Trustees." },
        { year: "1995", description: "In 1995, the institution recognized its broader mission as a regional university serving the educational needs of all the citizens of the area by changing its name to the University of West Alabama." },
    ];

    return (
        <motion.section variants={fadeInUp} initial="hidden" animate="visible" aria-labelledby="history-title">
            <h2 id="history-title" className="font-serif text-xl text-[#AC1F2D] font-bold mb-6 pb-3 border-b-2 border-[#f5e8e0]">
                Our History
            </h2>
            <div className="text-[#5a5652] leading-relaxed text-sm lg:text-base mb-8">
                <p>
                    The University of West Alabama was chartered in 1835 as a church-related female academy and admitted its first students in 1839. After difficult times during the Civil War and Reconstruction periods, the school reopened in the late 1860s or early 1870s. Although it appears that a few male students were admitted following the reopening, a resolution by the Board of Trustees in 1876 excluded boys and this policy was followed until the beginning of the 20th century.
                </p>
            </div>
            <div className="mt-8">
                <h3 className="font-serif text-lg text-gray-800 font-semibold mb-6 pb-2 border-b border-[#e0d6ce]">
                    Historical Timeline
                </h3>
                <div>
                    {timelineEvents.map((event, index) => (
                        <TimelineItem
                            key={event.year}
                            year={event.year}
                            description={event.description}
                            isLast={index === timelineEvents.length - 1}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// ─── Snapshots Gallery ────────────────────────────────────────────────────────
// Layout mirrors the screenshot:
//   Row 1: two equal columns (graduation, mascot)
//   Row 2: two equal columns (students outside, cheerleaders)
//   Row 3: two equal columns (performer, student smiling)
//   Row 4: full-width wide (football game)
//   Row 5: full-width wide (greek life group)
//   Row 6: full-width wide (crowd at game)
//   Row 7: full-width wide (UWA letters on campus)

type SnapshotPhoto = {
    src: string;
    alt: string;
    span?: "half" | "full"; // half = 50%, full = 100% width
    rounded?: "tr" | "bl" | "none"; // decorative corner clip
};

const snapshots: SnapshotPhoto[] = [
    { src: "https://www.uwa.edu/app/uploads/2023/10/HistoryTraditions9-e1698421531436.jpg", alt: "Graduates celebrating at commencement", span: "half", rounded: "tr" },
    { src: "https://www.uwa.edu/app/uploads/2023/10/HistoryTraditions5-e1698421495635.jpg", alt: "UWA Tiger mascot at a game", span: "half", rounded: "tr" },
    { src: "https://www.uwa.edu/app/uploads/2025/05/491662179_1277099567210349_3364808043665429716_n.jpg", alt: "Students relaxing on campus grounds", span: "half", rounded: "none" },
    { src: "https://www.uwa.edu/app/uploads/2023/10/HistoryTraditions12.jpg", alt: "UWA cheerleaders performing", span: "half", rounded: "bl" },
    { src: "https://www.uwa.edu/app/uploads/2025/03/Faulkner-Wooley-Guerrilla-Theatre-event-an-evening-of-scene-study-monologues-musical-theatre-performances-poetry-and-more-2048x1365.jpg", alt: "Student performing on stage", span: "half", rounded: "none" },
    { src: "https://www.uwa.edu/app/uploads/2024/07/image.png", alt: "Student smiling on campus", span: "half", rounded: "tr" },
    { src: "https://www.uwa.edu/app/uploads/2023/10/HistoryTraditions10.jpg", alt: "UWA Tiger football game action", span: "full", rounded: "none" },
    { src: "https://www.uwa.edu/app/uploads/2025/06/FraternitySorority-2048x1365.jpg", alt: "Greek life students posing together", span: "full", rounded: "none" },
    { src: "https://www.uwa.edu/app/uploads/2023/10/HistoryTraditions.jpg", alt: "Fans cheering at a UWA game", span: "full", rounded: "none" },
    { src: "https://www.uwa.edu/app/uploads/2024/06/NP_4044-CR3_DxO_DeepPRIME-2048x1307.jpg", alt: "Large UWA letters on campus with fall trees", span: "full", rounded: "none" },
];

const roundedClass: Record<string, string> = {
    tr: "rounded-tr-[60px]",
    bl: "rounded-bl-[60px]",
    none: "",
};

function SnapshotsGallery() {
    // Group half-span photos into pairs for rows
    const rows: SnapshotPhoto[][] = [];
    let i = 0;
    while (i < snapshots.length) {
        if (snapshots[i].span === "full") {
            rows.push([snapshots[i]]);
            i++;
        } else {
            // grab pair
            rows.push([snapshots[i], snapshots[i + 1]].filter(Boolean));
            i += 2;
        }
    }

    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 justify-center items-center"
            aria-labelledby="snapshots-title"
        >
            <h2
                id="snapshots-title"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-6 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Snapshots of Life at UWA
            </h2>
            <div className="flex justify-center">
                <div className="flex flex-col gap-2 max-w-5xl w-full">
                    {rows.map((row, rowIdx) => (
                        <motion.div
                            key={rowIdx}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className={`flex gap-2 ${row.length === 1 ? "w-full" : ""}`}
                        >
                            {row.map((photo) => (
                                <div
                                    key={photo.src}
                                    className={`overflow-hidden ${photo.span === "full" ? "w-full" : "w-1/2"
                                        } ${roundedClass[photo.rounded ?? "none"]}`}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className={`w-full object-cover ${photo.span === "full"
                                                ? "h-80 lg:h-96"   // Taller: h-80 (mobile), h-96 (desktop)
                                                : "h-64 lg:h-80"   // Taller: h-64 (mobile), h-80 (desktop)
                                            }`}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function HistoryPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        <HistoryContent />
                        <SnapshotsGallery />
                    </div>
                </div>
            </div>
        </>
    );
}