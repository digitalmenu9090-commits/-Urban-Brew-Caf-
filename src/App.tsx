/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specials } from './components/Specials';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { OrderTrayDrawer } from './components/OrderTrayDrawer';
import { MenuItem, CartItem } from './types/cafe';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<MenuItem | null>(null);
  const [isOrderTrayOpen, setIsOrderTrayOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`Added ${item.name} to order tray`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const nextQuantity = entry.quantity + delta;
            return nextQuantity > 0 ? { ...entry, quantity: nextQuantity } : null;
          }
          return entry;
        })
        .filter((entry): entry is CartItem => entry !== null);
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B231D] selection:bg-[#C59B63]/25 selection:text-[#1F1712]">
      {/* 2. Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderTrayOpen(true)}
        onOpenReservation={() => scrollToSection('reservation')}
      />

      <main>
        {/* 1. Hero */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onBookTable={() => scrollToSection('reservation')}
        />

        {/* 3. About */}
        <About />

        {/* 4. Specials */}
        <Specials
          onSelectSpecial={(item) => setSelectedItemForDetail(item)}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Menu */}
        <MenuSection
          onSelectItem={(item) => setSelectedItemForDetail(item)}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Gallery */}
        <GallerySection />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Reviews */}
        <ReviewsSection />

        {/* 9. Reservation */}
        <ReservationSection />

        {/* 10. Contact */}
        <ContactSection />

        {/* 11. Final CTA */}
        <FinalCTA
          onViewMenu={() => scrollToSection('menu')}
          onContactUs={() => scrollToSection('contact')}
        />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Item Detail Modal */}
      <ItemDetailModal
        item={selectedItemForDetail}
        onClose={() => setSelectedItemForDetail(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Interactive Order Tray Drawer */}
      <OrderTrayDrawer
        isOpen={isOrderTrayOpen}
        onClose={() => setIsOrderTrayOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Order Tray Quick Button (Mobile & Desktop corner) */}
      {totalCartCount > 0 && !isOrderTrayOpen && (
        <aside
          aria-label="Order summary notification"
          className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <button
            type="button"
            onClick={() => setIsOrderTrayOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-[#FAF8F5] shadow-2xl border border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#C59B63]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C59B63] text-[#1F1712] text-[10px] font-bold flex items-center justify-center">
                {totalCartCount}
              </span>
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-amber-200 block">
                Tray Preview
              </span>
              <span className="text-xs font-bold text-white">
                रू {cartItems.reduce((acc, c) => acc + c.item.price * c.quantity, 0)}
              </span>
            </div>
          </button>
        </aside>
      )}

      {/* Subtle Toast Notification */}
      {toastMessage && (
        <aside
          aria-label="Notification message"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1F1712]/95 backdrop-blur-md text-[#FAF8F5] shadow-xl border border-white/10 text-xs sm:text-sm">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{toastMessage}</span>
          </div>
        </aside>
      )}
    </div>
  );
}
