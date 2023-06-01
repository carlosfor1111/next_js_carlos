/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  // target: "serverless",
  swcMinify: true,
};

module.exports = nextConfig;
