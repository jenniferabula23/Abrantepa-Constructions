import { Button } from './Button'
import { Reveal } from './Reveal'
import type { CtaLink } from '@/types/content'

interface CTASectionProps {
  headline: string
  body: string
  image: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
}

export function CTASection({
  headline,
  body,
  image,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="accent-textured absolute inset-x-0 top-0 h-3" aria-hidden="true" />
      <div className="relative overflow-hidden bg-ink text-warm-white">
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-55"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
          <div
            className="absolute inset-0 opacity-30 mix-blend-soft-light"
            style={{
              backgroundImage: "url('/images/texture-organic.jpg')",
              backgroundSize: '640px',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container-arch section-pad relative">
          <Reveal>
            <div className="glass-panel-dark max-w-2xl p-8 md:p-10">
              <p className="eyebrow mb-5 text-stone">Begin the Conversation</p>
              <h2 className="headline-lg text-balance">{headline}</h2>
              <p className="body-lg mt-5 text-sand">{body}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
                <Button href={secondaryCta.href} variant="outline-light" size="lg">
                  {secondaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="accent-textured h-16 md:h-20" aria-hidden="true" />
    </section>
  )
}
