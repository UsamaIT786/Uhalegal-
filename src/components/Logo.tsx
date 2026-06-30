import React from 'react';
import newLogo from '../assets/images/NEW_LOGO.png';

interface LogoProps {
  className?: string;
  sizeMultiplier?: number;
  // Keep props for compatibility
  light?: boolean;
  showText?: boolean;
}

export default function Logo({ className = '', sizeMultiplier = 1 }: LogoProps) {
  // Base dimensions scaled by sizeMultiplier
  const baseSize = 45 * sizeMultiplier;
  
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <img
        src={newLogo}
        alt="Uhalegal"
        style={{ 
          width: baseSize, 
          height: baseSize,
          maxWidth: '100%',
          objectFit: 'contain',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          imageRendering: '-webkit-optimize-contrast',
          transform: 'translateZ(0)',
          transition: 'all 300ms ease',
        }}
      />
    </div>
  );
}
