import { useEffect } from 'react'
import { siteContent } from '@/data/content'

interface PageMetaProps {
  title?: string
  description?: string
  image?: string
  path?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function PageMeta({
  title,
  description,
  image,
  path = '/',
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteContent.company.name}`
      : siteContent.seo.defaultTitle
    const desc = description ?? siteContent.seo.defaultDescription
    const ogImage = image ?? siteContent.seo.ogImage
    const url = `${siteContent.seo.siteUrl}${path}`

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', ogImage)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, image, path])

  return null
}
