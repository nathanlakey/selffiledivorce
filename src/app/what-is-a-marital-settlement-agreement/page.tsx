import type { Metadata } from 'next'
import { MSAPageClient } from '@/components/MSAPageClient'

export const metadata: Metadata = {
  title: 'What Is a Marital Settlement Agreement? Complete Guide (2026)',
  description: 'A Marital Settlement Agreement (MSA) is the most important document in an uncontested divorce. Learn what to include, how to create one, and common mistakes to avoid.',
  keywords: ['marital settlement agreement', 'divorce settlement agreement', 'MSA divorce', 'separation agreement'],
  alternates: {
    canonical: 'https://solongsoulmate.com/what-is-a-marital-settlement-agreement',
  },
}

export default function MSAPage() {
  return <MSAPageClient />
}
