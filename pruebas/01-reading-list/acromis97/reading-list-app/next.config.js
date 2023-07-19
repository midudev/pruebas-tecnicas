/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
                port: '',
                pathname: '/images/S/compressed.photo.goodreads.com/books/**',
            },
        ],
    },
}

module.exports = nextConfig
