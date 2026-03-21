'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
]

function toSlug(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-')
}

const HERO_STATS = [
  { num: '50', label: 'States Covered' },
  { num: '650+', label: 'Guide Pages' },
  { num: '$0', label: 'Cost to Use' },
  { num: '13', label: 'Guides Per State' },
]

const PATHS = [
  {
    icon: '⚖',
    title: "I'm Filing for Divorce",
    desc: "You want to start the process. We walk you through every step — forms, filing, serving your spouse, and finalizing.",
    color: '#c4a064',
    links: [
      { label: "Find my state's guide", href: '#state-finder' },
      { label: 'How much will it cost?', href: '/divorce-cost-by-state' },
      { label: 'Do I need a lawyer?', href: '/do-i-need-a-lawyer' },
    ],
  },
  {
    icon: '📋',
    title: "I've Been Served Papers",
    desc: "Your spouse filed first. Learn what to do, how long you have to respond, and what happens if you don't.",
    color: '#2a7a4f',
    links: [
      { label: 'What does being served mean?', href: '/how-to-serve-divorce-papers' },
      { label: 'How long do I have to respond?', href: '#state-finder' },
      { label: 'Should I hire a lawyer?', href: '/do-i-need-a-lawyer' },
    ],
  },
]

const FEATURES = [
  { icon: '📄', title: 'Free Official Forms', desc: "Every state guide links directly to your state's official court forms — no third-party sites, no fees." },
  { icon: '⏱', title: 'State-Specific Timelines', desc: 'Waiting periods and residency requirements vary enormously by state. We cover every one.' },
  { icon: '🏠', title: 'Property & Custody', desc: "Guides for dividing the house, retirement accounts, debt, and handling children's custody and support." },
  { icon: '💰', title: 'Real Cost Breakdowns', desc: 'Filing fees, DIY totals, and attorney cost ranges for every state — no surprises.' },
  { icon: '🔍', title: 'Mistakes to Avoid', desc: 'Each state guide covers the most common errors — the ones that delay divorces or cost money to fix.' },
  { icon: '✓', title: 'Printable Checklists', desc: 'Step-by-step checklists for every state so nothing falls through the cracks.' },
]

const POPULAR_STATES = [
  'Texas','California','Florida','New York','Georgia','Illinois',
  'Pennsylvania','Ohio','North Carolina','Michigan','New Jersey','Virginia',
]

const FAQS = [
  {
    q: 'Can I really file for divorce without a lawyer?',
    a: 'Yes — in every US state. If you and your spouse agree on the major issues, a DIY divorce is very achievable. Most states provide free official forms, and the filing fee is typically $80–$435. This site walks you through the process for all 50 states.',
  },
  {
    q: "What's the difference between contested and uncontested divorce?",
    a: 'An uncontested divorce is when both spouses agree on everything — property, debt, and (if children) custody and support. A contested divorce is when you disagree on one or more major issues and a judge must decide. Uncontested divorces cost hundreds; contested cases cost thousands to tens of thousands.',
  },
  {
    q: 'How long does divorce take?',
    a: 'It depends entirely on your state. Some states have no waiting period and can finalize in weeks. Others require 60, 90, or 120 days of waiting. A few require you to live apart for 6 months to a year before filing. Our state guides cover every timeline in detail.',
  },
  {
    q: "What if my spouse won't cooperate?",
    a: "You can still get a divorce. Most states allow you to file individually, serve your spouse, and — if they don't respond within the deadline — proceed to a default divorce. Your spouse's cooperation makes things faster, but it's not legally required.",
  },
  {
    q: 'Do I need a lawyer if we agree on everything?',
    a: "Not necessarily. If your finances are straightforward and you're comfortable filling out forms, a DIY divorce using your state's free official forms is very achievable. If you have retirement accounts to divide (which require a QDRO) or complex assets, a consultation with an attorney is worth the cost.",
  },
  {
    q: 'Is this site free?',
    a: 'Yes. All state guides, checklists, and resources on SoLongSoulmate.com are completely free. We earn revenue through advertising and optional affiliate links to online divorce services (always clearly labeled).',
  },
]

export function HomepageClient() {
  const router = useRouter()
  const [selectedState, setSelectedState] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleStateGo() {
    if (selectedState) {
      router.push(`/${toSlug(selectedState)}-divorce`)
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy min-h-[88vh] flex items-center relative overflow-hidden">
        {/* Background radial glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 15% 85%, rgba(196,160,100,0.14) 0%, transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(196,160,100,0.07) 0%, transparent 45%)' }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Left */}
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[3.5px] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-gold" />
              Free · All 50 States · Updated 2026
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.07] text-cream-dark mb-7 tracking-tight">
              File for Divorce<br />
              <span className="text-gold">Without a Lawyer.</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-cream-dark/70 mb-10 max-w-lg">
              Complete state-by-state guides covering every step of the DIY divorce process — forms, filing fees, timelines, property division, and everything in between. Free for all 50 states.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gold/20">
              {HERO_STATS.map(s => (
                <div key={s.label}>
                  <span className="font-display text-3xl font-bold text-gold block leading-none">{s.num}</span>
                  <span className="font-body text-[11px] font-medium tracking-[1.5px] uppercase text-cream-dark/45 mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — State Finder Card */}
          <div id="state-finder">
            <div className="bg-cream/97 rounded-md p-9 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <p className="font-body text-[11px] font-bold tracking-[3px] uppercase text-gold mb-2">Start Here</p>
              <h2 className="font-display text-2xl font-bold text-navy mb-2">Find Your State&apos;s Guide</h2>
              <p className="font-body text-sm text-text-light leading-relaxed mb-6">
                Select your state to get your complete step-by-step divorce guide — forms, fees, timeline, and more.
              </p>

              <div className="relative mb-3">
                <select
                  value={selectedState}
                  onChange={e => setSelectedState(e.target.value)}
                  className="w-full font-body text-[15px] py-3.5 pl-4 pr-10 border-2 border-border rounded-md bg-white text-text appearance-none cursor-pointer outline-none focus:border-gold transition-colors"
                >
                  <option value="">Choose your state...</option>
                  {US_STATES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light text-xs pointer-events-none">▼</span>
              </div>

              <button
                onClick={handleStateGo}
                disabled={!selectedState}
                className="w-full font-body text-[15px] font-bold py-4 bg-navy text-cream-dark rounded-md transition-all hover:bg-navy-light disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {selectedState ? `Go to ${selectedState} Divorce Guide →` : 'Select a state above'}
              </button>

              <div className="relative text-center my-5">
                <span className="font-body text-xs text-text-light px-3 bg-cream relative z-10">or</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-border" />
                </div>
              </div>

              <Link
                href="/do-i-need-a-lawyer"
                className="block w-full font-body text-[14px] font-semibold py-3.5 text-center text-navy border-2 border-navy rounded-md transition-all hover:bg-navy hover:text-cream-dark"
              >
                Not sure where to start? Take the quiz →
              </Link>

              <p className="font-body text-[12px] text-text-light text-center mt-4">
                No account required. All guides are completely free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO PATHS ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <p className="section-eyebrow">Your Situation</p>
        <h2 className="section-heading">Where Are You in the Process?</h2>
        <p className="font-body text-text-muted text-base leading-relaxed mb-10 max-w-xl">
          Whether you&apos;re starting the divorce or you&apos;ve just been served, we have a guide for your situation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PATHS.map(p => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-md p-8 border-t-4 transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderTopColor: p.color }}
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{p.title}</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-6">{p.desc}</p>
              <ul className="border-t border-border-light">
                {p.links.map(l => (
                  <li key={l.label} className="border-b border-border-light last:border-b-0">
                    <Link
                      href={l.href}
                      className="flex items-center justify-between font-body text-sm font-medium text-navy py-3 hover:text-gold transition-colors"
                    >
                      {l.label}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-6" />

      {/* ── FEATURES ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <p className="section-eyebrow">What&apos;s Covered</p>
        <h2 className="section-heading">13 Guides Per State. Everything You Need.</h2>
        <p className="font-body text-text-muted text-base leading-relaxed mb-12 max-w-xl">
          Every state includes a complete library of guides — not just a basic overview.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-white border border-border rounded-md p-7">
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="font-display text-[17px] font-bold text-navy mb-2">{f.title}</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-6" />

      {/* ── POPULAR STATES ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <p className="section-eyebrow">Browse by State</p>
        <h2 className="section-heading">Popular State Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {POPULAR_STATES.map(s => (
            <Link
              key={s}
              href={`/${toSlug(s)}-divorce`}
              className="font-body text-[13px] font-medium text-navy text-center py-2.5 px-4 bg-white border border-border rounded-sm transition-all hover:bg-navy hover:text-cream-dark hover:border-navy"
            >
              {s}
            </Link>
          ))}
        </div>
        <Link href="/divorce-by-state" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
          Browse all 50 states →
        </Link>
      </section>

      {/* ── QUIZ CTA BAND ── */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-3">Free Assessment</p>
            <h2 className="font-display text-3xl md:text-4xl font-black text-cream-dark leading-tight mb-5">
              Not Sure If You Need a Lawyer for Your <span className="text-gold">Divorce?</span>
            </h2>
            <p className="font-body text-cream-dark/65 leading-relaxed mb-8">
              Answer 7 quick questions about your situation. We&apos;ll tell you whether DIY, an online service, or an attorney makes sense — and exactly why.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/do-i-need-a-lawyer" className="btn-gold">Take the Free Assessment →</Link>
              <Link
                href="/divorce-cost-by-state"
                className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold hover:text-cream-dark transition-all"
              >
                See Costs by State
              </Link>
            </div>
          </div>

          {/* Right — outcome preview */}
          <div className="bg-white/5 border border-gold/20 rounded-md p-7">
            <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-5">Your Result Will Be One Of...</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: '✓', label: 'DIY Divorce', desc: 'Both agree, simple property, comfortable with forms', cost: '$80–$700', color: '#2a7a4f' },
                { icon: '→', label: 'Online Service', desc: 'Mostly agree, want guided document help', cost: '$150–$500', color: '#c4a064' },
                { icon: '!', label: 'Attorney', desc: 'Contested issues, complex assets, custody disputes', cost: '$8k–$50k+', color: '#c0392b' },
              ].map(o => (
                <div key={o.label} className="flex items-center gap-4 bg-white/5 rounded-sm p-4">
                  <span className="text-xl flex-shrink-0">{o.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-body text-sm font-bold" style={{ color: o.color }}>{o.label}</div>
                    <div className="font-body text-xs text-cream-dark/60 leading-snug">{o.desc}</div>
                  </div>
                  <span className="font-display text-base font-bold flex-shrink-0" style={{ color: o.color }}>{o.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <p className="section-eyebrow">Common Questions</p>
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="mt-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                className="w-full flex items-center justify-between text-left py-5 gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-display text-[17px] font-semibold text-navy leading-snug">{faq.q}</span>
                <span
                  className="font-body text-xl text-gold flex-shrink-0 transition-transform duration-200"
                  style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
                >+</span>
              </button>
              {openFaq === i && (
                <p className="font-body text-sm text-text-muted leading-relaxed pb-5">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
