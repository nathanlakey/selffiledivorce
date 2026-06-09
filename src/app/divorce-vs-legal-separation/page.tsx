import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Divorce vs. Legal Separation: What\'s the Difference? (2026)',
  description: 'Divorce ends a marriage; legal separation keeps it legally intact while the spouses live apart. Learn the differences, pros, cons, and when one makes sense over the other.',
  alternates: {
    canonical: 'https://solongsoulmate.com/divorce-vs-legal-separation',
  },
}

const COMPARISON = [
  {
    aspect: 'Marriage legally ends?',
    divorce: 'Yes — you are legally single',
    separation: 'No — you are still legally married',
  },
  {
    aspect: 'Can remarry?',
    divorce: 'Yes',
    separation: 'No',
  },
  {
    aspect: 'Health insurance',
    divorce: 'Spouse loses coverage on your plan',
    separation: 'Spouse may keep coverage (depends on plan)',
  },
  {
    aspect: 'Social Security benefits',
    divorce: 'Available after 10 years of marriage',
    separation: 'Still accruing if under 10 years',
  },
  {
    aspect: 'Military benefits (USFSPA)',
    divorce: 'Available after 10 years of marriage overlapping service',
    separation: 'Not affected — marriage continues',
  },
  {
    aspect: 'Tax filing status',
    divorce: 'Single or Head of Household',
    separation: 'Married Filing Separately (or jointly if both agree)',
  },
  {
    aspect: 'Inheritance rights',
    divorce: 'Generally extinguished (varies by state)',
    separation: 'Preserved — you remain a spouse',
  },
  {
    aspect: 'Property division',
    divorce: 'Final division of all marital assets',
    separation: 'Can divide property, but marriage continues',
  },
  {
    aspect: 'Available in all states?',
    divorce: 'Yes — all 50 states',
    separation: 'No — not all states recognize legal separation',
  },
]

const SEPARATION_PROS = [
  'Spouse can stay on health insurance (check your plan\'s terms)',
  'Preserves Social Security and military benefits tied to marriage length',
  'Satisfies religious or personal beliefs against divorce',
  'Gives both spouses time to reconsider before finalizing',
  'Allows couples to file taxes as married (sometimes advantageous)',
  'Inheritance rights and next-of-kin status remain intact',
]

const SEPARATION_CONS = [
  'You cannot legally remarry while separated',
  'Requires its own court process — not simpler than divorce',
  'If you later decide to divorce, you must go through the full divorce process',
  'Not available in all states (Georgia, Mississippi, Pennsylvania, and others do not have legal separation)',
  'Some people find the "limbo" status emotionally difficult',
]

const NO_SEPARATION_STATES = [
  'Florida', 'Georgia', 'Louisiana', 'Mississippi', 'Pennsylvania',
  'Texas', 'Delaware', 'Maryland', 'Indiana',
]

export default function DivorceVsSeparationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(196,160,100,0.12) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-eyebrow">Divorce Basics · Separation vs. Divorce</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Divorce vs.{' '}
            <span className="text-gold">Legal Separation</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed">
            Legal separation and divorce are both formal court processes — but only divorce ends your marriage. Understanding the difference can significantly affect your finances, benefits, and future plans.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-white border border-border rounded-md p-6 border-t-4" style={{ borderTopColor: '#c4a064' }}>
            <h2 className="font-display text-xl font-bold text-navy mb-3">Divorce</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Permanently and legally ends the marriage. Both spouses become legally single. All marital property and debts are divided. You can remarry.
            </p>
          </div>
          <div className="bg-white border border-border rounded-md p-6 border-t-4" style={{ borderTopColor: '#2a7a4f' }}>
            <h2 className="font-display text-xl font-bold text-navy mb-3">Legal Separation</h2>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              A court order that governs how a married couple will live apart — addressing property, support, and custody — while keeping the marriage legally intact. You cannot remarry.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-navy text-cream-dark">
                  <th className="text-left px-4 py-3 font-semibold">Aspect</th>
                  <th className="text-left px-4 py-3 font-semibold">Divorce</th>
                  <th className="text-left px-4 py-3 font-semibold">Legal Separation</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.aspect}</td>
                    <td className="px-4 py-3 text-text-muted">{row.divorce}</td>
                    <td className="px-4 py-3 text-text-muted">{row.separation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros and cons of legal separation */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">Pros &amp; Cons of Legal Separation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h3 className="font-body text-sm font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span> Potential Advantages
              </h3>
              <ul className="space-y-2">
                {SEPARATION_PROS.map(p => (
                  <li key={p} className="flex items-start gap-2 font-body text-sm text-text-muted">
                    <span className="text-green-600 flex-shrink-0 mt-0.5">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-body text-sm font-bold text-navy mb-3 flex items-center gap-2">
                <span className="text-red-500">✗</span> Potential Disadvantages
              </h3>
              <ul className="space-y-2">
                {SEPARATION_CONS.map(c => (
                  <li key={c} className="flex items-start gap-2 font-body text-sm text-text-muted">
                    <span className="text-red-500 flex-shrink-0 mt-0.5">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* States without legal separation */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">States That Don&apos;t Recognize Legal Separation</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            Not all states have a legal separation process. In these states, you can live apart informally — but there is no court order called a "legal separation." Your only formal option is divorce.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {NO_SEPARATION_STATES.map(s => (
              <span key={s} className="font-body text-sm font-medium bg-cream border border-border px-3 py-1.5 rounded-sm text-navy">
                {s}
              </span>
            ))}
          </div>
          <p className="font-body text-xs text-text-light">
            Note: State laws change. Always verify with your state court before making decisions.
          </p>
        </section>

        {/* When to choose which */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">When to Choose Legal Separation Over Divorce</h2>
          <div className="space-y-4">
            {[
              { title: 'You haven\'t hit 10 years of marriage', body: 'At 10 years, a divorced spouse may be entitled to Social Security benefits based on the other spouse\'s record, and military spouses gain additional rights under the USFSPA. If you\'re close to 10 years, legal separation can preserve those rights.' },
              { title: 'Health insurance coverage', body: 'Some employer health plans allow a legally separated spouse to remain on the plan. This can be significant if one spouse has serious health conditions or cannot get affordable coverage independently. Verify with the specific plan before assuming this applies.' },
              { title: 'Religious or personal beliefs', body: 'Some religious traditions do not recognize divorce. Legal separation allows couples to formally separate their lives and finances while respecting those beliefs.' },
              { title: 'You\'re not sure yet', body: 'Legal separation can serve as a structured "trial" period. In many states, if you later decide to divorce, you can convert the separation into a divorce using the existing court record — potentially saving some steps.' },
            ].map(item => (
              <div key={item.title} className="bg-cream border border-border rounded-md p-5">
                <h3 className="font-body text-sm font-bold text-navy mb-2">{item.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-md p-7 text-center">
          <p className="font-body text-[11px] font-bold tracking-[2.5px] uppercase text-gold mb-3">Ready to Move Forward?</p>
          <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">
            Find Your State&apos;s Divorce Guide
          </h3>
          <p className="font-body text-sm text-cream-dark/65 mb-6">
            Step-by-step guides for all 50 states — forms, fees, timelines, and everything you need.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/divorce-by-state" className="btn-gold">Browse All 50 State Guides →</Link>
            <Link
              href="/do-i-need-a-lawyer"
              className="font-body text-sm font-semibold py-3 px-6 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold hover:text-cream-dark transition-all"
            >
              Do I Need a Lawyer?
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
