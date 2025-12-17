import { motion } from 'framer-motion'

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
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}
