
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, FileText } from "lucide-react";

export default function ProgrammeStructure() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            id="structure"
            ref={ref}
            className="w-full py-8 bg-white"
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-serif text-gray-900 mb-2">
                        Programme Structure
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        One Programme. Two Learning Environments.
                    </p>
                    <div className="w-16 h-0.5 bg-[#8c1d32] mx-auto mt-3" />
                </motion.div>

                {/* Two column layout - No cards, just content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Year 1 - SCALE, Bengaluru */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="mb-4">
                            <div className="flex items-center gap-3 mb-1">
                                <MapPin size={20} className="text-[#8c1d32]" />
                                <h3 className="text-2xl font-medium text-gray-900">
                                    Year 1: SCALE, Bengaluru
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400 pl-8">Foundations & Readiness</p>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <ul className="space-y-2">
                                {[
                                    "Data Science foundations and applied analytics orientation",
                                    "Python, R, SQL, visualization, and ML readiness",
                                    "Academic writing and presentation confidence",
                                    "Project portfolio, LinkedIn, GitHub, and resume building",
                                    "U.S. documentation, visa, and transition preparation"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                                        className="flex items-start gap-3 text-gray-600 text-sm sm:text-base"
                                    >
                                        <span className="text-[#8c1d32]  font-medium mt-0.5">—</span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Year 2 - UWA, Alabama, USA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="mb-4">
                            <div className="flex items-center gap-3 mb-1">
                                <GraduationCap size={20} className="text-[#8c1d32]" />
                                <h3 className="text-2xl font-medium text-gray-900">
                                    Year 2: UWA, Alabama, USA
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400 pl-8">Advanced Studies & Campus Experience</p>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <ul className="space-y-2">
                                {[
                                    "Completion of UWA-approved academic requirements",
                                    "Advanced coursework and applied project work",
                                    "Capstone, thesis, or project-based academic experience",
                                    "International campus exposure",
                                    "Eligible U.S. career pathway awareness, subject to rules"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                                        className="flex items-start gap-3 text-gray-600 text-base"
                                    >
                                        <span className="text-[#8c1d32] font-medium mt-0.5">—</span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Simple separator before note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 pt-6 border-t border-gray-100"
                >
                    <div className="flex gap-3 items-start">
                        <FileText size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-500 leading-relaxed">
                            <span className="font-medium text-gray-700">Note:</span> Progression to UWA requires meeting admission requirements, successful completion of prescribed academic requirements, documentation, financial requirements, visa approval, and applicable university and immigration policies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}