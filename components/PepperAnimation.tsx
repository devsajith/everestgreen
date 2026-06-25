'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Peppercorn {
  id: number;
  left: number; // percentage
  size: number; // pixels
  delay: number; // seconds
  duration: number; // seconds
}

export default function PepperAnimation() {
  const [filledProgress, setFilledProgress] = useState(0);
  const [peppercorns, setPeppercorns] = useState<Peppercorn[]>([]);

  useEffect(() => {
    // Generate falling peppercorns
    const list: Peppercorn[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: 15 + Math.random() * 70, // Keep centered above the bowl
      size: 4 + Math.random() * 6, // 4px to 10px
      delay: Math.random() * 5, // 0s to 5s delay
      duration: 1.5 + Math.random() * 1.5, // 1.5s to 3s fall duration
    }));
    setPeppercorns(list);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const interval = setInterval(() => {
      setFilledProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Stay full for 4 seconds, then reset and loop
          timeoutId = setTimeout(() => {
            setFilledProgress(0);
          }, 4000);
          return 100;
        }
        return prev + 2; // Fills up in about 4 seconds
      });
    }, 80);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [filledProgress === 0]); // restart interval when progress resets to 0

  return (
    <div className="relative flex flex-col items-center justify-center w-72 h-96 md:w-80 md:h-[400px]">
      
      {/* Falling Peppercorns Container */}
      <div className="absolute top-0 inset-x-0 h-64 overflow-hidden pointer-events-none z-10">
        {peppercorns.map((p) => {
          // Only show particles falling when the bowl is not fully filled
          if (filledProgress >= 98) return null;
          return (
            <div
              key={p.id}
              className="absolute bg-[#1a1310] rounded-full shadow-sm animate-pepper-fall"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                top: '-20px',
              }}
            />
          );
        })}
      </div>

      {/* Styled Bowl Container */}
      <div className="relative mt-auto w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-[#E5DFD5] bg-[#F3EFE7] shadow-lg z-20">
        <Image 
          src="/black_pepper_bowl.png" 
          alt="Black Pepper Bowl" 
          fill 
          sizes="(max-width: 768px) 256px, 288px"
          className="object-cover object-center"
        />

        {/* Empty Interior Mask Overlay (Simulating the bowl level filling up) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[74%] h-[74%] rounded-full bg-[#1e2320] absolute transition-all duration-300 origin-bottom"
            style={{
              transform: `scaleY(${1 - filledProgress / 100})`,
              opacity: filledProgress === 100 ? 0 : 0.85,
            }}
          />
        </div>
      </div>
      
      {/* Subtle indicator */}
      <div className="text-[9px] tracking-[0.25em] font-bold uppercase text-[#143525]/45 mt-4 z-20">
        {filledProgress < 100 ? 'Filling Pepper...' : 'Harvest Complete'}
      </div>
    </div>
  );
}
