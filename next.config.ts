import type { NextConfig } from "next";

// GitHub Pages: static export + prefix repo name. Di Vercel/lokal env ini kosong.
const isPages = process.env.GITHUB_PAGES === "true";
// basePath tidak otomatis menempel ke src next/image saat unoptimized, jadi diekspor ke komponen.
const basePath = isPages ? "/Portofolio" : "";

const nextConfig: NextConfig = {
  env: { BASE_PATH: basePath },
  ...(isPages && {
    output: "export",
    basePath,
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
