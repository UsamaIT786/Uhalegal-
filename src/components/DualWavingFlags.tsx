import React from 'react';
import { motion } from 'motion/react';

interface DualWavingFlagsProps {
  region: 'UK' | 'PK';
}

export default function DualWavingFlags({ region }: DualWavingFlagsProps) {
  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto py-8">
      {region === 'UK' ? (
        /* United Kingdom Flag & Pole Container */
        <div className="flex items-start justify-center overflow-visible select-none" style={{ perspective: "1000px" }}>
          {/* Metallic Gold Flagpole */}
          <div className="relative w-[6px] h-[200px] sm:h-[240px] bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 rounded-full shadow-inner flex-shrink-0 z-20">
            {/* Gold Finial Ball */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-md border border-gold-light/40" />
          </div>

          {/* United Kingdom Flag Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group w-[280px] sm:w-[340px] h-[180px] sm:h-[220px] shadow-2xl rounded-sm overflow-hidden border border-white/20 select-none animate-[flagWave_5.5s_infinite_ease-in-out] origin-left z-10"
            style={{ transformStyle: "preserve-3d" }}
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
            
            {/* Country Label Badge */}
            <div className="absolute bottom-3 left-3 bg-navy/90 border border-gold/30 px-3 py-1 text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-white rounded-none z-10 shadow-lg">
              United Kingdom
            </div>
          </motion.div>
        </div>
      ) : (
        /* Pakistan Flag & Pole Container */
        <div className="flex items-start justify-center overflow-visible select-none" style={{ perspective: "1000px" }}>
          {/* Metallic Gold Flagpole */}
          <div className="relative w-[6px] h-[200px] sm:h-[240px] bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 rounded-full shadow-inner flex-shrink-0 z-20">
            {/* Gold Finial Ball */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-md border border-gold-light/40" />
          </div>

          {/* Pakistan Flag Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group w-[280px] sm:w-[340px] h-[180px] sm:h-[220px] shadow-2xl rounded-sm overflow-hidden border border-white/20 select-none animate-[flagWave_6s_infinite_ease-in-out] origin-left z-10"
            style={{ transformStyle: "preserve-3d", animationDelay: "-2s" }}
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
            
            {/* Country Label Badge */}
            <div className="absolute bottom-3 right-3 bg-navy/90 border border-gold/30 px-3 py-1 text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-white rounded-none z-10 shadow-lg">
              Pakistan
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
