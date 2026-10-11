import {
  useCallback,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { cn } from '@/utils/cn'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const labelId = useId()

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(96, Math.max(4, next)))
  }, [])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return
    updateFromClientX(event.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div className={cn('relative', className)}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden bg-graphite select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="img"
        aria-label={`${beforeAlt}. ${afterAlt}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${afterImage}")` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${beforeImage}")`,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-y-0 z-10 w-px bg-accent"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-ink text-accent shadow-lg">
            <span className="text-sm font-semibold tracking-widest">||</span>
          </div>
        </div>

        <span className="absolute top-4 left-4 z-10 bg-ink/75 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-warm-white uppercase backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="absolute top-4 right-4 z-10 bg-ink/75 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-warm-white uppercase backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      <label htmlFor={labelId} className="sr-only">
        Compare traditional hut and modernized hut
      </label>
      <input
        id={labelId}
        type="range"
        min={4}
        max={96}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-4 w-full accent-accent"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(position)}
        aria-label="Reveal modernized hut"
      />
    </div>
  )
}
