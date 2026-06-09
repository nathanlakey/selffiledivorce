'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  QUIZ_QUESTIONS,
  QUIZ_OUTCOMES,
  getQuizOutcome,
  type QuizOutcomeKey,
} from '@/lib/quizData'

type Step = 'intro' | 'quiz' | 'result'

export function QuizClient() {
  const [step, setStep] = useState<Step>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Array<{ questionId: string; value: string }>>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<QuizOutcomeKey | null>(null)

  const q = QUIZ_QUESTIONS[current]
  const out = result ? QUIZ_OUTCOMES[result] : null
  const progress = (current / QUIZ_QUESTIONS.length) * 100

  function startQuiz() {
    setStep('quiz')
    setCurrent(0)
    setAnswers([])
    setSelected(null)
  }

  function handleNext() {
    if (!selected) return
    const newAnswers = [...answers, { questionId: q.id, value: selected }]
    setAnswers(newAnswers)
    if (current + 1 < QUIZ_QUESTIONS.length) {
      setCurrent(current + 1)
      setSelected(null)
    } else {
      setResult(getQuizOutcome(newAnswers))
      setStep('result')
    }
  }

  function handleBack() {
    if (current === 0) {
      setStep('intro')
      return
    }
    const newAnswers = answers.slice(0, -1)
    setAnswers(newAnswers)
    setCurrent(current - 1)
    setSelected(answers[current - 1]?.value ?? null)
  }

  function restart() {
    setStep('intro')
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* INTRO */}
        {step === 'intro' && (
          <div>
            <p className="section-eyebrow">Free Assessment · 7 Questions · 2 Minutes</p>
            <h1 className="font-display text-4xl md:text-5xl font-black text-navy leading-tight mb-5">
              Do I Need a Lawyer<br />
              <span className="text-gold">for My Divorce?</span>
            </h1>
            <p className="font-body text-text-muted text-lg leading-relaxed mb-8">
              Answer 7 quick questions about your situation. We'll tell you whether DIY, an online service, or an attorney is the right path — and why.
            </p>

            {/* Outcome preview cards */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { icon: '✓', label: 'DIY', cost: '$80–$700', color: '#2a7a4f', bg: '#f0faf5', border: '#a8dfc0' },
                { icon: '→', label: 'Online Service', cost: '$150–$500', color: '#c4a064', bg: '#fdf9f0', border: '#e8d4a0' },
                { icon: '!', label: 'Attorney', cost: '$8k–$50k+', color: '#c0392b', bg: '#fdf2f0', border: '#f0b8b0' },
              ].map(o => (
                <div
                  key={o.label}
                  className="rounded-sm p-4 text-center border"
                  style={{ background: o.bg, borderColor: o.border }}
                >
                  <div className="text-2xl mb-2">{o.icon}</div>
                  <div className="font-body text-[11px] font-bold tracking-[1.5px] uppercase mb-1" style={{ color: o.color }}>{o.label}</div>
                  <div className="font-display text-lg font-bold" style={{ color: o.color }}>{o.cost}</div>
                </div>
              ))}
            </div>

            <button onClick={startQuiz} className="btn-primary w-full py-4 text-base">
              Start the Assessment →
            </button>
            <p className="font-body text-xs text-text-light text-center mt-4">
              No signup required. Your answers are not stored.
            </p>
          </div>
        )}

        {/* QUIZ */}
        {step === 'quiz' && (
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-text-light">Your Assessment</span>
                <span className="font-body text-xs text-text-light">Question {current + 1} of {QUIZ_QUESTIONS.length}</span>
              </div>
              <div className="h-[3px] bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-400"
                  style={{ width: `${Math.max(4, progress)}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <p className="font-body text-[11px] font-semibold tracking-[2.5px] uppercase text-gold mb-3">
              Question {current + 1}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-snug mb-3">
              {q.text}
            </h2>
            <p className="font-body text-sm text-text-light leading-relaxed mb-8">{q.sub}</p>

            {/* Options */}
            <div className="flex flex-col gap-3 mb-8">
              {q.options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelected(opt.value)}
                  className={`flex items-center gap-4 p-5 rounded-sm border-2 text-left transition-all ${
                    selected === opt.value
                      ? 'border-navy bg-cream-dark'
                      : 'border-border bg-white hover:border-gold'
                  }`}
                >
                  {/* Radio circle */}
                  <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    selected === opt.value ? 'border-navy bg-navy' : 'border-border'
                  }`}>
                    {selected === opt.value && (
                      <span className="w-2 h-2 rounded-full bg-cream-dark" />
                    )}
                  </span>
                  <span className="font-body text-[15px] font-medium text-navy leading-snug">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleNext}
                disabled={!selected}
                className="btn-primary px-8 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {current + 1 === QUIZ_QUESTIONS.length ? 'See My Result →' : 'Next Question →'}
              </button>
              <button
                onClick={handleBack}
                className="font-body text-sm text-text-light hover:text-navy transition-colors"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* RESULT */}
        {step === 'result' && out && (
          <div>
            {/* Result tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase mb-5 border"
              style={{ background: out.bg, color: out.color, borderColor: out.border }}
            >
              <span>{out.icon}</span>
              <span>{out.tag}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-black text-navy leading-snug mb-5">
              {out.headline}
            </h1>
            <p className="font-body text-base text-text-muted leading-relaxed mb-8">
              {out.summary}
            </p>

            {/* Next steps */}
            <div
              className="rounded-sm p-7 border mb-6"
              style={{ background: out.bg, borderColor: out.border }}
            >
              <h3 className="font-display text-lg font-bold text-navy mb-4">Your Next Steps</h3>
              <ol className="space-y-3">
                {out.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 mt-0.5"
                      style={{ background: out.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-body text-sm text-text-muted leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Primary CTA */}
            <Link
              href={out.ctaHref}
              className="block w-full text-center font-body text-[15px] font-bold py-4 rounded-sm text-white mb-6 transition-all hover:opacity-85"
              style={{ background: out.color }}
            >
              {out.ctaLabel}
            </Link>

            {/* Affiliate box */}
            {out.affiliateLabel && (
              <>
                <div className="h-px bg-border my-6" />
                <div className="bg-white border border-border rounded-sm p-6">
                  <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-2">Recommended Service</p>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{out.affiliateLabel}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-4">{out.affiliateDesc}</p>
                  <a
                    href={out.affiliateHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-body text-sm font-bold px-6 py-2.5 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors"
                  >
                    Learn More →
                  </a>
                  <p className="font-body text-[11px] text-text-light mt-3">
                    Affiliate link — we may earn a commission at no cost to you.
                  </p>
                </div>
              </>
            )}

            <div className="h-px bg-border my-6" />

            {/* Answer summary */}
            <div className="mb-6">
              <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-text-light mb-3">Your Answers</p>
              {answers.map((a, i) => {
                const question = QUIZ_QUESTIONS.find(q => q.id === a.questionId)
                const option = question?.options.find(o => o.value === a.value)
                return (
                  <div key={i} className="flex justify-between items-start gap-4 py-2.5 border-b border-border-light">
                    <span className="font-body text-xs text-text-light">{question?.text}</span>
                    <span className="font-body text-xs font-semibold text-navy text-right flex-shrink-0">{option?.label}</span>
                  </div>
                )
              })}
            </div>

            <button
              onClick={restart}
              className="font-body text-xs text-text-light underline hover:text-navy transition-colors"
            >
              ← Retake the quiz
            </button>

            <p className="font-body text-xs text-text-light leading-relaxed mt-8 pt-6 border-t border-border">
              This quiz provides general guidance based on your answers — it is not legal advice. Every divorce is different. If you have concerns about your specific situation, consult a licensed family law attorney in your state.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
