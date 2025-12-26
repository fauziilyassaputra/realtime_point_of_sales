import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // devIndicators: false,
  images: {
    domains: ["https://kdjbmlagegqsdqkswzjd.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kdjbmlagegqsdqkswzjd.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
