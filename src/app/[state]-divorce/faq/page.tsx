import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { STATE_TIMELINE_DATA, STATE_COST_DATA, COMMUNITY_PROPERTY_STATES } from '@/lib/stateData'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}
  return {
    title: `${stateObj.name} Divorce FAQ — 20 Common Questions Answered (2026)`,
    description: `${stateObj.name} divorce FAQ — residency, fees, timeline, property, custody, and more. Data-driven answers for 2026.`,
  }
}

export default async function StateFaqPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'faq')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(stateObj.name)
  const requiresSeparation = td?.separation && td.separation !== 'None'

  const faqs = [
    { q: `How long does a divorce take in ${stateObj.name}?`, a: `An uncontested divorce in ${stateObj.name} typically takes ${td?.uncontested ?? '2–6 months'} from filing to final decree. A contested divorce takes significantly longer — ${td?.contested ?? '9–24 months or more'}. The mandatory waiting period (${td?.waitPeriod === 'None' ? 'none required' : td?.waitPeriod}) is a major factor.` },
    { q: `How much does a divorce cost in ${stateObj.name}?`, a: `The court filing fee in ${stateObj.name} is ${cd?.filing ?? 'varies by county'}. Total DIY costs (filing fee + forms + service) run ${cd?.diy ?? '$200–$500'}. Hiring an attorney for a contested divorce costs ${cd?.contested ?? '$10,000–$25,000 or more'}.` },
    { q: `Do I need a lawyer to get divorced in ${stateObj.name}?`, a: `No — you have the right to represent yourself in ${stateObj.name} court. Most uncontested divorces are handled without attorneys. An attorney becomes important when custody is disputed, significant assets are involved, or your spouse is represented by counsel.` },
    { q: `What are the residency requirements for divorce in ${stateObj.name}?`, a: `At least one spouse must have lived in ${stateObj.name} for ${td?.residency ?? 'the required period'} before filing. ${td?.notes ? td.notes : ''}` },
    { q: `Does ${stateObj.name} require separation before divorce?`, a: requiresSeparation ? `Yes — ${stateObj.name} requires spouses to live apart for ${td?.separation} before a no-fault divorce can be finalized. This separation period must be completed before (or sometimes during) the process.` : `No — ${stateObj.name} does not require a separation period before filing for divorce. You can file at any time once you meet the residency requirement.` },
    { q: `Is ${stateObj.name} a no-fault divorce state?`, a: `Yes. ${stateObj.name} allows no-fault divorce based on "irreconcilable differences" or "irretrievable breakdown of the marriage." You don't need to prove adultery, abandonment, or other fault grounds.` },
    { q: `How does ${stateObj.name} divide property in a divorce?`, a: isCommunity ? `${stateObj.name} is a community property state. Most assets and debts acquired during the marriage are split equally (50/50) between spouses. Property you owned before marriage, or received as a gift or inheritance, is generally yours alone.` : `${stateObj.name} is an equitable distribution state. Courts divide marital property "equitably" (fairly) — which often means roughly equal but depends on the length of the marriage, each spouse's income, contributions, and other factors.` },
    { q: `What is the waiting period for divorce in ${stateObj.name}?`, a: td?.waitPeriod === 'None' ? `${stateObj.name} has no mandatory waiting period. Once you've filed and served your spouse (or filed a joint petition), the court can finalize your divorce as soon as all paperwork is approved.` : `${stateObj.name} requires a ${td?.waitPeriod} waiting period after filing before the divorce can be finalized. This period generally ${td?.waitPeriod.includes('*') ? 'may be waivable in some circumstances' : 'cannot be shortened'}.` },
    { q: `Can I get a divorce in ${stateObj.name} if my spouse doesn't want one?`, a: `Yes. If your spouse contests the divorce, you can still proceed — it just takes longer. The court will eventually grant a divorce even without your spouse's consent. However, contested divorces require court hearings and are much more complex. A default divorce is also possible if your spouse doesn't respond within the required timeframe after being served.` },
    { q: `Can I change my name during my ${stateObj.name} divorce?`, a: `Yes. You can request to restore your former name as part of your divorce decree. Include this request in your divorce petition. Once the decree is signed, you can use it to update your Social Security card, driver's license, passport, and other IDs.` },
    { q: `What forms do I need to file for divorce in ${stateObj.name}?`, a: `Most uncontested divorces in ${stateObj.name} require: a Petition for Divorce (or Dissolution), a Summons, a Marital Settlement Agreement, a financial disclosure form, and (if children are involved) a Parenting Plan and Child Support Worksheet. See our forms guide for specific ${stateObj.name} form links.` },
    { q: `How do I serve my spouse with divorce papers in ${stateObj.name}?`, a: `You must officially notify your spouse that you've filed for divorce. Common methods include: sheriff or process server delivery, certified mail, or having your spouse sign a Voluntary Waiver of Service. You cannot serve the papers yourself — a third party must do it.` },
    { q: `What happens to the house in a ${stateObj.name} divorce?`, a: `You and your spouse have several options: sell the home and split proceeds, one spouse buys out the other's equity and refinances, or one spouse stays temporarily (often for minor children) with a plan to sell later. As a ${isCommunity ? 'community property' : 'equitable distribution'} state, ${stateObj.name} ${isCommunity ? 'treats the marital home as 50/50 joint property' : 'considers several factors to divide the home fairly'}.` },
    { q: `How is child support calculated in ${stateObj.name}?`, a: `${stateObj.name} uses a specific formula based on both parents' gross incomes, the custody arrangement (number of overnights with each parent), childcare costs, and health insurance premiums. You can use the official state child support calculator or an online service to estimate your obligation.` },
    { q: `What is a Marital Settlement Agreement (MSA)?`, a: `An MSA is a written contract signed by both spouses that details how all marital issues are resolved: property division, debt allocation, spousal support, and (if applicable) child custody and support. It becomes part of the final divorce decree. Courts almost always approve agreed-upon MSAs.` },
  ]

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/faq" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce FAQ</h1>
          <p className="font-body text-sm text-text-light mb-8">15 common questions answered with {stateObj.name}-specific data · Updated March 2026</p>

          <div className="space-y-0 divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h2 className="font-display text-lg font-bold text-navy mb-3">{faq.q}</h2>
                <p className="font-body text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-sm p-6 mt-10">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Still have questions?</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Take our free 7-question assessment to find out if DIY, an online service, or an attorney is right for your situation.</p>
            <Link href="/do-i-need-a-lawyer" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Take the Free Assessment →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
