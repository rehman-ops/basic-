import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface SocialProps {
  config: RestaurantConfig;
}

export const Social: React.FC<SocialProps> = ({ config }) => {
  const socialChannels = [
    {
      name: 'INSTAGRAM',
      displayText: config.social.instagram.displayText,
      url: config.social.instagram.urlPlaceholder,
      description: 'Connect with restaurant food reels, kitchen stories, and updates.',
      colorClass: 'from-fuchsia-600/20 to-pink-600/10 hover:border-pink-500/50',
      badgeColor: 'text-pink-400',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'FACEBOOK',
      displayText: config.social.facebook.displayText,
      url: config.social.facebook.urlPlaceholder,
      description: 'Customer reviews, dining announcements, family event photos, and community updates.',
      colorClass: 'from-blue-600/20 to-indigo-600/10 hover:border-blue-500/50',
      badgeColor: 'text-blue-400',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'TIKTOK',
      displayText: config.social.tiktok.displayText,
      url: config.social.tiktok.urlPlaceholder,
      description: 'Short food preparation clips, chef techniques, and behind-the-scenes moments.',
      colorClass: 'from-cyan-600/20 to-teal-600/10 hover:border-cyan-500/50',
      badgeColor: 'text-cyan-400',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.46 2.81 1.25-.01 2.4-1.02 2.65-2.25.13-.57.17-1.17.16-1.76.01-6.19-.01-12.37.01-18.57z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="social" className="py-20 sm:py-28 bg-[#0d0b0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SOCIAL MEDIA TEMPLATE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf3ea] tracking-tight">
            FOLLOW US
          </h2>
          <p className="mt-3 text-base text-[#baa998] max-w-xl mx-auto">
            SOCIAL SECTION DESCRIPTION HERE. Insert your client's official social media profiles and channels below.
          </p>
        </div>

        {/* Large Social Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {socialChannels.map((channel) => (
            <div
              key={channel.name}
              className={`p-8 rounded-2xl bg-gradient-to-b ${channel.colorClass} bg-[#14100e] border border-[#2b221c] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#1c1612] text-[#f2ece4] border border-[#332820]">
                    {channel.icon}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#8c7e71] font-mono">
                    <span>SOCIAL PLACEHOLDER</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#faf3ea]">
                  {channel.name}
                </h3>
                <p className={`text-xs font-mono font-bold ${channel.badgeColor} mt-2 p-2 rounded bg-[#0d0b0a]/60 border border-[#28211b]`}>
                  "{channel.displayText}"
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[#bdae9f] leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#261f19] flex items-center justify-between text-xs text-[#7e7063] font-mono">
                <span>CONFIG: SOCIAL LINKS</span>
                <span className="font-medium text-amber-500/90">
                  {channel.displayText} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Tag Banner Placeholder */}
        <div className="mt-14 rounded-2xl bg-[#15110e] border border-dashed border-[#382b21] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#faf3ea]">
              SOCIAL ENGAGEMENT PROMPT HERE
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-[#b5a494] font-mono">
              Describe your hashtag campaign or social media tagging call-to-action for {config.name} here.
            </p>
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-[#221a14] border border-[#3b2d22] text-amber-300 text-xs sm:text-sm font-mono font-semibold shrink-0">
            <span>INSTAGRAM LINK HERE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
