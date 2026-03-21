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
  return {
    title: `${stateObj.name} Divorce FAQ — 35 Common Questions Answered (2026)`,
    description: `${stateObj.name} divorce FAQ — residency, fees, timeline, property, custody, and more.`,
  }
}

export default async function StateFaqPage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'faq')

  return (
    <StateGuideLayout
      stateName={stateObj.name}
      stateSlug={stateObj.slug}
      currentGuide="/faq"
      frontmatter={data?.frontmatter}
    >
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-6">
            {stateObj.name} Divorce FAQ
          </h1>
          <p className="font-body text-text-muted">Content coming soon.</p>
        </>
      )}
    </StateGuideLayout>
  )
}
