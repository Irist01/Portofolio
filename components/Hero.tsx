import Image from "next/image";
import { btnPrimary, btnSecondary, textLink } from "@/components/ui";
import { links, profile } from "@/content/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 bg-white py-16 md:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:px-6">
        <div className="order-first md:order-last">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={288}
            height={288}
            priority
            className="size-36 rounded-full object-cover ring-1 ring-slate-200 md:size-72"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent md:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} w-full md:w-auto`}
            >
              Download CV
            </a>
            <a href="#contact" className={`${btnSecondary} w-full md:w-auto`}>
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex gap-6">
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
      </div>
    </section>
  );
}
