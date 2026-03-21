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
    title: `${stateObj.name} DIY Divorce Eligibility — Do You Qualify? (2026)`,
    description: `${stateObj.name} DIY divorce eligibility — residency requirements, criteria, and next steps.`,
  }
}

export default async function StateEligibilityPage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'eligibility')

  return (
    <StateGuideLayout
      stateName={stateObj.name}
      stateSlug={stateObj.slug}
      currentGuide="/eligibility"
      frontmatter={data?.frontmatter}
    >
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-6">
            {stateObj.name} DIY Divorce Eligibility
          </h1>
          <p className="font-body text-text-muted">Content coming soon.</p>
        </>
      )}
    </StateGuideLayout>
  )
}
