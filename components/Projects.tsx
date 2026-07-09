import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { IconGithub } from "./icons";
import { GITHUB_URL } from "@/lib/site";

type Project = {
  name: string;
  tagline: string;
  points: string[];
  tags: string[];
  github?: string;
  note?: string;
};

const projects: Project[] = [
  {
    name: "AI-Assist Platform",
    tagline:
      "A production web application shipped end-to-end through AI-assisted engineering.",
    points: [
      "Architected and deployed a production-grade web app entirely with AI tooling — scaffolded in Lovable, exported to GitHub, and wired to a Supabase backend.",
      "Deployed on Vercel with automatic deployments from the main branch.",
      "Claude Code drives ongoing enhancements and debug pipelines, with every change reviewed and verified before merge.",
    ],
    tags: ["Claude Code", "Lovable", "Supabase", "Vercel", "TypeScript"],
    github: GITHUB_URL,
  },
  {
    name: "Remitra — US Healthcare Cloud Platform",
    tagline:
      "A GPO- and ERP-agnostic cloud platform streamlining financial processes between healthcare systems and suppliers.",
    points: [
      "Migrated a legacy standalone Java application to Spring Boot microservices, improving scalability and maintainability.",
      "Converted large legacy PHP services to Java using Claude Opus, sharply reducing manual rewrite time while preserving core business logic.",
      "Accelerated DB2 → PostgreSQL migrations with AI-driven schema translation and query adaptation.",
      "Automated security fixes and vulnerability patching with specialized AI agents, plus Spring version upgrades for compliance.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Claude Opus"],
    note: "Client platform — code private",
  },
  {
    name: "HUE — ERP Product Development",
    tagline:
      "Four years across the full product lifecycle in the SCM division of an ERP product.",
    points: [
      "Developed and upgraded multiple SCM modules: Dashboard Portal, Input Validation Framework, Detail Page Approval, and master-maintenance applications.",
      "Owned analysis, design, implementation, testing, and maintenance end to end.",
      "Configured and monitored Jenkins CI/CD pipelines for automated build and deployment.",
    ],
    tags: ["Java", "Spring MVC", "Hibernate", "MySQL", "Jenkins"],
    note: "Client platform — code private",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <SectionHeading index="02" label="Projects" title="Selected work" />

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-lg border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <IconGithub className="h-4 w-4" />
                    GitHub
                  </a>
                ) : (
                  <span className="font-mono text-xs text-ink-muted">
                    {project.note}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm italic text-ink-muted">
                {project.tagline}
              </p>

              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink-muted">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
