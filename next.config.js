/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async redirects() {
      return [
        {
          source: '/:path*/',
          destination: '/:path*',
          permanent: true,
        },
      ]
    },
    // Add this for Cloudflare Pages compatibility
    target: 'experimental-serverless-trace',
  }
  
  module.exports = nextConfig
  
  