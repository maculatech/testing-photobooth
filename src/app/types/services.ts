export interface ServiceMedia {
  id: string;
  url: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
}

export type FeatureType = 
  | string 
  | { id?: string; feature: string } 
  | { id?: string; text: string };

export interface ServiceHeroSection {
  isVisible: boolean;
  heroImage: ServiceMedia | string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  extraHourPrice: string;
  description: string;
  perfectFor: string;
  features: FeatureType[];
  image: ServiceMedia | string;
  buttonText: string;
  isVisible: boolean;
}

export interface ServiceDesignSection {
  isVisible: boolean;
  title: string;
  services: ServiceItem[];
}

export interface AddOnItem {
  id: string;
  title: string;
  price: string;
  description: string;
  isVisible: boolean;
}

export interface CustomizedSection {
  isVisible: boolean;
  title: string;
  addOns: AddOnItem[];
}

export interface BackdropImage {
  id: string;
  image: ServiceMedia | string;
  alt: string;
}

export interface BackdropSection {
  isVisible: boolean;
  title: string;
  description: string;
  backgroundImage: ServiceMedia | string;
  galleryImages: BackdropImage[];
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: ServiceMedia | string;
  videoUrl?: string;
  isVisible: boolean;
}

export interface VideoSection {
  isVisible: boolean;
  title: string;
  videos: VideoItem[];
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: ServiceMedia | string;
}

export interface TestimonialsSection {
  isVisible: boolean;
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: ServiceMedia | string;
  event?: string;
  isVisible: boolean;
}

export interface ReadyToBookSection {
  isVisible: boolean;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: ServiceMedia | string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isVisible: boolean;
}

export interface FAQsSection {
  isVisible: boolean;
  title: string;
  faqs: FAQItem[];
}

export interface ServicePageData {
  id: string;
  title: string;
  slug: string;
  seo: ServiceSEO;
  heroSection: ServiceHeroSection;
  serviceDesignSection: ServiceDesignSection;
  customizedSection: CustomizedSection;
  backdropSection: BackdropSection;
  videoSection: VideoSection;
  testimonialsSection: TestimonialsSection;
  readyToBookSection: ReadyToBookSection;
  faqsSection: FAQsSection;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}