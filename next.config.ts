import type { NextConfig } from "next";

// Ensure dev/build write to 'dist' instead of '.next' to avoid permissions
const nextConfig: NextConfig = {
  distDir: "dist",
  turbopack: {
    // In ESM/TS config, use process.cwd() for absolute project root
    root: process.cwd(),
  },
};

export default nextConfig;
