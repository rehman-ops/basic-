import React, { useState, useMemo } from 'react';
import { Search, Sparkles, X, Info, Image as ImageIcon } from 'lucide-react';
import { RestaurantConfig, MenuItem } from '../config/restaurantConfig';

interface MenuProps {
  config: RestaurantConfig;
}

export const Menu: React.FC<MenuProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return config.menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [config.menuItems, activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0d0b0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>RESTAURANT MENU TEMPLATE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf3ea] tracking-tight">
            OUR MENU
          </h2>
          <p className="mt-3 text-base text-[#baa998] max-w-xl mx-auto">
            MENU SECTION DESCRIPTION HERE. Insert information about the restaurant menu, preparation methods, and dining options here.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#231b16]">
          {/* Category Tabs (Segmented functional controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                  : 'bg-[#181310] text-[#baa998] hover:text-[#f2ece4] hover:bg-[#241d18] border border-[#2b221c]'
              }`}
            >
              ALL CATEGORIES ({config.menuItems.length})
            </button>
            {config.categories.map((cat) => {
              const count = config.menuItems.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                      : 'bg-[#181310] text-[#baa998] hover:text-[#f2ece4] hover:bg-[#241d18] border border-[#2b221c]'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px] sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#827263]" />
            <input
              type="text"
              placeholder="Search dishes (e.g. DISH 1)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#16120f] border border-[#2e241d] text-xs sm:text-sm text-[#f5eae0] placeholder-[#6b5d50] focus:outline-none focus:border-amber-500 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#827263] hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center text-[#998b7e] bg-[#14100e] rounded-2xl border border-[#231b15]">
            <Info className="w-8 h-8 mx-auto text-amber-500/70 mb-3" />
            <p className="text-base font-medium text-[#d9ccbe]">No dishes found</p>
            <p className="text-xs text-[#87786a] mt-1 font-mono">Try searching with "DISH 1" or reset the category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-2xl bg-[#14100e] border border-[#261f19] hover:border-amber-600/40 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col"
              >
                {/* Food Image Placeholder Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#1a1410] border-b border-[#241c16] flex flex-col items-center justify-center p-6 text-center group-hover:bg-[#201813] transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#251e18] border border-dashed border-amber-500/30 flex items-center justify-center text-amber-400/80 mb-2 group-hover:scale-105 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-amber-300/90 uppercase">
                    {item.imagePlaceholderText}
                  </span>
                  <span className="text-[10px] text-[#7a6b5c] font-mono mt-0.5">
                    [Click to view dish placeholder]
                  </span>

                  {/* Corner Badge Placeholder */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0d0b0a]/90 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono font-semibold tracking-wide text-amber-300 uppercase shadow-sm">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag Placeholder in PKR */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0d0b0a]/90 backdrop-blur-md border border-amber-600/40 text-amber-400 font-serif font-bold text-sm shadow-md">
                    {item.formattedPrice}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Item Meta line */}
                    <div className="flex items-center gap-2 text-xs text-[#8c7b6c] mb-1.5 font-mono">
                      <span>{config.categories.find(c => c.id === item.category)?.name || 'MENU CATEGORY'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-500/80">ITEM #{item.id.replace('dish-', '')}</span>
                    </div>

                    {/* Dish Name Placeholder */}
                    <h3 className="font-serif text-xl font-bold text-[#faf1e6] group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>

                    {/* Description Placeholder */}
                    <p className="mt-2 text-xs sm:text-sm text-[#baa998] leading-relaxed line-clamp-3">
                      "{item.description}"
                    </p>
                  </div>

                  {/* Informational Footer Note (Strictly No Buy/Order Buttons) */}
                  <div className="mt-4 pt-3 border-t border-[#231b16] flex items-center justify-between text-xs text-[#7e6f62]">
                    <span className="font-mono">PRICE: {item.formattedPrice}</span>
                    <span className="text-amber-500/80 group-hover:text-amber-400 transition-colors font-mono">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Informational Template Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-[#14100e] border border-dashed border-[#362b21] text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#b5a494] font-mono">
            💡 <strong className="text-[#efe3d5]">MENU TEMPLATE NOTE:</strong> Replace dish titles (DISH 1, DISH 2), descriptions, photos, and prices with actual menu items for your restaurant client in <code className="text-amber-400">src/config/restaurantConfig.ts</code>.
          </p>
        </div>
      </div>

      {/* Item Details Lightbox Modal (Informational, No Cart/Order) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-[#14100e] border border-[#362b22] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-[#dfd2c4] hover:text-white hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Placeholder */}
            <div className="relative h-60 w-full bg-[#1b1511] border-b border-[#292019] flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-[#251e18] border border-dashed border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                <ImageIcon className="w-8 h-8" />
              </div>
              <span className="font-mono text-base font-bold tracking-wider text-amber-300 uppercase">
                {selectedItem.imagePlaceholderText}
              </span>
              <span className="text-xs text-[#8a7b6c] font-mono mt-1">
                [High resolution photo of {selectedItem.name} will appear here]
              </span>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#0d0b0a]/90 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
                  {config.categories.find(c => c.id === selectedItem.category)?.name || 'MENU CATEGORY'}
                </span>
                <span className="font-serif text-lg font-bold text-amber-400">
                  {selectedItem.formattedPrice}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#faf2e8]">
                {selectedItem.name}
              </h3>

              <div className="mt-1 text-xs text-amber-500 font-mono font-semibold">
                ★ {selectedItem.badge || 'MENU ITEM TEMPLATE'}
              </div>

              <p className="mt-4 text-sm text-[#cfbeae] leading-relaxed">
                "{selectedItem.description}"
              </p>

              <div className="mt-6 pt-4 border-t border-[#261f19] space-y-2 text-xs text-[#9c8d7e] font-mono">
                <div className="flex justify-between">
                  <span>DISH STATUS:</span>
                  <span className="text-[#efe3d5] font-medium">AVAILABLE FOR DINE-IN / TAKEAWAY</span>
                </div>
                <div className="flex justify-between">
                  <span>PRICING:</span>
                  <span className="text-amber-400 font-medium">{selectedItem.formattedPrice}</span>
                </div>
              </div>

              {/* Informational Action Note (No Add to Cart or Order) */}
              <div className="mt-6 pt-4 border-t border-[#261f19]">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-md"
                >
                  <span>INQUIRE ABOUT THIS DISH VIA WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
