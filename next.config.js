/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.southindiafashion.com',
      },
      {
        protocol: 'https',
        hostname: 'southjewellery.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // ✅ Add this for YouTube thumbnails
      },
    ],
  },
};

module.exports = nextConfig;
