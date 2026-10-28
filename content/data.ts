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
    "[One or two sentences introducing who you are and what you build.]",
  about:
    "[Three to five sentences about your background, what you are interested in, and how you like to work. Mention the kind of work you are looking for and what you bring to a team.]",
  status: "Open to full-time roles & freelance projects",
  email: "ivancs679@gmail.com",
  photo: { src: "/images/profile.jpg", alt: "Ivan Christian Santoso" },
};

export const links: Links = {
  linkedin: "https://www.linkedin.com/in/ivan-christian-santoso/",
  github: "https://github.com/Irist01",
  cv: "/cv.pdf",
};

/** Terbaru di atas. Magang, freelance, asisten lab, dan organisasi masuk daftar yang sama. */
export const experience: Experience[] = [
  {
    title: "[Position Title]",
    organization: "[Organization]",
    period: "Jun 2024 – Aug 2024",
    points: [
      "[Achievement with a concrete result]",
      "[Second achievement or responsibility]",
      "[Third point (optional)]",
    ],
  },
  {
    title: "[Position Title]",
    organization: "[Organization]",
    period: "Sep 2023 – May 2024",
    points: [
      "[Achievement with a concrete result]",
      "[Second achievement or responsibility]",
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
    title: "[Achievement or Certification Title]",
    issuer: "[Issuing Organization]",
    year: "2024",
  },
];

export const skills: string[] = [
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
