import React from 'react';
import { Sparkles, Camera, Megaphone, Award, Film, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-neutral-900/60 border-y border-purple-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Tailored Modeling &amp; Event Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            Our Professional Services
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-editorial italic max-w-2xl mx-auto">
            Comprehensive adult fashion and event modeling services engineered to exceed luxury brand standards across Lahore.
          </p>
        </div>

        {/* 5 Services Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((srv, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={srv.id}
                className={`rounded-3xl bg-neutral-900/90 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-xl ${
                  isFeatured
                    ? 'border-purple-600/60 shadow-purple-950/30 lg:col-span-1'
                    : 'border-neutral-800 hover:border-blue-600/50'
                }`}
                id={`service-card-${srv.id}`}
              >
                {/* Visual Header with Image preview */}
                <div className="relative h-48 overflow-hidden bg-neutral-950">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

                  {/* Service Icon Badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-purple-500/40 text-blue-400 shadow-md">
                    {getIcon(srv.iconName)}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
                      {srv.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-5">
                      {srv.description}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Included Deliverables:
                      </div>
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Trigger */}
                  <div className="pt-4 border-t border-neutral-800">
                    <button
                      onClick={() => onSelectServiceForBooking(srv.title)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-200 border border-neutral-700/80 group"
                      id={`book-service-${srv.id}`}
                    >
                      <span>Inquire About {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Card */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-950/70 via-purple-950/60 to-neutral-900 border border-purple-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-400/40 flex items-center justify-center text-purple-200 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Need a Custom Package?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                Whether organizing a high-end multi-day fashion show in Gulberg or a VIP corporate activation in Bahria Town, we orchestrate talent, logistics, wardrobe coordinators, and on-site directors.
              </p>
              <div className="space-y-2 text-xs text-purple-200 mb-6">
                <div>• NDA &amp; Discretion agreements provided</div>
                <div>• Rush bookings available within 4 hours</div>
                <div>• All artists strictly 18+ vetted</div>
              </div>
            </div>

            <a
              href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20would%20like%20to%20discuss%20a%20custom%20modeling%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-950 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-900 transition-colors shadow-lg"
              id="custom-package-whatsapp"
            >
              <span>Instant WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
