import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteContent } from '@/data/content'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const { hero } = siteContent
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    const play = async () => {
      try {
        await video.play()
      } catch {
        setVideoFailed(true)
      }
    }

    void play()
  }, [reducedMotion])

  const showVideo = !reducedMotion && !videoFailed

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-warm-white">
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={hero.modernImage || hero.posterSrc}
            onError={() => setVideoFailed(true)}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.modernImage || hero.posterSrc}
            alt="Architectural atmosphere for Abrantepa Constructions"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,185,35,0.14),transparent_45%)]" />
      </div>

      <div className="container-wide relative z-10 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-[0.7rem] font-semibold tracking-[0.32em] text-accent uppercase">
            {hero.label}
          </p>
          <h1 className="headline-xl animate-fade-up delay-1 mt-6 text-balance">
            {hero.headline}
          </h1>
          <p className="editorial animate-fade-up delay-2 mt-6 max-w-xl text-sand/95">
            {hero.description}
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <a
          href="#brand-intro"
          className="animate-fade-in delay-4 mt-16 inline-flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.22em] text-warm-white/70 uppercase transition-colors hover:text-accent"
        >
          <span className="scroll-indicator-dot inline-flex h-8 w-5 items-start justify-center rounded-full border border-warm-white/35 pt-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Scroll
          <ChevronDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
