import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_60px_-25px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_60px_-25px_rgba(0,0,0,0.6)]"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-purple-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300/80">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 font-semibold uppercase tracking-[0.25em] text-slate-700 dark:border-white/10 dark:text-white/80">
            {project.year}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:text-emerald-200">
            <Sparkles size={14} /> {project.highlight}
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-700 dark:text-slate-300/90">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-700 dark:text-slate-200">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-black/5 px-3 py-1 font-medium text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-3 text-sm">
          {project.repo ? (
            <a
              href={project.repo}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-slate-900 transition hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
            >
              <Github size={16} /> Código
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 font-semibold transition hover:translate-y-[1px] dark:bg-white dark:text-slate-950"
            >
              <ExternalLink size={16} /> Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
