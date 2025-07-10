export interface ContactItem {
  title: string;
  description: string;
  iconName: 'phone' | 'email' | 'location' | 'time';
}

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface ContactPageData {
  heading: string;
  subheading?: string;
  contactItems: ContactItem[];
  formTitle?: string;
  mapHeading?: string;
  mapEmbedUrl?: string;
  seo?: SEOSettings;
}
