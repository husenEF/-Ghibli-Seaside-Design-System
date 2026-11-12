import React from 'react';
import { Compass, Sparkles, Feather, Waves, Sun, Heart } from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Hand-Painted Warmth & Organic Imperfection',
      subtitle: 'Living surfaces over clinical sterility',
      description: 'Sterile 100% white canvases and laser-straight geometric grids are replaced with soft warm cream (#FAF7F2), ivory tones, and gentle deckle borders. Shapes carry the subtle, human irregularity of traditional Japanese animation background paintings.',
      icon: Feather,
      color: '#0284C7',
    },
    {
      number: '02',
      title: 'Atmospheric Perspective & Soft Sunlight',
      subtitle: 'Depth created through light, air, and ocean haze',
      description: 'Layers of scenery fade into soft cerulean and misty horizons. Giant summer cumulus clouds, gentle sunbeam glints, and watercolor washes give every interface a sense of open sky, coastal breeze, and peaceful summer freedom.',
      icon: Sun,
      color: '#E06D53',
    },
    {
      number: '03',
      title: 'Nature-First Harmonic Palette',
      subtitle: 'Pigments drawn from the coastal village and sea',
      description: 'Harsh neon gradients and corporate purples are banished in favor of oceanic turquoise, deep marine navy, summer peach, and hillside sage green. Every color is balanced to feel natural, grounded, and gentle on the eyes.',
      icon: Waves,
      color: '#0D9488',
    },
    {
      number: '04',
      title: 'Quiet Editorial Typographic Dignity',
      subtitle: 'Whimsical serif headings paired with clean prose',
      description: 'Expressive serif headlines (Fraunces) lend a storybook literary elegance, while generous line-heights and warm sans-serif body copy ensure effortless legibility. Content is celebrated with ample whitespace and zero visual clutter.',
      icon: Heart,
      color: '#65A30D',
    },
  ];

  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
          <Compass className="w-4 h-4" />
          <span>Core Design Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-4 text-balance">
          The Four Tenets of Summer by the Sea
        </h2>
        <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
          How to capture the heartwarming, nostalgic poetry of Studio Ghibli seaside scenery in modern digital product design.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.number}
              className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EFE8DC] border-deckle shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-editorial text-3xl font-bold text-[#164E63] opacity-50">
                    {item.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-bold text-[#164E63] font-editorial mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFE8DC] flex items-center gap-2 text-xs text-[#64748B]">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Hand-crafted aesthetic standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
