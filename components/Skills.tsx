import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    title: "Core Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring MVC",
      "Hibernate / JPA",
      "REST APIs",
      "Microservices",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "JUnit / Mockito",
      "Query Optimization",
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      "Claude Code",
      "Claude Opus",
      "GitHub Copilot",
      "OpenAI Codex",
      "Agentic AI",
      "Prompt Engineering",
      "AI-Driven Development Lifecycle",
      "AI Code Review",
      "Legacy Migration with AI",
      "Lovable",
      "Supabase",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <Container className="py-20 sm:py-28">
        <SectionHeading
          index="03"
          label="Skills"
          title="Two toolboxes, one standard"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-line bg-surface p-6 sm:p-8"
            >
              <h3 className="text-base font-semibold text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
