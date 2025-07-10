import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
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
      defaultValue: 'Home Page',
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
          label: 'Show Hero Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: '🎉 Make Every Moment Unforgettable',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Capture the laughter, fun, and memories with our premium photobooth rentals — perfect for weddings, parties, and corporate events.',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
      ],
    },

    // Client Love Section
    {
      name: 'clientLoveSection',
      type: 'group',
      label: 'Why Clients Love Us Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Client Love Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Why Our Clients Love Us',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'features',
          type: 'array',
          minRows: 1,
          maxRows: 6,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // Photo Booth Types Section
    {
      name: 'photoBoothSection',
      type: 'group',
      label: 'Photo Booth Types Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Photo Booth Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: '📷 DD Photo Booths for Every Occasion',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'subheading',
          type: 'textarea',
          defaultValue: 'From weddings to brand activations, we have the perfect booth to elevate your event.',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'booths',
          type: 'array',
          minRows: 1,
          maxRows: 10,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Explore All Booths',
            },
            {
              name: 'link',
              type: 'text',
              defaultValue: '/booths',
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
          label: 'Show Video Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Video Gallery',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'videos',
          type: 'array',
          minRows: 1,
          maxRows: 8,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'thumbnail',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'videoUrl',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },

    // How It Works Section
    {
      name: 'howItWorksSection',
      type: 'group',
      label: 'How It Works Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show How It Works Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: '💡 How It Works',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'steps',
          type: 'array',
          minRows: 1,
          maxRows: 6,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'stepNumber',
              type: 'text',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // Moments Gallery Section
    {
      name: 'momentsSection',
      type: 'group',
      label: 'Moments Gallery Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Moments Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Moments That Matter',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'See how our booths bring the party to life!',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'galleryImages',
          type: 'array',
          minRows: 1,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'altText',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
      ],
    },

    // Testimonials Section
    {
      name: 'testimonialsSection',
      type: 'group',
      label: 'Testimonials Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Testimonials Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'What Our Pleased Clients Say About Us',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'Testimonials',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'testimonials',
          type: 'array',
          minRows: 1,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'role',
              type: 'text',
            },
            {
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
              admin: {
                step: 0.1,
              },
            },
            {
              name: 'text',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // Ready to Book Section
    {
      name: 'readyToBookSection',
      type: 'group',
      label: 'Ready to Book Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Ready to Book Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Ready to Book Your Perfect Photo Booth?',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Get started with your unforgettable event experience today!',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Book Now',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/book',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'sectionImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
      ],
    },

    // FAQs Section
    {
      name: 'faqsSection',
      type: 'group',
      label: 'FAQs Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show FAQs Section',
          defaultValue: true,
          admin: {
            description: 'Toggle to show or hide this section on the homepage',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Have Any Questions?',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: 'FAQs',
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
        },
        {
          name: 'faqs',
          type: 'array',
          minRows: 1,
          admin: {
            condition: (data, siblingData) => siblingData?.isVisible,
          },
          fields: [
            {
              name: 'question',
              type: 'text',
            },
            {
              name: 'answer',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    // SEO and Meta
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Premium Photo Booth Rentals | Your Company Name',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Professional photo booth rentals for weddings, parties, and corporate events. Create unforgettable memories with our premium booth services.',
        },
        {
          name: 'keywords',
          type: 'text',
          defaultValue: 'photo booth rental, wedding photo booth, party rentals, event photography',
        },
      ],
    },
  ],
}