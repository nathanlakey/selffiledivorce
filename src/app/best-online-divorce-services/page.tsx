import type { Metadata } from 'next'
import { OnlineServicesClient } from '@/components/OnlineServicesClient'

export const metadata: Metadata = {
  title: 'Best Online Divorce Services 2026 — Compared & Reviewed',
  description: 'Honest comparison of the top online divorce services: 3StepDivorce, CompleteCase, WeVorce, and more. Prices, features, and who each is best for.',
  keywords: ['best online divorce service', 'online divorce review', 'cheap online divorce', 'uncontested divorce online'],
}

export default function BestOnlineDivorceServicesPage() {
  return <OnlineServicesClient />
}
