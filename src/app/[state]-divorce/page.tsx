import { US_STATES } from '@/lib/states'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}

  return {
    title: `How to File for Divorce in ${stateObj.name} Without a Lawyer (2026)`,
    description: `Complete guide to ${stateObj.name} divorce — step-by-step filing instructions, forms, fees, timelines, property division, and more. Free, updated 2026.`,
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

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="section-eyebrow">State Guide</p>
      <h1 className="font-display text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
        How to File for Divorce in {stateObj.name} Without a Lawyer
      </h1>
      <p className="font-body text-text-muted text-lg leading-relaxed">
        Content for {stateObj.name} coming soon. Full guide with forms, fees, timeline, and step-by-step instructions.
      </p>
    </div>
  )
}
