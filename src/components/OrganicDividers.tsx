import React from 'react';

export const WaveDivider: React.FC<{ 
  fillColor?: string; 
  className?: string;
  inverted?: boolean;
}> = ({ fillColor = '#FAF7F2', className = '', inverted = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${inverted ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,64 480,12 720,40 C960,68 1200,24 1440,48 L1440,96 L0,96 Z"
          fill={fillColor}
        />
        <path
          d="M0,45 C320,18 640,60 960,35 C1200,15 1360,50 1440,42 L1440,96 L0,96 Z"
          fill={fillColor}
          fillOpacity="0.45"
        />
      </svg>
    </div>
  );
};

export const HillDivider: React.FC<{
  fillColor?: string;
  className?: string;
}> = ({ fillColor = '#F4EFE6', className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,48 C360,10 680,65 1020,25 C1240,0 1380,30 1440,40 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const DeckleBorder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`h-2 w-full opacity-60 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(186, 172, 150, 0.4) 0%, transparent 70%)`,
        backgroundSize: '16px 8px'
      }}
    />
  );
};
