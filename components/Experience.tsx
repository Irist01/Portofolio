import Section from "@/components/Section";
import { achievements, education, experience } from "@/content/data";

const label = "mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500";
const list = "divide-y divide-slate-200 border-t border-slate-200";
const row = "grid gap-1 py-6 md:grid-cols-[160px_1fr] md:gap-8";
const period = "text-sm text-slate-500";

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <h3 className={label}>Experience</h3>
      <ul className={list}>
        {/* data.ts sudah urut terbaru di atas */}
        {experience.map((item) => (
          <li key={`${item.organization}-${item.period}`} className={row}>
            <p className={period}>{item.period}</p>
            <div>
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="text-slate-600">{item.organization}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <h3 className={`${label} mt-16`}>Education</h3>
      <ul className={list}>
        {education.map((item) => (
          <li key={`${item.institution}-${item.period}`} className={row}>
            <p className={period}>{item.period}</p>
            <div>
              <h4 className="font-semibold text-slate-900">
                {item.institution}
              </h4>
              <p className="text-slate-600">{item.degree}</p>
              {item.gpa && (
                <p className="mt-3 text-slate-600">GPA {item.gpa}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {achievements.length > 0 && (
        <>
          <h3 className={`${label} mt-16`}>Achievements &amp; Certifications</h3>
          <ul className={list}>
            {achievements.map((item) => (
              <li key={`${item.title}-${item.year}`} className="py-3">
                <span className="font-medium text-slate-900">{item.title}</span>{" "}
                <span className="text-sm text-slate-500">
                  {item.issuer} · {item.year}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
