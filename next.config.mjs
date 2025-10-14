/** @type {import('next').NextConfig} */
const nextConfig = {
  // Write build output to a custom directory to avoid .next permission issues
  distDir: 'build',
  turbopack: {
    // In ESM, __dirname is not defined; use process.cwd() for an absolute path
    root: process.cwd(),
  },
};

export default nextConfig;