import React from 'react';
import { Wind, Sun, Waves, Sparkles, ArrowDown } from 'lucide-react';
import { TimeOfDay } from '../types/designSystem';
import heroSeasideImage from '../assets/images/hero_ghibli_seaside_1794435841924.jpg';

interface AtmosphericHeroProps {
  timeOfDay: TimeOfDay;
}

export const AtmosphericHero: React.FC<AtmosphericHeroProps> = ({ timeOfDay }) => {
  // Atmospheric lighting overlay styles depending on the time of day
  const getAtmosphereOverlay = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'bg-gradient-to-b from-[#E0F2FE]/45 via-transparent to-[#FAF7F2]';
      case 'afternoon':
        return 'bg-gradient-to-b from-[#BAE6FD]/30 via-transparent to-[#FAF7F2]';
      case 'sunset':
        return 'bg-gradient-to-b from-[#FED7AA]/50 via-[#FDBA74]/20 to-[#FAF7F2]';
      case 'twilight':
        return 'bg-gradient-to-b from-[#1E293B]/40 via-[#0F172A]/20 to-[#FAF7F2]';
      default:
        return 'bg-gradient-to-b from-transparent to-[#FAF7F2]';
    }
  };

  return (
    <section id="aesthetic" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-20">
      {/* Background Hand-painted Ghibli Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSeasideImage}
          alt="Studio Ghibli style seaside village with azure ocean, lush green rolling hills and summer cumulus clouds"
          className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic Atmospheric Tint Overlay */}
        <div className={`absolute inset-0 transition-colors duration-700 ${getAtmosphereOverlay()}`} />

        {/* Paper Grain Texture Overlay */}
        <div className="absolute inset-0 paper-texture opacity-65 pointer-events-none" />

        {/* Soft Sunbeam Shimmer Effect */}
        <div 
          className="absolute -top-24 left-1/4 w-96 h-[120%] bg-gradient-to-b from-white/35 via-white/10 to-transparent transform -rotate-12 pointer-events-none animate-sunbeam blur-md"
        />

        {/* Floating Decorative Clouds (SVG) */}
        <div className="absolute top-12 left-10 opacity-75 animate-float-slow pointer-events-none hidden lg:block">
          <svg width="140" height="70" viewBox="0 0 140 70" fill="none">
            <path
              d="M20,50 C10,50 0,42 0,30 C0,18 12,12 24,14 C28,6 38,0 52,0 C70,0 84,12 88,24 C96,22 108,26 112,36 C122,36 130,42 130,50 C130,58 120,64 110,64 L20,64 C10,64 10,50 20,50 Z"
              fill="white"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        {/* Coastal Seabirds (SVG) */}
        <div className="absolute top-24 right-1/4 opacity-80 animate-float-gentle pointer-events-none hidden sm:block">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#164E63" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4,16 Q14,4 24,14 Q34,4 44,16" />
          </svg>
        </div>
      </div>

      {/* Hero Foreground Content Card with Editorial Framing */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 sm:mt-8">
        {/* Soft Editorial Floating Plaque */}
        <div className="bg-[#FAF7F2]/90 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-3xl border border-[#EFE8DC] border-deckle shadow-xl max-w-4xl mx-auto transition-all duration-300">
          
          {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#475569] mb-4">
            <span className="text-[#0284C7] flex items-center gap-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Hand-Painted Gouache
            </span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span>Coastal Summer Palette</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span>Organic Shapes & Waves</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span className="text-[#65A30D]">Nature-First Harmonies</span>
          </div>

          {/* Whimsical Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#164E63] font-editorial leading-[1.18] tracking-tight mb-5 text-balance">
            Where the Summer Breeze Meets the Open Tide
          </h1>

          {/* Atmosphere Narrative Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-[#334155] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            A Studio Ghibli-inspired design system crafted with warm cream surfaces, hand-painted seaside tones, gentle wave curves, and nostalgic Japanese coastal warmth.
          </p>

          {/* Primary & Secondary Action Pair */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#components"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Waves className="w-5 h-5" />
              <span>Explore Component Library</span>
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-[#164E63] bg-[#F4EFE6] hover:bg-[#EFE8DC] border border-[#CBD5E1]/60 rounded-2xl transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <Sun className="w-5 h-5 text-[#E06D53]" />
              <span>View Coastal Scenery</span>
            </a>
          </div>

          {/* Ambient Seaside Telemetry / Nature Signals (Natural editorial strip) */}
          <div className="mt-10 pt-6 border-t border-[#EFE8DC] flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-[#475569]">
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-[#0D9488]" />
              <span>Breeze: <strong>12 kts Southwest</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#0284C7]" />
              <span>Swell: <strong>0.8m Turquoise Tide</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#E06D53]" />
              <span>Sunlight: <strong>Soft Gouache Luster</strong></span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-2 text-xs font-medium text-[#164E63]/80 animate-bounce">
          <span>Scroll to explore the visual design system</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
