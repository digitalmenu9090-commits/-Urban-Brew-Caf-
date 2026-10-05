import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Our Story', href: '#about' },
    { label: 'Signature Specials', href: '#specials' },
    { label: 'Handcrafted Menu', href: '#menu' },
    { label: 'Atmosphere Gallery', href: '#gallery' },
    { label: 'Why Guests Choose Us', href: '#why-us' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Table Reservation', href: '#reservation' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#140E0A] text-[#FAF8F5] pt-16 pb-8 border-t border-[#382B22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C59B63] flex items-center justify-center text-[#140E0A] shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {CAFE_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C59B63] font-semibold -mt-1 block">
                  Kathmandu • Nepal
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-serif italic">
              &ldquo;{CAFE_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Specialty roastery and kitchen in Kathmandu dedicated to high-altitude Nepali coffee, slow artisanal bakes, and peaceful moments.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C59B63] hover:text-[#140E0A] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Urban Brew Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C59B63] hover:text-[#140E0A] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Urban Brew Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C59B63] hover:text-[#140E0A] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Urban Brew TikTok"
              >
                <span className="text-xs font-bold font-mono">TK</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs text-[#C59B63]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C59B63] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs text-[#C59B63]">
              Hours & Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Opening Hours</p>
                  <p className="text-neutral-400">{CAFE_INFO.hours}</p>
                  <p className="text-neutral-400">{CAFE_INFO.days}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-neutral-400 leading-snug">{CAFE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href={`tel:${CAFE_INFO.phone}`} className="text-neutral-400 hover:text-white transition-colors">
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href={`mailto:${CAFE_INFO.email}`} className="text-neutral-400 hover:text-white transition-colors">
                    {CAFE_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Demo */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide uppercase text-xs text-[#C59B63]">
              The Brew Club
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe for weekend single-origin drops and seasonal kitchen specials.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/10 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you for joining our coffee circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-neutral-500 focus:outline-hidden focus:ring-1 focus:ring-[#C59B63]"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-[#C59B63] hover:bg-[#D8A25E] text-[#140E0A] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white pt-2 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Exact Subtle Agency Credit Required */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Urban Brew Café. All rights reserved. Kathmandu, Nepal.</p>
          
          {/* Subtle Agency Credit as strictly requested */}
          <div className="text-neutral-400">
            <span className="hover:text-amber-200 transition-colors cursor-pointer border-b border-neutral-700 hover:border-amber-400 pb-0.5">
              Website Design & Digital Experience by New Nepal Digital
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
