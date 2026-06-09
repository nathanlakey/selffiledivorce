import Link from 'next/link'

const POPULAR_STATES = ['Texas', 'California', 'Florida', 'New York', 'Georgia', 'Illinois']

function toSlug(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-')
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-cream-dark/40 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-1">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="SoLongSoulmate.com"
              style={{ height: '36px', width: 'auto', display: 'block', opacity: '0.9' }}
            />
          </Link>
        </div>
        <p className="font-body text-[13px] mb-10">Free DIY divorce guides for all 50 states.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-4">Popular States</h4>
            {POPULAR_STATES.map(s => (
              <Link key={s} href={`/${toSlug(s)}-divorce`} className="block font-body text-[13px] text-cream-dark/50 hover:text-gold mb-2 transition-colors">
                {s} Divorce Guide
              </Link>
            ))}
            <Link href="/divorce-by-state" className="block font-body text-[13px] text-gold/70 hover:text-gold mt-2 transition-colors">
              All 50 States →
            </Link>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-4">Resources</h4>
            {[
              ['Cost by State', '/divorce-cost-by-state'],
              ['Timeline by State', '/divorce-timeline-by-state'],
              ['Free Forms by State', '/divorce-forms-by-state'],
              ['Online Services', '/best-online-divorce-services'],
              ['Do I Need a Lawyer?', '/do-i-need-a-lawyer'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block font-body text-[13px] text-cream-dark/50 hover:text-gold mb-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-4">Learn</h4>
            {[
              ['What Is a Settlement Agreement?', '/what-is-a-marital-settlement-agreement'],
              ['How to Serve Divorce Papers', '/how-to-serve-divorce-papers'],
              ['Community vs. Equitable Property', '/community-property-vs-equitable-distribution'],
              ['Divorce vs. Legal Separation', '/divorce-vs-legal-separation'],
              ['What Is a QDRO?', '/what-is-a-qdro'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block font-body text-[13px] text-cream-dark/50 hover:text-gold mb-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-4">Site</h4>
            {[
              ['About', '/about'],
              ['Privacy Policy', '/privacy-policy'],
              ['Terms of Service', '/terms-of-service'],
              ['Disclaimer', '/disclaimer'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block font-body text-[13px] text-cream-dark/50 hover:text-gold mb-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <p className="font-body text-[12px] text-cream-dark/30 leading-relaxed max-w-3xl mb-6">
          SoLongSoulmate.com provides general legal information, not legal advice. Nothing on this site creates an attorney-client relationship. Laws vary by state and change frequently — verify all information with your local court before filing. Consult a licensed family law attorney for advice specific to your situation.
        </p>

        <div className="border-t border-white/[0.06] pt-5 flex flex-wrap justify-between gap-3">
          <p className="font-body text-[12px]">© 2026 SoLongSoulmate.com. All rights reserved.</p>
          <p className="font-body text-[12px]">General information only — not legal advice.</p>
        </div>
      </div>
    </footer>
  )
}
