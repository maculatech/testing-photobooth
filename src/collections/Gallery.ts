import type { GlobalConfig } from 'payload'

export const GalleryPage: GlobalConfig = {
  slug: 'gallery-page',
  admin: {
    group: 'Site Settings',
    description: 'Gallery section configuration',
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
      name: 'topGridImages',
      label: 'Top Grid Images (4)',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'fullImage1',
      label: 'Full Width Banner 1',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'middleGridImages',
      label: 'Middle Grid Images (3)',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'secondTopGridImages',
      label: 'Second Top Grid Images (4)',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'fullImage2',
      label: 'Full Width Banner 2',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bottomGridImages',
      label: 'Bottom Grid Images (3)',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
