import { Container } from "./Container";
import { IconDocument, IconGithub, IconLinkedin, IconMail } from "./icons";

// Placeholder — see chat for 3 tagline options to choose from.
const TAGLINE =
  "I ship AI features with the same production discipline I built over 8 years in Java.";

const EMAIL = "tendulkar.backend.dev@gmail.com";

export function Hero() {
  return (
    <section id="top">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-8 py-20">
        <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
          Java Tech Lead → AI Software Engineer
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          Tendulkar Perumal
        </h1>

        <p className="max-w-2xl text-lg text-ink-muted sm:text-xl">
          {TAGLINE}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <IconDocument className="h-4 w-4" />
            Resume
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <IconLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <IconMail className="h-4 w-4" />
            Email
          </a>
        </div>
      </Container>
    </section>
  );
}
