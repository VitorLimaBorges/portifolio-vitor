import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Project } from '../data/projects'

export function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative overflow-hidden rounded-2xl border-2 border-sky-500/20 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-[0_10px_60px_-20px_rgba(56,189,248,0.3)] backdrop-blur-sm transition-all hover:border-sky-500/40 hover:shadow-[0_20px_80px_-20px_rgba(56,189,248,0.6)] dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:shadow-[0_10px_60px_-25px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_20px_80px_-30px_rgba(56,189,248,0.5)]"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-purple-500/5 to-pink-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-[100%] animate-[spin_8s_linear_infinite] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent opacity-0 group-hover:opacity-100" />
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
              className="rounded-full border border-sky-500/30 bg-gradient-to-br from-sky-50 to-blue-50 px-3 py-1 font-medium text-sky-700 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-3 text-sm">
          {project.repo ? (
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.repo}
              className="inline-flex items-center gap-2 rounded-full border-2 border-sky-600/30 bg-sky-50 px-4 py-2 text-sky-700 transition-all hover:border-sky-600/50 hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-500/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20"
            >
              <Github size={16} /> Código
            </motion.a>
          ) : null}
          {project.live ? (
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.live}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-500/50 dark:from-sky-500 dark:to-blue-500"
            >
              <ExternalLink size={16} /> Demo
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
