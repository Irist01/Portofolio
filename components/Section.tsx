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
      className={`scroll-mt-16 py-16 md:py-24 ${alt ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2
          className={`text-2xl font-bold tracking-tight text-slate-900 md:text-3xl ${
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
