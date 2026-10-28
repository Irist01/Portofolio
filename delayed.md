# DELAYED — Task Tertunda & Hal yang Kurang

> Status per 28 Oktober 2026, commit `eecd8e4`.
> Sesi 1–5 selesai. Sesi 6 sebagian. Sesi 7 sebagian.

## A. Aset yang belum ada (butuh file dari Ivan) — sisa T6.2, T6.5

| File | Dipakai di | Akibat bila kosong |
| --- | --- | --- |
| `public/cv.pdf` | tombol Download CV di Hero | link 404 → REQ §10 gagal |
| `public/images/project-1.jpg` | kartu proyek 1 | gambar rusak |
| `public/images/project-2.jpg` | kartu proyek 2 | gambar rusak |
| `public/images/project-3.jpg` | kartu proyek 3 | gambar rusak |
| `public/images/profile.jpg` | foto Hero | **ada tapi placeholder 631 byte**, harus diganti foto asli |
| `public/og.png` (1200 × 630) | Open Graph di `app/layout.tsx` | preview link di WhatsApp/LinkedIn kosong |

`app/favicon.ico` sudah ada.

## B. Konten yang masih placeholder — T6.1 (ditunda atas permintaan)

42 penanda `[...]` tersisa di `content/data.ts`. Cari dengan `grep -n '\[' content/data.ts`.

Sudah diisi asli:
- `profile.name`, `greeting`, `fullName`, `tagline`, `email`, `photo.alt`
- `links.linkedin`, `links.github`
- `education[0].institution`, `period`, `gpa`

Masih placeholder:
- `profile.intro` — ikut dipakai sebagai `description` & Open Graph description, jadi SEO belum benar sampai ini diisi
- `profile.about`
- `education[0].degree`
- seluruh `experience[]`
- seluruh `achievements[]` (bila kosong, section-nya otomatis tersembunyi — aman)
- `skills[]`
- seluruh `projects[]` (judul, deskripsi, tag, alt gambar, URL demo, URL repo)
- `serviceLine`

Perlu dipastikan juga: `profile.name` sekarang `"Irist"` (muncul di navbar & footer). Kalau mau tampil "Ivan", ubah di `data.ts`.

## C. Task Sesi 7 yang belum bisa dikerjakan

| Task | Kenapa tertunda |
| --- | --- |
| **T7.1** cek 360 / 768 / 1440px | perlu browser; hasilnya belum berarti selama gambar & teks placeholder |
| **T7.3** klik semua tombol & link | `cv.pdf` dan gambar proyek belum ada, URL demo/repo masih placeholder |
| **T7.5** deploy Vercel | perlu akun Vercel Ivan: [vercel.com/new](https://vercel.com/new) → import `Irist01/Portofolio` → Deploy (setting default) |
| **T7.6** centang REQ §10 | menunggu T7.1, T7.3, T7.5 |

Sudah lolos: **T7.2** (semantik `header`/`main`/`footer`, satu `h1`, ikon dekoratif `aria-hidden`, focus ring, 8/8 link keluar pakai `rel="noopener noreferrer"`) dan **T7.4** (`npm run lint` + `npm run build` bersih).

## D. Hal lain yang belum diverifikasi

- **Perbandingan visual ke Figma** (file `6UXb3z3AUxcy1shJk6V7sC`, node `5:7`) belum pernah dilakukan. MCP Figma belum terotorisasi — jalankan `/mcp` di sesi Claude Code interaktif dulu.
- Kontras teks WCAG AA (NFR-4) belum diukur dengan alat; baru dinilai dari pilihan kelas Tailwind.
- Kompresi ukuran file gambar (REQ §6.6) belum bisa dicek karena gambarnya belum ada.

## E. Urutan paling masuk akal untuk melanjutkan

1. Isi `content/data.ts` (T6.1) + taruh semua aset di `public/` (T6.2, T6.3, T6.5).
2. Deploy ke Vercel (T7.5). `metadataBase` otomatis terisi dari env Vercel, tidak perlu diedit.
3. QA di browser: T7.1, T7.3.
4. Centang REQ §10 dan tabel sesi di `TASKS.md` (T7.6).
