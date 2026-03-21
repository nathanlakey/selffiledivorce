import type { Metadata } from 'next'
import { QuizClient } from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Do I Need a Lawyer for My Divorce? Free 7-Question Assessment',
  description: 'Answer 7 quick questions to find out if DIY divorce, an online service, or an attorney is right for your situation. Free, no signup required.',
  keywords: ['do I need a lawyer for divorce', 'DIY divorce quiz', 'uncontested divorce assessment'],
}

export default function QuizPage() {
  return <QuizClient />
}
