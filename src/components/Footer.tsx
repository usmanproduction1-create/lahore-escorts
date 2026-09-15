import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer className="bg-neutral-950 border-t border-purple-900/40 text-neutral-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-900 p-0.5 shadow-md">
                <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 text-base">
                    LG
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider">
                LAHORE NIGHT GIRLS
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Premium adult fashion and modeling platform providing professional modeling, photography, promotional and event-related services in Lahore.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] font-medium">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Strictly 18+ Adults Only • Ethical &amp; Professional</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('models')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-models"
                >
                  Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                  id="footer-nav-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Lahore Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-blue-400" /> Gulberg, Lahore
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-blue-400" /> Johar Town, Lahore
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-blue-400" /> Bahria Town, Lahore
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-blue-400" /> Iqbal Town, Lahore
              </li>
            </ul>

            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mt-6 mb-2">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-purple-300 transition-colors"
                  id="footer-privacy-btn"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-purple-300 transition-colors"
                  id="footer-terms-btn"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Phone / WhatsApp</div>
                <a
                  href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-bold block transition-colors mt-0.5"
                >
                  0325-6556505
                </a>
              </div>

              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Email Booking Desk</div>
                <a
                  href="mailto:usmanproduction1@gmail.com"
                  className="text-neutral-300 hover:text-blue-400 text-xs block transition-colors break-all mt-0.5"
                >
                  usmanproduction1@gmail.com
                </a>
              </div>

              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Location</div>
                <p className="text-neutral-300 text-xs mt-0.5">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords bar */}
        <div className="pt-8 pb-6 border-t border-neutral-900 text-[11px] text-neutral-500 flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-center">
          <span className="text-neutral-400 font-medium">Relevant Searches:</span>
          <span>Lahore fashion models</span>
          <span>•</span>
          <span>Lahore modeling services</span>
          <span>•</span>
          <span>Lahore fashion photography</span>
          <span>•</span>
          <span>Lahore event modeling</span>
          <span>•</span>
          <span>adult fashion modeling Lahore</span>
          <span>•</span>
          <span>Gulberg model shoots</span>
          <span>•</span>
          <span>Bahria Town event hostesses</span>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-neutral-300">Lahore Night Girls</strong>. All rights reserved. Tasteful, non-explicit fashion &amp; event modeling.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-400">Strictly 18+</span>
            <span>•</span>
            <button onClick={onOpenPrivacy} className="hover:text-white">Privacy Policy</button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-white">Terms &amp; Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
