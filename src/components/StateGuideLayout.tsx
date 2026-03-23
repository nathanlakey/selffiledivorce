import Link from 'next/link'
import { US_STATES } from '@/lib/states'

interface StateGuideLayoutProps {
  stateName: string
  stateSlug: string
  currentGuide: string
  children: React.ReactNode
  frontmatter?: {
    residency?: string
    waitPeriod?: string
    filingFee?: string
    propertyType?: string
    court?: string
    lastUpdated?: string
  }
}

const GUIDE_LINKS = [
  { suffix: '', label: 'Main Guide' },
  { suffix: '-without-children', label: 'Without Children' },
  { suffix: '-with-children', label: 'With Children' },
  { suffix: '-filing-fees', label: 'Filing Fees' },
  { suffix: '-forms', label: 'Forms Guide' },
  { suffix: '-timeline', label: 'Timeline' },
  { suffix: '-with-a-house', label: 'With a House' },
  { suffix: '-default-divorce', label: 'Default Divorce' },
  { suffix: '-mistakes-to-avoid', label: 'Mistakes to Avoid' },
  { suffix: '-property-division', label: 'Property Division' },
  { suffix: '-checklist', label: 'Checklist' },
  { suffix: '-faq', label: 'FAQ' },
  { suffix: '-eligibility', label: 'Am I Eligible?' },
]

export function StateGuideLayout({
  stateName,
  stateSlug,
  currentGuide,
  children,
  frontmatter,
}: StateGuideLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-body text-xs text-text-light mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span>›</span>
        <Link href="/divorce-by-state" className="hover:text-gold transition-colors">All States</Link>
        <span>›</span>
        <Link href={`/${stateSlug}-divorce`} className="hover:text-gold transition-colors">{stateName}</Link>
        {currentGuide !== '' && (
          <>
            <span>›</span>
            <span className="text-text-muted">
              {GUIDE_LINKS.find(g => g.suffix === currentGuide)?.label}
            </span>
          </>
        )}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">

        {/* Sidebar */}
        <aside>
          {/* Quick facts */}
          {frontmatter && (
            <div className="bg-navy rounded-md p-5 mb-6">
              <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-4">
                {stateName} At a Glance
              </p>
              {[
                { label: 'Residency', value: frontmatter.residency },
                { label: 'Wait Period', value: frontmatter.waitPeriod },
                { label: 'Filing Fee', value: frontmatter.filingFee },
                { label: 'Property', value: frontmatter.propertyType },
                { label: 'Court', value: frontmatter.court },
              ].filter(f => f.value).map(f => (
                <div key={f.label} className="mb-3 last:mb-0">
                  <span className="font-body text-[10px] font-semibold tracking-wider uppercase text-cream-dark/40 block">
                    {f.label}
                  </span>
                  <span className="font-body text-sm font-medium text-cream-dark/85">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Guide navigation */}
          <div className="bg-white border border-border rounded-md overflow-hidden">
            <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold px-4 py-3 border-b border-border bg-cream">
              {stateName} Guides
            </p>
            {GUIDE_LINKS.map(link => {
              const isActive = currentGuide === link.suffix
              return (
                <Link
                  key={link.suffix}
                  href={`/${stateSlug}-divorce${link.suffix}`}
                  className={`block font-body text-[13px] px-4 py-2.5 border-b border-border-light last:border-b-0 transition-colors ${
                    isActive
                      ? 'bg-navy text-cream-dark font-semibold'
                      : 'text-text-muted hover:bg-cream hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-6 bg-cream border border-border rounded-md p-5">
            <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-gold mb-2">Not Sure?</p>
            <p className="font-body text-xs text-text-muted leading-relaxed mb-3">
              Take our free 7-question assessment to find out if DIY is right for you.
            </p>
            <Link
              href="/do-i-need-a-lawyer"
              className="block font-body text-xs font-bold text-center py-2.5 bg-navy text-cream-dark rounded-sm hover:bg-navy-light transition-colors"
            >
              Do I Need a Lawyer? →
            </Link>
          </div>

          {/* Related state guides */}
          {(() => {
            const stateIndex = US_STATES.findIndex(s => s.slug === stateSlug)
            const relatedStates = [
              US_STATES[stateIndex - 1],
              US_STATES[stateIndex + 1],
              US_STATES[stateIndex + 2],
            ].filter(Boolean).slice(0, 3)
            return relatedStates.length > 0 ? (
              <div className="mt-6 bg-white border border-border rounded-md p-4">
                <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-gold mb-3">
                  Other State Guides
                </p>
                {relatedStates.map(s => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}-divorce`}
                    className="block font-body text-sm text-text-muted hover:text-gold py-1.5 border-b border-border-light last:border-b-0 transition-colors"
                  >
                    {s.name} Divorce Guide →
                  </Link>
                ))}
              </div>
            ) : null
          })()}
        </aside>

        {/* Main content */}
        <article className="prose-content min-w-0">
          {children}

          {/* Author byline */}
          <div className="flex items-center gap-4 mt-10 pt-6 border-t border-border">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
              <span className="font-display text-lg font-bold text-gold">N</span>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-navy">
                Written by the SoLongSoulmate.com Editorial Team
              </p>
              <p className="font-body text-xs text-text-light leading-relaxed">
                Researched using official state court websites, state statutes,
                and legal aid resources. All filing fees and procedures verified
                March 2026. This is general legal information — not legal advice.
              </p>
            </div>
          </div>

          {frontmatter?.lastUpdated && (
            <p className="font-body text-xs text-text-light mt-12 pt-6 border-t border-border">
              Last reviewed: {frontmatter.lastUpdated} · Verify current fees and forms with your local court before filing.
            </p>
          )}
        </article>
      </div>
    </div>
  )
}
