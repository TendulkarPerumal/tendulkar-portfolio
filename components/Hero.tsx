import { Container } from "./Container";
import { IconDocument, IconGithub, IconLinkedin, IconMail } from "./icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_PATH } from "@/lib/site";

const TAGLINE =
  "I ship AI features with the same production discipline I built over 8 years in Java.";

const deployLog = [
  { cmd: true, text: "$ ship --feature discount-service" },
  { text: "✓ ai generates        14 files", ok: true },
  { text: "✓ tests pass          212/212", ok: true },
  { text: "✓ human review        approved", ok: true },
  { text: "→ deployed            zero downtime", ok: false },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-dotgrid absolute inset-0" />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-10 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            Java Tech Lead <span className="text-accent">→</span> AI Software
            Engineer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-5xl">
            Tendulkar Perumal
          </h1>

          <p className="max-w-2xl text-lg text-ink-muted sm:text-xl">
            {TAGLINE}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={RESUME_PATH}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              <IconDocument className="h-4 w-4" />
              Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <IconLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <IconMail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hidden w-72 shrink-0 select-none lg:block"
        >
          <div className="rounded-lg border border-line bg-surface shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-2 font-mono text-[10px] text-ink-muted">
                deploy.log
              </span>
            </div>
            <pre className="overflow-hidden p-4 font-mono text-xs leading-6">
              {deployLog.map((line) => (
                <div
                  key={line.text}
                  className={
                    line.cmd
                      ? "text-ink"
                      : line.ok
                        ? "text-ink-muted"
                        : "text-accent"
                  }
                >
                  {line.text}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
