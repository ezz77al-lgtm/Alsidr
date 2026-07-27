// Core domain types for the scalable local-SEO system.
// All content is Arabic; English fields are slugs/identifiers only.

export interface City {
  slug: string;
  name: string; // Arabic name, e.g. الرياض
  nameLatin: string; // Latin name for URLs/schemas, e.g. Riyadh
  region: string; // Administrative region in Arabic
  population?: string;
  altitude?: string;
  climate: string; // Arabic description of local climate
  context: string; // Arabic city-specific context (building types, environment, needs)
  landmarks: string[]; // notable landmarks (Arabic)
  nearbyCitySlugs: string[];
  image: string;
  imageAlt: string;
  areaCode: string;
  geo: { lat: number; lng: number };
}

export interface ServiceCategory {
  slug: string;
  name: string; // Arabic name
  shortDescription: string;
  icon: string; // lucide icon name
  serviceSlugs: string[];
}

export interface Service {
  slug: string;
  name: string; // Arabic name, e.g. تنظيف واجهات المباني الزجاجية
  categorySlug: string;
  shortName: string; // shorter Arabic label for cards
  tagline: string; // one-line Arabic marketing line
  description: string; // detailed Arabic description (service-level, city-agnostic core)
  benefits: string[]; // Arabic benefit bullets
  features: string[]; // Arabic feature bullets
  process: { title: string; description: string }[]; // Arabic step list
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  icon: string;
  relatedServiceSlugs: string[];
  priceFromLabel: string; // Arabic price hint, e.g. "يبدأ من ..."
  keywords: string[];
}

export interface Project {
  slug: string;
  title: string; // Arabic
  citySlug: string;
  serviceSlug: string;
  excerpt: string;
  description: string;
  challenges: string[];
  solution: string[];
  results: { label: string; value: string }[];
  gallery: string[];
  galleryAlts: string[];
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  date: string; // ISO
  durationLabel: string; // Arabic
  clientType: string; // Arabic
  areaLabel: string; // Arabic
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
  category: string;
  serviceSlug?: string;
  citySlug?: string;
  image: string;
  imageAlt: string;
  date: string;
  readTimeLabel: string; // Arabic
  author: string;
  keywords: string[];
}

export interface Testimonial {
  name: string;
  role: string; // Arabic
  citySlug: string;
  rating: number;
  text: string; // Arabic
  serviceSlug: string;
  initials: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export interface Partner {
  name: string;
  logoText: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  foundedYear: string;
  phone: string;
  whatsapp: string;
  email: string;
  url: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
  };
  geo: { lat: number; lng: number };
  hours: { days: string; hours: string }[];
  social: { platform: string; url: string; icon: string }[];
  licenseNumber: string;
  taxNumber: string;
  cities: string[]; // city slugs served
}
