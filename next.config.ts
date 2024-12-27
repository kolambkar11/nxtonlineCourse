import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com", "images.unsplash.com"],
  },
};

export default nextConfig;
