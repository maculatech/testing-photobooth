// import type { CollectionConfig } from 'payload'

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//   ],
//   upload: true,
// }


import { CollectionConfig } from 'payload';
import type { UploadConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'],
    staticURL: '/s3/media', // Custom URL path
    adminThumbnail: ({ doc }) => 
      `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${doc.filename}`,
  } as UploadConfig, // Type assertion
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 's3Url',
      type: 'text',
      access: {
        read: () => true,
        create: () => false,
        update: () => false,
      },
      hooks: {
        afterRead: [({ data }) => 
          `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${data?.filename}`
        ]
      }
    }
  ],
};