import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BASE_PATH } from "../utils/config";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Changed to track which dropdown is open

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
        setOpenDropdown(null); // Reset dropdown when resizing to desktop
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
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "#",
      hasSubmenu: true,
      dropdownId: "about", // Added unique ID
      submenu: [
        { label: "History & Legacy", href: "/about-us/history-legacy" },
        { label: "Management and leadership", href: "/about-us/Management-profiles" },
        { label: "Our faculty members", href: "" },
      ],
    },
    { label: "Careers", href: "/#careers" },
    {
      label: "Admissions",
      href: "#",
      hasSubmenu: true,
      dropdownId: "admissions", // Added unique ID
      submenu: [
        { label: "About the Program", href: "/admission/about-program" },
        { label: "Fee Structure", href: "/admission/fees-structure" },

        { label: "Apply Online", href: "https://hikaapp.sonastar.com/INS-0VVEACMY" },
      ],
    },
    { label: "FAQs", href: "/admission/faqs" },

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
                    src={`${BASE_PATH}/homeimages/Sona-star-logo.webp`}
                    alt="UWA Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative w-[52px] h-[52px]">
                  <Image
                    src={`${BASE_PATH}/homeimages/uwa.jpg`}
                    alt="uwa Logo"
                    fill
                    className="object-contain "
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-1 text-center leading-none">
                <p className="text-[18px] font-bold tracking-[0.2em] text-[#AC1F2D]">
                  <span className="text-[#008BC8]">SONA</span> UWA
                </p>
              </div>
            </Link>

            {/* RIGHT SIDE CONTENT - now flush right within 1440px container */}
            <div className="h-8 flex items-center justify-end pl-[260px] pr-2 ">
              <div className="absolute left-[180px] top-0 h-8 flex flex-col justify-center leading-none">
                <span className="text-[12px] uppercase tracking-[2px] text-white font-bold">
                  <span className="text-[#008BC8] ml-1">SONA</span> UWA International Pathway
                </span>

              </div>

              <div className="flex items-center gap-6 text-[12px]">
                <Link
                  href="#apply"
                  className="hover:text-[#e5c66b] transition text-white"
                >
                  Admissions Open · Bengaluru, India + Alabama, USA
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#e5c66b] transition text-white"
                >
                  Call Us: (+91) 9442592170
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

              {/* PROGRAM INFO - UWA Logo */}
              <div className="hidden xl:flex flex-col items-center justify-center px-2 border-r border-gray-700 h-full">
                <span className="text-[11px] font-medium text-white text-center">
                  A Sona Star Initiative
                </span>

                <Image
                  src={`${BASE_PATH}/homeimages/scale.png`}
                  alt="SCALE Logo"
                  width={100}
                  height={100}
                  className="bg-white p-1"
                  priority
                />
              </div>

              {/* NAV LINKS - WITH SEPARATE DROPDOWNS */}
              <nav className="hidden lg:flex flex-1 justify-center items-center h-full gap-x-1">
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <div
                      key={link.href}
                      className="relative h-full group"
                      onMouseEnter={() => setOpenDropdown(link.dropdownId)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="h-full px-4 xl:px-5 flex items-center gap-1 text-white font-semibold text-[15px] xl:text-[17px] hover:text-[#AC1F2D] transition whitespace-nowrap"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${openDropdown === link.dropdownId ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute left-0 top-full mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 z-50 ${openDropdown === link.dropdownId
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                          }`}
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-800 hover:bg-[#AC1F2D] hover:text-white transition text-[16px] border-b border-gray-100 last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="h-full px-4 xl:px-5 flex items-center text-white font-semibold text-[15px] xl:text-[17px] hover:text-[#AC1F2D] transition whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* APPLY BUTTON */}
              <Link
                target="_blank"
                href="https://hikaapp.sonastar.com/INS-0VVEACMY"
                className="hidden lg:flex h-full px-7 xl:px-8 items-center justify-center bg-[#ffe588] text-black font-semibold text-[14px] hover:bg-[#078671] hover:text-white transition shrink-0 whitespace-nowrap"
              >
                APPLY NOW
              </Link>

              {/* MOBILE HEADER */}
              <div className="lg:hidden flex items-center justify-between w-full h-full bg-[#1a1a1a]">
                <Link href="/" className="flex items-center">
                  <div className="flex items-center bg-white p-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-[36px] h-[36px]">
                        <Image
                          src={`${BASE_PATH}/homeimages/Sona-star-logo.webp`}
                          alt="UWA Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-[36px] h-[36px]">
                        <Image
                          src={`${BASE_PATH}/homeimages/uwa.jpg`}
                          alt="SCALE Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="ml-3 pl-3 border-l border-gray-300 leading-tight">
                      <p className="text-[12px] font-bold tracking-[0.12em] text-[#AC1F2D]">
                        <span className="text-[#008BC8]">SONA</span> UWA
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
            <div className="flex items-center gap-3 bg-white rounded-md px-3 py-2">
              <div className="relative w-[45px] h-[45px]">
                <Image
                  src={`${BASE_PATH}/homeimages/Sona-star-logo.webp`}
                  alt="UWA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[45px] h-[45px]">
                <Image
                  src={`${BASE_PATH}/homeimages/uwa.jpg`}
                  
                  alt="SCALE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gray-300 pl-3 leading-tight">
                <p className="text-[13px] font-bold tracking-wide text-[#AC1F2D]">
                  <span className="text-[#008BC8]">SONA</span> UWA
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

          {/* SCALE a SonaStar Initiative - Mobile View */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] tracking-[2px] uppercase font-bold text-[#AC1F2D]">
                  <span className="text-[#008BC8]">SONA</span> UWA
                </div>
                <div className="font-semibold text-sm text-gray-800 mt-0.5">
                  1+1 International Pathway
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[7px] font-medium text-gray-500">
                  A Sona Star Initiative
                </span>
                <Image
                   src={`${BASE_PATH}/homeimages/scale.png`}
                  alt="SCALE Logo"
                  width={60}
                  height={60}
                  className="bg-white p-1 mt-1"
                />
              </div>
            </div>
          </div>

          {/* DARK TOP BAR CONTENT */}
          <div className="bg-[#AC1F2D] text-white px-4 py-3">
            <div className="text-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="text-[13px] hover:text-[#e5c66b] transition text-white"
                >
                  Call Us: (+91) 9442592170
                </Link>
              </div>
              <div className="text-[11px] opacity-90 text-white">
                Admissions Open · Bengaluru + Alabama, USA
              </div>
            </div>
          </div>

          {/* MOBILE NAV WITH SEPARATE SUBMENUS */}
          <nav className="py-2 bg-white">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <div key={link.href}>
                  <div className="flex justify-between items-center px-4 py-3.5 font-medium text-gray-800 border-b border-gray-100">
                    <span>{link.label}</span>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.dropdownId ? null : link.dropdownId)}
                      className="p-1"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${openDropdown === link.dropdownId ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openDropdown === link.dropdownId ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block pl-8 pr-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#AC1F2D] transition border-b border-gray-100 text-[14px]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3.5 font-medium text-gray-800 hover:bg-gray-100 hover:text-[#AC1F2D] transition border-b border-gray-100 text-[15px]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="px-4 mt-4 pb-6 bg-white">
            <Link
              target="_blank"
              href="https://hikaapp.sonastar.com/INS-0VVEACMY"
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