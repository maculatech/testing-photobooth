import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  admin: {
    group: 'Site Settings',
    description: 'Global home page configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Page title for the service page',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug for the service page',
      },
    },
    
    // SEO Section
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 60,
          admin: {
            description: 'SEO title (max 60 characters)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          maxLength: 160,
          admin: {
            description: 'SEO description (max 160 characters)',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'SEO keywords (comma separated)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Open Graph image for social sharing',
          },
        },
      ],
    },

    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
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
      ],
    },

    // Service Design Section
    {
      name: 'serviceDesignSection',
      type: 'group',
      label: 'Service Design Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: '✨ Designed for Every Occasion',
        },
        {
          name: 'services',
          type: 'array',
          label: 'Services',
          minRows: 1,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g., $600',
              },
            },
            {
              name: 'duration',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g., 3 hours',
              },
            },
            {
              name: 'extraHourPrice',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g., $150/HR',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'perfectFor',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g., Weddings, corporate parties, birthdays',
              },
            },
            {
              name: 'features',
              type: 'array',
              label: 'Features',
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'buttonText',
              type: 'text',
              defaultValue: 'Book Now',
            },
            {
              name: 'isVisible',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },

    // Customized Section (Add-ons)
    {
      name: 'customizedSection',
      type: 'group',
      label: 'Customized Section (Add-ons)',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: '🎁 Customize Your Experience with Add Ons',
        },
        {
          name: 'addOns',
          type: 'array',
          label: 'Add-ons',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'text',
              required: true,
              admin: {
                description: 'e.g., $200.00',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'isVisible',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },

    // Backdrop Section
    {
      name: 'backdropSection',
      type: 'group',
      label: 'Backdrop Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'BackDrops',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          defaultValue: 'Our backdrops are pillow-tight and premium quality!',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'galleryImages',
          type: 'array',
          label: 'Gallery Images',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    // Video Section
    {
      name: 'videoSection',
      type: 'group',
      label: 'Video Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'VIDEO GALLERY',
        },
        {
          name: 'videos',
          type: 'array',
          label: 'Videos',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'thumbnail',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'videoUrl',
              type: 'text',
              admin: {
                description: 'Video URL (YouTube, Vimeo, etc.)',
              },
            },
            {
              name: 'isVisible',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
      ],
    },

  
  ],
};