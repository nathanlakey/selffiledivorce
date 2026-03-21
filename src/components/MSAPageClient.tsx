'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MSA_SECTIONS,
  MSA_MISTAKES,
  STATES_REQUIRING_MSA,
} from '@/lib/msaData'

const HOW_TO_STEPS = [
  {
    title: 'Reach Agreement First',
    desc: "Before drafting anything, you and your spouse need to agree on the major issues. An MSA documents the agreement you've already reached — it doesn't create it.",
  },
  {
    title: "Use Your State's Template or Guidelines",
    desc: "Many states provide a standard MSA template or outline. Some states (Tennessee, Virginia) have specific terminology requirements. Start with any template your state's court provides, then customize it.",
  },
  {
    title: 'Be Specific — Never Vague',
    desc: "Every asset and debt should be named specifically. Not \"wife gets the retirement accounts\" but \"Wife receives 50% of Husband's Fidelity 401k account #XXXXX as of the date of the QDRO.\"",
  },
  {
    title: 'Both Spouses Sign Before a Notary',
    desc: "Most states require the MSA to be signed by both spouses in the presence of a notary public. Some states also require witnesses. Check your state's specific requirements.",
  },
  {
    title: 'File with the Court',
    desc: "Submit the signed MSA with your divorce petition or before the final hearing. The judge will review it. If approved, it becomes part of the final divorce decree — a court order.",
  },
  {
    title: 'Execute the Transfer Documents',
    desc: "After divorce is final: record the deed for real estate, obtain a QDRO for retirement accounts, transfer vehicle titles, close joint accounts, and update beneficiaries.",
  },
]

export function MSAPageClient() {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [openMistake, setOpenMistake] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(196,160,100,0.12) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-eyebrow">Divorce Basics · Complete Guide</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            What Is a <span className="text-gold">Marital Settlement Agreement?</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed">
            The MSA is the most important document in an uncontested divorce. It determines everything — who gets the house, what happens to retirement accounts, how debt is split, and if children are involved, how custody and support will work.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-14">

        {/* Definition */}
        <section className="mb-14">
          <div className="bg-white border border-border border-l-4 border-l-gold rounded-r-sm p-7 mb-8">
            <p className="font-body text-base leading-relaxed text-text-muted italic">
              &quot;A Marital Settlement Agreement (MSA) — also called a Separation Agreement, Property Settlement Agreement, or Divorce Agreement depending on your state — is a legally binding written contract between divorcing spouses that resolves all issues related to the end of the marriage.&quot;
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📄', label: 'Also Called', value: 'Separation Agreement, PSA, Divorce Agreement, MDA (TN)' },
              { icon: '⚖', label: 'Legal Status', value: 'Legally binding contract once signed and approved by the court' },
              { icon: '🔒', label: 'Once Approved', value: 'Extremely difficult to modify — courts rarely reopen settled agreements' },
            ].map(f => (
              <div key={f.label} className="bg-white border border-border rounded-sm p-5 text-center">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-body text-[10px] font-semibold tracking-[1.5px] uppercase text-text-light mb-1">{f.label}</div>
                <div className="font-body text-sm text-text-muted leading-snug">{f.value}</div>
              </div>
            ))}
          </div>

          <p className="font-body text-base text-text-muted leading-relaxed mb-4">
            When both spouses agree to the terms of their divorce and put that agreement in writing, the result is a Marital Settlement Agreement. The court reviews the MSA to confirm it&apos;s fair and voluntary, then incorporates it into the final divorce decree. At that point, it becomes a court order — not just a private contract.
          </p>
          <p className="font-body text-base text-text-muted leading-relaxed">
            In most states, you can draft your own MSA without an attorney. What matters is that it is complete, specific, and covers every issue. A vague or incomplete MSA will be rejected by the court or, worse, approved with gaps that create disputes later.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* What to include — accordion */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-3">What Every MSA Should Cover</h2>
          <p className="font-body text-base text-text-muted leading-relaxed mb-6">
            A complete MSA addresses every financial and parenting issue. Click each category to see the full checklist.
          </p>

          <div className="flex flex-col gap-3">
            {MSA_SECTIONS.map((section, i) => (
              <div key={i} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-cream transition-colors text-left gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{section.icon}</span>
                    <div>
                      <div className="font-display text-[17px] font-bold text-navy">{section.title}</div>
                      <div className="font-body text-xs text-text-light">{section.items.length} items to address</div>
                    </div>
                  </div>
                  <span
                    className="font-body text-sm text-gold font-bold flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openSection === i ? 'rotate(180deg)' : 'none' }}
                  >
                    ▼
                  </span>
                </button>
                {openSection === i && (
                  <div className="px-5 pb-5 bg-white border-t border-border-light">
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="font-body text-sm text-text-muted flex gap-2 items-start pb-2 border-b border-border-light last:border-b-0">
                          <span className="text-[#2a7a4f] font-bold flex-shrink-0 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* QDRO warning */}
          <div className="bg-[#fff8e8] border border-[#e8d090] border-l-4 border-l-gold rounded-r-sm p-6 mt-6">
            <h3 className="font-display text-lg font-bold text-navy mb-2">⚠ Retirement Accounts Require a QDRO</h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Listing a 401k, 403b, or pension in your MSA is not enough to divide it. Employer-sponsored retirement plans require a separate legal document called a <strong>Qualified Domestic Relations Order (QDRO)</strong> — a court order sent directly to the plan administrator. Without a QDRO, the plan will not recognize the transfer. IRAs can be divided by the divorce decree alone, but employer plans need a QDRO. Budget $500–$1,500 for a QDRO specialist.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* How to create */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">How to Create a Marital Settlement Agreement</h2>
          <div className="flex flex-col gap-6">
            {HOW_TO_STEPS.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="font-display text-3xl font-black text-gold/30 leading-none flex-shrink-0 w-8">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-navy mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* States where required */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">States Where an MSA Is Specifically Required</h2>
          <p className="font-body text-base text-text-muted leading-relaxed mb-6">
            In most states, a settlement agreement is strongly recommended but technically optional for an uncontested divorce. In some states, a signed agreement is legally required:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-border">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3">State</th>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {STATES_REQUIRING_MSA.map((s, i) => (
                  <tr key={i} className="border-b border-border-light hover:bg-cream transition-colors">
                    <td className="px-4 py-3 font-semibold text-navy">
                      <Link
                        href={`/${s.state.toLowerCase()}-divorce`}
                        className="hover:text-gold transition-colors"
                      >
                        {s.state}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-text-muted">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-text-light italic mt-3">
            Even in states where it&apos;s not technically required, filing without a written agreement is risky — it leaves decisions to the judge&apos;s discretion.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* Mistakes accordion */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">6 Common MSA Mistakes to Avoid</h2>
          <div className="flex flex-col gap-3">
            {MSA_MISTAKES.map((m, i) => (
              <div
                key={i}
                className="border border-[#f0d0c8] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenMistake(openMistake === i ? null : i)}
                  className="w-full flex items-center px-5 py-4 bg-[#fdf8f7] hover:bg-[#fdf0ed] transition-colors text-left gap-4"
                >
                  <span className="font-display text-2xl font-black text-[#c0392b]/20 leading-none flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[16px] font-bold text-[#c0392b] flex-1">{m.title}</span>
                  <span className="font-body text-sm text-[#c0392b] font-bold flex-shrink-0">
                    {openMistake === i ? '▲' : '▼'}
                  </span>
                </button>
                {openMistake === i && (
                  <div className="px-5 pb-5 bg-[#fdf8f7] border-t border-[#f0d0c8]">
                    <p className="font-body text-sm text-text-muted leading-relaxed pt-4">{m.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-sm p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">
            Find Your State&apos;s MSA Requirements
          </h3>
          <p className="font-body text-sm text-cream-dark/65 mb-6">
            Every state guide includes MSA-specific guidance, required terminology, and links to official court templates.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/#state-finder" className="btn-gold">Find My State&apos;s Guide →</Link>
            <Link
              href="/do-i-need-a-lawyer"
              className="font-body text-sm font-semibold py-3 px-6 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all"
            >
              Do I Need a Lawyer?
            </Link>
          </div>
        </div>

        <p className="font-body text-xs text-text-light leading-relaxed mt-8 pt-6 border-t border-border">
          <strong>Disclaimer:</strong> This page provides general legal information, not legal advice. MSA requirements vary by state and individual circumstances. Consult a licensed family law attorney before signing any legal agreement. Once approved by a court, an MSA is very difficult to modify.
        </p>
      </div>
    </>
  )
}
