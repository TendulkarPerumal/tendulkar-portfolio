import Link from "next/link";
import { Container } from "./Container";
import { RESUME_PATH } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium text-ink">
          Tendulkar Perumal
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={RESUME_PATH}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Resume
        </a>
      </Container>
    </header>
  );
}
