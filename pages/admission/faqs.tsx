import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Animation Variants ─────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
                        <span className="text-[#5a5652] font-medium" aria-current="page">FAQs</span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}



function FAQItem({ question, answer, isOpen, onClick }: { 
    question: string; 
    answer: string; 
    isOpen: boolean; 
    onClick: () => void;
}) {
    return (
        <motion.div 
            className="border-b border-[#e0d6ce] last:border-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                onClick={onClick}
                className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 hover:bg-[#faf7f4] transition-colors group"
                aria-expanded={isOpen}
                whileTap={{ scale: 0.99 }}
                whileHover={{ backgroundColor: "#faf7f4" }}
            >
                <motion.span 
                    className="font-serif text-[16px] lg:text-[17px] text-[#2c2c2a] font-medium pr-6 group-hover:text-[#AC1F2D] transition-colors"
                    animate={{ 
                        color: isOpen ? "#AC1F2D" : "#2c2c2a"
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {question}
                </motion.span>
                
                <motion.span 
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f0ece8] flex items-center justify-center text-[#AC1F2D] text-xl font-bold group-hover:bg-[#AC1F2D] group-hover:text-white transition-all"
                    animate={{ 
                        rotate: isOpen ? 0 : 0
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                        {isOpen ? "−" : "+"}
                    </motion.span>
                </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                            height: "auto", 
                            opacity: 1,
                            transition: {
                                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.3, delay: 0.1 }
                            }
                        }}
                        exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: {
                                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div 
                            className="pb-5 px-5 text-[#5a5652] text-[14px] lg:text-[15px] leading-relaxed border-t border-[#f0ece8] pt-3"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {answer.split("\n").map((line, i) => (
                                <motion.p 
                                    key={i} 
                                    className={line.startsWith("•") ? "ml-4 mb-1" : "mb-2"}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.2 }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── FAQ Items Data (Truncated for brevity - you have the full list) ─────────
const FAQ_ITEMS = [
    {
        question: "What is the SonaUWA 1+1 International Pathway Program?",
        answer: "The SonaUWA 1+1 International Pathway is a program where students complete Year 1 in Bengaluru, Karnataka, India at SCALE and Year 2 at the University of West Alabama (UWA), Alabama, USA and earn an Master of Science(MS) in Data Science degree from UWA."
    },
    {
        question: "Who is this program designed for?",
        answer: "The program is designed for:\nB.Tech / B.E. students from CSE, IT, AI & ML, Data Science, ECE, or related branches\n• BCA / MCA / B.Sc. / M.Sc. students with strong quantitative and programming orientation\n• Students interested in data analysis, programming, statistics, AI, machine learning, and business analytics\n• Working professionals seeking to transition into data science and analytics roles\n• Students looking for an international pathway"
    },
    {
        question: "What is the benefit of studying year 1 in India ?",
        answer: "Studying the first year in India helps reduce costs significantly(up to 75%), provides academic preparation, and allows students and families more time to plan their move to the USA."
    },
    {
        question: "Do I receive a U.S. degree or an Indian degree?",
        answer: "You receive an MS in Data Science degree from the University of West Alabama, USA after successfully completing all academic requirements"
    },
    {
        question: "Is this degree recognized internationally?",
        answer: "Yes. UWA is an accredited public university in Alabama, USA, and the degree is recognized as a U.S. master's degree."
    },
    {
        question: "How much money can I save through this pathway?",
        answer: "Students may save approximately 75% compared to completing the entire program in the USA."
    },
    {
        question: "What will I learn in this program?",
        answer: "The Sona-UWA program includes:\nData Science \nPython Programming \nR Programming \nData Visualization \nMachine Learning \nDeep Learning \nBig Data Analytics \nBusiness Intelligence \nCybersecurity Data Science"
    },
    {
        question: "Is this program suitable for recent graduates?",
        answer: "Yes. Graduates with a quantitative background and an interest in technology, analytics, or programming can apply."
    },
    {
        question: "What is OPT?",
        answer: "Optional Practical Training (OPT) allows eligible international students to gain work experience in the USA after graduation."
    },
    {
        question: "Why is everyone talking about the 3-year OPT benefit?",
        answer: "Because eligible STEM graduates can potentially work in the USA for up to three years after graduation through OPT and STEM OPT extensions."
    },
    {
        question: "Can I work in the USA after graduation?",
        answer: "Upon graduation students may apply for 3 Year OPT/STEM OPT(Post study work visa) as per US Visa and Immigration requirements."
    },
    {
        question: "What jobs can I get after completing this program?",
        answer: "Possible career paths include:\nData Scientist \nData Analyst \nAI Engineer \nMachine Learning Engineer \nBusiness Intelligence Analyst \nData Engineer \nAnalytics Consultant"
    },
    {
        question: "Which companies hire Data Science graduates?",
        answer: "Graduates work in industries such as:\nIT and software services\n• Banking and financial services\n• Healthcare and life sciences\n• Retail and e-commerce\n• Manufacturing\n• Automotive\n• Consulting\n• Cybersecurity\n• AI and analytics startups\n• Government and public policy"
    },
    {
        question: "Is Livingston a safe place for international students?",
        answer: "Yes. UWA is located in Livingston, Alabama, a peaceful small university town with dedicated campus police and a supportive student environment."
    },
    {
        question: "How big are the classes?",
        answer: "UWA is known for smaller class sizes and personalized faculty interaction compared to many larger universities."
    },
    {
        question: "What support will I receive after reaching the USA?",
        answer: "In this Sona-UWA Program, upon reaching UWA students receive assistance related to:\nOrientation \nHousing guidance \nCampus services \nAcademic advising \nStudent life resources"
    },
    {
        question: "How do I apply for this program?",
        answer: "You can submit your application through SCALE, where your academic profile and eligibility will be reviewed before progressing through the admissions process. Apply now (click button)"
    },
    {
        question: "What documents do I need?",
        answer: "Common documents include:\nPassport copy\n• Bachelor's degree transcripts\n• Degree certificate / provisional certificate\n• English language proficiency score, if applicable\n• Resume / CV, if required\n• Statement of purpose, if required\n• Financial documents / bank statements\n• Sponsor letter or financial support documents\n• Visa documentation after admission\n• Medical / immunization records, if required"
    },
    {
        question: "What if my visa is delayed or rejected?",
        answer: "If a student is unable to travel due to visa-related reasons or chooses to continue from India, the second-year academic delivery may be facilitated through a UWA-supported mechanism, subject to UWA's written approval and academic regulations."
    },
    {
        question: "Can working professionals apply?",
        answer: "Yes. The program is suitable for professionals looking to upskill, reskill or transition into Data Science, Analytics, AI, and Business Intelligence careers."
    },
    {
        question: "Why should I choose this pathway instead of directly joining a U.S. university?",
        answer: "The Sona UWA International pathway combines:\nLower Cost (up to 75% cost savings)\nInternational Degree from the University of West Alabama\nU.S. Campus Experience\n3 Year STEM OPT Opportunity\nGlobal Career Opportunity"
    },
    {
        question: "Will there be practical projects during the programme?",
        answer: "Yes. Students work on applied projects, case studies, assignments, and a capstone/thesis project designed to develop real-world data science skills and problem-solving capabilities."
    },
    {
        question: "Will I gain hands-on experience with Machine Learning?",
        answer: "Yes. Machine Learning and Deep Learning fundamentals are core components of the curriculum, helping students understand predictive analytics, AI applications, and model development."
    },
    {
        question: "Will the programme help me build a portfolio for job applications?",
        answer: "Yes. Through projects, assignments, analytics work, and the final capstone/thesis project, students can build a portfolio that showcases their technical and analytical skills to potential employers. \nAdditionally, Career Development Centres at SCALE & UWA will help the students to prepare the portfolio for the job application."
    },
    {
        question: "Is there a research component in the programme?",
        answer: "Yes. Students complete a Capstone Project or Thesis as part of the programme requirements, allowing them to apply data science concepts to real-world challenges."
    },
    {
        question: "When do students move to the USA?",
        answer: "Students move to the USA after successfully completing the first year at SCALE and meeting all academic, admission, and visa requirements established by the University of West Alabama."
    },
    {
        question: "Will SCALE help me with the transition to the USA?",
        answer: "Yes. Students receive support regarding programme progression, documentation guidance, and preparation for their academic transition to the University of West Alabama."
    },
    {
        question: "Will I experience U.S. classroom learning and teaching methods?",
        answer: "Yes. Students complete their second year on campus at UWA, where they experience American teaching methodologies, classroom discussions, project-based learning, and academic culture. \nAdditionally, the student study UWA approved curriculum at the first year at SCALE which follows UWA teaching methodology and standards."
    },
    {
        question: "Will I interact with international students from different countries?",
        answer: "Yes. UWA hosts students from diverse backgrounds, allowing students to develop global exposure, cross-cultural communication skills, and international professional networks."
    },
    {
        question: "Do I need to arrange housing myself in the USA?",
        answer: "Students under Sona UWA 1+1 International Pathway Program have the housing included. \n\nUWA also provides information, resources, and guidance regarding housing options, campus accommodation, and student living arrangements to help students settle comfortably."
    },
    {
        question: "I have never travelled abroad before. Is this programme suitable for me?",
        answer: "Absolutely! One of the biggest advantages of the Sona UWA International pathway program is that students begin their journey in Bengaluru, giving them time to develop confidence and prepare for international education before relocating to the USA."
    },
    {
        question: "Will I experience culture shock when I move to the USA?",
        answer: "Spending the first year in India allows students additional time to prepare academically, emotionally, and culturally before transitioning to life in the United States."
    },
    {
        question: "What if I am nervous about speaking English in an international classroom?",
        answer: "Many international students share this concern. Through presentations, projects, classroom discussions, and interaction with faculty and peers, students gradually improve their communication and professional confidence."
    },
    {
        question: "Can I build a professional network while studying?",
        answer: "Yes. Students interact with professors, alumni, classmates, industry professionals, and international students, helping them build valuable academic and professional connections."
    },
    {
        question: "Why is Data Science considered a future-ready career?",
        answer: "Data is now at the center of decision-making across industries. Organizations increasingly depend on data scientists and analysts to improve efficiency, drive innovation, and create business value, making Data Science one of the most sought-after career paths globally."
    },
    {
        question: "Will Artificial Intelligence (AI) replace Data Scientists?",
        answer: "AI is a powerful tool, but organizations still require skilled professionals who can understand business problems, interpret results, validate models, and make strategic decisions. Data Scientists remain critical in the AI-driven world."
    },
    {
        question: "What makes this pathway different from a regular master's programme?",
        answer: "The Sona UWA 1+1 International pathway combines the advantages of studying in both India and the USA. Students benefit from lower costs, gradual international exposure, access to U.S. education, industry-relevant skills, and the opportunity to earn a U.S. master's degree through a structured pathway model."
    },
    {
        question: "What is a STEM-designated programme?",
        answer: "STEM stands for Science, Technology, Engineering, and Mathematics. The MS in Data Science at UWA is a STEM-designated programme designed to develop advanced analytical, technical, and problem-solving skills."
    },
    {
        question: "Can I complete both years of the programme in India?",
        answer: "In certain situations, students who are unable to travel to the USA due to visa-related reasons or other approved circumstances may have the opportunity to complete the second year through a UWA-supported India delivery mechanism. This option is subject to UWA approval, academic regulations, and programme policies."
    },
    {
        question: "Are scholarships available for students in this programme?",
        answer: "Yes. Eligible students may be considered for scholarships up to $5000 offered by the University of West Alabama (UWA) subject to university policies, eligibility criteria, and approval. This is applicable for year 2 at UWA."
    },
    {
        question: "Is the scholarship guaranteed for every student?",
        answer: "No. Scholarships are not guaranteed. They are awarded based on factors such as academic performance, application review, eligibility requirements, and availability of funds. \nHowever, students under Sona UWA 1+1 International Pathway Program will be preferred for the scholarship."
    },
    {
        question: "How much scholarship can a student receive?",
        answer: "Eligible students may receive scholarships of up to USD 2,500 per semester during the third and fourth semesters at UWA, subject to university approval and scholarship policies."
    }
];



// ─── Main Page ───────────────────────────────────────────────────────────────
export default function FaqsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFAQs = FAQ_ITEMS.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
      {/* Hero */}
<section className="bg-gray-50 py-12 lg:py-16">
    <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-[60%]">
                <div className="inline-flex items-center gap-2 bg-[#AC1F2D]/10 text-[#AC1F2D] text-[11px] tracking-[1.2px] uppercase py-1.5 px-4 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-[#AC1F2D] rounded-full"></span>
                    Got Questions? We Have Answers
                </div>
                <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 font-bold mb-4 leading-tight">
                    Frequently Asked <span className="text-[#AC1F2D]">Questions</span>
                </h1>
                <p className="text-gray-600 text-base lg:text-lg max-w-[600px] leading-relaxed">
                    Everything you need to know about the{" "}
                    <strong className="text-[#AC1F2D] text-lg md:text-xl">MS in Data Science (1+1 International Pathway)</strong> — from admissions to graduation.
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

                

                  

                        {/* FAQ Section */}
                        <motion.section
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-12"
                            aria-labelledby="faq-heading"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-3 border-b-2 border-[#f5e8e0]">
                                <h2 id="faq-heading" className="font-serif text-xl text-[#AC1F2D] font-bold">
                                    Frequently Asked Questions
                                </h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search FAQs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full md:w-72 px-4 py-2 pr-10 border border-[#e0d6ce] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#AC1F2D]/30 focus:border-[#AC1F2D]"
                                    />
                                    <svg
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="bg-white border border-[#e0d6ce] rounded-lg overflow-hidden shadow-sm">
                                {filteredFAQs.length === 0 ? (
                                    <div className="py-12 text-center text-[#5a5652]">
                                        No matching questions found. Try a different search term.
                                    </div>
                                ) : (
                                    filteredFAQs.map((item, index) => (
                                        <FAQItem
                                            key={index}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openIndex === index}
                                            onClick={() => toggleFAQ(index)}
                                        />
                                    ))
                                )}
                            </div>

                        </motion.section>

                    </div>
                </div>
            </div>
        </>
    );
}