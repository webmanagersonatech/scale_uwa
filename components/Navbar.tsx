
import Link from "next/link";
import { Search, Menu, X, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Programme", href: "#structure" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Admissions", href: "#admissions" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""
        }`}
    >
      {/* TOP BLACK BAR */}
      <div className="hidden md:block bg-black/90 text-white transition-all duration-300 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto h-12 px-6 flex items-center justify-between">
          <div className="flex items-center gap-8 text-sm font-semibold">
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">
              Admissions Open · Bengaluru + Alabama, USA
            </Link>

          </div>

          <div className="flex items-center gap-6 text-sm font-semibold">
            
            <Link href="#apply" className="hover:text-gray-300 transition-colors duration-200">
              Apply Now
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">
              Call Us: (844) 361-6034
            </Link>
            <button className="hover:text-gray-300 transition-colors duration-200">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="relative max-w-[1440px] mx-auto h-[65px] md:h-[75px] px-4 md:px-6 flex items-center justify-between gap-4">

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-30 p-2 -ml-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </button>

          {/* LOGO */}
          {/* LOGOS */}
          <Link href="/" className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <Image
                src="/homeimages/uwa-logo-square.svg"
                alt="Company Logo 1"
                width={scrolled ? 40 : 50}
                height={scrolled ? 40 : 50}
                className="object-contain"
              />

              <Image
                src="/homeimages/Sona-star-logo.webp"
                alt="Company Logo 2"
                width={scrolled ? 40 : 50}
                height={scrolled ? 40 : 50}
                className="object-contain"
              />

              <Image
                src="/homeimages/scale.png"
                alt="Company Logo 3"
                width={scrolled ? 40 : 50}
                height={scrolled ? 40 : 50}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Programme label - desktop only */}
          <div className="hidden lg:flex flex-col leading-tight ml-2 border-l border-gray-200 pl-4 shrink-0">
            <span className="text-[11px] font-bold text-[#9b1c31] tracking-widest uppercase">
              UWA × SCALE
            </span>
            <span className="text-[12px] font-semibold text-gray-700">
              1+1 International Pathway
            </span>
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#9b1c31] hover:bg-[#fdf2f4] rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#apply"
              className="ml-3 px-5 py-2 bg-[#9b1c31] text-white text-sm font-bold rounded-md hover:bg-[#7a1627] transition-colors duration-200 shadow-sm"
            >
              Apply Now
            </Link>
          </nav>

          {/* MOBILE RIGHT ICONS */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <Search size={20} className="text-gray-800" />
            </button>
            <Link
              href="#apply"
              className="px-3 py-1.5 bg-[#9b1c31] text-white text-sm font-bold rounded-md hover:bg-[#7a1627] transition-colors duration-200"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#9b1c31] to-[#7a1627] w-[46px] h-[46px] rounded-full flex items-center justify-center text-white shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="font-serif font-bold text-gray-800 text-lg">UWA</div>
                <div className="text-[#9b1c31] text-[9px] font-bold tracking-wider">ONLINE</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Programme label in drawer */}
          <div className="px-4 py-3 bg-[#fdf2f4] border-b border-[#f0c0c8]">
            <div className="text-[10px] font-bold text-[#9b1c31] tracking-widest uppercase">UWA × SCALE</div>
            <div className="text-[13px] font-semibold text-gray-700">1+1 International Pathway</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Bengaluru + Alabama, USA</div>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto py-2">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-800 font-semibold hover:bg-gray-50 hover:text-[#9b1c31] transition-colors duration-200 text-[15px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 py-3">
                <Link
                  href="#apply"
                  className="block w-full text-center px-4 py-2.5 bg-[#9b1c31] text-white font-bold rounded-md hover:bg-[#7a1627] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>

              <div className="border-t my-2" />


              <Link href="#" className="px-4 py-3 text-gray-500 text-sm hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Call Us: (844) 361-6034</Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx global>{`
        body {
          padding-top: 65px;
        }
        @media (min-width: 768px) {
          body {
            padding-top: 0px;
          }
        }
      `}</style>
    </header>
  );
}