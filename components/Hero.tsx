import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, CircleHelp, MessageCircle, BookOpen, Globe, Clock3, GraduationCap, BadgePercent, BriefcaseBusiness, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import { BASE_PATH } from "../utils/config";

const slides = [
  {
    image: "/homeimages/hero1.webp",
    badge: "Global Career Pathway",
    title: "Start in India complete in the USA ",
    description:
      "Study one year at SCALE, Bengaluru, then complete your Master's at the University of West Alabama, USA. Build international credentials and a global professional network.",
  },
  {
    image: "/homeimages/hero2.jpg",
    badge: "Start in Bengaluru. Complete in Alabama.",
    title: "Earn Your MS in Data Science Program from the University of West Alabama, USA",
    description:
      "A structured 1+1 international pathway for students aspiring to build global careers in Data Science, Artificial Intelligence, Machine Learning, Analytics, and emerging technology domains.",
  },
  {
    image: "/homeimages/hero3.webp",
    badge: "STEM-aligned Curriculum",
    title: "First of it's kind Indo-US Partnership",
    description:
      "Gain hands-on experience with cutting-edge tools and methodologies that prepare you for leadership roles in AI, ML, and analytics across global industries.",
  },

];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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
            src={`${BASE_PATH}${slides[current].image}`}
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
        <div className="hidden md:block absolute left-[-260px] bottom-[-260px] w-[720px] h-[720px] rounded-full border-[30px] border-black/[0.02] pointer-events-none" />
        <div className="hidden md:block absolute left-[-180px] bottom-[-180px] w-[560px] h-[560px] rounded-full border-[20px] border-black/[0.02] pointer-events-none" />
        <div className="hidden md:block absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] rounded-full border-[10px] border-black/[0.02] pointer-events-none" />

        {/* Fixed height container to maintain consistent spacing */}
        <div className="min-h-[calc(70vh-65px)] md:min-h-[calc(70vh-128px)] flex items-center">
          {/* Constrain width: full on mobile, 680px on md, 880px on xl */}
          <div className="w-full max-w-full sm:max-w-[680px] xl:max-w-[880px]">
            {/* Fixed height content wrapper with flex column to maintain consistent spacing */}
            <div className="flex flex-col" style={{ minHeight: '320px', justifyContent: 'space-between' }}>
              <div>
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
                    className="font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] leading-[1.25] sm:leading-[1.2] text-black"
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
              </div>

              {/* CTA Buttons - reduced padding */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://hikaapp.sonastar.com/INS-0VVEACMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#078671] hover:bg-[#067864] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 transition text-xs sm:text-sm rounded-md"
                >
                  APPLY NOW
                  <ArrowRight size={16} />
                </a>

                <a
                  href={`${BASE_PATH}/homeimages/Brochure.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-400 bg-white/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition text-xs sm:text-sm rounded-md"
                >
                  <Download size={16} />
                  DOWNLOAD BROCHURE
                </a>

                <a
                  href="https://wa.me/919442592170?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20MS%20in%20Data%20Science%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-400 bg-white/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition text-xs sm:text-sm rounded-md"
                >
                  <MessageCircle size={16} />
                  SPEAK TO A COUNSELLOR
                </a>



                <a
                  href="https://hikabackend.sonastar.com/api/institutions/enquiry/INS-0VVEACMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-400 bg-white/80 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 font-semibold flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:border-black transition text-xs sm:text-sm rounded-md"
                >
                  <CircleHelp size={16} />
                  ENQUIRY NOW
                </a>
              </div>
            </div>
            <div className="my-5 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              {/* Heading */}
              <div className="px-4 py-2 bg-white border-b border-gray-100">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8c1d32]">
                  <span className="text-[18px]">MS in Data Science Program</span> at a Glance
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 divide-x divide-y lg:divide-y-0 divide-gray-100">
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <BookOpen className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-xl font-bold text-gray-900 leading-tight">30</div>
                  <div className="text-xs text-gray-500 mt-1">Credits</div>
                </div>
                {/* Duration */}
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <Clock3 className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-xl font-bold text-gray-900 leading-tight">2 Year</div>
                  <div className="text-xs text-gray-500 mt-1">Duration</div>
                </div>

                {/* OPT */}
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <Globe className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-xl font-bold text-gray-900 leading-tight">3 Year</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Post Study Work Visa
                  </div>
                  <div className="text-[10px] text-[#8c1d32] font-medium">
                    (STEM OPT)
                  </div>
                </div>

                {/* Savings */}
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <BadgePercent className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-xl font-bold text-gray-900 leading-tight">75%</div>
                  <div className="text-xs text-gray-500 mt-1">Cost Savings</div>
                </div>

                {/* Year 1 - India */}
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <GraduationCap className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-base font-semibold text-gray-900 flex items-center justify-center gap-1.5">
                    SCALE
                    <img
                      src="https://flagcdn.com/w20/in.png"
                      alt="India flag"
                      className="w-4 h-3 object-cover rounded-sm"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Year 1 • India</div>
                </div>

                {/* Year 2 - USA */}
                <div className="px-3 py-4 text-center flex flex-col items-center justify-center min-h-[110px]">
                  <Plane className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-base font-semibold text-gray-900 flex items-center justify-center gap-1.5">
                    UWA
                    <img
                      src="https://flagcdn.com/w20/us.png"
                      alt="USA flag"
                      className="w-4 h-3 object-cover rounded-sm"
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Year 2 • USA</div>
                </div>

                {/* Career */}
                <div className="px-3 py-4 text-center bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center min-h-[110px]">
                  <BriefcaseBusiness className="w-5 h-5 text-[#8c1d32] mb-2 flex-shrink-0" />
                  <div className="text-base font-semibold text-gray-900">US Career</div>
                  <div className="text-xs text-gray-500 mt-1">Data Science / STEM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
      </button>


    </section>
  );
}