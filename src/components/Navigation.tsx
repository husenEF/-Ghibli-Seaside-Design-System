import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { TimeOfDay } from '../types/designSystem';

interface NavigationProps {
  timeOfDay: TimeOfDay;
  onTimeChange: (time: TimeOfDay) => void;
  onOpenWorkbench: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  timeOfDay,
  onTimeChange,
  onOpenWorkbench,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const times: { id: TimeOfDay; label: string; icon: string }[] = [
    { id: 'morning', label: 'Morning Mist', icon: '☁️' },
    { id: 'afternoon', label: 'Sunlit Noon', icon: '☀️' },
    { id: 'sunset', label: 'Golden Hour', icon: '🌅' },
    { id: 'twilight', label: 'Twilight Tide', icon: '🌙' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EFE8DC]/80 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-18">
            {/* Zone 1: Brand wordmark in display serif */}
            <a 
              href="#top" 
              className="text-2xl font-bold tracking-tight text-[#164E63] font-editorial whitespace-nowrap shrink-0 hover:text-[#0284C7] transition-colors"
            >
              Summer by the Sea
            </a>

            {/* Zone 2: 4–5 single-line clean nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#475569]">
              <a 
                href="#aesthetic" 
                className="hover:text-[#0284C7] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#0284C7]/40 whitespace-nowrap shrink-0"
              >
                Aesthetic
              </a>
              <a 
                href="#palette" 
                className="hover:text-[#0284C7] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#0284C7]/40 whitespace-nowrap shrink-0"
              >
                Palette & Type
              </a>
              <a 
                href="#components" 
                className="hover:text-[#0284C7] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#0284C7]/40 whitespace-nowrap shrink-0"
              >
                Component System
              </a>
              <a 
                href="#gallery" 
                className="hover:text-[#0284C7] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#0284C7]/40 whitespace-nowrap shrink-0"
              >
                Scenery Gallery
              </a>
              <a 
                href="#principles" 
                className="hover:text-[#0284C7] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#0284C7]/40 whitespace-nowrap shrink-0"
              >
                Principles
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenWorkbench}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
              >
                <Compass className="w-4 h-4" />
                <span>Component Workbench</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#334155] hover:bg-[#F4EFE6] transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EFE8DC] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2 text-sm font-medium text-[#475569]">
              <a
                href="#aesthetic"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F4EFE6] text-[#1E293B]"
              >
                Aesthetic
              </a>
              <a
                href="#palette"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F4EFE6] text-[#1E293B]"
              >
                Palette & Type
              </a>
              <a
                href="#components"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F4EFE6] text-[#1E293B]"
              >
                Component System
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F4EFE6] text-[#1E293B]"
              >
                Scenery Gallery
              </a>
              <a
                href="#principles"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F4EFE6] text-[#1E293B]"
              >
                Principles
              </a>
            </div>

            {/* Atmospheric Mood selector in mobile drawer */}
            <div className="pt-2 border-t border-[#EFE8DC]">
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                Atmospheric Light
              </div>
              <div className="grid grid-cols-2 gap-2">
                {times.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onTimeChange(t.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                      timeOfDay === t.id
                        ? 'bg-[#E0F2FE] text-[#0369A1] font-semibold'
                        : 'bg-[#F4EFE6] text-[#475569] hover:bg-[#EFE8DC]'
                    }`}
                  >
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onOpenWorkbench();
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FAF7F2] bg-[#0284C7] rounded-full shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Component Workbench</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Atmospheric Ambience Bar - Sub-bar below header */}
      <div className="bg-[#F4EFE6]/70 border-b border-[#EFE8DC] py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#64748B]">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]/60" />
            <span className="font-medium text-[#1E293B]">Live Atmospheric Lighting:</span>
            <span className="text-[#64748B] hidden sm:inline">Adjusting watercolor warmth & sky gradient</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] rounded-full border border-[#EFE8DC] shadow-xs">
            {times.map((t) => (
              <button
                key={t.id}
                onClick={() => onTimeChange(t.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  timeOfDay === t.id
                    ? 'bg-[#E0F2FE] text-[#0369A1] shadow-xs font-semibold'
                    : 'text-[#64748B] hover:text-[#1E293B] hover:bg-[#F4EFE6]'
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
