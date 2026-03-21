import type { Metadata } from 'next'
import { ServePapersClient } from '@/components/ServePapersClient'

export const metadata: Metadata = {
  title: 'How to Serve Divorce Papers — All 5 Methods Explained (2026)',
  description: "Serving your spouse is a required legal step in every state. Here are the 5 service methods, when to use each one, and what counts as valid proof of service.",
  keywords: ['how to serve divorce papers', 'service of process divorce', 'serve divorce papers', 'divorce service methods'],
  alternates: {
    canonical: 'https://solongsoulmate.com/how-to-serve-divorce-papers',
  },
}

export default function ServePapersPage() {
  return <ServePapersClient />
}
