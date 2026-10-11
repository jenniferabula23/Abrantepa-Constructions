import { siteContent } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'

export function Philosophy() {
  const { philosophy } = siteContent

  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="accent-textured absolute -top-3 -left-3 h-full w-full" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={philosophy.image}
                alt={philosophy.imageAlt}
                className="img-cover"
                width={1200}
                height={1500}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-panel-dark p-7 md:p-10">
            <p className="eyebrow mb-5 text-stone">{philosophy.eyebrow}</p>
            <h2 className="headline-lg text-balance">{philosophy.headline}</h2>
            <p className="editorial mt-6 text-sand">{philosophy.body}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {philosophy.themes.map((theme) => (
                <li
                  key={theme}
                  className="border-l-2 border-accent pl-4 text-sm font-medium tracking-[0.04em] text-warm-white"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
