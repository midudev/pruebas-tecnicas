/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images-na.ssl-images-amazon.com'],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
