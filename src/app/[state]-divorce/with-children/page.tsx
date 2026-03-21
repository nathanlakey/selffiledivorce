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
    title: `${stateObj.name} Divorce With Children — Custody, Support & Filing (2026)`,
    description: `${stateObj.name} divorce with minor children. Custody arrangements, child support, and required forms.`,
  }
}

export default async function StateWithChildrenPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'with-children')
  const td = STATE_TIMELINE_DATA.find(d => d.state === stateObj.name)
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/with-children" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce With Children</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <div className="bg-[#fdf9f0] border border-[#e8d4a0] border-l-4 border-l-gold rounded-sm p-5 mb-8">
            <p className="font-body text-sm font-semibold text-gold-dark mb-1">More complex — but still DIY-possible</p>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Divorcing with children requires additional forms and agreements: a Parenting Plan (custody schedule), a Child Support Worksheet, and sometimes proof that both parents attended a state-required parenting class. If both parents agree on custody and support, this is still very manageable without an attorney.
            </p>
          </div>

          {td && cd && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Filing Fee', value: cd.filing },
                { label: 'Waiting Period', value: td.waitPeriod },
                { label: 'Uncontested Timeline', value: td.uncontested },
              ].map(item => (
                <div key={item.label} className="bg-cream border border-border rounded-sm p-4">
                  <p className="font-body text-[10px] font-bold tracking-[1.5px] uppercase text-text-light mb-1">{item.label}</p>
                  <p className="font-display text-base font-bold text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Child Custody in {stateObj.name}</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            {stateObj.name} courts make custody decisions based on the "best interests of the child" standard. This includes the child's relationship with each parent, each parent's ability to provide stability, any history of domestic violence, and the child's preference (for older children).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { label: 'Legal Custody', desc: 'The right to make major decisions about the child\'s education, healthcare, and religion. Can be sole (one parent) or joint (both parents share decision-making).' },
              { label: 'Physical Custody', desc: 'Where the child primarily lives. Can be primary (child lives mostly with one parent) or joint/shared (child splits time between homes).' },
              { label: 'Parenting Plan', desc: `${stateObj.name} requires a detailed written Parenting Plan submitted to the court. It specifies the custody schedule, holiday schedule, decision-making process, and dispute resolution.` },
              { label: 'Child Support', desc: `${stateObj.name} uses a specific formula to calculate child support based on both parents' gross incomes, the custody arrangement, childcare costs, and insurance premiums.` },
            ].map((item, i) => (
              <div key={i} className="bg-cream border border-border rounded-sm p-5">
                <h3 className="font-display text-base font-bold text-navy mb-2">{item.label}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Additional Forms Required With Children</h2>
          <ul className="font-body text-sm text-text-muted space-y-3 mb-10">
            {[
              'Parenting Plan / Custody and Visitation Agreement',
              'Child Support Worksheet (calculated using state formula)',
              'Child Support Order',
              'Proof of completion of state-required parenting class (most states require this)',
              'If children receive public benefits: may require notifying the state agency',
              'UCCJEA (Uniform Child Custody Jurisdiction and Enforcement Act) declaration — shows where children have lived for the past 5 years',
            ].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0">•</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">When to Get an Attorney</h2>
          <ul className="font-body text-sm text-text-muted space-y-3 mb-8">
            {[
              'You and your spouse cannot agree on custody or parenting time',
              'There are allegations of abuse, neglect, or substance abuse',
              'One parent wants to relocate out of state with the children',
              'A child has special needs requiring complex care plans',
              'Child support involves unusually high income or complex income sources',
            ].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-[#c0392b] font-bold flex-shrink-0">!</span>{item}</li>
            ))}
          </ul>

          <div className="bg-navy rounded-sm p-6 mt-10">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Not sure you qualify for DIY?</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">Our 7-question quiz helps you figure out whether to go DIY, use an online service, or consult an attorney — specifically for your situation.</p>
            <Link href="/do-i-need-a-lawyer" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Take the Free Assessment →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
