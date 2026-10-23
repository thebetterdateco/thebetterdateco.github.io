// BASE_PATH is "" for a user site (<name>.github.io) and "/<repo>" for a project
// site (<name>.github.io/<repo>). The GitHub Pages workflow sets it automatically.
const basePath = process.env.BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
