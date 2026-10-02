import React from 'react';
import { MessageCircle, HelpCircle, PhoneCall } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface WhatsAppSectionProps {
  config: RestaurantConfig;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({ config }) => {
  const handleWhatsAppAction = () => {
    // Demonstrates placeholder integration to client
    alert(`Template Notice: Replace '${config.contact.whatsappNumberPlaceholder}' with actual client phone number in src/config/restaurantConfig.ts to activate one-tap WhatsApp chat.`);
  };

  const quickInquiries = [
    {
      label: 'INQUIRY SHORTCUT 1 HERE',
      message: 'Inquiry message text template here.',
    },
    {
      label: 'INQUIRY SHORTCUT 2 HERE',
      message: 'Inquiry message text template here.',
    },
    {
      label: 'INQUIRY SHORTCUT 3 HERE',
      message: 'Inquiry message text template here.',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#110e0c] relative border-t border-[#221b16] overflow-hidden">
      {/* Subtle emerald ambient glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtitle icon */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 font-mono">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP INTEGRATION TEMPLATE</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf3ea] tracking-tight">
          HAVE A QUESTION?
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-[#c5b5a4] max-w-xl mx-auto leading-relaxed">
          Message us on WhatsApp for more information.
        </p>

        {/* Main WhatsApp CTA Button Placeholder */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleWhatsAppAction}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/70 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>CHAT ON WHATSAPP</span>
          </button>

          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1b1511] border border-[#332820] text-[#dcd0c2] text-sm font-medium">
            <PhoneCall className="w-4 h-4 text-amber-500" />
            <span className="font-mono">{config.contact.phoneDisplay}</span>
          </div>
        </div>

        {/* Notice of WhatsApp number placeholder */}
        <div className="mt-4 inline-block px-3 py-1 rounded bg-[#181310] border border-dashed border-emerald-500/40 text-emerald-400 font-mono text-xs">
          CONFIG: {config.contact.whatsappNumberPlaceholder}
        </div>

        {/* Quick Conversation Starter Prompts Placeholder */}
        <div className="mt-10 pt-8 border-t border-[#241c16]">
          <p className="text-xs text-[#8c7d6e] uppercase tracking-wider font-semibold mb-3 font-mono">
            QUICK INQUIRY SHORTCUTS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {quickInquiries.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={handleWhatsAppAction}
                className="px-3.5 py-1.5 rounded-lg bg-[#181310] hover:bg-[#231b16] border border-[#2e241c] hover:border-emerald-500/40 text-xs text-[#b8a796] hover:text-[#f0e4d6] transition-colors flex items-center gap-1.5 font-mono"
              >
                <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>{prompt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Operational Note Placeholder */}
        <p className="mt-8 text-xs text-[#706254] font-mono">
          OPENING HOURS: {config.hours[0]?.schedule || 'OPENING HOURS HERE'} · LOCATION: {config.location.addressDisplay}
        </p>
      </div>
    </section>
  );
};
