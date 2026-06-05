import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Building2, TrendingUp } from "lucide-react";

export default function CareerOutcomes() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const roles = [
        "Data Scientist",
        "Data Analyst",
        "Business Intelligence Analyst",
        "Machine Learning Engineer",
        "AI Engineer",
        "Data Engineer",
        "Predictive Modelling Specialist",
        "Cybersecurity Data Analyst",
        "Data Visualization Specialist",
        "Statistical Analyst",
        "Product Analytics Associate",
        "Business Analytics Consultant",
    ];

    const industries = [
        "IT & Software Services",
        "Banking & Finance",
        "Healthcare & Life Sciences",
        "Retail & E-Commerce",
        "Consulting",
        "Cybersecurity",
        "AI & Analytics Startups",
        "Government & Policy",
        "Manufacturing",
        "Automotive",
    ];

    return (
        <section ref={ref} id ="careers" className="w-full py-12 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 ">



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <p className="text-[#8c1d32] text-[10px] sm:text-sm font-semibold tracking-[2px] uppercase mb-4">
                        Career Outcomes
                    </p>
                    <h2 className="font-serif text-gray-900 text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] max-w-[780px] mx-auto">
                        Roles You Can Target{" "}

                    </h2>
                    <p className="text-gray-500 text-base">
                        The MS in Data Science opens doors across high-growth sectors globally.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Left Column - Roles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gray-50  p-6 md:p-8"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                            <div className="p-2 bg-[#8c1d32]/10 rounded-lg">
                                <Briefcase size={20} className="text-[#8c1d32]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                 Career Pathways in Data Science & AI
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {roles.map((role, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 py-2 group cursor-default"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c1d32]/40 group-hover:bg-[#8c1d32] transition-colors" />
                                    <span className="text-gray-700 group-hover:text-gray-900 text-sm md:text-base transition-colors">
                                        {role}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Industries */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 p-6 md:p-8"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                            <div className="p-2 bg-[#8c1d32]/10 rounded-lg">
                                <Building2 size={20} className="text-[#8c1d32]" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Industries Hiring
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {industries.map((industry, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 py-2 group cursor-default"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c1d32]/40 group-hover:bg-[#8c1d32] transition-colors" />
                                    <span className="text-gray-700 group-hover:text-gray-900 text-sm md:text-base transition-colors">
                                        {industry}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-50 rounded-full">
                        <TrendingUp size="14" className="text-[#8c1d32]" />
                        <span className="text-xs text-gray-500">
                            High placement record across 100+ companies
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}