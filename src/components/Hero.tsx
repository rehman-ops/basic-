import React from 'react';
import { ChevronDown, Sparkles, MapPin, UtensilsCrossed, Image as ImageIcon } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface HeroProps {
  config: RestaurantConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Hero Area - Visual Generic Template Presentation */}
      <div className="absolute inset-0 z-0 bg-[#120e0c]">
        {/* Subtle grid and culinary geometric backdrop */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3a2e24_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Visual Hero Image Placeholder Badge in Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
          <div className="flex flex-col items-center gap-4 text-center">
            <ImageIcon className="w-24 h-24 text-amber-500" />
            <span className="font-mono text-3xl font-bold tracking-widest text-amber-400 uppercase">
              RESTAURANT HERO IMAGE HERE
            </span>
          </div>
        </div>

        {/* Layered dark moody atmospheric vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-[#0d0b0a]/80 to-[#0d0b0a]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b0a]/90 via-[#0d0b0a]/60 to-[#0d0b0a]/90" />
        {/* Warm amber radial glow for rich culinary ambiance */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-600/10 blur-[130px] pointer-events-none rounded-full" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Decorative Template Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1713]/80 border border-dashed border-amber-500/40 text-amber-300 text-xs font-mono font-medium tracking-widest uppercase shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>RESTAURANT TEMPLATE</span>
        </div>

        {/* Restaurant Name Placeholder */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fdf8f2] max-w-4xl leading-[1.1] drop-shadow-sm">
          {config.name}
        </h1>

        {/* Restaurant Tagline Placeholder */}
        <p className="mt-4 font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-200/90 font-light max-w-2xl">
          "{config.tagline}"
        </p>

        {/* Restaurant Description Placeholder */}
        <p className="mt-6 text-base sm:text-lg text-[#d1c2b2] max-w-2xl leading-relaxed font-normal">
          {config.shortDescription}
        </p>

        {/* Action Button - Explore Menu (Strictly No Order Button) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-base shadow-lg shadow-amber-950/50 hover:shadow-amber-900/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-200" />
            <span>EXPLORE MENU</span>
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('location')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1c1612]/90 hover:bg-[#28201a] border border-[#3e3227] hover:border-amber-500/40 text-[#f0e4d6] font-medium text-base transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>FIND LOCATION</span>
          </button>
        </div>

        {/* Generic Informational Highlights (Anti-pill text format) */}
        <div className="mt-14 pt-8 border-t border-[#261f19]/80 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-400">FEATURE 1</div>
            <div className="text-xs text-[#9c8e80] mt-0.5">FEATURE DETAIL HERE</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-400">FEATURE 2</div>
            <div className="text-xs text-[#9c8e80] mt-0.5">FEATURE DETAIL HERE</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-400">FEATURE 3</div>
            <div className="text-xs text-[#9c8e80] mt-0.5">FEATURE DETAIL HERE</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-400">FEATURE 4</div>
            <div className="text-xs text-[#9c8e80] mt-0.5">FEATURE DETAIL HERE</div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <button
          type="button"
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="mt-10 p-2 text-[#7f7163] hover:text-amber-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
