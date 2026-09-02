export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-8 gap-y-4 border-t border-line pt-6 font-mono text-xs tracking-[0.02em] text-ink-3">
      <span>Sandon Du · 2026</span>
      <div className="flex flex-wrap gap-5">
        <a
          href="https://github.com/sandond77"
          className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
        >
          github.com/sandond77
        </a>
        <a
          href="https://www.linkedin.com/in/sandon-du/"
          className="text-navy underline decoration-line hover:decoration-current underline-offset-4 transition-colors"
        >
          linkedin.com/in/sandon-du
        </a>
      </div>
    </footer>
  )
}
