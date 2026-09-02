import { principles } from '../data/projects'

/**
 * Reads as a claim before the projects and as a pattern after them, so it sits below
 * the evidence instead of above it.
 */
export function Principles() {
  return (
    <section aria-labelledby="how-i-work" className="flex flex-col gap-5">
      <h2
        id="how-i-work"
        className="font-display text-[1.375rem] font-extrabold tracking-[-0.02em]"
      >
        How I work
      </h2>

      <div className="grid gap-6 md:grid-cols-3 md:gap-10 border-y border-line py-7">
        {principles.map((principle) => (
          <div key={principle.title} className="flex flex-col gap-1.5">
            <h3 className="font-display text-[0.9375rem] font-semibold tracking-[-0.01em]">
              {principle.title}
            </h3>
            <p className="text-[0.9375rem] leading-normal text-ink-2">{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
