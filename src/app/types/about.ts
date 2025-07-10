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

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface AboutContent {
  isVisible: boolean;
  title?: string;
  description?: string;
  secondaryDescription?: string;
  highlightText?: string;
  image?: Media;
}

export interface ReadyToBookSection {
  isVisible: boolean;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  sectionImage?: Media;
}

export interface AboutPage {
  id: string;
  title: string;
  description?: string;
  image?: Media;
  aboutContent: AboutContent;
  readyBookSection: ReadyToBookSection;
  seo: SEOSettings;
  createdAt: string;
  updatedAt: string;
}
