import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { IconGithub, IconLinkedin, IconMail } from "./icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <SectionHeading index="05" label="Contact" title="Let's talk" />

        <p className="max-w-xl text-base leading-relaxed text-ink-muted">
          Open to AI Software Engineer and AI Product Engineer roles. Based in
          Chennai, comfortable with remote and distributed teams. The fastest
          way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            <IconMail className="h-4 w-4" />
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <IconLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <p className="mt-16 border-t border-line pt-6 font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()}{" "}Tendulkar Perumal · Built with
          Next.js &amp; Tailwind, shipped with AI — reviewed by a human.
        </p>
      </Container>
    </section>
  );
}
