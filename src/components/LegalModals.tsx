import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-neutral-900 border border-purple-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950 text-neutral-300 hover:text-white border border-neutral-700"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Agency Confidentiality Protocol</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                <strong>Lahore Night Girls</strong> is dedicated to maintaining the strictest levels of privacy and client discretion for fashion models, photographers, production agencies, and corporate clients in Lahore.
              </p>
              <h4 className="text-white font-semibold pt-2">1. Information Collection</h4>
              <p>
                We only collect essential contact data (name, phone number, email address, and event brief) strictly to fulfill talent booking inquiries and production schedules. We never sell, rent, or distribute client or model information to third parties.
              </p>
              <h4 className="text-white font-semibold pt-2">2. Strict Confidentiality &amp; NDAs</h4>
              <p>
                All private assignments, high-profile corporate activations, and high-fashion pre-release lookbooks in Gulberg, Johar Town, Bahria Town, and Iqbal Town can be governed by mutual Non-Disclosure Agreements (NDAs).
              </p>
              <h4 className="text-white font-semibold pt-2">3. Media Rights &amp; Photography Usage</h4>
              <p>
                All images displayed on this platform are used with express consent from models and copyright holders. Photography produced during assignments adheres strictly to mutual commercial licensing terms.
              </p>
              <h4 className="text-white font-semibold pt-2">4. Contact Information</h4>
              <p>
                For privacy inquiries or data removal, contact us at <strong>usmanproduction1@gmail.com</strong> or WhatsApp <strong>0325-6556505</strong>.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Commercial &amp; Modeling Standards</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Terms &amp; Conditions
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                Welcome to <strong>Lahore Night Girls</strong>. By accessing our platform or booking our talent, you agree to comply with the following contractual standards:
              </p>
              <h4 className="text-white font-semibold pt-2">1. Strict 18+ Age Requirement</h4>
              <p>
                All models, talent, and clients engaging with Lahore Night Girls must be verified legal adults aged 18 or older. We maintain zero tolerance for non-compliance with age verification protocols.
              </p>
              <h4 className="text-white font-semibold pt-2">2. Scope of Services</h4>
              <p>
                Our services are strictly confined to lawful commercial fashion modeling, runway presentations, professional catalog/editorial photography, brand promotions, and permitted event hosting. We do not provide, facilitate, or tolerate sexually explicit, solicitous, or unlawful services.
              </p>
              <h4 className="text-white font-semibold pt-2">3. Safe Working Environment</h4>
              <p>
                Clients must provide safe, respectful, professional, and pre-approved shoot or event conditions across all locations in Gulberg, Johar Town, Bahria Town, and Iqbal Town. Any breach of respectful conduct terminates the engagement immediately without refund.
              </p>
              <h4 className="text-white font-semibold pt-2">4. Cancellations &amp; Rescheduling</h4>
              <p>
                Bookings can be rescheduled with at least 24 hours prior notice to our agency coordinator at <strong>0325-6556505</strong>.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
