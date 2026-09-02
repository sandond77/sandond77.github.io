import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-ink-3 hover:text-ink-2 border border-line px-2.5 py-1.5 transition-colors"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
