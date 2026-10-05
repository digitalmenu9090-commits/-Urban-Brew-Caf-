import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types/cafe';
import { Sparkles, Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Coffee' | 'Interior' | 'Food' | 'Desserts'>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredGallery = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Moments at Urban Brew</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Atmosphere & Culinary Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            A glimpse into our daily ritual: expertly pulled espresso, artisanal bakes, sun-drenched corners, and friends gathering in Kathmandu.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Coffee', 'Interior', 'Food', 'Desserts'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-[#1F1712] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-[#594B42] hover:bg-white border border-[#E7DFD5]'
                }`}
              >
                {cat === 'All' ? 'All Moments' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-300 bg-[#1F1712] ${
                index % 3 === 0 ? 'sm:col-span-2 aspect-16/10' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D8A25E] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1F1712] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 sm:aspect-16/9 w-full bg-black overflow-hidden">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#1F1712] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8A25E] font-semibold">
                  {activeLightbox.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold mt-1">
                  {activeLightbox.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {activeLightbox.caption}
                </p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
