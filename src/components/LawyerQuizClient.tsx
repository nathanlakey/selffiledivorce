'use client'

import { useState } from 'react'
import Link from 'next/link'

const QUESTIONS = [
  {
    id: 'children',
    text: 'Do you have minor children together?',
    options: [
      { label: 'Yes — and we disagree on custody or support', score: 3 },
      { label: 'Yes — but we agree on custody and support', score: 1 },
      { label: 'No minor children', score: 0 },
    ],
  },
  {
    id: 'assets',
    text: 'How complex are your shared assets?',
    options: [
      { label: 'Business, pension/401k, or real estate to divide', score: 3 },
      { label: 'Modest savings, one car, or rented home', score: 1 },
      { label: 'Very little — no significant shared assets', score: 0 },
    ],
  },
  {
    id: 'agreement',
    text: 'Are you and your spouse in agreement about the divorce?',
    options: [
      { label: 'Contested — we disagree on major issues', score: 3 },
      { label: 'Mostly agree, but a few unresolved issues', score: 1 },
      { label: 'Fully agreed on everything', score: 0 },
    ],
  },
  {
    id: 'dv',
    text: 'Is there any domestic violence, abuse, or power imbalance?',
    options: [
      { label: 'Yes', score: 4 },
      { label: 'No', score: 0 },
    ],
  },
  {
    id: 'duration',
    text: 'How long were you married?',
    options: [
      { label: 'Over 10 years', score: 2 },
      { label: '3–10 years', score: 1 },
      { label: 'Under 3 years', score: 0 },
    ],
  },
  {
    id: 'selfconfidence',
    text: 'How comfortable are you handling legal paperwork?',
    options: [
      { label: 'Not at all comfortable', score: 2 },
      { label: 'Somewhat comfortable', score: 1 },
      { label: 'Comfortable with research and forms', score: 0 },
    ],
  },
]

type Outcome = 'diy' | 'mediation' | 'attorney' | 'attorney_urgent'

function getOutcome(score: number): Outcome {
  if (score >= 10) return 'attorney_urgent'
  if (score >= 6) return 'attorney'
  if (score >= 3) return 'mediation'
  return 'diy'
}

const OUTCOMES = {
  diy: {
    title: 'DIY Divorce Is Very Likely Viable',
    color: '#2a7a4f',
    bg: '#edfaf3',
    border: '#a8e4c0',
    emoji: '✅',
    summary: 'Your situation has low complexity. Most couples in your position successfully file without an attorney using their state\'s free court forms.',
    steps: [
      'Find your state\'s official court self-help forms',
      'Draft a simple Marital Settlement Agreement (MSA)',
      'File the petition and serve your spouse',
      'Attend the brief final hearing (or waive it)',
    ],
    cta: { label: 'Find My State\'s Free Forms →', href: '/divorce-forms-by-state' },
    secondary: { label: 'Compare DIY Costs', href: '/divorce-cost-by-state' },
  },
  mediation: {
    title: 'Mediation Is Likely Your Best Path',
    color: '#c4a064',
    bg: '#fdf8ef',
    border: '#f0d897',
    emoji: '🤝',
    summary: 'You have some unresolved issues, but not enough complexity to justify full attorney representation. A mediator can help you reach agreement in 3–6 sessions for $2,000–$5,000.',
    steps: [
      'Find a certified family mediator in your area (or online)',
      'Use the mediator to resolve remaining disputes',
      'Have a reviewing attorney check the final agreement ($300–$700)',
      'File the agreed paperwork with the court yourself',
    ],
    cta: { label: 'Learn About Mediation', href: '/what-is-a-marital-settlement-agreement' },
    secondary: { label: 'Compare Online Divorce Services', href: '/best-online-divorce-services' },
  },
  attorney: {
    title: 'Consider Hiring an Attorney',
    color: '#b8700b',
    bg: '#fdf3e3',
    border: '#f5dfa0',
    emoji: '⚠️',
    summary: 'Your case has significant complexity — contested issues, substantial assets, or a long marriage. An attorney can protect rights you didn\'t know you had.',
    steps: [
      'Consult with 2–3 family law attorneys (first consults often $0–$300)',
      'Ask specifically about unbundled services (document review only) to save costs',
      'Gather all financial records before the first meeting',
      'Consider collaborative divorce as a lower-cost alternative to litigation',
    ],
    cta: { label: 'Understand Attorney Costs', href: '/divorce-cost-by-state' },
    secondary: { label: 'What Is an MSA?', href: '/what-is-a-marital-settlement-agreement' },
  },
  attorney_urgent: {
    title: 'Get an Attorney Immediately',
    color: '#c0392b',
    bg: '#fdf2f0',
    border: '#f0b8b0',
    emoji: '🚨',
    summary: 'Your situation involves factors — domestic violence, abuse, or severe complexity — that make self-representation risky. Please consult an attorney or legal aid organization before doing anything else.',
    steps: [
      'Contact the National DV Hotline: 1-800-799-7233 if safety is a concern',
      'Search "legal aid [your state]" for free legal help if cost is a barrier',
      'Do not sign any agreements before speaking with an attorney',
      'Document everything — dates, incidents, financial records',
    ],
    cta: { label: 'Find Legal Aid Resources', href: '/about' },
    secondary: { label: 'Understand Your Rights', href: '/divorce-cost-by-state' },
  },
}

const WHEN_DIY_WORKS = [
  { icon: '✓', title: 'Uncontested divorce', desc: 'Both spouses agree on property, debts, custody, and support' },
  { icon: '✓', title: 'Short to mid-length marriage', desc: 'Fewer entangled assets, simpler financial picture' },
  { icon: '✓', title: 'No minor children (or full agreement)', desc: 'Parenting plans add complexity; agreed plans are manageable' },
  { icon: '✓', title: 'No business or pension to divide', desc: 'Retirement accounts and businesses need professional valuation' },
  { icon: '✓', title: 'Willing to research your state\'s process', desc: 'States have excellent free guides if you\'re willing to read them' },
]

const WHEN_YOU_NEED_ONE = [
  { icon: '✗', title: 'Domestic violence or coercion', desc: 'Safety and legal rights at stake — never DIY this' },
  { icon: '✗', title: 'Contested custody battles', desc: 'Judges decide based on the child\'s best interest; proper arguments matter' },
  { icon: '✗', title: 'Business ownership or complex retirement assets', desc: 'QDROs and business valuations require professional handling' },
  { icon: '✗', title: 'Spouse has an attorney', desc: 'An attorney negotiating against a non-attorney has a major advantage' },
  { icon: '✗', title: 'Significant separate vs. marital property questions', desc: 'Tracing separate property is complex and high-stakes' },
]

export function LawyerQuizClient() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [current, setCurrent] = useState(0)

  const handleAnswer = (qid: string, score: number) => {
    const next = { ...answers, [qid]: score }
    setAnswers(next)
    if (current < QUESTIONS.length - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300)
    } else {
      setTimeout(() => setSubmitted(true), 300)
    }
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const outcome = OUTCOMES[getOutcome(totalScore)]
  const progress = (current / QUESTIONS.length) * 100

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">Free Quiz · 2 Minutes</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Do I Need a Lawyer <span className="text-gold">for My Divorce?</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-xl mx-auto">
            Answer 6 questions about your situation. We'll tell you honestly whether you need an attorney, a mediator, or can DIY your divorce.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quiz */}
        {!submitted ? (
          <section className="mb-16">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-[11px] font-body font-medium tracking-wide uppercase text-text-light mb-2">
                <span>Question {current + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {QUESTIONS.map((q, i) => (
              <div key={q.id} className={i === current ? 'block' : 'hidden'}>
                <h2 className="font-display text-2xl font-bold text-navy mb-6">{q.text}</h2>
                <div className="flex flex-col gap-3">
                  {q.options.map(opt => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(q.id, opt.score)}
                      className={`font-body text-left text-base px-6 py-4 border-2 rounded-sm transition-all ${
                        answers[q.id] === opt.score
                          ? 'border-navy bg-navy text-cream-dark'
                          : 'border-border bg-white text-text hover:border-gold hover:text-gold'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="mb-16">
            <div
              className="rounded-sm border-2 p-8 mb-8"
              style={{ background: outcome.bg, borderColor: outcome.border }}
            >
              <p className="text-4xl mb-4">{outcome.emoji}</p>
              <h2 className="font-display text-2xl font-bold mb-3" style={{ color: outcome.color }}>
                {outcome.title}
              </h2>
              <p className="font-body text-base text-text-muted leading-relaxed mb-6">{outcome.summary}</p>
              <div className="mb-6">
                <p className="font-body text-[11px] font-bold tracking-[2px] uppercase text-text-light mb-3">Recommended Next Steps</p>
                <ol className="space-y-2">
                  {outcome.steps.map((step, i) => (
                    <li key={i} className="font-body text-sm text-text-muted flex gap-3">
                      <span className="font-bold flex-shrink-0" style={{ color: outcome.color }}>{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href={outcome.cta.href} className="btn-primary">{outcome.cta.label}</Link>
                <Link
                  href={outcome.secondary.href}
                  className="font-body text-sm font-semibold py-3 px-6 border-2 border-navy text-navy rounded-sm hover:bg-navy hover:text-cream-dark transition-all"
                >
                  {outcome.secondary.label}
                </Link>
              </div>
            </div>
            <button
              onClick={() => { setAnswers({}); setCurrent(0); setSubmitted(false) }}
              className="font-body text-sm text-text-light underline underline-offset-2 hover:text-gold"
            >
              Retake the quiz
            </button>
          </section>
        )}

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        {/* When DIY works / When you need one */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div>
            <h2 className="font-display text-xl font-bold text-navy mb-5">When DIY Divorce Works</h2>
            <ul className="space-y-4">
              {WHEN_DIY_WORKS.map(item => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-[#1e7a45] font-bold text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-body text-sm font-semibold text-text">{item.title}</p>
                    <p className="font-body text-sm text-text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy mb-5">When You Need an Attorney</h2>
            <ul className="space-y-4">
              {WHEN_YOU_NEED_ONE.map(item => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-[#c0392b] font-bold text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-body text-sm font-semibold text-text">{item.title}</p>
                    <p className="font-body text-sm text-text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unbundled services explainer */}
        <div className="bg-white border border-border rounded-sm p-7 mb-4">
          <h2 className="font-display text-xl font-bold text-navy mb-3">The Middle Path: Unbundled Legal Services</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
            You don't have to choose between full attorney representation ($10,000+) and doing everything yourself. Many attorneys offer <strong>"unbundled" or "limited scope"</strong> services — you pay for exactly what you need:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { service: 'Document Review', price: '$200–$500', desc: 'Attorney reviews your completed forms for errors' },
              { service: 'Specific Advice', price: '$150–$350', desc: 'Answer one question about your rights in a 30-minute call' },
              { service: 'MSA Drafting', price: '$500–$1,500', desc: 'Attorney drafts or reviews your settlement agreement' },
            ].map(s => (
              <div key={s.service} className="bg-cream rounded-sm p-4">
                <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-text-light mb-1">{s.service}</p>
                <p className="font-display text-lg font-bold text-navy mb-1">{s.price}</p>
                <p className="font-body text-xs text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-navy py-14 px-6 text-center">
        <h2 className="font-display text-2xl font-black text-cream-dark mb-3">Ready to take the next step?</h2>
        <p className="font-body text-cream-dark/65 mb-7 max-w-md mx-auto">Find your state's complete guide — forms, fees, and step-by-step instructions.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/divorce-by-state" className="btn-gold">Browse All 50 State Guides →</Link>
          <Link href="/divorce-cost-by-state" className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all">Compare Costs</Link>
        </div>
      </section>
    </>
  )
}
