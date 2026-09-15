import React, { useState } from 'react';
import { X, Check, MessageCircle, MapPin, Sparkles, Shield, User, Globe, Calendar } from 'lucide-react';
import { ModelProfile } from '../types';

interface ModelProfileModalProps {
  model: ModelProfile | null;
  onClose: () => void;
  onBookModel: (modelName: string) => void;
}

export const ModelProfileModal: React.FC<ModelProfileModalProps> = ({
  model,
  onClose,
  onBookModel,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!model) return null;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Lahore Night Girls, I would like to book model ${model.name} (Age: ${model.age}, Category: ${model.category}) for an upcoming event / photoshoot in Lahore.`
    );
    window.open(`https://wa.me/923256556505?text=${text}`, '_blank');
  };

  const allImages = model.galleryImages?.length ? model.galleryImages : [model.image];
  const currentImage = allImages[activeImageIndex] || model.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-purple-900/50 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white border border-neutral-700 hover:border-purple-500 transition-colors"
          aria-label="Close modal"
          id="close-model-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image & Gallery Previews */}
          <div className="md:col-span-5 bg-neutral-950 p-4 sm:p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-neutral-800">
            <div className="w-full relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl border border-purple-900/40">
              <img
                src={currentImage}
                alt={model.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm border border-purple-500/40 text-purple-300 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3 text-blue-400" />
                Age: {model.age} (Verified 18+)
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-4 w-full justify-center overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-purple-500 scale-105 shadow-md shadow-purple-900/50'
                        : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${model.name} preview ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Model Details & Booking Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Badge & Category */}
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  {model.category}
                </span>
                {model.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-950/80 text-blue-300 border border-blue-600/30">
                    {model.badge}
                  </span>
                )}
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {model.name}
              </h3>
              <p className="text-sm font-editorial italic text-purple-200/80 mb-5">
                Professional Model &amp; Artist • Lahore
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 mb-6 text-xs">
                <div>
                  <div className="text-neutral-500 flex items-center gap-1">
                    <User className="w-3 h-3 text-purple-400" />
                    Age Status
                  </div>
                  <div className="font-semibold text-white mt-0.5">{model.age} Years (18+)</div>
                </div>

                <div>
                  <div className="text-neutral-500 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    Height
                  </div>
                  <div className="font-semibold text-white mt-0.5">{model.height}</div>
                </div>

                <div>
                  <div className="text-neutral-500 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    Languages
                  </div>
                  <div className="font-semibold text-white mt-0.5">
                    {model.languages.join(', ')}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Professional Biography
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {model.fullBio || model.shortBio}
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Specialized Disciplines
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {model.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded-md bg-neutral-800/70 text-neutral-300 text-xs border border-neutral-700/60"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Areas in Lahore */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Available Service Areas in Lahore
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {model.availableAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-blue-950/40 text-blue-300 border border-blue-800/40 font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-950/40"
                id="modal-whatsapp-booking-btn"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp Book ({model.name})</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookModel(model.name);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/40"
                id="modal-request-booking-btn"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Reserve via Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
