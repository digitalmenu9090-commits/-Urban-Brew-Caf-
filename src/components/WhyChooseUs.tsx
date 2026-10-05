import React from 'react';
import { WHY_CHOOSE_US } from '../data/cafeData';
import { Leaf, Coffee, Armchair, Smile, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'why-fresh':
        return <Leaf className="w-6 h-6 text-[#8C532E]" />;
      case 'why-coffee':
        return <Coffee className="w-6 h-6 text-[#C59B63]" />;
      case 'why-cozy':
        return <Armchair className="w-6 h-6 text-[#A45A33]" />;
      case 'why-service':
      default:
        return <Smile className="w-6 h-6 text-[#D8A25E]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>The Urban Brew Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Why Guests Choose Urban Brew
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Every detail is designed with intention—from the precise temperature of our espresso extraction to the warmth of our welcome.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-8 rounded-3xl bg-white border border-[#E7DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4EFEA] group-hover:bg-[#1F1712] flex items-center justify-center transition-colors duration-300">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4EFEA] text-[#8C532E]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1F1712] mb-3 group-hover:text-[#8C532E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#594B42] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4EFEA] text-xs font-medium text-[#C59B63] flex items-center gap-1.5">
                <span>Refined Daily in Kathmandu</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
