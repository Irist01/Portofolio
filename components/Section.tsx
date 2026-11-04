import { container } from "@/components/ui";

type SectionProps = {
  id: string;
  title: string;
  /** Latar selang slate-50 */
  alt?: boolean;
  /** Judul rata tengah dengan jarak lebih rapat — dipakai Contact */
  center?: boolean;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  alt,
  center,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-32 ${alt ? "bg-slate-50" : "bg-white"}`}
    >
      <div className={container}>
        <h2
          className={`text-3xl font-bold tracking-tight text-slate-900 md:text-[2.5rem] ${
            center ? "mb-4 text-center" : "mb-8 md:mb-12"
          }`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
