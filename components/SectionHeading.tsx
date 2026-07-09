export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          <span aria-hidden="true" className="text-accent">
            {index} /{" "}
          </span>
          {label}
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
