import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

import { ThemeToggle } from './ThemeToggle'
import { socials } from '../data/socials'

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
        {navItems.map((item, idx) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full px-3 py-2 text-slate-700 transition hover:bg-gradient-to-r hover:from-sky-500/10 hover:to-blue-500/10 hover:text-black dark:text-slate-200 dark:hover:from-sky-400/10 dark:hover:to-blue-400/10 dark:hover:text-white"
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    ),
    [],
  )

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <motion.a 
          href="#hero" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-sky-600/10 to-blue-600/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 transition-colors hover:from-sky-600/20 hover:to-blue-600/20 dark:from-sky-400/10 dark:to-blue-400/10 dark:text-white dark:hover:from-sky-400/20 dark:hover:to-blue-400/20"
        >
          VITOR BORGES
        </motion.a>
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
      <motion.div 
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden sm:hidden"
      >
        <motion.div 
          className="border-t border-black/5 px-4 pb-4 sm:px-6 dark:border-white/5"
          variants={{
            open: {
              transition: { staggerChildren: 0.05, delayChildren: 0.1 }
            },
            closed: {
              transition: { staggerChildren: 0.03, staggerDirection: -1 }
            }
          }}
        >
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
        </motion.div>
      </motion.div>
    </header>
  )
}
