import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Serve Divorce Papers (All 50 States Guide 2026)',
  description: 'Step-by-step guide to serving divorce papers correctly. Methods, rules, costs, and what to do when your spouse avoids service. Updated 2026.',
  keywords: ['how to serve divorce papers', 'service of process divorce', 'divorce paper service', 'serve spouse divorce'],
}

const METHODS = [
  {
    title: 'Personal Service by Sheriff or Process Server',
    cost: '$25–$150',
    bestFor: 'Recommended for most cases',
    color: '#1a2535',
    desc: 'A sheriff\'s deputy or licensed process server physically hands the papers to your spouse. This is the gold standard — creates a clear record and is accepted everywhere.',
    steps: ['File your divorce petition with the court', 'Request a summons from the clerk', 'Provide the papers + your spouse\'s address to the sheriff or process server', 'They serve and return proof of service', 'File the proof of service with the court'],
  },
  {
    title: 'Acceptance of Service / Waiver',
    cost: '$0',
    bestFor: 'Easiest option when both spouses cooperate',
    color: '#2a7a4f',
    desc: 'Your spouse signs a form acknowledging they received the divorce papers. They\'re essentially waiving the formal service requirement. Most courts have an official form for this.',
    steps: ['Prepare the divorce petition', 'Have your spouse sign the Acceptance of Service form (at a notary in most states)', 'File the signed form with the court along with your petition', 'No process server needed'],
  },
  {
    title: 'Certified Mail',
    cost: '$5–$20',
    bestFor: 'Simple option; not accepted in all states',
    color: '#b8700b',
    desc: 'Send the papers via USPS certified mail with return receipt. Your spouse must sign for the delivery. Some states prohibit this method for divorce; check your local rules.',
    steps: ['Check your state rules — certified mail is not allowed everywhere', 'Send the petition packet via USPS Certified Mail Return Receipt Requested', 'Your spouse\'s signature on the green card = proof of service', 'File the return receipt with the court'],
  },
  {
    title: 'Service by Publication',
    cost: '$50–$300',
    bestFor: 'When spouse cannot be located',
    color: '#c0392b',
    desc: 'If you cannot locate your spouse after a diligent search, most states allow publishing a notice in a local newspaper. Requires court permission first.',
    steps: ['File a motion/affidavit showing diligent attempts to locate your spouse', 'Court issues an order allowing publication', 'Publish the notice in a court-approved newspaper for the required number of weeks', 'File proof of publication with the court', 'Your spouse can be served by default after the publication period'],
  },
]

const FAQ_ITEMS = [
  { q: 'Can I serve my spouse myself?', a: 'No. In all 50 states, you cannot personally serve your own spouse. The person serving must be a non-party adult — a process server, sheriff, or any adult other than you.' },
  { q: 'What if my spouse refuses to accept the papers?', a: 'If a process server attempts to hand papers to your spouse and they refuse, most states count this as valid service. The server documents the refusal. Alternatively, you can leave papers at their feet — courts have upheld this.' },
  { q: 'What if I don\'t know where my spouse lives?', a: 'You must make a "diligent search" — check social media, contact mutual friends, try last known address, check DMV records (in states that allow it), check voter registration. Document all attempts. If unsuccessful, ask the court to allow service by publication.' },
  { q: 'What happens if I serve papers incorrectly?', a: 'Improper service is one of the most common reasons divorce cases stall. The court may dismiss the case or require re-service from the beginning. Always follow your state\'s exact rules.' },
  { q: 'How long does my spouse have to respond?', a: 'Typically 20–30 days from the date of service, depending on the state. If your spouse doesn\'t respond, you can request a default divorce — but the waiting period still applies.' },
  { q: 'Do I need to serve my spouse if we filed jointly?', a: 'No. Joint petitions (where both spouses sign the filing) do not require service. This is one of the major advantages of co-petitioning where your state allows it.' },
]

export default function HowToServeDivorcePapersPage() {
  return (
    <>
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">Step-by-Step Guide · All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            How to Serve Divorce Papers
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-xl mx-auto">
            Service of process is step two in your divorce — and one of the most common places people make mistakes. Here's exactly how to do it right.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="prose-content mb-14">
          <h2>Why Service Matters</h2>
          <p>
            "Service of process" is how you officially notify your spouse that you've filed for divorce. It's a constitutional requirement — your spouse has a right to know they're being sued and a right to respond. Courts will not proceed with a divorce until they have proof your spouse was properly served.
          </p>
          <p>
            Improper service is one of the top reasons DIY divorces get delayed or dismissed. Get this right the first time.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="section-heading">4 Methods of Service</h2>
          <div className="flex flex-col gap-5">
            {METHODS.map(m => (
              <div key={m.title} className="bg-white border border-border rounded-sm overflow-hidden">
                <div className="border-l-4 p-6" style={{ borderLeftColor: m.color }}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-navy mb-1">{m.title}</h3>
                      <p className="font-body text-[11px] font-bold tracking-wide uppercase" style={{ color: m.color }}>{m.bestFor}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-display text-lg font-bold text-navy">{m.cost}</p>
                      <p className="font-body text-[10px] uppercase tracking-wide text-text-light">typical cost</p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-4">{m.desc}</p>
                  <div className="bg-cream rounded-sm p-4">
                    <p className="font-body text-[10px] font-bold tracking-[2px] uppercase text-text-light mb-2">Steps</p>
                    <ol className="space-y-1.5">
                      {m.steps.map((step, i) => (
                        <li key={i} className="font-body text-sm text-text-muted flex gap-2">
                          <span className="font-bold flex-shrink-0" style={{ color: m.color }}>{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-14" />

        <section className="mb-14">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map(item => (
              <div key={item.q} className="bg-white border border-border rounded-sm p-5">
                <h3 className="font-display text-[16px] font-bold text-navy mb-2">{item.q}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white border border-border rounded-sm p-7">
          <h2 className="font-display text-xl font-bold text-navy mb-3">Find Your State's Specific Service Rules</h2>
          <p className="font-body text-sm text-text-muted leading-relaxed mb-5">
            Service rules vary by state. Your state guide covers exactly which methods are accepted, required timeframes, and how to file proof of service.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/divorce-by-state" className="btn-primary">Browse State Guides →</Link>
            <Link href="/divorce-forms-by-state" className="font-body text-sm font-semibold py-3 px-6 border-2 border-navy text-navy rounded-sm hover:bg-navy hover:text-cream-dark transition-all">Find Court Forms</Link>
          </div>
        </div>
      </div>
    </>
  )
}
