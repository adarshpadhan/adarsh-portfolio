/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async redirects() {
      return [
        {
          source: "/:path*/",
          destination: "/:path*",
          permanent: true,
        },
      ]
    },
    output: "standalone", // This replaces the deprecated 'target' option
  }
  
  module.exports = nextConfig
  
  