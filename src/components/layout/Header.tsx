import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteContent } from '@/data/content'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export function Header() {
  const scrolled = useScrollPosition(20)
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || open

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          solid
            ? 'border-b border-white/10 bg-ink/80 text-warm-white shadow-[0_10px_40px_rgba(10,10,10,0.35)] backdrop-blur-xl'
            : 'bg-transparent text-warm-white',
        )}
      >
        <div className="container-wide flex h-[4.75rem] items-center justify-between gap-6 md:h-[5.5rem]">
          <Link
            to="/"
            className="relative z-[60] flex items-center gap-3"
            aria-label={`${siteContent.company.name} home`}
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/logo.jpg"
              alt="Abrantepa logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-accent/50 md:h-14 md:w-14"
              width={56}
              height={56}
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[0.95rem] font-bold tracking-[0.08em] uppercase md:text-[1.05rem]">
                Abrantepa
              </span>
              <span className="mt-1 text-[0.58rem] tracking-[0.24em] text-sand uppercase">
                Constructions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'relative text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors',
                    isActive
                      ? 'text-warm-white'
                      : 'text-warm-white/65 hover:text-warm-white',
                    'after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300',
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/start-a-project" size="sm">
              Start a Project
            </Button>
          </div>

          <button
            type="button"
            className="relative z-[70] inline-flex h-11 w-11 items-center justify-center border border-warm-white/25 bg-ink/40 text-warm-white backdrop-blur-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Keep drawer outside header so backdrop-filter does not trap fixed positioning */}
      <div
        className={cn(
          'fixed inset-0 z-[55] bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={cn(
          'fixed inset-y-0 right-0 z-[60] flex w-[min(100%,22rem)] flex-col border-l border-white/10 bg-ink text-warm-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-[4.75rem] items-center justify-between border-b border-white/10 px-6 md:h-[5.5rem]">
          <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase">
            Menu
          </span>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-warm-white"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="accent-textured h-1.5 w-full" aria-hidden="true" />

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-6" aria-label="Mobile">
          {siteContent.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'border-b border-white/10 py-4 text-sm font-semibold tracking-[0.18em] uppercase transition-colors',
                  isActive ? 'text-accent' : 'text-sand hover:text-warm-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-8 space-y-3 pb-8">
            <Button
              href="/start-a-project"
              className="w-full"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Button>
            {siteContent.contact.whatsappUrl ? (
              <Button
                href={siteContent.contact.whatsappUrl}
                variant="outline-light"
                className="w-full"
                size="lg"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </Button>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  )
}
