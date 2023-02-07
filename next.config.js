/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // loader: 'custom',
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.ctfassets.net",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}
