/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  images: {
    domains: ["z-m-static.xx.fbcdn.net"],
    deviceSizes: [1, 100]
  }
}

module.exports = nextConfig;
