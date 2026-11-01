// Semua teks konten website ada di file ini. Placeholder ditandai dengan [ ].

export type Profile = {
  /** Nama tampilan pendek (navbar, footer) */
  name: string;
  /** Baris kecil di atas h1 Hero */
  greeting: string;
  /** Nama lengkap untuk h1 di Hero */
  fullName: string;
  tagline: string;
  /** 1–2 kalimat di Hero */
  intro: string;
  /** 3–5 kalimat di About */
  about: string;
  /** Teks pil status di About */
  status: string;
  email: string;
  photo: { src: string; alt: string };
};

export type Links = {
  linkedin: string;
  github: string;
  instagram: string;
  cv: string;
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  /** 2–3 poin pencapaian */
  points: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  /** Hanya ditampilkan bila diisi */
  gpa?: string;
};

export type Achievement = {
  title: string;
  issuer: string;
  year: string;
  /** Halaman verifikasi sertifikat; bila kosong judul tampil sebagai teks biasa. */
  url?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: { src: string; alt: string };
  demo: string;
  repo: string;
};

export const profile: Profile = {
  name: "Irist",
  greeting: "Hi there, I am",
  fullName: "Ivan Christian Santoso",
  tagline: "Software Engineer | Fresh Graduate",
  intro:
    "A Computer Science graduate who builds web applications and teaches people to code. I am looking for junior software engineering, frontend, or technical education roles.",
  about:
    "I am a Computer Science graduate from BINUS University. As a coding instructor I taught Python, Scratch, HTML, CSS, JavaScript, game development, and MIT App Inventor to children and teenagers, which is where I learned to explain technical ideas plainly. On team projects I worked as a UI/UX designer and frontend developer, including a mental health mood-tracking web application. I am now moving into data: I am certified in data analysis fundamentals and work with Python to clean, analyse, and visualise data, with machine learning as the next step. I am based in Bekasi, Indonesia, and open to onsite, hybrid, and remote work.",
  status: "Open to full-time roles & freelance projects",
  email: "ivancs679@gmail.com",
  photo: { src: "/images/profile.jpg", alt: "Ivan Christian Santoso" },
};

export const links: Links = {
  linkedin: "https://www.linkedin.com/in/ivan-christian-santoso/",
  github: "https://github.com/Irist01",
  instagram: "https://www.instagram.com/ivanchristian3142/",
  cv: "/cv.pdf",
};

/** Terbaru di atas. Magang, freelance, asisten lab, dan organisasi masuk daftar yang sama. */
export const experience: Experience[] = [
  {
    title: "Coding Instructor (Internship)",
    organization: "KodeKiddo · Bekasi, Indonesia",
    period: "Feb 2024 – Feb 2025",
    points: [
      "Delivered beginner-to-intermediate coding lessons in Scratch, Python, HTML, CSS, JavaScript, game development, and MIT App Inventor to children and teenagers.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Bina Nusantara University",
    degree: "[Bachelor of Computer Science]",
    period: "2021 – 2025",
    gpa: "3.15 / 4.00",
  },
];

/** Maks. 5 baris. Bila kosong, section Achievements disembunyikan. */
export const achievements: Achievement[] = [
  {
    title: "Belajar Fundamental Analisis Data (Data Analysis Fundamentals)",
    issuer: "Dicoding Indonesia",
    year: "Oct 2026",
    url: "https://www.dicoding.com/certificates/QLZ9NVO3DZ5D",
  },
];

export const skills: string[] = [
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
];

/** Tepat 3 proyek terbaik. */
export const projects: Project[] = [
  {
    title: "[Project Title]",
    description:
      "[One or two sentences on what the project does and the problem it solves.]",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: { src: "/images/project-1.jpg", alt: "[Screenshot of Project Title]" },
    demo: "https://[project-one.example.com]",
    repo: "https://github.com/[username]/[project-one]",
  },
  {
    title: "[Project Title]",
    description:
      "[One or two sentences on what the project does and the problem it solves.]",
    tags: ["React", "Tailwind"],
    image: { src: "/images/project-2.jpg", alt: "[Screenshot of Project Title]" },
    demo: "https://[project-two.example.com]",
    repo: "https://github.com/[username]/[project-two]",
  },
  {
    title: "[Project Title]",
    description:
      "[One or two sentences on what the project does and the problem it solves.]",
    tags: ["JavaScript", "CSS"],
    image: { src: "/images/project-3.jpg", alt: "[Screenshot of Project Title]" },
    demo: "https://[project-three.example.com]",
    repo: "https://github.com/[username]/[project-three]",
  },
];

/** Satu kalimat layanan di section Contact. */
export const serviceLine =
  "I take on landing page and small-business website projects.";
