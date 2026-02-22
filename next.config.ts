import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  typedRoutes: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      // Google profile pictures
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      // Cloudflare R2 managed public access (pub-xxx.r2.dev)
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      // Custom domains served from R2/Cloudflare — add your domain here:
      // { protocol: "https", hostname: "images.yourdomain.com" },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
