/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@sismo-core/sismo-connect-server"],
  },
};

module.exports = nextConfig;
