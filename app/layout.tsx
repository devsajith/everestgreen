import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";
import NavbarLinks from "../components/NavbarLinks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everest Green Kerala Ayurvedic & Spices Garden",
  description: "Premium Kerala Ayurvedic medicines and natural spices",
  verification: {
    google: "-JsLzkIzdFqlo7j59I_Q873kMy0Ug7qxwZIO-BOBrdQ",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip w-full scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen bg-[#FAF6F0] text-[#143525] overflow-x-clip w-full`}>
        {/* Main Wrapper */}
        <div className="flex flex-col min-h-screen relative overflow-x-clip w-full max-w-[100vw]">
            
            {/* Top Bar Announcement Banner */}
            <div className="w-full bg-[#143525] text-[#FAF6F0] text-[8px] sm:text-xs py-1.5 sm:py-2 px-4 text-center tracking-widest font-semibold uppercase relative z-50">
               100% Natural Spices &amp; Ayurvedic Herbals
            </div>

            {/* Global Sticky Navbar */}
            <nav className="sticky top-0 w-full z-50 py-3 sm:py-4 pl-3 pr-3 sm:pl-8 sm:pr-12 lg:pl-10 lg:pr-16 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E5DFD5] transition-all duration-300">
              <div className="w-full flex items-center justify-between">
                
                {/* Left Brand Identity */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                  <Image 
                    src={logo} 
                    alt="Everest Green Kerala Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-full object-cover border border-[#E5DFD5] shrink-0 w-8 h-8 sm:w-10 sm:h-10" 
                  />
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-playfair)] text-base sm:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.1em] text-[#143525] uppercase leading-none">
                      Everest Green
                    </span>
                    <span className="text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#143525]/60 uppercase mt-0.5">
                      Ayurveda &amp; Spices Garden
                    </span>
                  </div>
                </Link>
                
                {/* Right-aligned Menu Links with Active Highlight */}
                <NavbarLinks />

              </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow relative min-h-screen pb-[72px] md:pb-0">
              {/* Global Editorial Vertical Grid Lines */}
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 overflow-hidden flex justify-between max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="w-[1px] h-full bg-[#E5DFD5]/35"></div>
                <div className="hidden md:block w-[1px] h-full bg-[#E5DFD5]/35"></div>
                <div className="hidden lg:block w-[1px] h-full bg-[#E5DFD5]/35"></div>
                <div className="w-[1px] h-full bg-[#E5DFD5]/35"></div>
              </div>
              <div className="relative z-10">
                {children}
              </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#143525] text-[#FAF6F0] border-t border-white/5 mt-auto relative z-20 overflow-hidden">
              <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                  {/* Brand and Description */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 relative z-10 mb-4">
                      <Image 
                        src={logo} 
                        alt="Everest Green Kerala Logo" 
                        width={44} 
                        height={44} 
                        className="rounded-full object-cover border border-white/10 shrink-0" 
                      />
                      <div className="flex flex-col text-left">
                        <span className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-[0.1em] text-[#FAF6F0] uppercase leading-none">
                          Everest Green Kerala
                        </span>
                        <span className="text-[7px] tracking-[0.25em] font-semibold text-[#FAF6F0]/60 uppercase mt-0.5">
                          Ayurveda & Spices Garden
                        </span>
                      </div>
                    </div>
                    <p className="text-[#FAF6F0]/70 leading-relaxed text-sm pr-0 md:pr-4">
                      Bringing the finest, authentic Ayurvedic products and natural spices directly from nature to your doorstep.
                    </p>
                  </div>

                  {/* Newsletter form - exactly like the reference image */}
                  <div>
                    <h3 className="text-xs font-bold mb-4 tracking-widest uppercase text-white">Join the Ritual</h3>
                    <p className="text-[#FAF6F0]/70 text-xs leading-relaxed">
                      Subscribe to receive our latest news, recipes, and exclusive Ayurvedic offers.
                    </p>
                    <form className="mt-4 flex flex-col gap-2.5">
                      <input type="email" required placeholder="Your email address" className="w-full bg-[#1e4835] border border-white/10 rounded-md py-2.5 px-4 text-xs text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-colors" />
                      <button type="submit" className="w-full bg-[#FAF6F0] hover:bg-white text-[#143525] text-xs font-bold py-2.5 rounded-md tracking-widest uppercase transition-all duration-300 shadow-md">
                        Subscribe
                      </button>
                    </form>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xs font-bold mb-4 tracking-widest uppercase text-white">Quick Links</h3>
                    <ul className="space-y-3">
                      <li><Link href="/#home" className="text-[#FAF6F0]/80 hover:text-white transition-colors text-xs tracking-wider uppercase font-semibold">Home</Link></li>
                      <li><Link href="/#about" className="text-[#FAF6F0]/80 hover:text-white transition-colors text-xs tracking-wider uppercase font-semibold">About Us</Link></li>
                      <li><Link href="/#products" className="text-[#FAF6F0]/80 hover:text-white transition-colors text-xs tracking-wider uppercase font-semibold">Our Products</Link></li>
                      <li><Link href="/#contact" className="text-[#FAF6F0]/80 hover:text-white transition-colors text-xs tracking-wider uppercase font-semibold">Contact Us</Link></li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xs font-bold mb-4 tracking-widest uppercase text-white">Contact Details</h3>
                    <ul className="space-y-3 text-[#FAF6F0]/80 text-xs tracking-wider font-semibold">
                      <li className="flex items-start justify-center md:justify-start gap-3">
                        <span className="mt-0.5">📍</span>
                        <span className="leading-relaxed">Everest Green Spices Estate,<br/>Munnar, Kerala</span>
                      </li>
                      <li className="flex items-center justify-center md:justify-start gap-3">
                        <span>📞</span>
                        <span>+91 80758 59465</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-[#FAF6F0]/50 tracking-widest uppercase font-semibold">
                    <p>
                    &copy; {new Date().getFullYear()} EVEREST GREEN. All rights reserved.
                    </p>
                    <div className="flex gap-6 flex-wrap justify-center">
                      <a href="#contact" className="hover:text-white transition-colors">Mentions Légales</a>
                      <a href="#products" className="hover:text-white transition-colors">CGV</a>
                      <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
              </div>
            </footer>
        </div>
      </body>
    </html>
  );
}
