'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  STATE_COST_DATA,
  COMMUNITY_PROPERTY_STATES,
  type StateCostData,
} from '@/lib/stateData'

function toSlug(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-')
}

const THREE_PATHS = [
  {
    tag: 'DIY Divorce',
    price: '$80–$700',
    color: '#2a7a4f',
    borderClass: 'border-t-[#2a7a4f]',
    desc: "You handle all paperwork using your state's free court forms. Both spouses must agree on everything.",
    items: [
      'Court filing fee (main cost)',
      'Service of process ($25–$100)',
      'Certified copies ($5–$20)',
      'Parenting class if required ($20–$80)',
    ],
  },
  {
    tag: 'Mediated Divorce',
    price: '$2,000–$8,000',
    color: '#c4a064',
    borderClass: 'border-t-[#c4a064]',
    desc: 'A neutral mediator helps you reach agreement. Cheaper than attorneys, more structured than pure DIY.',
    items: [
      'Filing fee (same as DIY)',
      'Mediator: $100–$500/hour',
      'Typically 3–8 hours of sessions',
      'Attorney review of agreement: $500–$1,500',
    ],
  },
  {
    tag: 'Contested with Attorneys',
    price: '$8,000–$50,000+',
    color: '#c0392b',
    borderClass: 'border-t-[#c0392b]',
    desc: "When you can't agree on key issues. National average is $11,300 per person — complex cases run much higher.",
    items: [
      'Attorney retainer: $2,500–$10,000 upfront',
      'Hourly rate: $150–$500/hour',
      'Discovery, depositions, motions',
      'Custody evaluation: $2,000–$5,000',
    ],
  },
]

const SAVE_TIPS = [
  { num: '01', title: 'Agree on everything before filing', desc: 'Every hour attorneys spend negotiating is billed at $150–$500/hour. Agreement before filing is the single biggest cost saver.' },
  { num: '02', title: "Use your state's free official forms", desc: "Every state provides free divorce forms. Some states have excellent guided systems (AZ Self Service Center, UT MyPaperwork, IA Electronic Divorce)." },
  { num: '03', title: 'Try mediation before litigation', desc: 'A skilled mediator can resolve most disputes in a few sessions for $2,000–$5,000 — far less than contested litigation.' },
  { num: '04', title: 'Use unbundled legal services', desc: 'Pay an attorney to review documents or answer specific questions only — not full representation. $200–$500 per task vs. $5,000+ retainer.' },
  { num: '05', title: 'Apply for a fee waiver', desc: 'Every state waives court filing fees for financial hardship. Typically requires income at or below 125–150% of the federal poverty level.' },
  { num: '06', title: 'Understand what drives costs up', desc: 'Custody disputes, business valuations, and real estate disagreements are the biggest multipliers. Each contested issue adds attorney hours.' },
]

const TABLE_COLS = [
  { key: 'state', label: 'State', sortable: true },
  { key: 'filing', label: 'Filing Fee', sortable: true },
  { key: 'diy', label: 'DIY Total', sortable: true },
  { key: 'wait', label: 'Wait Period', sortable: false },
  { key: 'property', label: 'Property', sortable: false },
  { key: 'note', label: 'Key Note', sortable: false },
]

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'community', label: 'Community' },
  { id: 'equitable', label: 'Equitable' },
  { id: 'nowait', label: 'No Wait' },
]

export function CostPageClient() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('state')

  const filtered = STATE_COST_DATA
    .filter(s => {
      const matchSearch = s.state.toLowerCase().includes(search.toLowerCase())
      const matchFilter =
        filter === 'community' ? COMMUNITY_PROPERTY_STATES.includes(s.state) :
        filter === 'equitable' ? !COMMUNITY_PROPERTY_STATES.includes(s.state) :
        filter === 'nowait' ? s.wait === 'None' : true
      return matchSearch && matchFilter
    })
    .sort((a: StateCostData, b: StateCostData) => {
      if (sortBy === 'filing') return parseInt(a.filing.replace(/\D.*/, '')) - parseInt(b.filing.replace(/\D.*/, ''))
      if (sortBy === 'diy') return parseInt(a.diy.replace(/\D.*/, '')) - parseInt(b.diy.replace(/\D.*/, ''))
      return a.state.localeCompare(b.state)
    })

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy py-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 25% 75%, rgba(196,160,100,0.13) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-eyebrow">2026 Guide · All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            How Much Does Divorce Cost <span className="text-gold">in Your State?</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Filing fees, DIY costs, attorney fees, and what actually drives the price — for all 50 states, updated for 2026.
          </p>
          <div className="flex justify-center gap-10 flex-wrap">
            {[
              { num: '$80', label: 'Lowest Filing Fee (ND)' },
              { num: '$435', label: 'Highest Filing Fee (CA)' },
              { num: '$11,300', label: 'Avg. With Attorney' },
              { num: '$300–$700', label: 'Avg. DIY Divorce' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <span className="font-display text-3xl font-bold text-gold block leading-none">{s.num}</span>
                <span className="font-body text-[11px] font-medium tracking-[1.5px] uppercase text-cream-dark/45 mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* ── Three Paths ── */}
        <section className="py-16">
          <h2 className="section-heading">Three Paths — Three Very Different Price Tags</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_PATHS.map(p => (
              <div
                key={p.tag}
                className={`bg-white border border-border border-t-4 rounded-sm p-7`}
                style={{ borderTopColor: p.color }}
              >
                <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase mb-2" style={{ color: p.color }}>{p.tag}</p>
                <p className="font-display text-2xl font-bold mb-4" style={{ color: p.color }}>{p.price}</p>
                <p className="font-body text-sm text-text-muted leading-relaxed mb-5">{p.desc}</p>
                <ul className="border-t border-border-light pt-4 space-y-2">
                  {p.items.map(item => (
                    <li key={item} className="font-body text-[13px] text-text-muted flex gap-2">
                      <span className="text-text-light flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Table ── */}
        <section className="py-16">
          <div className="flex items-end justify-between flex-wrap gap-5 mb-5">
            <h2 className="section-heading mb-0">Divorce Costs by State</h2>
            <div className="flex gap-2 flex-wrap items-center">
              <input
                className="font-body text-sm px-4 py-2 border border-border rounded-sm bg-white outline-none focus:border-gold w-44"
                placeholder="Search state..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`font-body text-[11px] font-semibold tracking-wide uppercase px-3 py-2 border rounded-sm transition-all ${
                    filter === f.id
                      ? 'bg-navy text-cream-dark border-navy'
                      : 'bg-white text-text-muted border-border hover:border-gold hover:text-gold'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <p className="font-body text-xs text-text-light mb-3">Showing {filtered.length} of 50 states</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-border text-sm min-w-[720px]">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  {TABLE_COLS.map(col => (
                    <th
                      key={col.key}
                      onClick={() => col.sortable && setSortBy(col.key)}
                      className={`font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3 ${col.sortable ? 'cursor-pointer hover:text-gold' : ''}`}
                    >
                      {col.label}{sortBy === col.key ? ' ↑' : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.state} className="border-b border-border-light hover:bg-cream transition-colors">
                    <td className="px-4 py-3 font-semibold">
                      <Link href={`/${toSlug(s.state)}-divorce`} className="text-navy hover:text-gold transition-colors">
                        {s.state}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-medium text-navy">{s.filing}</td>
                    <td className="px-4 py-3 font-semibold text-[#2a7a4f]">{s.diy}</td>
                    <td className="px-4 py-3">
                      {s.wait === 'None' ? (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-[#edfaf3] text-[#1e7a45] border border-[#a8e4c0]">None</span>
                      ) : (
                        <span className="text-text-muted">{s.wait}</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-sm border ${
                        s.property === 'Community'
                          ? 'bg-[#fdf3e3] text-[#b8860b] border-[#f5dfa0]'
                          : 'bg-[#eef4ff] text-[#2a5298] border-[#b8d0f0]'
                      }`}>
                        {s.property}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[12px] text-text-light italic max-w-[200px]">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Save Tips ── */}
        <section className="py-16">
          <h2 className="section-heading">6 Ways to Reduce Your Divorce Cost</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAVE_TIPS.map(t => (
              <div key={t.num} className="bg-white border border-border rounded-sm p-6">
                <div className="font-display text-4xl font-black text-border leading-none mb-2">{t.num}</div>
                <h3 className="font-display text-[17px] font-bold text-navy mb-2">{t.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-navy py-16 px-6 text-center">
        <h2 className="font-display text-3xl font-black text-cream-dark mb-4">
          Ready to Start Your Divorce?
        </h2>
        <p className="font-body text-cream-dark/65 mb-8 max-w-md mx-auto">
          Find your state&apos;s complete guide — forms, fees, step-by-step instructions, and everything you need.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/#state-finder" className="btn-gold">Find My State&apos;s Guide →</Link>
          <Link
            href="/do-i-need-a-lawyer"
            className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all"
          >
            Do I Need a Lawyer?
          </Link>
        </div>
      </section>

      <p className="font-body text-xs text-text-light text-center py-6 px-6 max-w-3xl mx-auto">
        <strong>Disclaimer:</strong> Cost estimates are approximate and vary by county. Filing fees verified March 2026 — verify with your local court before filing. This page provides general legal information, not legal advice.
      </p>
    </>
  )
}
