import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantConfig';

interface HeaderProps {
  config: RestaurantConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'LOCATION', href: '#location' },
    { label: 'SOCIAL', href: '#social' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar with hours & location placeholder */}
      <div className="bg-[#14100e] border-b border-[#28211c] text-xs text-[#a89b8d] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{config.location.addressDisplay}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{config.hours[0]?.schedule || 'OPENING HOURS HERE'}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-amber-400 font-medium">RESTAURANT TEMPLATE</span>
            <span className="text-[#483d35]">|</span>
            <span className="hover:text-amber-400 transition-colors">
              {config.contact.phoneDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0d0c]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#2c241e] py-3'
            : 'bg-[#0f0d0c]/80 backdrop-blur-sm border-b border-[#221c17] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Restaurant Logo & Name Placeholder */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="group flex items-center gap-3"
            >
              {/* Logo Placeholder Area */}
              <div className="px-3 py-1.5 rounded-lg border border-dashed border-amber-500/50 bg-[#181310] flex items-center justify-center shadow-sm">
                <span className="text-[10px] font-mono tracking-wider text-amber-400 font-semibold uppercase">
                  {config.logoText}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#fdf8f2] group-hover:text-amber-400 transition-colors">
                  {config.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/90 font-medium -mt-0.5">
                  RESTAURANT TEMPLATE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs sm:text-sm font-semibold tracking-wider text-[#c4b5a5] hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Header WhatsApp CTA Placeholder */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP HERE</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                aria-label="WhatsApp Here"
                className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#201a15] text-[#d6c7b7] hover:text-white border border-[#382e25]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#2a221b] bg-[#14100e] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider text-[#e3d7ca] hover:bg-[#251e18] hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#28201a] space-y-2">
              <div className="text-xs text-[#8c7e71] px-3 space-y-1">
                <p>📍 {config.location.addressDisplay}</p>
                <p>📞 {config.contact.phoneDisplay}</p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
