import Image from "next/image";
import { btnPrimary, btnSecondary, container, textLink } from "@/components/ui";
import { asset } from "@/lib/asset";
import { links, profile } from "@/content/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-white pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className={`${container} grid gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-14 lg:gap-20`}>
        <div className="order-first md:order-last">
          <Image
            src={asset(profile.photo.src)}
            alt={profile.photo.alt}
            width={440}
            height={440}
            priority
            className="size-60 rounded-full object-cover ring-1 ring-slate-200 md:size-72 lg:size-80 xl:size-[400px]"
          />
        </div>
        <div>
          <p className="text-base font-medium text-slate-600 md:text-lg">
            {profile.greeting}
          </p>
          <h1 className="mt-2 text-[2.5rem] font-bold tracking-tight text-slate-900 md:mt-3 md:text-6xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-xl font-medium text-accent md:mt-4 md:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base text-slate-600 md:mt-5 md:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <a
              href={asset(links.cv)}
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
          <div className="mt-6 flex gap-6 md:mt-8">
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
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
