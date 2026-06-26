import React from 'react';
import blackLogo from '../assets/images/BLACK.png';

interface LogoProps {
  light?: boolean;
  className?: string;
  sizeMultiplier?: number;
}

export default function Logo({ light = false, className = '', sizeMultiplier = 1 }: LogoProps) {
  // Base dimensions scaled by sizeMultiplier
  const baseWidth = 100 * sizeMultiplier;
  const baseHeight = 55 * sizeMultiplier;
  const textColor = light ? '#FFFFFF' : '#1A1A2E';
  
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <img
        src={blackLogo}
        alt="Uhalegal"
        style={{ 
          width: baseWidth, 
          height: 'auto',
          maxWidth: '100%',
          filter: light ? 'invert(1)' : 'none',
          transition: 'filter 300ms ease',
          imageRendering: 'crisp-edges'
        }}
      />
      
      {/* Subtext with perfect letter spacing */}
      <div 
        className="uppercase tracking-[0.45em] font-sans font-bold transition-colors duration-300"
        style={{ 
          color: textColor,
          fontSize: `${7.5 * sizeMultiplier}px`,
          marginTop: `${2 * sizeMultiplier}px`
        }}
      >
        U h a l e g a l
      </div>
    </div>
  );
}
