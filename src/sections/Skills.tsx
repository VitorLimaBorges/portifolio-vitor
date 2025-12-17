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
            className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
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
