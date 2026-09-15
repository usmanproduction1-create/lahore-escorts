import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const AgeVerificationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('lng_18_verified');
    if (!verified) {
      setIsVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('lng_18_verified', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-950/95 backdrop-blur-lg border-t border-purple-900/60 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Adults Aged 18+ Only Platform
            </h4>
            <p className="text-xs text-neutral-400 leading-tight">
              Lahore Night Girls represents strictly adult professional fashion models and performers. By continuing, you confirm you are at least 18 years of age.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleConfirm}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all shadow-md shadow-purple-950/40"
            id="confirm-18-btn"
          >
            <Check className="w-4 h-4" />
            <span>I Am 18+ (Enter)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
