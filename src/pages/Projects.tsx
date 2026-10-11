import { useMemo, useState } from 'react'
import { projects, projectCategories } from '@/data/projects'
import { siteContent } from '@/data/content'
import type { ProjectCategory } from '@/types/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectFilter } from '@/components/projects/ProjectFilter'
import { CTASection } from '@/components/ui/CTASection'
import { PageHero } from '@/components/ui/PageHero'

export function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')

  const availableCategories = useMemo(() => {
    const present = new Set(projects.map((project) => project.category))
    return [
      'All' as const,
      ...projectCategories.filter((category) => present.has(category)),
    ]
  }, [])

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((project) => project.category === active)
  }, [active])

  const featured = projects.find((project) => project.featured)

  return (
    <>
      <PageMeta
        title="Projects"
        description="Explore conceptual architectural studies and future Abrantepa Constructions project case studies."
        path="/projects"
      />

      <PageHero
        eyebrow="Projects"
        title="An evolving architectural portfolio."
        description="Visual studies using Abrantepa’s design direction. Conceptual inspiration is clearly marked until official project case studies are published."
        image="/images/gallery/gallery-01.jpg"
      />

      {featured ? (
        <section className="surface-textured-dark">
          <div className="container-wide section-pad pt-4">
            <Reveal>
              <p className="eyebrow mb-6 text-stone">Featured</p>
              <ProjectCard project={featured} featured className="min-h-[28rem]" />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-wide">
          <Reveal className="mb-8">
            <div className="glass-panel-dark p-5 md:p-6">
              <ProjectFilter
                categories={availableCategories}
                active={active}
                onChange={setActive}
                tone="dark"
              />
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="glass-panel-dark px-8 py-16 text-center">
              <h2 className="headline-md">{siteContent.projectsEmpty.title}</h2>
              <p className="body-lg mx-auto mt-4 max-w-xl text-sand">
                {siteContent.projectsEmpty.body}
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((project, index) => (
                <Reveal key={project.id} delay={index * 50}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection {...siteContent.closingCta} />
    </>
  )
}
