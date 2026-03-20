import type { Metadata } from 'next'
import { HomepageClient } from '@/components/HomepageClient'

export const metadata: Metadata = {
  title: 'SelfFileDivorce.com — Free Divorce Guides for All 50 States (2026)',
  description: 'Free step-by-step DIY divorce guides for all 50 US states. Filing fees, official forms, timelines, property division, and more. No lawyer required for uncontested divorces.',
  keywords: ['DIY divorce', 'file for divorce without a lawyer', 'divorce guide by state', 'divorce forms', 'uncontested divorce'],
}

export default function HomePage() {
  return <HomepageClient />
}
