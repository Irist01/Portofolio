import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { tag, textLink } from "@/components/ui";
import { asset } from "@/lib/asset";
import type { Project } from "@/content/data";

// Screenshot belum ada untuk semua proyek; dicek saat build agar placeholder hilang
// sendiri begitu file-nya ditaruh di public/images/.
const hasFile = (src: string) =>
  fs.existsSync(path.join(process.cwd(), "public", src));

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
      {hasFile(project.image.src) ? (
        <Image
          src={asset(project.image.src)}
          alt={project.image.alt}
          width={1600}
          height={1000}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center bg-slate-100 px-6 text-center text-base font-semibold text-slate-400">
          {project.title}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          {project.description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((name) => (
            <li key={name} className={tag}>
              {name}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-5 text-sm">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            Live Demo <span aria-hidden>↗</span>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
