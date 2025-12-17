export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'FullStack Developer',
    company: 'Globals',
    period: '2025',
    description: 'Trabalhei com sistemas criticos de alta disponibilidade e aplicações modernas.',
    highlights: [
      'Desenvolvo e mantenho sistemas críticos, garantindo alta performance, confiabilidade e segurança em todos os ambientes.',
      'Projeto e implemeto aplicações modernas, escaláveis eresponsivas usando React e Next.js para web e React Native paramobile, entregando experiências contínuas e centradas nousuário.',
      'Utilizo Git para controle de versão e desenvolvimento colaborativo, mantendo bases de código limpas, estruturadas e rastreáveis.',
      'Soluciono problemas, otimizo e aprimoro software identificando falhas, implementando melhorias contínuas e adicionando novos recursos alinhados aos objetivos do negócio.',
      'Contribuo para todo o ciclo de vida do software, desde a analise ao deploy',
      'Java para desenvolvimento backend e integração de sistemas, além de trabalhar com bancos de dados PostgreSQL, utilizando Metabase para análises de dados e visualização para apoiar decisões estratégicas.',  
    ],
  },
  {
    role: 'Intern FullStack Developer',
    company: 'Lizy Software',
    period: '2024 — 2025',
    description: 'Atuei no desenvolvimento de um ERP para indrustria de motores e atuei em mehorias em sistema legado.',
    highlights: [
      'Mantive aplicações legadas, corrigindo bugs e implementando melhorias contínuas conforme necessidades do negócio.',
      'Utilizei ferramentas de controle de versão como Git para gerenciar o código-fonte.',
      'Realizei testes unitários e de integração para garantir a qualidade do código.',
      'Melhorei continuamente sistemas existentes ao identificar falhas,corrigir bugs e adicionar novas funcionalidades.',
      'Desenvolvi softwares usando C# (.NET) e JavaScript, colaborando com o time de desenvolvimento',
      'Trabalhei com bancos de dados SQL Server e PostgreSQL.',
    ],
  },
]
