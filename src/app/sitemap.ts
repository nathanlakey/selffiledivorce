import type { MetadataRoute } from 'next'
import { US_STATES } from '@/lib/states'

const BASE = 'https://solongsoulmate.com'

const STATIC_ROUTES = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/divorce-by-state', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/do-i-need-a-lawyer', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/best-online-divorce-services', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/divorce-cost-by-state', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/divorce-timeline-by-state', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/divorce-forms-by-state', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/what-is-a-marital-settlement-agreement', priority: 0.7, changeFrequency: 'yearly' as const },
  { url: '/how-to-serve-divorce-papers', priority: 0.7, changeFrequency: 'yearly' as const },
  { url: '/about', priority: 0.3, changeFrequency: 'yearly' as const },
  { url: '/disclaimer', priority: 0.2, changeFrequency: 'yearly' as const },
  { url: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' as const },
  { url: '/terms-of-service', priority: 0.2, changeFrequency: 'yearly' as const },
]

const STATE_SUB_ROUTES = [
  '',
  '/eligibility',
  '/filing-fees',
  '/timeline',
  '/checklist',
  '/forms',
  '/with-children',
  '/without-children',
  '/property-division',
  '/with-a-house',
  '/default-divorce',
  '/mistakes-to-avoid',
  '/faq',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(r => ({
    url: `${BASE}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const stateEntries = US_STATES.flatMap(state =>
    STATE_SUB_ROUTES.map((sub, i) => ({
      url: `${BASE}/${state.slug}-divorce${sub}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: i === 0 ? 0.8 : 0.6,
    }))
  )

  return [...staticEntries, ...stateEntries]
}
