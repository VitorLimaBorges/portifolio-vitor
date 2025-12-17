import { Section } from '../components/Section'
import { TimelineItem } from '../components/TimelineItem'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Experiência"
      title="Trajetória entre produto, design e código."
      description="Atuação em squads multidisciplinares, sempre perto de métricas de negócio e de usuários reais."
    >
      <ul className="flex flex-col gap-4">
        {experience.map((item, idx) => (
          <TimelineItem key={item.company + item.period} item={item} index={idx} />
        ))}
      </ul>
    </Section>
  )
}
