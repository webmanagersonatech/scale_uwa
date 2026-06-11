import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f8f5f2] border-b border-[#e0d6ce] py-2.5">
      <div className="max-w-[1440px] mx-auto px-6">
        <ol className="flex items-center gap-1.5 list-none text-[13px] text-[#5a5652] flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-[#AC1F2D] hover:underline no-underline">
              Home
            </Link>
            <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
          </li>
              <li>
            <span className="text-[#5a5652] font-medium" aria-current="page">
             UWA
            </span>
            <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
          </li>
          <li>
            <span className="text-[#5a5652] font-medium" aria-current="page">
              Why UWA?
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none" />
      <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none" />
      <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:max-w-[55%]">
            <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 text-gray-700 text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
              <span className="w-2 h-2 bg-gray-600 rounded-full" />
              University of West Alabama
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
              Why <span className="text-gray-700">UWA?</span>
            </h1>
            <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
              Connect to an unparalleled experience — shaping leaders for West Alabama and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why UWA Content ──────────────────────────────────────────────────────────
function WhyUWAContent() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mb-10"
      aria-labelledby="why-uwa-title"
    >
      <h2
        id="why-uwa-title"
        className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
      >
        Connect to an Unparalleled Experience
      </h2>

      <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
        <p>
          What do you think about when looking for the right school? What inspires you? Academics?
          UWA's learning environment is second-to-none. Choose from a range of more than{" "}
          <strong className="text-[#AC1F2D]">70 undergraduate and 50 graduate</strong>{" "}
          <Link href="https://www.uwa.edu/programs" className="text-[#AC1F2D] hover:underline">
            programs
          </Link>
          , including associate, bachelor's, master's, doctoral and education specialist programs in
          a range of fields within business, education, liberal arts, engineering technology, nursing
          or natural sciences and mathematics. Courses are taught by nationally recognized, published
          professors, featuring a <strong className="text-[#AC1F2D]">17:1 student-to-instructor ratio</strong>.
          UWA offers a learning ecosystem geared toward personalized instruction.
        </p>

        <p>
          What about life outside your classes? Will you discover everything you need to make the
          most of{" "}
          <Link href="https://www.uwa.edu/campus-life/" className="text-[#AC1F2D] hover:underline">
            student life
          </Link>
          , find your niche and connect to what matters to you? As far as everyday living goes, UWA
          offers comfortable residence halls with all the modern conveniences and we're ranked as one
          of the <strong className="text-[#AC1F2D]">safest college campuses in the nation</strong>.
        </p>

        <p>
          What about learning more about you, about digging deeper into what you care about and want
          to be a part of? You'll find a range of opportunities at UWA through fraternities and
          sororities, intramural sports, UWA Band, a fully equipped fitness center, religious and
          student government organizations and much more.
        </p>

        <p>
          Into more competitive sports? Our UWA Tiger{" "}
          <a
            href="http://www.uwaathletics.com/"
            className="text-[#AC1F2D] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            varsity athletics
          </a>{" "}
          program features baseball, basketball, cross country, football, softball, soccer, tennis,
          track, volleyball and even rodeo!
        </p>

        <p>
          Need to relax and clear your mind? Immerse yourself in nature. Our beautiful{" "}
          <strong className="text-[#AC1F2D]">600-acre campus</strong> has nature trails and a{" "}
          <strong className="text-[#AC1F2D]">54-acre lake</strong> stocked for fishing.
        </p>

        <p>
          If all those things are what you're looking for in a college experience,{" "}
          <strong className="text-[#AC1F2D]">UWA is the right choice for you.</strong>
        </p>
      </div>
    </motion.section>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function WhyUWAPage() {
  return (
    <>
      <HeroSection />
      <Breadcrumb />

      <div className="py-9">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mx-auto">
            <WhyUWAContent />
          </div>
        </div>
      </div>
    </>
  );
}
