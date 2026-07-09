import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { value: "8+ yrs", label: "Java in production" },
  { value: "5/5", label: "Outstanding rating as Tech Lead" },
  { value: "Bi-weekly", label: "Zero-downtime deployments" },
];

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <SectionHeading label="About" title="AI accelerates. Judgment gates." />

        <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-ink-muted">
          <p>
            I spent eight years building Java backends the hard way — Spring
            Boot microservices, REST APIs, JPA, query optimization, and the
            3&nbsp;a.m. production debugging that teaches you what
            &ldquo;works on my machine&rdquo; really costs. Today I lead a team
            of Java developers at Neurealm on a US healthcare cloud platform.
          </p>
          <p>
            Over the last few years I rebuilt my workflow around an AI-Driven
            Development Lifecycle: Claude models through Claude Code, GitHub
            Copilot, and OpenAI Codex for feature implementation, legacy
            conversions, database migrations, and code review. Work that used
            to take weeks — like converting legacy PHP services to Java, or
            translating DB2 schemas to PostgreSQL — now ships in days.
          </p>
          <p className="text-ink">
            The speed only matters because of the gate. Every AI-generated
            change goes through the same discipline as hand-written code:
            review, tests, security scanning, and monitored zero-downtime
            deployments. AI moves the work faster; engineering judgment decides
            what ships.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-line bg-surface p-5"
            >
              <dt className="order-last mt-1 text-sm text-ink-muted">
                {item.label}
              </dt>
              <dd className="font-mono text-xl font-semibold text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
