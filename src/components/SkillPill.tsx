import { motion } from 'framer-motion'

export function SkillPill({ label }: Readonly<{ label: string }>) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="inline-flex cursor-default items-center rounded-full border border-black/10 bg-gradient-to-br from-black/5 to-black/10 px-3 py-1 text-sm text-slate-800 shadow-sm transition-shadow hover:shadow-md hover:shadow-sky-500/20 dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:text-slate-100 dark:hover:shadow-sky-400/30"
    >
      {label}
    </motion.span>
  )
}
