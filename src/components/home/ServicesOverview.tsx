import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccentBar } from '@/components/ui/AccentBar'

export function ServicesOverview() {
  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <AccentBar className="mb-12 h-2 w-full" />
      <div className="container-wide">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services shaped around architectural transformation."
            description="Provisional service categories designed for homeowners, developers, and families seeking thoughtful design and construction."
            tone="light"
          />
          <Link
            to="/services"
            className="shrink-0 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase"
          >
            View All Services
          </Link>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <Link
                to={`/services#${service.id}`}
                className="glass-panel-dark group relative flex h-full flex-col overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="img-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    width={1200}
                    height={750}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="headline-md text-[1.35rem] text-warm-white md:text-[1.5rem]">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      className="mt-1 shrink-0 text-sand transition-colors group-hover:text-accent"
                      size={20}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="body text-sand">{service.shortDescription}</p>
                  <span className="mt-6 text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
                    Learn more
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
