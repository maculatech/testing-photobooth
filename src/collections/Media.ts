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

import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/*'],
    // staticURL: '/media',
    adminThumbnail: ({ doc }) => {
      // Use local URL in development, S3 in production
      return process.env.NODE_ENV === 'development'
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${doc.filename}`
        : `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/media/${doc.filename}`
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      hooks: {
        afterRead: [({ data }) => {
          return process.env.NODE_ENV === 'development'
            ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${data?.filename}`
            : `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/media/${data?.filename}`
        }]
      }
    }
  ],
}