'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavbarLinks() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 160;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) { setActiveSection('contact'); return; }
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { name: 'Home',       href: '/#home',     id: 'home',     icon: HomeIcon },
    { name: 'About Us',   href: '/#about',    id: 'about',    icon: AboutIcon },
    { name: 'Products',   href: '/#products', id: 'products', icon: ProductsIcon },
    { name: 'Contact Us', href: '/#contact',  id: 'contact',  icon: ContactIcon },
  ];

  return (
    <>
      {/* ── Desktop nav links ── */}
      <div className="hidden md:flex items-center gap-10 text-xs tracking-widest font-semibold uppercase">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`transition-all duration-300 border-b-2 pb-1 cursor-pointer tracking-widest uppercase font-bold ${
                isActive
                  ? 'text-[#BD6A42] border-[#BD6A42]'
                  : 'text-[#143525]/75 hover:text-[#BD6A42] border-transparent hover:border-[#BD6A42]/30'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* ── Mobile hamburger button ── */}
      <button
        id="mobile-menu-btn"
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg bg-[#143525]/5 hover:bg-[#143525]/10 transition-colors"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-5 h-[1.5px] bg-[#143525] rounded-full" />
        <span className="block w-4 h-[1.5px] bg-[#143525] rounded-full self-end" />
        <span className="block w-5 h-[1.5px] bg-[#143525] rounded-full" />
      </button>

      {/* ── Mobile slide-out drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-[201] h-full w-[78vw] max-w-xs bg-[#FAF6F0] md:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD5]">
          <span className="font-[family-name:var(--font-playfair)] text-base font-bold tracking-widest text-[#143525] uppercase">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg bg-[#143525]/8 flex items-center justify-center text-[#143525]/70 hover:bg-[#E5DFD5] transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-grow">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#143525] text-[#FAF6F0]'
                    : 'text-[#143525]/80 hover:bg-[#143525]/6 hover:text-[#143525]'
                }`}
              >
                <Icon active={isActive} />
                <span className="text-xs font-bold tracking-[0.18em] uppercase">{link.name}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#BD6A42]" />}
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-6 pb-8 border-t border-[#E5DFD5] pt-5">
          <a
            href="https://wa.me/918075859465"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── Mobile sticky bottom navigation bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[150] bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#E5DFD5] safe-area-pb">
        <div className="flex items-center justify-around px-2 py-1.5">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[60px] ${
                  isActive ? 'text-[#143525]' : 'text-[#143525]/45 hover:text-[#143525]/70'
                }`}
              >
                <span className={`transition-all duration-200 ${isActive ? 'scale-110' : ''}`}>
                  <Icon active={isActive} />
                </span>
                <span className={`text-[8.5px] font-bold tracking-wide uppercase leading-none ${isActive ? 'text-[#143525]' : ''}`}>
                  {link.name === 'About Us' ? 'About' : link.name === 'Contact Us' ? 'Contact' : link.name}
                </span>
                {isActive && <span className="w-1 h-1 rounded-full bg-[#BD6A42] mt-0.5" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

/* ── Icon components ── */
function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
function AboutIcon({ active }: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function ProductsIcon({ active }: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function ContactIcon({ active }: { active: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
