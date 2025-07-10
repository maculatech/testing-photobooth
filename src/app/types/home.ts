export interface Media {
  id: string;
  alt?: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
}

export interface HeroSection {
  isVisible: boolean;
  heading?: string;
  description?: string;
  heroImage?: Media;
}

export interface ClientFeature {
  id?: string;
  image?: Media;
  title?: string;
  description?: string;
}

export interface ClientLoveSection {
  isVisible: boolean;
  heading?: string;
  features?: ClientFeature[];
}

export interface PhotoBoothItem {
  id?: string;
  image?: Media;
  title?: string;
}

export interface PhotoBoothSection {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  booths?: PhotoBoothItem[];
  ctaButton?: {
    text?: string;
    link?: string;
  };
}

export interface VideoItem {
  id?: string;
  thumbnail?: Media;
  videoUrl?: string;
}

export interface VideoSection {
  isVisible: boolean;
  heading?: string;
  videos?: VideoItem[];
}

export interface WorkStep {
  id?: string;
  stepNumber?: string;
  title?: string;
  description?: string;
}

export interface HowItWorksSection {
  isVisible: boolean;
  heading?: string;
  backgroundImage?: Media;
  steps?: WorkStep[];
}

export interface GalleryImage {
  id?: string;
  image?: Media;
  altText?: string;
}

export interface MomentsSection {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  galleryImages?: GalleryImage[];
  featuredImage?: Media;
}

export interface Testimonial {
  id?: string;
  name?: string;
  role?: string;
  rating?: number;
  text?: string;
}

export interface TestimonialsSection {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
}

export interface ReadyToBookSection {
  isVisible: boolean;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  sectionImage?: Media;
}

export interface FAQ {
  id?: string;
  question?: string;
  answer?: string;
}

export interface FAQsSection {
  isVisible: boolean;
  heading?: string;
  subheading?: string;
  faqs?: FAQ[];
}

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface HomePageData {
  id: string;
  title: string;
  heroSection: HeroSection;
  clientLoveSection: ClientLoveSection;
  photoBoothSection: PhotoBoothSection;
  videoSection: VideoSection;
  howItWorksSection: HowItWorksSection;
  momentsSection: MomentsSection;
  testimonialsSection: TestimonialsSection;
  readyToBookSection: ReadyToBookSection;
  faqsSection: FAQsSection;
  seo: SEOSettings;
  createdAt: string;
  updatedAt: string;
}