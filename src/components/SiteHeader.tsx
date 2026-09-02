import { projects } from '../data/projects'

type Props = { activeId: string | null }

export function SiteHeader({ activeId }: Props) {
  return (
    <nav
      aria-label="Sections"
      className="hidden md:flex items-center gap-6 font-mono text-xs tracking-[0.04em]"
    >
      {/* Bookends the Contact link; neither is in the observed set. */}
      <a
        href="#top"
        className="border-r border-line pr-6 text-ink-3 hover:text-ink-2 transition-colors"
      >
        Intro
      </a>

      {projects.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          aria-current={activeId === project.id ? 'true' : undefined}
          className={
            activeId === project.id
              ? 'text-navy underline decoration-navy underline-offset-4'
              : 'text-ink-3 hover:text-ink-2 transition-colors'
          }
        >
          {project.name}
        </a>
      ))}

      <a
        href="#contact"
        className="border-l border-line pl-6 text-ink-3 hover:text-ink-2 transition-colors"
      >
        Contact
      </a>
    </nav>
  )
}
