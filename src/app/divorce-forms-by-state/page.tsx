import type { Metadata } from 'next'
import { STATE_FORMS_DATA } from '@/lib/formsData'
import { FormsTableClient } from '@/components/FormsTableClient'

export const metadata: Metadata = {
  title: 'Free Divorce Forms by State (2026) — Official Court Links',
  description: 'Official court form portals for all 50 states. Direct links to free divorce forms — no third-party sites, no fees. Updated March 2026.',
  keywords: ['free divorce forms', 'divorce forms by state', 'divorce court forms', 'official divorce forms'],
}

export default function FormsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(196,160,100,0.1) 0%, transparent 50%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <p className="section-eyebrow">Free Resource · All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Free Divorce Forms <span className="text-gold">by State</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg leading-relaxed max-w-2xl">
            Official court form portals for every US state — direct links to the source, no third-party sites, no fees.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12">

        {/* Info bar */}
        <div className="bg-white border border-border border-l-4 border-l-[#2a7a4f] rounded-r-sm p-5 mb-10">
          <p className="font-body text-sm text-text-muted leading-relaxed">
            <strong className="text-navy">Use official forms from your state&apos;s court website.</strong>{' '}
            Every link below goes directly to the official state court or legal aid portal. Free divorce forms are available in all 50 states.{' '}
            <strong className="text-navy">You should never pay for blank court forms</strong> — they are public documents. You may pay for a service that <em>completes</em> the forms for you, but the forms themselves are always free.
          </p>
        </div>

        {/* Client table with search */}
        <FormsTableClient data={STATE_FORMS_DATA} />

        {/* Disclaimer */}
        <p className="font-body text-xs text-text-light mt-10 pt-6 border-t border-border leading-relaxed">
          Links verified March 2026. Government websites occasionally change their URLs. If a link is broken, search &quot;[State] divorce forms&quot; + &quot;courts&quot; on Google — always navigate to a .gov or official court domain. This page provides general information only and does not constitute legal advice.
        </p>
      </div>
    </>
  )
}
