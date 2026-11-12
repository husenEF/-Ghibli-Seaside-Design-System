import React, { useState } from 'react';
import { Type, Sparkles, Sliders } from 'lucide-react';

export const TypographySpecimen: React.FC = () => {
  const [testText, setTestText] = useState('Coastal Summer by the Sea');
  const [scaleSize, setScaleSize] = useState(36);

  return (
    <section id="type" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
          <Type className="w-4 h-4" />
          <span>Typographic Pairing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-4 text-balance">
          Expressive Serif Paired with Warm Sans-Serif
        </h2>
        <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
          Headlines embrace the whimsical warmth of <strong className="text-[#164E63]">Fraunces</strong>—an organic, soft-curved serif reminiscent of storybook editorial titles. Body text is grounded by <strong className="text-[#164E63]">Plus Jakarta Sans</strong> for clean, inviting readability.
        </p>
      </div>

      {/* Grid: Type Hierarchy & Editorial Prose Sample */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
        {/* Left Column: Hierarchy Ladder */}
        <div className="lg:col-span-7 bg-[#F4EFE6] p-6 sm:p-8 rounded-3xl border border-[#EFE8DC] border-deckle space-y-8">
          <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Type Scale Hierarchy
            </span>
            <span className="text-xs text-[#0284C7] font-medium">Fraunces + Plus Jakarta Sans</span>
          </div>

          {/* Display Hero Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Display Hero (H1)</span>
              <span className="font-mono">clamp(2.5rem, 4vw, 3.75rem) / 1.15</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164E63] font-editorial leading-tight text-balance">
              The Morning Tide Carries Whispers of Summer
            </h1>
          </div>

          {/* Section Heading Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Section Heading (H2)</span>
              <span className="font-mono">2rem (32px) / 1.25</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#164E63] font-editorial">
              Seaside Villages Resting Between Sky and Ocean
            </h2>
          </div>

          {/* Component Title Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Component Title (H3)</span>
              <span className="font-mono">1.35rem (22px) / 1.35</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1E293B] font-editorial">
              01. Hand-Painted Gouache Textures
            </h3>
          </div>

          {/* Body Prose Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Body Prose (Regular)</span>
              <span className="font-mono">1rem (16px) / 1.65 line-height / 68ch</span>
            </div>
            <p className="text-base text-[#334155] leading-relaxed max-w-prose">
              In hand-painted Japanese background art, every rooftop tile, windblown reed, and wave crest possesses a human touch. Lines are never strictly mathematical; rather, they breathe with subtle imperfections and warm daylight.
            </p>
          </div>

          {/* Quiet Metadata Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Quiet Metadata & Caption</span>
              <span className="font-mono">0.8125rem (13px) / Tabular Numbers</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span>Shichirigahama Coast</span>
              <span aria-hidden="true">·</span>
              <span>Observed 14:30 JST</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums font-mono text-[#0284C7]">26.4°C / 1012 hPa</span>
            </div>
          </div>
        </div>

        {/* Right Column: Whimsical Drop Cap & Editorial Specimen */}
        <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#EFE8DC] shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E06D53] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Storybook Editorial Style</span>
          </div>

          {/* Whimsical Drop Cap Paragraph */}
          <div className="relative">
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              <span className="float-left text-5xl sm:text-6xl font-bold font-editorial text-[#164E63] mr-3 mt-1 leading-none select-none">
                A
              </span>
              long the sun-dappled coastal road, hydrangeas lean toward the salt breeze. A bicycle leans quietly against a weathered picket fence as the train rumbles past the open bay. Here, the boundary between land and water is rendered in soft turquoise washes and paper grain.
            </p>
          </div>

          {/* Pull Quote Box with Subtle Deckle Line */}
          <div className="p-5 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC] relative">
            <div className="text-xs text-[#0284C7] font-semibold uppercase tracking-wider mb-2">
              Design Maxim
            </div>
            <blockquote className="font-editorial text-lg text-[#164E63] italic leading-snug">
              "We draw not just the scenery, but the gentle memory of summer that remains in the heart."
            </blockquote>
            <p className="text-xs text-[#64748B] mt-2">
              — Seaside Studio Aesthetic Notes
            </p>
          </div>

          {/* Font Pairing Metrics */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC]">
              <span className="text-[#94A3B8] block text-[11px]">Primary Display</span>
              <span className="font-editorial font-bold text-[#164E63] text-sm">Fraunces</span>
              <span className="text-[#64748B] block text-[11px] mt-0.5">Variable Serif, Soft Curves</span>
            </div>
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC]">
              <span className="text-[#94A3B8] block text-[11px]">Body & UI</span>
              <span className="font-semibold text-[#164E63] text-sm">Plus Jakarta Sans</span>
              <span className="text-[#64748B] block text-[11px] mt-0.5">Warm Geometric Sans</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Typography Scale Slider */}
      <div className="p-6 bg-[#F4EFE6] rounded-3xl border border-[#EFE8DC] border-deckle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#0284C7]" />
            <span className="text-sm font-semibold text-[#164E63]">Interactive Specimen Sandbox</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <label className="text-[#64748B] whitespace-nowrap">Size: <strong className="text-[#1E293B] tabular-nums">{scaleSize}px</strong></label>
            <input
              type="range"
              min="20"
              max="64"
              value={scaleSize}
              onChange={(e) => setScaleSize(Number(e.target.value))}
              className="accent-[#0284C7] cursor-pointer w-32 sm:w-40"
            />
          </div>
        </div>

        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Type any heading to test..."
          className="w-full px-4 py-2 text-sm bg-[#FAF7F2] border border-[#CBD5E1] rounded-xl text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 mb-5"
        />

        <div className="overflow-x-auto py-2">
          <p
            className="font-editorial font-bold text-[#164E63] transition-all whitespace-nowrap leading-tight"
            style={{ fontSize: `${scaleSize}px` }}
          >
            {testText || 'Summer Coastal Village by the Sea'}
          </p>
        </div>
      </div>
    </section>
  );
};
