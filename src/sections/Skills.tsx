import { motion } from 'framer-motion'

import { SkillPill } from '../components/SkillPill'
import { Section } from '../components/Section'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Stack para prototipar rápido e sustentar produtos." 
      description="Ferramentas e práticas que uso no dia a dia para entregar experiências polidas, medíveis e fáceis de manter."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-white via-white to-slate-50/80 p-5 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/20 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/10 dark:hover:border-sky-400/50 dark:hover:shadow-sky-400/30"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/0 via-transparent to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10" />
            <h3 className="relative text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="relative mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillPill key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
