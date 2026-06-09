import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Clock,
  Globe,
  DollarSign,
  PiggyBank,
  TrendingDown
} from "lucide-react";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  });

  const fadeIn = (delay = 0, scale = 1) => ({
    initial: { opacity: 0, scale: scale === 1 ? 0.95 : scale },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: scale === 1 ? 0.95 : scale },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const slideInLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  });

  const slideInRight = (delay = 0) => ({
    initial: { opacity: 0, x: 60 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  });

  // Two Large Highlight Cards/Statistics
  const HighlightStats = [
    {
      mainNumber: "1+1",
      subText: "Program Structure",
      description: "1 Year in India + 1 Year in USA",
      icon: BookOpen,
      gradient: "from-[#8c1d32] to-[#c72a48]",
      bgGradient: "from-rose-50 to-red-50"
    },
    {
      mainNumber: "~₹72 Lakhs",
      subText: "Estimated Cost Savings",
      description: "Compared to traditional 2-year USA route",
      icon: PiggyBank,
      gradient: "from-[#078671] to-[#0a9b82]",
      bgGradient: "from-emerald-50 to-teal-50"
    }
  ];

  // Program comparison data
  const ProgramStats = [
    {
      number: "1+1",
      label: "Sona × UWA Route",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      gradient: "blue"
    },
    {
      number: "Lower",
      label: "Cost Exposure",
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
      gradient: "green"
    },
    {
      number: "Stronger",
      label: "Career Readiness",
      icon: Users,
      color: "from-orange-500 to-red-500",
      gradient: "orange"
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-16 sm:py-20 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#8c1d32] rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#8c1d32] rounded-full blur-3xl"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

        {/* ── LEFT: Stacked Images + Two Large Highlight Cards ── */}
        <div className="flex-1 w-full">
          {/* Images Stack */}
          <motion.div
            {...slideInLeft(0.1)}
            className="relative w-full max-w-[480px] mx-auto lg:mx-0 h-[420px] sm:h-[500px] mb-8"
          >
            {/* Back image */}
            <motion.div
              {...fadeIn(0.15, 0.9)}
              className="absolute top-0 left-0 w-[58%] sm:w-[55%] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl z-10"
            >
              <Image
                src="/homeimages/found1.webp"
                alt="University campus"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Front image */}
            <motion.div
              {...fadeIn(0.3, 0.95)}
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 right-0 w-[62%] sm:w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-20 ring-4 ring-white/50"
            >
              <Image
                src="/homeimages/found3.webp"
                alt="Founder portrait"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Circular badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -30 }}
              transition={{ duration: 0.8, ease: "backOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="absolute top-[-2%] right-[4%] z-30 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] cursor-pointer"
            >
              <svg viewBox="0 0 130 130" className="w-full h-full animate-spin-slow">
                <defs>
                  <path id="circle-path" d="M 65,65 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0" />
                </defs>
                <text fontSize="11" fontFamily="serif" letterSpacing="2.8" fill="#1a1a1a" fontWeight="500">
                  <textPath href="#circle-path" startOffset="0%">
                    STUDY IN INDIA. GRADUATE IN  U.S. •
                  </textPath>
                </text>
              </svg>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <rect x="8" y="22" width="32" height="18" rx="2" fill="#8c1d32" opacity="0.15" />
                    <rect x="12" y="18" width="24" height="16" rx="1" fill="#8c1d32" />
                    <rect x="15" y="21" width="18" height="10" rx="1" fill="white" opacity="0.3" />
                    <polygon points="24,6 4,16 24,22 44,16" fill="#1a1a1a" />
                    <line x1="40" y1="16" x2="40" y2="30" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="40" cy="32" r="3" fill="#8c1d32" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TWO LARGE HIGHLIGHT CARDS */}
          {/* TWO LARGE HIGHLIGHT CARDS - FLEX DIRECTION (SIDE BY SIDE) */}
          <motion.div
            {...slideInLeft(0.3)}
            className="flex flex-row flex-wrap gap-6 max-w-full mx-auto lg:mx-0"
          >
            {HighlightStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 min-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  {/* Icon Circle - Flat */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.mainNumber}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {stat.subText}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Cost Breakdown - No Card, Just Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full mt-2"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="text-gray-400">Traditional</span>
                <span className="text-gray-400 line-through">~₹95L</span>

                <span className="text-gray-300">→</span>

                <span className="text-gray-600 font-medium">1+1 Route</span>
                <span className="font-bold text-[#078671]">~₹23L</span>

                <span className="text-green-500 text-xs font-semibold">Save ₹72L</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT: Text Content with Program Focus ── */}
        <div className="flex-1 w-full">
          {/* Since label */}
          <motion.p
            {...slideInRight(0.15)}
            className="text-[#8c1d32] text-xs sm:text-sm font-semibold tracking-[3px] uppercase mb-4 inline-block"
          >
            Why This Program?
          </motion.p>

          {/* Heading */}
          <motion.h2
            {...slideInRight(0.25)}
            className="font-serif text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] sm:leading-[1.15] lg:leading-[1.08] text-black mb-4 sm:mb-6 sm:px-0"
          >
            A Smarter Route to
            <br className="hidden sm:block" />
            <span className="inline-block sm:inline ml-1 sm:ml-0"> U.S.</span>{" "}
            <motion.span
              className="text-[#8c1d32] underline underline-offset-4 sm:underline-offset-6 decoration-2 sm:decoration-[3px] inline-block whitespace-nowrap sm:whitespace-normal"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Higher Education
            </motion.span>
          </motion.h2>

          {/* Program Mission Statement */}
          <motion.div
            {...slideInRight(0.35)}
            className="mb-6"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              The <span className="font-semibold text-[#8c1d32]">international pathway to University of West Alabama offered at SCALE by Sona Star</span> helps students reduce cost exposure,
              prepare better, and enter the U.S. academic system with stronger technical,
              communication, and career readiness.
            </p>
          </motion.div>

          {/* Route Comparison Card */}
          <motion.div
            {...slideInRight(0.48)}
            className="
              mt-6
              overflow-hidden
              bg-white
              shadow-lg
              border
              border-gray-200
              rounded-tl-[0px]
              rounded-tr-[32px]
              rounded-bl-[32px]
              rounded-br-[0px]
            "
          >
            <div className="grid md:grid-cols-2">
              {/* Left - Traditional Route */}
              <div className="bg-gray-50 p-5 border-b md:border-b-0 md:border-r border-gray-200">
                <h3 className="text-[#8c1d32] font-bold text-lg mb-4">
                  Traditional 2-Year USA Route
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Student moves to the USA immediately.</li>
                  <li>• Higher first-year international living cost exposure.</li>
                  <li>• Direct cultural and academic transition.</li>
                  <li>• Higher initial loan and forex burden.</li>
                  <li>• Rapid adjustment to U.S. academic expectations.</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Total estimated cost: <span className="font-bold text-gray-700 line-through">~₹95 Lakhs</span>
                  </p>
                </div>
              </div>

              {/* Right - 1+1 Route */}
              <div className="p-5 bg-gradient-to-br from-white to-emerald-50/30">
                <h3 className="text-[#078671] font-bold text-lg mb-4">
                  SONA × UWA 1+1 Route
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Complete Year 1 at Sona Star, SCALE in Bengaluru.</li>
                  <li>• Reduce one full year of U.S. living costs.</li>
                  <li>• Additional technical & communication preparation.</li>
                  <li>• Phased financial planning for families.</li>
                  <li>• Stronger readiness before progressing to UWA.</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-emerald-200">
                  <p className="text-xs font-semibold text-[#078671]">
                    ✓ Save ~₹72 Lakhs compared to traditional route
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            {...slideInRight(0.65)}
            className="mt-6"
          >
            <Link href="/admission/about-program">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  bg-[#078671]
                  text-white
                  font-bold
                  uppercase
                  tracking-wide
                  text-xs sm:text-sm md:text-base lg:text-lg
                  px-6 sm:px-8 md:px-10 lg:px-12
                  py-2 sm:py-2 md:py-3
                  rounded-tr-[16px] sm:rounded-tr-[20px] md:rounded-tr-[24px]
                  rounded-bl-[16px] sm:rounded-bl-[20px] md:rounded-bl-[24px]
                  rounded-tl-none
                  rounded-br-none
                  w-auto
                  inline-flex
                  items-center
                  justify-center
                  hover:bg-[#067864]
                  transition-all
                  duration-300
                  shadow-md
                "
              >
                Explore Program →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow { 
          animation: spin-slow 18s linear infinite;
        }
        .border-gradient {
          border-image: linear-gradient(to bottom, #8c1d32, #c72a48);
          border-image-slice: 1;
        }
      `}</style>
    </section>
  );
}