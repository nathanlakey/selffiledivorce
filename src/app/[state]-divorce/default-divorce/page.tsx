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
    title: `${stateObj.name} Default Divorce — What Happens If Your Spouse Doesn't Respond?`,
    description: `${stateObj.name} default divorce when your spouse doesn't respond. Steps, timeline, and what the court decides.`,
  }
}

export default async function StateDefaultDivorcePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'default-divorce')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/default-divorce" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Default Divorce</h1>
          <p className="font-body text-sm text-text-light mb-8">What happens when your spouse doesn't respond · Updated March 2026</p>

          <p className="font-body text-base text-text-muted leading-relaxed mb-8">
            A default divorce (also called divorce by default) occurs when the filing spouse properly serves the other spouse, but the other spouse fails to respond within the required timeframe. The court can then grant the divorce without the non-responding spouse's participation.
          </p>

          <div className="bg-[#fdf9f0] border border-[#e8d4a0] border-l-4 border-l-gold rounded-sm p-5 mb-8">
            <p className="font-body text-sm font-semibold text-gold-dark mb-1">Important: Proper service is essential</p>
            <p className="font-body text-sm text-text-muted leading-relaxed">A default can only be entered if your spouse was properly served according to {stateObj.name} law. If service was defective, a default judgment could be overturned later. Follow the service rules exactly.</p>
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">How Default Divorce Works in {stateObj.name}</h2>
          <div className="space-y-0">
            {[
              { step: 'File Your Petition', desc: `File your divorce petition with the {name} clerk of court and pay the filing fee (${td ? 'check current county fees' : 'varies by county'}). Get file-stamped copies.` },
              { step: 'Serve Your Spouse', desc: 'Have your spouse formally served with the divorce petition and summons. Use a sheriff, process server, or certified mail (rules vary). You cannot serve the papers yourself.' },
              { step: 'Response Deadline Passes', desc: 'After proper service, your spouse has a set number of days to file a Response with the court. In most states this is 20–30 days (check your county\'s summons for the exact deadline). If they don\'t respond, they are in "default."' },
              { step: 'File a Request for Default', desc: `After the response deadline passes, file a "Request for Entry of Default" or "Application for Default Judgment" with the court clerk. Attach proof of service and a declaration that the deadline has passed.` },
              { step: 'Default Hearing or Judgment', desc: 'Some courts require a default hearing where you briefly testify about the marriage and your proposed terms. Others issue a default judgment by mail after reviewing your paperwork. Your spouse is not required to attend.' },
              { step: 'Final Decree Entered', desc: 'The judge reviews your proposed Marital Settlement Agreement (property division, custody, support) and issues the Final Decree of Divorce. Your spouse has waived their right to object by failing to participate.' },
            ].map((p, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-navy text-cream-dark text-xs font-bold flex items-center justify-center flex-shrink-0 z-10">{i+1}</div>
                  {i < 5 && <div className="w-px flex-1 bg-border mt-1" style={{minHeight:'2rem'}} />}
                </div>
                <div className="pb-7 flex-1">
                  <h3 className="font-display text-base font-bold text-navy mb-1">{p.step}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{p.desc.replace('{name}', stateObj.name)}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">What If Your Spouse Can't Be Found?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            If you cannot locate your spouse to serve them, {stateObj.name} allows "service by publication" — publishing a legal notice in a newspaper of general circulation. This is a last resort after making a documented, diligent effort to find your spouse. Service by publication typically adds 4–8 weeks to the timeline.
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-8">
            After the publication period, if your spouse still doesn't respond, you can proceed with a default divorce. Courts treat this as valid service even though your spouse may not have actually seen the notice.
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Can a Default Divorce Be Overturned?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
            Yes — in limited circumstances. A spouse can move to set aside a default judgment if they can show: they weren't properly served, they had a valid reason for not responding (excusable neglect), and they have a meritorious defense. Courts scrutinize these motions carefully, but they can succeed if service was flawed.
          </p>

          <div className="bg-navy rounded-sm p-6 mt-8">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Need to serve divorce papers?</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Our guide covers every service method — sheriff, process server, certified mail, waiver, and publication.</p>
            <Link href="/how-to-serve-divorce-papers" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">How to Serve Divorce Papers →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
