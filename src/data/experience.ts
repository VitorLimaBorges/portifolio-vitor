export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Fintech FlowPay',
    period: '2023 — Presente',
    description: 'Lidero iniciativas de conversão, confiabilidade e design system para produtos de pagamento.',
    highlights: [
      'Reestruturei o design system com tokens responsivos, reduzindo 22% de retrabalho.',
      'Implementei micro frontends com Module Federation para squads paralelos.',
      'Criei estratégia de monitoramento UX (RUM + tracing) e melhorei o tempo de resposta em 28%.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'HealthTech Nova',
    period: '2021 — 2023',
    description: 'Desenvolvi experiências ricas para telemedicina e painéis clínicos.',
    highlights: [
      'Lancei painel de prontuários com offline-first e sincronização otimista.',
      'Construí fluxo de onboarding guiado elevando a ativação em 18%.',
      'Padronizei acessibilidade (WCAG AA) com testes automatizados.',
    ],
  },
  {
    role: 'Product Designer → Frontend',
    company: 'Estúdio Atlas',
    period: '2019 — 2021',
    description: 'Transição de design para engenharia, mantendo visão centrada no usuário.',
    highlights: [
      'Entreguei landing pages performáticas (LCP < 1.5s) para múltiplos clientes.',
      'Codifiquei bibliotecas de componentes em Storybook com variantes temáticas.',
      'Coordenei testes de usabilidade com loops rápidos de iteração.',
    ],
  },
]
