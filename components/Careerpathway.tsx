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
        <section ref={ref} id="careers" className="w-full py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-[500px_1fr] gap-16 items-start">


                    <div>
                        <p className="text-[#8c1d32] text-[10px] sm:text-sm font-semibold tracking-[3px] uppercase mb-6">
                            Career Outcomes
                        </p>

                        <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.1] text-gray-900 mb-6">
                           Global  Roles You Can Target
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            The MS in Data Science opens doors across high-growth sectors globally.
                        </p>
                    </div>

                    {/* RIGHT - ROLES */}
                    <div className="flex flex-wrap gap-3">
                        {roles.map((role, idx) => (
                            <div
                                key={idx}
                                className="
          px-5 py-3
          rounded-lg
          border border-[#8c1d32]/20
          bg-white
          text-gray-800
          text-sm
          font-medium
          hover:bg-[#8c1d32]/30
          hover:border border-[#8c1d32]
          hover:text-[#8c1d32]
          transition-all
        "
                            >
                                {role}
                            </div>
                        ))}
                    </div>

                </div>

                {/* FULL WIDTH INDUSTRIES */}
                <div className="mt-8 border-t border-gray-200 ">

                    <h3 className="uppercase tracking-[2px] text-sm font-semibold text-gray-800 mb-8 pt-8">
                        Industries Hiring
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-8">

                        {industries.map((industry, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 text-gray-700"
                            >
                                <span className="text-[#8c1d32] text-xs">▸</span>
                                <span>{industry}</span>
                            </div>
                        ))}

                    </div>

                </div>



            </div>
        </section>
    );
}