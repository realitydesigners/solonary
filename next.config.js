/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"], // Allow loading images from Twitter
  },
};

module.exports = nextConfig;
