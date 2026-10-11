import { Link } from 'react-router-dom'
import { siteContent, services } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 surface-textured-dark text-warm-white">
      <div className="accent-textured h-2 w-full" aria-hidden="true" />
      <div className="container-wide section-pad grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Abrantepa logo"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-accent/40"
              width={56}
              height={56}
            />
            <span>
              <span className="block font-display text-lg font-bold tracking-[0.1em] uppercase">
                Abrantepa
              </span>
              <span className="mt-1 block text-[0.65rem] tracking-[0.28em] text-stone uppercase">
                Constructions
              </span>
            </span>
          </Link>
          <p className="body mt-6 max-w-xs text-sand">
            {siteContent.footer.brandStatement}
          </p>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-sand transition-colors hover:text-warm-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/start-a-project"
                className="text-sm text-sand transition-colors hover:text-warm-white"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services#${service.id}`}
                  className="text-sm text-sand transition-colors hover:text-warm-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </h2>
          <div className="mt-5 space-y-3 text-sm text-sand">
            {siteContent.contact.email ? (
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="block transition-colors hover:text-warm-white"
              >
                {siteContent.contact.email}
              </a>
            ) : (
              <p>Email: to be confirmed</p>
            )}
            {siteContent.contact.phone ? (
              <a
                href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`}
                className="block transition-colors hover:text-warm-white"
              >
                {siteContent.contact.phone}
              </a>
            ) : (
              <p>Phone: to be confirmed</p>
            )}
            {siteContent.contact.whatsappUrl ? (
              <a
                href={siteContent.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-warm-white"
              >
                WhatsApp: {siteContent.contact.whatsapp}
              </a>
            ) : null}
            {siteContent.contact.address ? (
              <p>{siteContent.contact.address}</p>
            ) : (
              <p>Office location: to be confirmed</p>
            )}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
              {siteContent.contact.whatsappUrl ? (
                <a
                  href={siteContent.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  Chat on WhatsApp
                </a>
              ) : null}
              <Link
                to="/contact"
                className="text-accent transition-colors hover:text-accent-hover"
              >
                Send an enquiry
              </Link>
            </div>
          </div>

          {siteContent.social.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4">
              {siteContent.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sand hover:text-warm-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs tracking-[0.08em] text-stone uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.footer.copyright}</p>
          <p className="text-stone/80 normal-case tracking-normal">
            Privacy Policy and Terms pages forthcoming.
          </p>
        </div>
      </div>
    </footer>
  )
}
