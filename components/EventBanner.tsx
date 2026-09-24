import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, X } from "lucide-react";

export default function EventBanner() {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <AnimatePresence>
            {show && (
                <motion.section
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 120 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-30 w-full bg-white border-y border-gray-100"
                >
                    {/* Top accent bar */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-[#8c1d32] via-[#c02a44] to-[#8c1d32]" />

                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2.5">
                        <div className="relative flex flex-col md:flex-row md:items-center gap-2.5 md:gap-5">
                            {/* Left: Label + Title */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="inline-flex items-center bg-[#8c1d32] text-white text-[8px] sm:text-[9px] font-bold tracking-[0.18em] uppercase px-1.5 py-[2px] rounded">
                                        Upcoming Event
                                    </span>
                                    <span className="text-[9px] sm:text-[10px] font-semibold text-[#078671] uppercase tracking-wider truncate">
                                        Now Open — Salem &amp; Bangalore
                                    </span>
                                </div>
                                <h3 className="font-serif text-[13px] sm:text-[15px] md:text-base font-bold text-gray-900 leading-tight">
                                    U.S. Master's Degree Spot Admissions
                                </h3>
                                <p className="text-[10px] sm:text-[11px] text-gray-500 mt-[1px] truncate">
                                    MS in Data Science (STEM) — International 1+1 Pathway
                                </p>
                            </div>

                            {/* Middle: Dates */}
                            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={12} className="text-[#8c1d32] flex-shrink-0" />
                                    <div className="leading-tight">
                                        <p className="text-[10px] sm:text-[11px] font-bold text-gray-800">
                                            Salem
                                        </p>
                                        <p className="text-[9px] sm:text-[10px] text-gray-500">
                                            6 Oct 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-6 bg-gray-200" />

                                <div className="flex items-center gap-1.5">
                                    <Calendar size={12} className="text-[#8c1d32] flex-shrink-0" />
                                    <div className="leading-tight">
                                        <p className="text-[10px] sm:text-[11px] font-bold text-gray-800">
                                            Bangalore
                                        </p>
                                        <p className="text-[9px] sm:text-[10px] text-gray-500">
                                            8 Oct 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <a
                                        href="/events/us-masters-degree-spot-admissions-salem-bangalore"
                                        className="
      inline-flex
      items-center
      justify-center
      bg-[#078671]
      text-white
      font-bold
      uppercase
      tracking-wide
      text-[10px] sm:text-[11px]
      px-4 sm:px-5
      py-1.5 sm:py-2
      rounded-tr-[14px] sm:rounded-tr-[16px]
      rounded-bl-[14px] sm:rounded-bl-[16px]
      rounded-tl-none
      rounded-br-none
      hover:bg-[#067864]
      transition-all
      duration-300
      shadow-md
      whitespace-nowrap
    "
                                    >
                                        Know More →
                                    </a>

                                    <button
                                        onClick={() => setShow(false)}
                                        className="w-6 h-6 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
                                        aria-label="Close event banner"
                                    >
                                        <X size={14} strokeWidth={2.5} />
                                    </button>
                                </div>
                            </div>

                            {/* Right: CTA + Close */}

                        </div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}