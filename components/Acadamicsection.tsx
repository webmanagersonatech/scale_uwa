import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqItems = [
  {
    number: "01",
    title: "Where is Year 1 conducted?",
    description: "Year 1 is conducted at SCALE, Bengaluru, India.",
    image: "/homeimages/acadamic1.webp",
  },
  {
    number: "02",
    title: "Where is UWA located?",
    description: "The University of West Alabama is located in Livingston, Alabama, USA.",
    image: "/homeimages/acadamic2.webp",
  },
  {
    number: "03",
    title: "Is visa guaranteed?",
    description: "No. Visa approval is solely at the discretion of the U.S. Embassy or Consulate.",
    image: "/homeimages/acadamic3.webp",
  },
  {
    number: "04",
    title: "Is OPT guaranteed?",
    description: "No. OPT, STEM OPT, employment, and H-1B outcomes are governed by U.S. immigration rules, employer requirements, and student eligibility.",
    image: "/homeimages/acadamic4.webp",
  },
  {
    number: "05",
    title: "Why choose the 1+1 model?",
    description: "It reduces one year of U.S. living cost exposure, gives students more time to prepare, and supports a smoother transition.",
    image: "/homeimages/acadamic1.webp",
  },
];

export default function AcademiesSection() {
  const [hovered, setHovered] = useState(0); // Default set to 0 (first FAQ)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="faq" className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 ">

        {/* Header */}
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
>
    <div className="inline-block">
        <p className="text-[#8c1d32] text-[10px] sm:text-xs font-semibold tracking-[3px] sm:tracking-[4px] uppercase relative mb-4 sm:mb-5">
            Common Questions
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-px bg-[#8c1d32]/40"></span>
        </p>
    </div>
    <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.2] sm:leading-tight text-black">
        Frequently Asked{" "}
        <span className="text-[#8c1d32] relative inline-block">
            Questions
            <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-[#8c1d32]/20 rounded-full"></span>
            <span className="absolute bottom-0 left-0 w-1/3 h-0.5 sm:h-1 bg-[#8c1d32] rounded-full"></span>
        </span>
    </h2>
</motion.div>

        {/* Two-column: list left, image right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch">

          {/* FAQ list */}
          <div className="w-full lg:w-[58%] flex flex-col">
            {faqItems.map((item, i) => {
              const active = hovered === i;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(i)} // Keep current on leave, don't reset
                  className="group relative flex items-start gap-6 sm:gap-10 py-7 sm:py-8 border-b border-gray-200 cursor-pointer flex-1"
                >
                  {/* Active left accent line */}
                  <motion.div
                    animate={{ scaleY: active ? 1 : 0, opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8c1d32] origin-top"
                  />

                  {/* Number */}
                  <span
                    className={`font-serif text-[48px] sm:text-[64px] leading-none select-none transition-colors duration-300 ${active ? "text-[#8c1d32]" : "text-gray-200"
                      }`}
                    style={{ minWidth: "80px" }}
                  >
                    {item.number}.
                  </span>

                  {/* Text */}
                  <div className="pt-2 flex-1">
                    <motion.h3
                      animate={{ x: active ? 6 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`font-serif text-[22px] sm:text-[28px] leading-snug mb-2 transition-colors duration-300 ${active ? "text-[#8c1d32]" : "text-black"
                        }`}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-[480px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile image (shows inline on small screens) */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        key="mobile-img"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute bottom-0 left-0 right-0 overflow-hidden"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Sticky image panel — desktop only */}
          <div className="hidden lg:flex w-[42%] items-stretch pl-10">
            <div className="sticky top-32 w-full max-w-[518px] aspect-[3/4] relative rounded-sm overflow-hidden bg-gray-100 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={faqItems[hovered].image}
                  initial={{ opacity: 0, scale: 1.06, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={faqItems[hovered].image}
                    alt={faqItems[hovered].title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay with faq title */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent"
                  >
                    <p className="text-white font-serif text-xl leading-snug">
                      {faqItems[hovered].title}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Item number watermark on image */}
              <AnimatePresence>
                <motion.span
                  key={`num-${hovered}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.18, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 left-5 font-serif text-[90px] leading-none text-white select-none pointer-events-none"
                >
                  {faqItems[hovered].number}.
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: show active image below list */}
        <div className="lg:hidden mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-${hovered}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-video relative rounded-sm overflow-hidden shadow-lg"
            >
              <Image
                src={faqItems[hovered].image}
                alt={faqItems[hovered].title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-serif text-lg">{faqItems[hovered].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}