import { skills, stack } from '../data/projects'

type Group = { label: string; items: string[] }

function Table({ groups }: { groups: Group[] }) {
  return (
    <dl className="flex flex-col border-t border-line">
      {groups.map((group) => (
        <div
          key={group.label}
          className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] items-baseline gap-1.5 sm:gap-6 border-b border-line py-4"
        >
          <dt className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-ink-3">
            {group.label}
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-surface px-2.5 py-1 font-mono text-[0.75rem] text-ink-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Two tables, not one. Practices and technologies answer different questions, and a
 * product recruiter reads the first while an engineer reads the second.
 */
export function Capabilities() {
  return (
    <div className="flex flex-col gap-12">
      <section aria-labelledby="skills" className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="skills" className="font-display text-[1.375rem] font-extrabold tracking-[-0.02em]">
            Skills
          </h2>
          <p className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase text-ink-3">
            What the work actually was
          </p>
        </div>
        <Table groups={skills} />
      </section>

      <section aria-labelledby="stack" className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="stack" className="font-display text-[1.375rem] font-extrabold tracking-[-0.02em]">
            Stack
          </h2>
          <p className="font-mono text-[0.6875rem] tracking-[0.16em] uppercase text-ink-3">
            Used in the projects below
          </p>
        </div>
        <Table groups={stack} />
      </section>
    </div>
  )
}
