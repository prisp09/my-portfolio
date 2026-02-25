import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASENAME ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  basePath: basePath || undefined,

  compiler: {
    removeConsole: false,
  },

  productionBrowserSourceMaps: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        pathname: "/**",
      },
    ],
  },

  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },

  experimental: {
    serverComponentsHmrCache: true,
  },

  devIndicators: {
    position: "top-right",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=86400; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },

  // Uncomment for Docker/standalone deploy: output: "standalone",
};

export default nextConfig;
