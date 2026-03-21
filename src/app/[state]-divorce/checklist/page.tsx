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
    title: `${stateObj.name} Divorce Checklist (Printable, 2026)`,
    description: `${stateObj.name} divorce checklist — every step from filing to final decree so nothing falls through the cracks.`,
  }
}

export default async function StateChecklistPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'checklist')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const requiresSeparation = td?.separation && td.separation !== 'None'

  const phases = [
    {
      title: 'Before You File',
      items: [
        requiresSeparation ? `Live apart from your spouse for ${td?.separation} (required in ${stateObj.name})` : null,
        `Confirm residency: at least one spouse has lived in ${stateObj.name} for ${td?.residency ?? 'the required period'}`,
        'Gather financial documents: tax returns (3 years), pay stubs, bank statements, retirement statements',
        'List all marital assets: real estate, vehicles, bank accounts, retirement accounts, investments',
        'List all marital debts: mortgage, car loans, credit cards, student loans',
        'Draft or finalize your Marital Settlement Agreement (MSA)',
        'If children: draft a Parenting Plan / Custody Agreement and calculate child support',
      ].filter(Boolean),
    },
    {
      title: 'Filing',
      items: [
        `Get ${stateObj.name} divorce forms (petition, summons, MSA, financial declaration)`,
        'Complete all forms — both spouses sign where required',
        `File at the clerk of court in your county (bring ${cd?.filing ?? 'the filing fee'} or a fee waiver application)`,
        'Get your case number and file-stamped copies',
        'Keep originals; make at least 3 copies of everything',
      ],
    },
    {
      title: 'Service of Process',
      items: [
        'Serve your spouse with the divorce papers (sheriff, process server, or certified mail)',
        'OR have your spouse sign a Waiver of Service / Acceptance of Service',
        'File proof of service with the court',
        'If your spouse is cooperative, the co-petition option skips this step in many states',
      ],
    },
    {
      title: 'Waiting Period',
      items: td?.waitPeriod === 'None'
        ? [`${stateObj.name} has no mandatory waiting period — proceed immediately after service is filed`]
        : [
          `Wait the required ${td?.waitPeriod} from the date of filing/service`,
          'Use this time to gather any missing documents or finalize outstanding agreements',
          `${stateObj.name} waiting period: ${td?.waitPeriod}`,
        ],
    },
    {
      title: 'Final Decree',
      items: [
        'File any remaining documents (proposed decree, parenting plan, child support worksheet)',
        'Attend final hearing if required (many uncontested divorces skip this)',
        'Receive signed Final Decree of Divorce from the judge',
        'Order certified copies ($5–$25 each) — you\'ll need them for name change, beneficiary updates, etc.',
      ],
    },
    {
      title: 'After the Divorce',
      items: [
        'Update your name on Social Security card, driver\'s license, passport (if applicable)',
        'Update bank accounts, credit cards, and retirement beneficiary designations',
        'Transfer vehicle titles and real estate deeds per your MSA',
        'File QDRO (if dividing a 401k or pension)',
        'Update your will, power of attorney, and healthcare directive',
        'Notify employer of benefit changes (health insurance, 401k beneficiary)',
      ],
    },
  ]

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/checklist" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Checklist</h1>
          <p className="font-body text-sm text-text-light mb-2">Updated March 2026 · <button className="underline hover:text-navy" onClick={() => window?.print?.()}>Print this page</button></p>

          {td && (
            <div className="flex gap-4 flex-wrap py-4 px-5 bg-cream border border-border rounded-sm mb-8">
              {[
                { label: 'Residency', value: td.residency },
                { label: 'Wait Period', value: td.waitPeriod },
                { label: 'Separation', value: td.separation === 'None' ? 'Not required' : td.separation },
                { label: 'Filing Fee', value: cd?.filing ?? '—' },
              ].map(item => (
                <div key={item.label}>
                  <span className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-text-light">{item.label}: </span>
                  <span className="font-display text-sm font-bold text-navy">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-8">
            {phases.map((phase, pi) => (
              <div key={pi}>
                <h2 className="font-display text-xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-navy text-cream-dark text-xs font-bold flex items-center justify-center flex-shrink-0">{pi+1}</span>
                  {phase.title}
                </h2>
                <ul className="space-y-3 pl-10">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded border-2 border-border flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-sm p-6 mt-10">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Skip the paperwork confusion</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">An online divorce service fills out all the forms for you — court-ready documents in about an hour.</p>
            <Link href="/best-online-divorce-services" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Compare Online Services →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
