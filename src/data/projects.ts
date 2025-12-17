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
    title: 'JBFinance',
    description:
      'Saas para gestão financeira coorporativa, com visualização de dados e insights acionáveis para melhor controle do orçamento.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Python'],
    year: '2025',
    live: '#',
    repo: '#',
    highlight: '+35% mais previsibilidade no fluxo de caixa usando projeções inteligentes',
  }
]
