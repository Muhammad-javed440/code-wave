import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Disables ESLint during Vercel builds
  },
  // other config options can go here
};

export default nextConfig;
