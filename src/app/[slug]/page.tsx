import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import type { StateGuideType } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { JsonLd } from '@/components/JsonLd'

const GUIDE_SUFFIX_MAP: Record<string, StateGuideType> = {
  '': 'main',
  'without-children': 'without-children',
  'with-children': 'with-children',
  'filing-fees': 'filing-fees',
  'forms': 'forms',
  'timeline': 'timeline',
  'with-a-house': 'with-a-house',
  'default-divorce': 'default-divorce',
  'mistakes-to-avoid': 'mistakes-to-avoid',
  'property-division': 'property-division',
  'checklist': 'checklist',
  'faq': 'faq',
  'eligibility': 'eligibility',
}

function parseSlug(slug: string): { stateSlug: string; guideSuffix: string } | null {
  // e.g. texas-divorce-without-children
  const withGuideMatch = slug.match(/^(.+)-divorce-(.+)$/)
  if (withGuideMatch) {
    return { stateSlug: withGuideMatch[1], guideSuffix: withGuideMatch[2] }
  }
  // e.g. texas-divorce
  const mainMatch = slug.match(/^(.+)-divorce$/)
  if (mainMatch) {
    return { stateSlug: mainMatch[1], guideSuffix: '' }
  }
  return null
}

export function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const state of US_STATES) {
    for (const suffix of Object.keys(GUIDE_SUFFIX_MAP)) {
      const slug = suffix === '' ? `${state.slug}-divorce` : `${state.slug}-divorce-${suffix}`
      params.push({ slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)
  if (!parsed) return {}

  const { stateSlug, guideSuffix } = parsed
  const stateObj = US_STATES.find(s => s.slug === stateSlug)
  if (!stateObj) return {}

  const guideType = GUIDE_SUFFIX_MAP[guideSuffix]
  if (!guideType) return {}

  const data = getStateContent(stateSlug, guideType)
  const canonicalUrl = `https://solongsoulmate.com/${slug}`

  const title =
    data?.frontmatter.title ??
    `How to File for Divorce in ${stateObj.name} Without a Lawyer (2026)`
  const description =
    data?.frontmatter.description ??
    `Complete guide to ${stateObj.name} divorce — forms, fees, timelines, and step-by-step instructions.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function StateGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const parsed = parseSlug(slug)
  if (!parsed) notFound()

  const { stateSlug, guideSuffix } = parsed
  const stateObj = US_STATES.find(s => s.slug === stateSlug)
  if (!stateObj) notFound()

  const guideType = GUIDE_SUFFIX_MAP[guideSuffix]
  if (!guideType) notFound()

  const data = getStateContent(stateSlug, guideType)
  const canonicalUrl = `https://solongsoulmate.com/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      data?.frontmatter.title ??
      `How to File for Divorce in ${stateObj.name} Without a Lawyer (2026)`,
    description:
      data?.frontmatter.description ??
      `Complete guide to ${stateObj.name} divorce.`,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'SoLongSoulmate.com',
      url: 'https://solongsoulmate.com',
    },
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  }

  // currentGuide passed to layout is '' for main or '-without-children' etc. (dash-prefixed)
  const currentGuide = guideSuffix === '' ? '' : `-${guideSuffix}`

  return (
    <>
      <JsonLd data={jsonLd} />
      <StateGuideLayout
        stateName={stateObj.name}
        stateSlug={stateObj.slug}
        currentGuide={currentGuide}
        frontmatter={data?.frontmatter}
      >
        {data ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {data.content}
          </ReactMarkdown>
        ) : (
          <div>
            <p className="section-eyebrow">State Guide</p>
            <h1 className="font-display text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
              How to File for Divorce in {stateObj.name} Without a Lawyer
            </h1>
            <p className="font-body text-text-muted text-base leading-relaxed">
              Full guide coming soon. Check back shortly or{' '}
              <a href="/divorce-by-state" className="text-gold hover:text-gold-dark">
                browse all state guides
              </a>.
            </p>
          </div>
        )}
      </StateGuideLayout>
    </>
  )
}
