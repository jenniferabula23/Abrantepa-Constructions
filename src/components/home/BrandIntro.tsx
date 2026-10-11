import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { AccentBar } from '@/components/ui/AccentBar'

export function BrandIntro() {
  const { brandIntro } = siteContent

  return (
    <section id="brand-intro" className="section-pad surface-textured-dark text-warm-white">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="glass-panel-dark p-7 md:p-9">
            <p className="eyebrow mb-5 text-stone">{brandIntro.eyebrow}</p>
            <h2 className="headline-lg text-balance">{brandIntro.headline}</h2>
            <p className="body-lg mt-6 text-sand">{brandIntro.body}</p>
            <Link
              to={brandIntro.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase transition-colors hover:text-accent-hover"
            >
              {brandIntro.cta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative">
            <div className="accent-textured absolute -top-4 -left-4 hidden h-24 w-24 md:block" />
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={brandIntro.image}
                alt={brandIntro.imageAlt}
                className="img-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                width={1400}
                height={1050}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
      <AccentBar className="mt-16 h-3" />
    </section>
  )
}
