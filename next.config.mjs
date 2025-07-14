import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Allow localhost for development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      // Allow S3 bucket
      {
        protocol: 'https',
        hostname: '*.s3.*.amazonaws.com',
      },
      // Allow Vercel deployment
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      }
    ],
  },
  // Add this to fix payload routes
  rewrites: async () => {
    return [
      {
        source: '/api/media/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/:path*`,
      }
    ]
  }
}

export default withPayload(nextConfig, { devBundleServerPackages: false })