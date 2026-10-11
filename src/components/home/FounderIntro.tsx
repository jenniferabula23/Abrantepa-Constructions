import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { siteContent } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'

export function FounderIntro() {
  const { founder } = siteContent

  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden">
            <div className="accent-textured absolute -top-3 -left-3 h-full w-full" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
              <img
                src={founder.image}
                alt={founder.imageAlt}
                className="img-cover object-[center_20%]"
                width={800}
                height={1000}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-6">
                <p className="text-[0.65rem] tracking-[0.2em] text-accent uppercase">
                  {founder.title}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold">
                  {founder.name}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
          <div className="glass-panel-dark p-7 md:p-9">
            <p className="eyebrow mb-5 text-stone">{founder.eyebrow}</p>
            <h2 className="headline-lg text-balance">
              A vision for modern African homes.
            </h2>
            <p className="body-lg mt-6 text-sand">{founder.body}</p>
            <p className="mt-4 text-sm text-stone italic">{founder.biographyNote}</p>
            <Link
              to={founder.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase transition-colors hover:text-accent-hover"
            >
              {founder.cta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
