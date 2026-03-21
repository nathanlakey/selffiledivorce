import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Legal Disclaimer — SoLongSoulmate.com',
  description: 'SoLongSoulmate.com provides general legal information only, not legal advice. Read our full disclaimer before using this site.',
}

const SECTIONS = [
  {
    title: 'Not Legal Advice',
    urgent: false,
    content: `All content published on SoLongSoulmate.com — including state guides, checklists, FAQ sections, cost estimates, timeline information, and any other material — constitutes general legal information only. It is not legal advice.

Legal advice is advice given by a licensed attorney based on a thorough analysis of your specific facts, circumstances, and applicable law. General legal information describes the law in general terms and does not account for your individual situation.

Nothing on this site creates an attorney-client relationship between you and SoLongSoulmate.com or any individual associated with the site.`,
  },
  {
    title: 'No Guarantee of Accuracy or Currency',
    urgent: false,
    content: `Divorce laws change. Filing fees are updated by courts. Procedural requirements vary by county. New legislation takes effect. Court forms are revised.

While we make reasonable efforts to keep our content accurate and current, we cannot guarantee that every piece of information on this site is correct, complete, or up to date at the time you read it.

Before filing any divorce documents, you must verify current filing fees, forms, residency requirements, and any local rules directly with your local court clerk's office or your state's official court website.`,
  },
  {
    title: 'State and County Variation',
    urgent: false,
    content: `Divorce law in the United States is set primarily at the state level, but courts within states often have additional local rules, supplemental forms, and varying procedures. A guide written for "Texas divorce" may not reflect the specific local rules of the court in your county.

Always check with your specific court before filing.`,
  },
  {
    title: 'When You Need a Lawyer',
    urgent: false,
    content: `This site is designed for people whose divorce situations are relatively straightforward. You should consult a licensed family law attorney if:

• Your spouse has hired an attorney
• You are a victim of domestic violence or feel unsafe
• You and your spouse disagree on custody of minor children
• You have significant contested assets (business interests, large retirement accounts, real property disputes)
• Your spouse is hiding assets or you suspect financial misconduct
• You have a pension or military retirement requiring special division orders
• You have complex tax issues
• You have a prenuptial or postnuptial agreement
• You have significant debt disputes

Consulting an attorney does not mean full representation. Many attorneys offer limited-scope services — reviewing your documents or answering specific questions — for much less than full representation.`,
  },
  {
    title: 'No Guarantee of Outcome',
    urgent: false,
    content: `Using the information on this site, following our guides, or completing a DIY divorce does not guarantee any particular outcome in your legal proceeding. Courts have discretion. Judges can reject filings for procedural reasons. Circumstances change during the divorce process.

We are not responsible for any outcome in your divorce proceeding, whether or not you relied on information from this site.`,
  },
  {
    title: 'Affiliate Links and Advertising',
    urgent: false,
    content: `Some pages on this site contain affiliate links to third-party services, including online divorce services. When you click these links and make a purchase, we may earn a commission. These relationships are clearly disclosed on pages where they appear.

The presence of an advertisement or affiliate link does not constitute an endorsement of the advertised product or service. We are not responsible for the quality, accuracy, legality, or suitability of any third-party service.

Google AdSense displays advertising on this site. We do not control the content of these advertisements.`,
  },
  {
    title: '⚠ Emergency Situations',
    urgent: true,
    content: `If you are in immediate danger, call 911.

If you are experiencing domestic violence and need legal assistance, contact the National Domestic Violence Hotline at 1-800-799-7233 or text START to 88788.

If you face an imminent court deadline, do not rely on this site — contact a licensed attorney or your local legal aid organization immediately.`,
  },
  {
    title: 'Limitation of Liability',
    urgent: false,
    content: `To the fullest extent permitted by applicable law, SoLongSoulmate.com, its owners, employees, and contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or reliance on this site or its content, including but not limited to damages arising from errors or omissions in our content, procedural mistakes resulting from following our guides, or any outcome in your divorce proceeding.

Your use of this site is at your own risk.`,
  },
]

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      eyebrow="Important Notice"
      title="Legal Disclaimer"
      lastUpdated="March 20, 2026"
      accentColor="#c0392b"
    >
      {/* Top warning */}
      <div className="bg-[#c0392b] text-white px-6 py-4 rounded-sm mb-8 not-prose">
        <p className="font-body text-sm font-semibold leading-relaxed">
          ⚠ SoLongSoulmate.com provides general legal information — not legal advice. Nothing on this site creates an attorney-client relationship or substitutes for advice from a licensed attorney familiar with your specific situation.
        </p>
      </div>

      {/* TOC */}
      <div className="bg-white border border-border rounded-sm p-6 mb-8 not-prose">
        <p className="font-body text-[10px] font-bold tracking-[2.5px] uppercase text-text-light mb-3">Contents</p>
        <ol className="space-y-1">
          {SECTIONS.map((s, i) => (
            <li key={i}>
              <a href={`#disc-${i}`} className="font-body text-sm text-text-muted hover:text-gold transition-colors">
                {i + 1}. {s.title.replace('⚠ ', '')}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Sections */}
      {SECTIONS.map((s, i) => (
        <div
          key={i}
          id={`disc-${i}`}
          className={s.urgent ? 'bg-[#fff8e8] border border-[#e8d090] border-l-4 border-l-[#c0392b] rounded-r-sm px-6 py-5 my-6 not-prose' : ''}
        >
          <h2 className={s.urgent ? 'font-display text-xl font-bold mb-3 text-[#c0392b]' : ''}>{s.title}</h2>
          {s.content.split('\n\n').map((para, j) => (
            <p key={j} style={{ whiteSpace: 'pre-line' }}>{para}</p>
          ))}
        </div>
      ))}
    </LegalPageLayout>
  )
}
