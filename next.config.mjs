// import { withPayload } from '@payloadcms/next/withPayload'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '3000',
//         pathname: '/api/media/file/**',
//       },
//     ],
//   },
// }

// export default withPayload(nextConfig, { devBundleServerPackages: false })

import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '3000',
      //   pathname: '/api/media/file/**',
      // },
      {
        protocol: 'https',
        hostname: `${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com`,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: `${process.env.S3_BUCKET_NAME}.s3.amazonaws.com`,
        pathname: '/**',
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })