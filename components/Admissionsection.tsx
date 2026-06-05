import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AdmissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section ref={ref} id="apply" className="w-full relative overflow-hidden">

      {/* Main background pattern - geometric grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="hex" width="40" height="69.28" patternUnits="userSpaceOnUse">
              <path d="M 40 17.32 L 20 5.77 L 0 17.32 L 0 40.41 L 20 51.96 L 40 40.41 Z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M 20 51.96 L 20 75.05" stroke="white" strokeWidth="0.5" />
              <path d="M 0 40.41 L -20 51.96" stroke="white" strokeWidth="0.5" />
              <path d="M 40 40.41 L 60 51.96" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#hex)" opacity="0.5" />
        </svg>
      </div>

      {/* Decorative circles - layered depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large blurred circles for depth */}
        <div className="absolute top-10 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-purple-500/5 blur-3xl" />

        {/* Geometric rings */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-white/6" />
        <div className="absolute bottom-16 left-8 w-96 h-96 rounded-full border border-white/8" />
        <div className="absolute bottom-36 left-36 w-56 h-56 rounded-full border border-white/5" />

        {/* Small accent dots */}
        <div className="absolute top-1/3 left-1/5 w-1 h-1 rounded-full bg-white/40" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-white/30" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-white/40" />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-white/20" />

        {/* Diagonal connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <line x1="10%" y1="15%" x2="25%" y2="30%" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="75%" y1="20%" x2="90%" y2="35%" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="15%" y1="70%" x2="30%" y2="85%" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="70%" y1="80%" x2="85%" y2="65%" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" />
          <line x1="5%" y1="40%" x2="15%" y2="50%" stroke="white" strokeWidth="0.4" strokeDasharray="2 4" />
          <line x1="85%" y1="55%" x2="95%" y2="45%" stroke="white" strokeWidth="0.4" strokeDasharray="2 4" />
        </svg>

        {/* Horizontal accent bars */}
        <div className="absolute top-40 left-0 w-24 h-px bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
        <div className="absolute bottom-48 right-0 w-32 h-px bg-gradient-to-l from-white/0 via-white/15 to-white/0" />
        <div className="absolute top-1/2 left-10 w-16 h-px bg-white/10" />
        <div className="absolute bottom-1/3 right-12 w-20 h-px bg-white/10" />
      </div>

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      {/* ── FLOATING CARD ── */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white mx-auto shadow-2xl flex flex-col lg:flex-row overflow-hidden rounded-sm"
        >
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-[46%] relative min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] flex-shrink-0"
          >
            <Image
              src="/homeimages/hero2.jpeg"
              alt="Student"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right — Content */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-8 lg:py-0">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-black mb-4"
            >
              Programme at a{" "}
              <span className="text-[#8c1d32] underline underline-offset-4 decoration-[3px]">
                Glance
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-500 text-sm leading-relaxed max-w-[460px] mb-7"
            >
              Accelerate your career with our globally recognized MBA program.
              Experience world-class education with significant cost savings and extended work opportunities in the US.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-4 mb-6 max-w-[500px]"
            >
              <div className="border-l-2 border-[#8c1d32] pl-3">
                <span className="block text-2xl font-bold text-black">30cr</span>
                <span className="text-xs text-gray-400">Total Graduate Credits</span>
              </div>
              <div className="border-l-2 border-[#8c1d32] pl-3">
                <span className="block text-2xl font-bold text-black">2yr</span>
                <span className="text-xs text-gray-400">Programme Duration</span>
              </div>
              <div className="border-l-2 border-[#8c1d32] pl-3">
                <span className="block text-2xl font-bold text-black">3yr</span>
                <span className="text-xs text-gray-400">OPT Opportunity</span>
              </div>
              <div className="border-l-2 border-[#8c1d32] pl-3">
                <span className="block text-2xl font-bold text-black">42%</span>
                <span className="text-xs text-gray-400">Cost Saving vs Full US Route</span>
              </div>
            </motion.div>

            {/* Email + Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-0 max-w-[500px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Email Address..."
                className="flex-1 bg-gray-100 px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none border border-gray-200 border-r-0 focus:border-[#8c1d32] transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#078671] hover:bg-[#08917a] text-white px-6 sm:px-8 py-3 text-xs font-bold tracking-[2px] uppercase flex items-center gap-2 transition-colors duration-300 whitespace-nowrap"
              >
                {submitted ? "Sent ✓" : (
                  <>Subscribe <ArrowUpRight size={14} /></>
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── ACCREDITATIONS ROW ── */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mb-8"
        >
          <p className="text-white/50 text-[11px] font-semibold tracking-[5px] uppercase mb-2">
            Recognised Worldwide
          </p>
          <h3 className="font-serif text-white text-[24px] sm:text-[30px] lg:text-[36px] leading-snug">
            Global{" "}
            <span className="underline underline-offset-8 decoration-white/40">
              Accreditations
            </span>
          </h3>
        </motion.div>

        {/* Accreditation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            {
              name: "SACSCOC",
              fullName: "Southern Association of Colleges and Schools Commission on Colleges",
              description: "Regional accreditation for degree-granting institutions in the Southern states"
            },
            {
              name: "ALSDE",
              fullName: "Alabama State Department of Education",
              description: "State-level recognition for educator preparation programs"
            },
            {
              name: "CAEP",
              fullName: "Council for Accreditation of Educator Preparation",
              description: "Specialized accreditation for excellence in educator training"
            },
            {
              name: "ACBSP",
              fullName: "Accreditation Council for Business Schools and Programs",
              description: "Leading business program accreditation focused on teaching excellence"
            },
          ].map((accred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.65 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="border border-white/15 p-5 sm:p-6 text-center group hover:bg-white/5 transition-colors duration-300 rounded-sm backdrop-blur-sm"
            >
              <h4 className="font-serif text-white text-[28px] sm:text-[32px] font-bold mb-2">
                {accred.name}
              </h4>
              <p className="text-white/80 text-xs font-medium mb-2">
                {accred.fullName}
              </p>
              <p className="text-white/40 text-xs leading-snug">
                {accred.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner institution text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          <span className="text-white/25 font-serif text-sm tracking-wide">
            UWA School of Business
          </span>
          <span className="text-white/25 text-xs">•</span>
          <span className="text-white/25 font-serif text-sm tracking-wide">
            SCALE Bengaluru
          </span>
          <span className="text-white/25 text-xs">•</span>
          <span className="text-white/25 font-serif text-sm tracking-wide">
            Livingston, Alabama
          </span>
        </motion.div>
      </div>

    </section>
  );
}