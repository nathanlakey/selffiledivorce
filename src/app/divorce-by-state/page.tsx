import type { Metadata } from 'next'
import { US_STATES } from '@/lib/states'
import { REGIONS, STATE_GUIDE_LINKS } from '@/lib/stateIndexData'
import { StateIndexClient } from '@/components/StateIndexClient'

export const metadata: Metadata = {
  title: 'Divorce Guides by State — All 50 States (2026)',
  description: 'Complete step-by-step divorce guides for every US state. 13 guides per state — forms, fees, timelines, property division, and more. Free, updated 2026.',
  keywords: ['divorce by state', 'state divorce guide', 'divorce laws by state', 'how to file for divorce'],
}

export default function DivorceByStatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(196,160,100,0.1) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-eyebrow">All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Divorce Guides <span className="text-gold">by State</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed max-w-xl">
            Complete step-by-step divorce guides for every US state. 13 guides per state — forms, fees, timelines, property division, and more.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">

        {/* Sub-guide legend */}
        <div className="bg-white border border-border rounded-sm p-5 mb-10">
          <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-3">
            Each State Guide Includes
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Main Guide', 'Without Children', 'With Children', 'Filing Fees',
              'Forms Guide', 'Timeline', 'With a House', 'Default Divorce',
              'Mistakes to Avoid', 'Property Division', 'Checklist', 'FAQ', 'Am I Eligible?',
            ].map(label => (
              <span
                key={label}
                className="font-body text-xs font-medium px-3 py-1.5 bg-cream-dark border border-border rounded-sm text-text-muted"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Client component handles search + view toggle */}
        <StateIndexClient
          states={US_STATES}
          regions={REGIONS}
          guideLinks={STATE_GUIDE_LINKS}
        />
      </div>
    </>
  )
}
