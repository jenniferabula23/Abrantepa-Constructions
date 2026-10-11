import { cn } from '@/utils/cn'

export function AccentBar({ className }: { className?: string }) {
  return <div className={cn('accent-textured', className)} aria-hidden="true" />
}
