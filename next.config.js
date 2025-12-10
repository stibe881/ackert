/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Removed 'export' mode - now using standalone for reverse proxy setup
}

module.exports = nextConfig
