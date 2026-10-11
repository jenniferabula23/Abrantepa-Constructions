import { siteContent } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccentBar } from '@/components/ui/AccentBar'

export function Process() {
  const { process } = siteContent

  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <AccentBar className="mb-12 h-2 w-full" />
      <div className="container-wide">
        <Reveal className="mb-12">
          <div className="glass-panel-dark max-w-3xl p-7 md:p-9">
            <SectionHeading
              eyebrow={process.eyebrow}
              title={process.headline}
              description={process.body}
              tone="light"
            />
          </div>
        </Reveal>

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 50}>
              <li className="glass-panel-dark group min-h-[16rem] p-7 md:p-8">
                <span className="font-editorial text-4xl text-accent transition-colors group-hover:text-accent-hover">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-warm-white">
                  {step.title}
                </h3>
                <p className="body mt-3 text-sand">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
