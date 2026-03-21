import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — SelfFileDivorce.com',
  description: 'Terms of service for SelfFileDivorce.com.',
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="section-eyebrow mb-3">Legal</p>
      <h1 className="font-display text-4xl font-black text-navy mb-6">Terms of Service</h1>
      <p className="font-body text-sm text-text-light mb-8">Last updated: March 2026</p>

      <div className="prose-content">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing SelfFileDivorce.com, you agree to these Terms of Service. If you do not agree, do not use this site.
        </p>

        <h2>Use of the Site</h2>
        <p>You may use this site for lawful personal purposes only. You agree not to:</p>
        <ul>
          <li>Copy, reproduce, or redistribute content without attribution</li>
          <li>Use automated tools to scrape or harvest content at scale</li>
          <li>Use the site in any way that could damage, disable, or impair it</li>
          <li>Attempt to gain unauthorized access to any part of the site</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this site — including text, guides, data compilations, and design — is owned by SelfFileDivorce.com unless otherwise noted. Forms sourced from government websites are in the public domain.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          This site is provided "as is" without warranties of any kind. We do not warrant that the site will be error-free, uninterrupted, or that information will be current or accurate.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, SelfFileDivorce.com is not liable for any indirect, incidental, special, or consequential damages arising from your use of this site.
        </p>

        <h2>External Links</h2>
        <p>
          This site links to external websites, including official court websites and third-party services. We are not responsible for the content or privacy practices of external sites.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the United States. Any disputes shall be resolved in a court of competent jurisdiction.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
        </p>

        <h2>Contact</h2>
        <p>Questions: <strong>hello@selffiledivorce.com</strong></p>
      </div>
    </div>
  )
}
