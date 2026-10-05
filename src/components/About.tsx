import React from 'react';
import { Coffee, Utensils, Trees, Heart, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient subtle background blur circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#EBD8C1]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#D8A25E]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Imagery Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
                  alt="Urban Brew serene cafe interior in Kathmandu"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D8A25E] font-semibold">
                    The Sanctuary
                  </p>
                  <p className="text-lg font-serif font-bold">
                    Sunlit indoor lounge & garden courtyard
                  </p>
                </div>
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=85"
                  alt="Barista brewing specialty coffee"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-[#1F1712] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#382B22]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B63] flex items-center justify-center text-[#1F1712] font-bold">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-serif font-bold text-[#D8A25E]">
                      100%
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-300">
                      Nepali Arabica
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase">
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight leading-tight">
              A Quiet Oasis in Kathmandu, <br />
              <span className="italic font-normal text-[#8C532E]">
                Crafted for Mindful Living.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#594B42] leading-relaxed">
              Founded in <strong>Kathmandu</strong>, Urban Brew Café was born out of a deep reverence for Nepal’s burgeoning specialty coffee culture. We set out to create more than just a coffee shop; we envisioned a welcoming sanctuary where time slows down, conversations flow effortlessly, and every sense is awakened.
            </p>

            <p className="text-sm sm:text-base text-[#756A63] leading-relaxed">
              From hand-picking the highest elevation beans nurtured in shade-grown farms across Nuwakot and Kavre, to baking rustic sourdough loaves each sunrise, our kitchen and coffee bar unite quality coffee with nutritious, honest food. Whether you need a productive corner for remote work or a peaceful garden table for weekend brunch, we welcome you to your home away from home.
            </p>

            {/* 4 Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C59B63]/15 text-[#8C532E] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F1712]">Specialty Coffee</h4>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    Micro-roasted Arabica dialed daily for balanced sweetness and zero bitterness.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C59B63]/15 text-[#8C532E] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F1712]">Fresh Artisanal Food</h4>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    Gourmet sandwiches, vibrant breakfast bowls, and daily bakehouse pastries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C59B63]/15 text-[#8C532E] shrink-0">
                  <Trees className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F1712]">Relaxing Atmosphere</h4>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    Green courtyard garden, warm wooden textures, gentle acoustics, and natural light.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#C59B63]/15 text-[#8C532E] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F1712]">Kathmandu Heart</h4>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    Community-first hospitality that celebrates our local growers and neighborhood.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-[#E7DFD5] flex flex-wrap items-center justify-between gap-6 text-[#1F1712]">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C532E]">7 AM – 9 PM</p>
                <p className="text-xs text-[#756A63]">Open 7 Days a Week</p>
              </div>
              <div className="w-px h-10 bg-[#E7DFD5] hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C532E]">1,400m+</p>
                <p className="text-xs text-[#756A63]">High-Altitude Beans</p>
              </div>
              <div className="w-px h-10 bg-[#E7DFD5] hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8C532E]">4.9 / 5.0</p>
                <p className="text-xs text-[#756A63]">Customer Satisfaction</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
