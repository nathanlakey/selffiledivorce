import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { STATE_TIMELINE_DATA, STATE_COST_DATA, COMMUNITY_PROPERTY_STATES, SEPARATION_STATES } from '@/lib/stateData'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}
  return {
    title: `${stateObj.name} Divorce Mistakes to Avoid (2026)`,
    description: `${stateObj.name} divorce mistakes — errors that delay your case, cost money, or hurt your settlement.`,
  }
}

export default async function StateMistakesPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'mistakes-to-avoid')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(stateObj.name)
  const requiresSeparation = SEPARATION_STATES.includes(stateObj.name)

  const mistakes = [
    {
      title: `Not meeting ${stateObj.name}'s residency requirement before filing`,
      impact: 'High',
      desc: `Your case will be dismissed if you haven't lived in ${stateObj.name} for ${td?.residency ?? 'the required period'}. Double-check county residency rules too — some require separate county residency. Filing too early wastes your filing fee and delays everything.`,
    },
    requiresSeparation ? {
      title: `Not completing the mandatory separation period (${td?.separation})`,
      impact: 'High',
      desc: `${stateObj.name} requires spouses to live apart for ${td?.separation} before a no-fault divorce can be finalized. If you haven't completed this period, the court cannot grant your divorce. Document your separation date carefully.`,
    } : null,
    {
      title: 'Not disclosing all assets and debts',
      impact: 'High',
      desc: `${stateObj.name} courts require full financial disclosure. Hiding assets is perjury and can result in the entire agreement being voided — sometimes years later. Even assets you think are "separate property" should be disclosed. Your spouse can later reopen the case if hidden assets are discovered.`,
    },
    {
      title: 'Signing a Settlement Agreement without understanding it',
      impact: 'High',
      desc: 'Once your MSA is approved by the court, it\'s extremely difficult to undo. Before signing, fully understand every term — especially regarding retirement accounts, the family home, and long-term financial obligations like alimony. Many people later regret agreeing to terms they didn\'t fully understand.',
    },
    {
      title: 'Forgetting to update beneficiary designations',
      impact: 'High',
      desc: 'Your divorce decree does not automatically remove your ex-spouse as beneficiary on life insurance, 401k, IRA, or pension. You must separately update these. Courts have upheld ex-spouse beneficiary claims even after divorce. Update all beneficiaries within weeks of your final decree.',
    },
    {
      title: isCommunity ? 'Assuming all pre-marriage property stays yours in a community property state' : 'Thinking "equitable" always means 50/50',
      impact: 'Medium',
      desc: isCommunity
        ? `In ${stateObj.name}'s community property system, if you used pre-marital assets to benefit the marriage (e.g., made mortgage payments on the marital home), those assets may have become community property. Document pre-marital property carefully.`
        : `"Equitable" in ${stateObj.name} means fair, not necessarily equal. Factors like the length of the marriage, each spouse's income, and contributions all play a role. Don't assume a 50/50 split — but don't expect dramatically unequal results either unless there are extreme circumstances.`,
    },
    {
      title: 'Not getting a QDRO for retirement accounts',
      impact: 'High',
      desc: 'If you\'re dividing a 401(k), pension, or other qualified retirement plan, you need a Qualified Domestic Relations Order (QDRO) — a separate court order. Without it, you cannot legally receive your portion and may face significant tax penalties. QDRO attorneys typically charge $500–$1,500.',
    },
    {
      title: 'Serving yourself or filing service incorrectly',
      impact: 'Medium',
      desc: `You cannot serve your own divorce papers — a third party must do it. Using the wrong service method, or not filing proof of service, can delay your case significantly. A default divorce with defective service can be overturned later.`,
    },
    {
      title: 'Using incorrect or outdated forms',
      impact: 'Medium',
      desc: `${stateObj.name} courts have specific, required forms — and they update them periodically. Using old forms, out-of-state forms, or generic templates the clerk doesn't recognize will get your filing rejected. Always download forms directly from the official ${stateObj.name} court website or use an online divorce service.`,
    },
    {
      title: 'Making major financial moves during the divorce',
      impact: 'High',
      desc: 'Opening new credit accounts, depleting joint accounts, transferring assets, or making large purchases while your divorce is pending can be seen as "dissipation of marital assets" — and courts take this seriously. In some cases, the judge will compensate the other spouse for these actions.',
    },
  ].filter(Boolean) as { title: string; impact: string; desc: string }[]

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/mistakes-to-avoid" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Mistakes to Avoid</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026 — includes {stateObj.name}-specific pitfalls</p>

          <div className="space-y-5 mb-12">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-cream border border-border rounded-sm p-5">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <h2 className="font-display text-base font-bold text-navy flex-1">{i + 1}. {m.title}</h2>
                  <span className={`font-body text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-sm flex-shrink-0 ${m.impact === 'High' ? 'bg-[#fdf2f0] text-[#c0392b]' : 'bg-[#fdf9f0] text-gold-dark'}`}>
                    {m.impact} Impact
                  </span>
                </div>
                <p className="font-body text-sm text-text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-sm p-6">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Avoid paperwork mistakes entirely</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Online divorce services generate state-specific, court-approved forms — reducing the risk of errors that delay your case.</p>
            <Link href="/best-online-divorce-services" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Compare Online Services →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
