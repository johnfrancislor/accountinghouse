/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root; the parent folder holds other projects' lockfiles.
  turbopack: { root: import.meta.dirname },
  // No `output: "export"` here: this site keeps a Node server so it can use
  // API routes (src/app/api/*) and server actions. Pages without dynamic data
  // are still pre-rendered as static HTML at build time.
};

export default nextConfig;
