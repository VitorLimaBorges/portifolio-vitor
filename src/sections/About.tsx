import { motion } from 'framer-motion'

import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      kicker="Sobre"
      title="Experiências digitais que equilibram estética, performance e negócio."
      description="Gosto de unir design system, microinterações e engenharia pragmática para criar produtos que convertem e escalam. Trabalho próximo de produto para medir, iterar e manter o stack saudável."
    >
      <div className="relative grid gap-6 overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-lg sm:grid-cols-3 dark:border-white/10 dark:from-white/5 dark:to-slate-900/20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
        <InfoBox title="Design System" body="Tokens, componentes acessíveis, documentação viva e versionamento claro para squads." />
        <InfoBox title="Performance" body="SSR/SSG, otimização de imagens, code-splitting e métricas RUM para decisões." />
        <InfoBox title="Entrega" body="Pipelines CI/CD, feature flags, monitoramento e alertas centrados no usuário." />
      </div>
    </Section>
  )
}

function InfoBox({ title, body }: Readonly<{ title: string; body: string }>) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group relative z-10 flex flex-col gap-2 overflow-hidden rounded-xl border border-black/5 bg-gradient-to-br from-white via-white to-slate-50 p-4 shadow-sm transition-shadow hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/20 dark:border-white/5 dark:from-white/5 dark:via-white/5 dark:to-white/10 dark:hover:border-sky-400/40 dark:hover:shadow-sky-400/30"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/20 to-blue-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      <h3 className="relative text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="relative text-sm text-slate-700 dark:text-slate-300/90">{body}</p>
    </motion.div>
  )
}
