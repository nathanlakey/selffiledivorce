import Link from 'next/link'

interface LegalPageLayoutProps {
  eyebrow: string
  title: string
  lastUpdated: string
  accentColor?: string
  children: React.ReactNode
}

export function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  accentColor = '#c4a064',
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy px-6 py-12" style={{ borderBottom: `3px solid ${accentColor}` }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase mb-3" style={{ color: accentColor }}>
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark mb-3 leading-tight">
            {title}
          </h1>
          <p className="font-body text-sm text-cream-dark/40">
            Effective Date: March 20, 2026 · Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-14 prose-content">
        {children}
      </div>

      {/* Footer nav */}
      <div className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4">
          {[
            ['About', '/about'],
            ['Disclaimer', '/disclaimer'],
            ['Privacy Policy', '/privacy-policy'],
            ['Terms of Service', '/terms-of-service'],
            ['← Home', '/'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm font-medium text-text-muted border border-border px-4 py-2 rounded-sm hover:bg-navy hover:text-cream-dark hover:border-navy transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
