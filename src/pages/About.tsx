import { siteContent } from '@/data/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { CTASection } from '@/components/ui/CTASection'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { AccentBar } from '@/components/ui/AccentBar'

export function AboutPage() {
  const { about, founder, company } = siteContent

  return (
    <>
      <PageMeta
        title="About"
        description="Learn about Abrantepa Constructions, founded by Emmanuel Abula, and our approach to modernizing African homes."
        path="/about"
      />

      <section className="section-pad surface-textured-dark pt-28 text-warm-white md:pt-36">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                className="accent-textured absolute -top-3 -left-3 h-full w-full"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="img-cover object-top"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-panel-dark p-7 md:p-9">
              <p className="eyebrow mb-5 text-stone">Founder and CEO</p>
              <h1 className="headline-lg">{founder.name}</h1>
              <p className="mt-2 text-sm tracking-[0.16em] text-sand uppercase">
                {founder.title}, {company.name}
              </p>
              <p className="body-lg mt-6 text-sand">{founder.body}</p>
              <p className="mt-4 text-sm text-stone italic">
                {founder.biographyNote}
              </p>
            </div>
          </Reveal>
        </div>
        <AccentBar className="mt-16 h-3" />
      </section>

      <PageHero
        eyebrow={about.heroEyebrow}
        title={about.heroHeadline}
        description={about.heroBody}
        image={about.heroImage}
      />

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-arch grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="glass-panel-dark h-full p-7 md:p-9">
              <span className="mb-5 block h-1 w-14 accent-textured" />
              <h2 className="headline-md">{about.vision.title}</h2>
              <p className="body-lg mt-4 text-sand">{about.vision.body}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="glass-panel-dark h-full p-7 md:p-9">
              <span className="mb-5 block h-1 w-14 bg-warm-white/40" />
              <h2 className="headline-md">{about.mission.title}</h2>
              <p className="body-lg mt-4 text-sand">{about.mission.body}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-narrow">
          <Reveal>
            <div className="glass-panel-dark p-7 md:p-10">
              <p className="eyebrow mb-5 text-stone">Brand Philosophy</p>
              <h2 className="headline-lg text-balance">
                {about.modernTouch.title}
              </h2>
              <p className="editorial mt-6 text-sand">{about.modernTouch.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-arch">
          <Reveal className="mb-12">
            <div className="glass-panel-dark max-w-2xl p-7 md:p-9">
              <p className="eyebrow mb-5 text-stone">Our Approach</p>
              <h2 className="headline-lg text-balance">{about.approach.title}</h2>
              <p className="body-lg mt-5 text-sand">{about.approach.body}</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {about.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <article className="glass-panel-dark p-7">
                  <span className="mb-4 block h-px w-10 bg-accent" />
                  <h3 className="font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="body mt-3 text-sand">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Button href="/start-a-project" size="lg">
              Start a Project
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection {...siteContent.closingCta} />
    </>
  )
}
