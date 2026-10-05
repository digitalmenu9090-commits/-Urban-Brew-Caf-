import React from 'react';
import { ArrowRight, Calendar, Sparkles, MapPin, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#140E0A] pt-20">
      {/* Background Hero Image with Rich Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Urban Brew Café interior ambiance in Kathmandu"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000 opacity-45"
          loading="eager"
        />
        {/* Soft Multi-Layer Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/60 to-[#140E0A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#140E0A_100%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
          <span>Artisan Roastery & Kitchen • Kathmandu, Nepal</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#FAF8F5] tracking-tight leading-[1.12] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Your Daily Escape, <br />
          <span className="italic font-normal text-[#D8A25E]">Served Fresh.</span>
        </h1>

        {/* Tagline & Short Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-amber-100/90 font-serif italic mb-4 max-w-2xl mx-auto">
          &ldquo;{CAFE_INFO.tagline}&rdquo;
        </p>
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Tucked away in the vibrant heart of Kathmandu, Urban Brew combines high-altitude Himalayan Arabica, slow-fermented artisan sourdough, and a lush serene sanctuary designed for good conversations and quiet moments.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C59B63] hover:bg-[#D8A25E] text-[#140E0A] font-semibold text-base shadow-xl hover:shadow-[#C59B63]/25 transition-all transform hover:-translate-y-0.5 active:scale-98"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onBookTable}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 font-semibold text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#C59B63]" />
            <span>Book a Table</span>
          </button>
        </div>

        {/* Floating Quick Info Pill Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#C59B63] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Coffee Craft</p>
              <p className="text-xs sm:text-sm font-semibold text-white">100% Nepali Arabica</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#C59B63] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Opening Hours</p>
              <p className="text-xs sm:text-sm font-semibold text-white">{CAFE_INFO.hours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#C59B63] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-neutral-400">Location</p>
              <p className="text-xs sm:text-sm font-semibold text-white">{CAFE_INFO.city}, Nepal</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#C59B63] shrink-0">
              <span className="text-xs font-bold text-[#C59B63]">रू</span>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Currency</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Nepali Rupees (रू)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
