import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccentBar } from '@/components/ui/AccentBar'

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <div className="container-wide">
        <Reveal className="mb-10">
          <div className="glass-panel-dark p-7 md:p-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Selected Studies"
                title="Featured architectural explorations."
                description="Visual studies using Abrantepa’s design direction. Conceptual inspiration is clearly marked until official project case studies are published."
                tone="light"
              />
              <Link
                to="/projects"
                className="shrink-0 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </Reveal>

        {featured.length === 0 ? (
          <p className="body text-sand">Project gallery forthcoming.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 80}
                className={index === 0 ? 'md:col-span-2 xl:col-span-1' : undefined}
              >
                <ProjectCard project={project} featured={index === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
      <AccentBar className="mt-12 h-14 md:h-16" />
    </section>
  )
}
