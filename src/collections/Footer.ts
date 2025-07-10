import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Site Settings',
    description: 'Global footer configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brand',
      type: 'group',
      label: 'Brand Information',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'DD Photo Booth',
          label: 'Site Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Capture the laughter, fun, and memories with our premium photobooth rentals — perfect for weddings, parties, and corporate events.',
          label: 'Description',
        }
      ]
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      minRows: 3,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Column Title',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          minRows: 3,
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
            }
          ]
        }
      ],
      defaultValue: [
        {
          title: 'Useful Links',
          links: [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Gallery', href: '/gallery' }
          ]
        },
        {
          title: 'About',
          links: [
            { label: 'How it works', href: '/how-it-works' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Why Us', href: '/why-us' }
          ]
        },
        {
          title: 'Contact',
          links: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'Request Quote', href: '/quote' },
            { label: "FAQ's", href: '/faq' }
          ]
        }
      ]
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
          required: true,
          label: 'Platform',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          defaultValue: 'https://',
          label: 'URL',
        }
      ],
      defaultValue: [
        { platform: 'instagram', url: 'https://instagram.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' }
      ]
    },
    {
      name: 'copyright',
      type: 'text',
      required: true,
      defaultValue: '© Copyright 2025 DD Photo Booth | All Rights Reserved.',
      label: 'Copyright Text',
    }
  ],
}