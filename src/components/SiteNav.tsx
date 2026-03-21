'use client'

import Link from 'next/link'
import { useState } from 'react'

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-navy sticky top-0 z-50 h-[60px] flex items-center px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-black text-cream-dark tracking-tight">
          SoLong<span className="text-gold">Soulmate</span>.com
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/divorce-cost-by-state" className="font-body text-[13px] text-cream-dark/65 hover:text-gold transition-colors">
            Cost by State
          </Link>
          <Link href="/divorce-timeline-by-state" className="font-body text-[13px] text-cream-dark/65 hover:text-gold transition-colors">
            Timelines
          </Link>
          <Link href="/divorce-forms-by-state" className="font-body text-[13px] text-cream-dark/65 hover:text-gold transition-colors">
            Free Forms
          </Link>
          <Link href="/best-online-divorce-services" className="font-body text-[13px] text-cream-dark/65 hover:text-gold transition-colors">
            Online Services
          </Link>
          <Link href="/do-i-need-a-lawyer" className="font-body text-[13px] font-bold py-2 px-4 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors">
            Do I Need a Lawyer?
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream-dark/70 hover:text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-3 md:hidden z-50">
          {[
            ['Cost by State', '/divorce-cost-by-state'],
            ['Timelines', '/divorce-timeline-by-state'],
            ['Free Forms', '/divorce-forms-by-state'],
            ['Online Services', '/best-online-divorce-services'],
            ['Do I Need a Lawyer?', '/do-i-need-a-lawyer'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="font-body text-[14px] text-cream-dark/75 hover:text-gold py-2 border-b border-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
