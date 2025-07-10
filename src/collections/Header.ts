import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Site Settings',
    description: 'Global header configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'DD Photo Booth',
      label: 'Site Title',
    },
    {
      name: 'navigation',
      type: 'array',
      label: 'Navigation Links',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Link Text',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'Link URL',
          defaultValue: '/',
        },
      ],
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Service', href: '/services' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faqs' },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          defaultValue: 'Get a Quote',
          label: 'Button Text',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          defaultValue: '/getQuote',
          label: 'Button URL',
        },
      ],
    },
  ],
}