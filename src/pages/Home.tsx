import { PageMeta } from '@/components/ui/PageMeta'
import { CTASection } from '@/components/ui/CTASection'
import { Hero } from '@/components/home/Hero'
import { BrandIntro } from '@/components/home/BrandIntro'
import { Transformation } from '@/components/home/Transformation'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Philosophy } from '@/components/home/Philosophy'
import { Process } from '@/components/home/Process'
import { FounderIntro } from '@/components/home/FounderIntro'
import { siteContent } from '@/data/content'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description={siteContent.seo.defaultDescription}
        path="/"
      />
      <Hero />
      <BrandIntro />
      <Transformation />
      <ServicesOverview />
      <FeaturedProjects />
      <Philosophy />
      <Process />
      <FounderIntro />
      <CTASection {...siteContent.closingCta} />
    </>
  )
}
