import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Experience } from '../data/experience'

export function TimelineItem({ item, index }: Readonly<{ item: Experience; index: number }>) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative flex gap-4 rounded-2xl border border-black/5 bg-gradient-to-br from-white to-slate-50/50 p-5 shadow-sm transition-shadow hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:hover:border-sky-400/40 dark:hover:shadow-sky-400/20"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-10" />
      <motion.div 
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 text-slate-900 ring-2 ring-sky-500/30 dark:from-sky-400/20 dark:to-blue-400/20 dark:text-white dark:ring-sky-400/40"
      >
        <Briefcase size={16} />
      </motion.div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {item.role} · {item.company}
          </h3>
          <span className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:text-slate-200">
            {item.period}
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-300/90">{item.description}</p>
        <ul className="flex list-disc flex-col gap-1 pl-4 text-sm text-slate-700 dark:text-slate-200">
          {item.highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}
