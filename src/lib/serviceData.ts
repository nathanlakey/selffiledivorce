export interface ServiceMethod {
  id: string
  title: string
  cost: string
  speed: string
  best: string
  icon: string
  color: string
  desc: string
  steps: string[]
  pros: string[]
  cons: string[]
}

export interface StateServiceRule {
  state: string
  primary: string
  notes: string
}

export const SERVICE_METHODS: ServiceMethod[] = [
  {
    id: 'acceptance',
    title: 'Acceptance / Waiver of Service',
    cost: '$0',
    speed: 'Immediate',
    best: 'Cooperative spouse who agrees to everything',
    icon: '🤝',
    color: '#2a7a4f',
    desc: "Your spouse voluntarily signs a form acknowledging they received the divorce papers. No formal service required. This is the fastest, cheapest, and least confrontational option — but only works when your spouse is cooperative. Called 'Acknowledgment of Service,' 'Acceptance of Service,' or 'Waiver of Service' depending on the state.",
    steps: [
      'File your petition with the court',
      'Give or mail your spouse a copy of the petition + the Acceptance/Waiver form',
      'Spouse signs the form in front of a notary (required in most states)',
      'File the signed Acceptance/Waiver form with the court',
      'Response deadline clock begins from the date they signed',
    ],
    pros: ['Free — no service fees', 'Immediate — same day if spouse cooperates', 'Least confrontational', 'Simple paperwork'],
    cons: ['Requires spouse cooperation', 'Spouse must sign before a notary in most states', 'If spouse changes mind, you must use another method'],
  },
  {
    id: 'sheriff',
    title: 'Sheriff or Constable Service',
    cost: '$25–$100',
    speed: '3–14 days',
    best: 'Uncooperative or hard-to-locate spouse',
    icon: '🏛',
    color: '#1a2535',
    desc: "A law enforcement officer personally delivers the papers to your spouse. This is the gold standard — creates an official record and is valid in every state. The sheriff's office typically charges a flat fee per service attempt.",
    steps: [
      'File your petition with the court and get certified copies',
      "Complete a Service of Process form with your spouse's address",
      "Pay the sheriff's office fee ($25–$100 typically)",
      'Sheriff attempts service at the address you provide',
      "Sheriff files a Return of Service with the court confirming delivery",
    ],
    pros: ['Official court record of service', 'Valid in all 50 states', 'Works even if spouse refuses to answer the door', 'Sheriff can make multiple attempts'],
    cons: ['Costs money', 'Takes several days to weeks', "Requires knowing your spouse's current address", 'Can feel confrontational'],
  },
  {
    id: 'process',
    title: 'Private Process Server',
    cost: '$50–$150',
    speed: '1–7 days',
    best: 'Speed + official documentation',
    icon: '⚡',
    color: '#c4a064',
    desc: "A licensed private process server delivers the papers. Usually faster than sheriff service and available in evenings and weekends. Creates the same official Return of Service as sheriff service.",
    steps: [
      'File your petition and get certified copies',
      'Find a licensed process server in your county (court clerk can provide a list)',
      "Provide your spouse's address, work address, and daily schedule if known",
      'Process server locates and serves your spouse',
      'Process server files an Affidavit of Service with the court',
    ],
    pros: ['Faster than sheriff — often same week', 'Available evenings and weekends', 'Often more discreet than uniformed officer', 'Official affidavit for court records'],
    cons: ['Must verify licensing in your state', 'If spouse is hard to locate, attempts add up'],
  },
  {
    id: 'mail',
    title: 'Certified Mail',
    cost: '$10–$20',
    speed: '5–14 days',
    best: 'States that allow it; cooperative spouses',
    icon: '📮',
    color: '#5a8a6a',
    desc: "Service by certified mail with return receipt requested. Available in many states, but not all. The signed return receipt becomes your proof of service. Some states require the court clerk to send the mail rather than you.",
    steps: [
      "Check your state's rules — certified mail service is NOT allowed everywhere",
      'File your petition and get certified copies',
      'Mail via USPS Certified Mail, Return Receipt Requested',
      'Spouse signs the return receipt card upon delivery',
      'File the signed return receipt with the court as proof of service',
    ],
    pros: ['Inexpensive ($10–$20)', 'Less confrontational than in-person service', 'Creates postal record of delivery'],
    cons: ['Not available in all states', 'Spouse must physically sign the receipt — if refused, not valid', 'Some states require the clerk to mail it, not you'],
  },
  {
    id: 'publication',
    title: 'Service by Publication',
    cost: '$100–$400',
    speed: '4–6 weeks',
    best: 'Spouse cannot be located after diligent search',
    icon: '📰',
    color: '#7a6e62',
    desc: "When you genuinely cannot locate your spouse after a diligent search, most courts allow 'service by publication' — publishing a notice in a local newspaper. This is a last resort and requires court approval in most states.",
    steps: [
      'File a Motion or Affidavit with the court explaining your search efforts',
      'Court approves publication (requires showing diligent search)',
      'Publish the notice in a court-approved newspaper for the required number of weeks',
      'File proof of publication with the court',
      'Wait the required time after last publication before proceeding',
    ],
    pros: ['Allows divorce to proceed when spouse is missing', 'Legally valid in all states with court approval'],
    cons: ['Expensive ($100–$400+ for publication fees)', 'Slow (4–6 weeks of publication plus waiting period)', 'Requires proving you searched diligently'],
  },
]

export const STATE_SERVICE_RULES: StateServiceRule[] = [
  { state: 'California', primary: 'Process server or sheriff', notes: 'Spouse cannot serve papers; must be 18+ non-party' },
  { state: 'Texas', primary: 'Sheriff or process server', notes: 'Waiver of service available; spouse signs and notarizes' },
  { state: 'Florida', primary: 'Sheriff or process server', notes: 'Service by mail available with court approval; waiver available' },
  { state: 'New York', primary: 'Any adult non-party 18+', notes: 'Affidavit of Service filed with court; waiver common' },
  { state: 'Georgia', primary: 'Sheriff or process server', notes: 'Acknowledgment of Service available; no notary required in most counties' },
  { state: 'Illinois', primary: 'Sheriff or process server', notes: 'Waiver of service common for uncontested; certified mail allowed in some cases' },
  { state: 'Pennsylvania', primary: "Sheriff (Prothonotary's office)", notes: 'Acceptance of Service available; process server allowed' },
  { state: 'Ohio', primary: 'Court clerk (certified mail)', notes: 'Ohio typically uses clerk-managed certified mail; process server also allowed' },
  { state: 'North Carolina', primary: 'Sheriff or process server', notes: 'Acceptance of Service notarized; sheriff service most common' },
  { state: 'Virginia', primary: 'Sheriff or process server', notes: 'Acceptance of Service in writing; no notary required in some courts' },
  { state: 'Washington', primary: 'Any adult non-party 18+', notes: 'Joinder available for co-petition (no service needed)' },
  { state: 'Arizona', primary: 'Process server, constable, or acceptance', notes: 'Acceptance of Service widely used for uncontested; 20-day response window' },
]
