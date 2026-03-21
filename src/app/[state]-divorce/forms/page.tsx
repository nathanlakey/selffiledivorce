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
    title: `${stateObj.name} Divorce Forms — Complete Guide (2026)`,
    description: `${stateObj.name} divorce forms — where to get them, how to fill them out, and where to file.`,
  }
}

export default async function StateFormsPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const stateObj = US_STATES.find(s => s.slug === state)
  if (!stateObj) notFound()

  const data = getStateContent(state, 'forms')
  const cd = STATE_COST_DATA.find(d => d.state === stateObj.name)

  const coreFormsNoChildren = [
    { name: 'Petition for Divorce / Dissolution of Marriage', purpose: 'The initial filing — explains who you are, how long you\'ve been married, what you\'re asking the court for.' },
    { name: 'Summons', purpose: 'Notifies your spouse that a divorce action has been filed and gives them a deadline to respond.' },
    { name: 'Marital Settlement Agreement (MSA)', purpose: 'The contract between spouses detailing property division, debt allocation, and spousal support.' },
    { name: 'Financial Disclosure / Affidavit of Finances', purpose: 'Lists all income, expenses, assets, and debts for each spouse. Required by virtually every state.' },
    { name: 'Waiver of Service', purpose: 'If your spouse agrees to waive formal service, they sign this and you skip the process server step.' },
    { name: 'Final Decree of Divorce', purpose: 'The court\'s official order granting the divorce. Many courts provide a template you fill in.' },
  ]

  const additionalChildrenForms = [
    { name: 'Parenting Plan / Custody Agreement', purpose: 'Specifies legal and physical custody, parenting time schedule, holiday schedule, and decision-making.' },
    { name: 'Child Support Worksheet', purpose: 'Calculates the state-mandated child support amount using both parents\' incomes and custody time.' },
    { name: 'Child Support Order', purpose: 'The official court order directing the paying parent to pay child support.' },
    { name: 'UCCJEA Declaration', purpose: 'Lists where the children have lived for the past 5 years — required by the Uniform Child Custody Jurisdiction Act.' },
  ]

  return (
    <StateGuideLayout stateName={stateObj.name} stateSlug={stateObj.slug} currentGuide="/forms" frontmatter={data?.frontmatter}>
      {data ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      ) : (
        <>
          <h1 className="font-display text-4xl font-black text-navy mb-2">{stateObj.name} Divorce Forms Guide</h1>
          <p className="font-body text-sm text-text-light mb-8">Updated March 2026</p>

          <div className="bg-cream border border-border rounded-sm p-5 mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-1">Find official {stateObj.name} forms</p>
              <p className="font-body text-sm text-text-muted">Free court forms, courthouse contact info, and filing instructions.</p>
            </div>
            <Link href="/divorce-forms-by-state" className="font-body text-sm font-bold px-5 py-2.5 bg-navy text-cream-dark rounded-sm hover:bg-navy-light transition-colors flex-shrink-0">
              View {stateObj.name} Forms Directory →
            </Link>
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Core Forms (No Children)</h2>
          <div className="space-y-3 mb-10">
            {coreFormsNoChildren.map((form, i) => (
              <div key={i} className="flex gap-4 p-4 bg-cream border border-border rounded-sm">
                <span className="text-lg flex-shrink-0">📄</span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">{form.name}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5">{form.purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b border-border">Additional Forms If You Have Children</h2>
          <div className="space-y-3 mb-10">
            {additionalChildrenForms.map((form, i) => (
              <div key={i} className="flex gap-4 p-4 bg-cream border border-border rounded-sm">
                <span className="text-lg flex-shrink-0">👶</span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">{form.name}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5">{form.purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Where to Get {stateObj.name} Divorce Forms</h2>
          <div className="space-y-4 mb-10">
            {[
              { title: 'Official Court Website (Free)', icon: '🏛️', desc: `The ${stateObj.name} state court system or your county court clerk provides official, free divorce forms. These are always the most current versions. See our forms directory for the direct link.` },
              { title: 'Clerk of Court (Free)', icon: '🏢', desc: `Your county court clerk's office has paper copies of all required forms. They can tell you exactly which forms you need for your situation — though they cannot give legal advice.` },
              { title: 'Online Divorce Service ($137–$299)', icon: '💻', desc: `Services like 3StepDivorce, CompleteCase, or DivorceWriter complete all forms for you based on your answers. They generate court-ready documents for your specific county, reducing errors and saving significant time.` },
              { title: 'Law Library (Free)', icon: '📚', desc: `Your county courthouse law library has form packets and self-help resources. Many have a self-help center with staff who can help you find the right forms (though they cannot give legal advice).` },
            ].map((source, i) => (
              <div key={i} className="flex gap-4 p-5 bg-cream border border-border rounded-sm">
                <span className="text-2xl flex-shrink-0">{source.icon}</span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">{source.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{source.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {cd?.note && (
            <div className="bg-cream border-l-4 border-gold p-5 rounded-sm mb-8">
              <p className="font-body text-sm text-text-muted"><strong className="text-navy">{stateObj.name} note:</strong> {cd.note}</p>
            </div>
          )}

          <h2 className="font-display text-2xl font-bold text-navy mt-10 mb-4 pb-3 border-b border-border">Tips for Filling Out Forms Correctly</h2>
          <ul className="font-body text-sm text-text-muted space-y-3 mb-8">
            {[
              'Use black ink (or type) — most courts require it for scanning and records',
              'Print your full legal name exactly as it appears on your marriage certificate',
              'Don\'t leave fields blank — write "N/A" for fields that don\'t apply',
              'Sign only where indicated, in front of a notary if required',
              'Make 3 copies of everything before filing: one for the court, one for your spouse, one for your records',
              'If you make a mistake, start over with a fresh form — don\'t use white-out',
            ].map((tip, i) => (
              <li key={i} className="flex gap-2"><span className="text-gold font-bold flex-shrink-0">✓</span>{tip}</li>
            ))}
          </ul>

          <div className="bg-navy rounded-sm p-6 mt-8">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">Skip the form confusion</p>
            <p className="font-body text-sm text-cream-dark/80 mb-4">An online divorce service fills out all forms correctly for your {stateObj.name} county — guaranteed court-approved or your money back.</p>
            <Link href="/best-online-divorce-services" className="inline-block font-body text-sm font-bold px-5 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">Compare Online Services →</Link>
          </div>
        </>
      )}
    </StateGuideLayout>
  )
}
