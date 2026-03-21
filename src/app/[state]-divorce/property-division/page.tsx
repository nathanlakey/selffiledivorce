import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { STATE_COST_DATA, COMMUNITY_PROPERTY_STATES } from '@/lib/stateData'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}
  return {
    title: `${stateObj.name} Divorce Property Division — How Assets Are Split`,
    description: `${stateObj.name} divorce property division — marital vs. separate property, division standard, and what courts consider.`,
  }
}

export default async function StatePropertyDivisionPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'property-division')
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/property-division" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Property Division</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <div className={`rounded-sm p-6 border-l-4 mb-10 ${isCommunity ? 'bg-[#fdf9f0] border-gold' : 'bg-[#f0f6ff] border-[#4a7ab5]'}`}>
            <p className={`font-body text-[11px] font-bold tracking-[2px] uppercase mb-2 ${isCommunity ? 'text-gold' : 'text-[#4a7ab5]'}`}>
              {isCommunity ? 'Community Property State' : 'Equitable Distribution State'}
            </p>
            <h2 className="font-display text-xl font-bold text-navy mb-2">
              {isCommunity ? `${stateObj.name} divides marital property 50/50` : `${stateObj.name} divides marital property fairly — not necessarily equally`}
            </h2>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              {isCommunity
                ? `As a community property state, ${stateObj.name} treats most property and debt acquired during the marriage as jointly owned — split equally (50/50) at divorce. Property you owned before marriage or received as a gift or inheritance is generally separate property.`
                : `As an equitable distribution state, ${stateObj.name} courts divide marital property in a way they consider fair and just — which often (but not always) means roughly equal. Courts weigh many factors including the length of the marriage, each spouse's income, contributions, and needs.`
              }
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Marital Property vs. Separate Property</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-cream border border-border rounded-sm p-5">
              <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#c0392b] mb-3">Marital Property (divided at divorce)</p>
              <ul className="font-body text-sm text-text-muted space-y-2">
                {['Income either spouse earned during the marriage', 'Home or real estate purchased during the marriage', 'Retirement accounts and pensions earned during marriage', 'Vehicles and bank accounts acquired while married', 'Debts either spouse took on during the marriage'].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#c0392b] font-bold flex-shrink-0">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-border rounded-sm p-5">
              <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#2a7a4f] mb-3">Separate Property (generally kept)</p>
              <ul className="font-body text-sm text-text-muted space-y-2">
                {['Property owned before the marriage', 'Gifts received by one spouse during marriage', 'Inheritances (even received during marriage)', 'Personal injury compensation for pain and suffering', 'Property covered by a valid prenuptial agreement'].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-[#2a7a4f] font-bold flex-shrink-0">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {!isCommunity && (
            <>
              <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">What {stateObj.name} Courts Consider</h2>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-5">When spouses cannot agree, {stateObj.name} courts weigh these equitable distribution factors:</p>
              <ul className="font-body text-sm text-text-muted space-y-3 mb-8">
                {['Length of the marriage', 'Age and health of each spouse', 'Income, earning capacity, and employability', 'Contributions to the marriage (including homemaking and childcare)', 'Standard of living during the marriage', 'Tax consequences of the division', 'Contributions to the other spouse\'s education or career', 'Economic circumstances at the time of divorce'].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0">•</span>{item}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">DIY Property Division: The MSA</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            For DIY divorces, property division is handled through a Marital Settlement Agreement (MSA) — also called a Property Settlement Agreement or Divorce Agreement. This is a legally binding contract you and your spouse sign before filing, specifying exactly who gets what.
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
            Courts almost always approve MSAs between spouses, giving you full control over how you divide your assets — regardless of {stateObj.name}'s default rules. If the agreement is fair and both parties signed voluntarily, the court will sign off.
          </p>
          <Link href="/what-is-a-marital-settlement-agreement" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-navy text-cream-dark rounded-sm hover:bg-navy-light transition-colors mb-10">What Is an MSA? Complete Guide →</Link>

          {cd?.note && (
            <div className="bg-cream border-l-4 border-gold p-5 rounded-sm mb-8">
              <p className="font-body text-sm text-text-muted"><strong className="text-navy">{stateObj.name} note:</strong> {cd.note}</p>
            </div>
          )}
        </>
      )}
    </StateGuideLayout>
  )
}
