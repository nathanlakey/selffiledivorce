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
    title: `${stateObj.name} Default Divorce — What Happens If Your Spouse Doesn't Respond?`,
    description: `${stateObj.name} default divorce when your spouse doesn't respond. Steps, timeline, and what the court decides.`,
  }
}

export default async function StateDefaultDivorcePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'default-divorce')

  return (
    <StateGuideLayout
      stateName={stateObj.name}
      stateSlug={stateObj.slug}
      currentGuide="/default-divorce"
      frontmatter={data?.frontmatter}
    >
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-6">
            {stateObj.name} Default Divorce
          </h1>
          <p className="font-body text-text-muted">Content coming soon.</p>
        </>
      )}
    </StateGuideLayout>
  )
}
