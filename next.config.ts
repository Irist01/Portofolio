import type { NextConfig } from "next";

// GitHub Pages: static export + prefix repo name. Di Vercel/lokal env ini kosong.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isPages && {
    output: "export",
    basePath: "/Portofolio",
    images: { unoptimized: true },
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
