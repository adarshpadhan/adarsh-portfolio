/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    // Remove the trailingSlash and redirects configuration as they're causing the loop
    async rewrites() {
      return {
        afterFiles: [
          {
            source: "/:path*",
            has: [
              {
                type: "header",
                key: "x-matched-path",
              },
            ],
            destination: "/:path*",
          },
        ],
      }
    },
  }
  
  module.exports = nextConfig
  
  