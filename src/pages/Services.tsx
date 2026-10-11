import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services, siteContent } from '@/data/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { PageHero } from '@/components/ui/PageHero'

export function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <>
      <PageMeta
        title="Services"
        description="Architectural design, traditional home modernization, residential construction, renovation, and project coordination from Abrantepa Constructions."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        title="Design and construction for homes ready to evolve."
        description="From architectural planning to modernization and execution, each service is oriented around thoughtful transformation — not generic building."
        image="/images/gallery/gallery-03.jpg"
      />

      <section className="surface-textured-dark text-warm-white">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-white/10"
          >
            <div className="container-wide section-pad grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="img-cover"
                    width={1200}
                    height={900}
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className={index % 2 === 1 ? 'lg:order-1' : undefined}
              >
                <div className="glass-panel-dark p-7 md:p-9">
                  <p className="eyebrow mb-4 text-stone">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="headline-lg text-balance">{service.title}</h2>
                  <p className="body-lg mt-5 text-sand">{service.description}</p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
                        Benefits
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.benefits.map((item) => (
                          <li
                            key={item}
                            className="body border-l border-accent pl-3 text-sand"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] text-warm-white uppercase">
                        Typical Considerations
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.considerations.map((item) => (
                          <li
                            key={item}
                            className="body border-l border-white/20 pl-3 text-sand"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-9">
                    <Button href="/start-a-project" size="md">
                      Discuss This Service
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <CTASection {...siteContent.closingCta} />
    </>
  )
}
