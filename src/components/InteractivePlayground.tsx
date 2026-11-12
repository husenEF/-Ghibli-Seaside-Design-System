import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, Layers, RotateCcw } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [componentType, setComponentType] = useState<'card' | 'button' | 'badge'>('card');
  const [accentColor, setAccentColor] = useState<'ocean' | 'coral' | 'sage' | 'turquoise'>('ocean');
  const [cornerStyle, setCornerStyle] = useState<'organic' | 'soft' | 'pill'>('organic');
  const [showGrain, setShowGrain] = useState<boolean>(true);
  const [showDeckle, setShowDeckle] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Computed styles based on playground state
  const getAccentBg = () => {
    switch (accentColor) {
      case 'ocean': return 'bg-[#0284C7] text-white hover:bg-[#0369A1]';
      case 'coral': return 'bg-[#E06D53] text-white hover:bg-[#C25239]';
      case 'sage': return 'bg-[#65A30D] text-white hover:bg-[#4D7C0F]';
      case 'turquoise': return 'bg-[#0D9488] text-white hover:bg-[#0F766E]';
    }
  };

  const getAccentBorder = () => {
    switch (accentColor) {
      case 'ocean': return 'border-[#0284C7] text-[#0284C7]';
      case 'coral': return 'border-[#E06D53] text-[#E06D53]';
      case 'sage': return 'border-[#65A30D] text-[#65A30D]';
      case 'turquoise': return 'border-[#0D9488] text-[#0D9488]';
    }
  };

  const getCornerClass = () => {
    switch (cornerStyle) {
      case 'organic': return 'border-hand-drawn-soft';
      case 'soft': return 'rounded-3xl';
      case 'pill': return 'rounded-full';
    }
  };

  // Generate code snippet
  const generateCode = () => {
    if (componentType === 'card') {
      return `<div className="bg-[#FAF7F2] p-6 ${getCornerClass()} ${showDeckle ? 'border-deckle ' : ''}${showGrain ? 'paper-texture ' : ''}border border-[#EFE8DC] shadow-sm">
  <div className="text-xs font-semibold ${getAccentBorder()} uppercase tracking-wider mb-2">
    Seaside Village
  </div>
  <h3 className="text-xl font-bold font-editorial text-[#164E63] mb-2">
    Midsummer Coastal Horizon
  </h3>
  <p className="text-sm text-[#475569] leading-relaxed mb-4">
    Warm sea breeze passing through coastal pines and weathered shingles.
  </p>
  <button className="px-4 py-2 text-xs font-semibold rounded-xl ${getAccentBg()} transition-all">
    Explore Shoreline
  </button>
</div>`;
    } else if (componentType === 'button') {
      return `<button className="px-6 py-3 text-sm font-semibold ${getAccentBg()} ${getCornerClass()} shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer">
  Coastal Discovery
</button>`;
    } else {
      return `<span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium ${getCornerClass()} bg-[#FAF7F2] ${getAccentBorder()} border shadow-xs">
  <span className="w-1.5 h-1.5 rounded-full ${getAccentBg()}" />
  Coastal Station 04
</span>`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setComponentType('card');
    setAccentColor('ocean');
    setCornerStyle('organic');
    setShowGrain(true);
    setShowDeckle(true);
  };

  return (
    <section id="workbench" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
          <Sliders className="w-4 h-4" />
          <span>Interactive Customizer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-3 text-balance">
          Living Component Workbench
        </h2>
        <p className="text-[#475569] text-base leading-relaxed">
          Experiment with hand-drawn organic borders, paper grain textures, and seaside accent tones. Preview your tailored component and copy the pristine Tailwind CSS classes directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Controls Panel */}
        <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-8 rounded-3xl border border-[#EFE8DC] border-deckle flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
              <span className="text-xs font-semibold text-[#164E63] uppercase tracking-wider">
                Style Parameters
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#64748B] hover:text-[#164E63] flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Component Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                Component Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['card', 'button', 'badge'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setComponentType(type)}
                    className={`py-2 px-3 text-xs font-medium rounded-xl capitalize transition-all ${
                      componentType === type
                        ? 'bg-[#FAF7F2] text-[#0284C7] shadow-xs font-semibold border border-[#CBD5E1]'
                        : 'bg-[#EFE8DC]/60 text-[#64748B] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Accent Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                Seaside Accent Tone
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'ocean', label: 'Ocean Blue', color: '#0284C7' },
                  { id: 'coral', label: 'Sunset Coral', color: '#E06D53' },
                  { id: 'sage', label: 'Sage Meadow', color: '#65A30D' },
                  { id: 'turquoise', label: 'Seafoam Teal', color: '#0D9488' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAccentColor(item.id as any)}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-xl border transition-all ${
                      accentColor === item.id
                        ? 'bg-[#FAF7F2] border-[#0284C7] text-[#1E293B] shadow-xs'
                        : 'bg-[#EFE8DC]/60 border-transparent text-[#64748B] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Curvature Style */}
            <div>
              <label className="block text-xs font-semibold text-[#1E293B] mb-2">
                Organic Curvature
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'organic', label: 'Hand-Drawn' },
                  { id: 'soft', label: 'Soft Rounded' },
                  { id: 'pill', label: 'Pill Curvature' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCornerStyle(item.id as any)}
                    className={`py-2 px-2 text-xs font-medium rounded-xl transition-all ${
                      cornerStyle === item.id
                        ? 'bg-[#FAF7F2] text-[#0284C7] shadow-xs font-semibold border border-[#CBD5E1]'
                        : 'bg-[#EFE8DC]/60 text-[#64748B] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Texture Toggles */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold text-[#1E293B]">
                Tactile Paper Textures
              </label>
              <div className="flex items-center justify-between p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC]">
                <span className="text-xs text-[#475569]">Paper Grain Noise Overlay</span>
                <input
                  type="checkbox"
                  checked={showGrain}
                  onChange={(e) => setShowGrain(e.target.checked)}
                  className="w-4 h-4 accent-[#0284C7] cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between p-3 bg-[#FAF7F2] rounded-xl border border-[#EFE8DC]">
                <span className="text-xs text-[#475569]">Deckle Edge Border Shadow</span>
                <input
                  type="checkbox"
                  checked={showDeckle}
                  onChange={(e) => setShowDeckle(e.target.checked)}
                  className="w-4 h-4 accent-[#0284C7] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview & Generated Code */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* Live Component Stage */}
          <div className="p-8 sm:p-12 bg-[#FAF7F2] rounded-3xl border border-[#EFE8DC] border-deckle shadow-sm min-h-[300px] flex items-center justify-center relative overflow-hidden">
            {/* Background subtle wash */}
            <div className="absolute inset-0 watercolor-wash opacity-30 pointer-events-none" />

            {/* Dynamic Component Render */}
            <div className="relative z-10 w-full max-w-md flex justify-center">
              {componentType === 'card' && (
                <div
                  className={`bg-[#FAF7F2] p-7 ${getCornerClass()} ${
                    showDeckle ? 'border-deckle ' : ''
                  }${showGrain ? 'paper-texture ' : ''}border border-[#EFE8DC] shadow-md transition-all duration-300 w-full`}
                >
                  <div className={`text-xs font-semibold ${getAccentBorder()} uppercase tracking-wider mb-2`}>
                    Seaside Sanctuary No. 12
                  </div>
                  <h4 className="text-2xl font-bold font-editorial text-[#164E63] mb-3">
                    Midsummer Coastal Horizon
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    Warm sea breeze passing through coastal pines and weathered shingles. The rhythmic ebb of the tide brings a peaceful, timeless stillness.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#EFE8DC]">
                    <span className="text-xs text-[#64748B]">Shonan Coastline</span>
                    <button
                      type="button"
                      className={`px-5 py-2.5 text-xs font-semibold rounded-2xl ${getAccentBg()} shadow-sm transition-all duration-200 active:scale-95 cursor-pointer`}
                    >
                      Explore Shoreline
                    </button>
                  </div>
                </div>
              )}

              {componentType === 'button' && (
                <button
                  type="button"
                  className={`px-8 py-3.5 text-base font-semibold ${getAccentBg()} ${getCornerClass()} shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer`}
                >
                  Coastal Discovery
                </button>
              )}

              {componentType === 'badge' && (
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium ${getCornerClass()} bg-[#FAF7F2] ${getAccentBorder()} border shadow-sm`}
                >
                  <span className={`w-2 h-2 rounded-full ${getAccentBg()}`} />
                  <span>Kamakura Station · Active Tide</span>
                </span>
              )}
            </div>
          </div>

          {/* Generated Code Snippet Block */}
          <div className="bg-[#1E293B] text-[#FAF7F2] p-5 rounded-3xl border border-[#334155] shadow-lg relative">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="text-[#94A3B8] font-mono">React / Tailwind Code Snippet</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#334155] hover:bg-[#475569] text-[#FAF7F2] rounded-lg text-xs font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs font-mono text-[#BAE6FD] overflow-x-auto p-3 bg-black/30 rounded-xl leading-relaxed">
              <code>{generateCode()}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
