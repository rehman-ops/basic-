import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, CheckCircle2, Car, ShieldCheck, Map as MapIcon } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface LocationProps {
  config: RestaurantConfig;
}

export const Location: React.FC<LocationProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(config.location.addressDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#120f0d] relative border-t border-[#1f1915]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 font-mono">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>LOCATION TEMPLATE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf3ea] tracking-tight">
            LOCATION & HOURS
          </h2>
          <p className="mt-3 text-base text-[#b8a796] max-w-xl mx-auto">
            LOCATION DESCRIPTION HERE. Add directions, nearby landmarks, parking availability, and visiting details for your restaurant client here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details, Hours & Address Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#171310] border border-[#2b221b] shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-600/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#faf2e8]">
                    RESTAURANT ADDRESS
                  </h3>
                  <p className="mt-2 text-base text-[#d4c5b6] font-mono font-semibold leading-relaxed">
                    {config.location.addressDisplay}
                  </p>
                  <p className="mt-1 text-xs text-amber-500/90 font-mono">
                    LANDMARK: {config.location.landmark}
                  </p>

                  {/* Actions: Get Directions & Copy Address */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => alert('Insert actual Google Maps URL in src/config/restaurantConfig.ts')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-amber-950/40"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>OPEN IN GOOGLE MAPS</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#221a14] hover:bg-[#2e231b] border border-[#3b2d22] text-[#d6c7b7] text-xs font-medium transition-colors"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <span>COPY ADDRESS</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone Assistance Placeholder */}
              <div className="mt-6 pt-5 border-t border-[#261f18] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#968677] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>PHONE ASSISTANCE:</span>
                </span>
                <span className="font-mono font-semibold text-amber-400">
                  {config.contact.phoneDisplay}
                </span>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#171310] border border-[#2b221b] shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <h3 className="font-serif text-xl font-bold text-[#faf2e8]">
                      OPENING HOURS
                    </h3>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>HOURS TEMPLATE</span>
                  </div>
                </div>

                <div className="space-y-3 divide-y divide-[#241c16]">
                  {config.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="pt-2.5 flex items-center justify-between text-xs sm:text-sm font-mono text-[#d4c5b6]"
                    >
                      <span>SCHEDULE SLOT {idx + 1}:</span>
                      <span className="font-semibold text-amber-400">{schedule.schedule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Amenities Placeholder */}
              <div className="mt-6 pt-5 border-t border-[#261f18]">
                <p className="text-xs uppercase tracking-wider text-[#8a7a6c] font-semibold mb-2.5 font-mono">
                  RESTAURANT AMENITIES
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#cfbeae] font-mono">
                  {config.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Placeholder Area (No Fictional Embed) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-dashed border-[#44362b] bg-[#17120e] shadow-2xl h-[420px] lg:h-full min-h-[380px] flex flex-col items-center justify-center p-8 text-center group">
              {/* Map grid aesthetic styling */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#amber_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#231b15] border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform shadow-lg">
                <MapIcon className="w-10 h-10" />
              </div>

              <span className="relative z-10 font-mono text-xl sm:text-2xl font-bold tracking-widest text-[#f5eae0] uppercase">
                {config.location.mapPlaceholderText}
              </span>

              <p className="relative z-10 mt-2 text-xs sm:text-sm text-[#9a897a] max-w-sm font-mono">
                [Embed your Google Maps iframe or API coordinates for {config.name} here]
              </p>

              {/* Pin indicator overlay */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f0d0c]/90 border border-[#382d23] text-xs font-mono text-amber-300">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{config.location.addressDisplay}</span>
              </div>
            </div>

            {/* Parking & Facility Note */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#16120f] border border-[#261f18] text-xs text-[#9d8e7f] font-mono">
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-500" />
                <span>PARKING / ARRIVAL INFORMATION HERE</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>VERIFIED PHYSICAL LOCATION TEMPLATE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
