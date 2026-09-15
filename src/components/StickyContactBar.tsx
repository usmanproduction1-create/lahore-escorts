import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, X } from 'lucide-react';

interface StickyContactBarProps {
  onQuickBook: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onQuickBook }) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {!minimized && (
        <div className="bg-neutral-950/95 backdrop-blur-md border border-purple-900/60 rounded-2xl p-3 shadow-2xl shadow-black/80 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="relative">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
          </div>

          <div className="text-left pr-2">
            <div className="text-[11px] font-semibold text-white">Agency Desk Online</div>
            <div className="text-[10px] text-neutral-400">0325-6556505 • Quick Response</div>
          </div>

          <button
            onClick={() => setMinimized(true)}
            className="text-neutral-500 hover:text-neutral-300 p-1 rounded-md"
            aria-label="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex items-center gap-2">
        {/* Quick Call Button */}
        <a
          href="tel:03256556505"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-950/60 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          title="Call 0325-6556505"
          id="sticky-call-btn"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Quick WhatsApp Button */}
        <a
          href="https://wa.me/923256556505?text=Hello%20Lahore%20Night%20Girls,%20I%20would%20like%20to%20inquire%20about%20fashion%20and%20modeling%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 text-xs font-bold"
          id="sticky-whatsapp-btn"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
