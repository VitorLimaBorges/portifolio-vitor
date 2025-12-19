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
  },
  {
    title: 'E-commerce',
    description:
      'Loja virtual headless com Next.js, checkout otimizado e catálogo dinâmico com buscas rápidas e filtros inteligentes.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    year: '2025',
    live: '#',
    repo: 'https://github.com/VitorLimaBorges/e-commerce',
    highlight: '+22% na taxa de conversão com checkout simplificado e recomendações personalizadas',
  }
]
