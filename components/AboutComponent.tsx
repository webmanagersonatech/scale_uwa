import React, { useEffect, useRef, useState } from "react";

interface OptionCardProps {
    optionLabel: string;
    details: string;
    learnMoreHref: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
    optionLabel,
 
    details,
    learnMoreHref,
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

             

                {/* Details text - grows to fill space */}
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{details}</p>

                {/* Spacer to push learn more button area consistently - optional but helps alignment */}
                <div className="h-4" />
            </div>

            {/* Learn More CTA - Half outside, half inside */}
            <div className="relative -mt-6 z-20">
                <a
                    href={learnMoreHref}
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
            className="relative w-full overflow-hidden py-16 bg-gray-100"
            style={{ fontFamily: "'Lato', sans-serif" }}
        >
            {/* Main container - full width with flex row on desktop, column on mobile */}
            <div className="w-full max-w-[1440px] mx-auto px-6">
                {/* Added items-stretch to make children equal height */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    {/* Option One - Left side */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About Sona Star"
                      
                            details="Sona Star Innovation Private Limited, Bengaluru, is a technology-based solutions company focused on innovation, digital transformation, and industry-driven growth. As one of its key divisions, the Sona Centre of Advanced Learning & Entrepreneurship (SCALE) serves as an industry-led ecosystem that bridges talent, technology, innovation, and entrepreneurship through future-focused learning, workforce development, and emerging technology solutions."
                            learnMoreHref="https://sonstar.com"
                        />
                    </div>

                    {/* Option Two - Right side */}
                    <div className="flex-1 flex">
                        <OptionCard
                            optionLabel="About UWA"
                        
                            details="The University of West Alabama (UWA) is located in Livingston, Alabama, USA. Established in 1835, UWA is a public state university offering a wide range of academic programmes. The university supports international students through admission guidance, visa documentation support, campus services, housing, insurance, and student life resources. UWA's MS in Data Science is a 30-credit graduate programme covering statistics, programming, machine learning, data visualization, predictive modelling, cybersecurity data science, and capstone/thesis-based applied work."
                            learnMoreHref="https://www.uwa.edu"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UWAOptionsSection;