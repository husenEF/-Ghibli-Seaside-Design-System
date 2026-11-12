import React from 'react';
import { Waves, Heart, ArrowUp } from 'lucide-react';
import { WaveDivider } from './OrganicDividers';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4EFE6] text-[#1E293B] border-t border-[#EFE8DC] mt-20">
      {/* Wave Transition atop footer */}
      <div className="absolute -top-12 sm:-top-16 left-0 right-0 pointer-events-none">
        <WaveDivider fillColor="#F4EFE6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold font-editorial text-[#164E63]">
              Summer by the Sea
            </h3>
            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              A visual design style system inspired by Studio Ghibli's hand-painted seaside animation backgrounds. Soft cream surfaces, organic curves, and nostalgic Japanese coastal warmth.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <Waves className="w-4 h-4 text-[#0284C7]" />
              <span>Gouache · Coastal Summer · Organic Curvature</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#164E63] uppercase tracking-wider">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>
                <a href="#aesthetic" className="hover:text-[#0284C7] transition-colors">
                  Visual Aesthetic
                </a>
              </li>
              <li>
                <a href="#palette" className="hover:text-[#0284C7] transition-colors">
                  Color & Palette
                </a>
              </li>
              <li>
                <a href="#type" className="hover:text-[#0284C7] transition-colors">
                  Typography Pairing
                </a>
              </li>
              <li>
                <a href="#components" className="hover:text-[#0284C7] transition-colors">
                  Component System
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#0284C7] transition-colors">
                  Scenery Gallery
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-[#0284C7] transition-colors">
                  Design Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Design System Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#164E63] uppercase tracking-wider">
              Style Specifications
            </h4>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>
                <a href="#workbench" className="hover:text-[#0284C7] transition-colors">
                  Component Workbench
                </a>
              </li>
              <li>
                <span className="text-[#64748B]">Display: Fraunces Serif</span>
              </li>
              <li>
                <span className="text-[#64748B]">Body: Plus Jakarta Sans</span>
              </li>
              <li>
                <span className="text-[#64748B]">Canvas: #FAF7F2 Warm Cream</span>
              </li>
              <li>
                <span className="text-[#64748B]">Accents: Ocean #0284C7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#EFE8DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-1">
            <span>Summer by the Sea Design Style System</span>
            <span aria-hidden="true">·</span>
            <span>Hand-painted seaside aesthetic</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-white text-[#164E63] border border-[#EFE8DC] shadow-xs transition-colors"
          >
            <span>Return to top of page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
