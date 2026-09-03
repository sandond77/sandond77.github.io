import { lookingFor } from '../data/projects'

export function Hero() {
  return (
    <header className="flex flex-col gap-9 pt-20 md:pt-28">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] uppercase text-ink-3">
          Product · Product Support · Operations
        </p>

        <h1 className="font-display font-extrabold text-[clamp(3rem,11vw,6.5rem)] leading-[0.9] tracking-[-0.035em] text-balance">
          Sandon Du
        </h1>

        <p className="font-display font-semibold text-[clamp(1.0625rem,2.4vw,1.4375rem)] leading-snug tracking-[-0.01em] text-navy max-w-2xl text-balance">
          Eight years in biotech manufacturing operations and technical implementation. Now I run
          a trading card business and build the software it runs on.
        </p>
      </div>

      {/*
        The role target sits as a card inside the intro instead of a section after it,
        which is also what earns the wider shell its second column.
      */}
      <div className="grid items-start gap-9 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-[1.0625rem] leading-relaxed">
            <p>
              I spent eight years in biotech manufacturing, first at Grifols and then at Nutcracker
              Therapeutics. R&amp;D/engineering would develop a new process and I was the one who
              implemented it. This involved sourcing and testing the equipment, writing the SOPs,
              and training new operators to use it. If there was an issue with the process or
              equipment, I was readily available to help troubleshoot and diagnose the problem. By
              the end, I was supervising eight engineers and managing the day-to-day operations.
            </p>
            <p>
              Somewhere in there I started buying and selling graded cards. That became SD Slabs,
              which has done a bit over $400k in lifetime sales. It ran on spreadsheets until it
              stopped scaling, so I mapped the workflow, drew the wireframes, and built Reactor to
              replace them. Ten other sellers are on it in closed beta now, and I answer the
              support Discord myself.
            </p>
            <p>
              Reactor was built on what I learned in the full-stack development program at UC
              Berkeley Extension in 2018. I stayed there for a year as instructional staff. I
              have worked on a number of projects since then, and the three below are the latest.
              I still use all of them every week.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[0.8125rem]">
            <a
              href="mailto:sandond77@gmail.com"
              className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
            >
              sandond77@gmail.com
            </a>
            <a
              href="https://github.com/sandond77"
              className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
            >
              GitHub&#8202;&#8202;↗
            </a>
            <a
              href="https://www.linkedin.com/in/sandon-du/"
              className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
            >
              LinkedIn&#8202;&#8202;↗
            </a>
          </div>
        </div>

        <section
          aria-labelledby="looking-for"
          className="relative border border-line bg-surface px-6 pt-7 pb-6 md:px-8 md:pb-7"
        >
          <div className="foil-rule absolute inset-x-0 top-0 h-0.5 opacity-85" />

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[0.625rem] font-bold tracking-[0.16em] uppercase text-ink-3">
              What I'm looking for
            </p>

            <h2
              id="looking-for"
              className="font-display text-[1.25rem] font-extrabold tracking-[-0.02em] text-balance"
            >
              {lookingFor.headline}
            </h2>

            <p className="text-[0.9375rem] leading-relaxed text-ink-2">{lookingFor.body}</p>

            <ul className="flex flex-wrap gap-x-2 gap-y-2 pt-1">
              {lookingFor.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line bg-surface-2 px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.06em] text-ink-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </header>
  )
}
