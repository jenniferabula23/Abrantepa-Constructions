import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'
import { siteContent } from '@/data/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const related = getRelatedProjects(project.id)

  return (
    <>
      <PageMeta
        title={project.title}
        description={project.summary}
        image={project.image}
        path={`/projects/${project.slug}`}
      />

      <section className="relative min-h-[70svh] overflow-hidden bg-ink pt-28 text-warm-white md:pt-36">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover opacity-55"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </div>
        <div className="container-arch relative flex min-h-[55svh] flex-col justify-end section-pad pt-10">
          <Reveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
              <span className="text-accent">{project.category}</span>
              {project.isSample ? (
                <span className="border border-warm-white/25 px-2 py-0.5 text-warm-white/80">
                  Conceptual inspiration
                </span>
              ) : null}
              {project.location ? (
                <span className="text-sand">{project.location}</span>
              ) : null}
            </div>
            <h1 className="headline-xl max-w-4xl text-balance">{project.title}</h1>
            <p className="editorial mt-5 max-w-2xl text-sand">{project.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-warm-white">
        <div className="container-arch grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="headline-md">Project overview</h2>
            <p className="body-lg mt-4">{project.summary}</p>
            {project.concept ? (
              <>
                <h3 className="mt-10 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                  Design concept
                </h3>
                <p className="body-lg mt-3">{project.concept}</p>
              </>
            ) : null}
            {project.challenges ? (
              <>
                <h3 className="mt-10 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                  Design challenges
                </h3>
                <p className="body-lg mt-3">{project.challenges}</p>
              </>
            ) : null}
            {project.solutions ? (
              <>
                <h3 className="mt-10 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                  Solutions
                </h3>
                <p className="body-lg mt-3">{project.solutions}</p>
              </>
            ) : null}
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <aside className="border border-ink/10 bg-ivory p-7">
              <h2 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                At a glance
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-concrete">Category</dt>
                  <dd className="mt-1 font-medium text-ink">{project.category}</dd>
                </div>
                {project.location ? (
                  <div>
                    <dt className="text-concrete">Location</dt>
                    <dd className="mt-1 font-medium text-ink">{project.location}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-concrete">Status</dt>
                  <dd className="mt-1 font-medium text-ink">
                    {project.isSample
                      ? 'Conceptual study — not a completed company project'
                      : 'Project case study'}
                  </dd>
                </div>
              </dl>
              <Button href="/start-a-project" className="mt-8 w-full">
                Enquire About a Similar Project
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 ? (
        <section className="section-pad bg-ivory">
          <div className="container-wide">
            <Reveal className="mb-8">
              <h2 className="headline-md">Gallery</h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <Reveal key={`${image.src}-${index}`} delay={index * 60}>
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-cover"
                      width={1200}
                      height={900}
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="section-pad bg-warm-white">
          <div className="container-wide">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="headline-md">Related studies</h2>
              <Link
                to="/projects"
                className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase underline decoration-accent underline-offset-8"
              >
                All projects
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-ink text-warm-white">
        <div className="container-arch section-pad">
          <h2 className="headline-lg max-w-2xl text-balance">
            {siteContent.closingCta.headline}
          </h2>
          <p className="body-lg mt-4 max-w-xl text-sand">
            {siteContent.closingCta.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/start-a-project" size="lg">
              Start a Project
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
