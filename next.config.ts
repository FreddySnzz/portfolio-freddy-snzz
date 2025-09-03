import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://imgur.com/**'),
      new URL('https://i.imgur.com/**'),
      new URL('https://camo.githubusercontent.com/**'),
      new URL('https://img.shields.io/**'),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
