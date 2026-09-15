import React, { useState } from 'react';
import { Sparkles, X, Maximize2, Tag, Shield } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Fashion & Runway',
    'Studio & Editorial',
    'Event & Commercial',
    'Traditional Couture',
  ];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Visual Portfolio &amp; Moments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase mb-4">
            Fashion &amp; Modeling Gallery
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-editorial italic max-w-2xl mx-auto">
            A glimpse into our premier runway presentations, high-fashion editorials, luxury bridal lookbooks, and red-carpet brand activations in Lahore.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-900/30 border border-purple-400/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
              }`}
              id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid with attractive hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800/80 hover:border-purple-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              id={`gallery-item-${item.id}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag on Top Right */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-950/80 backdrop-blur-md text-purple-300 border border-purple-500/30">
                  <Tag className="w-3 h-3 text-blue-400" />
                  {item.category}
                </span>
              </div>

              {/* Content on Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                  {item.caption}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium mt-3">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-purple-900/60 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/80 text-white hover:text-purple-300 border border-neutral-700 transition-colors"
              aria-label="Close Lightbox"
              id="close-lightbox-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] max-h-[68vh] overflow-hidden bg-neutral-950 flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  {lightboxItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-light">
                  {lightboxItem.caption}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  Adult 18+ Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
