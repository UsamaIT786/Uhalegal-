import React from 'react';
import { motion } from 'motion/react';

export default function DualWavingFlags() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-4xl mx-auto py-8">
      {/* 
        We have removed the low-resolution, jagged SVG <filter> (feTurbulence/feDisplacementMap)
        which caused pixelated and poor-quality edges. Instead, we use pixel-perfect, infinitely 
        scalable vector SVGs combined with smooth 3D CSS transforms and a moving satin sheen 
        light overlay to simulate a natural, flowing wind movement of premium quality.
      */}

      {/* United Kingdom Flag Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group w-[280px] sm:w-[340px] h-[180px] sm:h-[220px] shadow-2xl rounded-sm overflow-hidden border border-white/20 select-none cursor-pointer"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Flag Inner Element with smooth 3D waving animation */}
        <div 
          className="w-full h-full relative animate-[flagWave_5.5s_infinite_ease-in-out]"
          style={{ transformOrigin: "left center" }}
        >
          {/* High-Fidelity Union Jack SVG */}
          <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
            <rect width="60" height="30" fill="#012169" />
            {/* Diagonal White Lines */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
            {/* Diagonal Red Lines */}
            <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" strokeWidth="2" />
            {/* Vertical/Horizontal White Cross */}
            <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFFFFF" strokeWidth="10" />
            {/* Vertical/Horizontal Red Cross */}
            <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
          </svg>

          {/* Satin Fabric Sheen & Wave Shadow Overlay moving across flag */}
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-35 bg-gradient-to-r from-black/20 via-transparent to-black/35 bg-[length:200%_100%] animate-[waveShadow_5.5s_infinite_linear]" />
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 bg-gradient-to-r from-transparent via-white/25 to-transparent bg-[length:200%_100%] animate-[waveShadow_5.5s_infinite_linear]" />
        </div>
        
        {/* Country Label Badge */}
        <div className="absolute bottom-3 left-3 bg-navy/90 border border-gold/30 px-3 py-1 text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-white rounded-none z-10 shadow-lg">
          United Kingdom
        </div>
      </motion.div>

      {/* Central Corridor Icon/Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center justify-center text-center z-10"
      >
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gold bg-navy flex items-center justify-center shadow-lg transform rotate-45 group hover:scale-110 transition-transform duration-300">
          <span className="font-serif text-gold text-lg sm:text-xl font-semibold -rotate-45 block">L&I</span>
        </div>
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gold mt-3 block">
          Direct Corridor
        </span>
      </motion.div>

      {/* Pakistan Flag Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative group w-[280px] sm:w-[340px] h-[180px] sm:h-[220px] shadow-2xl rounded-sm overflow-hidden border border-white/20 select-none cursor-pointer"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Flag Inner Element with smooth 3D waving animation (slightly out of sync for realism) */}
        <div 
          className="w-full h-full relative animate-[flagWave_6s_infinite_ease-in-out]"
          style={{ transformOrigin: "left center", animationDelay: "-2s" }}
        >
          {/* High-Fidelity Pakistan Flag SVG */}
          <svg viewBox="0 0 300 200" className="w-full h-full object-cover">
            {/* Green Part */}
            <rect width="300" height="200" fill="#01411C" />
            {/* White Hoist (1/4 of total length = 75px) */}
            <rect width="75" height="200" fill="#FFFFFF" />
            {/* Crescent & Star (centered in green part) */}
            <g transform="translate(187.5, 100)">
              {/* White Crescent */}
              <path d="M 2.5,-37.5 A 41.5,41.5 0 1,0 41.5,22 A 33,33 0 1,1 2.5,-37.5" fill="#FFFFFF" />
              {/* White 5-pointed Star rotated properly */}
              <polygon 
                points="0,-18 5,-4 19,-4 8,4 12,18 0,9 -12,18 -8,4 -19,-4 -5,-4" 
                fill="#FFFFFF" 
                transform="translate(14, -14) rotate(45)" 
              />
            </g>
          </svg>

          {/* Satin Fabric Sheen & Wave Shadow Overlay moving across flag */}
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40 bg-gradient-to-r from-black/20 via-transparent to-black/35 bg-[length:200%_100%] animate-[waveShadow_6s_infinite_linear]" style={{ animationDelay: "-2s" }} />
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20 bg-gradient-to-r from-transparent via-white/25 to-transparent bg-[length:200%_100%] animate-[waveShadow_6s_infinite_linear]" style={{ animationDelay: "-2s" }} />
        </div>
        
        {/* Country Label Badge */}
        <div className="absolute bottom-3 right-3 bg-navy/90 border border-gold/30 px-3 py-1 text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-white rounded-none z-10 shadow-lg">
          Pakistan
        </div>
      </motion.div>
    </div>
  );
}
