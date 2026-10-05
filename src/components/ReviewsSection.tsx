import React from 'react';
import { REVIEWS } from '../data/cafeData';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Loved by Kathmandu Locals & Travelers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Read what regulars, digital nomads, and food lovers say about their moments with us.
          </p>
          
          {/* Explicit Demo Disclaimer Badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Portfolio Demo Content • Sample Customer Reviews</span>
          </div>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-8 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C59B63]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C59B63]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C532E] bg-[#F4EFEA] px-2.5 py-1 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#C59B63]/25 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="relative text-sm sm:text-base text-[#4A3E37] leading-relaxed italic pt-2">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-[#E7DFD5] flex items-center gap-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1F1712]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#756A63]">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Score Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-[#E7DFD5] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif font-bold text-[#1F1712]">4.9</span>
            <div>
              <div className="flex text-[#C59B63]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C59B63]" />
                ))}
              </div>
              <p className="text-xs text-[#756A63] mt-0.5">Based on 350+ Kathmandu café check-ins</p>
            </div>
          </div>
          <div className="h-8 w-px bg-[#E7DFD5] hidden sm:block" />
          <div className="text-xs sm:text-sm text-[#594B42]">
            <p className="font-semibold text-[#1F1712]">Top Ranked Coffee Sanctuary</p>
            <p className="text-[#756A63]">Lazimpat, Kathmandu Valley</p>
          </div>
        </div>

      </div>
    </section>
  );
};
