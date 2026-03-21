import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is a Marital Settlement Agreement? (MSA Guide 2026)',
  description: 'A marital settlement agreement (MSA) is the written contract that resolves all divorce issues. Learn what it must cover, how to write one, and common mistakes to avoid.',
  keywords: ['marital settlement agreement', 'MSA divorce', 'divorce settlement agreement', 'separation agreement'],
}

const MSA_SECTIONS = [
  { title: 'Property Division', desc: 'Who gets the house, cars, bank accounts, investments, and personal property. Must specify how each asset will be transferred.' },
  { title: 'Debt Allocation', desc: 'Who is responsible for each debt — mortgage, credit cards, student loans, car loans. Courts don\'t bind creditors; include indemnification clauses.' },
  { title: 'Spousal Support (Alimony)', desc: 'Whether either spouse will pay support, how much, for how long, and what events terminate it (remarriage, death, etc.).' },
  { title: 'Child Custody & Parenting Plan', desc: 'Legal custody (decision-making) and physical custody (where the child lives). Schedule, holidays, vacations, and communication rules.' },
  { title: 'Child Support', desc: 'Amount, payment frequency, duration, and how it adjusts. Most states have calculators — your MSA should follow or explain deviation from guidelines.' },
  { title: 'Retirement Accounts', desc: 'How 401(k)s, pensions, and IRAs are divided. A QDRO (Qualified Domestic Relations Order) is usually required — a separate court order.' },
  { title: 'Health Insurance', desc: 'Who maintains coverage for children after divorce. COBRA continuation rights for the non-employee spouse.' },
  { title: 'Tax Issues', desc: 'Who claims the children as dependents, how joint year tax liability/refunds are split, and filing status for the year of divorce.' },
]

const MISTAKES = [
  { num: '01', title: 'Failing to address all assets', desc: 'Any asset not mentioned in the MSA may be subject to future litigation. List everything — even items you think are obviously yours.' },
  { num: '02', title: 'Not understanding the QDRO requirement', desc: 'Agreeing to divide a 401(k) in the MSA is only half the job. A separate QDRO must be submitted to the plan administrator.' },
  { num: '03', title: 'Vague language', desc: '"We will share the house" is not enforceable. "The marital home shall be sold within 90 days of the divorce decree; proceeds split 50/50 after mortgage payoff" is.' },
  { num: '04', title: 'Not accounting for tax consequences', desc: 'Transferring appreciated investments or a house can trigger capital gains taxes. $200,000 in stock ≠ $200,000 cash after taxes.' },
  { num: '05', title: 'Omitting enforcement mechanisms', desc: 'Include provisions for what happens if a party fails to comply — not just what each party must do.' },
  { num: '06', title: 'Signing under duress', desc: 'An MSA signed under pressure, duress, or without full financial disclosure can be set aside by a court. Never sign without understanding every term.' },
]

export default function WhatIsAnMSAPage() {
  return (
    <>
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">Key Divorce Concept</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            What Is a Marital Settlement Agreement?
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-xl mx-auto">
            The MSA is the most important document in your divorce. It's the binding contract that resolves every issue — property, custody, support, and debt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="prose-content mb-14">
          <h2>The Short Answer</h2>
          <p>
            A <strong>Marital Settlement Agreement (MSA)</strong> — also called a Separation Agreement, Divorce Settlement Agreement, or Property Settlement Agreement depending on the state — is a legally binding written contract signed by both spouses that resolves all issues in your divorce.
          </p>
          <p>
            Once a judge reviews and approves it (a formality in most uncontested cases), it becomes a court order. Both parties must comply with it.
          </p>
          <p>
            In an uncontested divorce, the MSA is what makes everything work. It's how both spouses show the court they've agreed on everything so the divorce can be granted quickly and cheaply. Without it, the court decides for you — which is slower, more expensive, and less likely to match what either of you wanted.
          </p>

          <h2>Do I Need an Attorney to Draft an MSA?</h2>
          <p>
            <strong>Not necessarily — but it depends on complexity.</strong> For simple divorces with modest assets, many couples draft their own MSA using their state's template or a guided online service. For divorces involving real estate, retirement accounts, businesses, or children, having an attorney review (if not draft) the MSA is worth the cost.
          </p>
          <p>
            The middle path: draft it yourself or with a mediator, then pay an attorney $300–$700 to review it before signing. This unbundled approach catches problems without the full retainer cost.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="section-heading">What a Complete MSA Must Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MSA_SECTIONS.map((s, i) => (
              <div key={s.title} className="bg-white border border-border rounded-sm p-5">
                <div className="flex items-start gap-3">
                  <span className="font-display text-3xl font-black text-border leading-none flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-navy mb-1">{s.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        <section className="mb-14">
          <h2 className="section-heading">6 Common MSA Mistakes to Avoid</h2>
          <div className="flex flex-col gap-4">
            {MISTAKES.map(m => (
              <div key={m.num} className="bg-white border border-border rounded-sm p-5 flex gap-4">
                <span className="font-display text-3xl font-black text-border leading-none flex-shrink-0">{m.num}</span>
                <div>
                  <h3 className="font-display text-[16px] font-bold text-navy mb-1">{m.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white border border-border rounded-sm p-7 mb-4">
          <h2 className="font-display text-xl font-bold text-navy mb-3">Ready to Find Your State's MSA Template?</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            Each state guide includes specific MSA guidance, required clauses, and links to official templates where available.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/divorce-by-state" className="btn-primary">Browse State Guides →</Link>
            <Link href="/do-i-need-a-lawyer" className="font-body text-sm font-semibold py-3 px-6 border-2 border-navy text-navy rounded-sm hover:bg-navy hover:text-cream-dark transition-all">Do I Need a Lawyer?</Link>
          </div>
        </div>
      </div>
    </>
  )
}
