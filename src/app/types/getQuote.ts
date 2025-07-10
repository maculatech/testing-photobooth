export interface GetQuoteOption {
  id: string
  label: string
}

export interface PreferredContactMethod {
  id: string
  method: string
}

export interface GetQuoteData {
  heading: string
  subheading?: string
  eventBoothOptions: GetQuoteOption[]
  addOns: GetQuoteOption[]
  preferredContactMethods: PreferredContactMethod[]
  themeQuestion?: string
  contactHeading?: string
  submitButtonText?: string
  seo?: SEO
  createdAt?: string
  updatedAt?: string
  id?: string
  globalType?: string
}

export interface SEO {
  title?: string
  description?: string
  keywords?: string
}


