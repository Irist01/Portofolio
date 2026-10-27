import { btnSmall, focusRing } from "@/components/ui";
import { profile } from "@/content/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
        <a
          href="#home"
          className={`text-lg font-semibold tracking-tight text-slate-900 ${focusRing}`}
        >
          {profile.name}
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className={btnSmall}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
