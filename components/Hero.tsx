

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MessageCircle, BookOpen, Globe, Clock3, GraduationCap, BadgePercent, BriefcaseBusiness, Plane } from "lucide-react";

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

        {/* Reduced height container - adjusted to move content up */}
        <div className="min-h-[calc(70vh-65px)] md:min-h-[calc(70vh-128px)] flex items-center -mt-8 md:-mt-12 lg:-mt-16">
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
              <button className="bg-[#078671] hover:bg-[#067864] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 transition text-xs sm:text-sm rounded-md">
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
            <div className="my-5 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              {/* Heading */}
              <div className="px-4 py-2 bg-white">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8c1d32]">
                  Programme at a Glance
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-x divide-y lg:divide-y-0 divide-gray-100">

                {/* Credits */}
                <div className="px-3 py-3 text-center">
                  <BookOpen className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-900">30cr</div>
                  <div className="text-[11px] text-gray-400">Graduate Credits</div>
                </div>

                {/* Duration */}
                <div className="px-3 py-3 text-center">
                  <Clock3 className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-900">2yr</div>
                  <div className="text-[11px] text-gray-400">Duration</div>
                </div>

                {/* OPT */}
                <div className="px-3 py-3 text-center">
                  <Globe className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-900">3yr</div>
                  <div className="text-[11px] text-gray-400">OPT Duration</div>
                </div>

                {/* Savings */}
                <div className="px-3 py-3 text-center">
                  <BadgePercent className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-lg font-semibold text-gray-900">42%</div>
                  <div className="text-[11px] text-gray-400">Cost Savings</div>
                </div>

                {/* Year 1 - India */}
                <div className="px-3 py-3 text-center">
                  <GraduationCap className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900 flex items-center justify-center gap-1">
                    SCALE
                    <span className="inline-flex items-center">
                      <img
                        src="https://flagcdn.com/w20/in.png"
                        alt="India flag"
                        className="w-4 h-3 object-cover rounded-sm"
                      />
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400">Year 1 • India</div>
                </div>

                {/* Year 2 - USA */}
                <div className="px-3 py-3 text-center">
                  <Plane className="w-4 h-4 text-[#8c1d32] mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900 flex items-center justify-center gap-1">
                    UWA
                    <span className="inline-flex items-center">
                      <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="USA flag"
                        className="w-4 h-3 object-cover rounded-sm"
                      />
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400">Year 2 • USA</div>
                </div>

                {/* Career */}
                <div className="px-3 py-3 text-center bg-gradient-to-br from-gray-50 to-white">
                  <BriefcaseBusiness className="w-4 h-4 text-green-600 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">US Career</div>
                  <div className="text-[11px] text-gray-400">OPT / STEM</div>
                </div>

              </div>
            </div>


          </div>




        </div>
      </div>
    </section>
  );
}