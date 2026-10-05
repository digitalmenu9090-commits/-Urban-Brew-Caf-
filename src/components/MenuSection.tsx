import React, { useState, useMemo } from 'react';
import { ALL_MENU_ITEMS } from '../data/cafeData';
import { MenuCategory, MenuItem } from '../types/cafe';
import { Coffee, CupSoda, Egg, UtensilsCrossed, Pizza, Cake, Search, Sparkles, Plus, Eye } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'All' | 'Veg' | 'Chef'>('All');

  const categories: { label: MenuCategory | 'All'; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Coffee', icon: <Coffee className="w-4 h-4" /> },
    { label: 'Tea', icon: <CupSoda className="w-4 h-4" /> },
    { label: 'Breakfast', icon: <Egg className="w-4 h-4" /> },
    { label: 'Snacks', icon: <Pizza className="w-4 h-4" /> },
    { label: 'Main Course', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { label: 'Desserts', icon: <Cake className="w-4 h-4" /> },
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;

      // Dietary filter match
      let matchesDietary = true;
      if (dietaryFilter === 'Veg') matchesDietary = !!item.isVegetarian;
      if (dietaryFilter === 'Chef') matchesDietary = !!item.isChefSpecial;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(query)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] border border-[#E7DFD5] text-[#8C532E] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Specialty Roasts & Kitchen Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1712] tracking-tight">
            Our Handcrafted Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#756A63] leading-relaxed">
            Every cup and culinary creation is prepared fresh to order using premium Nepali beans and local organic produce. Prices are in Nepali Rupees (रू).
          </p>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 sm:gap-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveCategory(cat.label)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                  activeCategory === cat.label
                    ? 'bg-[#1F1712] text-[#FAF8F5] shadow-md scale-102'
                    : 'bg-white hover:bg-[#F4EFEA] text-[#594B42] border border-[#E7DFD5]'
                }`}
              >
                <span className={activeCategory === cat.label ? 'text-[#C59B63]' : 'text-[#756A63]'}>
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search & Dietary Sub-Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#756A63]" />
              <input
                type="text"
                placeholder="Search coffee, brunch, desserts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E7DFD5] text-xs sm:text-sm text-[#1F1712] focus:outline-hidden focus:ring-2 focus:ring-[#C59B63] transition-all placeholder:text-[#A89F97]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#756A63] hover:text-[#1F1712]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
              <span className="text-[#756A63] font-medium hidden sm:inline">Filter:</span>
              <button
                type="button"
                onClick={() => setDietaryFilter('All')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  dietaryFilter === 'All'
                    ? 'bg-[#C59B63] text-white font-medium shadow-xs'
                    : 'bg-white border border-[#E7DFD5] text-[#594B42] hover:bg-[#F4EFEA]'
                }`}
              >
                All Items
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('Veg')}
                className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'Veg'
                    ? 'bg-emerald-700 text-white font-medium shadow-xs'
                    : 'bg-white border border-[#E7DFD5] text-[#594B42] hover:bg-[#F4EFEA]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Vegetarian</span>
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('Chef')}
                className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  dietaryFilter === 'Chef'
                    ? 'bg-amber-800 text-white font-medium shadow-xs'
                    : 'bg-white border border-[#E7DFD5] text-[#594B42] hover:bg-[#F4EFEA]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Chef&apos;s Pick</span>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E7DFD5] max-w-lg mx-auto">
            <Coffee className="w-10 h-10 text-[#C59B63] mx-auto mb-3 opacity-60" />
            <h4 className="font-serif text-lg font-bold text-[#1F1712]">No Dishes Found</h4>
            <p className="text-sm text-[#756A63] mt-1">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('All');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#1F1712] text-white text-xs font-semibold hover:bg-[#382B22]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Tags */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#1F1712]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Dietary pill */}
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {item.isVegetarian && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                        Veg
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 backdrop-blur-md text-amber-300 text-[11px] font-semibold border border-amber-500/30 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Chef&apos;s Pick
                      </span>
                    )}
                  </div>

                  {/* Price Tag in Nepali Rupees */}
                  <div className="absolute bottom-3 right-3 bg-[#1F1712]/90 backdrop-blur-md px-3.5 py-1 rounded-xl border border-white/10 text-right">
                    <span className="text-base font-bold font-serif text-white">
                      रू {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8C532E] font-medium mb-1.5">
                      <span>{item.category}</span>
                      {item.prepTime && (
                        <span className="text-[#756A63] text-[11px]">{item.prepTime}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1712] group-hover:text-[#8C532E] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#594B42] leading-relaxed line-clamp-2 mb-4">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C532E] hover:text-[#1F1712] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    {onAddToCart && (
                      <button
                        type="button"
                        onClick={() => onAddToCart(item)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F1712] hover:bg-[#C59B63] text-white hover:text-[#1F1712] text-xs font-medium shadow-xs transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
