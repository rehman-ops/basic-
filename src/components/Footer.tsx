import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface FooterProps {
  config: RestaurantConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b0908] border-t border-[#1d1713] text-[#a69685] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1f1814]">
          {/* Brand Info & Identity (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg border border-dashed border-amber-500/50 bg-[#181310] flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-wider text-amber-400 font-semibold uppercase">
                  {config.logoText}
                </span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-[#fdf8f2]">
                {config.name}
              </span>
            </div>

            <p className="text-sm text-[#bdae9f] leading-relaxed max-w-sm">
              {config.shortDescription}
            </p>

            {/* Social Links Placeholders */}
            <div className="pt-2 space-y-1.5 font-mono text-xs text-[#cfbeae]">
              <p className="text-amber-500 font-semibold">SOCIAL LINKS:</p>
              <p>• {config.social.instagram.displayText}</p>
              <p>• {config.social.facebook.displayText}</p>
              <p>• {config.social.tiktok.displayText}</p>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#e6d8c8] font-mono">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold tracking-wider">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, '#about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleScrollTo(e, '#menu')}
                  className="hover:text-amber-400 transition-colors"
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleScrollTo(e, '#location')}
                  className="hover:text-amber-400 transition-colors"
                >
                  LOCATION
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  onClick={(e) => handleScrollTo(e, '#social')}
                  className="hover:text-amber-400 transition-colors"
                >
                  SOCIAL
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  WHATSAPP HERE
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Information (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#e6d8c8] font-mono">
              CONTACT & ADDRESS
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#bdae9f] font-mono">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{config.location.addressDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{config.contact.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2 text-emerald-400">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{config.contact.whatsappNumberPlaceholder}</span>
              </p>
            </div>

            <div className="pt-2 text-xs text-[#7e6f62] font-mono">
              <p>RESTAURANT SERVICE TYPE HERE</p>
              <p className="mt-0.5">CITY HERE, COUNTRY HERE</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Informational Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706254] font-mono">
          <p>© {currentYear} {config.name}. All rights reserved.</p>

          <p className="text-center sm:text-right">
            PLAN 1 RESTAURANT WEBSITE TEMPLATE · INFORMATIONAL ONLY
          </p>
        </div>
      </div>
    </footer>
  );
};
