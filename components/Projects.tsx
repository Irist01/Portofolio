import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/content/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" alt>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title + project.repo} project={project} />
        ))}
      </div>
    </Section>
  );
}
