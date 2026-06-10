import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Course {
    code: string;
    title: string;
    credits: number | string;
}

interface WhyCard {
    number: string;
    title: string;
    body: string;
    highlight?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const COURSES: Course[] = [
    { code: "DS 500", title: "Introduction to Data Science", credits: 3 },
    { code: "DS 510", title: "Data Science Tools and Techniques", credits: 3 },
    { code: "DS 520", title: "Introduction to Programming for Data Science", credits: 3 },
    { code: "DS 530", title: "Data Analysis in R", credits: 3 },
    { code: "DS 540", title: "Data Exploration and Visualization", credits: 3 },
    { code: "DS 550", title: "Business Intelligence and Statistical Modeling", credits: 3 },
    { code: "DS 560", title: "Predictive Modeling and Big Data Analytics", credits: 3 },
    { code: "DS 570", title: "Fundamentals of Machine and Deep Learning", credits: 3 },
    { code: "DS 580", title: "Fundamentals of Cybersecurity Data Science", credits: 3 },
    { code: "DS 590 / DS 599", title: "Data Science Capstone / Thesis in Data Science", credits: "3 " },
];

const WHY_CARDS: WhyCard[] = [
    {
        number: "01",
        title: "Cost-Effective International Route",
        body: "Students can begin the Program in India and reduce the cost of completing the entire Program in the USA from the first year itself.",
        highlight: "Save on Year 1 costs",
    },
    {
        number: "02",
        title: "U.S. Education Experience",
        body: "Students complete the second year at UWA in Alabama, gaining exposure to the U.S. academic environment and international student experience.",
        highlight: "Year 2 in Alabama, USA",
    },
    {
        number: "03",
        title: "Data Science Career Focus",
        body: "The Program prepares students for roles in data science, analytics, AI, machine learning, business intelligence, predictive modelling, and data-driven decision-making.",
        highlight: "Industry-aligned curriculum",
    },
    {
        number: "04",
        title: "Post-Study Work Visa (STEM OPT)",
        body: "Eligible graduates may access up to 3 years of Post-Study Work Visa opportunities through the STEM OPT pathway, subject to U.S. immigration regulations and individual eligibility.",
        highlight: "Up to 3 Years",
    },
    {
        number: "05",
        title: "Program Continuation Support",
        body: "If a student is unable to travel due to visa-related reasons or chooses to continue from India, the second-year academic delivery may be facilitated through a UWA-supported mechanism, subject to UWA's written approval.",
        highlight: "Flexible delivery options",
    },
];

const ELIGIBILITY_GROUPS = [
    {
        label: "Engineering / Technology",
        items: ["B.Tech / B.E. students from CSE, IT, AI & ML, Data Science, ECE, or related branches"],
    },
    {
        label: "Science / Computer Applications",
        items: ["BCA / MCA / B.Sc. / M.Sc. students with strong quantitative and Programming orientation"],
    },
    {
        label: "Interest Areas",
        items: ["Data analysis, Programming, statistics, AI, machine learning, and business analytics"],
    },
    {
        label: "Working Professionals",
        items: ["Professionals seeking to transition into data science and analytics roles"],
    },
    {
        label: "International Aspirants",
        items: ["Students looking for an international pathway to a U.S. degree"],
    },
];

const OUTCOMES = [
    "Apply advanced analytical abilities for data-driven decisions and innovation",
    "Conduct quantitative evaluations in digital and business environments",
    "Take on data science roles in areas such as AI, finance, healthcare, technology, analytics, and business intelligence",
];

// ─── Tabs ─────────────────────────────────────────────────────────────────────
const TABS = [
    { id: "who-should-apply", label: "Who Should Apply?" },
    { id: "why-choose", label: "Why Choose This Pathway?" },
    { id: "Program-outcomes", label: "Program Outcomes" },
    { id: "course-structure", label: "Course Structure" },
];

// Animation variants
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

// ─── Breadcrumb component (original style preserved) ─────────────────────────
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
                        <Link href="/admissions/about-Program" className="text-[#AC1F2D] hover:underline no-underline">
                            Admissions
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            About the Program
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Mobile Dropdown Navigation ─────────────────────────────────────────────
function MobileNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (id: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const currentTabLabel = TABS.find(tab => tab.id === activeTab)?.label || "Navigate";

    return (
        <div className="md:hidden mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border border-[#e0d6ce] rounded-lg py-3 px-4 flex items-center justify-between text-left"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-[#2c2c2a]">{currentTabLabel}</span>
                <svg
                    className={`w-5 h-5 text-[#AC1F2D] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-white border border-[#e0d6ce] rounded-lg overflow-hidden"
                    >
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left py-3 px-4 text-[14px] transition-all duration-200 border-b border-[#e0d6ce] last:border-b-0 ${activeTab === tab.id
                                    ? "bg-[#fdf5f0] text-[#AC1F2D] font-semibold"
                                    : "text-[#2c2c2a] hover:bg-[#fdf5f0]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Request Card */}
            <div className="bg-[#fdf5f0] border border-[#f0d8cc] rounded-lg p-[18px] mt-4">
                <div className="text-[13px] lg:text-[14px] font-bold text-[#AC1F2D] mb-2">Request More Information</div>
                <p className="text-[12px] lg:text-[13px] text-[#5a5652] leading-[1.55] mb-3">
                    Have questions about the MS in Data Science Program or the Sona Star, SCALE
                    pathway? Our advisors are here to help.
                </p>
                {/* <Link href="/admissions/about-Program" className="inline-block text-[13px] lg:text-[14px] text-[#AC1F2D] font-semibold no-underline hover:underline">
                    Contact Us →
                </Link> */}
            </div>
        </div>
    );
}

// ─── Sidebar component (Desktop) ─────────────────────────────────────────────
function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (id: string) => void }) {
    return (
        <aside className="w-[260px] max-md:hidden" aria-label="Program navigation">
            <div className="bg-white border border-[#e0d6ce] rounded-lg overflow-hidden mb-5 sticky top-24">
                <div className="bg-[#AC1F2D] text-white text-[11px] lg:text-[12px] font-semibold py-2.5 px-3.5 tracking-[0.9px] uppercase">
                    Admission Sections
                </div>
                <nav className="flex flex-col">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`block w-full text-left py-2.5 px-3.5 text-[13px] lg:text-[14px] text-[#2c2c2a] no-underline border-b border-[#e0d6ce] transition-all duration-200 cursor-pointer ${activeTab === tab.id
                                ? "bg-[#fdf5f0] text-[#AC1F2D] border-l-3 border-l-[#AC1F2D] pl-[11px] font-semibold"
                                : "hover:bg-[#fdf5f0] hover:text-[#AC1F2D]"
                                }`}
                            aria-current={activeTab === tab.id ? "location" : undefined}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Request more information card */}
            <div className="bg-[#fdf5f0] border border-[#f0d8cc] rounded-lg p-[18px] mb-5">
                <div className="text-[13px] lg:text-[14px] font-bold text-[#AC1F2D] mb-2">Request More Information</div>
                <p className="text-[12px] lg:text-[13px] text-[#5a5652] leading-[1.55] mb-3">
                    Have questions about the MS in Data Science Program or the  Sona star, SCALE
                    pathway? Our advisors are here to help.
                </p>
                {/* <Link href="/admissions/about-Program" className="inline-block text-[13px] lg:text-[14px] text-[#AC1F2D] font-semibold no-underline hover:underline">
                    Contact Us →
                </Link> */}
            </div>
        </aside>
    );
}



function WhoShouldApply() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
            aria-labelledby="who-apply"
        >
            <h2
                id="who-apply"
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                Who Should Apply?
            </h2>

            <p className="text-sm lg:text-base text-[#5a5652] leading-relaxed mb-6">
                The MS in Data Science pathway is designed for ambitious students
                and professionals who want to build globally relevant skills in
                data science while benefiting from a cost-effective 1+1
                international study model.
            </p>

            {/* Eligibility / Pathway Map */}
            <div className="mb-6">
              

<div className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-2xl p-8 overflow-hidden">
  {/* World Map Background SVG */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M150,200 Q200,150 280,160 Q350,170 380,200 Q410,230 450,220 Q520,200 580,210 Q640,220 680,190" 
        stroke="#2d2a26" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
      <path d="M120,250 Q180,220 250,240 Q320,260 380,250 Q440,240 500,260 Q560,280 620,250 Q660,240 700,260" 
        stroke="#2d2a26" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
      {/* Simplified continent outlines */}
      <ellipse cx="200" cy="200" rx="60" ry="40" fill="none" stroke="#2d2a26" strokeWidth="1"/>
      <ellipse cx="600" cy="190" rx="70" ry="45" fill="none" stroke="#2d2a26" strokeWidth="1"/>
    </svg>
  </div>

  {/* Connecting globe/network decoration */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
    <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="#AC1F2D" strokeWidth="0.5"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="#AC1F2D" strokeWidth="0.5" strokeDasharray="3 3"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="#AC1F2D" strokeWidth="0.5"/>
      <line x1="50" y1="5" x2="50" y2="95" stroke="#AC1F2D" strokeWidth="0.5" opacity="0.5"/>
      <line x1="5" y1="50" x2="95" y2="50" stroke="#AC1F2D" strokeWidth="0.5" opacity="0.5"/>
    </svg>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
    {/* India Section */}
    <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
      {/* India Flag */}
      <div className="flex justify-center mb-2">
        <svg width="56" height="38" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" className="shadow-md">
          <rect width="48" height="10.67" fill="#FF9933" />
          <rect y="10.67" width="48" height="10.66" fill="#FFFFFF" />
          <rect y="21.33" width="48" height="10.67" fill="#138808" />
          <circle cx="24" cy="16" r="5.33" fill="#000080" />
          <circle cx="24" cy="16" r="4" fill="#FFFFFF" />
          <circle cx="24" cy="16" r="3" fill="#000080" />
        </svg>
      </div>
      <h4 className="font-bold text-xl text-[#2d2a26]">
        Year 1
      </h4>
      <p className="text-sm font-medium text-[#5a5652]">
        Sona Star, SCALE, Bengaluru
      </p>
      <p className="text-xs text-[#AC1F2D] mt-1 font-semibold flex items-center justify-center gap-1">
        <span>🇮🇳</span> India
      </p>
    </div>

    {/* Connecting Arrow with Globe Icon */}
    <div className="flex flex-col items-center">
      <div className="text-4xl text-[#AC1F2D] font-bold animate-pulse">
        →
      </div>
      <div className="text-xs text-[#8a8682] mt-1 flex items-center gap-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#AC1F2D" strokeWidth="1.5"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="#AC1F2D" strokeWidth="1"/>
          <line x1="12" y1="2" x2="12" y2="22" stroke="#AC1F2D" strokeWidth="1"/>
        </svg>
        <span>1+1 International Pathway</span>
      </div>
    </div>

    {/* USA Section */}
    <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
      {/* USA Flag */}
      <div className="flex justify-center mb-2">
        <svg width="56" height="38" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" className="shadow-md">
          <rect width="48" height="32" fill="#B22234" />
          <g fill="#FFFFFF">
            <rect width="48" height="2.46" />
            <rect y="4.92" width="48" height="2.46" />
            <rect y="9.84" width="48" height="2.46" />
            <rect y="14.76" width="48" height="2.46" />
            <rect y="19.68" width="48" height="2.46" />
            <rect y="24.6" width="48" height="2.46" />
            <rect y="29.52" width="48" height="2.46" />
          </g>
          <rect width="18.46" height="16" fill="#3C3B6E" />
          <g fill="#FFFFFF">
            <circle cx="1.5" cy="1.5" r="0.8" />
            <circle cx="4.5" cy="1.5" r="0.8" />
            <circle cx="7.5" cy="1.5" r="0.8" />
            <circle cx="10.5" cy="1.5" r="0.8" />
            <circle cx="13.5" cy="1.5" r="0.8" />
            <circle cx="16.5" cy="1.5" r="0.8" />
            <circle cx="1.5" cy="4.5" r="0.8" />
            <circle cx="4.5" cy="4.5" r="0.8" />
            <circle cx="7.5" cy="4.5" r="0.8" />
            <circle cx="10.5" cy="4.5" r="0.8" />
            <circle cx="13.5" cy="4.5" r="0.8" />
            <circle cx="16.5" cy="4.5" r="0.8" />
            <circle cx="1.5" cy="7.5" r="0.8" />
            <circle cx="4.5" cy="7.5" r="0.8" />
            <circle cx="7.5" cy="7.5" r="0.8" />
            <circle cx="10.5" cy="7.5" r="0.8" />
            <circle cx="13.5" cy="7.5" r="0.8" />
            <circle cx="16.5" cy="7.5" r="0.8" />
            <circle cx="1.5" cy="10.5" r="0.8" />
            <circle cx="4.5" cy="10.5" r="0.8" />
            <circle cx="7.5" cy="10.5" r="0.8" />
            <circle cx="10.5" cy="10.5" r="0.8" />
            <circle cx="13.5" cy="10.5" r="0.8" />
            <circle cx="16.5" cy="10.5" r="0.8" />
            <circle cx="1.5" cy="13.5" r="0.8" />
            <circle cx="4.5" cy="13.5" r="0.8" />
            <circle cx="7.5" cy="13.5" r="0.8" />
            <circle cx="10.5" cy="13.5" r="0.8" />
            <circle cx="13.5" cy="13.5" r="0.8" />
            <circle cx="16.5" cy="13.5" r="0.8" />
          </g>
        </svg>
      </div>
      <h4 className="font-bold text-xl text-[#2d2a26]">
        Year 2
      </h4>
      <p className="text-sm font-medium text-[#5a5652]">
        UWA, Alabama
      </p>
      <p className="text-xs text-[#AC1F2D] mt-1 font-semibold flex items-center justify-center gap-1">
        <span>🇺🇸</span> United States
      </p>
    </div>
  </div>


</div>

                <div className="mt-6 pt-4 border-t border-[#e0d6ce]">
                    <p className="text-center text-sm text-[#5a5652]">
                        Eligible students begin their journey in India and complete
                        their degree in the USA through the Sona Star, SCALE × UWA pathway,
                        saving up to <strong className="text-[#AC1F2D]">~₹72 Lakhs</strong> compared to many
                        traditional study-abroad routes.
                    </p>
                </div>
            </div>

            {/* Eligibility Groups - No Cards */}
            <div className="space-y-4">
                {ELIGIBILITY_GROUPS.map((group) => (
                    <div key={group.label}>
                        <h3 className="text-sm font-bold text-[#AC1F2D] uppercase tracking-wide mb-2">
                            {group.label}
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="text-[13px] lg:text-[14px] text-[#5a5652] leading-relaxed"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

function WhyChoose() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
            aria-labelledby="why-choose-title"
        >
            <h2 id="why-choose-title" className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]">
                Why Choose This Pathway through Sona Star, SCALE, Bengaluru to UWA, USA?
            </h2>
            <div className="flex flex-col gap-4">
                {WHY_CARDS.map((card) => (
                    <div
                        key={card.number}
                        className="flex gap-[18px] items-start"
                    >
                        <div className="font-serif text-[26px] font-bold text-[#d4a0a0] min-w-[40px] leading-none pt-0.5">
                            {card.number}
                        </div>
                        <div className="flex-1">
                            <div className="text-[15px] lg:text-[16px] font-bold text-[#2c2c2a] mb-1.5">{card.title}</div>
                            <p className="text-[13px] lg:text-[15px] text-[#5a5652] leading-relaxed mb-2.5">{card.body}</p>
                            {card.highlight && (
                                <span className="inline-block bg-[#AC1F2D]/10 text-[#AC1F2D] text-[11px] font-bold py-0.5 px-2.5 rounded tracking-[0.5px] uppercase">
                                    {card.highlight}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

function ProgramOutcomes() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
            aria-labelledby="outcomes"
        >
            <h2 id="outcomes" className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]">
                Program Outcomes
            </h2>
            <p className="text-sm lg:text-base text-[#5a5652] leading-relaxed mb-5">
                After completing the MS in Data Science, students are expected
                to develop the ability to:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
                {OUTCOMES.map((outcome, i) => (
                    <li
                        key={i}
                        className="text-sm lg:text-base text-[#2c2c2a] leading-relaxed pl-1"
                    >
                        {outcome}
                    </li>
                ))}
            </ol>
            <p className="text-[12px] lg:text-[13px] text-[#5a5652] italic pt-3 border-t border-[#e0d6ce]">
                These outcomes are aligned with UWA&apos;s published Program
                outcomes for the MS in Data Science.
            </p>
        </motion.section>
    );
}

function CourseStructure() {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
            aria-labelledby="courses"
        >
            <h2 id="courses" className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]">
                Course Structure
            </h2>
            <p className="text-sm lg:text-base text-[#5a5652] leading-relaxed mb-5">
                The MS in Data Science is structured around{" "}
                <strong>30 credits </strong> across 10 courses
                published by UWA.
            </p>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm lg:text-base" aria-label="MS Data Science course list">
                    <thead>
                        <tr>
                            <th scope="col" className="bg-[#AC1F2D] text-white py-2.5 px-3.5 text-left text-[12px] lg:text-[13px] font-semibold tracking-[0.6px] uppercase">
                                Course Code
                            </th>
                            <th scope="col" className="bg-[#AC1F2D] text-white py-2.5 px-3.5 text-left text-[12px] lg:text-[13px] font-semibold tracking-[0.6px] uppercase">
                                Course Title
                            </th>
                            <th scope="col" className="bg-[#AC1F2D] text-white py-2.5 px-3.5 text-center text-[12px] lg:text-[13px] font-semibold tracking-[0.6px] uppercase">
                                Credit 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {COURSES.map((course) => (
                            <tr key={course.code}>
                                <td className="py-2.5 px-3.5 border-b border-[#e0d6ce] text-[#5a5652] align-middle">
                                    <code className="bg-[#f0ece8] py-0.5 px-1.5 rounded text-[12px] lg:text-[13px] text-[#AC1F2D] font-mono whitespace-nowrap">
                                        {course.code}
                                    </code>
                                </td>
                                <td className="py-2.5 px-3.5 border-b border-[#e0d6ce] text-[#5a5652] align-middle">
                                    {course.title}
                                </td>
                                <td className="py-2.5 px-3.5 border-b border-[#e0d6ce] text-center align-middle">
                                    <span className="bg-[#AC1F2D]/10 text-[#AC1F2D] text-[12px] lg:text-[13px] font-bold py-0.5 px-2.5 rounded-full">
                                        {course.credits}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-[#f8f5f2]">
                            <td colSpan={2} className="py-2.5 px-3.5 font-bold text-[#2c2c2a] text-sm lg:text-base">
                                Total Credit Hours
                            </td>
                            <td className="py-2.5 px-3.5 text-center font-bold text-[#2c2c2a] text-sm lg:text-base">
                                30
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </motion.section>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────
export default function AboutProgramPage() {
    const [activeTab, setActiveTab] = useState<string>("who-should-apply");

    const renderTabContent = () => {
        switch (activeTab) {
            case "who-should-apply":
                return <WhoShouldApply />;
            case "why-choose":
                return <WhyChoose />;
            case "Program-outcomes":
                return <ProgramOutcomes />;
            case "course-structure":
                return <CourseStructure />;
            default:
                return <WhoShouldApply />;
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none"></div>
                <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none"></div>
                <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none"></div>

                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="lg:max-w-[55%]">
                            <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 text-gray-700 text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
                                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                                MS in Data Science
                            </div>
                            <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                                About the <span className="text-gray-700">Program</span>
                            </h1>
                            <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                                A 30-credit graduate pathway through UWA Sona Star, SCALE — start in India,
                                complete at the University of West Alabama, USA.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                                <span className="block font-serif text-3xl lg:text-[32px] text-gray-800 font-bold leading-none">30</span>
                                <span className="block text-[11px] text-gray-500 tracking-[0.6px] uppercase mt-2">Credits </span>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                                <span className="block font-serif text-3xl lg:text-[32px] text-gray-800 font-bold leading-none">10</span>
                                <span className="block text-[11px] text-gray-500 tracking-[0.6px] uppercase mt-2">Core Courses</span>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                                <span className="block font-serif text-3xl lg:text-[32px] text-gray-800 font-bold leading-none">3year</span>
                                <span className="block text-[11px] text-gray-500 tracking-[0.6px] uppercase mt-2">STEM OPT</span>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm">
                                <span className="block font-serif text-3xl lg:text-[32px] text-gray-800 font-bold leading-none">2</span>
                                <span className="block text-[11px] text-gray-500 tracking-[0.6px] uppercase mt-2">Locations</span>
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
                    {/* Mobile Navigation */}
                    <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Desktop Grid Layout */}
                    <div className="grid grid-cols-[260px_1fr] gap-9 max-md:grid-cols-1 max-md:gap-0">
                        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                        <main className="min-w-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    {renderTabContent()}
                                </motion.div>
                            </AnimatePresence>

                            {/* CTA */}
                            <div className="bg-gray-100 border border-gray-200 rounded-lg py-6 px-7 flex items-center justify-between gap-5 flex-wrap">
                                <div className="text-gray-700 text-[15px] lg:text-base">
                                    <strong className="text-gray-900">Ready to apply?</strong> Explore admissions requirements
                                    and start your Sona Star, SCALE pathway today.
                                </div>

                                <div className="flex gap-3 flex-wrap">
                                    <Link
                                        href="https://hikaapp.sonastar.com/INS-0VVEACMY"
                                        target="_blank"
                                        className="inline-block bg-[#AC1F2D] text-white text-sm lg:text-base font-bold py-2.5 px-6 rounded-md no-underline transition-colors hover:bg-[#8c1825]"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}