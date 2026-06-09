import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Property vs. Equitable Distribution: What\'s the Difference? (2026)',
  description: 'Learn how your state divides marital property in a divorce. Community property states split assets 50/50; equitable distribution states split "fairly." Find out which applies to you.',
  alternates: {
    canonical: 'https://solongsoulmate.com/community-property-vs-equitable-distribution',
  },
}

const COMMUNITY_PROPERTY_STATES = [
  'Arizona', 'California', 'Idaho', 'Louisiana', 'Nevada',
  'New Mexico', 'Texas', 'Washington', 'Wisconsin',
]

const KEY_DIFFERENCES = [
  {
    aspect: 'Default split',
    community: '50/50 — each spouse owns half of all marital property',
    equitable: 'Varies — judge decides what is "fair" based on circumstances',
  },
  {
    aspect: 'Number of states',
    community: '9 states (plus Alaska by opt-in)',
    equitable: '41 states',
  },
  {
    aspect: 'Separate property',
    community: 'Property owned before marriage or received as gift/inheritance stays separate',
    equitable: 'Same general rule, but some states may consider separate property in the division',
  },
  {
    aspect: 'Debts',
    community: 'Debts incurred during marriage are generally joint',
    equitable: 'Debts allocated based on who incurred them and other factors',
  },
  {
    aspect: 'Prenuptial agreements',
    community: 'Can override default community property rules',
    equitable: 'Can override default division rules',
  },
]

const EQUITABLE_FACTORS = [
  'Length of the marriage',
  'Each spouse\'s income and earning capacity',
  'Age and health of each spouse',
  'Contributions to the marriage (financial and non-financial)',
  'Who has primary custody of children',
  'Standard of living established during marriage',
  'Tax consequences of the proposed division',
  'Whether one spouse wasted marital assets',
]

export default function CommunityPropertyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(196,160,100,0.12) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-eyebrow">Divorce Basics · Property Division</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Community Property vs.{' '}
            <span className="text-gold">Equitable Distribution</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed">
            How your state divides marital property is one of the biggest factors in a divorce. There are two systems in the US — and which one applies to you can dramatically affect your outcome.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-white border border-border rounded-md p-6 border-t-4" style={{ borderTopColor: '#c4a064' }}>
            <h2 className="font-display text-xl font-bold text-navy mb-3">Community Property</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
              All assets and debts acquired during the marriage are owned equally by both spouses. At divorce, everything is split <strong>50/50</strong>.
            </p>
            <p className="font-body text-xs font-semibold text-gold uppercase tracking-wider">9 States</p>
          </div>
          <div className="bg-white border border-border rounded-md p-6 border-t-4" style={{ borderTopColor: '#2a7a4f' }}>
            <h2 className="font-display text-xl font-bold text-navy mb-3">Equitable Distribution</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
              Marital property is divided <strong>fairly</strong> — but not necessarily equally. A judge considers many factors to determine what is equitable in your specific situation.
            </p>
            <p className="font-body text-xs font-semibold uppercase tracking-wider" style={{ color: '#2a7a4f' }}>41 States</p>
          </div>
        </div>

        {/* Community property states */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Community Property States</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            The following 9 states use community property law. Alaska allows couples to opt in to community property rules by written agreement.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {COMMUNITY_PROPERTY_STATES.map(state => (
              <span key={state} className="font-body text-sm font-medium bg-cream border border-border px-3 py-1.5 rounded-sm text-navy">
                {state}
              </span>
            ))}
          </div>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            All other states use equitable distribution. If you live in an equitable distribution state, the split is based on fairness — not a guaranteed 50/50.
          </p>
        </section>

        {/* Key differences table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">Key Differences at a Glance</h2>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-navy text-cream-dark">
                  <th className="text-left px-4 py-3 font-semibold">Aspect</th>
                  <th className="text-left px-4 py-3 font-semibold">Community Property</th>
                  <th className="text-left px-4 py-3 font-semibold">Equitable Distribution</th>
                </tr>
              </thead>
              <tbody>
                {KEY_DIFFERENCES.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.aspect}</td>
                    <td className="px-4 py-3 text-text-muted">{row.community}</td>
                    <td className="px-4 py-3 text-text-muted">{row.equitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Equitable factors */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Factors in Equitable Distribution States</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            Judges in equitable distribution states weigh a variety of factors. Each state has its own list, but common factors include:
          </p>
          <ul className="space-y-2">
            {EQUITABLE_FACTORS.map(f => (
              <li key={f} className="flex items-start gap-3 font-body text-sm text-text-muted">
                <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* What counts as marital property */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">What Is Marital Property?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            In both systems, only <strong>marital property</strong> is divided. Separate property — assets owned before marriage or received as a gift or inheritance — typically stays with the original owner.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream border border-border rounded-md p-5">
              <h3 className="font-body text-sm font-bold text-navy mb-3">Usually Marital Property</h3>
              <ul className="space-y-1.5 font-body text-sm text-text-muted">
                <li>• Income earned during the marriage</li>
                <li>• Home purchased during marriage</li>
                <li>• Retirement accounts accrued during marriage</li>
                <li>• Debts incurred during marriage</li>
                <li>• Business interests built during marriage</li>
              </ul>
            </div>
            <div className="bg-cream border border-border rounded-md p-5">
              <h3 className="font-body text-sm font-bold text-navy mb-3">Usually Separate Property</h3>
              <ul className="space-y-1.5 font-body text-sm text-text-muted">
                <li>• Assets owned before marriage</li>
                <li>• Gifts received by one spouse</li>
                <li>• Inheritances</li>
                <li>• Personal injury compensation</li>
                <li>• Property covered by a prenuptial agreement</li>
              </ul>
            </div>
          </div>
          <p className="font-body text-sm text-text-muted leading-relaxed mt-4">
            <strong>Warning:</strong> Separate property can become "commingled" — and therefore marital property — if it is mixed with marital funds or if marital funds are used to improve it. Keeping clear records is important.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-md p-7 text-center">
          <p className="font-body text-[11px] font-bold tracking-[2.5px] uppercase text-gold mb-3">Find Your State Guide</p>
          <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">
            See How Your State Divides Property
          </h3>
          <p className="font-body text-sm text-cream-dark/65 mb-6">
            Each state guide covers property division rules, filing fees, and step-by-step instructions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/divorce-by-state" className="btn-gold">Browse All 50 State Guides →</Link>
            <Link
              href="/what-is-a-marital-settlement-agreement"
              className="font-body text-sm font-semibold py-3 px-6 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold hover:text-cream-dark transition-all"
            >
              What Is a Settlement Agreement?
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
