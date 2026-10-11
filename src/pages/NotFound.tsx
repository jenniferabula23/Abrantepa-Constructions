import { PageMeta } from '@/components/ui/PageMeta'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you requested could not be found."
        path="/404"
      />
      <section className="flex min-h-[80svh] items-center bg-ink pt-28 text-warm-white">
        <div className="container-arch section-pad">
          <p className="eyebrow mb-5 text-stone">404</p>
          <h1 className="headline-xl">This page does not exist.</h1>
          <p className="editorial mt-5 max-w-xl text-sand">
            The link may be outdated, or the page has moved. Return home to
            continue exploring Abrantepa Constructions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
