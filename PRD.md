# PRD — Website Portofolio Ivan

> Versi 1.0 · 25 Oktober 2026 · Pemilik: Ivan
> Detail teknis dan desain ada di `REQUIREMENTS.md`; urutan kerja per sesi ada di `TASKS.md`.

## 1. Latar Belakang

Ivan adalah fresh graduate yang mencari kerja full-time sekaligus proyek freelance. Saat ini belum ada satu tempat yang merangkum profil, pengalaman, dan karya nyatanya. Website portofolio satu halaman menjadi tautan tunggal yang bisa dipasang di CV, LinkedIn, dan lamaran.

## 2. Tujuan & Ukuran Keberhasilan

| Tujuan | Ukuran keberhasilan (versi 1) |
| --- | --- |
| Melamar kerja | Rekruter bisa menemukan CV dalam 1 klik dari layar pertama |
| Mendapat klien freelance | Calon klien bisa menghubungi lewat email/LinkedIn dalam ≤ 2 klik dari mana pun di halaman |
| Personal branding | 3 proyek tampil dengan demo dan kode yang bisa dibuka |
| Kualitas teknis | `npm run build` + `npm run lint` bersih; tampilan rapi di 360, 768, 1440px; online di Vercel |

## 3. Pengguna & Kebutuhan

| Persona | Kebutuhan utama | Section yang melayani |
| --- | --- | --- |
| Rekruter / HR | Lihat pendidikan, pengalaman, skills; unduh CV | Hero (Download CV), About, Experience & Education |
| Calon klien | Lihat layanan dan contoh proyek; menghubungi | Projects, Contact |
| Publik umum | Lihat karya; ikuti akun | Projects, link LinkedIn/GitHub |

## 4. Ruang Lingkup

**Masuk versi 1** — satu halaman responsif berbahasa Inggris dengan 7 bagian:

| # | Bagian | Requirement |
| --- | --- | --- |
| 1 | Navbar sticky | FR-1 |
| 2 | Hero: nama, tagline, foto, Download CV, Contact Me | FR-2 |
| 3 | About + Skills + status ketersediaan | FR-3 |
| 4 | Experience & Education (+ prestasi opsional) | FR-4 |
| 5 | Projects: 3 kartu | FR-5 |
| 6 | Contact: ajakan, kalimat layanan, email | FR-6 |
| 7 | Footer | FR-7 |

**Tidak masuk versi 1** — blog, dark mode, form kontak, halaman detail proyek, filter, versi bahasa Indonesia, animasi, CMS, analytics (lihat REQUIREMENTS §8).

## 5. Alur Pengguna Utama

1. **Rekruter:** buka link dari CV/LinkedIn → baca Hero → klik **Download CV** (atau scroll ke Experience) → klik **Contact** di navbar → kirim email.
2. **Calon klien:** buka link → klik **Projects** di navbar → buka **Live Demo** → scroll ke Contact → klik **Email Me** atau LinkedIn.
3. **Pengunjung ponsel:** navbar hanya berisi nama + Contact; semua section terbaca dengan scroll biasa.

## 6. Requirement Produk (ringkas)

- Semua konten dari satu file `content/data.ts`; mengganti teks tidak perlu menyentuh komponen.
- Desain mengikuti token di REQUIREMENTS §6 dan file Figma (satu frame responsif).
- Aksesibilitas dasar: satu `h1`, HTML semantik, kontras WCAG AA, fokus keyboard terlihat.
- Tanpa data pribadi sensitif.

Daftar lengkap: REQUIREMENTS §4 (FR-1 … FR-7) dan §5 (NFR-1 … NFR-9).

## 7. Asumsi & Ketergantungan

| Hal | Status |
| --- | --- |
| Konten (teks, foto, CV, 3 proyek) disiapkan Ivan | Belum — checklist di REQUIREMENTS §9; sementara memakai placeholder |
| Akun GitHub dan Vercel | Diasumsikan sudah ada |
| Domain | Memakai subdomain `*.vercel.app` dulu |
| Node.js terpasang di komputer | Diasumsikan (versi yang didukung Next.js terbaru) |

## 8. Risiko

| Risiko | Dampak | Penanganan |
| --- | --- | --- |
| Konten belum siap saat coding | Website online dengan placeholder | Kerjakan dengan placeholder di `data.ts`; ganti di Sesi 6 |
| Sesi Claude Code kehabisan token / konteks melebar | Kerja terputus, kode tidak konsisten | Kerja per sesi kecil sesuai `TASKS.md`, `/clear` di akhir tiap sesi, baca hanya bagian dokumen yang disebut |
| Gambar besar memperlambat halaman | Kesan pertama buruk | Kompres sesuai REQUIREMENTS §6.6, pakai `next/image` |

## 9. Milestone

| Milestone | Sesi (TASKS.md) | Hasil |
| --- | --- | --- |
| M1 — Fondasi | Sesi 1–2 | Proyek jalan di lokal, token desain + data siap |
| M2 — Halaman lengkap | Sesi 3–5 | Ketujuh section tampil dari `data.ts` |
| M3 — Siap online | Sesi 6–7 | Konten asli, SEO, cek responsif, live di Vercel |
