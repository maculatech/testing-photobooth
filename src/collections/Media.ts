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


// import { CollectionConfig } from 'payload';
// import type { UploadConfig } from 'payload';

// export const Media: CollectionConfig = {
//   slug: 'media',
//   upload: {
//     disableLocalStorage: true,
//     mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'],
//     staticURL: '/s3/media', // Custom URL path
//     adminThumbnail: ({ doc }) => 
//       `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${doc.filename}`,
//   } as UploadConfig, // Type assertion
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 's3Url',
//       type: 'text',
//       access: {
//         read: () => true,
//         create: () => false,
//         update: () => false,
//       },
//       hooks: {
//         afterRead: [({ data }) => 
//           `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${data?.filename}`
//         ]
//       }
//     }
//   ],
// };

import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user, // Only authenticated users can create
    update: ({ req: { user } }) => !!user, // Only authenticated users can update
    delete: ({ req: { user } }) => !!user, // Only authenticated users can delete
  },
  upload: {
    // disableLocalStorage will be automatically set to true by the S3 storage adapter
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};


// import { CollectionConfig } from 'payload';

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//     create: () => true, // Allow all authenticated users to create
//     update: () => true, // Allow all authenticated users to update
//     delete: () => true, // Allow all authenticated users to delete
//   },
//   upload: {
//     mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'],
//     staticURL: '/media',
//     adminThumbnail: 'thumbnail',
//     imageSizes: [
//       {
//         name: 'thumbnail',
//         width: 400,
//         height: 300,
//         position: 'centre',
//       },
//       {
//         name: 'card',
//         width: 768,
//         height: 1024,
//         position: 'centre',
//       },
//       {
//         name: 'tablet',
//         width: 1024,
//         height: undefined,
//         position: 'centre',
//       },
//     ],
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//   ],
// };