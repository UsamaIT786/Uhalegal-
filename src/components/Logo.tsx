import React from 'react';
import newLogo from '../assets/images/Black (1).png';

interface LogoProps {
  className?: string;
  sizeMultiplier?: number;
  // Keep props for compatibility
  light?: boolean;
  showText?: boolean;
}

export default function Logo({ className = '', sizeMultiplier = 1, light = false }: LogoProps) {
  // Base height scaled by sizeMultiplier
  const baseHeight = 60 * sizeMultiplier;
  
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <img
        src={newLogo}
        alt="Uhalegal"
        style={{ 
          height: baseHeight,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: light ? 'brightness(0) invert(1)' : undefined,
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0)',
          transition: 'all 300ms ease',
        }}
      />
    </div>
  );
}
