import React, { useEffect, useRef, useState } from "react";

interface OptionCardProps {
    optionLabel: string;
    details: string;
    learnMoreHref: string;
    countryFlag: string;
    countryName: string;
    studentResources?: string[]; // New prop for student resources list
}

const OptionCard: React.FC<OptionCardProps> = ({
    optionLabel,
    details,
    learnMoreHref,
    countryFlag,
    countryName,
    studentResources,
}) => {
    return (
        <div className="relative flex flex-col items-center w-full h-full">
            {/* White content card - flex column to push button area */}
            <div className="relative bg-white/90 backdrop-blur-sm shadow-lg w-full px-8 pt-8 pb-12 rounded-sm flex flex-col flex-1">
                {/* Option italic label - positioned above the card */}
                <div className="absolute -top-8 left-0 z-10">
                    <span
                        className="font-serif italic text-4xl md:text-5xl text-gray-800 leading-none select-none whitespace-nowrap"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {optionLabel}
                    </span>
                </div>

                {/* Country Flag & Name Badge - Enhanced */}
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
                    <div className="flex items-center gap-2 px-3 py-1 ">
                        <span className="text-2xl sm:text-3xl">{countryFlag}</span>
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                            {countryName}
                        </span>
                    </div>
                </div>

                {/* Details text - grows to fill space */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{details}</p>

                {/* Student Resources Section - Only shown if resources exist */}
                {studentResources && studentResources.length > 0 && (
                    <div className="mt-2 mb-4">
                        <h4 className="text-xs font-bold text-[#078671] uppercase tracking-wide mb-3">
                            Student Resources
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {studentResources.map((resource, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <svg
                                        className="w-3 h-3 text-[#078671] flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-xs text-gray-700">{resource}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Spacer to push learn more button area consistently */}
                <div className="h-2" />
            </div>

            {/* Learn More CTA - Half outside, half inside */}
            <div className="relative -mt-6 z-20">
                <a
                    href={learnMoreHref}
                    target="_blank"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        bg-[#078671]
                        text-white
                        font-bold
                        uppercase
                        tracking-wide
                        text-xs sm:text-sm md:text-base lg:text-lg
                        px-6 sm:px-8 md:px-10 lg:px-12
                        py-2 
                        rounded-tr-[16px] sm:rounded-tr-[20px] md:rounded-tr-[24px]
                        rounded-bl-[16px] sm:rounded-bl-[20px] md:rounded-bl-[24px]
                        rounded-tl-none
                        rounded-br-none
                        hover:bg-[#067864]
                        transition-all
                        duration-300
                        shadow-md
                        whitespace-nowrap
                    "
                >
                    Learn More →
                </a>
            </div>
        </div>
    );
};

const UWAOptionsSection: React.FC = () => {
    // UWA Student Resources
    const uwaStudentResources = [
        "Career Services",
        "Academic Support",
        "Research Opportunities",
        "International Student Support",
        "Alumni Network",
        "Industry Connections"
    ];

    return (
        <section
            className="relative w-full overflow-hidden py-10 bg-gray-100"
            style={{ fontFamily: "'Lato', sans-serif" }}
        >
            {/* Section Header with Dual Flags - Modern Design */}
            <div className="w-full max-w-[1440px] mx-auto px-6 mb-12">
                <div className="text-center">
                    {/* Dual Country Flags - Minimal Design */}
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        {/* India */}
                        <div className="flex items-center gap-2 px-4 py-2">
                            <span className="text-4xl drop-shadow-sm">🇮🇳</span>
                            <span className="font-medium text-gray-600">India</span>
                        </div>

                        {/* Connecting Line */}
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#078671] to-transparent"></div>
                            <span className="text-xs font-bold text-[#078671]">+</span>
                            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#078671] to-transparent"></div>
                        </div>

                        {/* USA */}
                        <div className="flex items-center gap-2 px-4 py-2">
                            <span className="text-4xl drop-shadow-sm">🇺🇸</span>
                            <span className="font-medium text-gray-600">USA</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main container - full width with flex row on desktop, column on mobile */}
            <div className="w-full max-w-[1440px] mx-auto px-6">
                {/* Added items-stretch to make children equal height */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    {/* Option One - Left side (India) */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About Sona Star"
                            details="Sona Star Innovation Private Limited, Bengaluru, is a technology-based solutions company focused on innovation, digital transformation, and industry-driven growth. As one of its key divisions, the Sona Centre of Advanced Learning & Entrepreneurship (SCALE) serves as an industry-led ecosystem that bridges talent, technology, innovation, and entrepreneurship through future-focused learning, workforce development, and emerging technology solutions."
                            learnMoreHref="https://sonastar.com"
                            countryFlag="🇮🇳"
                            countryName="India"
                        />
                    </div>

                    {/* Option Two - Right side (USA) - WITH Student Resources */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About UWA"
                            details="The University of West Alabama (UWA) is located in Livingston, Alabama, USA. Established in 1835, UWA is a public state university offering a wide range of academic programmes. The university supports international students through admission guidance, visa documentation support, campus services, housing, insurance, and student life resources. UWA's MS in Data Science is a 30-credit graduate programme covering statistics, programming, machine learning, data visualization, predictive modelling, cybersecurity data science, and capstone/thesis-based applied work."
                            learnMoreHref="https://www.uwa.edu"
                            countryFlag="🇺🇸"
                            countryName="USA"
                            studentResources={uwaStudentResources}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UWAOptionsSection;