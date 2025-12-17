import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { ThemeToggle } from './ThemeToggle'
import { socials } from '../data/socials'
import { cn } from '../lib/cn'

const navItems = [
  { href: '#hero', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#contact', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const nav = useMemo(
    () => (
      <nav className="flex flex-col gap-3 pt-4 text-sm sm:flex-row sm:items-center sm:gap-6 sm:pt-0">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-full px-3 py-2 text-slate-700 transition hover:bg-black/5 hover:text-black dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    ),
    [],
  )

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
          VITOR BORGES
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">{nav}</div>
          <div className="hidden sm:flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-black/5 hover:text-black dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-900 transition hover:border-black/30 sm:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div className={cn('sm:hidden', open ? 'block' : 'hidden')}>
        <div className="border-t border-black/5 px-4 pb-4 sm:px-6 dark:border-white/5">
          {nav}
          <div className="flex gap-2 pt-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-black/5 hover:text-black dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
