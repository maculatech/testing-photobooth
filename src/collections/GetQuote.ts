import type { GlobalConfig } from 'payload'

export const GetQuotePage: GlobalConfig = {
  slug: 'get-quote-page',
  label: 'Get Quote Page',
  admin: {
    group: 'Site Settings',
    description: 'Configure content for the Get a Quote form page',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
    {
      name: 'eventBoothOptions',
      label: 'Booth Options',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'addOns',
      label: 'Add-Ons',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'themeQuestion',
      type: 'text',
      label: 'Theme/Design Question Label',
    },
    {
      name: 'contactHeading',
      type: 'text',
      label: 'Contact Info Heading',
    },
    {
      name: 'preferredContactMethods',
      type: 'array',
      label: 'Preferred Contact Methods',
      fields: [
        {
          name: 'method',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      defaultValue: 'Submit Request'
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: false,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
        {
          name: 'keywords',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}
