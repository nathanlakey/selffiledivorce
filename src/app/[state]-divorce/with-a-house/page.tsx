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
    title: `${stateObj.name} Divorce With a House — What Happens to the Home?`,
    description: `${stateObj.name} divorce with a house — selling, buying out your spouse, or keeping it. Rules and options.`,
  }
}

export default async function StateWithAHousePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'with-a-house')
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/with-a-house" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce With a House</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <div className={`rounded-sm p-5 border-l-4 mb-8 ${isCommunity ? 'bg-[#fdf9f0] border-gold' : 'bg-[#f0f6ff] border-[#4a7ab5]'}`}>
            <p className={`font-body text-[11px] font-bold tracking-[2px] uppercase mb-1 ${isCommunity ? 'text-gold' : 'text-[#4a7ab5]'}`}>
              {isCommunity ? 'Community Property State' : 'Equitable Distribution State'}
            </p>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              {isCommunity
                ? `As a community property state, ${stateObj.name} presumes the marital home is owned 50/50 regardless of whose name is on the deed. Both spouses have equal interest in a home purchased during the marriage.`
                : `As an equitable distribution state, ${stateObj.name} courts divide the marital home fairly — considering factors like who will have the children, each spouse's financial situation, and contributions to the home.`
              }
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Your Three Options</h2>
          <div className="space-y-5 mb-10">
            {[
              {
                option: 'Option 1: Sell the Home and Split Proceeds',
                pro: 'Clean break — no ongoing financial ties, liquid assets easier to divide',
                con: 'Capital gains tax may apply; real estate commissions (typically 5–6%); you both need new housing',
                steps: ['List and sell the home at market value', 'Pay off the mortgage from proceeds', 'Split remaining equity per your MSA (50/50 or agreed split)', 'Each receives a tax exclusion of up to $250,000 in gains ($500,000 if married at time of sale)'],
              },
              {
                option: 'Option 2: One Spouse Buys Out the Other',
                pro: 'Children stay in familiar home; one spouse avoids moving',
                con: 'Buying spouse must qualify for a new mortgage solo; requires an appraisal',
                steps: ['Get a professional home appraisal', 'Calculate equity: (appraised value) - (mortgage balance) = equity', 'Buying spouse pays half the equity to the other', 'Refinance the mortgage solely in the buying spouse\'s name', 'Transfer deed with a quitclaim deed'],
              },
              {
                option: 'Option 3: Defer Sale (Co-Own Temporarily)',
                pro: 'Children stay in the home until school ends or the market improves',
                con: 'Ongoing financial and legal ties to your ex; risk of market changes',
                steps: ['Include a detailed co-ownership agreement in your MSA', 'Specify who pays mortgage, insurance, taxes, and maintenance', 'Set a clear trigger for sale (specific date or child\'s graduation)', 'Both remain on deed and mortgage until the sale'],
              },
            ].map((opt, i) => (
              <div key={i} className="bg-cream border border-border rounded-sm overflow-hidden">
                <div className="bg-navy px-5 py-3">
                  <h3 className="font-display text-base font-bold text-cream-dark">{opt.option}</h3>
                </div>
                <div className="p-5">
                  <div className="flex gap-4 mb-4 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <p className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-[#2a7a4f] mb-1">Pros</p>
                      <p className="font-body text-sm text-text-muted">{opt.pro}</p>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <p className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-[#c0392b] mb-1">Cons</p>
                      <p className="font-body text-sm text-text-muted">{opt.con}</p>
                    </div>
                  </div>
                  <p className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-text-light mb-2">Steps</p>
                  <ol className="space-y-1">
                    {opt.steps.map((step, si) => (
                      <li key={si} className="font-body text-sm text-text-muted flex gap-2">
                        <span className="font-bold text-gold flex-shrink-0">{si+1}.</span>{step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Is the House Marital or Separate Property?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            A home purchased during the marriage with marital funds is marital property in {stateObj.name} — regardless of whose name is on the deed. A home owned entirely before the marriage (and kept entirely separate) may be considered separate property.
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-8">
            Complication: if you owned the home before marriage but your spouse contributed to mortgage payments, renovations, or appreciation, a portion may have become marital property ("transmutation"). This area is complex — if significant equity is involved, consult an attorney.
          </p>

          <Link href="/what-is-a-marital-settlement-agreement" className="inline-flex items-center gap-2 font-body text-sm font-bold text-gold hover:text-gold-dark transition-colors">
            Learn how to document home division in your MSA →
          </Link>
        </>
      )}
    </StateGuideLayout>
  )
}
