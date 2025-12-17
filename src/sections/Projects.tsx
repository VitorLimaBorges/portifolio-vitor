import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Projetos"
      title="Portfólio com foco em impacto e narrativa."
      description="Seleção de produtos que misturam UX medido, animações intencionais e arquitetura pronta para crescer."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
