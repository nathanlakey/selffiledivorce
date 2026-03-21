import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'About SoLongSoulmate.com — Free Divorce Guides for All 50 States',
  description: 'SoLongSoulmate.com provides free step-by-step divorce guides for all 50 US states. Learn about our editorial standards, how we research our content, and how the site is funded.',
}

const PILLARS = [
  {
    icon: '📋',
    title: 'State-Specific Accuracy',
    desc: "Divorce law is intensely local. What's true in Texas is wrong in Louisiana. Every guide is researched for the specific state — not adapted from a generic template.",
  },
  {
    icon: '🔗',
    title: 'Official Sources Only',
    desc: "Every forms link goes to an official state court website. Every fee references the actual court clerk schedule. We never send people to third-party form aggregators as a primary source.",
  },
  {
    icon: '⚖',
    title: 'Honest About Limits',
    desc: "We tell people clearly when their situation is too complex for DIY — and route them toward professional help rather than encouraging them to proceed when they shouldn't.",
  },
  {
    icon: '🔄',
    title: 'Regularly Updated',
    desc: 'Filing fees change. Laws get reformed. Maryland completely overhauled its divorce grounds in 2023. Hawaii changed its residency rule in 2021. We track these changes and update accordingly.',
  },
]

const WHAT_WE_COVER = [
  'Step-by-step filing instructions for all 50 states',
  'Official court forms links for every state',
  'Filing fee tables — updated regularly',
  'Residency requirements and waiting periods',
  'Property division rules (community vs. equitable distribution)',
  'Custody and child support basics',
  'Common mistakes to avoid in each state',
  'Printable checklists for every stage',
  'Guides for divorces with and without children',
  'Default divorce procedures',
  'Divorce with real estate',
  'FAQ sections — 35+ questions per state',
]

export default function AboutPage() {
  return (
    <LegalPageLayout
      eyebrow="About This Site"
      title="Free Divorce Guides for All 50 States."
      lastUpdated="March 20, 2026"
    >
      {/* Why we built this */}
      <h2>Why SoLongSoulmate.com Exists</h2>
      <p>
        Most people who need a divorce don't need a lawyer — they need clear information. When a marriage ends and both spouses largely agree on how to divide what they have, the main barrier isn't legal complexity. It's not knowing what forms to file, what order to file them in, what the fees are, or how long the process takes.
      </p>
      <p>
        State court websites exist, but they're designed by government agencies, not by people trying to help someone in an already stressful situation. They're often hard to navigate, incomplete, and assume you already understand the process.
      </p>
      <p>
        SoLongSoulmate.com was built to bridge that gap. We researched every state's divorce process, distilled it into clear language, and organized it into a consistent 13-guide library for every state. All free. No account required.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
        {[
          { num: '50', label: 'States Covered' },
          { num: '650+', label: 'Total Pages' },
          { num: '13', label: 'Guides Per State' },
          { num: '$0', label: 'Cost to Use' },
        ].map(s => (
          <div key={s.label} className="bg-navy rounded-sm p-5 text-center">
            <span className="font-display text-3xl font-black text-gold block leading-none">{s.num}</span>
            <span className="font-body text-[11px] font-medium tracking-[1.5px] uppercase text-cream-dark/45 mt-1 block">{s.label}</span>
          </div>
        ))}
      </div>

      {/* What we cover */}
      <h2>What's Inside</h2>
      <p>Every state includes 13 separate guides — not just a single overview page:</p>
      <ul>
        {WHAT_WE_COVER.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      {/* Editorial standards */}
      <h2>How We Research and Write</h2>
      <p>
        Legal content is high stakes. Getting the residency requirement wrong, citing an outdated filing fee, or describing the wrong court could cause real problems for someone in an already difficult situation. We take that seriously.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
        {PILLARS.map(p => (
          <div key={p.title} className="bg-white border border-border rounded-sm p-6">
            <span className="text-2xl block mb-3">{p.icon}</span>
            <h3 className="font-display text-[17px] font-bold text-navy mb-2">{p.title}</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* What we are and aren't */}
      <h2>What This Site Is — and Isn't</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
        <div>
          <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#2a7a4f] mb-3">We Are</p>
          <ul className="space-y-2">
            {[
              'A free legal information resource',
              'State-specific and regularly updated',
              'Honest about when you need a lawyer',
              'Linked to official court sources',
              'Built for people who largely agree',
            ].map((item, i) => (
              <li key={i} className="font-body text-sm text-text-muted flex gap-2">
                <span className="text-[#2a7a4f] font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#c0392b] mb-3">We Are Not</p>
          <ul className="space-y-2">
            {[
              'A law firm',
              'Providing legal advice',
              'Representing clients',
              'Guaranteeing any outcome',
              'Affiliated with any court or government agency',
            ].map((item, i) => (
              <li key={i} className="font-body text-sm text-text-muted flex gap-2">
                <span className="text-[#c0392b] font-bold flex-shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        <em>If your divorce involves domestic violence, contested custody, significant disputed assets, or a spouse who has hired an attorney — please consult a licensed family law attorney in your state.</em>
      </p>

      {/* How we're funded */}
      <h2>How This Site Is Funded</h2>
      <p>Everything on SoLongSoulmate.com is free to access. We fund the site through two sources:</p>
      <div className="bg-cream-dark border border-border rounded-sm p-6 my-4 not-prose">
        <h3 className="font-display text-lg font-bold text-navy mb-3">Advertising &amp; Affiliate Partnerships</h3>
        <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
          <strong>Google AdSense:</strong> We display ads from Google's advertising network served automatically based on content and visitor interests.
        </p>
        <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
          <strong>Affiliate links:</strong> On our <Link href="/best-online-divorce-services" className="text-gold hover:text-gold-dark">online divorce services comparison</Link> page and quiz results, we include affiliate links to third-party services. When you click and make a purchase, we may earn a commission at no additional cost to you.
        </p>
        <p className="font-body text-sm text-text-muted leading-relaxed">
          <strong>Our editorial independence:</strong> Affiliate relationships do not influence our content, rankings, or recommendations. We clearly label all affiliate links on every page where they appear.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-navy rounded-sm p-8 text-center mt-10 not-prose">
        <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">Ready to Find Your State's Guide?</h3>
        <p className="font-body text-sm text-cream-dark/65 mb-6">Select your state for a complete step-by-step divorce guide. Free, no account required.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/#state-finder" className="btn-gold">Find My State's Guide →</Link>
          <Link href="/do-i-need-a-lawyer" className="font-body text-sm font-semibold py-3 px-6 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all">
            Take the Free Assessment
          </Link>
        </div>
      </div>
    </LegalPageLayout>
  )
}
