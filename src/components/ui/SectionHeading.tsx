import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'eyebrow mb-5',
            align === 'center' && 'justify-center',
            tone === 'light' && 'text-stone',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'headline-lg text-balance',
          tone === 'light' ? 'text-warm-white' : 'text-ink',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'body-lg mt-5 max-w-2xl',
            align === 'center' && 'mx-auto',
            tone === 'light' ? 'text-sand' : 'text-concrete',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
