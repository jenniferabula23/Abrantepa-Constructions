import type { ProjectCategory } from '@/types/content'
import { cn } from '@/utils/cn'

interface ProjectFilterProps {
  categories: Array<ProjectCategory | 'All'>
  active: ProjectCategory | 'All'
  onChange: (category: ProjectCategory | 'All') => void
  tone?: 'light' | 'dark'
}

export function ProjectFilter({
  categories,
  active,
  onChange,
  tone = 'light',
}: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {categories.map((category) => {
        const isActive = active === category
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              'border px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-colors',
              isActive
                ? 'border-accent bg-accent text-ink'
                : tone === 'dark'
                  ? 'border-white/20 bg-transparent text-sand hover:border-accent hover:text-warm-white'
                  : 'border-ink/15 bg-transparent text-concrete hover:border-ink hover:text-ink',
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
