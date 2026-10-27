import { focusRing } from "@/components/ui";
import { links, profile } from "@/content/data";

const socials = [
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.github, label: "GitHub" },
];

export default async function Footer() {
  "use cache"; // Cache Components melarang new Date() saat prerender; cache di-revalidate 15 menit
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:justify-between md:gap-0 md:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-slate-900 ${focusRing}`}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
