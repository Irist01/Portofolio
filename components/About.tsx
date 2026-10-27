import Section from "@/components/Section";
import { badge } from "@/components/ui";
import { profile, skills } from "@/content/data";

export default function About() {
  return (
    <Section id="about" title="About Me" alt>
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-12">
        <div>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            {profile.about}
          </p>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-dark">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            {profile.status}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-base font-semibold text-slate-900">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className={badge}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
