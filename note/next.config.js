/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/products/deleted_forever', destination: '/products', permanent: true },
      { source: '/products/deleted_temp', destination: '/products', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/nadia', destination: '/about/me/nadia' },
      { source: '/items/:slug', destination: '/products/:slug' },
    ];
  },
};

module.exports = nextConfig;
