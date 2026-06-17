// CtaSection.jsx
import { motion } from "framer-motion";

const CtaSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                },
            }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <p className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-[#AC1F2D]">
                    Request More Information
                </p>

                <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                    Interested in MS in Data Science?
                </h2>

                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
                    Learn more about the Master of Science in Data Science program,
                    admission requirements, curriculum, career opportunities, and
                    scholarship options.
                </p>

                <a
                    href="https://hikabackend.sonastar.com/api/institutions/enquiry/INS-0VVEACMY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        inline-flex
        items-center
        justify-center
       bg-[#078671]
        text-white
        font-bold
        uppercase
        tracking-wide
        text-xs
        px-6 sm:px-8 md:px-10 lg:px-12
        py-3
        rounded-tr-[16px] sm:rounded-tr-[20px] md:rounded-tr-[24px]
        rounded-bl-[16px] sm:rounded-bl-[20px] md:rounded-bl-[24px]
        rounded-tl-none
        rounded-br-none
      hover:bg-[#056f5e]
        transition-all
        duration-300
        shadow-md
        whitespace-nowrap
        no-underline
    "
                >
                     ENQUIRY NOW
                </a>
            </div>
        </motion.section>
    );
};

export default CtaSection;