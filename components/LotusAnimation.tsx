'use client';

import { motion } from 'framer-motion';

export default function LotusAnimation() {
  // Animation variants for drawing the path outlines
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2.2, 
        ease: "easeInOut" 
      }
    }
  };

  // Animation variants for fading in the petal fills
  const fillVariants = (delay: number) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay, 
        duration: 1.2, 
        ease: "easeOut" 
      }
    }
  });

  return (
    <div className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-[400px] aspect-square mx-auto">
      {/* Soft natural background glow behind the lotus */}
      <div className="absolute inset-0 bg-[#BD6A42]/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Floating and swaying frame container */}
      <motion.div
        className="w-full h-full relative z-10"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1.5, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(20,53,37,0.06)]"
        >
          {/* Layer 1: Outer Petals (Drawn and filled first, sitting at the back) */}
          {/* Outer Left Petal */}
          <motion.path
            d="M 50 82 C 10 76 12 55 22 50 C 36 58 45 74 50 82 Z"
            fill="#8cb082"
            stroke="#143525"
            strokeWidth="2.5"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 50 82 C 10 76 12 55 22 50 C 36 58 45 74 50 82 Z"
            fill="#8cb082"
            variants={fillVariants(0.4)}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "50px 82px" }}
          />

          {/* Outer Right Petal */}
          <motion.path
            d="M 50 82 C 90 76 88 55 78 50 C 64 58 55 74 50 82 Z"
            fill="#8cb082"
            stroke="#143525"
            strokeWidth="2.5"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 50 82 C 90 76 88 55 78 50 C 64 58 55 74 50 82 Z"
            fill="#8cb082"
            variants={fillVariants(0.4)}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "50px 82px" }}
          />

          {/* Layer 2: Inner Petals */}
          {/* Inner Left Petal */}
          <motion.path
            d="M 50 82 C 24 68 26 38 40 20 C 49 38 50 63 50 82 Z"
            fill="#8cb082"
            stroke="#143525"
            strokeWidth="2.5"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 50 82 C 24 68 26 38 40 20 C 49 38 50 63 50 82 Z"
            fill="#8cb082"
            variants={fillVariants(0.8)}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "50px 82px" }}
          />

          {/* Inner Right Petal */}
          <motion.path
            d="M 50 82 C 76 68 74 38 60 20 C 51 38 50 63 50 82 Z"
            fill="#8cb082"
            stroke="#143525"
            strokeWidth="2.5"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 50 82 C 76 68 74 38 60 20 C 51 38 50 63 50 82 Z"
            fill="#8cb082"
            variants={fillVariants(0.8)}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "50px 82px" }}
          />

          {/* Layer 3: Central Petal (Sitting in the foreground) */}
          <motion.path
            d="M 50 82 C 36 55 36 25 50 5 C 64 25 64 55 50 82 Z"
            fill="#8cb082"
            stroke="#143525"
            strokeWidth="2.5"
            strokeLinejoin="round"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 50 82 C 36 55 36 25 50 5 C 64 25 64 55 50 82 Z"
            fill="#8cb082"
            variants={fillVariants(1.2)}
            initial="hidden"
            animate="visible"
            style={{ transformOrigin: "50px 82px" }}
          />

          {/* Layer 4: Intersecting Bottom Swooshes / Rings */}
          <motion.path
            d="M 22 50 C 32 64 45 78 50 82 C 42 75 30 62 22 50 Z"
            fill="#143525"
            stroke="#143525"
            strokeWidth="1.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 78 50 C 68 64 55 78 50 82 C 58 75 70 62 78 50 Z"
            fill="#143525"
            stroke="#143525"
            strokeWidth="1.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </motion.div>
    </div>
  );
}
