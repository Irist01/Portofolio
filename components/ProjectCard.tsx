import Image from "next/image";
import { tag, textLink } from "@/components/ui";
import type { Project } from "@/content/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={640}
        height={400}
        className="aspect-[16/10] w-full object-cover object-top"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
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
