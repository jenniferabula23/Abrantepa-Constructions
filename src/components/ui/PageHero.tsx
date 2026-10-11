import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { AccentBar } from './AccentBar'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  image?: string
  actions?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden surface-textured-dark pt-28 text-warm-white md:pt-36">
      {image ? (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
          <div
            className="absolute inset-0 opacity-25 mix-blend-soft-light"
            style={{
              backgroundImage: "url('/images/texture-organic.jpg')",
              backgroundSize: '640px',
            }}
            aria-hidden="true"
          />
        </div>
      ) : null}

      <div className="container-arch relative section-pad pt-8">
        <Reveal>
          <div className="glass-panel-dark max-w-4xl p-7 md:p-10">
            <p className="eyebrow mb-5 text-stone">{eyebrow}</p>
            <h1 className="headline-xl text-balance">{title}</h1>
            <p className="editorial mt-6 max-w-2xl text-sand">{description}</p>
            {actions ? <div className="mt-8">{actions}</div> : null}
          </div>
        </Reveal>
      </div>
      <AccentBar className="relative h-3" />
    </section>
  )
}
