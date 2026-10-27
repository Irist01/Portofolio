import Section from "@/components/Section";
import { btnPrimary, textLink } from "@/components/ui";
import { links, profile, serviceLine } from "@/content/data";

export default function Contact() {
  return (
    <Section id="contact" title="Let's Work Together" center>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base text-slate-600 md:text-lg">{serviceLine}</p>
        <div className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className={`${btnPrimary} w-full md:w-auto`}
          >
            Email Me
          </a>
        </div>
        {/* Email juga sebagai teks: mailto gagal bila tak ada aplikasi email (FR-6) */}
        <p className="mt-3 text-sm text-slate-500">{profile.email}</p>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
