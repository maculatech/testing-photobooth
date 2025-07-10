import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: {
    group: 'Site Settings',
    description: 'Global About page configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'aboutContent',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'secondaryDescription',
          type: 'textarea',
        },
        {
          name: 'highlightText',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'readyBookSection',
      type: 'group',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
        },
        {
          name: 'buttonLink',
          type: 'text',
        },
        {
          name: 'sectionImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
