import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Experience } from '../data/experience'

export function TimelineItem({ item, index }: { item: Experience; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative flex gap-4 rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-white/5"
    >
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-900 dark:bg-white/10 dark:text-white">
        <Briefcase size={16} />
      </div>
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
