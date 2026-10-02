import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface FloatingWhatsAppProps {
  config: RestaurantConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`WhatsApp Configuration: Replace '${config.contact.whatsappNumberPlaceholder}' in src/config/restaurantConfig.ts`);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:block transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <div className="px-3.5 py-1.5 rounded-lg bg-[#14100e] text-[#f2ece4] text-xs font-mono font-medium border border-[#30261f] shadow-xl shadow-black/80 flex items-center gap-1.5">
          <span>CHAT ON WHATSAPP</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/80 hover:shadow-emerald-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:scale-110" />

        {/* Status dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#14100e]" />
      </button>
    </div>
  );
};
