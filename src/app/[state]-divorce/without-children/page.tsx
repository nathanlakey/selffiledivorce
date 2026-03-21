import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { STATE_TIMELINE_DATA, STATE_COST_DATA } from '@/lib/stateData'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}
  return {
    title: `${stateObj.name} Divorce Without Children — Step-by-Step Guide (2026)`,
    description: `${stateObj.name} divorce without minor children. Simplified process, forms, fees, and timeline.`,
  }
}

export default async function StateWithoutChildrenPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'without-children')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const requiresSeparation = td?.separation && td.separation !== 'None'

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/without-children" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Without Children</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <div className="bg-[#f0faf5] border border-[#a8dfc0] border-l-4 border-l-[#2a7a4f] rounded-sm p-5 mb-8">
            <p className="font-body text-sm font-semibold text-[#2a7a4f] mb-1">Simpler process</p>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Divorces without minor children skip the parenting plan, child support worksheet, and custody provisions — making the paperwork significantly less complex. If you and your spouse agree on property and debt division, this is the most straightforward path to a final decree.
            </p>
          </div>

          {td && cd && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Filing Fee', value: cd.filing },
                { label: 'Waiting Period', value: td.waitPeriod },
                { label: 'Residency', value: td.residency },
                { label: 'Timeline (uncontested)', value: td.uncontested },
              ].map(item => (
                <div key={item.label} className="bg-cream border border-border rounded-sm p-4">
                  <p className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-text-light mb-1">{item.label}</p>
                  <p className="font-display text-base font-bold text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Step-by-Step Process</h2>
          <div className="space-y-5 mb-10">
            {[
              requiresSeparation
                ? { title: `Step 0: Complete the Separation Period (${td?.separation})`, desc: `${stateObj.name} requires spouses to live apart for ${td?.separation} before a no-fault divorce can be filed. Keep records of your separation date.` }
                : null,
              { title: 'Step 1: Meet the Residency Requirement', desc: `At least one spouse must have lived in ${stateObj.name} for ${td?.residency ?? 'the required period'}. If you just moved to ${stateObj.name}, you may need to wait before filing.` },
              { title: 'Step 2: Reach Agreement on All Issues', desc: `For a smooth uncontested divorce, agree on: division of all marital property and assets, allocation of all marital debts, spousal support (alimony) or that neither party will pay it, and anything else in your Marital Settlement Agreement.` },
              { title: 'Step 3: Get and Complete the Forms', desc: `Download the official ${stateObj.name} divorce forms: a Petition for Divorce/Dissolution, Summons, Marital Settlement Agreement, and financial disclosure forms. Online divorce services can complete these for you automatically.` },
              { title: `Step 4: File With the Court (${cd?.filing ?? 'Filing fee applies'})`, desc: `File your completed forms at the clerk of court in the county where either spouse lives. Pay the filing fee or submit a fee waiver application. Get your case number and file-stamped copies.` },
              { title: 'Step 5: Serve Your Spouse', desc: `Have your spouse officially served with the divorce papers (or have them sign a Waiver of Service). File proof of service with the court. A co-petition option is available in some states if both parties file together.` },
              { title: td?.waitPeriod === 'None' ? 'Step 6: Finalize (No Wait Required)' : `Step 6: Wait the Mandatory Period (${td?.waitPeriod})`, desc: td?.waitPeriod === 'None' ? `${stateObj.name} has no mandatory waiting period. Once all paperwork is filed and your spouse is served, the court can finalize your divorce.` : `After filing, the court requires a ${td?.waitPeriod} waiting period before finalizing the divorce. Use this time to make sure all documents are complete.` },
              { title: 'Step 7: Final Decree', desc: `For most uncontested divorces without children, there is no court hearing required. The judge reviews your paperwork and signs the Final Decree of Divorce. Order certified copies — you'll need them for name changes, financial account updates, and deed transfers.` },
            ].filter(Boolean).map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-cream border border-border rounded-sm">
                <span className="font-display text-sm font-bold text-gold flex-shrink-0 w-8">{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">{step!.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step!.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Required Forms (No Children)</h2>
          <ul className="font-body text-sm text-text-muted space-y-2 mb-8">
            {['Petition for Divorce / Dissolution of Marriage', 'Summons (served on your spouse)', 'Marital Settlement Agreement (property + debt division)', 'Financial Disclosure / Affidavit of Finances', 'Proposed Final Decree of Divorce', 'Proof of Service (or Waiver of Service signed by spouse)'].map((form, i) => (
              <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0">•</span>{form}</li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Link href={`/${stateObj.slug}-divorce/forms`} className="flex items-center gap-3 p-5 bg-cream border border-border rounded-sm hover:border-gold transition-colors">
              <span className="text-2xl">📄</span>
              <div><p className="font-display text-sm font-bold text-navy">{stateObj.name} Divorce Forms</p><p className="font-body text-xs text-text-light">Where to get the official forms</p></div>
            </Link>
            <Link href="/best-online-divorce-services" className="flex items-center gap-3 p-5 bg-navy rounded-sm hover:bg-navy-light transition-colors">
              <span className="text-2xl">💻</span>
              <div><p className="font-display text-sm font-bold text-cream-dark">Online Divorce Services</p><p className="font-body text-xs text-cream-dark/60">Get court-ready forms in ~1 hour</p></div>
            </Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
