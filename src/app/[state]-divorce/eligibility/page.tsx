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
    title: `${stateObj.name} DIY Divorce Eligibility — Do You Qualify? (2026)`,
    description: `${stateObj.name} DIY divorce eligibility — residency requirements, criteria, and next steps.`,
  }
}

export default async function StateEligibilityPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'eligibility')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(stateObj.name)

  const requiresSeparation = td?.separation && td.separation !== 'None'

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/eligibility" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">Do I Qualify for DIY Divorce in {stateObj.name}?</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <p className="font-body text-base text-text-muted leading-relaxed mb-8">
            Most people filing for divorce in {stateObj.name} don't need an attorney — especially for uncontested divorces where both spouses agree. Here are the eligibility requirements for filing yourself.
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Basic Eligibility Requirements</h2>
          <div className="space-y-4 mb-10">
            {[
              {
                title: `Residency: ${td?.residency ?? 'See state rules'}`,
                desc: `At least one spouse must have lived in ${stateObj.name} for ${td?.residency ?? 'the required period'} before filing. County residency requirements may also apply — check your specific county's rules.`,
                met: true,
              },
              {
                title: requiresSeparation ? `Separation: ${td?.separation} required` : 'Separation: Not required',
                desc: requiresSeparation
                  ? `${stateObj.name} requires that spouses live apart for ${td?.separation} before filing for a no-fault divorce. You must be able to show this separation period has been completed.`
                  : `${stateObj.name} does not require a separation period before filing. You can file for divorce at any time after meeting the residency requirement.`,
                met: !requiresSeparation,
              },
              {
                title: 'Grounds for Divorce: No-fault available',
                desc: `${stateObj.name} allows no-fault divorce — meaning you don't need to prove your spouse did something wrong. "Irreconcilable differences" or "irretrievable breakdown of the marriage" is sufficient in most cases.`,
                met: true,
              },
              {
                title: 'Both spouses agree (recommended for DIY)',
                desc: 'While you can file for divorce without your spouse\'s cooperation, a contested divorce requires court hearings and is much harder to navigate without an attorney. DIY works best when both parties agree on major issues.',
                met: null,
              },
            ].map((req, i) => (
              <div key={i} className="flex gap-4 p-5 bg-cream border border-border rounded-sm">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${req.met === true ? 'bg-[#2a7a4f] text-white' : req.met === false ? 'bg-[#c0392b] text-white' : 'bg-text-light text-white'}`}>
                  {req.met === true ? '✓' : req.met === false ? '✗' : '?'}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">{req.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">DIY Divorce Eligibility Checklist</h2>
          <p className="font-body text-sm text-text-muted mb-6">You're likely eligible for DIY divorce in {stateObj.name} if all of the following are true:</p>
          <ul className="space-y-3 mb-10">
            {[
              `At least one of you has lived in ${stateObj.name} for ${td?.residency ?? 'the required period'}`,
              requiresSeparation ? `You have lived apart from your spouse for ${td?.separation}` : 'You are ready to file (no separation period required)',
              'Both of you agree the marriage is over',
              'You have reached agreement (or can reach agreement) on property division and debt',
              'If you have children: you agree on custody, a parenting plan, and child support',
              `You don't have a complex business, pension dispute, or other asset requiring a QDRO or appraisal`,
              'There is no active domestic violence or restraining order situation',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded border-2 border-border flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">When You Need an Attorney</h2>
          <ul className="font-body text-sm text-text-muted space-y-3 mb-10">
            {[
              'Your spouse contests the divorce or refuses to participate',
              'Custody of children is disputed',
              'A business, professional practice, or significant investment account is involved',
              'Domestic violence, substance abuse, or a serious power imbalance exists',
              requiresSeparation ? `You haven't yet completed the ${td?.separation} separation period` : null,
              'Significant spousal support (alimony) is at issue',
            ].filter(Boolean).map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#c0392b] font-bold flex-shrink-0">!</span>{item}</li>
            ))}
          </ul>

          {cd?.note && (
            <div className="bg-cream border-l-4 border-gold p-5 rounded-sm mb-8">
              <p className="font-body text-sm text-text-muted"><strong className="text-navy">{stateObj.name} note:</strong> {cd.note}</p>
            </div>
          )}

          <div className="bg-navy rounded-sm p-6 mt-10">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Not sure which path is right?</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Take our free 7-question assessment and get a personalized recommendation: DIY, online service, or attorney.</p>
            <Link href="/do-i-need-a-lawyer" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Take the Free Assessment →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
