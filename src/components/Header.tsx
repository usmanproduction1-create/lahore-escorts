import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Menu, X, Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Models', id: 'models' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About Us', id: 'about' },
    { label: 'Areas', id: 'areas' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-neutral-950/95 border-b border-purple-900/30 text-xs text-neutral-300 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-purple-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-blue-400" />
              Lahore, Punjab, Pakistan
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center text-neutral-400">
              <Shield className="w-3.5 h-3.5 mr-1 text-purple-400" />
              Strictly Adults Aged 18+ Only
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href="mailto:usmanproduction1@gmail.com"
              className="flex items-center hover:text-blue-400 transition-colors"
              id="top-email-link"
            >
              <Mail className="w-3.5 h-3.5 mr-1 text-blue-400" />
              usmanproduction1@gmail.com
            </a>
            <a
              href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20am%20inquiring%20about%20fashion%20and%20event%20modeling%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              id="top-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1 fill-emerald-400/20" />
              0325-6556505
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-purple-900/40 shadow-xl shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-button"
          >
            {/* Elegant Monogram Icon */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-900 p-0.5 shadow-lg shadow-purple-900/30 group-hover:shadow-blue-500/30 transition-all duration-300">
              <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center border border-purple-500/20">
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-amber-300 text-lg">
                  LG
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-purple-300 transition-colors">
                  LAHORE NIGHT GIRLS
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400/80 font-medium">
                Premium Fashion & Modeling
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 focus:outline-none group"
                id={`nav-link-${link.id}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20model."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 hover:border-emerald-400 transition-all duration-200"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-purple-900/30 hover:shadow-lg hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              id="header-book-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:03256556505"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-blue-400 hover:text-white"
              aria-label="Call Us"
              id="mobile-call-icon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-purple-900/40 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-purple-900/30 bg-neutral-950/98 rounded-2xl px-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-neutral-300 hover:text-white hover:bg-purple-950/30 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  id={`mobile-nav-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800/80 grid grid-cols-2 gap-2 mt-2">
              <a
                href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20would%20like%20to%20inquire%20about%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300"
                id="mobile-nav-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-purple-900/40"
                id="mobile-nav-booking"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                Book Now
              </button>
            </div>

            <div className="mt-3 text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1">
              <Shield className="w-3 h-3 text-purple-400" />
              Adults 18+ Only • Gulberg • Johar Town • Bahria Town • Iqbal Town
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
