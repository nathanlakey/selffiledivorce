'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SERVICE_METHODS, STATE_SERVICE_RULES } from '@/lib/serviceData'

const AFTER_SERVICE_STEPS = [
  {
    title: 'Response Deadline Starts',
    desc: "Once your spouse is served, they have a set number of days to file a formal response. This ranges from 20 days (Arizona, Oklahoma) to 35 days (New Jersey). If they don't respond by the deadline, you can request a default.",
  },
  {
    title: 'File Proof of Service with the Court',
    desc: "Whichever method you use, the official proof (Return of Service, Affidavit, or signed Acceptance/Waiver) must be filed with the court. The clock doesn't officially start until this is on file.",
  },
  {
    title: 'Waiting Period Begins',
    desc: "In states with a mandatory waiting period, the clock often starts at service. California's 6-month period starts at service. Arizona's 60-day period starts at service. Know your state's rule.",
  },
  {
    title: 'Negotiate and Finalize Documents',
    desc: "While the response period is running, this is the time to finalize your Settlement Agreement. Most agreed divorces complete negotiation and document signing during the weeks between service and the final hearing.",
  },
]

export function ServePapersClient() {
  const [activeMethod, setActiveMethod] = useState('acceptance')

  const method = SERVICE_METHODS.find(m => m.id === activeMethod)!

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(196,160,100,0.1) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-eyebrow">Divorce Basics · Complete Guide</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            How to Serve <span className="text-gold">Divorce Papers</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed">
            &quot;Serving&quot; your spouse is a required legal step in every state. Here are the five methods, when to use each one, and what actually counts as valid proof of service.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 md:px-8 py-14">

        {/* What is service */}
        <section className="mb-14">
          <div className="bg-white border border-border border-l-4 border-l-gold rounded-r-sm p-6 mb-6">
            <p className="font-body text-sm text-text-muted leading-relaxed">
              <strong className="text-navy">Service of process</strong> is the legal requirement to formally notify your spouse that a divorce case has been filed against them. It&apos;s not enough to email or text them a copy — courts require specific methods that create an official record proving your spouse received the papers. Until proper service is complete, your divorce case cannot move forward.
            </p>
          </div>

          {/* Cannot serve yourself warning */}
          <div className="bg-[#fdf2f0] border border-[#f0c0b8] border-l-4 border-l-[#c0392b] rounded-r-sm p-5">
            <h3 className="font-display text-base font-bold text-[#c0392b] mb-2">
              ⚠ You Cannot Serve the Papers Yourself
            </h3>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              In virtually every state, the person filing for divorce cannot personally deliver the papers to their spouse. Service must be completed by a sheriff, process server, court clerk, or another adult who is not a party to the case. The only exception is the Acceptance/Waiver method, where your spouse voluntarily signs an acknowledgment form.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* 5 Methods — tab interface */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            The 5 Service Methods — Choose Yours
          </h2>

          {/* Method tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICE_METHODS.map(m => (
              <button
                key={m.id}
                onClick={() => setActiveMethod(m.id)}
                className={`flex items-center gap-2 font-body text-[13px] font-semibold px-4 py-2.5 border-2 rounded-sm transition-all ${
                  activeMethod === m.id
                    ? 'border-navy bg-navy text-cream-dark'
                    : 'border-border bg-white text-text-muted hover:border-gold hover:text-gold'
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.title.split(' ').slice(0, 2).join(' ')}</span>
              </button>
            ))}
          </div>

          {/* Active method detail */}
          <div className="bg-white border border-border rounded-sm overflow-hidden">
            {/* Method header */}
            <div className="p-6 border-b border-border-light">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-1">
                    {method.icon} {method.title}
                  </h3>
                  <p className="font-body text-sm text-text-light">Best for: {method.best}</p>
                </div>
                <div className="flex gap-6 flex-shrink-0">
                  <div className="text-right">
                    <div className="font-body text-[10px] font-semibold tracking-wider uppercase text-text-light">Cost</div>
                    <div className="font-display text-xl font-bold" style={{ color: method.color }}>{method.cost}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-body text-[10px] font-semibold tracking-wider uppercase text-text-light">Speed</div>
                    <div className="font-body text-sm font-semibold text-navy mt-0.5">{method.speed}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Description */}
              <p className="font-body text-sm text-text-muted leading-relaxed mb-6">{method.desc}</p>

              {/* Steps */}
              <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-text-light mb-3">Step by Step</p>
              <ol className="space-y-3 mb-6">
                {method.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start border-b border-border-light pb-3 last:border-b-0">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 mt-0.5"
                      style={{ background: '#1a2535' }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-body text-sm text-text-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Pros / cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream rounded-sm p-4">
                  <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#2a7a4f] mb-3">Pros</p>
                  <ul className="space-y-1.5">
                    {method.pros.map((p, i) => (
                      <li key={i} className="font-body text-xs text-text-muted flex gap-2">
                        <span className="text-[#2a7a4f] font-bold flex-shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream rounded-sm p-4">
                  <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-[#c0392b] mb-3">Cons</p>
                  <ul className="space-y-1.5">
                    {method.cons.map((c, i) => (
                      <li key={i} className="font-body text-xs text-text-muted flex gap-2">
                        <span className="text-[#c0392b] font-bold flex-shrink-0">✗</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* State rules table */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Service Rules by State (Key States)
          </h2>
          <div className="bg-[#fff8e8] border border-[#e8d090] border-l-4 border-l-gold rounded-r-sm p-5 mb-6">
            <p className="font-body text-sm text-text-muted leading-relaxed">
              <strong className="text-navy">Important:</strong> Service rules vary by state and sometimes by county. This table shows general rules for major states. Always verify the specific requirements with your local court clerk before serving papers.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-border min-w-[560px]">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  {['State', 'Preferred Method', 'Key Notes'].map(h => (
                    <th key={h} className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATE_SERVICE_RULES.map((s, i) => (
                  <tr key={i} className="border-b border-border-light hover:bg-cream transition-colors">
                    <td className="px-4 py-3 font-semibold text-navy">
                      <Link
                        href={`/${s.state.toLowerCase().replace(/\s+/g, '-')}-divorce`}
                        className="hover:text-gold transition-colors"
                      >
                        {s.state}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-text-muted">{s.primary}</td>
                    <td className="px-4 py-3 font-body text-xs text-text-light italic">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-text-light italic mt-3">
            For all 50 states: find your state&apos;s guide at SoLongSoulmate.com for specific service requirements.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* After service */}
        <section className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">After Service — What Happens Next</h2>
          <div className="flex flex-col divide-y divide-border">
            {AFTER_SERVICE_STEPS.map((step, i) => (
              <div key={i} className="py-6">
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-navy rounded-sm p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-cream-dark mb-3">
            Find Your State&apos;s Specific Service Requirements
          </h3>
          <p className="font-body text-sm text-cream-dark/65 mb-6">
            Every state guide includes the exact service rules, response deadlines, and required forms for your state.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/#state-finder" className="btn-gold">Find My State&apos;s Guide →</Link>
            <Link
              href="/what-is-a-marital-settlement-agreement"
              className="font-body text-sm font-semibold py-3 px-6 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all"
            >
              What Is an MSA?
            </Link>
          </div>
        </div>

        <p className="font-body text-xs text-text-light leading-relaxed mt-8 pt-6 border-t border-border">
          <strong>Disclaimer:</strong> Service rules vary by state and county. This page provides general information only. Verify your state&apos;s specific service requirements with your local court clerk before serving papers. Invalid service can delay or invalidate your case.
        </p>
      </div>
    </>
  )
}
