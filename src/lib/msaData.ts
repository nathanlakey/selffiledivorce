export interface MSASection {
  title: string
  icon: string
  items: string[]
}

export interface MSAMistake {
  title: string
  desc: string
}

export const MSA_SECTIONS: MSASection[] = [
  {
    title: 'Property Division',
    icon: '🏠',
    items: [
      'Real estate — who keeps the home, or how and when it will be sold',
      'How sale proceeds will be divided if the home is sold',
      'Refinancing deadlines if one spouse is keeping the home',
      'Bank accounts — which accounts each spouse keeps',
      'Investment and brokerage accounts',
      'Retirement accounts (401k, IRA, pension) — requires separate QDRO for employer plans',
      'Vehicles — who keeps each car, who takes over each loan',
      'Business interests — valuation and division or buyout',
      'Personal property — furniture, jewelry, collectibles',
      'Cryptocurrency and digital assets',
    ],
  },
  {
    title: 'Debt Division',
    icon: '💳',
    items: [
      'Mortgage — who is responsible, refinancing timeline',
      'Credit card debt — which spouse pays which accounts',
      'Car loans — who pays each loan',
      'Student loans — generally stays with the borrowing spouse',
      'Medical debt',
      'Tax liabilities — current and back taxes',
      'Personal loans and lines of credit',
      'Indemnification clause — if one spouse fails to pay an assigned debt, the other is held harmless',
    ],
  },
  {
    title: 'Spousal Support (Alimony)',
    icon: '💰',
    items: [
      'Whether alimony will be paid (or both waive it)',
      'Amount of monthly payments',
      'Duration — how long payments continue',
      'Type — periodic, lump sum, rehabilitative, or reimbursement',
      'Termination triggers — remarriage, cohabitation, death',
      'Tax treatment (post-2018 alimony is not deductible for payer under federal law)',
      'Modification provisions — can it be changed if circumstances change',
    ],
  },
  {
    title: 'Children — Custody & Support',
    icon: '👶',
    items: [
      'Legal custody — who makes decisions about education, medical, religion',
      'Physical custody / primary residential parent',
      'Parenting time schedule — regular schedule, weekdays, weekends',
      'Holiday and school break schedule',
      'Summer vacation schedule',
      'Transportation — who drives to exchanges, where exchanges happen',
      'Child support — amount, payment method, payment date',
      'Child support duration — through high school, college, or other',
      'Health insurance — which parent carries coverage',
      'Medical expense sharing — co-pays, uncovered expenses',
      'Extracurricular activity costs — how split',
      'Tax dependency exemption — which parent claims the child',
      'Passport and travel consent provisions',
    ],
  },
  {
    title: 'Other Important Provisions',
    icon: '📋',
    items: [
      'Name restoration — if a spouse is resuming their former name',
      'Life insurance — maintaining coverage for support obligations',
      'Health insurance continuation (COBRA rights and timelines)',
      'Non-disparagement clause — agree not to speak negatively about each other',
      'Dispute resolution — how future disagreements will be handled',
      'Severability clause — if one provision is invalid, the rest stand',
      'Full disclosure statement — both parties confirm they have disclosed all assets',
      'Merger or survival clause — whether the MSA merges into or survives the divorce decree',
    ],
  },
]

export const MSA_MISTAKES: MSAMistake[] = [
  {
    title: 'Being too vague about real estate',
    desc: "Saying \"wife gets the house\" is not enough. Specify who refinances, by what date, what happens if they can't qualify, and who gets net equity if the home must be sold instead.",
  },
  {
    title: 'Forgetting retirement accounts need a QDRO',
    desc: "A divorce decree alone does NOT divide a 401k or pension. You need a separate Qualified Domestic Relations Order (QDRO) — a court order sent to the plan administrator. Don't skip this.",
  },
  {
    title: 'Not addressing debt indemnification',
    desc: "If your spouse agrees to pay a joint credit card but doesn't, the credit card company can still come after you. Include an indemnification clause — and consider closing or refinancing joint accounts.",
  },
  {
    title: 'Missing the tax dependency exemption',
    desc: "For couples with children, decide who claims the child as a tax dependent each year. This can be worth $2,000+ per year in child tax credits. Don't leave it unaddressed.",
  },
  {
    title: 'No modification provisions',
    desc: "Circumstances change. Include language about when and how child support and alimony can be modified — remarriage, significant income changes, job loss, etc.",
  },
  {
    title: 'Signing without reading',
    desc: "Read every line before signing. Once a judge approves the MSA, it's extremely difficult to undo. Courts are very reluctant to reopen agreed settlements.",
  },
]

export const STATES_REQUIRING_MSA = [
  { state: 'Tennessee', note: 'MDA (Marital Dissolution Agreement) required for irreconcilable differences divorce' },
  { state: 'Virginia', note: 'Property Settlement Agreement required for 6-month separation path' },
  { state: 'Maryland', note: 'Required for mutual consent divorce (no separation needed)' },
  { state: 'South Carolina', note: 'Required for uncontested divorce' },
  { state: 'Arkansas', note: 'Settlement Agreement filed with decree' },
]
