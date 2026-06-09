import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — SoLongSoulmate.com',
  description: "SoLongSoulmate.com's privacy policy. How we collect, use, and protect your information. Covers cookies, Google Analytics, AdSense, and affiliate links.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="March 20, 2026"
    >
      <p>
        SoLongSoulmate.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using SoLongSoulmate.com (the &quot;Site&quot;), you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <p>
        We do not require you to create an account or provide personal information to access our content. However, if you voluntarily contact us, subscribe to a newsletter, or submit a form, we may collect your name, email address, and the content of your message or inquiry.
      </p>

      <h3>1.2 Information Collected Automatically</h3>
      <p>When you visit the Site, certain information is collected automatically, including:</p>
      <ul>
        <li><strong>Log Data:</strong> IP address, browser type and version, pages visited, time and date of visit, time spent on each page.</li>
        <li><strong>Cookies:</strong> Small data files stored on your device that help us understand how visitors use the Site, remember preferences, and analyze traffic. You can control cookies through your browser settings.</li>
        <li><strong>Google Analytics:</strong> We use Google Analytics to analyze Site usage. Google Analytics collects your IP address and navigation data. We do not combine this with personally identifiable information. You can opt out at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</li>
      </ul>

      <h3>1.3 Information from Third Parties</h3>
      <p>
        If you click on an affiliate link and make a purchase, the third-party provider may share limited transaction data to track commissions. We do not receive your payment information or full personal details from these transactions.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Operate, maintain, and improve the Site</li>
        <li>Understand how visitors use the Site</li>
        <li>Respond to your inquiries and communications</li>
        <li>Send newsletters or updates (if subscribed — unsubscribe anytime)</li>
        <li>Track affiliate commissions for recommended services</li>
        <li>Comply with legal obligations</li>
        <li>Detect and prevent fraud or abuse</li>
      </ul>
      <p><strong>We do not sell your personal information to third parties.</strong></p>

      <h2>3. Advertising &amp; Affiliate Links</h2>

      <h3>3.1 Google AdSense</h3>
      <p>
        We participate in Google AdSense, which displays advertisements on our Site. Google may use information about your visits to this and other websites to serve relevant ads. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">google.com/settings/ads</a> or <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.
      </p>

      <h3>3.2 Affiliate Links</h3>
      <p>
        Our Site contains affiliate links to third-party services. When you click on an affiliate link and make a purchase, we may earn a commission. Affiliate links are clearly disclosed on pages where they appear. Clicking an affiliate link takes you to a third-party website — we are not responsible for the privacy practices of those sites.
      </p>

      <h2>4. Information Sharing and Disclosure</h2>
      <p>We do not sell, trade, or rent your personal information. We may share your information only in the following limited circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> Vendors who assist in operating the Site and are bound to confidentiality.</li>
        <li><strong>Legal Requirements:</strong> If required by law, court order, or valid legal process.</li>
        <li><strong>Business Transfers:</strong> If involved in a merger or acquisition, with notice provided to users.</li>
        <li><strong>With Your Consent:</strong> When you have explicitly agreed to sharing.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information you provide for as long as necessary to fulfill the purpose for which it was collected, plus a reasonable additional period, unless a longer period is required by law. Automatically collected data (analytics, log files) is typically retained for up to 26 months.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your personal information. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        Our Site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
      </p>

      <h2>8. Your Rights and Choices</h2>
      <p>
        <strong>California Residents (CCPA):</strong> You have the right to know what information we collect, request deletion, and opt out of the sale of personal information. We do not sell personal information.
      </p>
      <p>
        <strong>EEA/UK Residents (GDPR):</strong> You have rights of access, rectification, erasure, restriction, portability, and objection. Our legal basis for processing is legitimate interests (operating and improving the Site) and, where applicable, consent.
      </p>
      <p>Contact us at <strong>privacy@solongsoulmate.com</strong> to exercise any of these rights.</p>

      <h2>9. Third-Party Links</h2>
      <p>
        Our Site links to third-party websites including court sites, legal aid organizations, and commercial services. We are not responsible for the privacy practices or content of those sites.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post changes on this page and update the &quot;Last Updated&quot; date. Your continued use of the Site after changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at: <strong>privacy@solongsoulmate.com</strong>
      </p>
    </LegalPageLayout>
  )
}
