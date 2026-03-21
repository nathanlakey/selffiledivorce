import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About SelfFileDivorce.com',
  description: 'SelfFileDivorce.com provides free, accurate divorce guides for all 50 states. Learn about our mission, editorial standards, and how we help people navigate the divorce process.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-eyebrow mb-3">About Us</p>
      <h1 className="font-display text-4xl font-black text-navy mb-6">About SelfFileDivorce.com</h1>

      <div className="prose-content">
        <p>
          <strong>SelfFileDivorce.com</strong> was built on a simple belief: understanding how to navigate a divorce should not cost $300/hour.
        </p>

        <h2>Our Mission</h2>
        <p>
          We provide free, accurate, and up-to-date divorce guides for all 50 states. Our goal is to give people the information they need to make informed decisions — whether that's filing on their own, using a mediator, or hiring an attorney.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li>Residency requirements and waiting periods for every state</li>
          <li>Step-by-step filing instructions specific to each state's process</li>
          <li>Direct links to official court forms (always free, always from the source)</li>
          <li>Filing fees and total cost estimates, updated annually</li>
          <li>Plain-language explanations of legal concepts like community property, QDROs, and service of process</li>
        </ul>

        <h2>Editorial Standards</h2>
        <p>
          Our guides are researched from primary sources: official state court websites, statutes, and court rules. We do not copy content from other websites or use AI to fabricate information. When laws change, we update the relevant guides.
        </p>
        <p>
          We are not a law firm. Nothing on this site is legal advice. We always recommend consulting an attorney for complex situations, situations involving domestic violence, or cases with significant assets.
        </p>

        <h2>How We're Funded</h2>
        <p>
          SelfFileDivorce.com earns revenue through affiliate relationships with online divorce services (clearly disclosed on relevant pages) and display advertising. These relationships do not affect our editorial coverage — we do not recommend services because they pay us; we only list services we believe provide genuine value.
        </p>

        <h2>Contact</h2>
        <p>
          For corrections, questions, or partnership inquiries, email us at: <strong>hello@selffiledivorce.com</strong>
        </p>
      </div>

      <div className="mt-10 flex gap-4 flex-wrap">
        <Link href="/divorce-by-state" className="btn-primary">Browse State Guides →</Link>
        <Link href="/disclaimer" className="font-body text-sm text-text-muted underline underline-offset-2 self-center">Legal Disclaimer</Link>
      </div>
    </div>
  )
}
