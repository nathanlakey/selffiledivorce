export interface QuizOption {
  label: string
  value: string
  weight: { diy: number; online: number; attorney: number }
}

export interface QuizQuestion {
  id: string
  text: string
  sub: string
  options: QuizOption[]
}

export type QuizOutcomeKey = 'diy' | 'online' | 'attorney'

export interface QuizOutcome {
  tag: string
  headline: string
  color: string
  bg: string
  border: string
  icon: string
  summary: string
  steps: string[]
  ctaLabel: string
  ctaHref: string
  affiliateLabel?: string
  affiliateDesc?: string
  affiliateHref?: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'agree',
    text: 'Do you and your spouse agree on getting divorced?',
    sub: 'Not about the details — just whether the divorce itself is happening.',
    options: [
      { label: 'Yes, we both want this', value: 'yes', weight: { diy: 2, online: 1, attorney: 0 } },
      { label: 'Mostly — my spouse is resistant but will cooperate', value: 'mostly', weight: { diy: 0, online: 2, attorney: 1 } },
      { label: 'No — my spouse is fighting the divorce', value: 'no', weight: { diy: 0, online: 0, attorney: 3 } },
    ],
  },
  {
    id: 'terms',
    text: 'Have you agreed on the major terms?',
    sub: 'Property division, who gets what, debts, and (if applicable) child custody and support.',
    options: [
      { label: "Yes — we've worked it all out", value: 'yes', weight: { diy: 3, online: 1, attorney: 0 } },
      { label: 'Mostly — a few things to sort out', value: 'mostly', weight: { diy: 0, online: 3, attorney: 1 } },
      { label: 'No — we disagree on major issues', value: 'no', weight: { diy: 0, online: 0, attorney: 4 } },
    ],
  },
  {
    id: 'children',
    text: 'Do you have minor children together?',
    sub: 'Children under 18 add custody, parenting plans, and child support to the process.',
    options: [
      { label: 'No children', value: 'none', weight: { diy: 2, online: 1, attorney: 0 } },
      { label: 'Yes — and we agree on custody and support', value: 'agreed', weight: { diy: 1, online: 2, attorney: 0 } },
      { label: 'Yes — and custody is disputed', value: 'disputed', weight: { diy: 0, online: 0, attorney: 4 } },
    ],
  },
  {
    id: 'property',
    text: 'How complex is your property situation?',
    sub: 'Think about real estate, retirement accounts, businesses, investments.',
    options: [
      { label: 'Simple — mostly personal property and bank accounts', value: 'simple', weight: { diy: 3, online: 1, attorney: 0 } },
      { label: 'Moderate — a home and/or retirement accounts', value: 'moderate', weight: { diy: 0, online: 3, attorney: 1 } },
      { label: 'Complex — business, significant investments, or disputed assets', value: 'complex', weight: { diy: 0, online: 0, attorney: 4 } },
    ],
  },
  {
    id: 'dv',
    text: 'Is there domestic violence or a power imbalance in your relationship?',
    sub: 'Your safety and ability to negotiate freely matters for the right path.',
    options: [
      { label: 'No — we can communicate and negotiate as equals', value: 'no', weight: { diy: 2, online: 1, attorney: 0 } },
      { label: 'Some tension but no safety concerns', value: 'some', weight: { diy: 0, online: 2, attorney: 1 } },
      { label: 'Yes — there is abuse, threats, or I feel unsafe', value: 'yes', weight: { diy: 0, online: 0, attorney: 5 } },
    ],
  },
  {
    id: 'comfort',
    text: 'How comfortable are you handling legal paperwork yourself?',
    sub: 'DIY divorce involves filling out court forms and following specific procedures.',
    options: [
      { label: 'Very comfortable — I can follow instructions carefully', value: 'high', weight: { diy: 2, online: 0, attorney: 0 } },
      { label: "Somewhat — I'd prefer some guidance", value: 'medium', weight: { diy: 0, online: 3, attorney: 0 } },
      { label: 'Not at all — I want someone to handle it', value: 'low', weight: { diy: 0, online: 1, attorney: 2 } },
    ],
  },
  {
    id: 'alimony',
    text: 'Is spousal support (alimony) a significant issue?',
    sub: 'Are either of you expecting or resisting ongoing financial support after divorce?',
    options: [
      { label: "No — we're both financially independent or will waive it", value: 'no', weight: { diy: 2, online: 1, attorney: 0 } },
      { label: "Minor amount we've agreed on", value: 'minor', weight: { diy: 1, online: 2, attorney: 0 } },
      { label: "Yes — it's a significant and contested issue", value: 'yes', weight: { diy: 0, online: 0, attorney: 3 } },
    ],
  },
]

export const QUIZ_OUTCOMES: Record<QuizOutcomeKey, QuizOutcome> = {
  diy: {
    tag: 'DIY Divorce',
    headline: "You're a strong candidate for a DIY divorce.",
    color: '#2a7a4f',
    bg: '#f0faf5',
    border: '#a8dfc0',
    icon: '✓',
    summary: "Based on your answers, your situation is well-suited for handling the divorce yourself. You agree on the major issues, your finances aren't overly complex, and you're comfortable following court procedures. A DIY divorce will cost you $80–$700 in most states — essentially just the filing fee.",
    steps: [
      "Find your state's free official divorce forms below",
      'Complete and file your forms with the court',
      'Serve your spouse (or have them sign a waiver)',
      'Submit your Settlement Agreement and finalize',
    ],
    ctaLabel: "Find Your State's Free Forms",
    ctaHref: '/divorce-forms-by-state',
  },
  online: {
    tag: 'Online Divorce Service',
    headline: 'An online divorce service is your best fit.',
    color: '#c4a064',
    bg: '#fdf9f0',
    border: '#e8d4a0',
    icon: '→',
    summary: "You and your spouse largely agree, but you'd benefit from a guided process that generates your paperwork, walks you through state-specific requirements, and gives you confidence everything is done correctly. Online divorce services cost $150–$500 and are designed exactly for situations like yours.",
    steps: [
      'Choose a service that covers your state',
      'Answer guided questions (30–60 minutes)',
      'Receive completed, court-ready documents',
      'File with your court and finalize',
    ],
    ctaLabel: 'Compare Online Divorce Services',
    ctaHref: '/best-online-divorce-services',
    affiliateLabel: 'Our Top Pick: 3StepDivorce',
    affiliateDesc: 'Covers all 50 states. 4.6 stars on Trustpilot. A+ BBB. Starting at $299 or 4 payments of $84.',
    affiliateHref: 'https://www.3stepdivorce.com',
  },
  attorney: {
    tag: 'Consult an Attorney',
    headline: 'Your situation calls for legal representation.',
    color: '#c0392b',
    bg: '#fdf2f0',
    border: '#f0b8b0',
    icon: '!',
    summary: "Based on your answers, your divorce involves contested issues, significant assets, custody disputes, or safety concerns that make professional legal help important. This isn't a failure — it's a smart decision. An attorney protects your interests when the stakes are high.",
    steps: [
      'Consult with a family law attorney in your state',
      'Many offer free or low-cost initial consultations',
      'Ask about flat-fee options for uncontested work',
      'Consider mediation first if some agreement exists',
    ],
    ctaLabel: 'Find a Family Law Attorney',
    ctaHref: 'https://www.avvo.com/family-lawyer.html',
    affiliateLabel: 'Start with a Free Consultation',
    affiliateDesc: 'Hello Divorce connects you with attorneys and divorce navigators. Free 15-minute strategy call before you pay anything.',
    affiliateHref: 'https://hellodivorce.com',
  },
}

export function getQuizOutcome(
  answers: Array<{ questionId: string; value: string }>
): QuizOutcomeKey {
  const scores = { diy: 0, online: 0, attorney: 0 }

  answers.forEach(({ questionId, value }) => {
    const q = QUIZ_QUESTIONS.find(q => q.id === questionId)
    if (!q) return
    const opt = q.options.find(o => o.value === value)
    if (!opt) return
    scores.diy += opt.weight.diy
    scores.online += opt.weight.online
    scores.attorney += opt.weight.attorney
  })

  // Hard overrides — safety first
  const dvAnswer = answers.find(a => a.questionId === 'dv')
  if (dvAnswer?.value === 'yes') return 'attorney'

  const termsAnswer = answers.find(a => a.questionId === 'terms')
  if (termsAnswer?.value === 'no') return 'attorney'

  const custodyAnswer = answers.find(a => a.questionId === 'children')
  if (custodyAnswer?.value === 'disputed') return 'attorney'

  const max = Math.max(scores.diy, scores.online, scores.attorney)
  if (scores.attorney === max) return 'attorney'
  if (scores.online === max) return 'online'
  return 'diy'
}
