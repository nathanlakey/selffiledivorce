import type { Metadata } from 'next'
import Link from 'next/link'
import { US_STATES } from '@/lib/states'
import { STATE_COST_DATA, STATE_TIMELINE_DATA, COMMUNITY_PROPERTY_STATES } from '@/lib/stateData'

export const metadata: Metadata = {
  title: 'Divorce Laws by State — All 50 States (2026)',
  description: 'State-by-state divorce guides covering residency requirements, filing fees, waiting periods, forms, and step-by-step instructions for all 50 states.',
  keywords: ['divorce by state', 'state divorce laws', 'how to file for divorce', 'divorce requirements by state'],
}

const REGIONS: { label: string; states: string[] }[] = [
  { label: 'Northeast', states: ['Connecticut','Delaware','Maine','Maryland','Massachusetts','New Hampshire','New Jersey','New York','Pennsylvania','Rhode Island','Vermont'] },
  { label: 'Southeast', states: ['Alabama','Arkansas','Florida','Georgia','Kentucky','Louisiana','Mississippi','North Carolina','South Carolina','Tennessee','Virginia','West Virginia'] },
  { label: 'Midwest', states: ['Illinois','Indiana','Iowa','Kansas','Michigan','Minnesota','Missouri','Nebraska','North Dakota','Ohio','South Dakota','Wisconsin'] },
  { label: 'Southwest', states: ['Arizona','New Mexico','Oklahoma','Texas'] },
  { label: 'West', states: ['Alaska','California','Colorado','Hawaii','Idaho','Montana','Nevada','Oregon','Utah','Washington','Wyoming'] },
]

const HIGHLIGHTS = [
  { label: 'Fastest', emoji: '⚡', states: ['Nevada', 'Georgia', 'Oklahoma', 'Alaska'], note: 'No wait or under 3 weeks' },
  { label: 'Lowest Cost', emoji: '💰', states: ['North Dakota', 'Mississippi', 'Wyoming', 'South Dakota'], note: 'Filing fees under $100' },
  { label: 'No Residency Min.', emoji: '🏠', states: ['Washington', 'Alaska', 'Hawaii', 'New Hampshire', 'South Dakota'], note: 'File as a current resident' },
  { label: 'Separation Required', emoji: '📅', states: ['North Carolina', 'South Carolina', 'Virginia', 'Louisiana'], note: 'Must live apart before filing' },
]

function getStateStats(name: string) {
  const cost = STATE_COST_DATA.find(s => s.state === name)
  const time = STATE_TIMELINE_DATA.find(s => s.state === name)
  const isCommunity = COMMUNITY_PROPERTY_STATES.includes(name)
  return { cost, time, isCommunity }
}

export default function DivorceByStatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">2026 Guide</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Divorce Laws by State — <span className="text-gold">All 50 States</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-2xl mx-auto mb-8">
            Residency requirements, filing fees, waiting periods, forms, and step-by-step instructions for every state.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { num: '50', label: 'State Guides' },
              { num: '13', label: 'Topics per State' },
              { num: '2026', label: 'Updated' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <span className="font-display text-3xl font-bold text-gold block">{s.num}</span>
                <span className="font-body text-[11px] font-medium tracking-[1.5px] uppercase text-cream-dark/45">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Quick-filter highlights */}
        <section className="mb-14">
          <h2 className="section-heading">Quick Filters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map(h => (
              <div key={h.label} className="bg-white border border-border rounded-sm p-5">
                <p className="text-2xl mb-2">{h.emoji}</p>
                <p className="font-display text-[15px] font-bold text-navy mb-1">{h.label}</p>
                <p className="font-body text-[11px] text-text-light mb-3">{h.note}</p>
                <div className="flex flex-wrap gap-1.5">
                  {h.states.map(s => (
                    <Link
                      key={s}
                      href={`/${s.toLowerCase().replace(/\s+/g, '-')}-divorce`}
                      className="font-body text-[11px] font-semibold px-2 py-0.5 bg-cream border border-border rounded-sm text-navy hover:border-gold hover:text-gold transition-colors"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* State grid by region */}
        {REGIONS.map(region => (
          <section key={region.label} className="mb-12">
            <h2 className="font-display text-xl font-bold text-navy mb-5 pb-2 border-b border-border">
              {region.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {region.states.map(name => {
                const { cost, time, isCommunity } = getStateStats(name)
                const slug = US_STATES.find(s => s.name === name)?.slug ?? name.toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link
                    key={name}
                    href={`/${slug}-divorce`}
                    className="bg-white border border-border rounded-sm p-5 hover:border-gold hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-[17px] font-bold text-navy group-hover:text-gold transition-colors">
                        {name}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm border flex-shrink-0 ${
                        isCommunity
                          ? 'bg-[#fdf3e3] text-[#b8860b] border-[#f5dfa0]'
                          : 'bg-[#eef4ff] text-[#2a5298] border-[#b8d0f0]'
                      }`}>
                        {isCommunity ? 'Community' : 'Equitable'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="font-body text-[10px] font-medium tracking-wide uppercase text-text-light mb-0.5">Filing</p>
                        <p className="font-body text-[12px] font-semibold text-text">{cost?.filing ?? '—'}</p>
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-medium tracking-wide uppercase text-text-light mb-0.5">Wait</p>
                        <p className={`font-body text-[12px] font-semibold ${time?.waitPeriod === 'None' ? 'text-[#1e7a45]' : 'text-text'}`}>
                          {time?.waitPeriod ?? '—'}
                        </p>
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-medium tracking-wide uppercase text-text-light mb-0.5">Total</p>
                        <p className="font-body text-[12px] font-semibold text-text">{time?.uncontested ?? '—'}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="bg-navy rounded-sm p-10 text-center mt-6">
          <h2 className="font-display text-2xl font-black text-cream-dark mb-3">
            Not sure which path is right for you?
          </h2>
          <p className="font-body text-cream-dark/65 mb-7 max-w-md mx-auto">
            Answer a few questions to find out if DIY divorce is realistic for your situation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/do-i-need-a-lawyer" className="btn-gold">Do I Need a Lawyer? →</Link>
            <Link href="/divorce-cost-by-state" className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all">
              Compare Costs →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
