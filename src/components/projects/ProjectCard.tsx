import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden bg-graphite text-warm-white',
        featured ? 'aspect-[4/5] md:aspect-[5/4]' : 'aspect-[4/5]',
        className,
      )}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        className="img-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        width={1400}
        height={1750}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
          <span className="text-accent">{project.category}</span>
          {project.isSample ? (
            <span className="border border-warm-white/25 px-2 py-0.5 text-warm-white/75">
              Conceptual
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
          {project.title}
        </h3>
        {project.location ? (
          <p className="mt-2 text-sm text-sand">{project.location}</p>
        ) : null}
        <p className="mt-3 max-w-md text-sm leading-relaxed text-sand/90 line-clamp-2">
          {project.summary}
        </p>
      </div>
    </Link>
  )
}
