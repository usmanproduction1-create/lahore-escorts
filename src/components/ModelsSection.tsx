import React, { useState } from 'react';
import { Eye, Shield, MapPin, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { ModelProfile } from '../types';
import { MODELS_DATA } from '../data/models';
import { ModelProfileModal } from './ModelProfileModal';

interface ModelsSectionProps {
  onSelectForBooking: (modelName: string) => void;
}

export const ModelsSection: React.FC<ModelsSectionProps> = ({ onSelectForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalModel, setActiveModalModel] = useState<ModelProfile | null>(null);

  const categories = [
    'All',
    'Haute Couture & Runway',
    'Brand Promotion & Commercial',
    'Traditional Couture & Bridal',
    'Event Modeling & VIP Hostess',
    'Professional Photoshoots & Lookbooks',
  ];

  const filteredModels = selectedCategory === 'All'
    ? MODELS_DATA
    : MODELS_DATA.filter((m) => m.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(m.category.toLowerCase()));

  return (
    <section id="models" className="py-20 sm:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Curated Roster of Professional Artists</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            Our Elite Models
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-editorial italic max-w-2xl mx-auto">
            Discover vetted, strictly 18+ professional adult models specializing in haute couture, commercial campaigns, bridal catalogues, and prestigious corporate events across Lahore.
          </p>

          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1 text-purple-400">
              <Shield className="w-3.5 h-3.5 text-purple-400" /> All Models Aged 18+
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-blue-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Verified Portfolios
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Gulberg, Johar Town, Bahria &amp; Iqbal Town
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-900/30 border border-purple-400/40'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
              id={`filter-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="group relative rounded-3xl bg-neutral-900/90 border border-neutral-800/90 hover:border-purple-600/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              id={`model-card-${model.id}`}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                <img
                  src={model.image}
                  alt={`${model.name} - Lahore Fashion Model`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ambient Gradient on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Age & 18+ Verification Badge */}
                <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-950/85 backdrop-blur-md text-purple-300 border border-purple-500/30">
                    <Shield className="w-3 h-3 text-blue-400" />
                    Age: {model.age} (18+)
                  </span>

                  {model.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-950/85 text-blue-200 border border-blue-500/30">
                      {model.badge}
                    </span>
                  )}
                </div>

                {/* Quick Area Coverage Pill */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/70 backdrop-blur-md text-neutral-300 border border-neutral-700/60">
                    <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                    Lahore
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-400 block mb-1">
                    {model.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {model.name}
                  </h3>
                </div>
              </div>

              {/* Card Body & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed mb-4 font-light">
                    {model.shortBio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {model.availableAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[10px] px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-400 border border-neutral-700/50"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-neutral-800/80">
                  <button
                    onClick={() => setActiveModalModel(model)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-800/90 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-md hover:shadow-purple-900/40 transition-all duration-200 border border-neutral-700/60"
                    id={`view-profile-${model.id}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-300" />
                    <span>View Profile</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Detail Modal */}
      <ModelProfileModal
        model={activeModalModel}
        onClose={() => setActiveModalModel(null)}
        onBookModel={(name) => {
          setActiveModalModel(null);
          onSelectForBooking(name);
        }}
      />
    </section>
  );
};
