# TASKS — Website Portofolio Ivan

> Pekerjaan dibagi menjadi **7 sesi kecil**. Satu sesi = satu percakapan Claude Code.
> Acuan: `REQUIREMENTS.md` (disingkat **REQ**) dan `PRD.md`.

## Aturan Hemat Token (berlaku di setiap sesi)

1. Mulai sesi dengan prompt pembuka di `PROMPTS.md` — jangan minta Claude membaca semua dokumen.
2. Baca **hanya** bagian REQ yang disebut di kolom "Baca".
3. Kerjakan task sesi itu saja. Ide di luar daftar → tulis di bagian **Catatan** paling bawah, jangan dikerjakan.
4. Akhiri sesi dengan **Prompt Penutup** di `PROMPTS.md`, lalu `/clear`.
5. Bila sesi terasa panjang, berhenti setelah task terakhir yang selesai, commit, lalu lanjutkan sisa task di sesi baru.

## Ringkasan Sesi

| Sesi | Fokus | Baca | Hasil akhir | Status |
| --- | --- | --- | --- | --- |
| 1 | Setup proyek | REQ §2, §6.1, §7 | Next.js + Tailwind jalan, token warna, repo GitHub | ☑ |
| 2 | Data & komponen dasar | REQ §4, §6.3, §6.4 | `content/data.ts` bertipe + placeholder, `Section` & kelas tombol | ☑ |
| 3 | Navbar, Hero, Footer | REQ FR-1, FR-2, FR-7, §6.5 | Kerangka halaman atas & bawah tampil | ☑ |
| 4 | About, Experience & Education | REQ FR-3, FR-4, §6.5 | Dua section isi tampil | ☑ |
| 5 | Projects, Contact | REQ FR-5, FR-6, §6.5 | Ketujuh section lengkap | ☑ |
| 6 | Konten asli, aset, SEO | REQ §5 (NFR-2, NFR-3), §6.6, §9 | Placeholder diganti, metadata & gambar siap | ☐ |
| 7 | QA & deploy | REQ §5, §10 | Lolos Definisi Selesai, live di Vercel | ☐ |

---

## Sesi 1 — Setup Proyek

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 1 (sudah termasuk node Figma yang perlu dilihat).

- [x] **T1.1** Jalankan `npx create-next-app@latest` dengan TypeScript, Tailwind, ESLint, App Router, folder `app/` di root (tanpa `src/`).
- [x] **T1.2** Bersihkan isi template di `app/page.tsx` dan `app/globals.css` (sisakan `@import "tailwindcss";`).
- [x] **T1.3** Tambahkan `@theme` warna aksen (REQ §6.1) dan `html { scroll-behavior: smooth; }` di `globals.css`.
- [x] **T1.4** Di `app/layout.tsx`: pastikan font Geist Sans terpasang, `<html lang="en">`, `body` berlatar putih dengan teks `text-slate-900`, metadata sementara (`title: "Ivan — Web Developer"`).
- [x] **T1.5** Buat folder kosong sesuai REQ §7: `components/`, `content/`, `public/images/`.
- [x] **T1.6** `git init`, commit pertama, buat repo GitHub, push.

**Selesai jika:** `npm run dev` menampilkan halaman kosong tanpa error; tombol uji `bg-accent` berwarna teal; repo ada di GitHub.
**Commit:** `chore: setup Next.js, Tailwind, dan token warna`

---

## Sesi 2 — Data & Komponen Dasar

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 2 (sudah termasuk node Figma yang perlu dilihat).

- [x] **T2.1** Buat `content/data.ts` dengan tipe TypeScript: `Profile` (nama, tagline, intro, about, status, email, foto), `Links` (linkedin, github, cv), `Experience[]`, `Education[]`, `Achievement[]` (maks. 5), `skills: string[]`, `Project[]` (judul, deskripsi, tag, gambar, demo, repo), `serviceLine`.
- [x] **T2.2** Isi semua field dengan placeholder bertanda jelas (mis. `"[Full Name]"`), nama tampilan "Ivan".
- [x] **T2.3** Buat `components/Section.tsx`: props `id`, `title`, `alt?` (latar slate-50), `center?` (judul rata tengah + `mb-4`, untuk Contact), `children`; memakai kerangka REQ §6.3 (termasuk `scroll-mt-16`).
- [x] **T2.4** Buat `components/ui.ts` berisi string kelas `btnPrimary`, `btnSecondary`, `btnSmall`, `textLink`, `badge`, `tag`, `focusRing` (REQ §6.4). Tanpa library tambahan.
- [x] **T2.5** `app/page.tsx`: pasang `<main>` kosong yang nanti memanggil section; uji satu `Section` contoh lalu hapus lagi.

**Selesai jika:** `npm run build` lolos; `data.ts` lolos type-check; tidak ada teks konten di dalam komponen.
**Commit:** `feat: data konten bertipe dan komponen dasar`

---

## Sesi 3 — Navbar, Hero, Footer

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 3 (sudah termasuk node Figma yang perlu dilihat).

- [x] **T3.1** `components/Navbar.tsx` — sticky, nama kiri ke `#home`, link About/Experience/Projects (`hidden md:flex`), tombol kecil Contact ke `#contact`.
- [x] **T3.2** `components/Hero.tsx` — `id="home"`, h1 + tagline + intro, tombol Download CV (tab baru) & Contact Me, link LinkedIn/GitHub, foto bulat via `next/image` dengan `preload`.
- [x] **T3.3** Susunan ponsel Hero: foto di atas (`order-first md:order-last`), tombol `w-full md:w-auto`.
- [x] **T3.4** `components/Footer.tsx` — © tahun otomatis + nama, link LinkedIn/GitHub; dua baris rata tengah di ponsel.
- [x] **T3.5** Pasang ketiganya di `app/page.tsx` (Navbar di luar `<main>`, Footer setelahnya). Pakai foto placeholder sementara di `public/images/profile.jpg`.

**Selesai jika:** tampil benar di lebar 360px dan 1440px; semua link keluar memakai `rel="noopener noreferrer"`.
**Commit:** `feat: navbar, hero, dan footer`

---

## Sesi 4 — About, Experience & Education

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 4 (sudah termasuk node Figma yang perlu dilihat).

- [x] **T4.1** `components/About.tsx` — `Section id="about" alt`, grid `md:grid-cols-[3fr_2fr]`, paragraf, pil status, h3 Skills + badge.
- [x] **T4.2** `components/Experience.tsx` — sub-daftar Experience, Education, Achievements & Certifications; baris `md:grid-cols-[160px_1fr]`, `divide-y`.
- [x] **T4.3** Urutkan pengalaman terbaru di atas (urutan di `data.ts` sudah terbaru dulu, atau sort per periode).
- [x] **T4.4** Sembunyikan daftar Achievements bila array kosong; tampilkan IPK hanya bila ada.
- [x] **T4.5** Pasang kedua section di `app/page.tsx` setelah Hero.

**Selesai jika:** di ponsel periode pindah ke atas judul; tidak ada logo, kartu, atau progress bar.
**Commit:** `feat: section about dan experience`

---

## Sesi 5 — Projects & Contact

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 5 (sudah termasuk node Figma yang perlu dilihat).

- [x] **T5.1** `components/ProjectCard.tsx` — screenshot `aspect-[16/10]`, judul, deskripsi, tag, link Live Demo & GitHub di dasar kartu (`mt-auto`).
- [x] **T5.2** `components/Projects.tsx` — `Section id="projects" alt`, grid `md:grid-cols-3 gap-6`, tepat 3 kartu dari `data.ts`.
- [x] **T5.3** `components/Contact.tsx` — `Section id="contact"` dengan judul "Let's Work Together" rata tengah, kalimat layanan, tombol Email Me (`mailto:`), email sebagai teks, link sosial.
- [x] **T5.4** Pasang keduanya di `app/page.tsx`; urutan akhir cocok dengan REQ §3.1.
- [x] **T5.5** Uji semua link navbar men-scroll ke section yang benar dan judul tidak tertutup navbar.

**Selesai jika:** ketujuh section tampil berurutan; kartu sama tinggi di desktop.
**Commit:** `feat: section projects dan contact`

---

## Sesi 6 — Konten Asli, Aset, SEO

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 6 (sudah termasuk node Figma yang perlu dilihat).

- [ ] **T6.1** Ganti semua placeholder di `data.ts` dengan konten asli dari Ivan (checklist REQ §9). Cari sisa `"["` untuk memastikan tidak ada placeholder tertinggal.
- [ ] **T6.2** Taruh `profile.jpg`, 3 screenshot proyek, `cv.pdf` di `public/`; cek ukuran file sesuai REQ §6.6.
- [ ] **T6.3** Lengkapi alt text semua gambar.
- [x] **T6.4** `app/layout.tsx`: `title`, `description`, `metadataBase` (URL Vercel), Open Graph dengan `/og.png`; tambahkan favicon (`app/icon.png` atau `favicon.ico`).
- [ ] **T6.5** Buat `public/og.png` 1200 × 630px (nama + tagline di atas latar putih/aksen).

**Selesai jika:** tidak ada placeholder tersisa; `npm run build` lolos.
**Commit:** `content: konten asli, aset, dan metadata SEO`

---

## Sesi 7 — QA & Deploy

**Prompt pembuka:** lihat `PROMPTS.md` → Sesi 7 (sudah termasuk node Figma yang perlu dilihat).

- [ ] **T7.1** Cek tampilan di lebar 360, 768, dan 1440px (DevTools): tidak ada scroll horizontal, teks terpotong, atau elemen bertumpuk.
- [ ] **T7.2** Cek aksesibilitas dasar: satu `h1`, urutan heading, fokus keyboard terlihat dengan Tab, ikon dekoratif `aria-hidden`.
- [ ] **T7.3** Klik semua tombol & link: Download CV, Email Me, LinkedIn, GitHub, Live Demo, link navbar.
- [x] **T7.4** `npm run lint` dan `npm run build` tanpa error.
- [ ] **T7.5** Hubungkan repo ke Vercel, deploy, buka URL live di ponsel asli.
- [ ] **T7.6** Centang REQ §10 (Definisi Selesai) dan ubah status semua sesi di tabel ringkasan menjadi ☑.

**Selesai jika:** semua butir REQ §10 tercentang dan website bisa diakses publik.
**Commit:** `chore: QA dan deploy versi 1`

---

## Catatan (ide di luar cakupan — dikerjakan di versi 2)

- 
