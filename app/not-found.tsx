"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-[#FAF6F0] text-[#143525] relative overflow-hidden">
      {/* Decorative botanical watermark SVG */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[50vw] max-w-[500px]">
          <path d="M50 95 C50 60 70 30 50 5 C30 30 50 60 50 95 Z" />
          <path d="M50 75 Q65 65 72 55" />
          <path d="M50 55 Q65 45 70 30" />
          <path d="M50 35 Q60 25 65 15" />
          <path d="M50 75 Q35 65 28 55" />
          <path d="M50 55 Q35 45 30 30" />
          <path d="M50 35 Q40 25 35 15" />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg flex flex-col items-center mt-[-40px]">
        {/* Animated 404 Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center mb-6"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#BD6A42] mb-3">
            Lost in the garden
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-7xl sm:text-8xl font-black tracking-wide text-[#143525] leading-none mb-2">
            404
          </h1>
          <div className="w-16 h-[1px] bg-[#BD6A42]/40 my-3" />
        </motion.div>

        {/* Page status explanation */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#143525] mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs sm:text-sm text-[#143525]/75 leading-relaxed mb-10 max-w-md font-normal"
        >
          The path you are looking for has grown over or does not exist. Let us guide you back to the main trail.
        </motion.p>

        {/* Action button row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#143525] hover:bg-[#1f4835] text-[#FAF6F0] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-[2px] shadow-md hover:-translate-y-0.5 cursor-pointer text-center"
          >
            Go Back Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#143525] hover:bg-[#143525]/5 text-[#143525] text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-[2px] cursor-pointer text-center"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
