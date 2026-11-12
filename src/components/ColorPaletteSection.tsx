import React, { useState } from 'react';
import { Copy, Check, Droplets, Palette } from 'lucide-react';
import { ColorToken } from '../types/designSystem';

export const ColorPaletteSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const palettes: { category: string; description: string; tokens: ColorToken[] }[] = [
    {
      category: 'Canvas & Base Surfaces (60%)',
      description: 'Warm cream, ivory, and soft sand surfaces replacing harsh, sterile pure white.',
      tokens: [
        {
          name: 'Warm Cream',
          role: 'Primary Canvas Background',
          hex: '#FAF7F2',
          variable: '--color-cream',
          textContrast: 'text-[#1E293B]',
          usage: 'Page body, master layout backgrounds',
        },
        {
          name: 'Soft Ivory',
          role: 'Secondary Surface / Cards',
          hex: '#F4EFE6',
          variable: '--color-ivory',
          textContrast: 'text-[#1E293B]',
          usage: 'Card backgrounds, drawer menus, header wash',
        },
        {
          name: 'Sunlit Sand',
          role: 'Subtle Borders & Dividers',
          hex: '#EFE8DC',
          variable: '--color-sand',
          textContrast: 'text-[#1E293B]',
          usage: 'Container outlines, table rules, input borders',
        },
      ],
    },
    {
      category: 'Ocean & Sky Tides (Primary Accents)',
      description: 'Hand-painted watercolor blues reflecting the Japanese coast and sea breezes.',
      tokens: [
        {
          name: 'Ocean Blue',
          role: 'Primary Interactive Accent',
          hex: '#0284C7',
          variable: '--color-ocean',
          textContrast: 'text-white',
          usage: 'Primary buttons, active indicators, focal links',
        },
        {
          name: 'Deep Tidal Navy',
          role: 'Editorial Headlines & Anchors',
          hex: '#164E63',
          variable: '--color-ocean-deep',
          textContrast: 'text-white',
          usage: 'Large serif titles, brand wordmark, strong framing',
        },
        {
          name: 'Seafoam Turquoise',
          role: 'Coastal Shore Accent',
          hex: '#0D9488',
          variable: '--color-turquoise',
          textContrast: 'text-white',
          usage: 'Secondary badges, subtle botanical highlights',
        },
        {
          name: 'Soft Sky Blue',
          role: 'Atmospheric Secondary Wash',
          hex: '#BAE6FD',
          variable: '--color-sky-blue',
          textContrast: 'text-[#0369A1]',
          usage: 'Hover tints, active tab pills, sky vignettes',
        },
      ],
    },
    {
      category: 'Sunlight & Coastal Flora (Warm Highlights)',
      description: 'Earthy greens, muted corals, and sun-warmed peach derived from coastal wildflowers and clay tiles.',
      tokens: [
        {
          name: 'Muted Coral',
          role: 'Warm Sunset Highlight',
          hex: '#E06D53',
          variable: '--color-coral',
          textContrast: 'text-white',
          usage: 'Special callout accents, floral highlights',
        },
        {
          name: 'Summer Peach',
          role: 'Golden Hour Tint',
          hex: '#FDBA74',
          variable: '--color-peach',
          textContrast: 'text-[#9A3412]',
          usage: 'Warm subtle backgrounds, notification badges',
        },
        {
          name: 'Sage Meadow',
          role: 'Natural Elements & Foliage',
          hex: '#65A30D',
          variable: '--color-sage',
          textContrast: 'text-white',
          usage: 'Botanical tags, organic status indicators',
        },
        {
          name: 'Coastal Pine',
          role: 'Deep Flora Anchor',
          hex: '#3F6212',
          variable: '--color-leaf',
          textContrast: 'text-white',
          usage: 'Hillside silhouettes, dark organic accents',
        },
      ],
    },
    {
      category: 'Typographic Ink (Legibility & Contrast)',
      description: 'Softer than pure black for a gentle, gouache-printed reading experience.',
      tokens: [
        {
          name: 'Weathered Charcoal',
          role: 'Primary Body Text',
          hex: '#1E293B',
          variable: '--color-charcoal',
          textContrast: 'text-white',
          usage: 'Paragraph prose, form inputs, primary UI copy',
        },
        {
          name: 'Sea Cliff Slate',
          role: 'Muted Metadata & Captions',
          hex: '#64748B',
          variable: '--color-slate',
          textContrast: 'text-white',
          usage: 'Timestamps, unboxed metadata, secondary labels',
        },
      ],
    },
  ];

  return (
    <section id="palette" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
          <Palette className="w-4 h-4" />
          <span>Chromatic System</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-4 text-balance">
          Soft, Nature-Inspired Coastal Palette
        </h2>
        <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
          Inspired by hand-mixed gouache pigments used in classic anime backgrounds. Free from harsh neon gradients, sterile stark white, and oversaturated extremes.
        </p>
      </div>

      {/* 60-30-10 Distribution Visualization */}
      <div className="mb-14 p-6 sm:p-8 bg-[#F4EFE6] rounded-3xl border border-[#EFE8DC] border-deckle">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-sm font-semibold text-[#164E63]">60-30-10 Palette Orchestration</span>
          <span className="text-xs text-[#64748B]">Harmonious Visual Weight</span>
        </div>

        {/* Visual Bar */}
        <div className="h-6 w-full rounded-full overflow-hidden flex shadow-inner border border-[#EFE8DC]">
          <div className="w-[60%] bg-[#FAF7F2] flex items-center justify-center text-[11px] font-medium text-[#475569] border-r border-[#EFE8DC]">
            60% Warm Cream Canvas
          </div>
          <div className="w-[30%] bg-[#E0F2FE] flex items-center justify-center text-[11px] font-medium text-[#0369A1] border-r border-[#BAE6FD]">
            30% Sky & Ivory Surfaces
          </div>
          <div className="w-[10%] bg-[#0284C7] flex items-center justify-center text-[11px] font-semibold text-white">
            10% Ocean
          </div>
        </div>
      </div>

      {/* Palette Token Groups */}
      <div className="space-y-12">
        {palettes.map((group) => (
          <div key={group.category} className="space-y-4">
            <div className="border-b border-[#EFE8DC] pb-2">
              <h3 className="text-xl font-bold text-[#164E63] font-editorial">
                {group.category}
              </h3>
              <p className="text-xs text-[#64748B] mt-1">{group.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {group.tokens.map((token) => (
                <div
                  key={token.hex}
                  className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] hover:border-[#CBD5E1] transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Color Swatch Block */}
                    <div
                      className="h-24 w-full rounded-xl mb-3 shadow-inner relative flex items-end p-2 border border-black/5 transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: token.hex }}
                    >
                      <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-xs ${token.textContrast}`}>
                        {token.hex}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-[#1E293B] mb-0.5">
                      {token.name}
                    </h4>
                    <p className="text-xs text-[#0284C7] font-medium mb-1.5">
                      {token.role}
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {token.usage}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <div className="mt-4 pt-3 border-t border-[#EFE8DC] flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8] font-mono text-[11px]">{token.variable}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(token.hex)}
                      className="inline-flex items-center gap-1 text-[#0284C7] hover:text-[#0369A1] font-medium transition-colors"
                      title="Copy hex code"
                    >
                      {copiedCode === token.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
