import { siteContent } from '@/data/content'
import { PageMeta } from '@/components/ui/PageMeta'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectEnquiryForm } from '@/components/forms/ProjectEnquiryForm'
import { PageHero } from '@/components/ui/PageHero'

export function StartProjectPage() {
  return (
    <>
      <PageMeta
        title="Start a Project"
        description="Begin a project enquiry with Abrantepa Constructions for design, modernization, renovation, or residential construction."
        path="/start-a-project"
      />

      <PageHero
        eyebrow="Start a Project"
        title="Tell us about the home you want to create."
        description="A clear brief helps us understand whether your project involves a new build, renovation, modernization — or a combination of all three."
        image="/images/gallery/gallery-02.jpg"
      />

      <section className="section-pad surface-textured-dark text-warm-white">
        <div className="container-arch grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="glass-panel-dark p-6 md:p-7">
              <h2 className="headline-md">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {[
                  'Share your contact details and project direction.',
                  'Outline the site, build type, and priorities.',
                  'Review your brief before submitting.',
                  'Once a delivery integration is connected, your request will be routed to the team.',
                ].map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-editorial text-2xl text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="body pt-1 text-sand">{item}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-stone">
                {siteContent.forms.integrationNote}
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={100}>
            <div className="glass-panel-dark p-6 md:p-8">
              <ProjectEnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
