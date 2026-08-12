import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for better error detection during development
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Allow trailing slashes to be canonically consistent
  trailingSlash: false,

  // Experimental features — enable React compiler when stable
  // experimental: {
  //   reactCompiler: true,
  // },
};

export default nextConfig;
