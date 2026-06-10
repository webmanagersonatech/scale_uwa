import React, { useEffect, useRef, useState } from "react";

interface OptionCardProps {
    optionLabel: string;
    details: string | React.ReactNode;
    learnMoreHref: string;
    countryFlagSrc: string; // Changed from countryFlag emoji to image src
    countryName: string;
    studentResources?: string[]; // New prop for student resources list
}

const OptionCard: React.FC<OptionCardProps> = ({
    optionLabel,
    details,
    learnMoreHref,
    countryFlagSrc,

    studentResources,
}) => {
    return (
        <div className="relative flex flex-col items-center w-full h-full">
            {/* White content card - flex column to push button area */}
            <div className="relative bg-white/90 backdrop-blur-sm shadow-lg w-full px-8 pt-8 pb-12 rounded-sm flex flex-col flex-1">
                {/* Option italic label - positioned above the card */}
                <div className="absolute -top-5 left-0 z-10">
                    <span
                        className="inline-flex items-center gap-2 font-serif italic text-3xl md:text-4xl text-gray-800 leading-none select-none whitespace-nowrap"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {optionLabel}
                        <img
                            src={countryFlagSrc}
                            alt="India flag"
                            className="w-10 h-auto rounded-sm shadow-sm"
                        />
                    </span>
                </div>



                {/* Details text - grows to fill space */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4 mt-2">{details}</p>

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
    return (
        <section
            className="relative w-full overflow-hidden py-10 bg-gray-100"
            style={{ fontFamily: "'Lato', sans-serif" }}
        >


            {/* Main container - full width with flex row on desktop, column on mobile */}
            <div className="w-full max-w-[1440px] mx-auto px-6">
                {/* Added items-stretch to make children equal height */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    {/* Option One - Left side (India) - WITH HYPERLINK */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About the Sona Star"
                            details={
                                <>
                                    Sona Star Innovation Private Limited, Bengaluru, is a technology-based solutions company focused on innovation, digital transformation, and industry-driven growth. As one of its key divisions, the{" "}
                                    <a
                                        href="https://scaleindia.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#078671] hover:text-[#067864] underline font-medium"
                                    >
                                        Sona Centre of Advanced Learning & Entrepreneurship (SCALE)
                                    </a>{" "}
                                    serves as an industry-led ecosystem that bridges talent, technology, innovation, and entrepreneurship through future-focused learning, workforce development, and emerging technology solutions.
                                </>
                            }
                            learnMoreHref="https://sonastar.com"
                            countryFlagSrc="https://flagcdn.com/w20/in.png"
                            countryName="India"
                        />
                    </div>

                    {/* Option Two - Right side (USA) - WITH Student Resources */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About the UWA"
                            details="The University of West Alabama (UWA) is located in Livingston, Alabama, USA. Established in 1835, UWA is a public state university offering a wide range of academic programmes. . UWA's MS in Data Science is a 30-credit graduate programme covering statistics, programming, machine learning, data visualization, predictive modelling, cybersecurity data science, and capstone/thesis-based applied work."
                            learnMoreHref="https://www.uwa.edu"
                            countryFlagSrc="https://flagcdn.com/w20/us.png"
                            countryName="USA"
                        />
                    </div>

                    {/* Option Three - About MS in Data Science */}
                    {/* <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About MS in Data Science"
                            details="With a Master of Science in Data Science Degree from the University of West Alabama, you will learn to blend theory with practical application and prepare to advance your career. This program's core courses in statistics, programming and machine learning will strengthen your foundational knowledge and help you stand out as a competitive job candidate. With specialized electives and hands-on projects, you will foster both technical expertise and problem-solving skills.

This data science degree gives you the flexibility to fit study into your schedule. Upon completion, you will have earned the skills and knowledge necessary to advance your data science career with confidence."
                            learnMoreHref="https://scale-uwa.vercel.app/admission/about-program"
                            countryFlagSrc="https://flagcdn.com/w20/us.png"
                            countryName="USA"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default UWAOptionsSection;