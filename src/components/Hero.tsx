import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Shield, Star, Award, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_luxury_banner_1789427460375.jpg';

interface HeroProps {
  onViewModels: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewModels, onOpenBooking }) => {
  const serviceAreas = ['Gulberg', 'Johar Town', 'Bahria Town', 'Iqbal Town'];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Deep Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lahore Night Girls Haute Couture Fashion"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse duration-10000"
        />
        {/* Multilayered radial and linear dark gradients for blue/purple ambient atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-blue-950/20 to-transparent" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Verification & Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Shield className="w-4 h-4 text-blue-400" />
          <span>Strictly Adults Aged 18+ Only</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-300">Verified Modeling Agency</span>
        </div>

        {/* Primary Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-6 uppercase">
          <span className="block drop-shadow-sm">LAHORE NIGHT GIRLS</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl md:text-3xl font-editorial italic text-purple-200/90 font-light max-w-3xl mb-8 leading-relaxed">
          Premium Adult Fashion &amp; Modeling Services in Lahore
        </p>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mb-10 leading-relaxed font-light">
          Representing Lahore’s finest talent for high-fashion runway, designer photoshoots, brand commercial campaigns, and exclusive corporate event modeling with utmost professionalism and discretion.
        </p>

        {/* Action Buttons as requested */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* View Models Button */}
          <button
            onClick={onViewModels}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-purple-900/40 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-purple-400/20"
            id="hero-view-models-btn"
          >
            <span>View Models</span>
            <ArrowRight className="w-4 h-4 text-purple-200" />
          </button>

          {/* WhatsApp Us Button */}
          <a
            href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20am%20interested%20in%20your%20premium%20fashion%20and%20modeling%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/70 hover:border-emerald-400 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            id="hero-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
            <span>WhatsApp Us (0325-6556505)</span>
          </a>
        </div>

        {/* Service Areas Display Banner */}
        <div className="w-full max-w-3xl rounded-2xl bg-neutral-900/70 border border-purple-900/40 backdrop-blur-md p-4 sm:p-5 shadow-2xl">
          <div className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Dedicated Service Areas Across Lahore</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base font-medium text-white">
            {serviceAreas.map((area, index) => (
              <React.Fragment key={area}>
                <span className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-neutral-700/60 hover:border-purple-500/60 hover:text-purple-300 transition-colors">
                  {area}
                </span>
                {index < serviceAreas.length - 1 && (
                  <span className="text-purple-500 font-bold hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Core Pillars from user poster */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-12 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/50 text-blue-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">18+ Adults Only</div>
              <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">Verified professional talent</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-800/50 text-purple-400 shrink-0">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Quality Artists</div>
              <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">Runway, studio &amp; lookbook</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/50 text-blue-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Custom Packages</div>
              <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">Tailored to your creative brief</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-800/50 text-purple-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">On-Time Service</div>
              <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">Punctual agency dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
