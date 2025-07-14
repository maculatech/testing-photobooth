// import type { CollectionConfig } from 'payload'

// export const Users: CollectionConfig = {
//   slug: 'users',
//   admin: {
//     useAsTitle: 'email',
//   },
//   auth: true,
//   fields: [
//     // Email added by default
//     // Add more fields as needed
//   ],
// }


import { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
};