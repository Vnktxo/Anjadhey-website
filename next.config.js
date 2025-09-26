/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co", "cdn.sanity.io"], // allow placeholders + Sanity
  },
};

module.exports = nextConfig;
