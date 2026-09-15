import React from 'react';
import { MapPin, Navigation, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { AREAS_DATA } from '../data/areas';
import { ServiceAreaName } from '../types';

interface AreasSectionProps {
  onSelectAreaForBooking: (areaName: ServiceAreaName) => void;
}

export const AreasSection: React.FC<AreasSectionProps> = ({ onSelectAreaForBooking }) => {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Dedicated Lahore Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            Our Lahore Service Areas
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-editorial italic max-w-2xl mx-auto">
            Providing on-location modeling and event staffing across Lahore’s leading commercial, media, and luxury residential sectors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-medium text-purple-300">
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Gulberg</span>
            <span>•</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Johar Town</span>
            <span>•</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Bahria Town</span>
            <span>•</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Iqbal Town</span>
          </div>
        </div>

        {/* 4 Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS_DATA.map((area) => (
            <div
              key={area.id}
              className="rounded-3xl bg-neutral-900/90 border border-neutral-800/90 hover:border-purple-500/60 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              id={`area-card-${area.id}`}
            >
              {/* Image Preview */}
              <div className="relative h-44 overflow-hidden bg-neutral-950">
                <img
                  src={area.image}
                  alt={`${area.name}, Lahore`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                {/* Area Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-950/80 backdrop-blur-md text-blue-300 border border-blue-500/30 flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-purple-400" />
                  Lahore Sector
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    {area.name}
                  </h3>
                </div>
              </div>

              {/* Area Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                    {area.tagline}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                    {area.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Key Shoot Venues &amp; Spots:
                    </div>
                    {area.keySpots.map((spot, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>{spot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => onSelectAreaForBooking(area.name)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white transition-all border border-neutral-700/60"
                    id={`book-area-${area.id}`}
                  >
                    <span>Book in {area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
