/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TimeOfDay } from './types/designSystem';
import { Navigation } from './components/Navigation';
import { AtmosphericHero } from './components/AtmosphericHero';
import { ColorPaletteSection } from './components/ColorPaletteSection';
import { TypographySpecimen } from './components/TypographySpecimen';
import { ComponentShowcase } from './components/ComponentShowcase';
import { GalleryShowcase } from './components/GalleryShowcase';
import { InteractivePlayground } from './components/InteractivePlayground';
import { DesignPrinciples } from './components/DesignPrinciples';
import { Footer } from './components/Footer';
import { WaveDivider, HillDivider } from './components/OrganicDividers';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('afternoon');

  const scrollToWorkbench = () => {
    const el = document.getElementById('workbench');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E293B] relative selection:bg-[#E0F2FE] selection:text-[#0369A1]">
      {/* Top Navigation conforming to 3-zone contract with live mood switcher */}
      <Navigation
        timeOfDay={timeOfDay}
        onTimeChange={setTimeOfDay}
        onOpenWorkbench={scrollToWorkbench}
      />

      <main>
        {/* Dreamy Seaside Hero with Dynamic Atmospheric Lighting */}
        <AtmosphericHero timeOfDay={timeOfDay} />

        {/* Organic Wave Transition into Color Palette */}
        <WaveDivider fillColor="#FAF7F2" className="-mt-8 relative z-20" />

        {/* Color Palette & Harmonies */}
        <ColorPaletteSection />

        {/* Rolling Hill Divider into Typography */}
        <HillDivider fillColor="#F4EFE6" className="my-6" />

        {/* Expressive Editorial Typography Specimen */}
        <TypographySpecimen />

        {/* Organic Wave Transition into Component Library */}
        <WaveDivider fillColor="#FAF7F2" className="my-6" />

        {/* Comprehensive Reusable Component Library */}
        <ComponentShowcase />

        {/* Rolling Hill Divider into Gallery */}
        <HillDivider fillColor="#FAF7F2" className="my-6" />

        {/* Hand-Painted Scenery Gallery */}
        <GalleryShowcase />

        {/* Organic Wave Transition into Workbench */}
        <WaveDivider fillColor="#F4EFE6" className="my-6" />

        {/* Living Component Workbench / Customizer */}
        <InteractivePlayground />

        {/* Core Design Principles */}
        <DesignPrinciples />
      </main>

      {/* Editorial Quiet Footer */}
      <Footer />
    </div>
  );
}
