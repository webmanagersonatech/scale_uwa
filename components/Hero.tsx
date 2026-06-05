"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

const slides = [
  {
    image: "/homeimages/hero1.jpeg",
    badge: "Start in Bengaluru. Complete in Alabama.",
    title: "Earn Your MS in Data Science from the University of West Alabama, USA",
    description:
      "A structured 1+1 international pathway for students aspiring to build global careers in Data Science, Artificial Intelligence, Machine Learning, Analytics, and emerging technology domains.",
  },
  {
    image: "/homeimages/hero2.jpeg",
    badge: "STEM-aligned Curriculum",
    title: "Future-Ready Data Science Education",
    description:
      "Gain hands-on experience with cutting-edge tools and methodologies that prepare you for leadership roles in AI, ML, and analytics across global industries.",
  },
  {
    image: "/homeimages/hero3.jpeg",
    badge: "Global Career Pathway",
    title: "From Bengaluru to Alabama — Your Journey to Success",
    description:
      "Study one year at SCALE, Bengaluru, then complete your Master's at the University of West Alabama, USA. Build international credentials and a global professional network.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="overview" className="relative overflow-hidden pt-[65px] md:pt-[128px]">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Image Overlay — stronger on mobile so text is always readable */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/10 z-[5]" />

      {/* White Fade — only on sm+ so mobile gets full overlay instead */}
      <div
        className="absolute inset-0 z-10 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg,#ffffff 0%,#ffffff 20%,rgba(255,255,255,0.96) 35%,rgba(255,255,255,0.82) 50%,rgba(255,255,255,0.45) 65%,rgba(255,255,255,0) 85%)",
        }}
      />

      {/* Mobile gradient — bottom-up fade so text sits on a readable base */}
      <div
        className="absolute inset-0 z-10 sm:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.90) 40%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Decorative Rings — hidden on mobile to avoid overflow */}
        <div className="hidden md:block absolute left-[-260px] bottom-[-260px] w-[720px] h-[720px] rounded-full border-[30px] border-black/5 pointer-events-none" />
        <div className="hidden md:block absolute left-[-180px] bottom-[-180px] w-[560px] h-[560px] rounded-full border-[20px] border-black/5 pointer-events-none" />
        <div className="hidden md:block absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] rounded-full border-[10px] border-black/5 pointer-events-none" />

        {/* Reduced height container */}
        <div className="min-h-[calc(70vh-65px)] md:min-h-[calc(70vh-128px)] flex items-center">
          {/* Constrain width: full on mobile, 680px on md, 880px on xl */}
          <div className="w-full max-w-full sm:max-w-[680px] xl:max-w-[880px]">
            <motion.p
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase text-[#8c1d32] font-semibold tracking-[2px] text-xs sm:text-sm mb-4"
            >
              {slides[current].badge}
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[current].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] leading-[1.25] sm:leading-[1.2] text-black font-"
              >
                {slides[current].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-700 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl leading-relaxed"
              >
                {slides[current].description}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons - reduced padding */}
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <button className="bg-[#078671] hover:bg-[#08917a] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2  transition text-xs sm:text-sm rounded-md">
                APPLY NOW
                <ArrowRight size={16} />
              </button>

              <button className="border border-gray-400 bg-white/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition text-xs sm:text-sm rounded-md">
                <Download size={16} />
                DOWNLOAD BROCHURE
              </button>

              <button className="border border-gray-400 bg-white/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition text-xs sm:text-sm rounded-md">
                <MessageCircle size={16} />
                SPEAK TO A COUNSELLOR
              </button>
            </div>

            {/* Programme Snapshot — Compact Stats Section - reduced spacing */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6">
              {/* Elegant divider */}
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Programme Snapshot
                  </span>
                </div>
              </div>

              {/* Modern grid layout with subtle dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                <div className="relative group">
                  {/* Animated hover indicator */}
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Programme
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    MS in Data Science Pathway
                  </p>
                </div>

                {/* Vertical divider between items (desktop only) */}
                <div className="hidden lg:block w-px h-10 bg-gray-200 absolute left-1/4 transform -translate-x-1/2"></div>

                <div className="relative group">
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Model
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    1 Year India + 1 Year USA
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Year 1
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    SCALE, Bengaluru
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Year 2
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    University of West Alabama
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Discipline
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    STEM-aligned Data Science
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -top-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#8c1d32] to-[#8c1d32]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    Ideal For
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                    CS, IT, AI/ML, BCA, MCA, Science Graduates
                  </p>
                </div>
              </div>


            </div>


            {/* Career-Focused Data Science */}
            <div className=" pt-3 sm:pt-4 pb-2">
              {/* Left accent border */}
              <div className="relative pl-3 sm:pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8c1d32] via-[#8c1d32]/50 to-transparent"></div>

                <div className="flex flex-wrap justify-start gap-x-2 gap-y-2">
                  {[
                    "Public University in USA",
                    "1+1 International Pathway",
                    "Year 1 in Bengaluru",
                    "Year 2 in Alabama",
                    "Career-Focused Data Science"
                  ].map((tag, idx) => (
                    <div key={idx} className="relative">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#8c1d32] transition-colors duration-300 inline-block">
                        {tag}
                      </span>
                      {/* Dot separator for mobile */}
                      {idx < 4 && (
                        <span className="mx-2 text-gray-300 hidden sm:inline">•</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom divider with dot pattern */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#8c1d32]/30"></div>
                  <div className="w-1 h-1 rounded-full bg-[#8c1d32]/60"></div>
                  <div className="w-1 h-1 rounded-full bg-[#8c1d32]"></div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}