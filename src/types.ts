export type ServiceAreaName = 'Gulberg' | 'Johar Town' | 'Bahria Town' | 'Iqbal Town';

export interface ModelProfile {
  id: string;
  name: string;
  age: number; // strictly 18+
  category: string;
  badge?: string;
  image: string;
  galleryImages: string[];
  shortBio: string;
  fullBio: string;
  height: string;
  languages: string[];
  experienceYears: number;
  availableAreas: ServiceAreaName[];
  specialties: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fashion & Runway' | 'Studio & Editorial' | 'Event & Commercial' | 'Traditional Couture';
  image: string;
  caption: string;
}

export interface ServiceArea {
  id: string;
  name: ServiceAreaName;
  tagline: string;
  description: string;
  keySpots: string[];
  image: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredArea: ServiceAreaName | 'All Areas';
  preferredModel: string;
  eventDate: string;
  durationHours: string;
  message: string;
}
