import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      kicker="Sobre"
      title="Experiências digitais que equilibram estética, performance e negócio."
      description="Gosto de unir design system, microinterações e engenharia pragmática para criar produtos que convertem e escalam. Trabalho próximo de produto para medir, iterar e manter o stack saudável."
    >
      <div className="grid gap-6 rounded-2xl border border-black/5 bg-white p-6 sm:grid-cols-3 dark:border-white/10 dark:bg-white/5">
        <InfoBox title="Design System" body="Tokens, componentes acessíveis, documentação viva e versionamento claro para squads." />
        <InfoBox title="Performance" body="SSR/SSG, otimização de imagens, code-splitting e métricas RUM para decisões." />
        <InfoBox title="Entrega" body="Pipelines CI/CD, feature flags, monitoramento e alertas centrados no usuário." />
      </div>
    </Section>
  )
}

function InfoBox({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-white/5">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-700 dark:text-slate-300/90">{body}</p>
    </div>
  )
}
