// Semua teks konten website ada di file ini. Placeholder ditandai dengan [ ].

export type Profile = {
  /** Nama tampilan pendek (navbar, footer) */
  name: string;
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
  name: "Ivan",
  fullName: "[Full Name]",
  tagline: "Web Developer | Fresh Graduate",
  intro:
    "[One or two sentences introducing who you are and what you build.]",
  about:
    "[Three to five sentences about your background, what you are interested in, and how you like to work. Mention the kind of work you are looking for and what you bring to a team.]",
  status: "Open to full-time roles & freelance projects",
  email: "[you@example.com]",
  photo: { src: "/images/profile.jpg", alt: "[Full Name]" },
};

export const links: Links = {
  linkedin: "https://www.linkedin.com/in/[username]",
  github: "https://github.com/[username]",
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
    institution: "[University Name]",
    degree: "[Bachelor of Computer Science]",
    period: "2020 – 2024",
    gpa: "[3.50 / 4.00]",
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
