export type Project = {
  title: string
  description: string
  stack: string[]
  year: string
  live?: string
  repo?: string
  highlight: string
}

export const projects: Project[] = [
  {
    title: 'InsightOps Dashboard',
    description:
      'Painel de observabilidade com alertas inteligentes, visão de logs em tempo real e playbooks interativos para SRE.',
    stack: ['React', 'TypeScript', 'Tailwind', 'TanStack Query', 'D3'],
    year: '2025',
    live: '#',
    repo: '#',
    highlight: '+32% de redução no MTTR usando detecção preditiva e UX de troubleshooting.',
  }
]
