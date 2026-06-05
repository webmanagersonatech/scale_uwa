import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
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
    { label: "Careers", href: "#careers" },
    { label: "Admissions", href: "#admissions" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* TOP BAR - Full width MAROON bar with 1440px inner container */}
        <div className="hidden lg:block w-full bg-[#AC1F2D] text-white">
          <div className="w-full max-w-[1440px] mx-auto relative">
            {/* LOGO BLOCK - positioned absolutely inside 1440px container */}
            <Link
              href="/"
              className="absolute top-0 left-0 z-20 bg-white flex flex-col items-center justify-center border-x border-[#AC1F2D] px-6"
              style={{
                height: "calc(32px + 72px)",
              }}
            >
              {/* Logos */}
              <div className="flex items-center gap-3">
                <div className="relative w-[64px] h-[64px]">
                  <Image
                    src="/homeimages/uwa-logo-square.svg"
                    alt="UWA Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative w-[52px] h-[52px]">
                  <Image
                    src="/homeimages/Sona-star-logo.webp"
                    alt="SCALE Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-1 text-center leading-none">
                <p className="text-[18px] font-bold tracking-[0.2em] text-[#AC1F2D]">
                  SONA UWA
                </p>

              </div>
            </Link>

            {/* RIGHT SIDE CONTENT - now flush right within 1440px container */}
            <div className="h-8 flex items-center justify-end">
              <div className="flex items-center gap-6 text-[12px]">
                <Link
                  href="#apply"
                  className="hover:text-[#e5c66b] transition text-white"
                >
                  Admissions Open · Bengaluru + Alabama, USA
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#e5c66b] transition text-white"
                >
                  Call Us: (844) 361-6034
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR - Full width DARK bar with 1440px inner container */}
        <div
          className={`w-full bg-[#1a1a1a] transition-all duration-300 ${scrolled ? "shadow-lg" : ""
            }`}
        >
          <div className="w-full max-w-[1440px] mx-auto relative">
            <div className="h-[64px] lg:h-[72px] flex items-center">
              {/* Spacer for logo */}
              <div className="hidden lg:block w-[175px] shrink-0"></div>

              {/* PROGRAM INFO - Fixed text color for dark background */}
              <div className="hidden xl:flex flex-col justify-center px-6 border-r border-gray-700 h-full">
                <span className="text-[10px] uppercase tracking-[2px] text-[#AC1F2D] font-bold">
                  UWA × SCALE
                </span>
                <span className="text-[13px] font-semibold whitespace-nowrap text-white">
                  International Pathway
                </span>
              </div>

              {/* NAV LINKS - Fixed text color for dark background */}
              <nav className="hidden lg:flex flex-1 justify-center items-center h-full gap-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="h-full px-4 xl:px-5 flex items-center text-white font-semibold text-[13px] xl:text-[14px] hover:text-[#AC1F2D] transition whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* APPLY BUTTON - Updated hover styles */}
              <Link
                href="#apply"
                className="hidden lg:flex h-full px-7 xl:px-8 items-center justify-center bg-[#ffe588] text-black font-semibold text-[14px] hover:bg-[#078671] hover:text-white transition shrink-0 whitespace-nowrap"
              >
                APPLY NOW
              </Link>

              {/* MOBILE HEADER */}
              <div className="lg:hidden flex items-center justify-between w-full h-full bg-[#1a1a1a]">
                <Link href="/" className="flex items-center">
                  <div className="flex items-center bg-white p-4 ">
                    <div className="flex items-center gap-2">
                      <div className="relative w-[36px] h-[36px]">
                        <Image
                          src="/homeimages/uwa-logo-square.svg"
                          alt="UWA Logo"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="relative w-[36px] h-[36px]">
                        <Image
                          src="/homeimages/Sona-star-logo.webp"
                          alt="SCALE Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="ml-3 pl-3 border-l border-gray-300 leading-tight">
                      <p className="text-[12px] font-bold tracking-[0.12em] text-[#AC1F2D]">
                        SONA UWA
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500">
                        Global Education Pathway
                      </p>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white p-1.5 hover:bg-gray-700 rounded-lg transition"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE DRAWER BACKDROP */}
        <div
          className={`fixed inset-0 bg-black/60 transition-all duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* MOBILE DRAWER */}
        <div
          className={`fixed top-0 left-0 w-[280px] h-full bg-white z-[60] transition-transform duration-300 ease-out shadow-xl lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
            {/* LOGOS - Horizontal row */}
            <div className="flex items-center gap-3 bg-white rounded-md px-3 py-2">
              <div className="relative w-[45px] h-[45px]">
                <Image
                  src="/homeimages/uwa-logo-square.svg"
                  alt="UWA Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[45px] h-[45px]">
                <Image
                  src="/homeimages/Sona-star-logo.webp"
                  alt="SCALE Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="border-l border-gray-300 pl-3 leading-tight">
                <p className="text-[13px] font-bold tracking-wide text-[#AC1F2D]">
                  UWA × SONA
                </p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">
                  International Pathway
                </p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition text-gray-700"
            >
              <X size={22} />
            </button>
          </div>

          {/* DARK TOP BAR CONTENT ADDED TO MOBILE SIDEBAR */}
          <div className="bg-[#AC1F2D] text-white px-4 py-3">
            <div className="text-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] tracking-wide">📞</span>
                <Link href="#" className="text-[13px] hover:text-[#e5c66b] transition text-white">
                  Call Us: (844) 361-6034
                </Link>
              </div>
              <div className="text-[11px] opacity-90 text-white">
                Admissions Open · Bengaluru + Alabama, USA
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
            <div className="text-[10px] tracking-[2px] uppercase font-bold text-[#AC1F2D]">
              UWA × SCALE
            </div>
            <div className="font-semibold text-sm text-gray-800 mt-0.5">
              1+1 International Pathway
            </div>
          </div>

          <nav className="py-2 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 font-medium text-gray-800 hover:bg-gray-100 hover:text-[#AC1F2D] transition border-b border-gray-100 text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-4 mt-4 pb-6 bg-white">
            <Link
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#ffe588] text-black font-bold py-3 rounded-md hover:bg-[#078671] hover:text-white transition text-[15px]"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[64px] lg:h-[104px]" />
    </>
  );
}