# REQUIREMENTS — Website Portofolio Ivan

> Versi 1.1 · 25 Oktober 2026 · Revisi dari dokumen REQUIREMENTS (21 Okt 2026) + tab Spesifikasi Desain.
> Prinsip: buat sesederhana mungkin — fitur yang tidak tertulis di sini **tidak** dibuat.
> Dokumen ini adalah acuan utama. Tiap sesi kerja cukup membaca bagian yang disebut di `TASKS.md`, tidak perlu seluruh file.

---

## 1. Ringkasan Proyek

| Item | Keterangan |
| --- | --- |
| Pemilik | Ivan — mahasiswa / fresh graduate |
| Jenis website | Portofolio pribadi, satu halaman (one-page), responsif |
| Bahasa konten | Inggris (dokumen kerja berbahasa Indonesia) |
| Referensi | sivadira.com — struktur & alur saja, **bukan** desain |
| Desain visual | File Figma "Website Portofolio — Ivan": https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC |

### 1.1 Tujuan
1. **Melamar kerja** — meyakinkan rekruter bahwa Ivan kompeten dan siap kerja.
2. **Mendapat klien freelance** — menunjukkan layanan dan karya nyata.
3. **Personal branding** — citra profesional lewat karya nyata.

### 1.2 Target Pengunjung

| Pengunjung | Yang dicari | Aksi yang diharapkan |
| --- | --- | --- |
| Rekruter / HR | Pendidikan, pengalaman, skills, CV | Download CV, hubungi |
| Calon klien | Layanan, contoh proyek | Kirim email atau hubungi via LinkedIn |
| Publik umum | Karya dan profil | Ikuti LinkedIn / GitHub |

### 1.3 Pesan Utama
"Saya fresh graduate yang kompeten, punya karya nyata, dan siap bekerja maupun menerima proyek."

---

## 2. Tech Stack

| Kebutuhan | Teknologi |
| --- | --- |
| Framework | Next.js (App Router) + TypeScript, bawaan `create-next-app` |
| Styling | Tailwind CSS (v4, bawaan `create-next-app`) |
| Font | Geist Sans lewat `next/font` (bawaan template) |
| Data konten | Satu file `/content/data.ts` — tanpa CMS, tanpa database |
| Ikon | `lucide-react` (opsional; link teks juga cukup) |
| Deploy | Vercel |
| Versi kontrol | Git + GitHub |

Tidak dipakai di versi ini: next-themes, MDX, Shiki, Zod, React Hook Form, Formspree/Web3Forms, library animasi.

---

## 3. Struktur Halaman

```text
/          → satu halaman berisi semua section
/cv.pdf    → file CV (di folder /public)
```

Halaman 404 memakai bawaan Next.js.

### 3.1 Urutan Section

| # | Section | `id` | Judul tampil (h2) | Latar |
| --- | --- | --- | --- | --- |
| 1 | Navbar | — | — | putih |
| 2 | Hero | `home` | — (berisi h1) | putih |
| 3 | About (termasuk Skills) | `about` | About Me | slate-50 |
| 4 | Pengalaman & Pendidikan | `experience` | Experience & Education | putih |
| 5 | Proyek | `projects` | Projects | slate-50 |
| 6 | Kontak | `contact` | Let's Work Together | putih |
| 7 | Footer | — | — | putih + garis atas |

---

## 4. Requirement Fungsional

Kode `FR-x` dipakai di `TASKS.md` dan `PRD.md`.

### FR-1 Navbar
- Nama "Ivan" di kiri (link ke `#home`); di kanan link About · Experience · Projects + tombol **Contact** (ke `#contact`).
- Sticky di atas saat scroll. Scroll halus cukup dengan CSS `scroll-behavior: smooth`.
- Di layar < 768px: link section disembunyikan; tampil hanya nama + tombol Contact. Tanpa menu hamburger.

### FR-2 Hero
- Nama lengkap (satu-satunya `h1`), tagline (contoh: "Web Developer | Fresh Graduate"), 1–2 kalimat tentang diri.
- Foto profil.
- Dua tombol: **Download CV** → membuka `/cv.pdf` di tab baru; **Contact Me** → scroll ke `#contact`.
- Link LinkedIn dan GitHub.

### FR-3 About (termasuk Skills)
- Paragraf 3–5 kalimat: latar belakang, minat, nilai kerja.
- Satu pil status: "Open to full-time roles & freelance projects".
- Skills berupa daftar badge teks (nama saja) — tanpa tab, logo, atau progress bar.

### FR-4 Pengalaman & Pendidikan
- **Experience:** daftar terbaru di atas; tiap item = posisi, organisasi, periode, 2–3 poin pencapaian. Magang, freelance, asisten lab, dan organisasi masuk daftar yang sama — tanpa logo dan tanpa pengelompokan per organisasi.
- **Education:** universitas, jurusan & gelar, periode, IPK (opsional).
- **Achievements & Certifications (opsional):** maks. 5 baris — judul, penyelenggara, tahun. Tanpa logo dan tanpa kartu. Disembunyikan bila data kosong.

### FR-5 Proyek
- 3 proyek terbaik, tampil sebagai kartu.
- Tiap kartu: screenshot, judul, deskripsi 1–2 kalimat, tag teknologi, link **Live Demo** dan **GitHub** (tab baru).
- Tanpa filter kategori dan tanpa halaman detail.

### FR-6 Kontak
- Judul ajakan "Let's Work Together".
- Satu kalimat layanan freelance (mis. "I take on landing page and small-business website projects.") — menggantikan section Layanan.
- Tombol email (`mailto:`), alamat email ditulis sebagai teks di bawahnya, + link LinkedIn dan GitHub.
- Tanpa form kontak.

### FR-7 Footer
- `© <tahun otomatis> Ivan` (tahun dari `new Date().getFullYear()`).
- Link LinkedIn dan GitHub.

---

## 5. Requirement Non-Fungsional

| Kode | Aspek | Requirement |
| --- | --- | --- |
| NFR-1 | Responsif | Rapi dari lebar 360px sampai 1440px; cukup breakpoint `md` (768px) bawaan Tailwind |
| NFR-2 | Gambar | `next/image`, file dikompres, semua gambar punya alt text; foto Hero diberi `preload` (Next.js 16+; versi lama `priority`) |
| NFR-3 | SEO dasar | `title`, `description`, `metadataBase`, dan gambar Open Graph (`/public/og.png`, 1200 × 630px) diatur sekali di `app/layout.tsx`; `<html lang="en">`; favicon |
| NFR-4 | Aksesibilitas | HTML semantik (`header`, `main`, `section`, `footer`); satu `h1`; kontras teks lolos WCAG AA; fokus keyboard terlihat; ikon dekoratif `aria-hidden` |
| NFR-5 | Privasi | Tanpa data pribadi sensitif (alamat rumah, nomor KTP, nomor HP pribadi, dll.) |
| NFR-6 | Kode | Semua konten di `/content/data.ts` dengan tipe TypeScript, terpisah dari komponen; komponen tidak berisi teks konten |
| NFR-7 | Link keluar | `target="_blank" rel="noopener noreferrer"` untuk CV, LinkedIn, GitHub, Demo |
| NFR-8 | Gerak | Tanpa animasi masuk/scroll; hover cukup ganti warna (`transition-colors`) |
| NFR-9 | Build | `npm run build` dan `npm run lint` tanpa error |

---

## 6. Spesifikasi Desain (ringkas)

Sumber visual: file Figma (lihat §1). Bila Figma dan dokumen ini berbeda, **dokumen ini yang dipakai**.

### 6.1 Warna

| Token | Hex | Kelas Tailwind | Dipakai untuk |
| --- | --- | --- | --- |
| Latar utama | #FFFFFF | `bg-white` | Navbar, Hero, Pengalaman, Kontak, Footer |
| Latar selang | #F8FAFC | `bg-slate-50` | About, Proyek |
| Latar abu muda | #F1F5F9 | `bg-slate-100` | Tag teknologi, hover tombol kedua |
| Teks judul | #0F172A | `text-slate-900` | Nama, judul section, judul item |
| Teks isi | #475569 | `text-slate-600` | Paragraf, poin, badge |
| Teks keterangan | #64748B | `text-slate-500` | Periode, label kecil, © |
| Garis | #E2E8F0 | `border-slate-200` | Kartu, badge, navbar, footer |
| Garis tombol | #CBD5E1 | `border-slate-300` | Tombol kedua |
| Aksen | #0F766E | `bg-accent` / `text-accent` | Tombol utama, tagline, link teks, titik status |
| Aksen gelap | #115E59 | `bg-accent-dark` / `text-accent-dark` | Hover tombol utama, teks pil status |
| Aksen lembut | #F0FDFA | `bg-accent-soft` | Latar pil status |

```css
/* app/globals.css */
@theme {
  --color-accent: #0F766E;
  --color-accent-dark: #115E59;
  --color-accent-soft: #F0FDFA;
}
```

### 6.2 Tipografi

| Peran | Ponsel | ≥ 768px | Kelas Tailwind |
| --- | --- | --- | --- |
| Nama (h1) | 36px | 48px | `text-4xl md:text-5xl font-bold tracking-tight text-slate-900` |
| Judul section (h2) | 24px | 30px | `text-2xl md:text-3xl font-bold tracking-tight text-slate-900` |
| Judul item (h3) | 18px | 18px | `text-lg font-semibold text-slate-900` |
| Tagline | 18px | 20px | `text-lg md:text-xl font-medium text-accent` |
| Paragraf utama (Hero, About) | 16px | 18px | `text-base md:text-lg leading-relaxed text-slate-600` |
| Paragraf biasa | 16px | 16px | `text-base leading-relaxed text-slate-600` |
| Keterangan | 14px | 14px | `text-sm text-slate-500` |
| Label kecil | 12px | 12px | `text-xs font-semibold uppercase tracking-wider text-slate-500` |

### 6.3 Layout & Jarak

| Aturan | Nilai | Kelas |
| --- | --- | --- |
| Lebar konten | maks. 1024px, tengah | `mx-auto max-w-5xl` |
| Tepi layar | 16px / 24px | `px-4 md:px-6` |
| Padding section | 64px / 96px | `py-16 md:py-24` |
| Judul section → isi | 32px / 48px | `mb-8 md:mb-12` |
| Offset anchor | 64px | `scroll-mt-16` di tiap `<section>` |
| Sudut tombol & kartu | 8px | `rounded-lg` |
| Sudut badge & pil | penuh | `rounded-full` |

Kerangka section:

```tsx
<section id="about" className="scroll-mt-16 bg-slate-50 py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-4 md:px-6">
    <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 md:mb-12 md:text-3xl">About Me</h2>
    {/* isi */}
  </div>
</section>
```

### 6.4 Komponen Dasar

| Komponen | Kelas Tailwind |
| --- | --- |
| Tombol utama (44px) | `inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark` |
| Tombol kedua (44px) | `inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100` |
| Tombol kecil (navbar, 36px) | kelas tombol utama dengan `h-9 px-4` |
| Link teks | `font-medium text-accent underline-offset-4 hover:underline` |
| Badge skill | `rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600` |
| Tag teknologi | `rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600` |
| Fokus keyboard | `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent` |

### 6.5 Per Section

| Section | Tata letak ≥ 768px | Tata letak < 768px | Detail penting |
| --- | --- | --- | --- |
| Navbar | `sticky top-0 z-50 border-b border-slate-200 bg-white`; baris `h-16`, nama kiri, grup kanan `gap-8` | Nama + tombol Contact saja | Link `text-sm font-medium text-slate-600 hover:text-slate-900` |
| Hero | `grid md:grid-cols-[1fr_auto] items-center gap-16`, `py-28`; teks kiri, foto kanan | Foto di atas (`order-first`), tumpuk rata kiri, `py-16`, tombol `w-full` | Foto bulat `size-36 md:size-72`, `ring-1 ring-slate-200`; jarak nama→tagline 12, →kalimat 16, →tombol 32, →sosial 24px; kalimat `max-w-xl` |
| About | `grid md:grid-cols-[3fr_2fr] gap-12` | Tumpuk, `gap-10` | Pil: `inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-dark` + titik `size-2 rounded-full bg-accent`; badges `flex flex-wrap gap-2` |
| Pengalaman | Baris `grid md:grid-cols-[160px_1fr] gap-8 py-6`, daftar `divide-y divide-slate-200` | Periode di atas judul | Sub-judul = label kecil + `mb-2`; antar-daftar `mt-16`; poin `list-disc pl-5 space-y-1` |
| Proyek | `grid md:grid-cols-3 gap-6` | 1 kolom | Kartu `flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white`; screenshot `aspect-[16/10] object-cover object-top`; isi `p-5`; link `mt-auto pt-5` |
| Kontak | Blok tengah `mx-auto max-w-2xl text-center` | Tombol `w-full` | h2 `mb-4`; kalimat → tombol `mt-8`; email `mt-3 text-sm text-slate-500`; sosial `mt-6 justify-center gap-6` |
| Footer | `flex md:flex-row justify-between py-8 text-sm text-slate-500`, `border-t` | Dua baris rata tengah | Link `hover:text-slate-900`, `gap-6` |

### 6.6 Aset

| Aset | Ukuran | Lokasi |
| --- | --- | --- |
| Foto profil | 600 × 600px, ≤ 150 KB | `/public/images/profile.jpg` |
| Screenshot proyek (×3) | 1280 × 800px, WebP/JPG ≤ 200 KB | `/public/images/` |
| Gambar Open Graph | 1200 × 630px | `/public/og.png` |
| CV | PDF | `/public/cv.pdf` |

---

## 7. Struktur Folder

```text
/app
  layout.tsx      → metadata (title, description, metadataBase, Open Graph), font, <html lang="en">
  page.tsx        → satu halaman, memanggil semua section
  globals.css     → @import "tailwindcss"; @theme (warna aksen); scroll-behavior: smooth
/components       → Navbar, Hero, About, Experience, Projects, Contact, Footer (+ Button, Badge bila perlu)
/content
  data.ts         → semua data + tipe: profil, links, pengalaman, pendidikan, prestasi, skills, proyek
/public
  /images
  cv.pdf
  og.png
```

---

## 8. Di Luar Cakupan (Versi 1)

Blog (MDX) · dark mode · form kontak · halaman detail & filter proyek · tab skills & section Layanan terpisah · versi bahasa Indonesia · halaman 404 custom · animasi · CMS, login, komentar, newsletter · analytics.

---

## 9. Checklist Konten dari Ivan

- [ ] Nama lengkap, tagline, 1–2 kalimat Hero
- [ ] Paragraf About (3–5 kalimat)
- [ ] Foto profil (latar bersih, persegi)
- [ ] CV terbaru (PDF)
- [ ] Email, URL LinkedIn, URL GitHub
- [ ] Pengalaman: posisi, organisasi, periode, 2–3 poin
- [ ] Pendidikan: universitas, jurusan & gelar, periode, IPK (opsional)
- [ ] Prestasi & sertifikasi (opsional, maks. 5)
- [ ] Daftar skills
- [ ] 3 proyek: judul, deskripsi, teknologi, screenshot, link demo & GitHub
- [ ] Satu kalimat layanan freelance
- [ ] Domain Vercel yang diinginkan (untuk `metadataBase`)

---

## 10. Definisi Selesai (Versi 1)

- [ ] Ketujuh section tampil sesuai urutan §3.1
- [ ] Rapi di 360px, 768px, dan 1440px
- [ ] Tombol Download CV, email, LinkedIn, GitHub, Demo berfungsi
- [ ] Semua konten diambil dari `/content/data.ts`
- [ ] `npm run build` dan `npm run lint` tanpa error
- [ ] Sudah online di Vercel

---

## 11. Catatan Revisi (v1.0 → v1.1)

| # | Temuan di v1.0 | Perubahan di v1.1 |
| --- | --- | --- |
| 1 | Nama pemilik belum tertulis; di desain sempat tertulis "Sasya" (typo) | Nama ditetapkan **Ivan** |
| 2 | Spesifikasi desain terpisah di tab lain | Diringkas masuk §6 agar satu sumber |
| 3 | Tidak jelas apakah CV dibuka atau diunduh | CV dibuka di tab baru (NFR-7) |
| 4 | SEO tanpa `metadataBase`, `lang`, favicon, ukuran OG | Ditambahkan di NFR-3 dan §6.6 |
| 5 | "Animasi" di luar cakupan bertabrakan dengan efek hover | Hover warna boleh, animasi lain tidak (NFR-8) |
| 6 | Breakpoint "ponsel & desktop" tanpa lebar uji | Lebar uji 360 / 768 / 1440px (NFR-1, §10) |
| 7 | `priority` di `next/image` sudah deprecated sejak Next.js 16 | Pakai `preload` (NFR-2) |
| 8 | Data konten tanpa aturan tipe | `data.ts` wajib bertipe (NFR-6) |
| 9 | Alamat email hanya lewat `mailto:` (gagal bila tak ada aplikasi email) | Email juga ditulis sebagai teks (FR-6) |
| 10 | Prestasi opsional tanpa aturan saat kosong | Disembunyikan bila kosong (FR-4) |
| 11 | DoD tanpa lint | `npm run lint` ditambahkan |

Pertanyaan terbuka: link LinkedIn/GitHub muncul 3 kali (Hero, Kontak, Footer). Dibiarkan sesuai v1.0; boleh dikurangi bila terasa berulang.
