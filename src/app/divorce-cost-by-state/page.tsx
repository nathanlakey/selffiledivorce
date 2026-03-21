import type { Metadata } from 'next'
import { CostPageClient } from '@/components/CostPageClient'

export const metadata: Metadata = {
  title: 'How Much Does Divorce Cost by State? (2026 Complete Guide)',
  description: 'Filing fees, DIY costs, and attorney fees for all 50 states. From $80 in North Dakota to $435 in California. Updated March 2026.',
  keywords: ['divorce cost by state', 'divorce filing fees', 'how much does divorce cost', 'cheap divorce'],
}

export default function CostPage() {
  return <CostPageClient />
}
