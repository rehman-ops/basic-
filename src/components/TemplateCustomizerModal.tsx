import React, { useState } from 'react';
import { Settings2, X, Code, CheckCircle, FileText } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface TemplateCustomizerModalProps {
  currentConfig: RestaurantConfig;
}

export const TemplateCustomizerModal: React.FC<TemplateCustomizerModalProps> = ({
  currentConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Template Guide Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1b1511]/90 hover:bg-[#251e18] border border-amber-500/40 text-amber-300 text-xs font-mono font-medium shadow-xl shadow-black/80 transition-all backdrop-blur-md hover:scale-105"
        >
          <Settings2 className="w-3.5 h-3.5 text-amber-400" />
          <span>TEMPLATE GUIDE & CONFIG</span>
        </button>
      </div>

      {/* Modal Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-[#14100e] border border-[#33281f] rounded-2xl max-w-xl w-full p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#251d17]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#faf3ea]">
                  GENERIC RESTAURANT WEBSITE TEMPLATE
                </h3>
                <p className="text-xs text-[#a99988] mt-0.5 font-mono">
                  Plan 1 · Informational Only · Centralized Configuration
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#948373] hover:text-white hover:bg-[#201813]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="py-4 overflow-y-auto flex-1 space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#191410] border border-[#2b211a] text-[#cfbeae] space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
                  <CheckCircle className="w-4 h-4" />
                  <span>COMPLETELY GENERIC TEMPLATE</span>
                </div>
                <p className="text-[#a89785] leading-relaxed">
                  All fictional business names, menus, addresses, phone numbers, and images have been replaced with clear, professional placeholders. Someone viewing this website immediately understands it is an editable, reusable restaurant template ready for any restaurant client.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#e3d5c6] font-mono font-semibold">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>How to Customize for Any Client:</span>
                </div>
                <p className="text-[#9e8f80]">
                  Open <code className="text-amber-400 font-mono">src/config/restaurantConfig.ts</code> and update the values:
                </p>
                <pre className="p-3 rounded-lg bg-[#0e0c0a] border border-[#291f19] text-[#9ece6a] font-mono text-[11px] overflow-x-auto leading-relaxed">
{`// src/config/restaurantConfig.ts
export const defaultRestaurantConfig = {
  name: "${currentConfig.name}",
  logoText: "${currentConfig.logoText}",
  tagline: "${currentConfig.tagline}",
  shortDescription: "${currentConfig.shortDescription}",
  contact: {
    phoneDisplay: "${currentConfig.contact.phoneDisplay}",
    whatsappNumberPlaceholder: "${currentConfig.contact.whatsappNumberPlaceholder}"
  },
  location: {
    addressDisplay: "${currentConfig.location.addressDisplay}",
    mapPlaceholderText: "${currentConfig.location.mapPlaceholderText}"
  },
  categories: [ ... 6 Categories ... ],
  menuItems: [ ... DISH 1 to DISH 12 with Rs. PRICE HERE ... ]
};`}
                </pre>
              </div>

              <div className="p-3 rounded-lg bg-[#191410] border border-[#2b211a] text-[#8e7e70] font-mono leading-relaxed">
                <p className="text-amber-400 font-semibold mb-1">Plan 1 Informational-Only Guarantee:</p>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                  <li>NO shopping cart, checkout, or ordering system</li>
                  <li>NO customer accounts or payment gateways</li>
                  <li>Direct WhatsApp inquiry button</li>
                  <li>Clean menu grid with dish placeholders and prices in PKR</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[#231b15] flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#221a14] hover:bg-[#2c221a] text-[#ded0c2] text-xs font-mono font-medium"
              >
                CLOSE GUIDE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
