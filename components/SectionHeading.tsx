export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
