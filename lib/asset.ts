// BASE_PATH diekspor dari next.config.ts: "/Portofolio" di GitHub Pages, kosong di lokal & Vercel.
export const basePath = process.env.BASE_PATH ?? "";

/** Prefiks path aset di public/ agar tidak 404 saat situs disajikan di bawah subpath. */
export const asset = (src: string) => `${basePath}${src}`;
