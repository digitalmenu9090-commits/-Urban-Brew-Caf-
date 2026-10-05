import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall, ExternalLink, Navigation, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
            <span>Find Us in the Valley</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Visit Urban Brew Café
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Conveniently situated in Kathmandu, offering tranquil garden seating, easy street parking, and high-speed Wi-Fi.
          </p>
        </div>

        {/* Contact Layout: Info Cards + Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Quick CTAs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C59B63]/20 flex items-center justify-center text-[#8C532E] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1F1712]">Our Location</h4>
                  <p className="text-sm text-[#4A3E37] mt-1 leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-[#8C532E]">
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD5] shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C59B63]/20 flex items-center justify-center text-[#8C532E] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1F1712]">Opening Hours</h4>
                  <p className="text-sm text-[#4A3E37] mt-1">
                    <strong className="text-[#1F1712]">{CAFE_INFO.hours}</strong>
                  </p>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    {CAFE_INFO.days} • Fresh bakehouse from 7:00 AM
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD5] shadow-xs space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#8C532E] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#756A63] uppercase tracking-wider block">Direct Phone</span>
                    <a
                      href={`tel:${CAFE_INFO.phone}`}
                      className="text-sm sm:text-base font-bold text-[#1F1712] hover:text-[#8C532E] transition-colors"
                    >
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-[#E7DFD5]">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B63]/20 flex items-center justify-center text-[#8C532E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#756A63] uppercase tracking-wider block">Email Inquiries</span>
                    <a
                      href={`mailto:${CAFE_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-[#1F1712] hover:text-[#8C532E] transition-colors"
                    >
                      {CAFE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (WhatsApp & Call) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-white font-semibold text-sm shadow-md transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-[#C59B63]" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E7DFD5] shadow-xl">
              
              {/* Map View Frame / Simulated Map Interface */}
              <div className="relative h-96 sm:h-[460px] w-full bg-[#E5E0D8] overflow-hidden">
                {/* Styled Map Background Canvas Simulation */}
                <iframe
                  title="Urban Brew Cafe Location in Kathmandu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.51375549021!2d85.31238465!3d27.71954845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19198305f88b%3A0x6b6c0852d431d10e!2sLazimpat%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E7DFD5] max-w-xs pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                      Open Now • Closes 9 PM
                    </span>
                  </div>
                  <h5 className="font-serif font-bold text-[#1F1712] text-sm">
                    Urban Brew Café Kathmandu
                  </h5>
                  <p className="text-xs text-[#756A63] mt-0.5">
                    Lazimpat Marg, Embassy Row
                  </p>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C532E] hover:underline mt-2.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>

              {/* Bottom Map Details Strip */}
              <div className="p-6 bg-[#FAF8F5] border-t border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C532E]">
                    Landmarks Nearby
                  </p>
                  <p className="text-sm text-[#4A3E37] mt-0.5">
                    Opposite French Embassy • 5 min from Thamel & Narayanhiti Palace
                  </p>
                </div>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#C59B63]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
