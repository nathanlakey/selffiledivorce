import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}

  const data = getStateContent(state, 'main')
  const title = data?.frontmatter.title ?? `How to File for Divorce in ${stateObj.name} Without a Lawyer (2026)`
  const description = data?.frontmatter.description ?? `Complete guide to ${stateObj.name} divorce — forms, fees, timelines, and step-by-step instructions.`

  return {
    title,
    description,
    openGraph: { title, description },
  }
}

export default async function StateDivorcePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'main')

  return (
    <StateGuideLayout
      stateName={stateObj.name}
      stateSlug={stateObj.slug}
      currentGuide=""
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
  )
}
