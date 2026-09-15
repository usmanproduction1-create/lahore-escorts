import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Users2, Lock, HeartHandshake, MapPin } from 'lucide-react';
import heroImage from '../assets/images/hero_luxury_banner_1789427460375.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-neutral-900/40 relative border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer frame glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 shadow-2xl aspect-[4/5] bg-neutral-950">
                <img
                  src={heroImage}
                  alt="Lahore Night Girls Agency Vision"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-neutral-950/85 backdrop-blur-md border border-purple-500/30 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0 font-display font-bold text-lg">
                      18+
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Strictly 18+ Adult Platform</div>
                      <p className="text-xs text-purple-300">Certified talent, privacy &amp; legal contracts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>About Lahore Night Girls</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-6">
              Lahore’s Premier Adult Fashion &amp; Modeling Platform
            </h2>

            <p className="text-base sm:text-lg font-editorial italic text-purple-200/90 mb-6 leading-relaxed">
              Elevating the standard of fashion modeling, commercial photography, brand promotions, and event management across the cultural capital of Pakistan.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
              <p>
                <strong className="text-white font-medium">Lahore Night Girls</strong> is a dedicated Lahore-based adult fashion and modeling platform providing top-tier professional modeling, commercial photography, brand promotional ambassadorship, and elite event-related staffing.
              </p>
              <p>
                Founded on the uncompromising pillars of <strong>professionalism, ethical compliance, and unyielding discretion</strong>, our agency connects esteemed designers, fashion houses, event planners, and corporate enterprises with meticulously trained, photogenic adult talent aged 18 and above.
              </p>
              <p>
                Whether you require high-fashion editorial models for catwalk showcases in Gulberg, versatile talent for media productions in Johar Town, poise for VIP banquets in Bahria Town, or dynamic retail promotions in Iqbal Town, our managed roster ensures punctuality, elegance, and stellar presentation.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Total Discretion &amp; Privacy
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">
                    Standardized confidentiality and legal Non-Disclosure Agreements for all assignments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Users2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Strictly 18+ Vetted Artists
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">
                    All models are age-verified adults with vetted credentials and confirmed portfolios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    End-to-End Coordination
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">
                    Dedicated booking managers ensure on-time call times and flawless schedule execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Deep Lahore Local Roots
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-snug">
                    Rapid dispatch across Gulberg, Johar Town, Bahria Town, and Iqbal Town.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
