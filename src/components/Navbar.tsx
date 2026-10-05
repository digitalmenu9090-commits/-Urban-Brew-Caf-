import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, ShoppingBag, PhoneCall, Calendar } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specials', href: '#specials' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1F1712]/92 backdrop-blur-md py-3 shadow-lg border-b border-[#382B22]/50 text-white'
            : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-[#C59B63] flex items-center justify-center text-[#1F1712] shadow-md group-hover:bg-[#D8A25E] transition-colors">
              <Coffee className="w-5 h-5 transition-transform group-hover:rotate-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C59B63] transition-colors">
                Urban Brew
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C59B63] font-semibold -mt-1">
                Café • Kathmandu
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
              title="Call Urban Brew"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C59B63]" />
              <span className="font-medium">+977 9800000000</span>
            </a>

            {/* Order Tray Pill Button */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="View order tray"
            >
              <ShoppingBag className="w-4 h-4 text-[#C59B63]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C59B63] text-[#1F1712] text-xs font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book a Table Primary Button */}
            <button
              type="button"
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C59B63] hover:bg-[#D8A25E] text-[#1F1712] text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1F1712] border-l border-[#382B22] p-6 text-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#382B22]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C59B63] flex items-center justify-center text-[#1F1712]">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-lg font-bold">Urban Brew</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-neutral-300"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-base font-medium text-neutral-200 hover:text-[#C59B63] hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#382B22] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 px-5 rounded-full bg-[#C59B63] text-[#1F1712] font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full py-2.5 px-5 rounded-full border border-white/20 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#C59B63]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-center text-neutral-400 pt-2">
                Open Daily: 7:00 AM – 9:00 PM • Kathmandu
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
