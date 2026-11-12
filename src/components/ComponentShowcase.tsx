import React, { useState } from 'react';
import { 
  Send, 
  Search, 
  Sliders, 
  Check, 
  ChevronRight, 
  Compass, 
  MapPin, 
  Wind, 
  Waves, 
  Sun, 
  Heart, 
  Copy,
  Layers,
  Sparkles,
  MessageSquare
} from 'lucide-react';

import cottageGardenImg from '../assets/images/ghibli_cottage_garden_1794435843137.jpg';
import coastalTrainImg from '../assets/images/ghibli_coastal_train_1794435843111.jpg';

export const ComponentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'buttons' | 'cards' | 'forms' | 'navigation'>('all');
  const [breezeLevel, setBreezeLevel] = useState(60);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedStation, setSelectedStation] = useState('Kam道ura-Kō');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    seasideNotes: '',
    receivePostcards: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName.trim() || !formData.senderEmail.trim()) {
      setFormError('Please provide your name and email before dispatching.');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ senderName: '', senderEmail: '', seasideNotes: '', receivePostcards: true });
      setFormSubmitted(false);
    }, 4000);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="components" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
          <Layers className="w-4 h-4" />
          <span>Reusable Component System</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-4 text-balance">
          Tactile, Hand-Crafted UI Elements
        </h2>
        <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
          Designed with soft rounded geometries, organic deckle borders, natural pigments, and gentle transitions that evoke human warmth rather than rigid corporate grids.
        </p>
      </div>

      {/* Filter Tabs (Functional segmented buttons per frontend-design rules) */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC] mb-12 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'all'
              ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          All Components
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('buttons')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'buttons'
              ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          Buttons & Actions
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('cards')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'cards'
              ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          Cards & Surfaces
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('forms')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'forms'
              ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          Inputs & Forms
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('navigation')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'navigation'
              ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          Navigation & Badges
        </button>
      </div>

      <div className="space-y-16">
        {/* ============================================================== */}
        {/* GROUP 1: BUTTONS & INTERACTIVE CONTROLS */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'buttons') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
              <div>
                <h3 className="text-xl font-bold text-[#164E63] font-editorial">
                  01. Buttons & Touch Controls
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Natural pill and soft-corner silhouettes with gentle hover settling curves.
                </p>
              </div>
              <button
                type="button"
                onClick={() => copyCode(`<button className="px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-2xl shadow-sm hover:shadow transition-all active:scale-95">Primary Ocean</button>`)}
                className="inline-flex items-center gap-1.5 text-xs text-[#0284C7] hover:underline"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Tailwind</span>
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-[#F4EFE6] rounded-3xl border border-[#EFE8DC] border-deckle space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Primary Ocean Button */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] flex flex-col justify-between">
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-[#64748B] block mb-2">Primary Accent (Ocean)</span>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-2xl shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                    >
                      <Waves className="w-4 h-4" />
                      <span>Ocean Breeze</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] font-mono">bg-[#0284C7] rounded-2xl</span>
                </div>

                {/* Coral Highlight Button */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] flex flex-col justify-between">
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-[#64748B] block mb-2">Sunset Highlight (Coral)</span>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#E06D53] hover:bg-[#C25239] rounded-2xl shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                    >
                      <Sun className="w-4 h-4" />
                      <span>Warm Sunset</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] font-mono">bg-[#E06D53] rounded-2xl</span>
                </div>

                {/* Sage Meadow Button */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] flex flex-col justify-between">
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-[#64748B] block mb-2">Natural Earth (Sage)</span>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#65A30D] hover:bg-[#4D7C0F] rounded-2xl shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Hillside Meadow</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] font-mono">bg-[#65A30D] rounded-2xl</span>
                </div>

                {/* Hand-drawn Outline Button */}
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DC] flex flex-col justify-between">
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-[#64748B] block mb-2">Subtle Outline (Gouache)</span>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#164E63] bg-[#FAF7F2] hover:bg-[#F4EFE6] border border-[#CBD5E1] rounded-2xl transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Coastal Path</span>
                      <ChevronRight className="w-4 h-4 text-[#0284C7]" />
                    </button>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] font-mono">border-[#CBD5E1] rounded-2xl</span>
                </div>
              </div>

              {/* State Variations: Interactive Toggle & Favorite Button */}
              <div className="pt-4 border-t border-[#EFE8DC] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#475569]">Interactive Tactile Favorite:</span>
                  <button
                    type="button"
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-90 ${
                      isFavorited
                        ? 'bg-[#FEE2E2] text-[#E06D53] border border-[#FECACA]'
                        : 'bg-[#FAF7F2] text-[#64748B] hover:text-[#1E293B] border border-[#EFE8DC]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 transition-transform ${isFavorited ? 'fill-[#E06D53] scale-110' : ''}`} />
                    <span>{isFavorited ? 'Saved to Seaside Journal' : 'Save Scenery'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span>States demonstrated:</span>
                  <span className="font-semibold text-[#164E63]">Default</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#0284C7]">Hover</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#0D9488]">Active Pressed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* GROUP 2: CARDS & CONTAINERS */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'cards') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
              <div>
                <h3 className="text-xl font-bold text-[#164E63] font-editorial">
                  02. Cards & Organic Surfaces
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Warm backgrounds, gentle hairline borders, and deckle edges.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Seaside Postcard */}
              <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#EFE8DC] border-deckle shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group">
                {/* Faux Postage Stamp in Top Right */}
                <div className="absolute top-5 right-5 w-12 h-14 bg-[#F4EFE6] border-2 border-dashed border-[#CBD5E1] rounded-md flex flex-col items-center justify-center p-1 text-center shadow-xs">
                  <Sun className="w-4 h-4 text-[#E06D53]" />
                  <span className="text-[9px] font-mono text-[#64748B] font-bold">50¥</span>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
                    Postcard 01 · Shichirigahama
                  </div>
                  <h4 className="text-lg font-bold text-[#164E63] font-editorial mb-3">
                    Breeze from Enoshima Bay
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    "The blue train clatters along the coast just as the afternoon clouds turn into giant billowing castles. Hydrangeas are blooming in every garden down the hill."
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-mono">July 18th · 15:40</span>
                  <span className="text-[#0284C7] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read Dispatch <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>

              {/* Card 2: Coastal Cottage Feature Card */}
              <div className="bg-[#FAF7F2] rounded-3xl border border-[#EFE8DC] border-deckle overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={cottageGardenImg}
                    alt="Rustic seaside cottage garden with hydrangeas overlooking ocean waves"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                    Summer Hydrangea Garden
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center gap-2 text-xs text-[#64748B] mb-2">
                      <span>Cottage No. 4</span>
                      <span aria-hidden="true">·</span>
                      <span>Veranda View</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#164E63] font-editorial mb-2">
                      Terracotta & Sea Mist
                    </h4>
                    <p className="text-sm text-[#475569] leading-relaxed mb-4">
                      Sun-warmed wooden stairs leading down to a pebble cove, bordered by lavender and wild sweet peas.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#65A30D]">Garden Open</span>
                    <button
                      type="button"
                      onClick={() => alert('Visiting seaside cottage garden view!')}
                      className="text-xs font-semibold text-[#0284C7] hover:underline cursor-pointer"
                    >
                      Visit Garden
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3: Marine Weather & Tide Card */}
              <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#EFE8DC] border-deckle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider">
                      Coastal Observation
                    </span>
                    <Waves className="w-5 h-5 text-[#0284C7]" />
                  </div>

                  <h4 className="text-lg font-bold text-[#164E63] font-editorial mb-1">
                    Midday Sea & Tide Bulletin
                  </h4>
                  <p className="text-xs text-[#64748B] mb-5">Station 03 · Cape Lighthouse Point</p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="p-3 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC]">
                      <span className="text-[11px] text-[#64748B] block">Water Temp</span>
                      <span className="text-lg font-bold text-[#164E63] font-mono tabular-nums">23.8°C</span>
                    </div>
                    <div className="p-3 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC]">
                      <span className="text-[11px] text-[#64748B] block">Tidal Wave</span>
                      <span className="text-lg font-bold text-[#0284C7] font-mono tabular-nums">+0.6m High</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Swell is glassy with gentle rolling breaks along the rocky cove. High tide peaks at 16:15.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Gentle South Wind</span>
                  </span>
                  <span className="font-semibold text-[#0284C7]">Calm Swell</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* GROUP 3: FORMS & INPUTS */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'forms') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
              <div>
                <h3 className="text-xl font-bold text-[#164E63] font-editorial">
                  03. Form Inputs & Coastal Dispatch Form
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Warm ivory surfaces, soft focus rings, and natural tactile sliders.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Working Interactive Form: Seaside Letter Dispatch */}
              <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#EFE8DC] border-deckle shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#E06D53]" />
                  <span className="text-xs font-semibold text-[#E06D53] uppercase tracking-wider">
                    Interactive Form
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#164E63] font-editorial mb-2">
                  Send a Seaside Letter
                </h4>
                <p className="text-sm text-[#475569] mb-6">
                  Experience the friendly input focus states, warm cream borders, and tactile submit response.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl text-center space-y-2 animate-float-gentle">
                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Check className="w-5 h-5" />
                    </div>
                    <h5 className="font-editorial text-lg font-bold text-emerald-900">
                      Letter Sent on the Sea Breeze!
                    </h5>
                    <p className="text-xs text-emerald-700">
                      Your seaside dispatch has been addressed and stamped with postmark seals.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
                          Sender Name
                        </label>
                        <input
                          type="text"
                          value={formData.senderName}
                          onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                          placeholder="e.g. Satsuki Kusakabe"
                          className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] transition-all"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
                          Coastal Post Address (Email)
                        </label>
                        <input
                          type="email"
                          value={formData.senderEmail}
                          onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                          placeholder="letter@seaside.jp"
                          className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] transition-all"
                        />
                      </div>
                    </div>

                    {/* Dropdown Select */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
                        Destination Harbor Station
                      </label>
                      <select
                        value={selectedStation}
                        onChange={(e) => setSelectedStation(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-xl text-sm text-[#1E293B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] transition-all cursor-pointer"
                      >
                        <option value="Kamakura-Kō">Kamakura Harbor & Hydrangea Path</option>
                        <option value="Cape-Lighthouse">Cape Lighthouse Observation Post</option>
                        <option value="Enoshima-Bridge">Enoshima Causeway Pier</option>
                        <option value="Misaki-Station">Misaki Coastal Rail Platform</option>
                      </select>
                    </div>

                    {/* Textarea Field */}
                    <div>
                      <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
                        Summer Message / Field Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.seasideNotes}
                        onChange={(e) => setFormData({ ...formData, seasideNotes: e.target.value })}
                        placeholder="Describe the smell of the sea, the summer heat, or the passing breeze..."
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-xl text-sm text-[#1E293B] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7] transition-all resize-none"
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="receivePostcards"
                        checked={formData.receivePostcards}
                        onChange={(e) => setFormData({ ...formData, receivePostcards: e.target.checked })}
                        className="w-4 h-4 rounded text-[#0284C7] accent-[#0284C7] focus:ring-[#0284C7]/30 cursor-pointer"
                      />
                      <label htmlFor="receivePostcards" className="text-xs text-[#475569] cursor-pointer">
                        Send me periodic watercolor illustrations and tidal updates
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-2xl shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Dispatch Seaside Letter</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Form Input Variety Showcase */}
              <div className="lg:col-span-5 bg-[#F4EFE6] p-6 sm:p-8 rounded-3xl border border-[#EFE8DC] border-deckle space-y-6">
                <div>
                  <h4 className="text-base font-bold text-[#164E63] font-editorial mb-1">
                    Control Primitives
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Specialized controls tuned for touch targets and organic surfaces.
                  </p>
                </div>

                {/* Search Bar Input */}
                <div>
                  <label className="block text-xs font-medium text-[#1E293B] mb-1.5">
                    Search Coastal Archive
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#64748B]" />
                    <input
                      type="text"
                      placeholder="Search coves, trains, hydrangeas..."
                      className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-2xl text-xs text-[#1E293B] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                {/* Soft Pebble Range Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-medium text-[#1E293B] flex items-center gap-1.5">
                      <Wind className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>Sea Breeze Wind Speed</span>
                    </span>
                    <span className="font-mono tabular-nums text-[#0284C7] font-semibold">
                      {breezeLevel} km/h
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={breezeLevel}
                    onChange={(e) => setBreezeLevel(Number(e.target.value))}
                    className="w-full accent-[#0284C7] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#94A3B8] mt-1 font-mono">
                    <span>10 Calm</span>
                    <span>50 Moderate</span>
                    <span>100 Gale</span>
                  </div>
                </div>

                {/* Organic Segmented Badges */}
                <div className="pt-2">
                  <span className="block text-xs font-medium text-[#1E293B] mb-2">
                    Coastal Filter Badges
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 bg-[#E0F2FE] text-[#0369A1] font-medium rounded-full border border-[#BAE6FD]">
                      Azure Ocean
                    </span>
                    <span className="px-3 py-1 bg-[#ECFDF5] text-[#047857] font-medium rounded-full border border-[#A7F3D0]">
                      Rolling Greenery
                    </span>
                    <span className="px-3 py-1 bg-[#FFF7ED] text-[#C2410C] font-medium rounded-full border border-[#FFEDD5]">
                      Clay Rooftops
                    </span>
                    <span className="px-3 py-1 bg-[#F4EFE6] text-[#475569] font-medium rounded-full border border-[#EFE8DC]">
                      Seaside Rail
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* GROUP 4: NAVIGATION & BREADCRUMBS */}
        {/* ============================================================== */}
        {(activeTab === 'all' || activeTab === 'navigation') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EFE8DC] pb-3">
              <div>
                <h3 className="text-xl font-bold text-[#164E63] font-editorial">
                  04. Navigation Patterns & Wayfinding
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Lightweight, unboxed breadcrumbs, coastal dockbars, and tabbed wayfinding.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Pattern A: Breadcrumb Trail (Unboxed Text with Separators) */}
              <div className="p-4 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC] flex items-center gap-2 text-xs text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="hover:text-[#1E293B] cursor-pointer">Kanagawa Prefecture</span>
                <span aria-hidden="true" className="text-[#CBD5E1]">/</span>
                <span className="hover:text-[#1E293B] cursor-pointer">Shonan Coast</span>
                <span aria-hidden="true" className="text-[#CBD5E1]">/</span>
                <span className="hover:text-[#1E293B] cursor-pointer">Kamakura Bay</span>
                <span aria-hidden="true" className="text-[#CBD5E1]">/</span>
                <span className="font-semibold text-[#164E63]">Misaki Station Platform</span>
              </div>

              {/* Pattern B: Coastal Dockbar Bar */}
              <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EFE8DC] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs font-medium text-[#475569]">
                  <span className="text-[#0284C7] font-semibold border-b-2 border-[#0284C7] pb-1 cursor-pointer">
                    All Stations
                  </span>
                  <span className="hover:text-[#1E293B] pb-1 cursor-pointer transition-colors">
                    Lighthouse Path
                  </span>
                  <span className="hover:text-[#1E293B] pb-1 cursor-pointer transition-colors">
                    Cottage Verandas
                  </span>
                  <span className="hover:text-[#1E293B] pb-1 cursor-pointer transition-colors">
                    Train Platform
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span>Viewing 4 of 4 Coastal Regions</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
