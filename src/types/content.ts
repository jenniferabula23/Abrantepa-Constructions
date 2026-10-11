export interface NavLink {
  label: string
  href: string
}

export interface CtaLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  considerations: string[]
  image: string
  imageAlt: string
}

export type ProjectCategory =
  | 'Residential'
  | 'Renovation'
  | 'Architectural Design'
  | 'Modernization'
  | 'Conceptual'

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  location?: string
  summary: string
  concept?: string
  challenges?: string
  solutions?: string
  featured: boolean
  isSample: boolean
  image: string
  imageAlt: string
  gallery?: { src: string; alt: string }[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ValueItem {
  title: string
  description: string
}

export interface ContactInfo {
  phone?: string
  whatsapp?: string
  /** Direct WhatsApp chat URL, e.g. https://wa.me/233203791283 */
  whatsappUrl?: string
  email?: string
  address?: string
  hours?: string
  note: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface SiteContent {
  company: {
    name: string
    shortName: string
    founder: string
    founderTitle: string
    tagline: string
    philosophy: string
  }
  seo: {
    siteUrl: string
    defaultTitle: string
    defaultDescription: string
    ogImage: string
  }
  navigation: NavLink[]
  hero: {
    label: string
    headline: string
    description: string
    videoSrc: string
    posterSrc: string
    heritageImage: string
    modernImage: string
    primaryCta: CtaLink
    secondaryCta: CtaLink
  }
  brandIntro: {
    eyebrow: string
    headline: string
    body: string
    image: string
    imageAlt: string
    cta: CtaLink
  }
  transformation: {
    eyebrow: string
    headline: string
    body: string
    disclaimer: string
    beforeImage: string
    afterImage: string
    beforeLabel: string
    afterLabel: string
  }
  philosophy: {
    eyebrow: string
    headline: string
    body: string
    themes: string[]
    image: string
    imageAlt: string
  }
  process: {
    eyebrow: string
    headline: string
    body: string
    steps: ProcessStep[]
  }
  founder: {
    eyebrow: string
    name: string
    title: string
    body: string
    biographyNote: string
    image: string
    imageAlt: string
    cta: CtaLink
  }
  closingCta: {
    headline: string
    body: string
    image: string
    primaryCta: CtaLink
    secondaryCta: CtaLink
  }
  about: {
    heroEyebrow: string
    heroHeadline: string
    heroBody: string
    heroImage: string
    vision: { title: string; body: string }
    mission: { title: string; body: string }
    modernTouch: { title: string; body: string }
    approach: { title: string; body: string }
    values: ValueItem[]
  }
  contact: ContactInfo
  social: SocialLink[]
  footer: {
    brandStatement: string
    copyright: string
  }
  forms: {
    contactSuccess: string
    projectSuccess: string
    integrationNote: string
  }
  projectsEmpty: {
    title: string
    body: string
  }
}
