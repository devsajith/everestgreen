'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="bg-transparent py-10 sm:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 text-[#143525] relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
                
                {/* Left Column: Image with minimalist frame and smooth zoom/fade entrance */}
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[2px] overflow-hidden border border-[#E5DFD5] bg-[#F0EDE6] p-2"
                    >
                        <div className="relative w-full h-full rounded-[1px] overflow-hidden">
                            <Image 
                                src="/about_new_everest.png" 
                                alt="About Everest Green" 
                                fill 
                                sizes="(max-width: 1024px) 100vw, 50vw" 
                                className="object-cover transition-transform duration-700 hover:scale-105" 
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Staggered text content scroll effects */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <motion.span 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-[11px] tracking-[0.25em] font-bold uppercase text-[#143525]/60 mb-3"
                    >
                        Our Savoir-Faire
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#143525] leading-tight uppercase tracking-wide mb-6"
                    >
                        About <br/>
                        <span className="italic text-[#BD6A42]">Everest Green Kerala</span>
                    </motion.h2>

                    {/* Elegant line-art leaf SVG spacer with smooth rotation/scale reveal */}
                    <motion.svg 
                        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                        whileInView={{ opacity: 0.85, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        viewBox="0 0 100 100" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="w-12 h-12 text-[#BD6A42] mb-6"
                    >
                        <path d="M50 95 C50 60 70 30 50 5 C30 30 50 60 50 95 Z" />
                        <path d="M50 75 Q65 65 72 55" />
                        <path d="M50 55 Q65 45 70 30" />
                        <path d="M50 35 Q60 25 65 15" />
                        <path d="M50 75 Q35 65 28 55" />
                        <path d="M50 55 Q35 45 30 30" />
                        <path d="M50 35 Q40 25 35 15" />
                    </motion.svg>
                    
                    <div className="text-[#143525]/85 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl space-y-4 font-normal">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            At Everest Green, we are committed to bringing you the finest selection of authentic Ayurvedic remedies and premium quality spices. Rooted in tradition and guided by nature, our products are carefully sourced and prepared to ensure purity, freshness, and effectiveness.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            We believe in the power of natural healing and the richness of traditional flavors. From herbal remedies that support your wellness to spices that enhance your everyday cooking, every product we offer reflects our dedication to quality and trust.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            Our mission is to provide customers with natural, reliable, and affordable products that promote a healthier lifestyle. With a focus on authenticity and customer satisfaction, Everest Green continues to serve as a trusted destination for Ayurvedic and spice products.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex items-center gap-6"
                    >
                        <a 
                            href="https://wa.me/918075859465" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block px-8 py-3.5 border border-[#143525] hover:bg-[#143525] hover:text-[#FAF6F0] text-[#143525] text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-[2px]"
                        >
                            Know More
                        </a>
                        <span className="text-[10px] tracking-widest uppercase text-[#143525]/60 font-medium">
                            Est. 2001 — Kerala, India
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
