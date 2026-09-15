import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModelsSection } from './components/ModelsSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { AreasSection } from './components/AreasSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { StickyContactBar } from './components/StickyContactBar';
import { AgeVerificationBanner } from './components/AgeVerificationBanner';
import { ServiceAreaName } from './types';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedModelForBooking, setSelectedModelForBooking] = useState<string>('');
  const [selectedAreaForBooking, setSelectedAreaForBooking] = useState<ServiceAreaName | 'All Areas'>('All Areas');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Fashion Modeling');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModelForBooking(modelName);
    scrollToSection('contact');
  };

  const handleSelectArea = (areaName: ServiceAreaName) => {
    setSelectedAreaForBooking(areaName);
    scrollToSection('contact');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Age Verification Banner */}
      <AgeVerificationBanner />

      {/* Main Navigation Header */}
      <Header
        onNavigate={scrollToSection}
        onOpenBooking={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onViewModels={() => scrollToSection('models')}
          onOpenBooking={() => scrollToSection('contact')}
        />

        {/* Models Showcase Section */}
        <ModelsSection
          onSelectForBooking={handleSelectModel}
        />

        {/* Professional Services Section */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectService}
        />

        {/* Photography & Modeling Gallery Section */}
        <GallerySection />

        {/* About Us Section */}
        <AboutSection />

        {/* Dedicated Lahore Service Areas Section */}
        <AreasSection
          onSelectAreaForBooking={handleSelectArea}
        />

        {/* Contact & Booking Section */}
        <ContactSection
          initialModel={selectedModelForBooking}
          initialArea={selectedAreaForBooking}
          initialService={selectedServiceForBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Sticky Fast-Contact floating bar */}
      <StickyContactBar
        onQuickBook={() => scrollToSection('contact')}
      />

      {/* Legal Dialogs */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
