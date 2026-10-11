import type { Project, ProjectCategory } from '@/types/content'

/**
 * Conceptual / inspiration entries using Abrantepa visual direction imagery.
 * Set isSample: false only for approved completed company projects.
 */
export const projects: Project[] = [
  {
    id: 'earth-glass-community',
    slug: 'earth-and-glass-living',
    title: 'Earth & Glass Living',
    category: 'Conceptual',
    summary:
      'A study of terraced earth-formed dwellings with arched glass fronts — heritage construction language meeting contemporary openness.',
    concept:
      'Rounded earth volumes and living roofs set a familiar African residential rhythm, while generous glazed arches introduce light, view, and a modern living experience.',
    featured: true,
    isSample: true,
    image: '/images/gallery/gallery-01.jpg',
    imageAlt: 'Modern earth-formed hillside homes with arched glass openings',
    gallery: [
      { src: '/images/gallery/gallery-01.jpg', alt: 'Terraced earth and glass residences' },
      { src: '/images/gallery/gallery-02.jpg', alt: 'Modern entrance with natural stone' },
    ],
  },
  {
    id: 'stone-threshold',
    slug: 'stone-threshold-residence',
    title: 'Stone Threshold Residence',
    category: 'Modernization',
    summary:
      'An entrance study where natural boulders, gravel, and refined plaster create a calm contemporary arrival sequence.',
    concept:
      'Material honesty leads the design — stone, gravel, and warm timber — so the home feels rooted while reading as unmistakably modern.',
    featured: true,
    isSample: true,
    image: '/images/gallery/gallery-02.jpg',
    imageAlt: 'Modern residential entrance with boulder landscaping',
    gallery: [
      { src: '/images/gallery/gallery-02.jpg', alt: 'Stone threshold entrance' },
      { src: '/images/gallery/gallery-04.jpg', alt: 'Landscape and glass architecture' },
    ],
  },
  {
    id: 'carved-interior',
    slug: 'carved-interior-atmosphere',
    title: 'Carved Interior Atmosphere',
    category: 'Architectural Design',
    summary:
      'An interior exploration of sculpted earth textures, warm timber, and soft lighting for contemporary African living spaces.',
    concept:
      'Organic wall surfaces and glowing thresholds create a cave-like intimacy, reinterpreted for modern kitchen and gathering spaces.',
    featured: true,
    isSample: true,
    image: '/images/gallery/gallery-03.jpg',
    imageAlt: 'Sculpted modern interior with timber bar and arched window',
    gallery: [
      { src: '/images/gallery/gallery-03.jpg', alt: 'Carved kitchen and lounge atmosphere' },
      { src: '/images/gallery/gallery-11.jpg', alt: 'Multi-level carved living space' },
    ],
  },
  {
    id: 'rock-and-glow',
    slug: 'rock-and-glow-lounge',
    title: 'Rock & Glow Lounge',
    category: 'Renovation',
    summary:
      'A lounge study combining raw stone feature walls with warm yellow light — texture, contrast, and evening atmosphere.',
    concept:
      'Dramatic stone becomes the architectural anchor, while concealed lighting and glassy surfaces refine the space for contemporary living.',
    featured: false,
    isSample: true,
    image: '/images/gallery/gallery-08.jpg',
    imageAlt: 'Modern lounge with textured stone feature wall',
    gallery: [
      { src: '/images/gallery/gallery-08.jpg', alt: 'Stone lounge with warm lighting' },
      { src: '/images/gallery/gallery-07.jpg', alt: 'Dark stone media wall with gold light' },
      { src: '/images/gallery/gallery-06.jpg', alt: 'Natural rock pillar interior' },
    ],
  },
]

export const projectCategories: ProjectCategory[] = [
  'Residential',
  'Renovation',
  'Architectural Design',
  'Modernization',
  'Conceptual',
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getRelatedProjects(currentId: string, limit = 3): Project[] {
  return projects.filter((project) => project.id !== currentId).slice(0, limit)
}
