import type { Metadata } from 'next'
import { AffiliatePageClient } from '@/components/AffiliatePageClient'

export const metadata: Metadata = {
  title: 'Best Online Divorce Services of 2026 — Ranked and Reviewed',
  description: 'We reviewed 12 online divorce services. Here are the 5 best ranked by price, ratings, features, and value. Updated March 2026.',
  keywords: ['best online divorce service', 'online divorce reviews', '3StepDivorce review', 'cheapest online divorce'],
  alternates: {
    canonical: 'https://solongsoulmate.com/best-online-divorce-services',
  },
}

export default function AffiliatePage() {
  return <AffiliatePageClient />
}
