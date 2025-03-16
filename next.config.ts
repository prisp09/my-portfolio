import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
