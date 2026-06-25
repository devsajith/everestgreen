'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 py-10 sm:py-20 text-[#143525] relative z-10 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-16"
            >
                <span className="text-[11px] tracking-[0.25em] font-bold uppercase text-[#143525]/60 mb-3 block">
                    Get In Touch
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#143525] uppercase tracking-wide mb-4">
                    Contact Us
                </h2>
                <p className="text-xs sm:text-sm text-[#143525]/80 max-w-2xl mx-auto font-normal leading-relaxed">
                    Have questions about our products or need more information on our specific Ayurvedic remedies? Reach out to us—we are always here to guide you toward a healthier, more natural lifestyle.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-[#F0EDE6] rounded-[2px] p-8 sm:p-12 border border-[#E5DFD5] flex flex-col justify-between"
                >
                    <div>
                        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#143525]/60 mb-6 block">
                            Our Coordinates
                        </span>
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#BD6A42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#143525]">Our Location</h4>
                                    <p className="mt-1 text-[#143525]/80 text-xs leading-relaxed font-normal">
                                        EVEREST GREEN KERALA<br />
                                        Ayurvedic & Spices Garden<br />
                                        Eruttukanam P.O., Anaviratty,<br />
                                        Kampiline, Munnar, Kerala - 685561
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#BD6A42]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#143525]">Call Us</h4>
                                    <p className="mt-1 text-[#143525]/80 text-xs leading-relaxed font-normal">+91 80758 59465</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Map */}
                    <div className="mt-12 overflow-hidden rounded-[2px] border border-[#E5DFD5] w-full h-48 sm:h-60 relative">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8542446788!2d76.886889!3d10.0288843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07950f6b3d7983%3A0x57ad2a33a5fcae5c!2sEverest%20Green%20Kerala%20Ayurvedic%20%26%20Spices%20Garden!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-[#FAF6F0] rounded-[2px] p-8 sm:p-12 border border-[#E5DFD5] flex flex-col justify-center"
                >
                    <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#143525]/60 mb-6 block">
                        Send a Message
                    </span>

                    <form className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Full Name</label>
                            <input type="text" id="name" className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Email Address</label>
                            <input type="email" id="email" className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="message" className="block text-[9px] font-bold text-[#143525]/60 uppercase tracking-widest pl-0.5">Message</label>
                            <textarea id="message" rows={4} className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5DFD5] rounded-[2px] focus:border-[#143525] outline-none text-[#143525] text-xs placeholder:text-[#143525]/30 transition-all resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-[#143525] hover:bg-[#1e4835] text-[#FAF6F0] font-bold py-3.5 px-6 rounded-[2px] transition-all duration-300 text-xs uppercase tracking-widest cursor-pointer mt-4">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
