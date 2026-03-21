'use client'

import { useState } from 'react'
import Link from 'next/link'

const SERVICES = [
  {
    name: '3StepDivorce',
    url: 'https://www.3stepdivorce.com',
    price: '$299',
    bestFor: 'Best Overall',
    bestForColor: '#2a7a4f',
    rating: 4.7,
    states: 'All 50',
    children: 'Yes',
    refund: 'Satisfaction guarantee',
    summary: 'The most popular online divorce service. Generates all court-ready forms for your specific state, includes unlimited revisions, and provides step-by-step filing instructions.',
    pros: ['All 50 states supported', 'Affordable flat fee', 'Step-by-step attorney-approved instructions', 'Free updates if laws change'],
    cons: ['Does not provide legal advice', 'Both spouses must agree on all issues'],
    verdict: 'Best choice for most uncontested divorces. Well-established service with a strong track record.',
  },
  {
    name: 'CompleteCase',
    url: 'https://www.completecase.com',
    price: '$299',
    bestFor: 'Best for Simplicity',
    bestForColor: '#2a6aaf',
    rating: 4.5,
    states: 'All 50',
    children: 'Yes',
    refund: '100% money back',
    summary: 'Clean guided interview process. Especially easy to use if you\'re not tech-savvy. Strong refund policy.',
    pros: ['Very easy interface', 'Strong money-back guarantee', 'All 50 states', 'Good customer support'],
    cons: ['Fewer advanced options than competitors', 'Some users report slower document delivery'],
    verdict: 'Excellent for people who want simplicity above all else. The refund policy is reassuring.',
  },
  {
    name: 'WeVorce',
    url: 'https://www.wevorce.com',
    price: '$599–$999',
    bestFor: 'Best with Guidance',
    bestForColor: '#7a4aaf',
    rating: 4.3,
    states: 'All 50',
    children: 'Yes',
    refund: 'Partial refund',
    summary: 'More than just forms — includes access to divorce coaches and optional mediation. Designed for couples who need some guidance but want to avoid attorneys.',
    pros: ['Divorce coaches available', 'Built-in mediation support', 'Good for couples with some disagreements', 'Comprehensive agreement tools'],
    cons: ['More expensive than basic form services', 'Overkill for very simple divorces'],
    verdict: 'Worth the higher price if you need coaching or mediation support. Bridges gap between DIY and attorneys.',
  },
  {
    name: 'It\'s Over Easy',
    url: 'https://www.itsovereasy.com',
    price: '$395',
    bestFor: 'Best for Collaboration',
    bestForColor: '#c4a064',
    rating: 4.4,
    states: 'All 50',
    children: 'Yes',
    refund: 'Satisfaction guarantee',
    summary: 'Both spouses work through the platform together in real-time, coming to agreement on each issue. Founded by a family law attorney.',
    pros: ['Built for both spouses to collaborate', 'Attorney-founded — good legal grounding', 'Includes marital settlement agreement', 'Good for amicable separations'],
    cons: ['Requires both spouses to actively participate', 'Slightly higher price point'],
    verdict: 'Excellent if both spouses are willing to work through it together. The collaborative approach is smart.',
  },
  {
    name: 'DivorceWriter',
    url: 'https://www.divorcewriter.com',
    price: '$149–$249',
    bestFor: 'Best Budget Option',
    bestForColor: '#1a7a5a',
    rating: 4.1,
    states: 'All 50',
    children: 'Yes',
    refund: '100% guarantee',
    summary: 'The lowest-cost full-service option. Does exactly what you need — generates court-ready forms — without extras that drive up cost.',
    pros: ['Lowest price of full-service providers', 'All 50 states', 'Simple and fast', 'Good guarantee'],
    cons: ['Less support than premium services', 'Interface is less polished', 'Fewer features for complex situations'],
    verdict: 'Best if budget is your primary concern and your case is truly simple. Gets the job done.',
  },
]

const WHEN_TO_USE = [
  { emoji: '✅', title: 'You and your spouse agree on everything', desc: 'Every asset, debt, custody arrangement, and support amount is settled.' },
  { emoji: '✅', title: 'Your case is uncontested', desc: 'Neither party is going to fight anything in court.' },
  { emoji: '✅', title: 'You want forms done correctly', desc: "You're capable of filing yourself but want to ensure the forms are right." },
  { emoji: '❌', title: 'You have unresolved disagreements', desc: 'Online services cannot help you negotiate. Consider a mediator first.' },
  { emoji: '❌', title: 'Domestic violence is involved', desc: 'Safety and legal protections require an attorney, not forms.' },
  { emoji: '❌', title: 'Complex business or pension assets', desc: 'These require professional valuation and QDROs — not form software.' },
]

function Stars({ rating }: { rating: number }) {
  return (
    <span className="font-body text-sm text-[#c4a064]">
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      <span className="text-text-muted ml-1">{rating}</span>
    </span>
  )
}

export function OnlineServicesClient() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">2026 Review · Unbiased Comparison</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Best Online Divorce Services <span className="text-gold">2026</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-xl mx-auto">
            Online divorce services generate court-ready forms for $149–$999. Here's an honest comparison of the top five — and which is right for your situation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Quick explainer */}
        <section className="mb-14 bg-white border border-border rounded-sm p-7">
          <h2 className="font-display text-xl font-bold text-navy mb-3">What Do Online Divorce Services Actually Do?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            Online divorce services are <strong>form-generation tools</strong>. You answer a guided interview, and the software fills out all required court forms for your state — correctly formatted, with your specific information. You then print, sign, and file them yourself.
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            They are <strong>not law firms and cannot provide legal advice</strong>. They work well when both spouses have already agreed on all issues. Think of them as a very smart form-filling assistant.
          </p>
        </section>

        {/* Service cards */}
        <section className="mb-14">
          <h2 className="section-heading">Top 5 Online Divorce Services Compared</h2>
          <div className="flex flex-col gap-5">
            {SERVICES.map((s, i) => (
              <div key={s.name} className="bg-white border border-border rounded-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-[13px] font-bold text-text-light">#{i + 1}</span>
                        <h3 className="font-display text-xl font-bold text-navy">{s.name}</h3>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-sm border"
                          style={{
                            color: s.bestForColor,
                            background: `${s.bestForColor}15`,
                            borderColor: `${s.bestForColor}40`,
                          }}
                        >
                          {s.bestFor}
                        </span>
                      </div>
                      <Stars rating={s.rating} />
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold text-navy">{s.price}</p>
                      <p className="font-body text-[11px] text-text-light">flat fee</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 bg-cream rounded-sm p-3 mb-4 text-center">
                    {[
                      { label: 'States', val: s.states },
                      { label: 'Children', val: s.children },
                      { label: 'Refund', val: s.refund },
                    ].map(stat => (
                      <div key={stat.label}>
                        <p className="font-body text-[10px] font-bold tracking-wide uppercase text-text-light mb-0.5">{stat.label}</p>
                        <p className="font-body text-xs font-semibold text-text">{stat.val}</p>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-sm text-text-muted leading-relaxed mb-4">{s.summary}</p>

                  <button
                    onClick={() => setExpanded(expanded === s.name ? null : s.name)}
                    className="font-body text-[12px] font-semibold text-gold hover:underline"
                  >
                    {expanded === s.name ? 'Show less ↑' : 'See pros, cons & verdict ↓'}
                  </button>
                </div>

                {expanded === s.name && (
                  <div className="border-t border-border p-6 bg-cream">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                      <div>
                        <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-[#1e7a45] mb-2">Pros</p>
                        <ul className="space-y-1.5">
                          {s.pros.map(p => (
                            <li key={p} className="font-body text-sm text-text-muted flex gap-2">
                              <span className="text-[#1e7a45] font-bold flex-shrink-0">✓</span>{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-[#c0392b] mb-2">Cons</p>
                        <ul className="space-y-1.5">
                          {s.cons.map(c => (
                            <li key={c} className="font-body text-sm text-text-muted flex gap-2">
                              <span className="text-[#c0392b] font-bold flex-shrink-0">✗</span>{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white border border-border rounded-sm p-4">
                      <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-navy mb-1">Our Verdict</p>
                      <p className="font-body text-sm text-text-muted">{s.verdict}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* When to use */}
        <section className="mb-14">
          <h2 className="section-heading">When Should You Use an Online Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHEN_TO_USE.map(w => (
              <div key={w.title} className="bg-white border border-border rounded-sm p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{w.emoji}</span>
                <div>
                  <p className="font-body text-sm font-semibold text-text mb-1">{w.title}</p>
                  <p className="font-body text-sm text-text-muted">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIY alternative */}
        <section className="bg-white border border-border rounded-sm p-7 mb-4">
          <h2 className="font-display text-xl font-bold text-navy mb-3">The Free Alternative: DIY with Court Forms</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            Every state provides free official divorce forms on the court's website. If you're comfortable doing research and following instructions, you can often get the same result as an online service for $0 in form costs.
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            The tradeoff: court forms require more research and some states' instructions are better than others. Online services are worth the $149–$299 if you want the form-filling done for you with guidance.
          </p>
          <Link href="/divorce-forms-by-state" className="btn-primary">Browse Free Court Forms by State →</Link>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-navy py-14 px-6 text-center">
        <h2 className="font-display text-2xl font-black text-cream-dark mb-3">Not sure which path fits your situation?</h2>
        <p className="font-body text-cream-dark/65 mb-7 max-w-md mx-auto">Take our free 2-minute quiz to find out if DIY, online service, mediation, or an attorney is right for you.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/do-i-need-a-lawyer" className="btn-gold">Take the Free Quiz →</Link>
          <Link href="/divorce-cost-by-state" className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all">Compare All Costs</Link>
        </div>
      </section>

      <p className="font-body text-xs text-text-light text-center py-6 px-6 max-w-3xl mx-auto">
        <strong>Disclosure:</strong> SoLongSoulmate.com may receive compensation if you use links to the services above. This does not affect our recommendations — we only list services we believe provide genuine value. All prices verified March 2026.
      </p>
    </>
  )
}
