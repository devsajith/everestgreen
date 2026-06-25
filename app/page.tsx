'use client';

import About from "./about/page";
import Products from "./products/page";
import Contact from "./contact/page";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] text-[#143525]">
      
      {/* ════════════════════════════════════════
          HERO — mobile-first, responsive
          Mobile: full-width vertical stack
          Desktop: two-column side-by-side
          ════════════════════════════════════════ */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#F5F0E8] border-b border-[#E5DFD5]"
      >
        {/* Watermark */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg viewBox="0 0 400 300" fill="none" className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] opacity-[0.04] text-[#143525]" stroke="currentColor" strokeWidth="0.6">
            <path d="M200 0 C180 80 120 130 60 180" />
            <path d="M200 0 C220 80 280 130 340 180" />
            <path d="M200 10 C200 80 200 150 200 300" />
            <path d="M170 20 C150 90 100 140 40 200" />
            <path d="M230 20 C250 90 300 140 360 200" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE HERO — Full-screen cinematic overlay
            ══════════════════════════════════════════ */}
        <div className="lg:hidden relative" style={{ height: 'calc(100vh - 105px)', minHeight: '580px' }}>

          {/* Full-bleed background image */}
          <Image
            src="/hero_mobile_bg.png"
            alt="Everest Green premium Ayurvedic products"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Top vignette — darkens top so navbar is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent z-10" />

          {/* Bottom overlay — dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent z-10" />

          {/* ── Content overlaid on image ── */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end px-5 pb-7">

            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-5 h-[1px] bg-[#C6A45C]" />
              <span className="text-[8px] tracking-[0.35em] font-bold uppercase text-[#C6A45C]">
                Everest Green Kerala
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[family-name:var(--font-playfair)] font-bold leading-[1.0] text-white mb-1 uppercase"
              style={{ fontSize: 'clamp(2rem, 8vw, 2.8rem)' }}
            >
              EVEREST GREEN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="font-[family-name:var(--font-playfair)] italic text-[#C6A45C] font-medium mb-1"
              style={{ fontSize: 'clamp(0.9rem, 3.8vw, 1.2rem)' }}
            >
              At the Service of Your
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="font-[family-name:var(--font-playfair)] font-bold leading-none text-white uppercase mb-4"
              style={{ fontSize: 'clamp(1.5rem, 6vw, 2.1rem)' }}
            >
              Natural Beauty
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
              className="text-[0.73rem] text-white/70 leading-relaxed mb-5 max-w-[300px]"
            >
              Ancestral Ayurvedic rituals to nourish, balance and reveal your natural radiance — direct from Kerala.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.56 }}
              className="flex items-center gap-3 mb-6"
            >
              <a
                href="#products"
                className="flex-1 text-center py-3.5 bg-[#C6A45C] hover:bg-[#b8953f] text-[#143525] text-[9px] font-black tracking-[0.25em] uppercase transition-all duration-300 rounded-xl shadow-lg active:scale-95"
              >
                Discover Products
              </a>
              <a
                href="https://wa.me/918075859465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-3.5 px-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[9px] font-bold tracking-[0.15em] uppercase rounded-xl active:scale-95 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#25D366" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>

            {/* Three glass-effect badge pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.66 }}
              className="flex items-center gap-2"
            >
              {[
                { icon: '🌿', label: 'Natural' },
                { icon: '⚖️', label: 'Balanced' },
                { icon: '✨', label: 'Pure' },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-[11px]">{b.icon}</span>
                  <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-white/80">{b.label}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── DESKTOP layout (≥ lg) — side-by-side ── */}
        <div
          className="hidden lg:flex relative z-10 w-full h-full max-w-[1400px] mx-auto px-16 flex-row items-center justify-between gap-0"
          style={{ height: 'calc(100vh - 115px)', maxHeight: '820px', minHeight: '480px' }}
        >
          {/* Left column */}
          <div className="flex flex-col items-start text-left w-[46%] shrink-0">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="text-[9px] tracking-[0.3em] font-bold uppercase text-[#143525]/55 mb-2.5">
              Everest Green Kerala
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }} className="font-[family-name:var(--font-playfair)] font-bold leading-[1.05] text-[#143525] mb-3 uppercase" style={{ fontSize: 'clamp(1.65rem, 3.2vw, 3.1rem)' }}>
              EVEREST GREEN<br />
              <span className="italic font-medium text-[#BD6A42]" style={{ fontSize: '0.62em' }}>AT THE SERVICE OF YOUR</span><br />
              NATURAL BEAUTY
            </motion.h1>
            <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.45, delay: 0.32 }} className="flex items-center gap-2 mb-3 origin-left">
              <div className="w-8 h-[1px] bg-[#BD6A42]/50" /><div className="w-1.5 h-1.5 rotate-45 bg-[#BD6A42]/55 rounded-[1px]" /><div className="w-8 h-[1px] bg-[#BD6A42]/50" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }} className="text-[0.82rem] text-[#143525]/78 leading-relaxed mb-5 max-w-[400px]">
              Ancestral rituals to nourish, balance and reveal your natural radiance. Premium Ayurvedic products direct from the gardens of Kerala.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-6">
              <a href="#products" className="inline-block px-7 py-3 bg-[#143525] hover:bg-[#1a4230] text-[#FAF6F0] text-[9px] font-bold tracking-[0.25em] uppercase transition-all duration-300 rounded-[3px] shadow-md hover:shadow-lg hover:-translate-y-0.5">
                DISCOVER OUR PRODUCTS
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.62 }} className="flex items-start gap-6">
              {[
                { label: 'Natural\nIngredients', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M10 38 C18 28 30 22 44 20 C30 22 18 28 10 38 Z"/><path d="M22 28 Q26 20 34 16 C26 20 22 28 22 28 Z"/><path d="M16 32 Q12 24 14 14 C12 24 16 32 16 32 Z"/></svg> },
                { label: 'Balance &\nHarmony', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M14 36 C14 33 34 33 34 36 C34 39 14 39 14 36 Z"/><path d="M16 30 C16 27.5 32 27.5 32 30 C32 32.5 16 32.5 16 30 Z"/><path d="M18 24 C18 22 30 22 30 24 C30 26 18 26 18 24 Z"/><path d="M21 18 C21 16.5 27 16.5 27 18 C27 19.5 21 19.5 21 18 Z"/></svg> },
                { label: 'Efficacy &\nGentleness', icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M24 8 C24 8 12 24 12 32 C12 38 17.5 42 24 42 C30.5 42 36 38 36 32 C36 24 24 8 24 8 Z"/><path d="M30 28 C30.8 30.5 30 33.5 28 35" strokeWidth="0.9"/></svg> },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <span className="text-[#143525]">{badge.icon}</span>
                  <span className="text-[8px] font-bold tracking-[0.12em] uppercase text-[#143525]/75 leading-tight whitespace-pre-line">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[54%] flex items-end justify-end self-stretch overflow-hidden"
          >
            <Image
              src="/hero_products_everest.png"
              alt="Everest Green Ayurvedic products — hair oil, copper tools and natural botanicals"
              width={900}
              height={700}
              priority
              className="w-auto object-contain object-bottom drop-shadow-2xl"
              style={{ height: '100%', maxHeight: 'calc(100vh - 120px)', maxWidth: '100%' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Category Strip — mobile: fixed 3-col grid (all visible); desktop: 3-col grid */}
      <section className="bg-[#143525] text-[#FAF6F0] border-b border-white/5 relative z-10">
        {/* Mobile fixed 3-column grid — no scrolling, all 3 visible */}
        <div className="md:hidden grid grid-cols-3 divide-x divide-white/10 px-0 py-0">
          {[
            { tag: 'Hair Oil', tagline: 'Nourish & Strengthen', emoji: '🌿' },
            { tag: 'Copper Tools', tagline: 'Purify & Detoxify', emoji: '🔶' },
            { tag: 'Premium Spices', tagline: 'Aromatic & Organic', emoji: '🌶️' },
          ].map((item, i) => (
            <a
              key={i}
              href="#products"
              className="flex flex-col items-center text-center px-2 py-4 active:bg-white/5 transition-all"
            >
              <span className="text-base mb-1">{item.emoji}</span>
              <span className="text-[7.5px] font-bold tracking-[0.15em] uppercase text-white/45 mb-0.5 leading-tight">{item.tag}</span>
              <span className="font-[family-name:var(--font-playfair)] text-[11px] text-white leading-tight mb-1.5">{item.tagline}</span>
              <span className="text-[7px] font-bold tracking-widest uppercase text-[#BD6A42]">Discover →</span>
            </a>
          ))}
        </div>
        {/* Desktop 3-col grid */}
        <div className="hidden md:grid max-w-7xl mx-auto px-12 lg:px-16 grid-cols-3 gap-12 text-left py-12">
          {[
            { tag: 'Hair Oil', tagline: 'Nourish • Strengthen • Shine', delay: 0.05 },
            { tag: 'Copper Tools', tagline: 'Purify • Detoxify • Rebalance', delay: 0.15 },
            { tag: 'Premium Spices', tagline: 'Aromatic • Organic • Fresh', delay: 0.25 },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: item.delay }} className={`flex flex-col items-start ${i < 2 ? 'border-r border-white/10 pr-8' : ''}`}>
              <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">{item.tag}</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg mb-2">{item.tagline}</h3>
              <a href="#products" className="text-xs font-bold tracking-widest uppercase text-[#FAF6F0] hover:text-[#BD6A42] transition-colors mt-2">Discover →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-10 sm:py-20 bg-transparent">
        <About />
      </section>

      {/* Nos Engagements (Our Commitments) Section */}
      <section className="py-10 sm:py-20 bg-[#FAF6F0] border-y border-[#E5DFD5] text-[#143525]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#143525]/60 mb-16"
          >
            Nos Engagements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
            
            {/* 1. Naturel */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex flex-col items-center text-center px-6 md:border-r border-[#E5DFD5]/70"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-[#143525] mb-6">
                <path d="M25 80 C40 60 60 50 85 45" />
                <path d="M35 70 C20 40 45 20 60 40 C45 20 20 40 35 70 Z" />
                <path d="M55 58 C45 35 70 22 80 40 C70 22 45 35 55 58 Z" />
                <path d="M35 70 C40 50 50 35 60 40" />
                <path d="M55 58 C62 48 70 38 80 40" />
              </svg>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Naturel</h4>
              <p className="text-[10px] text-[#143525]/75 leading-relaxed max-w-[160px]">Ingrédients d'origine naturelle et ayurvédique</p>
            </motion.div>

            {/* 2. Équilibre */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="flex flex-col items-center text-center px-6 md:border-r border-[#E5DFD5]/70"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-[#143525] mb-6">
                <path d="M25 80 C25 72 75 72 75 80 C75 88 25 88 25 80 Z" />
                <path d="M32 63 C32 57 68 57 68 63 C68 69 32 69 32 63 Z" />
                <path d="M38 48 C38 43 62 43 62 48 C62 53 38 53 38 48 Z" />
                <path d="M44 35 C44 31 56 31 56 35 C56 39 44 39 44 35 Z" />
              </svg>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Équilibre</h4>
              <p className="text-[10px] text-[#143525]/75 leading-relaxed max-w-[160px]">Formules qui respectent votre nature profonde</p>
            </motion.div>

            {/* 3. Pureté */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.19 }}
              className="flex flex-col items-center text-center px-6 md:border-r border-[#E5DFD5]/70"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-[#143525] mb-6">
                <path d="M50 15 C50 15 25 50 25 65 C25 78 36 85 50 85 C64 85 75 78 75 65 C75 50 50 15 50 15 Z" />
                <path d="M63 55 C65 60 62 67 58 70" strokeWidth="0.6" />
              </svg>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Pureté</h4>
              <p className="text-[10px] text-[#143525]/75 leading-relaxed max-w-[160px]">Sans ingrédients controversés</p>
            </motion.div>

            {/* 4. Éthique */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col items-center text-center px-6 md:border-r border-[#E5DFD5]/70"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-[#143525] mb-6">
                <path d="M38 75 C30 70 25 55 25 45 C25 40 28 35 30 35 C32 35 34 40 34 45 C35 35 38 30 40 30 C42 30 43 35 43 45 C44 38 47 35 49 35 C51 35 51 40 50 55 C49 65 44 72 38 75 Z" />
                <path d="M62 75 C70 70 75 55 75 45 C75 40 72 35 70 35 C68 35 66 40 66 45 C65 35 62 30 60 30 C58 30 57 35 57 45 C56 38 53 35 51 35 C49 35 49 40 50 55 C51 65 56 72 62 75 Z" />
              </svg>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Éthique</h4>
              <p className="text-[10px] text-[#143525]/75 leading-relaxed max-w-[160px]">Fabrication responsable et éco-consciente</p>
            </motion.div>

            {/* 5. Rituel */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.33 }}
              className="flex flex-col items-center text-center px-6"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-12 h-12 text-[#143525] mb-6">
                <path d="M50 80 C50 80 40 50 50 20 C60 50 50 80 50 80 Z" />
                <path d="M50 80 C40 75 25 60 35 40 C45 55 50 75 50 80 Z" />
                <path d="M50 80 C60 75 75 60 65 40 C55 55 50 75 50 80 Z" />
                <path d="M50 80 C30 80 15 70 25 55 C35 65 48 78 50 80 Z" />
                <path d="M50 80 C70 80 85 70 75 55 C65 65 52 78 50 80 Z" />
              </svg>
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Rituel</h4>
              <p className="text-[10px] text-[#143525]/75 leading-relaxed max-w-[160px]">Des gestes simples pour un bien-être durable</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 border-t border-[#E5DFD5] bg-transparent">
        <Products />
      </section>

      {/* Testimonials Quote Section */}
      <section className="py-20 bg-[#FAF6F0] text-center border-b border-[#E5DFD5]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <span className="text-[32px] text-[#BD6A42] font-[family-name:var(--font-playfair)] italic">“</span>
          <p className="text-lg sm:text-xl font-[family-name:var(--font-playfair)] italic text-[#143525] leading-relaxed mb-6">
            Exceptional products that transformed my daily wellness routine. The herbal oils are deeply nourishing, and the spices have an unmatched freshness that enriches every meal.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#143525]">Claire M.</span>
            <span className="text-[9px] text-[#BD6A42] font-semibold uppercase tracking-wider bg-[#F0EDE6] px-2 py-0.5 rounded-[2px]">Verified Customer</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-transparent">
        <Contact />
      </section>

    </div>
  );
}