import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className="group relative border border-line bg-surface px-5 pt-10 pb-8 md:px-10"
    >
      <div className="foil-rule absolute inset-x-0 top-0 h-0.5 opacity-85 group-hover:bg-[position:100%_0%]" />

      <div className="flex flex-col gap-6">
        {/* Header: name, kind, status */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-ink-3">
              {project.kind}
            </p>
            <h3 className="font-display text-[clamp(1.75rem,4vw,2.375rem)] font-extrabold leading-none tracking-[-0.03em] text-balance">
              {project.name}
            </h3>
          </div>
          <span className="font-mono text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-ink-2 border border-line bg-surface-2 px-2.5 py-1.5">
            {project.status}
          </span>
        </div>

        <p className="font-display text-[1.0625rem] font-medium leading-snug tracking-[-0.005em] text-navy max-w-3xl text-balance">
          {project.thesis}
        </p>

        {/* Promoted artifact: sits above the metrics so it is the first thing after the pitch. */}
        {project.feature && (
          <a
            href={project.feature.href}
            className="group/feat relative flex flex-col gap-3 border border-navy bg-ground px-5 pt-7 pb-6 md:px-7 transition-colors hover:bg-surface-2"
          >
            <div className="foil-rule absolute inset-x-0 top-0 h-[3px] group-hover/feat:bg-[position:100%_0%]" />

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <span className="bg-navy px-2 py-1 font-mono text-[0.625rem] font-bold tracking-[0.16em] uppercase text-ground">
                {project.feature.label}
              </span>
              <span className="font-mono text-[0.75rem] text-navy underline decoration-line underline-offset-4 group-hover/feat:decoration-current transition-colors">
                {project.feature.cta}&#8202;&#8202;↗
              </span>
            </div>

            <p className="font-display text-[1.125rem] font-extrabold leading-snug tracking-[-0.02em] max-w-2xl text-balance">
              {project.feature.headline}
            </p>

            <p className="text-[0.9375rem] leading-normal text-ink-2 max-w-[46rem]">
              {project.feature.blurb}
            </p>
          </a>
        )}

        {project.metrics && (
          <dl className="flex flex-wrap gap-x-9 border-y border-line-soft py-4">
            {project.metrics.map((metric) => (
              <div key={metric.k} className="flex flex-col gap-0.5 py-1.5">
                <dd className="font-display text-[1.375rem] font-extrabold tracking-[-0.02em] tabular-nums">
                  {metric.n}
                </dd>
                <dt className="font-mono text-[0.625rem] tracking-[0.13em] uppercase text-ink-3">
                  {metric.k}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-10 max-w-[62rem]">
          {project.narrative.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decisions */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-ink-3">
            Design decisions
          </h4>
          <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {project.decisions.map((decision) => (
              <li key={decision.title} className="flex flex-col gap-1 border-l border-line pl-4">
                <span className="font-display text-[0.9375rem] font-semibold tracking-[-0.01em]">
                  {decision.title}
                </span>
                <span className="text-[0.9375rem] leading-normal text-ink-2">{decision.body}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.constraint && (
          <div className="flex flex-col gap-1.5 border-l-2 border-label-red bg-surface-2 px-4 py-3.5 max-w-[46rem]">
            <span className="font-mono text-[0.625rem] font-bold tracking-[0.14em] uppercase text-label-red">
              {project.constraint.label}
            </span>
            <p className="text-[0.9375rem] leading-normal text-ink-2">{project.constraint.body}</p>
          </div>
        )}

        {project.log && (
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-ink-3">
              Maintenance log
            </h4>
            <dl className="grid grid-cols-[max-content_1fr] gap-x-5 gap-y-2.5 max-w-[52rem]">
              {project.log.map((entry) => (
                <div key={entry.when} className="contents">
                  <dt className="font-mono text-xs text-ink-3 tabular-nums whitespace-nowrap pt-0.5">
                    {entry.when}
                  </dt>
                  <dd className="text-[0.9375rem] leading-normal text-ink-2">{entry.what}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Spec + links */}
        <div className="flex flex-col gap-5 border-t border-line-soft pt-5">
          <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-3 font-mono text-xs leading-relaxed">
            <div>
              <dt className="text-[0.625rem] tracking-[0.14em] uppercase text-ink-3">Role</dt>
              <dd className="mt-1 text-ink-2">{project.spec.role}</dd>
            </div>
            <div>
              <dt className="text-[0.625rem] tracking-[0.14em] uppercase text-ink-3">Stack</dt>
              <dd className="mt-1 text-ink-2">{project.spec.stack}</dd>
            </div>
            <div>
              <dt className="text-[0.625rem] tracking-[0.14em] uppercase text-ink-3">
                Last commit
              </dt>
              <dd className="mt-1 text-ink-2 tabular-nums">{project.spec.lastCommit}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs">
            {project.links.map((link) =>
              'href' in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
                >
                  {link.label}&#8202;&#8202;↗
                </a>
              ) : (
                <span key={link.label} className="text-ink-3">
                  {link.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
