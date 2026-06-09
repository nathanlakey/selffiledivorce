import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is a QDRO? Dividing Retirement Accounts in Divorce (2026)',
  description: 'A QDRO (Qualified Domestic Relations Order) is required to split most retirement accounts in a divorce without tax penalties. Learn how it works, what it costs, and when you need one.',
  alternates: {
    canonical: 'https://solongsoulmate.com/what-is-a-qdro',
  },
}

const QDRO_STEPS = [
  {
    num: '1',
    title: 'Reach Agreement on the Division',
    body: 'First, you and your spouse must agree on how the retirement account will be divided. This is typically included in your Marital Settlement Agreement (MSA). Be specific: specify the account, the percentage or dollar amount, and the valuation date.',
  },
  {
    num: '2',
    title: 'Hire a QDRO Specialist',
    body: 'A QDRO is a complex legal document. While attorneys can draft one, many divorce attorneys outsource this to QDRO specialists who focus exclusively on this area. Costs typically range from $500–$1,500 per account.',
  },
  {
    num: '3',
    title: 'Get Pre-Approval from the Plan Administrator',
    body: 'Before finalizing the divorce, submit a draft QDRO to the plan administrator (the employer or financial institution) for pre-approval. Each plan has its own requirements — a QDRO that works for one plan may be rejected by another.',
  },
  {
    num: '4',
    title: 'Submit to the Court',
    body: 'Once pre-approved, submit the QDRO to the court for a judge\'s signature. This makes it a court order.',
  },
  {
    num: '5',
    title: 'Submit the Signed QDRO to the Plan',
    body: 'Send the court-signed QDRO to the plan administrator. They will process the transfer and create a separate account for the alternate payee (the non-employee spouse).',
  },
]

const ACCOUNT_TYPES = [
  { type: '401(k)', needsQdro: true, note: 'Yes — QDRO required for all employer-sponsored defined contribution plans' },
  { type: '403(b)', needsQdro: true, note: 'Yes — same rules as 401(k)' },
  { type: 'Pension (defined benefit)', needsQdro: true, note: 'Yes — specifies amount, start date, and survivor benefits' },
  { type: 'IRA (Traditional or Roth)', needsQdro: false, note: 'No — IRAs use a "transfer incident to divorce" instead of a QDRO' },
  { type: 'Military retirement', needsQdro: false, note: 'No — governed by the USFSPA; requires a different court order' },
  { type: 'Federal civil service (FERS/CSRS)', needsQdro: false, note: 'No — requires a Court Order Acceptable for Processing (COAP)' },
]

const COMMON_MISTAKES = [
  {
    mistake: 'Forgetting to do the QDRO before the divorce is final',
    fix: 'Always address retirement accounts in the MSA and get the QDRO drafted before or immediately after the divorce is final. Delays can complicate enforcement.',
  },
  {
    mistake: 'Using a generic template without plan-specific approval',
    fix: 'Every retirement plan has its own rules. A QDRO that works for one company\'s 401(k) may be rejected by another. Always get pre-approval from the specific plan administrator.',
  },
  {
    mistake: 'Cashing out instead of rolling over',
    fix: 'If the alternate payee cashes out the funds rather than rolling them into their own IRA, they will owe income taxes. A proper QDRO allows a one-time penalty-free withdrawal or a tax-free rollover.',
  },
  {
    mistake: 'Forgetting survivor benefits in pension QDROs',
    fix: 'For pension plans, the QDRO must specify whether the alternate payee gets survivor benefits if the employee spouse dies before retirement. This can be worth significant money.',
  },
  {
    mistake: 'Not accounting for loans against the 401(k)',
    fix: 'If the employee spouse has taken a loan against their 401(k), the account balance is reduced. Your QDRO should specify whether the division is based on the gross or net balance.',
  },
]

export default function QdroPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(196,160,100,0.12) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-eyebrow">Divorce Basics · Retirement Accounts</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            What Is a <span className="text-gold">QDRO?</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed">
            A Qualified Domestic Relations Order (QDRO) is a court order that tells a retirement plan to divide benefits between divorcing spouses — without triggering the early withdrawal penalties or taxes that would normally apply.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* What is it */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">The Short Version</h2>
          <div className="bg-cream border border-border rounded-md p-6">
            <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
              If you or your spouse has a <strong>401(k), 403(b), or pension</strong> through an employer, you cannot simply withdraw and transfer half the money in a divorce. Doing so would trigger income taxes and a 10% early withdrawal penalty.
            </p>
            <p className="font-body text-sm text-text-muted leading-relaxed mb-3">
              A QDRO is the legal mechanism that allows the plan to make a tax-free transfer directly to the non-employee spouse (called the "alternate payee"). The alternate payee can then roll it into their own IRA or take it as a taxable distribution.
            </p>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              <strong>Without a QDRO, you have no legal right to your spouse&apos;s employer retirement account</strong> — even if your settlement agreement says you&apos;re entitled to it.
            </p>
          </div>
        </section>

        {/* Which accounts need a QDRO */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">Which Accounts Require a QDRO?</h2>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-navy text-cream-dark">
                  <th className="text-left px-4 py-3 font-semibold">Account Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Needs QDRO?</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ACCOUNT_TYPES.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    <td className="px-4 py-3 font-semibold text-navy">{row.type}</td>
                    <td className="px-4 py-3">
                      <span className={`font-semibold ${row.needsQdro ? 'text-gold' : 'text-text-muted'}`}>
                        {row.needsQdro ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step by step */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">How the QDRO Process Works</h2>
          <div className="space-y-4">
            {QDRO_STEPS.map(step => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-cream-dark font-display font-bold text-sm flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-body text-sm font-bold text-navy mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">How Much Does a QDRO Cost?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'QDRO Specialist', range: '$500 – $1,500', note: 'Per retirement account. Many divorce attorneys outsource to specialists.' },
              { label: 'Plan Admin Fee', range: '$300 – $600', note: 'Many employers charge a fee to process the QDRO. Check with the plan.' },
              { label: 'DIY (not recommended)', range: '$50 – $200', note: 'Online templates exist but plan-specific errors are common and costly to fix.' },
            ].map(c => (
              <div key={c.label} className="bg-white border border-border rounded-md p-5">
                <p className="font-body text-[11px] font-bold tracking-wider uppercase text-gold mb-2">{c.label}</p>
                <p className="font-display text-2xl font-bold text-navy mb-2">{c.range}</p>
                <p className="font-body text-xs text-text-muted leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-text-muted leading-relaxed mt-4">
            If multiple retirement accounts need to be divided, each account requires its own separate QDRO.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-5">Common QDRO Mistakes</h2>
          <div className="space-y-4">
            {COMMON_MISTAKES.map(m => (
              <div key={m.mistake} className="bg-white border border-border rounded-md p-5">
                <h3 className="font-body text-sm font-bold text-red-600 mb-2">✗ {m.mistake}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  <strong className="text-navy">Fix: </strong>{m.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-md p-7 text-center">
          <p className="font-body text-[11px] font-bold tracking-[2.5px] uppercase text-gold mb-3">Going Through a Divorce?</p>
          <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">
            Find Your State&apos;s Complete Guide
          </h3>
          <p className="font-body text-sm text-cream-dark/65 mb-6">
            Every state guide covers property division, retirement accounts, forms, fees, and step-by-step instructions.
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
