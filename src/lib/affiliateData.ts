export interface ServiceData {
  id: string
  rank: number
  badge: string
  badgeColor: string
  name: string
  tagline: string
  price: string
  priceNote: string
  states: string
  children: boolean
  attorney: boolean
  trustpilot: string
  bbb: string
  timeToComplete: string
  moneyBack: boolean
  paymentPlan: boolean
  phoneSupport: boolean
  href: string
  pros: string[]
  cons: string[]
  bestFor: string
  featured: boolean
}

export const SERVICES: ServiceData[] = [
  {
    id: '3stepdivorce',
    rank: 1,
    badge: "Editor's Pick",
    badgeColor: '#c4a064',
    name: '3StepDivorce',
    tagline: 'Best overall — all 50 states, top-rated, money-back guarantee',
    price: '$299',
    priceNote: 'or 4 payments of $84/mo',
    states: 'All 50',
    children: true,
    attorney: false,
    trustpilot: '4.6',
    bbb: 'A+',
    timeToComplete: '~1 hour',
    moneyBack: true,
    paymentPlan: true,
    phoneSupport: true,
    href: 'https://www.3stepdivorce.com',
    pros: [
      'Highest-rated on Trustpilot (4.6 stars, 1,300+ reviews)',
      'A+ Better Business Bureau rating',
      'Free $50 rebate if you file within 24 hours of purchase',
      'Free will for both spouses included',
      'Free negotiation platform to help reach agreement',
      'Payment plan available (as low as $84/month)',
      '750,000+ divorces processed since 2002',
    ],
    cons: [
      'Questionnaire takes ~50 minutes (longer than some competitors)',
      'No attorney support included',
    ],
    bestFor: 'Couples who agree on everything and want the most trusted service',
    featured: true,
  },
  {
    id: 'completecase',
    rank: 2,
    badge: 'Runner-Up',
    badgeColor: '#1a2535',
    name: 'CompleteCase',
    tagline: 'Fast and easy — complete in 30 minutes, all 50 states',
    price: '$299',
    priceNote: 'subscription required after 30 days ($39.99/mo)',
    states: 'All 50',
    children: true,
    attorney: false,
    trustpilot: '4.1',
    bbb: 'A-',
    timeToComplete: '~30 min',
    moneyBack: true,
    paymentPlan: false,
    phoneSupport: true,
    href: 'https://www.completecase.com',
    pros: [
      'One of the fastest questionnaires — often done in 30 minutes',
      '700,000+ customers served over 20+ years',
      '24/7 phone and email support',
      'Court approval guaranteed or full refund',
    ],
    cons: [
      'Subscription required after 30 days ($39.99/month)',
      'Monthly fees add up if divorce takes longer than expected',
      'A- BBB rating; some complaints about errors',
    ],
    bestFor: 'Couples who want the fastest questionnaire experience',
    featured: false,
  },
  {
    id: 'hellodivorce',
    rank: 3,
    badge: 'Best Full-Service',
    badgeColor: '#2a7a4f',
    name: 'Hello Divorce',
    tagline: 'Most comprehensive — from DIY forms to attorney access',
    price: 'From $99/mo',
    priceNote: 'plans vary; flat-fee options available',
    states: 'All 50',
    children: true,
    attorney: true,
    trustpilot: '4.5',
    bbb: 'N/A',
    timeToComplete: 'Varies by plan',
    moneyBack: false,
    paymentPlan: true,
    phoneSupport: true,
    href: 'https://hellodivorce.com',
    pros: [
      'Only service offering attorney access within the platform',
      'AI divorce assistant for 24/7 state-specific answers',
      'Free 15-minute strategy call before you purchase',
      'Divorce portal with progress tracking and document storage',
      'Monthly subscription or flat-fee — flexible',
    ],
    cons: [
      'More expensive than pure document services at upper tiers',
      'Non-attorney calls only (legal advice requires separate attorney fee)',
      'Strict refund policy',
    ],
    bestFor: 'Couples who want more guidance and possible attorney access',
    featured: false,
  },
  {
    id: 'divorcewriter',
    rank: 4,
    badge: 'Best Budget',
    badgeColor: '#5a8a6a',
    name: 'DivorceWriter',
    tagline: 'Lowest price — $137 flat, 49 states, 2-year document access',
    price: '$137',
    priceNote: 'flat fee, no subscription',
    states: '49 states (not MO)',
    children: true,
    attorney: false,
    trustpilot: '4.4',
    bbb: 'A+',
    timeToComplete: '~30 min',
    moneyBack: true,
    paymentPlan: false,
    phoneSupport: true,
    href: 'https://www.divorcewriter.com',
    pros: [
      'Lowest price of any reputable service ($137 flat)',
      '2-year unlimited document access and revisions',
      'No subscription fees — pay once',
      'A+ BBB rating since 2003',
    ],
    cons: [
      'Not available in Missouri',
      'Less hand-holding than premium services',
      'No attorney support',
    ],
    bestFor: 'Budget-conscious couples comfortable with the process',
    featured: false,
  },
  {
    id: 'onlinedivorce',
    rank: 5,
    badge: 'Also Consider',
    badgeColor: '#7a6e62',
    name: 'Online Divorce',
    tagline: 'Established service — 21 years, 500,000+ customers, all 50 states',
    price: '$139',
    priceNote: 'subscription may apply after 30 days',
    states: 'All 50 + Canada',
    children: true,
    attorney: false,
    trustpilot: '3.8',
    bbb: 'C-',
    timeToComplete: '~45 min',
    moneyBack: true,
    paymentPlan: false,
    phoneSupport: true,
    href: 'https://www.onlinedivorce.com',
    pros: [
      '21 years in business, 500,000+ customers',
      'Covers all 50 states and Canada',
      'Low base price ($139)',
    ],
    cons: [
      'C- BBB rating — customer service complaints',
      'Mixed Trustpilot reviews (3.8 stars)',
      'Subscription charges after 30 days',
    ],
    bestFor: 'Those who need Canada coverage or prefer the lowest entry price',
    featured: false,
  },
]

export const COMPARISON_ROWS = [
  { label: 'Price', key: 'price' },
  { label: 'States Covered', key: 'states' },
  { label: 'Works with Children', key: 'children' },
  { label: 'Attorney Access', key: 'attorney' },
  { label: 'Trustpilot Rating', key: 'trustpilot' },
  { label: 'BBB Rating', key: 'bbb' },
  { label: 'Time to Complete', key: 'timeToComplete' },
  { label: 'Money-Back Guarantee', key: 'moneyBack' },
  { label: 'Payment Plan', key: 'paymentPlan' },
  { label: 'Phone Support', key: 'phoneSupport' },
] as const
