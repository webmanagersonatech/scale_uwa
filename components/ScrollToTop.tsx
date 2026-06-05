"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          whileHover={{
            scale: 1.08,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          className="
            fixed
            bottom-6
            right-6
            sm:bottom-8
            sm:right-8
            z-[999]

            w-12
            h-12
            sm:w-14
            sm:h-14

            bg-[#8c1d32]
            text-white

            rounded-tl-none
            rounded-br-none
            rounded-tr-[18px]
            rounded-bl-[18px]

            shadow-xl
            hover:bg-[#751728]

            flex
            items-center
            justify-center

            transition-all
            duration-300
          "
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}