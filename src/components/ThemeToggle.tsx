import { Moon, Sun } from 'lucide-react'

import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-900 transition hover:border-black/30 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10',
        className,
      )}
      aria-label="Alternar tema"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
