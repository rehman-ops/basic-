/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { defaultRestaurantConfig, RestaurantConfig } from './config/restaurantConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Location } from './components/Location';
import { Social } from './components/Social';
import { WhatsAppSection } from './components/WhatsAppSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TemplateCustomizerModal } from './components/TemplateCustomizerModal';

export default function App() {
  const [config, setConfig] = useState<RestaurantConfig>(defaultRestaurantConfig);

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-[#f5ede4] flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* 1. Header with brand identity & smooth section navigation */}
      <Header config={config} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section with atmospheric food imagery & tagline */}
        <Hero config={config} />

        {/* 3. About Section with culinary philosophy, cuisine type, and story */}
        <About config={config} />

        {/* 4. Menu Section with categories, food photography, and PKR pricing */}
        <Menu config={config} />

        {/* 5. Location Section with physical address, Google Maps, and hours */}
        <Location config={config} />

        {/* 6. Social Media Section with Instagram, Facebook, and TikTok */}
        <Social config={config} />

        {/* 7. WhatsApp Contact Section */}
        <WhatsAppSection config={config} />
      </main>

      {/* 8. Premium Footer with complete business information & copyright */}
      <Footer config={config} />

      {/* Unobtrusive Floating WhatsApp Contact Button */}
      <FloatingWhatsApp config={config} />

      {/* Template Guide Drawer for Client Presentation */}
      <TemplateCustomizerModal currentConfig={config} />
    </div>
  );
}
