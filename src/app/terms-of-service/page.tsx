import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Terms of Service — SoLongSoulmate.com',
  description: 'Terms of Service for SoLongSoulmate.com. Governs your use of the site including content, affiliate links, disclaimers, and limitation of liability.',
}

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="March 20, 2026"
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of SoLongSoulmate.com (the &quot;Site&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2>1. Nature of the Site — Not Legal Advice</h2>

      <div className="bg-[#fff8e8] border border-[#e8d090] border-l-4 border-l-gold rounded-r-sm px-6 py-4 my-4 not-prose">
        <p className="font-body text-sm font-semibold text-navy leading-relaxed">
          THIS IS THE MOST IMPORTANT SECTION. PLEASE READ IT CAREFULLY.
        </p>
      </div>

      <p>
        SoLongSoulmate.com provides <strong>general legal information</strong> about divorce procedures in the United States. This content is for informational purposes only and is <strong>not legal advice</strong>.
      </p>
      <ul>
        <li>No attorney-client relationship is created by your use of this Site.</li>
        <li>The information on this Site is not a substitute for advice from a licensed attorney familiar with your specific circumstances.</li>
        <li>Divorce laws vary by state, county, and individual circumstances, and change frequently. We do not guarantee that our content is current, complete, or accurate as applied to your situation.</li>
        <li><strong>Verify all information with your local court before filing.</strong></li>
        <li>We are not a law firm and do not provide legal representation or legal services of any kind.</li>
      </ul>
      <p>
        <strong>If you face domestic violence, an imminent legal deadline, or a legal emergency — consult a licensed attorney or legal aid in your state immediately.</strong>
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years of age to use this Site. By using the Site, you represent that you are at least 18 years old.
      </p>

      <h2>3. Use of the Site</h2>
      <h3>3.1 Permitted Use</h3>
      <p>You may use the Site for personal, non-commercial purposes in accordance with these Terms.</p>

      <h3>3.2 Prohibited Conduct</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site for any unlawful purpose</li>
        <li>Reproduce, distribute, or commercially exploit our content without express written permission</li>
        <li>Use automated means (bots, scrapers) to collect content from the Site without prior written consent</li>
        <li>Attempt to gain unauthorized access to any portion of the Site</li>
        <li>Transmit viruses, malware, or other harmful code</li>
        <li>Interfere with the proper functioning of the Site</li>
        <li>Impersonate any person or entity</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on the Site — including text, guides, graphics, and logos — is owned by SoLongSoulmate.com or its content suppliers and is protected by copyright and other intellectual property laws.
      </p>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes only. Official court forms, government publications, and public domain legal documents linked from our Site remain the property of their respective government owners.
      </p>

      <h2>5. Affiliate Relationships &amp; Advertising</h2>
      <p>
        Our Site contains affiliate links to third-party services. When you click these links and make a purchase, we may receive a commission. Affiliate relationships do not influence our editorial content or rankings, and are disclosed on all pages where they appear.
      </p>
      <p>
        We participate in the Google AdSense program and may display third-party advertisements. The presence of an advertisement does not constitute our endorsement of the advertised product or service.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        Divorce laws change frequently, filing fees are updated regularly, and court procedures vary by county. <strong>We cannot guarantee that all information on this Site is current, complete, or accurate.</strong> Always verify filing fees, forms, and procedural requirements directly with your local court.
      </p>
      <p className="uppercase text-xs font-semibold tracking-wide text-text-muted leading-relaxed">
        THE SITE AND ALL CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p className="uppercase text-xs font-semibold tracking-wide text-text-muted leading-relaxed">
        TO THE FULLEST EXTENT PERMITTED BY LAW, SOLONGSOULMATE.COM, ITS OWNERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE, INCLUDING DAMAGES FOR LOSS OF DATA, LOSS OF PROFITS, LEGAL FEES INCURRED IN CONNECTION WITH YOUR DIVORCE PROCEEDING, OR ANY OTHER LOSSES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED ONE HUNDRED DOLLARS ($100.00).
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless SoLongSoulmate.com, its owners, employees, and agents from and against any claims, liabilities, damages, costs, and expenses (including reasonable attorneys&apos; fees) arising from: (a) your use of the Site; (b) your violation of these Terms; (c) your violation of any applicable law or the rights of any third party.
      </p>

      <h2>9. Third-Party Links</h2>
      <p>
        The Site contains links to third-party websites including official court websites and commercial services. We do not control third-party sites and are not responsible for their content, privacy practices, or availability.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Your use of the Site is also governed by our <Link href="/privacy-policy" className="text-gold hover:text-gold-dark">Privacy Policy</Link>, which is incorporated into these Terms by reference.
      </p>

      <h2>11. Modifications</h2>
      <p>
        We reserve the right to modify or discontinue the Site at any time without notice, and to update these Terms at any time. Your continued use of the Site after any changes constitutes acceptance of the updated Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Texas, without regard to its conflict of law provisions. Any dispute shall be resolved exclusively in the state or federal courts located in Texas.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about these Terms of Service, please contact us at: <strong>legal@solongsoulmate.com</strong>
      </p>
    </LegalPageLayout>
  )
}
