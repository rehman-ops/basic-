import React from 'react';
import { Sparkles, Utensils, Image as ImageIcon } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface AboutProps {
  config: RestaurantConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#120f0d] relative overflow-hidden border-t border-[#1f1915]">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Template Photo Placeholder */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-dashed border-[#44352a] bg-[#181310] h-[400px] sm:h-[480px] shadow-2xl flex flex-col items-center justify-center p-8 text-center group">
              {/* Center Photo Placeholder Indicator */}
              <div className="w-20 h-20 rounded-2xl bg-[#231b15] border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-10 h-10" />
              </div>
              <span className="font-mono text-lg sm:text-xl font-bold tracking-widest text-[#f5eae0] uppercase">
                RESTAURANT PHOTO HERE
              </span>
              <p className="mt-2 text-xs text-[#9a897a] max-w-xs font-mono">
                [Upload restaurant interior, exterior, or kitchen photo here]
              </p>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#14100e]/95 backdrop-blur-md border border-[#30261f]">
                <div className="flex items-center justify-between text-xs text-[#b8a99a]">
                  <span className="font-serif italic text-amber-300 text-sm">RESTAURANT CAPTION HERE</span>
                  <span className="text-amber-500 font-semibold">{config.story.cuisineType}</span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge Placeholder */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-5 rounded-2xl bg-[#1d1713] border border-dashed border-amber-600/30 shadow-xl items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-amber-500 font-semibold">RESTAURANT BADGE HERE</p>
                <p className="text-xs text-[#c9bcaf] mt-0.5 font-mono">Badge description text here.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Kicker Metadata */}
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-amber-500 mb-3 font-mono">
              <span>{config.story.heading}</span>
              <span aria-hidden="true" className="text-[#4a3f36]">·</span>
              <span>{config.name}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf3ea] tracking-tight leading-tight">
              {config.story.heading}
            </h2>

            {/* Cuisine Line */}
            <div className="mt-4 flex items-center gap-3 text-sm text-amber-300/90 font-medium">
              <Utensils className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{config.story.cuisineType}</span>
            </div>

            {/* Narrative Paragraphs */}
            <p className="mt-6 text-base text-[#cfbeae] leading-relaxed">
              {config.story.paragraph1}
            </p>

            <p className="mt-4 text-base text-[#ab9b8c] leading-relaxed">
              {config.story.paragraph2}
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#231b15]">
              {config.story.highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#17120f] border border-[#271e18]">
                  <h3 className="text-sm font-semibold text-[#f5eae0] flex items-center gap-2 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#988a7c] leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Statement note */}
            <div className="mt-6 flex items-center gap-3 text-xs text-[#9c8d7f]">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>RESTAURANT STATEMENT OR COMMITMENT NOTE HERE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
