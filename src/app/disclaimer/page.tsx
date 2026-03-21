import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Disclaimer — SoLongSoulmate.com',
  description: 'Legal disclaimer for SoLongSoulmate.com. This site provides general legal information, not legal advice.',
}

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-eyebrow mb-3">Legal</p>
      <h1 className="font-display text-4xl font-black text-navy mb-6">Legal Disclaimer</h1>
      <p className="font-body text-sm text-text-light mb-8">Last updated: March 2026</p>

      <div className="prose-content">
        <h2>Not Legal Advice</h2>
        <p>
          The information on SoLongSoulmate.com is provided for general informational purposes only. It is <strong>not legal advice</strong> and does not create an attorney-client relationship. You should not act or refrain from acting based on anything on this website without first consulting a licensed attorney in your jurisdiction.
        </p>

        <h2>No Attorney-Client Relationship</h2>
        <p>
          Use of this website does not create an attorney-client relationship between you and SoLongSoulmate.com or any of its contributors. We are not a law firm.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we make every effort to ensure the information on this site is accurate and current, divorce laws change frequently. We cannot guarantee that all information is complete, current, or applicable to your specific situation. Always verify requirements with your local court before filing.
        </p>

        <h2>Jurisdiction</h2>
        <p>
          Divorce law varies by state and sometimes by county. Information provided for a specific state may not apply to your specific county, court, or circumstances.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          SoLongSoulmate.com, its owners, contributors, and affiliates are not liable for any damages arising from your use of, or reliance on, any information provided on this website.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on this site are affiliate links. We may receive compensation if you purchase a product or service through these links. This does not affect our editorial independence.
        </p>

        <h2>Seek Professional Help When Needed</h2>
        <p>
          If your divorce involves domestic violence, complex assets, contested custody, business ownership, or significant retirement accounts, please consult a licensed family law attorney. Free legal aid resources are available in every state.
        </p>
      </div>
    </div>
  )
}
