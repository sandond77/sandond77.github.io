import { Capabilities } from './components/Capabilities'
import { Hero } from './components/Hero'
import { Principles } from './components/Principles'
import { ProjectCard } from './components/ProjectCard'
import { ProjectIndex } from './components/ProjectIndex'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ThemeToggle } from './components/ThemeToggle'
import { projects } from './data/projects'
import { useActiveSection } from './hooks/useActiveSection'

const projectIds = projects.map((project) => project.id)

export default function App() {
  const activeId = useActiveSection(projectIds)

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-line/70 bg-ground/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <a
            href="#top"
            className="font-display text-sm font-extrabold tracking-[-0.02em] hover:text-navy transition-colors"
          >
            Sandon Du
          </a>
          <div className="flex items-center gap-6">
            <SiteHeader activeId={activeId} />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/*
        Ordered for a ten-second scan. Role target and contact in the hero, the stack as a
        keyword filter, then the projects and the pattern behind them.
      */}
      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 md:gap-20">
        <Hero />
        <Capabilities />
        <ProjectIndex />

        <div className="flex flex-col gap-9">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Principles />

        <section id="contact" className="flex flex-col gap-4">
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2rem)] font-extrabold tracking-[-0.025em] text-balance">
            Get in touch
          </h2>
          <div className="flex flex-col gap-4 max-w-[34rem] leading-relaxed">
            <p>
              Eight years of operations work, three tools built for a business I actually run, and
              a support queue I answer myself. Happy to walk through any of it, including the
              private Reactor deployment.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 pt-1 font-mono text-[0.8125rem]">
            <a
              href="mailto:sandond77@gmail.com"
              className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
            >
              sandond77@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sandon-du/"
              className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
            >
              LinkedIn&#8202;&#8202;↗
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
