import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const roles = [
  {
    title: "Java Technical Lead",
    company: "Neurealm",
    period: "Nov 2022 — Present",
    points: [
      "Lead a team of Java developers on a US healthcare cloud platform — daily offshore stand-ups and mentoring the team on AI-driven engineering practices.",
      "Drive AIDLC adoption: Claude models through GitHub Copilot across the SDLC for rapid feature implementation, query optimization, legacy refactoring, and AI-assisted code reviews.",
      "Designed secure backend services in Java, Spring Boot, Hibernate, and MySQL; led the migration from standalone Java applications to Spring Boot microservices.",
      "Own production reliability: advanced logging, monitoring, root-cause analysis, and bi-weekly zero-downtime deployments.",
      "Promoted to Java Tech Lead within 3 years with an Outstanding performance rating (5/5).",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Infoview Technologies (IVTL)",
    period: "Jun 2018 — Nov 2022",
    points: [
      "Contributed to a 10-member team delivering ERP modules for HUE — Dashboard Portal, Input Validation Framework, and master-maintenance applications.",
      "Improved code efficiency and unit-testing coverage across the SCM product suite.",
    ],
  },
];

const credentials = [
  "B.E. Electronics & Communication, Sasurie College of Engineering (2018)",
  "Oracle Certified — Java",
  "Spring Framework Master — Core, AOP, MVC, Security, REST, Boot, JPA & Hibernate",
  "Complete Guide to GitHub Copilot for Developers — Microsoft Press",
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          index="04"
          label="Experience"
          title="Where I've shipped"
        />

        <ol className="flex flex-col gap-12 border-l border-line pl-6 sm:pl-8">
          {roles.map((role) => (
            <li key={role.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent sm:-left-[2.35rem]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-ink">
                  {role.title} · {role.company}
                </h3>
                <p className="font-mono text-xs text-ink-muted">
                  {role.period}
                </p>
              </div>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink-muted">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-lg border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-base font-semibold text-ink">
            Education &amp; certifications
          </h3>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink-muted">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
