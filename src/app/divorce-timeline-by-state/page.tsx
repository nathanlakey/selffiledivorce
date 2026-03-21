import type { Metadata } from 'next'
import { TimelinePageClient } from '@/components/TimelinePageClient'

export const metadata: Metadata = {
  title: 'How Long Does Divorce Take by State? (2026 Guide)',
  description: 'Waiting periods, residency requirements, and realistic divorce timelines for all 50 states. From 10 days (Oklahoma) to over a year (North Carolina). Updated 2026.',
  keywords: ['how long does divorce take', 'divorce waiting period by state', 'divorce timeline', 'divorce residency requirements'],
  alternates: {
    canonical: 'https://solongsoulmate.com/divorce-timeline-by-state',
  },
}

export default function TimelinePage() {
  return <TimelinePageClient />
}
