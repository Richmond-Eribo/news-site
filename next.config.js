/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // loader: 'custom',
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}
