import { siteContent } from '@/data/content'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Transformation() {
  const { transformation } = siteContent

  return (
    <section className="section-pad surface-textured-dark text-warm-white">
      <div className="container-wide">
        <Reveal>
          <div className="glass-panel-dark mb-10 p-7 md:p-9">
            <SectionHeading
              eyebrow={transformation.eyebrow}
              title={transformation.headline}
              description={transformation.body}
              tone="light"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(10,10,10,0.35)]">
            <BeforeAfterSlider
              beforeImage={transformation.beforeImage}
              afterImage={transformation.afterImage}
              beforeLabel={transformation.beforeLabel}
              afterLabel={transformation.afterLabel}
              beforeAlt="Conceptual traditional African hut in a rural setting"
              afterAlt="Conceptual modernized African hut with contemporary materials and glass"
            />
          </div>
          <p className="mt-4 text-sm text-stone italic">
            {transformation.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
