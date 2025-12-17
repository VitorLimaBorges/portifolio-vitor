import { useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'
type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  if (typeof globalThis === 'undefined') return 'dark'
  const stored = globalThis.localStorage.getItem(THEME_KEY) as Theme | null
  if (stored === 'dark' || stored === 'light') return stored
  const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.dataset.theme = theme
    globalThis.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
