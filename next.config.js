/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Static export for shared hosting
  trailingSlash: true,
}

module.exports = nextConfig
