// // storage-adapter-import-placeholder
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import { Users } from './collections/Users'
// import { Media } from './collections/Media'
// import { Header } from './collections/Header'
// import { Footer } from './collections/Footer'
// import { HomePage } from './collections/HomePage'
// import { ServicesPage} from './collections/ServicesPage'
// import { AboutPage } from './collections/AboutPage'
// import { GalleryPage } from './collections/Gallery'
// import { ContactPage } from './collections/ContactPage'
// import { GetQuotePage } from './collections/GetQuote'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     user: Users.slug,
//     importMap: {
//       baseDir: path.resolve(dirname),
//     },
//   },
//   collections: [Users, Media],
//   globals: [Header, Footer, HomePage, ServicesPage, AboutPage, GalleryPage, ContactPage, GetQuotePage],
//   editor: lexicalEditor(),
//   secret: process.env.PAYLOAD_SECRET || 'c86f5ffb890af0949f8c9a90',
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   db: mongooseAdapter({
//     url: process.env.DATABASE_URI || '',
//   }),
//   sharp,
//   plugins: [
//     payloadCloudPlugin(),
//     // storage-adapter-placeholder
//   ],
// })


import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './collections/Header'
import { Footer } from './collections/Footer'
import { HomePage } from './collections/HomePage'
import { ServicesPage } from './collections/ServicesPage'
import { AboutPage } from './collections/AboutPage'
import { GalleryPage } from './collections/Gallery'
import { ContactPage } from './collections/ContactPage'
import { GetQuotePage } from './collections/GetQuote'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  collections: [Users, Media],
  globals: [
    Header,
    Footer,
    HomePage,
    ServicesPage,
    AboutPage,
    GalleryPage,
    ContactPage,
    GetQuotePage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true
      },
      bucket: process.env.S3_BUCKET_NAME!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
      },
    }),
  ],
});
