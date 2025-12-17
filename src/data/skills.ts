export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST', 'Java', 'Python', 'C#'],
  },
  {
    title: 'Cloud & Ops',
    items: ['AWS', 'Vercel', 'Netlify', 'Docker', 'CI/CD', 'Observabilidade'],
  },
  {
    title: 'UX & Produto',
    items: ['Design Systems', 'Acessibilidade', 'SEO', 'Experimentação', 'Analytics'],
  },
]
