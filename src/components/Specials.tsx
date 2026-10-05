import React from 'react';
import { SPECIALS } from '../data/cafeData';
import { MenuItem } from '../types/cafe';
import { Eye, Sparkles, Plus, Star } from 'lucide-react';

interface SpecialsProps {
  onSelectSpecial: (item: MenuItem) => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const Specials: React.FC<SpecialsProps> = ({ onSelectSpecial, onAddToCart }) => {
  return (
    <section id="specials" className="py-20 sm:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Chef & Barista Signatures</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Our Signature Specials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Three handcrafted favorites that define the Urban Brew experience in Kathmandu. Prepared fresh with mountain ingredients.
          </p>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SPECIALS.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E7DFD5] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              {/* Card Image Area */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1F1712]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1712]/80 backdrop-blur-md text-[#D8A25E] text-xs font-semibold tracking-wider uppercase border border-white/10 shadow-xs">
                  <Star className="w-3 h-3 fill-[#D8A25E]" />
                  <span>Featured #{index + 1}</span>
                </div>

                {/* Price Tag Floating */}
                <div className="absolute bottom-4 right-4 bg-[#1F1712]/90 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/10 shadow-lg text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#D8A25E] block font-medium">Price</span>
                  <span className="text-xl font-bold font-serif text-white">
                    रू {item.price}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8C532E]">
                      {item.category}
                    </span>
                    {item.prepTime && (
                      <span className="text-[11px] text-[#756A63]">
                        {item.prepTime}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1F1712] group-hover:text-[#8C532E] transition-colors mb-3">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#594B42] leading-relaxed line-clamp-3 mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-4 border-t border-[#E7DFD5] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectSpecial(item)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#1F1712] text-xs sm:text-sm font-semibold transition-colors focus:outline-hidden"
                  >
                    <Eye className="w-4 h-4 text-[#8C532E]" />
                    <span>View Details</span>
                  </button>

                  {onAddToCart && (
                    <button
                      type="button"
                      onClick={() => onAddToCart(item)}
                      className="p-2.5 rounded-full bg-[#1F1712] hover:bg-[#C59B63] text-white hover:text-[#1F1712] shadow-sm transition-all duration-200 active:scale-90"
                      title="Add to order tray"
                      aria-label={`Add ${item.name} to order tray`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
