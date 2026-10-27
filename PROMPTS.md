# PROMPTS — Website Portofolio Ivan

> Prompt siap tempel untuk Claude Code, satu blok per sesi, sesuai urutan `TASKS.md`.
> Pola tiap sesi: **Prompt pembuka → (Claude bekerja) → Prompt penutup → `/clear`**.

---

## 0. Persiapan (sekali saja)

### 0.1 Hubungkan Figma ke Claude Code
Di terminal, dari folder proyek:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Lalu buka Claude Code, ketik `/mcp`, pilih **figma**, dan login dengan akun Figma yang memiliki file desain.

### 0.2 Taruh dokumen di root proyek
`CLAUDE.md`, `PRD.md`, `REQUIREMENTS.md`, `TASKS.md`, `PROMPTS.md`.

### 0.3 Peta node Figma
File: **Website Portofolio — Ivan** · file key `6UXb3z3AUxcy1shJk6V7sC`

| Bagian | Node ID | Link |
| --- | --- | --- |
| Halaman penuh (frame responsif) | `5:7` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-7 |
| Navbar | `5:8` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-8 |
| Hero | `5:18` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-18 |
| About | `5:40` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-40 |
| Experience & Education | `5:75` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-75 |
| Projects | `5:122` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-122 |
| Contact | `5:187` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-187 |
| Footer | `5:204` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=5-204 |
| Frame komponen (Button, Badge, Tag, Text Link, Status Pill, Project Card, Experience Item) | `3:32` | https://www.figma.com/design/6UXb3z3AUxcy1shJk6V7sC?node-id=3-32 |

### 0.4 Aturan Figma hemat token
- Ambil **hanya node section** yang dikerjakan, jangan seluruh halaman `5:7` (kecuali di Sesi 7).
- Urutan: `get_screenshot` dulu untuk melihat, `get_design_context` hanya bila perlu detail.
- Hasil `get_design_context` adalah **referensi**, bukan kode final. Ubah ke kelas Tailwind dari `REQUIREMENTS.md` §6. Jangan menyalin nilai absolut (`left`, `top`, `w-[309px]`), dan jangan memakai URL gambar dari Figma.
- Bila Figma dan `REQUIREMENTS.md` berbeda, **REQUIREMENTS.md yang dipakai**.
- Teks di Figma adalah placeholder: isinya ditaruh di `content/data.ts`, bukan di komponen.

---

## Sesi 1 — Setup Proyek

**Pembuka**
```text
Sesi 1 dari TASKS.md: setup proyek.
Baca CLAUDE.md, lalu REQUIREMENTS.md bagian 2, 6.1, dan 7 saja.
Lihat Figma sekali untuk mencocokkan token warna: get_variable_defs untuk node 5:7 di file 6UXb3z3AUxcy1shJk6V7sC. Bandingkan dengan tabel 6.1 dan laporkan bila ada yang beda (jangan ubah dokumen).
Tulis rencana singkat (maks. 5 poin), lalu kerjakan T1.1–T1.6 berurutan. Jangan membuat section halaman.
```

## Sesi 2 — Data & Komponen Dasar

**Pembuka**
```text
Sesi 2 dari TASKS.md: data & komponen dasar.
Baca REQUIREMENTS.md bagian 4, 6.3, dan 6.4 saja.
Lihat get_screenshot node 3:32 (frame komponen) di file Figma 6UXb3z3AUxcy1shJk6V7sC untuk bentuk Button, Badge, Tag, Text Link, dan Status Pill. Pakai kelas Tailwind dari tabel 6.4, bukan nilai dari Figma.
Isi data.ts dengan placeholder yang mengikuti teks contoh di Figma.
Kerjakan T2.1–T2.5 berurutan.
```

## Sesi 3 — Navbar, Hero, Footer

**Pembuka**
```text
Sesi 3 dari TASKS.md: Navbar, Hero, Footer.
Baca REQUIREMENTS.md FR-1, FR-2, FR-7, dan baris Navbar, Hero, Footer di tabel 6.5 saja. Pakai content/data.ts, components/ui.ts, dan components/Section.tsx yang sudah ada.
Lihat Figma file 6UXb3z3AUxcy1shJk6V7sC: get_screenshot node 5:8 (Navbar), 5:18 (Hero), 5:204 (Footer). Pakai get_design_context hanya untuk node yang masih kurang jelas.
Kerjakan T3.1–T3.5 berurutan. Setelah selesai, jalankan npm run build.
```

## Sesi 4 — About, Experience & Education

**Pembuka**
```text
Sesi 4 dari TASKS.md: About dan Experience & Education.
Baca REQUIREMENTS.md FR-3, FR-4, dan baris About serta Pengalaman di tabel 6.5 saja. Pakai komponen dan data yang sudah ada.
Lihat Figma file 6UXb3z3AUxcy1shJk6V7sC: get_screenshot node 5:40 (About) dan 5:75 (Experience & Education).
Kerjakan T4.1–T4.5 berurutan. Setelah selesai, jalankan npm run build.
```

## Sesi 5 — Projects & Contact

**Pembuka**
```text
Sesi 5 dari TASKS.md: Projects dan Contact.
Baca REQUIREMENTS.md FR-5, FR-6, dan baris Proyek serta Kontak di tabel 6.5 saja. Pakai komponen dan data yang sudah ada.
Lihat Figma file 6UXb3z3AUxcy1shJk6V7sC: get_screenshot node 5:122 (Projects) dan 5:187 (Contact).
Kerjakan T5.1–T5.5 berurutan. Setelah selesai, jalankan npm run build.
```

## Sesi 6 — Konten Asli, Aset, SEO

**Pembuka**
```text
Sesi 6 dari TASKS.md: konten asli, aset, dan SEO.
Baca REQUIREMENTS.md NFR-2, NFR-3, 6.6, dan 9 saja. Sesi ini tidak perlu Figma.
Tanyakan dulu konten yang belum saya berikan dalam satu daftar, lalu kerjakan T6.1–T6.5.
```

## Sesi 7 — QA & Deploy

**Pembuka**
```text
Sesi 7 dari TASKS.md: QA dan deploy.
Baca REQUIREMENTS.md bagian 5 dan 10 saja.
Bandingkan halaman lokal (npm run dev) dengan get_screenshot node 5:7 di file Figma 6UXb3z3AUxcy1shJk6V7sC. Cek juga lebar 360, 768, dan 1440px.
Laporkan temuan dalam daftar singkat dulu, tunggu persetujuan saya, lalu perbaiki dan kerjakan T7.1–T7.6.
```

---

## Prompt Penutup (pakai di akhir setiap sesi)

```text
Sesi selesai. Lakukan berurutan:
1. Jalankan npm run build (dan npm run lint) — perbaiki bila error.
2. Centang task yang selesai di TASKS.md dan ubah status sesi ini di tabel ringkasan menjadi ☑.
3. Tulis ide di luar cakupan (bila ada) di bagian Catatan TASKS.md.
4. Commit dengan pesan yang tertulis di TASKS.md untuk sesi ini.
5. Beri ringkasan 3 baris: apa yang selesai, apa yang tersisa, file yang berubah.
```

Setelah ringkasan muncul, ketik `/clear`, lalu tempel prompt pembuka sesi berikutnya.

## Prompt Lanjutan (bila sesi terputus atau token habis di tengah)

```text
Lanjutkan Sesi <N> dari TASKS.md. Lihat task yang belum dicentang dan `git status` untuk tahu posisi terakhir.
Baca hanya bagian REQUIREMENTS.md yang disebut di sesi itu. Jangan mengulang task yang sudah dicentang.
```

## Prompt Perbaikan Kecil (di luar urutan sesi)

```text
Perbaiki hanya ini: <jelaskan masalah dan file/section-nya>.
Jangan mengubah file lain. Setelah selesai, jalankan npm run build dan commit dengan pesan "fix: <ringkas>".
```
