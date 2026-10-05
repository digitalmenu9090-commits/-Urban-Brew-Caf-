import React from 'react';
import { MenuItem } from '../types/cafe';
import { X, Clock, Flame, Sparkles, Check, Plus } from 'lucide-react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E7DFD5] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1F1712]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1712] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#C59B63] text-white shadow-sm">
                {item.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {item.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-amber-200 block">Price</span>
              <span className="text-2xl sm:text-3xl font-bold text-white font-serif">
                रू {item.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Quick Meta Tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#756A63]">
            {item.prepTime && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E8DFC8]">
                <Clock className="w-4 h-4 text-[#C59B63]" />
                <span>Prep: {item.prepTime}</span>
              </div>
            )}
            {item.calories && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E8DFC8]">
                <Flame className="w-4 h-4 text-[#A45A33]" />
                <span>{item.calories}</span>
              </div>
            )}
            {item.isVegetarian && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Pure Vegetarian</span>
              </div>
            )}
            {item.isChefSpecial && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Chef&apos;s Recommendation</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C532E] mb-2">
              About This Dish
            </h4>
            <p className="text-[#4A3E37] leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>

          {/* Tasting Notes */}
          {item.tastingNotes && (
            <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E7DFD5]">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C532E] mb-1">
                Aromatics & Tasting Notes
              </h4>
              <p className="text-sm italic text-[#594B42]">
                &ldquo;{item.tastingNotes}&rdquo;
              </p>
            </div>
          )}

          {/* Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C532E] mb-3">
                Key Artisan Ingredients
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#4A3E37]">
                {item.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#C59B63]/20 flex items-center justify-center text-[#8C532E]">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E7DFD5] flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#756A63]">Currency in Nepali Rupees</p>
              <p className="text-xl font-bold font-serif text-[#1F1712]">
                रू {item.price} <span className="text-xs font-normal text-[#756A63]">NPR</span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#D5C9BD] text-[#4A3E37] text-sm font-medium hover:bg-[#F4EFEA] transition-colors"
              >
                Close
              </button>
              {onAddToCart && (
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(item);
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F1712] hover:bg-[#382B22] text-[#FAF8F5] text-sm font-medium shadow-md transition-all active:scale-95"
                >
                  <Plus className="w-4 h-4 text-[#C59B63]" />
                  <span>Add to Order Tray</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
