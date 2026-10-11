import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={
        reduced
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
