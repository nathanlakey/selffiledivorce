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

  const currentYear = new Date().getFullYear()
  const title = guideType === 'main'
    ? (data?.frontmatter.title ?? `How to File for Divorce in ${stateObj.name} Without a Lawyer`) +
      (data?.frontmatter.title?.includes(String(currentYear)) ? '' : ` (${currentYear})`)
    : (data?.frontmatter.title ?? `How to File for Divorce in ${stateObj.name} Without a Lawyer (${currentYear})`)
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

  const faqJsonLd = guideType === 'main' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How long does divorce take in ${stateObj.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data?.frontmatter.waitPeriod
            ? `The mandatory waiting period in ${stateObj.name} is ${data.frontmatter.waitPeriod}. Uncontested divorces typically finalize in 2–6 months total.`
            : `Uncontested divorces in ${stateObj.name} typically finalize in 2–6 months.`
        }
      },
      {
        '@type': 'Question',
        name: `How much does it cost to file for divorce in ${stateObj.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data?.frontmatter.filingFee
            ? `The court filing fee in ${stateObj.name} is ${data.frontmatter.filingFee}. A complete DIY divorce typically costs $300–$700 including all fees.`
            : `Filing fees vary by county in ${stateObj.name}. A complete DIY divorce typically costs $300–$700.`
        }
      },
      {
        '@type': 'Question',
        name: `Do I need a lawyer to get divorced in ${stateObj.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You do not need a lawyer to file for divorce in ${stateObj.name} if both spouses agree on all terms. ${stateObj.name} provides free official court forms for self-represented filers.`
        }
      }
    ]
  } : null

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://solongsoulmate.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Divorce by State',
        item: 'https://solongsoulmate.com/divorce-by-state'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${stateObj.name} Divorce Guide`,
        item: `https://solongsoulmate.com/${slug}`
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <JsonLd data={breadcrumbJsonLd} />
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
