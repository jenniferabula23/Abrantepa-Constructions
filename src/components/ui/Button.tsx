import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light' | 'outline-dark'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps & {
  href: string
  type?: never
  disabled?: boolean
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-ink hover:bg-accent-hover border border-accent shadow-[0_0_0_0_transparent] hover:-translate-y-0.5',
  secondary:
    'bg-ink text-warm-white hover:bg-charcoal border border-ink hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-warm-white border border-warm-white/35 hover:border-accent hover:text-accent',
  'outline-light':
    'bg-transparent text-warm-white border border-warm-white/40 hover:bg-warm-white hover:text-ink',
  'outline-dark':
    'bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-warm-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.14em]',
  md: 'px-6 py-3 text-[0.7rem] tracking-[0.16em]',
  lg: 'px-8 py-3.5 text-[0.72rem] tracking-[0.18em]',
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...rest
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in props && props.href) {
    const external = props.href.startsWith('http') || props.href.startsWith('mailto:')
    if (external) {
      return (
        <a href={props.href} className={classes} onClick={props.onClick}>
          {children}
        </a>
      )
    }

    return (
      <Link to={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
