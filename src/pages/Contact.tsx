import { siteContent } from '@/data/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'

export function ContactPage() {
  const { contact } = siteContent

  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact Abrantepa Constructions on WhatsApp at +233 20 379 1283 to discuss architectural design, modernization, or construction plans."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your next home."
        description="Reach us on WhatsApp for a direct conversation, or share a few project details through the enquiry form."
        image="/images/gallery/gallery-09.jpg"
        actions={
          contact.whatsappUrl ? (
            <Button href={contact.whatsappUrl} variant="primary" size="lg">
              Message on WhatsApp
            </Button>
          ) : undefined
        }
      />

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="glass-panel-dark mb-6 p-6 md:p-7">
              <h2 className="headline-md">Reach Abrantepa</h2>
              <p className="body-lg mt-4 text-sand">{contact.note}</p>
            </div>

            <dl className="glass-panel-dark space-y-5 p-6 text-sm md:p-7">
              <InfoRow
                label="Phone"
                value={contact.phone}
                href={contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : undefined}
              />
              <InfoRow
                label="WhatsApp"
                value={contact.whatsapp}
                href={contact.whatsappUrl}
                external
              />
              <InfoRow
                label="Email"
                value={contact.email}
                href={contact.email ? `mailto:${contact.email}` : undefined}
              />
              <InfoRow label="Office" value={contact.address} />
              <InfoRow label="Business hours" value={contact.hours} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              {contact.whatsappUrl ? (
                <Button href={contact.whatsappUrl} size="md">
                  Chat on WhatsApp
                </Button>
              ) : null}
              <Button href="/start-a-project" variant="outline-light">
                Prefer a project brief?
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="glass-panel-dark p-6 md:p-8">
              <h2 className="headline-md text-[1.65rem]">Enquiry form</h2>
              <p className="body mt-3 mb-8 text-sand">
                All fields marked through validation are required for a clear
                first conversation.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function InfoRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string
  value?: string
  href?: string
  external?: boolean
}) {
  return (
    <div className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
      <dt className="text-[0.68rem] font-semibold tracking-[0.16em] text-stone uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-warm-white">
        {value && href ? (
          <a
            href={href}
            className="font-medium underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {value}
          </a>
        ) : (
          value || 'To be confirmed'
        )}
      </dd>
    </div>
  )
}
