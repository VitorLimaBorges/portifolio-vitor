import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

import { cn } from '../lib/cn'

type SectionProps = {
  id: string
  kicker?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, kicker, title, description, children, className }: Readonly<SectionProps>) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-20', className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-700/80 dark:text-sky-300/70"
          >
            <span className="h-px w-8 bg-gradient-to-r from-sky-500/0 via-sky-500/60 to-sky-500/0" />
            {kicker || 'Portfolio'}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl text-lg text-slate-700 dark:text-slate-300/90">{description}</p>
            ) : null}
          </motion.div>
        </div>
        {children}
      </div>
    </section>
  )
}
