import React from 'react';
import { ArrowRight, Coffee, Calendar, PhoneCall } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FinalCTAProps {
  onViewMenu: () => void;
  onContactUs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onViewMenu, onContactUs }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#140E0A] relative overflow-hidden text-center text-white">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#C59B63_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#8C532E]/30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Coffee Bean Icon Seal */}
        <div className="w-16 h-16 rounded-full bg-[#C59B63]/20 border border-[#C59B63]/40 flex items-center justify-center text-[#C59B63] mx-auto mb-6 shadow-inner">
          <Coffee className="w-8 h-8" />
        </div>

        {/* Heading Required by Prompt */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] leading-tight mb-6">
          Make Your Next Coffee <br className="hidden sm:inline" />
          <span className="text-[#D8A25E] italic">Moment Special.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Whether you’re catching up with old friends over artisan cappuccino, settling in for a focused afternoon with high-speed Wi-Fi, or sharing dessert in our garden patio, we’re waiting to welcome you in Kathmandu.
        </p>

        {/* Action Buttons Required by Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={onViewMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C59B63] hover:bg-[#D8A25E] text-[#140E0A] font-semibold text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-98"
          >
            <span>View Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onContactUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 font-semibold text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:scale-98"
          >
            <PhoneCall className="w-4 h-4 text-[#C59B63]" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Opening Hours reminder */}
        <p className="mt-8 text-xs text-neutral-400">
          Open Daily from 7:00 AM – 9:00 PM • Lazimpat, Kathmandu
        </p>

      </div>
    </section>
  );
};
