/** @type {import('next').NextConfig} */
// basePath is configurable so the publish step can host under a repo subpath on
// GitHub Pages (e.g. /singh-fencing-canberra) without a code change.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export cannot use the Next Image Optimization server.
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
