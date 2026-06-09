'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  STATE_TIMELINE_DATA,
  FAST_STATES,
  LONG_STATES,
  SEPARATION_STATES,
  type StateTimelineData,
} from '@/lib/stateData'

function toSlug(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-')
}

const THREE_MECHANISMS = [
  {
    color: '#c4a064',
    num: '1',
    title: 'Residency Requirement',
    desc: 'How long you must live in the state before filing. Ranges from "current resident" (Washington, Alaska) to 1 year (Iowa, New Jersey). Meet this before anything else.',
  },
  {
    color: '#2a7a4f',
    num: '2',
    title: 'Pre-Filing Separation',
    desc: 'Some states require you to live apart before you can even file. NC and SC: 1 year. Virginia: 6 months or 1 year. Louisiana: 180 or 365 days. This clock runs before court.',
  },
  {
    color: '#1a2535',
    num: '3',
    title: 'Post-Filing Waiting Period',
    desc: 'A mandatory delay after you file before the court can finalize. California: 6 months. Wisconsin: 120 days. Texas: 60 days. Oklahoma (no children): 10 days.',
  },
]

const KEY_FACTORS = [
  { icon: '🤝', title: 'Agreement Level', desc: 'The single biggest variable. Agreed divorces typically finalize in 2–6 months. Contested cases run 12–36+ months, especially with custody disputes.' },
  { icon: '👶', title: 'Minor Children', desc: 'Many states extend waiting periods with children. Michigan doubles it (60→180 days). Oklahoma triples it (10→90 days). Tennessee adds 30 days.' },
  { icon: '⏳', title: 'Separation Requirements', desc: 'If your state requires pre-filing separation (NC, SC, VA, LA), that period alone adds 6 months to a year before your case even starts.' },
  { icon: '🏛', title: 'Court Backlog', desc: 'Filing in a major metro area typically means slower processing. NYC, LA, and Chicago courts often run 2–4 months behind smaller jurisdictions.' },
  { icon: '📋', title: 'Document Completeness', desc: 'Incomplete forms are rejected and must be resubmitted. Getting everything right the first time eliminates this common delay.' },
  { icon: '🏠', title: 'Complex Assets', desc: 'Retirement accounts (QDROs), real estate, and business valuations add time even in uncontested cases. QDROs alone can take months.' },
]

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fast', label: '⚡ Fast' },
  { id: 'long', label: '🐢 Long' },
  { id: 'separation', label: 'Separation' },
  { id: 'nowait', label: 'No Wait' },
]

const TABLE_COLS = [
  { key: 'state', label: 'State', sortable: true },
  { key: 'res', label: 'Residency', sortable: false },
  { key: 'wait', label: 'Wait Period', sortable: false },
  { key: 'sep', label: 'Separation', sortable: false },
  { key: 'uncontested', label: 'Uncontested Total', sortable: true },
  { key: 'contested', label: 'Contested Total', sortable: false },
  { key: 'note', label: 'Key Note', sortable: false },
]

export function TimelinePageClient() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('state')

  const filtered = STATE_TIMELINE_DATA
    .filter(s => {
      const matchSearch = s.state.toLowerCase().includes(search.toLowerCase())
      const matchFilter =
        filter === 'fast' ? FAST_STATES.includes(s.state) :
        filter === 'long' ? LONG_STATES.includes(s.state) :
        filter === 'separation' ? SEPARATION_STATES.includes(s.state) :
        filter === 'nowait' ? s.waitPeriod === 'None' : true
      return matchSearch && matchFilter
    })
    .sort((a: StateTimelineData, b: StateTimelineData) => {
      if (sortBy === 'uncontested') {
        const getMin = (str: string) => parseInt(str.replace(/\D.*/, '')) || 99
        return getMin(a.uncontested) - getMin(b.uncontested)
      }
      return a.state.localeCompare(b.state)
    })

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy py-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(196,160,100,0.1) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-eyebrow">2026 Guide · All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            How Long Does Divorce Take <span className="text-gold">in Your State?</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Waiting periods, residency requirements, and realistic timelines — from 10 days (Oklahoma, no children) to over a year (North Carolina).
          </p>
          <div className="flex justify-center gap-10 flex-wrap">
            {[
              { num: '10 days', label: 'Fastest Wait (OK, no children)' },
              { num: '6 months', label: 'Longest Wait (CA)' },
              { num: '1 year', label: 'NC/SC Separation Req.' },
              { num: '15 states', label: 'No Waiting Period' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <span className="font-display text-2xl font-bold text-gold block leading-none">{s.num}</span>
                <span className="font-body text-[11px] font-medium tracking-[1.5px] uppercase text-cream-dark/45 mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* ── Three Mechanisms ── */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-heading">Why Timelines Vary So Dramatically</h2>
            <p className="font-body text-text-muted text-base leading-relaxed mb-4">
              A divorce in Georgia can finalize in 6 weeks. The same divorce in California takes at least 6 months. North Carolina requires couples to live apart for a full year before they can even file.
            </p>
            <p className="font-body text-text-muted text-base leading-relaxed">
              Three separate legal mechanisms drive your timeline — and most people confuse them. Understanding which apply to your state is the first step to knowing your real timeline.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {THREE_MECHANISMS.map(m => (
              <div
                key={m.num}
                className="bg-white border border-border rounded-sm p-5 border-l-4"
                style={{ borderLeftColor: m.color }}
              >
                <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase mb-1" style={{ color: m.color }}>
                  Mechanism {m.num}
                </p>
                <h3 className="font-display text-[17px] font-bold text-navy mb-2">{m.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Key Factors ── */}
        <section className="py-16">
          <h2 className="section-heading">6 Factors That Affect Your Real Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {KEY_FACTORS.map(f => (
              <div key={f.title} className="bg-white border border-border rounded-sm p-6">
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="font-display text-[16px] font-bold text-navy mb-2">{f.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ── Table ── */}
        <section className="py-16">
          <div className="flex items-end justify-between flex-wrap gap-5 mb-5">
            <h2 className="section-heading mb-0">Divorce Timeline by State</h2>
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

          <p className="font-body text-xs text-text-light mb-3">
            Showing {filtered.length} of 50 states · * = exceptions apply
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-border text-sm min-w-[900px]">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  {TABLE_COLS.map(col => (
                    <th
                      key={col.key}
                      onClick={() => col.sortable && setSortBy(col.key)}
                      className={`font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-3 py-3 ${col.sortable ? 'cursor-pointer hover:text-gold' : ''}`}
                    >
                      {col.label}{sortBy === col.key ? ' ↑' : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => {
                  const isFast = FAST_STATES.includes(s.state)
                  const isLong = LONG_STATES.includes(s.state)
                  const hasSep = SEPARATION_STATES.includes(s.state)
                  return (
                    <tr key={s.state} className="border-b border-border-light hover:bg-cream transition-colors">
                      <td className="px-3 py-3 font-semibold">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <Link href={`/${toSlug(s.state)}-divorce`} className="text-navy hover:text-gold transition-colors">
                            {s.state}
                          </Link>
                          {isFast && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-[#edfaf3] text-[#1e7a45] border border-[#a8e4c0]">Fast</span>
                          )}
                          {isLong && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-[#fdf2f0] text-[#c0392b] border border-[#f0b8b0]">Long</span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-text-muted">{s.residency}</td>
                      <td className="px-3 py-3">
                        {s.waitPeriod === 'None' ? (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-[#edfaf3] text-[#1e7a45] border border-[#a8e4c0]">None</span>
                        ) : (
                          <span className="text-text-muted">{s.waitPeriod}</span>
                        )}
                      </td>
                      <td className="px-3 py-3">
                        {hasSep ? (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-[#fdf3e3] text-[#b8700b] border border-[#f5dfa0]">{s.separation}</span>
                        ) : (
                          <span className="text-xs text-text-light">None</span>
                        )}
                      </td>
                      <td className={`px-3 py-3 font-semibold ${isFast ? 'text-[#1e7a45]' : isLong ? 'text-[#c0392b]' : 'text-text'}`}>
                        {s.uncontested}
                      </td>
                      <td className="px-3 py-3 text-text-muted">{s.contested}</td>
                      <td className="px-3 py-3 text-[11px] text-text-light italic max-w-[180px]">{s.notes}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-black text-cream-dark mb-4">
              Ready to Start Your <span className="text-gold">Divorce?</span>
            </h2>
            <p className="font-body text-cream-dark/65 leading-relaxed mb-6">
              Find your state&apos;s complete guide — forms, fees, step-by-step instructions, and the exact process for your situation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/#state-finder" className="btn-gold">Find My State&apos;s Guide →</Link>
              <Link
                href="/do-i-need-a-lawyer"
                className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all"
              >
                Do I Need a Lawyer?
              </Link>
            </div>
          </div>
          <div>
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-4">How to Speed Up Your Divorce</p>
            <ul className="space-y-3">
              {[
                'Agree on everything before filing — disagreement is the #1 delay',
                "Use your state's official forms — rejected forms restart the clock",
                'File a co-petition when your state allows it (WA, OR, CO, NV)',
                'Complete financial disclosure forms accurately the first time',
                'If separation is required, document the start date carefully',
                'Schedule your final hearing as soon as the wait period expires',
              ].map((tip, i) => (
                <li key={i} className="font-body text-sm text-cream-dark/70 flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <p className="font-body text-xs text-text-light text-center py-6 px-6 max-w-3xl mx-auto">
        <strong>Disclaimer:</strong> Timelines are estimates based on mandatory legal minimums plus typical court processing times as of March 2026. Actual timelines vary. Verify current requirements with your local court before filing. General legal information only — not legal advice.
      </p>
    </>
  )
}
