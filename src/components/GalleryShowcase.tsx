import React, { useState } from 'react';
import { Eye, X, Image as ImageIcon, MapPin, Sparkles, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types/designSystem';

import heroSeasideImg from '../assets/images/hero_ghibli_seaside_1794435841924.jpg';
import lighthouseCoveImg from '../assets/images/ghibli_lighthouse_cove_1794435842548.jpg';
import coastalTrainImg from '../assets/images/ghibli_coastal_train_1794435843111.jpg';
import cottageGardenImg from '../assets/images/ghibli_cottage_garden_1794435843137.jpg';

export const GalleryShowcase: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'village-panorama',
      title: 'Sunlit Coastal Village & Glinting Waves',
      location: 'Shichirigahama Bay, Kanagawa',
      category: 'village',
      image: heroSeasideImg,
      palette: ['#0284C7', '#65A30D', '#FAF7F2', '#164E63'],
      description: 'Hand-painted gouache scenery depicting terracotta and charcoal tile rooftops descending into an azure bay, framed by giant summer cumulus clouds and hillside wildflowers.',
      aspect: 'col-span-1 md:col-span-2 lg:col-span-3 aspect-[16/9]',
    },
    {
      id: 'lighthouse-point',
      title: 'Cape Lighthouse & Blooming Hydrangeas',
      location: 'Cape Tsurugisaki Point',
      category: 'cove',
      image: lighthouseCoveImg,
      palette: ['#BAE6FD', '#E06D53', '#0D9488', '#3F6212'],
      description: 'Weathered stone beacon resting on high sea cliffs overlooking crashing turquoise waves. Purple and cerulean hydrangeas catch the warm sea spray.',
      aspect: 'col-span-1 aspect-[4/3]',
    },
    {
      id: 'railway-platform',
      title: 'Misaki Coastal Platform at 1:45 PM',
      location: 'Misaki Line By The Ocean',
      category: 'railway',
      image: coastalTrainImg,
      palette: ['#0284C7', '#FDBA74', '#FAF7F2', '#164E63'],
      description: 'A nostalgic retro train carriage arriving alongside wooden tracks directly adjacent to the crystal clear surf, with sea gulls wheeling under high summer skies.',
      aspect: 'col-span-1 aspect-[4/3]',
    },
    {
      id: 'garden-veranda',
      title: 'Veranda Garden & Sparkling Ocean Horizon',
      location: 'Hillside Cottage No. 4',
      category: 'garden',
      image: cottageGardenImg,
      palette: ['#E06D53', '#65A30D', '#FAF7F2', '#0284C7'],
      description: 'Rustic wooden porch adorned with terracotta pots filled with poppies and sweet peas, offering an unobstructed vista of shimmering ocean waters.',
      aspect: 'col-span-1 aspect-[4/3]',
    },
  ];

  const filteredItems = filterCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filterCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] uppercase tracking-wider mb-2">
            <ImageIcon className="w-4 h-4" />
            <span>Hand-Painted Scenery Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#164E63] font-editorial tracking-tight mb-3 text-balance">
            Atmospheric Coastal Backgrounds
          </h2>
          <p className="text-[#475569] text-base leading-relaxed">
            Every background is layered with traditional animation depth: atmospheric perspective, organic cloud masses, and natural gouache brushwork.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4EFE6] rounded-2xl border border-[#EFE8DC] shrink-0">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              filterCategory === 'all'
                ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            All Scenery
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('village')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              filterCategory === 'village'
                ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            Village
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('cove')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              filterCategory === 'cove'
                ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            Cove & Beacon
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('railway')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              filterCategory === 'railway'
                ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            Railway
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('garden')}
            className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              filterCategory === 'garden'
                ? 'bg-[#FAF7F2] text-[#164E63] shadow-xs font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            Gardens
          </button>
        </div>
      </div>

      {/* Gallery Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`group bg-[#FAF7F2] rounded-3xl border border-[#EFE8DC] border-deckle overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              item.id === 'village-panorama' && filterCategory === 'all'
                ? 'md:col-span-2 lg:col-span-3'
                : 'col-span-1'
            }`}
          >
            {/* Image Container with Soft Deckle Wash */}
            <div className={`relative overflow-hidden ${
              item.id === 'village-panorama' && filterCategory === 'all'
                ? 'h-64 sm:h-80 md:h-96'
                : 'h-60 sm:h-64'
            }`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Inspect Pill */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#1E293B] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Examine Gouache Details</span>
              </div>

              {/* Bottom In-Image Legend */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-white/90 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#BAE6FD]" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-editorial leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Bottom Metadata & Swatches */}
            <div className="p-5 flex flex-wrap items-center justify-between gap-4 bg-[#FAF7F2]">
              <p className="text-xs text-[#475569] line-clamp-2 max-w-xl">
                {item.description}
              </p>

              {/* Dominant Palette Swatches */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[11px] text-[#94A3B8] mr-1">Tones:</span>
                {item.palette.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#1E293B]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-[#FAF7F2] rounded-3xl border border-[#EFE8DC] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-white text-[#1E293B] shadow-md transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[55vh] overflow-hidden rounded-t-3xl bg-[#0F172A]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[55vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span className="font-semibold text-[#164E63]">{selectedItem.location}</span>
                <span aria-hidden="true">·</span>
                <span>Category: {selectedItem.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#164E63] font-editorial">
                {selectedItem.title}
              </h3>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Color Harmonies Strip */}
              <div className="pt-4 border-t border-[#EFE8DC] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div>
                  <span className="text-[#64748B] block mb-1 font-medium">Palette Pigments:</span>
                  <div className="flex items-center gap-2">
                    {selectedItem.palette.map((color, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 p-1.5 bg-[#F4EFE6] rounded-lg border border-[#EFE8DC]">
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: color }} />
                        <span className="font-mono text-[11px] text-[#1E293B]">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#0284C7] hover:bg-[#0369A1] rounded-xl shadow-sm transition-all"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
