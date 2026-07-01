import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Dynamic progress bar increments
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment faster at first, then slower towards the end for realistic load feel
        const diff = prev < 60 ? Math.random() * 15 + 5 : Math.random() * 5 + 1;
        return Math.min(Math.round(prev + diff), 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Trigger fade out after 100% loading completes
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 500);

      // Trigger unmount after fade transition ends (700ms)
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1200);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-light/30 via-navy to-[#05070C] transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background visual element */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-md w-full px-8 text-center">
        
        {/* Flag corridor animation system */}
        <div className="flex items-center justify-center space-x-12 mb-12 relative w-full">
          {/* Connecting corridor line */}
          <div className="absolute left-[20%] right-[20%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-gold/50 via-gold/10 to-gold/50 z-0">
            {/* Travelling gold spark */}
            <div className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37] absolute top-1/2 -translate-y-1/2 animate-[ping-pong_2s_ease-in-out_infinite]" />
          </div>

          {/* Left Flag: UK */}
          <div className="h-12 w-12 rounded-full border-2 border-gold/30 hover:border-gold p-[2px] bg-navy-light/40 overflow-hidden shadow-lg z-10 animate-[pulse-glow_3s_infinite_ease-in-out] relative">
            <div className="w-full h-full rounded-full overflow-hidden">
              <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                <rect width="60" height="30" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" strokeWidth="2" />
                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFFFFF" strokeWidth="10" />
                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
              </svg>
            </div>
          </div>

          {/* Core Logo Container */}
          <div className="relative h-28 w-28 flex items-center justify-center z-20">
            {/* Spinning decorative gold ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gold/40 animate-[spin_10s_linear_infinite]" />
            {/* Glow Aura behind logo */}
            <div className="absolute h-20 w-20 rounded-full bg-gold/15 blur-md animate-[pulse_2s_infinite]" />
            
            {/* White Logo Badge */}
            <Logo light={true} sizeMultiplier={1.8} />
          </div>

          {/* Right Flag: Pakistan */}
          <div className="h-12 w-12 rounded-full border-2 border-gold/30 hover:border-gold p-[2px] bg-navy-light/40 overflow-hidden shadow-lg z-10 animate-[pulse-glow_3s_infinite_ease-in-out_1.5s] relative">
            <div className="w-full h-full rounded-full overflow-hidden">
              <svg viewBox="0 0 300 200" className="w-full h-full object-cover">
                <rect width="300" height="200" fill="#01411C" />
                <rect width="75" height="200" fill="#FFFFFF" />
                <g transform="translate(187.5, 100)">
                  <path d="M 2.5,-37.5 A 41.5,41.5 0 1,0 41.5,22 A 33,33 0 1,1 2.5,-37.5" fill="#FFFFFF" />
                  <polygon points="0,-18 5,-4 19,-4 8,4 12,18 0,9 -12,18 -8,4 -19,-4 -5,-4" fill="#FFFFFF" transform="translate(14, -14) rotate(45)" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Loading details text */}
        <span className="font-serif text-sm tracking-widest text-gold font-bold uppercase animate-pulse">
          L I A I S O N &nbsp; C O U N S E L
        </span>
        <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">
          Loading Unified Legal System
        </span>

        {/* Progress bar container */}
        <div className="h-[2px] w-48 bg-white/10 rounded-full overflow-hidden mt-6 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-gold-light via-gold to-gold-dark transition-all duration-100 ease-out shadow-[0_0_6px_#D4AF37]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic percentage counter */}
        <span className="font-sans font-bold text-xs text-gold mt-3 tabular-nums tracking-wide">
          {progress}%
        </span>
      </div>
    </div>
  );
}
