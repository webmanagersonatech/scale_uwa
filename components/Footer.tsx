
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BASE_PATH } from "../utils/config";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [

    { name: "About the Program", href: "/admission/about-program" },
    { name: "Acadamic Plan", href: "/#structure" },
    { name: "Fee Structure", href: "/admission/fees-structure" },
    { name: "FAQs", href: "/admission/faqs" },
    { name: "Apply Now", href: "https://hikaapp.sonastar.com/INS-0VVEACMY" },
  ];

  const aboutLinks = [
    {
      name: "Why UWA",
      href: "/uwa/why-uwa",
    },
    {
      name: "History & Traditions",
      href: "/uwa/history-tradition",
    },
    {
      name: "Mission & Vision",
      href: "/uwa/mission-vision",
    },
    {
      name: "Student Life",
      href: "/uwa/student-life",
    },
    {
      name: "Campus Life",
      href: "/uwa/campus-life",
    },
    {
      name: "Map & Directions",
      href: "/uwa/map-direction",
    },
    //   {
    //   name: "Privacy Statement",
    //   href: "/uwa/privacy",
    // },

  ];

  const resourceLinks = [
    { name: "History & Legacy", href: "/about-us/history-legacy" },
    { name: "Management and leadership", href: "/about-us/Management-profiles" },
    { name: "Our faculty members", href: "/about-us/faculty-members" },
    { name: "Academic Calendar", href: "/about-us/academic-calendar" },

  ];



  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#8c1d32]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT COLUMN - Logos & Info */}
          <div className="lg:col-span-4">
            {/* Three Logos Row */}
            <div className="flex items-center gap-6 mb-6">
              <Image
                src={`${BASE_PATH}/homeimages/Sona-star-logo.webp`}
                alt="Sona Star Logo"
                width={70}
                height={70}
                className="object-contain"
              />

              <Image
                src={`${BASE_PATH}/homeimages/footer-uwa.png`}
                alt="UWA Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* UWA × SCALE Label */}
            <div className="mb-4">
              <div className="text-[11px] font-bold text-[#8c1d32] tracking-widest uppercase">
                <span className="text-[#008BC8]">SONA</span> UWA
              </div>
              <div className="text-[12px] font-semibold text-gray-300">
                1+1 International Pathway
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                Bengaluru,  India + Alabama, USA
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Empowering minds, transforming futures through excellence in education, research, and innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <FaPhone className="text-[#8c1d32] mt-1 text-sm" />
                <div className="text-gray-400 text-sm">
                  <p>(+91) 9442592170</p>

                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#8c1d32] text-sm" />
                <a
                  href="mailto:sonauwa@@sonastar.com"
                  className="text-gray-400 hover:text-[#8c1d32] transition text-sm"
                >
                  sonauwa@sonastar.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaLocationDot className="text-[#8c1d32] mt-1 text-sm" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sona Towers, 71 Millers Road, Vasanth Nagar, Bengaluru, Karnataka - 560052
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/share/1GyRbZ15UZ/" },
                // { icon: <FaXTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/sona_uwa?igsh=MXkxazV2aGZ6cDVlZw==" },
                // { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/@SonaUWA" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#8c1d32] hover:text-white hover:border-[#8c1d32] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMNS - Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-base font-bold text-[#8c1d32] mb-4 uppercase tracking-wide">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group text-gray-400 hover:text-[#8c1d32] transition duration-200 flex items-center gap-2 text-sm"
                      >
                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-base font-bold text-[#8c1d32] mb-4 uppercase tracking-wide">
                  About UWA
                </h3>
                <ul className="space-y-2">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group text-gray-400 hover:text-[#8c1d32] transition duration-200 flex items-center gap-2 text-sm"
                      >
                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-base font-bold text-[#8c1d32] mb-4 uppercase tracking-wide">
                  About Sona star,Scale
                </h3>
                <ul className="space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group text-gray-400 hover:text-[#8c1d32] transition duration-200 flex items-center gap-2 text-sm"
                      >
                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear}  SONA UWA. All Rights Reserved.
          </p>

          {/* <div className="flex items-center gap-6 text-xs">
            <Link href="#" className="text-gray-500 hover:text-[#8c1d32] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#8c1d32] transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#8c1d32] transition">
              Accessibility
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;