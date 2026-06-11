import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, FileText } from "lucide-react";

export default function ProgramStructure() {
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
                    className="text-center mb-6 sm:mb-8 md:mb-10"
                >
                    <p className="text-[#8c1d32] text-[10px] sm:text-sm font-semibold tracking-[4px] sm:tracking-[5px] uppercase mb-2 ">
                        Curriculum Snapshot
                    </p>
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[40px]  font-serif text-gray-900 mb-2 leading-tight">
                        <span className="bg-gradient-to-r from-[#8c1d32] to-[#c44563] bg-clip-text text-transparent font-black drop-shadow-sm">
                            30-Credit
                        </span>
                        <br className="sm:hidden" />
                        <span className="inline-block mt-1 sm:mt-0 ml-2"> Program Structure</span>
                    </h2>

                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
                        <p className="text-sm sm:text-lg text-gray-600 italic">
                            One Program. Two Learning Environments.
                        </p>
                        <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
                    </div>

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
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-start">

                                {/* Year Badge */}
                                <div className="relative shrink-0">
                                    <div className="bg-gradient-to-r from-[#05695A] via-[#078671] to-[#0AA88F] text-white px-4 sm:px-5 py-1 rounded-r-full rounded-l-md shadow-lg">
                                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
                                            Year 01
                                        </span>
                                    </div>

                                    {/* Ribbon Pointer */}
                                    <div className="absolute left-0 top-full w-0 h-0 border-l-[8px] sm:border-l-[10px] border-r-[8px] sm:border-r-[10px] border-t-[8px] sm:border-t-[10px] border-l-transparent border-r-transparent border-t-[#045247]" />
                                </div>

                                {/* Location Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                                        {/* India Flag */}
                                        <img
                                            src="/homeimages/india.png"

                                            alt="India Flag"
                                            className="w-6 h-4 sm:w-7 sm:h-5 rounded-sm border border-gray-200 shadow-sm object-cover"
                                        />



                                        {/* Heading */}
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                                            Bengaluru, India
                                        </h3>
                                    </div>

                                    {/* Sub Text */}
                                    <p className="mt-2 text-xs sm:text-sm text-gray-500 sm:ml-10">
                                        SCALE Campus · 15 Credits
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <ul className="space-y-3">
                                {[
                                    { code: "DS 500", name: "Introduction to Data Science", credits: "3 cr" },
                                    { code: "DS 510", name: "Data Science Tools and Techniques", credits: "3 cr" },
                                    { code: "DS 520", name: "Introduction to Programming for Data Science", credits: "3 cr" },
                                    { code: "DS 530", name: "Data Analysis in R", credits: "3 cr" },
                                    { code: "DS 540", name: "Data Exploration and Visualization", credits: "3 cr" }
                                ].map((course, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                                        className="flex justify-between items-start gap-4 text-gray-600 text-sm sm:text-base hover:bg-gray-50/50 px-2 py-1 rounded-md transition-colors"
                                    >
                                        <div className="flex items-start gap-3 flex-1">
                                            <span className="text-[#8c1d32] font-mono font-semibold min-w-[60px]">{course.code}</span>
                                            <span className="text-gray-700">{course.name}</span>
                                        </div>
                                        {/* <span className="text-gray-400 text-xs font-mono whitespace-nowrap">{course.credits}</span> */}
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
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-start">

                                {/* Year Badge */}
                                <div className="relative shrink-0">
                                    <div className="bg-gradient-to-r from-[#05695A] via-[#078671] to-[#0AA88F] text-white px-4 sm:px-5 py-1 rounded-r-full rounded-l-md shadow-lg">
                                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
                                            Year 02
                                        </span>
                                    </div>

                                    {/* Ribbon Pointer */}
                                    <div className="absolute left-0 top-full w-0 h-0 border-l-[8px] sm:border-l-[10px] border-r-[8px] sm:border-r-[10px] border-t-[8px] sm:border-t-[10px] border-l-transparent border-r-transparent border-t-[#045247]" />
                                </div>

                                {/* Location Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                                        {/* USA Flag */}
                                        <img
                                            src="/homeimages/usa.png"
                                            alt="USA Flag"
                                            className="w-6 h-4 sm:w-7 sm:h-5 rounded-sm border border-gray-200 shadow-sm object-cover"
                                        />

                                        {/* Heading */}
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                                            Livingston, Alabama, USA
                                        </h3>
                                    </div>

                                    {/* Sub Text */}
                                    <p className="mt-2 text-xs sm:text-sm text-gray-500 sm:ml-10">
                                        UWA Campus · 15 Credits
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-4">
                            <ul className="space-y-3">
                                {[
                                    { code: "DS 550", name: "Business Intelligence and Statistical Modeling", credits: "3 cr" },
                                    { code: "DS 560", name: "Predictive Modeling and Big Data Analytics", credits: "3 cr" },
                                    { code: "DS 570", name: "Fundamentals of Machine and Deep Learning", credits: "3 cr" },
                                    { code: "DS 580", name: "Fundamentals of Cybersecurity Data Science", credits: "3 cr" },
                                    { code: "DS 590", name: "Data Science Capstone / Thesis", credits: "3 cr" }
                                ].map((course, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                                        className="flex justify-between items-start gap-4 text-gray-600 text-sm sm:text-base hover:bg-gray-50/50 px-2 py-1 rounded-md transition-colors"
                                    >
                                        <div className="flex items-start gap-3 flex-1">
                                            <span className="text-[#8c1d32] font-mono font-semibold min-w-[60px]">{course.code}</span>
                                            <span className="text-gray-700">{course.name}</span>
                                        </div>
                                        {/* <span className="text-gray-400 text-xs font-mono whitespace-nowrap">{course.credits}</span> */}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}