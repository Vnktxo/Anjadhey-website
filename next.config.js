/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Allow Next.js <Image /> to optimize Sanity-hosted assets
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"], // modern formats for faster loading
  },

  experimental: {
    // Enables appDir features (since you’re using the App Router)
    appDir: true,
  },
};

module.exports = nextConfig;
