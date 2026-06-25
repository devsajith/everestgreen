'use client';

export default function EverestAnimation() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg 
        viewBox="0 0 100 75" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 1. Copper Sun (Background) */}
        <circle
          cx="68"
          cy="28"
          r="10"
          stroke="#BD6A42"
          strokeWidth="1.5"
          strokeDasharray="2, 2"
          strokeOpacity="0.55"
        />
        <circle
          cx="68"
          cy="28"
          r="8"
          fill="#FAF6F0"
          stroke="#BD6A42"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* 2. Left Background Peak */}
        <path
          d="M 5 62 L 28 28 L 50 62 Z"
          fill="#A4B69E"
          stroke="#143525"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 5 62 L 28 28 L 50 62 Z"
          fill="#FAF9F6"
          fillOpacity="0.45"
        />

        {/* 3. Right Background Peak */}
        <path
          d="M 52 62 L 74 32 L 95 62 Z"
          fill="#A4B69E"
          stroke="#143525"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 52 62 L 74 32 L 95 62 Z"
          fill="#FAF9F6"
          fillOpacity="0.45"
        />

        {/* 4. Main Everest Peak (Foreground, Faceted) */}
        {/* Light side (Left facet) */}
        <path
          d="M 18 62 L 50 12 L 48 62 Z"
          fill="#8CB082"
          stroke="#143525"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Shadow side (Right facet) */}
        <path
          d="M 48 62 L 50 12 L 82 62 Z"
          fill="#729668"
          stroke="#143525"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* 5. Minimalist Base Line */}
        <line
          x1="2"
          y1="62"
          x2="98"
          y2="62"
          stroke="#143525"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 6. Stylized Organic Herbs growing at the base */}
        {/* Left herbal sprig */}
        <path
          d="M 15 62 Q 22 55 18 42"
          stroke="#143525"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="42"
          r="1.8"
          fill="#BD6A42"
        />
        <circle
          cx="21"
          cy="50"
          r="1.5"
          fill="#143525"
        />

        {/* Right herbal sprig */}
        <path
          d="M 85 62 Q 78 55 82 40"
          stroke="#143525"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="82"
          cy="40"
          r="1.8"
          fill="#BD6A42"
        />
        <circle
          cx="79"
          cy="49"
          r="1.5"
          fill="#143525"
        />

        {/* 7. Himalayan Mist Cloud (Static) */}
        <path
          d="M 25 45 C 32 40 40 40 48 45 C 56 42 64 42 70 45"
          stroke="#FAF6F0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
