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
    title: `${stateObj.name} Divorce Timeline — How Long Does It Take? (2026)`,
    description: `${stateObj.name} divorce timeline — waiting periods, residency requirements, and realistic timelines from filing to final decree.`,
  }
}

export default async function StateTimelinePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'timeline')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/timeline" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Timeline</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          {td && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Residency Required', value: td.residency },
                { label: 'Waiting Period', value: td.waitPeriod },
                { label: 'Separation Required', value: td.separation === 'None' ? 'Not required' : td.separation },
                { label: 'Uncontested Total', value: td.uncontested },
                { label: 'Contested Total', value: td.contested },
              ].map(item => (
                <div key={item.label} className="bg-cream border border-border rounded-sm p-5">
                  <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-text-light mb-1">{item.label}</p>
                  <p className="font-display text-lg font-bold text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {td?.notes && (
            <div className="bg-cream border-l-4 border-gold p-5 rounded-sm mb-8">
              <p className="font-body text-sm text-text-muted leading-relaxed"><strong className="text-navy">{stateObj.name} note:</strong> {td.notes}</p>
            </div>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-5 pb-3 border-b border-border">Phase-by-Phase Timeline</h2>
          <div className="space-y-0 mb-10">
            {[
              { phase: 'Pre-Filing', time: td?.separation !== 'None' ? td?.separation ?? 'Varies' : 'None required', desc: td?.separation !== 'None' ? `${stateObj.name} requires you to live apart for ${td?.separation} before you can file for divorce. This clock starts when you physically separate.` : `${stateObj.name} does not require a separation period before filing. You may file for divorce at any time once you meet the residency requirement.` },
              { phase: 'Residency & Filing', time: '1–2 weeks', desc: `You must have lived in ${stateObj.name} for ${td?.residency ?? 'the required period'} before filing. Once eligible, complete your paperwork and file at the clerk of court.` },
              { phase: 'Service of Process', time: '1–4 weeks', desc: 'After filing, your spouse must be officially served with divorce papers. They then have 20–30 days to respond (varies by state). If both spouses file together (co-petition), this step is skipped.' },
              { phase: 'Mandatory Waiting Period', time: td?.waitPeriod === 'None' ? 'None — skip this phase' : td?.waitPeriod ?? 'Varies', desc: td?.waitPeriod === 'None' ? `${stateObj.name} has no mandatory waiting period after filing. The court can finalize your divorce as soon as all paperwork is complete and approved.` : `After filing, ${stateObj.name} law requires a ${td?.waitPeriod} waiting period. This period begins from the date of filing (or service, depending on the court). It cannot be waived.` },
              { phase: 'Negotiation & Agreement', time: 'Variable (0–6+ months)', desc: 'Both spouses must reach agreement on all issues: property division, debt allocation, spousal support, and (if applicable) child custody and support. For fully agreed-upon divorces, this may already be done at filing.' },
              { phase: 'Final Hearing / Approval', time: '1–8 weeks after ready', desc: `Once all documents are filed and the waiting period has passed, the court schedules a final hearing. For uncontested divorces in ${stateObj.name}, this is often brief or handled by affidavit without a court appearance.` },
            ].map((p, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-navy text-cream-dark text-xs font-bold flex items-center justify-center flex-shrink-0 z-10">{i+1}</div>
                  {i < 5 && <div className="w-px flex-1 bg-border mt-1 mb-0" style={{minHeight:'2.5rem'}} />}
                </div>
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="font-display text-base font-bold text-navy">{p.phase}</h3>
                    <span className="font-body text-[11px] font-semibold px-2.5 py-0.5 bg-cream border border-border rounded-full text-text-light">{p.time}</span>
                  </div>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">What Can Slow Things Down?</h2>
          <ul className="font-body text-sm text-text-muted space-y-3 mb-8">
            {[
              'Inability to agree on property division, custody, or support — contested issues require court hearings',
              'Difficulty locating or serving your spouse — publication service can add 4–6 weeks',
              'Court backlogs — busy counties may have 4–8 week wait times for hearings',
              'Incomplete paperwork — missing signatures, wrong forms, or unfiled documents delay every step',
              'Discovery disputes — if one spouse requests financial records the other won\'t produce',
            ].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0 mt-0.5">•</span>{item}</li>
            ))}
          </ul>

          <div className="bg-cream border border-border rounded-sm p-6 mt-8">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Fastest path forward</p>
            <p className="font-body text-sm text-text-muted mb-4">Both spouses agree on all terms? An online divorce service can have your court-ready documents ready in under an hour.</p>
            <Link href="/best-online-divorce-services" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-navy text-cream-dark rounded-sm hover:bg-navy-light transition-colors">Compare Online Services →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
