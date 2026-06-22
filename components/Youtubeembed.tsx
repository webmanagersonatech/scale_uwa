import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YouTubeEmbed: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const videoId: string = "rICiNRJ2Q3o";

  const video = {
    id: videoId,
    title: "Dr.Akali Fulmer",
    meta: "International Admissions & Recruitment Consultant",
    duration: "2:35",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const playButtonVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: {
      scale: 1.12,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.92 },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.1 },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex items-center justify-center bg-gray-100 px-6 py-8"
      style={{ 
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(200, 200, 200, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(200, 200, 200, 0.1) 0%, transparent 50%),
          repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 8px)
        `
      }}
    >
      <div className="max-w-[1440px] px-4 w-full">
        <motion.div
          className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-300/30"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative p-4 md:p-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between mb-3 md:mb-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="drop-shadow"
                  >
                    <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.5 4.1 12 4.1 12 4.1s-4.5 0-6.8.2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2.1 8.8 2.1 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 18 12 18 12 18s4.5 0 6.8-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zm-11.7 6.5V8.5l5.4 2.6-5.4 2.6z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-semibold tracking-tight">
                    Featured Video
                  </p>
                  <p className="text-gray-500 text-[11px] font-medium">
                    Sona UWA · Official
                  </p>
                </div>
              </div>
              <motion.span
                className="text-xs text-gray-600 font-mono bg-gray-200/80 px-3 py-1 rounded-full border border-gray-300/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                HD
              </motion.span>
            </motion.div>

            {/* Main player area - FIXED ASPECT RATIO */}
            <div className="relative rounded-2xl overflow-hidden bg-black/5 shadow-xl">
              <AnimatePresence mode="wait">
                {!playing ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative cursor-pointer group"
                    style={{ aspectRatio: "16/9" }} // CHANGED from 16/8 to 16/9
                    onClick={() => setPlaying(true)}
                  >
                    {/* Thumbnail with fallback */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to different quality if maxres fails
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <motion.div
                      variants={glowVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-28 h-28 rounded-full bg-red-500/20 blur-2xl" />
                    </motion.div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        variants={playButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-2xl shadow-red-600/40 group-hover:shadow-red-500/60 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="drop-shadow-lg"
                          >
                            <polygon points="8,5 19,12 8,19" />
                          </svg>
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Bottom info bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-3 md:p-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <div className="flex items-end justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm md:text-base font-semibold leading-tight drop-shadow-lg line-clamp-1">
                            {video.title}
                          </p>
                          <p className="text-gray-200 text-xs md:text-sm drop-shadow-lg mt-0.5">
                            {video.meta}
                          </p>
                        </div>
                        <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 flex-shrink-0 ml-2">
                          {video.duration}
                        </span>
                      </div>
                    </motion.div>

                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="player"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative"
                    style={{ aspectRatio: "16/9" }} // CHANGED from 16/8 to 16/9
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&color=white&iv_load_policy=3`}
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ border: "none", display: "block" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-between gap-3 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200/50"
            >
              <motion.a
                href={`https://youtu.be/${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors bg-gray-200/50 hover:bg-gray-200 px-4 py-1.5 rounded-full border border-gray-300/30 hover:border-blue-400/50"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
              >
                <span>Watch on YouTube</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YouTubeEmbed;