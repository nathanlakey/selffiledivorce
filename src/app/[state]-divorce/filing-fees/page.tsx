import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { US_STATES } from '@/lib/states'
import { getStateContent } from '@/lib/content'
import { StateGuideLayout } from '@/components/StateGuideLayout'
import { STATE_COST_DATA } from '@/lib/stateData'

export async function generateStaticParams() {
  return US_STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) return {}
  return {
    title: `${stateObj.name} Divorce Filing Fees (2026)`,
    description: `${stateObj.name} divorce filing fees by county, fee waiver eligibility, and total DIY divorce cost breakdown.`,
  }
}

export default async function StateFilingFeesPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'filing-fees')
  const costData = STATE_COST_DATA.find(d => d.state === stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/filing-fees" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Filing Fees</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          {costData && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Court Filing Fee', value: costData.filing, highlight: true },
                { label: 'Total DIY Cost', value: costData.diy, highlight: false },
                { label: 'Contested (est.)', value: costData.contested, highlight: false },
                { label: 'Waiting Period', value: costData.wait, highlight: false },
                { label: 'Property System', value: costData.property, highlight: false },
              ].map(item => (
                <div key={item.label} className={`rounded-sm p-5 border ${item.highlight ? 'bg-navy border-navy' : 'bg-cream border-border'}`}>
                  <p className={`font-body text-[10px] font-bold tracking-[2px] uppercase mb-1 ${item.highlight ? 'text-gold' : 'text-text-light'}`}>{item.label}</p>
                  <p className={`font-display text-xl font-bold ${item.highlight ? 'text-cream-dark' : 'text-navy'}`}>{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {costData?.note && (
            <div className="bg-cream border-l-4 border-gold p-5 rounded-sm mb-8">
              <p className="font-body text-sm text-text-muted leading-relaxed"><strong className="text-navy">{stateObj.name} note:</strong> {costData.note}</p>
            </div>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">What the Filing Fee Covers</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            The {stateObj.name} court filing fee is paid when you submit your initial divorce petition to the clerk of court. This fee covers case initiation, document processing, and your first court hearing (if required). It does <strong>not</strong> include:
          </p>
          <ul className="font-body text-sm text-text-muted space-y-2 mb-8 pl-4">
            {['Process server or sheriff fees for serving your spouse ($40–$150)', 'Certified copies of the final decree ($5–$25 per copy)', 'Parenting class fees (required in most states when children are involved)', 'Mediation fees if ordered by the court'].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0">•</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Fee Waiver (Waiver of Court Fees)</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            If you cannot afford the filing fee, you may qualify for a fee waiver (also called an In Forma Pauperis petition). Most courts grant waivers if your income is at or below 125–200% of the federal poverty level. To apply:
          </p>
          <ol className="font-body text-sm text-text-muted space-y-3 mb-8">
            {[
              `Ask the {name} clerk of court for a "Fee Waiver Application" or "Application to Proceed Without Paying Fees."`,
              'Complete the form listing your income, expenses, and household size.',
              'Attach documentation: recent pay stubs, tax return, or benefits letter.',
              'Submit the application with your divorce petition — the judge reviews it.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-navy text-cream-dark text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                <span>{step.replace('{name}', stateObj.name)}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">How to Pay</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
            Most {stateObj.name} courts accept cash, money order, or credit/debit card at the clerk's window. Some counties also accept e-filing with online payment. Personal checks are often not accepted. Confirm with your specific county court before arriving.
          </p>

          <div className="bg-navy rounded-sm p-6 mt-10">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Need the forms?</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Find free official {stateObj.name} divorce forms, court links, and filing instructions in one place.</p>
            <Link href="/divorce-forms-by-state" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Find {stateObj.name} Forms →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
