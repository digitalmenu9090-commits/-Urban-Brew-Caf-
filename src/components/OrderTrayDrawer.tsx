import React from 'react';
import { CartItem } from '../types/cafe';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

interface OrderTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderTrayDrawer: React.FC<OrderTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderSent, setOrderSent] = React.useState(false);
  const [orderRef, setOrderRef] = React.useState('');

  const subtotal = items.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );
  const serviceCharge = Math.round(subtotal * 0.1); // 10% standard restaurant service charge in Kathmandu
  const total = subtotal + serviceCharge;

  const handleSimulateOrder = () => {
    const randomId = 'UB-' + Math.floor(1000 + Math.random() * 9000);
    setOrderRef(randomId);
    setOrderSent(true);
  };

  const handleReset = () => {
    setOrderSent(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl border-l border-[#E7DFD5] flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-[#1F1712] text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#C59B63]/20 text-[#C59B63]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wide">
                  Order & Tray Preview
                </h3>
                <p className="text-xs text-[#C59B63]/90">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close order drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderSent ? (
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8C532E] font-semibold">
                    Demo Order Submitted
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-[#1F1712] mt-1">
                    Ready for the Barista!
                  </h4>
                  <p className="text-xs font-mono bg-[#F4EFEA] inline-block px-3 py-1.5 rounded-lg border border-[#E7DFD5] text-[#8C532E] mt-3">
                    Ticket #{orderRef}
                  </p>
                </div>
                <p className="text-sm text-[#756A63] leading-relaxed max-w-xs mx-auto">
                  In a live deployment, this instant ticket alerts the counter pos system and kitchen display screen with table assignment.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="w-full py-3 px-6 rounded-full bg-[#1F1712] text-white font-medium text-sm hover:bg-[#382B22] transition-colors"
                  >
                    Done & Return to Menu
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F4EFEA] flex items-center justify-center mx-auto text-[#C59B63]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1F1712]">
                  Your Tray is Empty
                </h4>
                <p className="text-sm text-[#756A63] max-w-xs mx-auto">
                  Browse our Specials or curated Menu to add artisanal coffees, freshly baked sandwiches, and desserts.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#C59B63] text-white text-sm font-medium hover:bg-[#8C532E] transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#756A63] border-b border-[#E7DFD5] pb-2">
                  <span>Selected Dishes & Drinks</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#A45A33] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="p-3.5 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs flex items-center gap-3.5"
                    >
                      <img
                        src={entry.item.image}
                        alt={entry.item.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-bold text-[#1F1712] truncate">
                          {entry.item.name}
                        </h5>
                        <p className="text-xs text-[#8C532E] font-medium">
                          रू {entry.item.price} each
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, -1)}
                            className="p-1 rounded-md bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#1F1712] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-semibold text-[#1F1712] w-5 text-center">
                            {entry.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(entry.item.id, 1)}
                            className="p-1 rounded-md bg-[#F4EFEA] hover:bg-[#E7DFD5] text-[#1F1712] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#1F1712] block">
                          रू {entry.item.price * entry.quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(entry.item.id)}
                          className="mt-3 text-xs text-[#A45A33] hover:text-red-700"
                          title="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer summary */}
          {!orderSent && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E7DFD5] space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#756A63]">
                  <span>Subtotal</span>
                  <span>रू {subtotal}</span>
                </div>
                <div className="flex justify-between text-[#756A63]">
                  <span>Restaurant Service (10%)</span>
                  <span>रू {serviceCharge}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1F1712] pt-2 border-t border-[#E7DFD5]">
                  <span>Estimated Total (NPR)</span>
                  <span className="font-serif text-lg text-[#8C532E]">
                    रू {total}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleSimulateOrder}
                  className="w-full py-3.5 px-6 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-[#FAF8F5] font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
                >
                  <span>Place Simulated Table Order</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B63]" />
                </button>
                <p className="text-[11px] text-center text-[#756A63]">
                  Interactive portfolio demo • Pricing strictly in Nepali Rupees (रू)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
