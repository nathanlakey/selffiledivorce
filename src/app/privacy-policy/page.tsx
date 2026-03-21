import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — SoLongSoulmate.com',
  description: 'Privacy policy for SoLongSoulmate.com. How we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-eyebrow mb-3">Legal</p>
      <h1 className="font-display text-4xl font-black text-navy mb-6">Privacy Policy</h1>
      <p className="font-body text-sm text-text-light mb-8">Last updated: March 2026</p>

      <div className="prose-content">
        <h2>Information We Collect</h2>
        <p>
          SoLongSoulmate.com collects the following types of information:
        </p>
        <ul>
          <li><strong>Usage data:</strong> Pages viewed, time on site, referring URLs, browser type, and device type, collected via Google Analytics.</li>
          <li><strong>Cookies:</strong> We use cookies to improve site functionality and to serve relevant advertising. You can disable cookies in your browser settings.</li>
          <li><strong>Contact information:</strong> If you email us, we retain your email address to respond to your inquiry.</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To improve site content and user experience</li>
          <li>To serve relevant advertising through Google AdSense</li>
          <li>To respond to inquiries</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services which have their own privacy policies:</p>
        <ul>
          <li>Google Analytics — usage analytics</li>
          <li>Google AdSense — advertising</li>
          <li>Vercel — website hosting</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          Google Analytics data is retained for 26 months. Contact emails are retained for 12 months unless you request deletion.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request deletion of any personal data we hold about you by emailing hello@solongsoulmate.com. EU/EEA residents have additional rights under GDPR.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          This site is not directed to children under 13. We do not knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy periodically. The date at the top of this page reflects the last update.
        </p>

        <h2>Contact</h2>
        <p>Questions about this policy: <strong>hello@solongsoulmate.com</strong></p>
      </div>
    </div>
  )
}
