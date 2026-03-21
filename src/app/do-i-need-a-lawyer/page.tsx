import type { Metadata } from 'next'
import { LawyerQuizClient } from '@/components/LawyerQuizClient'

export const metadata: Metadata = {
  title: 'Do I Need a Lawyer for Divorce? (2026 Honest Guide)',
  description: 'Take our free quiz to find out if you truly need a divorce attorney — or if DIY, mediation, or online services will work for your situation.',
  keywords: ['do i need a divorce lawyer', 'divorce without a lawyer', 'pro se divorce', 'uncontested divorce'],
}

export default function DoINeedALawyerPage() {
  return <LawyerQuizClient />
}
