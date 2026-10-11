import type { SiteContent } from '@/types/content'
import { services } from './services'
import { projects } from './projects'

export const siteContent: SiteContent = {
  company: {
    name: 'Abrantepa Constructions',
    shortName: 'Abrantepa',
    founder: 'Emmanuel Abula',
    founderTitle: 'Founder and CEO',
    tagline: 'Redefining the Modern Touch.',
    philosophy:
      'Reimagining traditional African homes through thoughtful modernization, contemporary architectural design, and high-quality construction.',
  },
  seo: {
    siteUrl: 'https://abrantepa.example',
    defaultTitle: 'Abrantepa Constructions | Redefining the Modern Touch',
    defaultDescription:
      'Abrantepa Constructions reimagines traditional African homes through contemporary architectural design, modernization, and quality construction.',
    ogImage: '/images/hero-poster.jpg',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  hero: {
    label: 'ABRANTEPA CONSTRUCTIONS',
    headline: 'Redefining the Modern Touch.',
    description:
      'Where African architectural heritage meets contemporary living.',
    videoSrc: '/video/hero.mp4',
    posterSrc: '/images/hero-poster.jpg',
    heritageImage: '/images/hero-heritage.jpg',
    modernImage: '/images/gallery/gallery-01.jpg',
    primaryCta: { label: 'Explore Our Vision', href: '/about' },
    secondaryCta: { label: 'Start a Project', href: '/start-a-project' },
  },
  brandIntro: {
    eyebrow: 'Our Philosophy',
    headline: 'Honouring Our Roots. Reimagining Our Spaces.',
    body: 'Thoughtful architectural design can transform familiar African homes into contemporary spaces while respecting their character and cultural identity. Abrantepa Constructions works at that intersection — where memory, craftsmanship, and modern living meet.',
    image: '/images/gallery/gallery-04.jpg',
    imageAlt:
      'Contemporary glass architecture with natural stone landscaping',
    cta: { label: 'About Abrantepa', href: '/about' },
  },
  transformation: {
    eyebrow: 'Architectural Transformation',
    headline: 'Old Foundations. New Perspectives.',
    body: 'From the familiar African hut to a modernized dwelling — the same rooted form, renewed with light, refined materials, and contemporary living.',
    disclaimer:
      'Images shown are conceptual architectural inspiration, not completed Abrantepa Constructions projects.',
    beforeImage: '/images/hut-traditional.jpg',
    afterImage: '/images/hut-modern.jpg',
    beforeLabel: 'Traditional Hut',
    afterLabel: 'Modernized Hut',
  },
  philosophy: {
    eyebrow: 'Design Thinking',
    headline: 'Modern African architecture does not need to abandon its roots.',
    body: 'The future of the African home can be both culturally grounded and unmistakably contemporary. We design with respect for identity, while pursuing clarity, comfort, and enduring craftsmanship.',
    themes: [
      'Cultural identity',
      'Contemporary aesthetics',
      'Functional living',
      'Thoughtful space planning',
      'Quality craftsmanship',
      'Enduring design',
    ],
    image: '/images/gallery/gallery-06.jpg',
    imageAlt: 'Natural stone pillar in a modern interior setting',
  },
  process: {
    eyebrow: 'How We Work',
    headline: 'A clear journey from conversation to completion.',
    body: 'This proposed process can be adapted to each project. It is designed to keep communication clear and design intent present from the first discussion through handover.',
    steps: [
      {
        number: '01',
        title: 'Initial Consultation',
        description:
          'We begin with your vision, site context, and the kind of transformation you hope to achieve.',
      },
      {
        number: '02',
        title: 'Brief and Site Assessment',
        description:
          'Needs, constraints, and opportunities are clarified so the design response remains grounded and realistic.',
      },
      {
        number: '03',
        title: 'Concept Development',
        description:
          'Ideas take form through spatial concepts, architectural direction, and early material thinking.',
      },
      {
        number: '04',
        title: 'Design and Planning',
        description:
          'The concept is refined into a clearer design framework to guide decisions and construction conversations.',
      },
      {
        number: '05',
        title: 'Project Execution',
        description:
          'Construction and coordination move forward with attention to detailing, quality, and the original intent.',
      },
      {
        number: '06',
        title: 'Final Review and Handover',
        description:
          'The completed work is reviewed with care before the home is returned to everyday life.',
      },
    ],
  },
  founder: {
    eyebrow: 'Leadership',
    name: 'Emmanuel Abula',
    title: 'Founder and CEO',
    body: 'Emmanuel Abula founded Abrantepa Constructions with a clear conviction: African homes deserve architectural futures that feel modern without becoming unfamiliar. His vision centres on creativity, thoughtful construction, and spaces that honour where they come from.',
    biographyNote:
      'Full biography forthcoming. Replace this placeholder with Emmanuel Abula’s approved professional narrative.',
    image: '/images/ceo-emmanuel-abula.jpg',
    imageAlt: 'Emmanuel Abula, Founder and CEO of Abrantepa Constructions, in a navy suit',
    cta: { label: 'Read More About Us', href: '/about' },
  },
  closingCta: {
    headline: 'Your Vision. A New Perspective.',
    body: 'Whether you are planning a new home, modernizing a familiar residence, or exploring architectural possibilities, we are ready for the conversation.',
    image: '/images/gallery/gallery-08.jpg',
    primaryCta: { label: 'Start a Project', href: '/start-a-project' },
    secondaryCta: { label: 'Contact Us', href: '/contact' },
  },
  about: {
    heroEyebrow: 'About Abrantepa',
    heroHeadline: 'Architecture rooted in identity. Designed for today.',
    heroBody:
      'Abrantepa Constructions is an architectural design and construction practice dedicated to reimagining traditional African homes through contemporary thinking, refined craftsmanship, and a deep respect for cultural character.',
    heroImage: '/images/gallery/gallery-11.jpg',
    vision: {
      title: 'Vision',
      body: 'To shape a new generation of African residential architecture — homes that feel contemporary in experience while remaining connected to the forms, rhythms, and identities that give them meaning.',
    },
    mission: {
      title: 'Mission',
      body: 'To deliver thoughtful architectural design, modernization, and construction solutions that elevate everyday living without erasing the character of the places people call home.',
    },
    modernTouch: {
      title: 'The meaning of “Redefining the Modern Touch”',
      body: 'Modern, for us, is not a borrowed aesthetic. It is a careful renewal of how African homes can look, feel, and function — clearer proportions, better light, refined finishes, and spaces composed for contemporary life, while keeping cultural familiarity intact.',
    },
    approach: {
      title: 'Our approach to African architectural modernization',
      body: 'We begin with what already exists in memory and form: compound relationships, entrance sequences, outdoor living, material honesty, and family life. From there, we introduce contemporary spatial clarity and construction quality — never as erasure, always as evolution.',
    },
    values: [
      {
        title: 'Thoughtful design',
        description:
          'Every intervention should feel intentional, composed, and useful.',
      },
      {
        title: 'Cultural appreciation',
        description:
          'Familiar architectural character is treated as a foundation, not an obstacle.',
      },
      {
        title: 'Functionality',
        description:
          'Beauty must serve the way people actually live, gather, and move through space.',
      },
      {
        title: 'Craftsmanship',
        description:
          'Details, materials, and finishes are where design becomes believable.',
      },
      {
        title: 'Integrity',
        description:
          'Clear communication and honest process build trust across every stage.',
      },
      {
        title: 'Client collaboration',
        description:
          'The strongest homes emerge from listening closely and designing together.',
      },
    ],
  },
  contact: {
    phone: '+233 20 379 1283',
    whatsapp: '+233 20 379 1283',
    whatsappUrl: 'https://wa.me/233203791283',
    email: undefined,
    address: undefined,
    hours: undefined,
    note: 'Call or message Abrantepa Constructions directly on WhatsApp, or use the enquiry form below.',
  },
  social: [],
  footer: {
    brandStatement:
      'Redefining the modern touch by bringing new architectural possibilities to African homes.',
    copyright: `© ${new Date().getFullYear()} Abrantepa Constructions. All rights reserved.`,
  },
  forms: {
    contactSuccess:
      'Your enquiry has been prepared successfully. Connect a form backend or email service to deliver submissions.',
    projectSuccess:
      'Your project request has been prepared successfully. Connect a form backend or CRM to activate delivery.',
    integrationNote:
      'Forms are development-ready. See README for email, backend, or CRM integration steps.',
  },
  projectsEmpty: {
    title: 'Projects are being prepared',
    body: 'Authentic Abrantepa Constructions project photography and case studies will appear here. Until then, conceptual studies may be shown clearly labelled as inspiration.',
  },
}

export { services, projects }
