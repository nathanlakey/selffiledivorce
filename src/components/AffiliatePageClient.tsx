'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SERVICES, COMPARISON_ROWS } from '@/lib/affiliateData'

function CheckOrX({ val }: { val: boolean }) {
  return val
    ? <span className="font-bold text-[#2a7a4f]">✓</span>
    : <span className="font-bold text-[#c0392b]">✗</span>
}

const HOW_TO_CHOOSE = [
  {
    q: 'If you want the most trusted service overall',
    a: "Go with 3StepDivorce. It has the highest Trustpilot rating (4.6 stars), A+ BBB, 750,000+ divorces processed, and includes a free $50 rebate and free wills. The payment plan makes it accessible if budget is tight.",
  },
  {
    q: "If you're on a tight budget",
    a: "DivorceWriter at $137 flat is the clear winner on price. No subscription fees, 2-year document access, and A+ BBB. The trade-off is fewer extras — but the core product is solid.",
  },
  {
    q: 'If you want attorney access within the platform',
    a: "Hello Divorce is the only service that includes direct attorney access. It's more expensive but genuinely different — closer to a full-service divorce platform than a simple form generator.",
  },
  {
    q: 'If speed is your priority',
    a: 'CompleteCase and DivorceWriter both promise 30-minute completion. CompleteCase has the slickest interface but watch for subscription fees after 30 days.',
  },
  {
    q: "If you're not sure you qualify for online divorce",
    a: "Hello Divorce's free 15-minute strategy call before purchase is uniquely valuable — talk through your situation before spending anything.",
  },
]

export function AffiliatePageClient() {
  const [showCompare, setShowCompare] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(196,160,100,0.12) 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-eyebrow">2026 Rankings · Independently Reviewed</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Best Online Divorce Services <span className="text-gold">of 2026</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We reviewed 12 services so you don't have to. Here are the ones actually worth your money — ranked honestly, with real pros and cons.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {['All 50 States Covered', 'Starting at $137', 'Money-Back Guaranteed', 'No Attorney Needed'].map(p => (
              <span key={p} className="font-body text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/40 text-cream-dark/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">

        {/* Who qualifies */}
        <div className="bg-white border border-border border-l-4 border-l-[#2a7a4f] rounded-sm p-6 mb-12">
          <h3 className="font-display text-lg font-bold text-navy mb-3">Online divorce works if you…</h3>
          <ul className="space-y-2">
            {[
              'Both agree the marriage is over',
              'Have reached (or can reach) agreement on property, debt, and custody',
              "Don't have extremely complex assets like a business or pension dispute",
              'Are not dealing with domestic violence or a serious power imbalance',
            ].map((item, i) => (
              <li key={i} className="font-body text-sm text-text-muted flex gap-2">
                <span className="text-[#2a7a4f] font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-xs text-text-light mt-4">
            Not sure?{' '}
            <Link href="/do-i-need-a-lawyer" className="text-gold hover:text-gold-dark">
              Take our free 7-question assessment →
            </Link>
          </p>
        </div>

        {/* Section heading */}
        <div className="mb-4">
          <p className="section-eyebrow">2026 Rankings</p>
          <h2 className="section-heading">The 5 Best Online Divorce Services</h2>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-6 mb-12">
          {SERVICES.map(s => (
            <div
              key={s.id}
              className={`bg-white border border-border rounded-sm overflow-hidden transition-shadow hover:shadow-md ${s.featured ? 'border-gold shadow-[0_0_0_2px_rgba(196,160,100,0.3)]' : ''}`}
            >
              {/* Card header */}
              <div className="p-7 pb-0">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-body text-xs text-text-light">#{s.rank}</span>
                      <span
                        className="font-body text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-sm text-white"
                        style={{ background: s.badgeColor }}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-black text-navy mb-1">{s.name}</h3>
                    <p className="font-body text-sm text-text-muted">{s.tagline}</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="flex gap-6 flex-wrap py-4 border-b border-border-light">
                  {[
                    { label: 'Price', value: s.price, sub: s.priceNote },
                    { label: 'States', value: s.states },
                    { label: 'Trustpilot', value: `★ ${s.trustpilot}` },
                    { label: 'BBB', value: s.bbb },
                    { label: 'Time', value: s.timeToComplete },
                  ].map(m => (
                    <div key={m.label}>
                      <div className="font-body text-[10px] font-semibold tracking-wider uppercase text-text-light mb-0.5">{m.label}</div>
                      <div className="font-display text-base font-bold text-navy">{m.value}</div>
                      {m.sub && <div className="font-body text-[11px] text-text-light">{m.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros / Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-border-light">
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-border-light">
                  <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#2a7a4f] mb-3">Pros</p>
                  <ul className="space-y-2">
                    {s.pros.map((p, i) => (
                      <li key={i} className="font-body text-[13px] text-text-muted flex gap-2">
                        <span className="text-[#2a7a4f] font-bold flex-shrink-0 mt-0.5">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#c0392b] mb-3">Cons</p>
                  <ul className="space-y-2">
                    {s.cons.map((c, i) => (
                      <li key={i} className="font-body text-[13px] text-text-muted flex gap-2">
                        <span className="text-[#c0392b] font-bold flex-shrink-0 mt-0.5">✗</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 bg-cream flex items-center justify-between flex-wrap gap-4">
                <p className="font-body text-sm text-text-muted">
                  <strong className="text-navy">Best for:</strong> {s.bestFor}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-body text-sm font-bold px-6 py-2.5 rounded-sm text-white transition-opacity hover:opacity-85 ${s.featured ? 'bg-gold' : 'bg-navy'}`}
                >
                  Visit {s.name} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-text-light italic mb-12">
          * Some links above are affiliate links. If you purchase through them, we may earn a commission at no cost to you. This does not affect our rankings — we evaluate services independently.
        </p>

        {/* Comparison table toggle */}
        <button
          onClick={() => setShowCompare(!showCompare)}
          className="w-full flex items-center justify-between p-5 bg-white border border-border rounded-sm hover:bg-cream transition-colors"
        >
          <h3 className="font-display text-lg font-bold text-navy">Side-by-Side Feature Comparison</h3>
          <span className="font-body text-sm font-semibold text-gold">{showCompare ? '▲ Hide' : '▼ Show'}</span>
        </button>

        {showCompare && (
          <div className="overflow-x-auto border border-t-0 border-border mb-12">
            <table className="w-full border-collapse bg-white min-w-[700px]">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3">Feature</th>
                  {SERVICES.map(s => (
                    <th key={s.id} className={`font-body text-[10px] font-semibold tracking-[1.8px] uppercase px-4 py-3 ${s.featured ? 'text-gold' : ''}`}>
                      {s.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(row => (
                  <tr key={row.key} className="border-b border-border-light hover:bg-cream transition-colors">
                    <td className="font-body text-sm font-medium text-text-muted px-4 py-3">{row.label}</td>
                    {SERVICES.map(s => {
                      const val = s[row.key as keyof typeof s]
                      return (
                        <td key={s.id} className="font-body text-sm text-text px-4 py-3 text-center">
                          {typeof val === 'boolean' ? <CheckOrX val={val} /> : String(val)}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* How to choose */}
        <div className="mb-12">
          <p className="section-eyebrow">Buying Guide</p>
          <h2 className="section-heading">How to Choose the Right Service</h2>
          <div className="flex flex-col divide-y divide-border">
            {HOW_TO_CHOOSE.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="font-display text-lg font-bold text-navy mb-2">{item.q}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-black text-cream-dark mb-4">Not Sure Which Path Is Right?</h2>
        <p className="font-body text-cream-dark/65 mb-8 max-w-md mx-auto">
          Take our free 7-question assessment. We'll tell you whether DIY, an online service, or an attorney makes sense.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/do-i-need-a-lawyer" className="btn-gold">Take the Free Assessment →</Link>
          <Link
            href="/divorce-forms-by-state"
            className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all"
          >
            Browse Free State Forms
          </Link>
        </div>
      </section>

      <p className="font-body text-xs text-text-light text-center py-6 px-6 max-w-3xl mx-auto">
        <strong>Disclosure:</strong> SoLongSoulmate.com earns commissions from affiliate partnerships with some services listed on this page. Our editorial rankings are based on independent research including customer reviews, BBB ratings, pricing, and features — not affiliate commission rates. Prices verified March 2026. General information only — not legal advice.
      </p>
    </>
  )
}
