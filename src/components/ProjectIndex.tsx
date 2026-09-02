import { projects } from '../data/projects'

export function ProjectIndex() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-[1.375rem] font-extrabold tracking-[-0.02em]">
          Selected work
        </h2>
        <p className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase text-ink-3">
          Three projects · 2026
        </p>
      </div>

      <ul className="flex flex-col border-t border-line">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-line">
            <a
              href={`#${project.id}`}
              className="group grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] items-baseline gap-1 sm:gap-6 py-4 transition-colors hover:bg-surface-2"
            >
              <span className="font-display font-semibold tracking-[-0.01em] group-hover:text-navy transition-colors">
                {project.name}
              </span>
              <span className="text-[0.9375rem] leading-snug text-ink-2">{project.index}</span>
              <span className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-ink-3">
                {project.kind}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
