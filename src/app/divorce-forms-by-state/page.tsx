import type { Metadata } from 'next'
import Link from 'next/link'
import { US_STATES } from '@/lib/states'

export const metadata: Metadata = {
  title: 'Free Divorce Forms by State — Official Court Forms (2026)',
  description: 'Find the official free divorce forms for all 50 states. Direct links to each state\'s court self-help center. Updated March 2026.',
  keywords: ['divorce forms by state', 'free divorce forms', 'divorce paperwork', 'court divorce forms'],
}

const COURT_LINKS: Record<string, { name: string; url: string; note: string }> = {
  alabama: { name: 'Alabama Judicial System', url: 'https://www.alacourt.gov/selfhelp', note: 'Complaint for Divorce (CS-47)' },
  alaska: { name: 'Alaska Court System', url: 'https://courts.alaska.gov/shc/family/divorce.htm', note: 'Packet DR-100 series' },
  arizona: { name: 'AZ Self Service Center', url: 'https://selfservicecenter.azcourts.gov', note: 'Excellent guided system — generates forms online' },
  arkansas: { name: 'Arkansas Judiciary', url: 'https://courts.arkansas.gov/forms-and-publications/court-forms', note: 'General Decree of Divorce' },
  california: { name: 'CA Courts Self-Help', url: 'https://selfhelp.courts.ca.gov/divorce', note: 'FL-100 series; also need FL-140, FL-150' },
  colorado: { name: 'Colorado Judicial', url: 'https://www.coloradojudicial.gov/self-help/divorce', note: 'JDF-1000 series; guided interview available' },
  connecticut: { name: 'CT Judicial Branch', url: 'https://jud.ct.gov/selfservice/family/dissolveMarriage.htm', note: 'JD-FM-159 dissolution packet' },
  delaware: { name: 'Delaware Courts', url: 'https://courts.delaware.gov/family/divorce/', note: 'Petition for Divorce (Form DR-2)' },
  florida: { name: 'Florida Courts', url: 'https://www.flcourts.org/Resources-Services/Court-Improvement/Family-Courts/Family-Law-Self-Help-Information', note: '12.900 series; simplified dissolution available' },
  georgia: { name: 'Georgia Legal Aid', url: 'https://www.georgialegalaid.org/resource/divorce-forms', note: 'Petition for Divorce; varies by county' },
  hawaii: { name: 'Hawaii Judiciary', url: 'https://www.courts.state.hi.us/self-help/courts/family/divorce', note: '1F-P-862 series' },
  idaho: { name: 'Idaho Courts', url: 'https://isc.idaho.gov/pages/forms', note: 'CAO FL 1-1 through 1-3' },
  illinois: { name: 'Illinois Courts', url: 'https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/family-law', note: 'DISS-0101 series' },
  indiana: { name: 'Indiana Courts', url: 'https://www.in.gov/courts/selfservice/family/', note: 'Petition for Dissolution; Form 17319' },
  iowa: { name: 'Iowa Courts', url: 'https://www.iowacourts.gov/for-the-public/representing-yourself/dissolution-of-marriage/', note: 'Electronic divorce available for childless cases' },
  kansas: { name: 'Kansas Judicial Branch', url: 'https://www.kscourts.org/Public/Self-Help/Family/Divorce', note: 'Petition for Divorce (FA-100)' },
  kentucky: { name: 'Kentucky Courts (AOC)', url: 'https://courts.ky.gov/forms/Pages/Family-Law-Forms.aspx', note: 'AOC-238 Petition for Dissolution' },
  louisiana: { name: 'Louisiana Courts', url: 'https://www.louisianalegalnavigator.org/resource/divorce', note: 'Article 102 vs. 103 — different forms' },
  maine: { name: 'Pine Tree Legal', url: 'https://www.ptla.org/divorce-maine', note: 'FM-004 Complaint for Divorce' },
  maryland: { name: 'Maryland Courts', url: 'https://mdcourts.gov/legalhelp/family/divorce', note: 'CC-DR-020 Complaint for Absolute Divorce' },
  massachusetts: { name: 'MA Trial Court', url: 'https://www.mass.gov/divorce', note: 'CJD-400 Joint Petition (1A) or CJD-101 Complaint (1B)' },
  michigan: { name: 'Michigan Courts', url: 'https://courts.michigan.gov/self-help/center/family-division/pages/divorce.aspx', note: 'FOC 10, FOC 23, CC 334 packet' },
  minnesota: { name: 'Minnesota Courts', url: 'https://www.mncourts.gov/Help-Topics/Divorce.aspx', note: 'DIV101 series' },
  mississippi: { name: 'Mississippi Judiciary', url: 'https://courts.ms.gov/trialcourt/chancery/divorce.php', note: 'Chancery Court forms; both spouses sign for no-fault' },
  missouri: { name: 'Missouri Courts', url: 'https://www.courts.mo.gov/page.jsp?id=733', note: 'Petition for Dissolution; Form 14 for child support' },
  montana: { name: 'Montana Courts', url: 'https://courts.mt.gov/selfhelp/family', note: 'Petition for Dissolution of Marriage' },
  nebraska: { name: 'Nebraska Courts', url: 'https://supremecourt.nebraska.gov/self-help/family-law', note: 'DC 6:2.15 series' },
  nevada: { name: 'Nevada Courts', url: 'https://www.nevadajudiciary.us/index.php/selfhelp', note: 'Joint Petition (fastest) or Complaint for Divorce' },
  'new-hampshire': { name: 'NH Judicial Branch', url: 'https://www.courts.nh.gov/self-help/divorce', note: 'NHJB-2051-F Joint Petition' },
  'new-jersey': { name: 'NJ Courts', url: 'https://www.njcourts.gov/self-help/family/divorce', note: 'Complaint for Divorce (FM series); CIS required' },
  'new-mexico': { name: 'NM Courts', url: 'https://www.nmcourts.gov/self-help/divorce/', note: '4A-200 series' },
  'new-york': { name: 'NY Courts', url: 'https://www.nycourts.gov/courthelp/divorce/index.shtml', note: 'UD-1 through UD-11 packet; Supreme Court jurisdiction' },
  'north-carolina': { name: 'NC Courts', url: 'https://www.nccourts.gov/forms/divorce', note: 'Must separate 1 year before filing; AOC-CV-710' },
  'north-dakota': { name: 'ND Courts', url: 'https://www.ndcourts.gov/legal-self-help/divorce', note: '$80 filing fee; SFN series forms' },
  ohio: { name: 'Ohio Supreme Court', url: 'https://www.supremecourt.ohio.gov/JCS/domesticRel/forms/', note: 'Dissolution vs. Divorce — different processes' },
  oklahoma: { name: 'Oklahoma Courts', url: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=73994', note: '10-day wait (no children); Petition for Divorce' },
  oregon: { name: 'Oregon Judicial', url: 'https://www.courts.oregon.gov/forms/Pages/family-law.aspx', note: 'OJD form packets; co-petition available' },
  pennsylvania: { name: 'PA Courts', url: 'https://www.pacourts.us/forms/for-the-public/divorce-forms', note: 'Divorce Code § 3301; 90-day mutual consent period' },
  'rhode-island': { name: 'RI Judiciary', url: 'https://www.courts.ri.gov/PublicResources/forms/Family%20Court%20Forms', note: 'Family Court forms DR-1 et seq.' },
  'south-carolina': { name: 'SC Judicial Branch', url: 'https://www.sccourts.org/selfHelp/family/', note: '1-year separation before filing; SCCA 475.3' },
  'south-dakota': { name: 'SD Unified Judicial', url: 'https://ujs.sd.gov/Legal_Help/Divorce.aspx', note: 'No residency minimum; Summons (UJS-012)' },
  tennessee: { name: 'TN Courts', url: 'https://www.tncourts.gov/programs/court-improvement/family/forms', note: 'MDA required; PPP with minor children' },
  texas: { name: 'Texas Law Help', url: 'https://texaslawhelp.org/resource/divorce', note: '60-day wait; Original Petition for Divorce' },
  utah: { name: 'Utah Courts', url: 'https://www.utcourts.gov/howto/divorce/', note: 'MyPaperwork system — excellent guided experience' },
  vermont: { name: 'Vermont Judiciary', url: 'https://www.vermontjudiciary.org/family/divorce-or-dissolution', note: '100-400 Family Division forms' },
  virginia: { name: 'VA Supreme Court', url: 'https://www.vacourts.gov/courts/circuit/forms/', note: 'Bill of Complaint for Divorce; corroborating witness' },
  washington: { name: 'WA Courts', url: 'https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=13', note: 'No residency minimum; FL Divorce series' },
  'west-virginia': { name: 'WV Courts', url: 'https://www.courtswv.gov/public-resources/family-court/divorce.html', note: 'Family Court forms; SRP-1 series' },
  wisconsin: { name: 'Wisconsin Courts', url: 'https://www.wicourts.gov/formsindex/circuit/divorc.htm', note: 'FA-4100 series; 120-day wait' },
  wyoming: { name: 'Wyoming Courts', url: 'https://www.courts.state.wy.us/legal-assistants/self-help-forms/', note: 'Petition for Divorce; $75 filing fee' },
}

const TIPS = [
  { num: '1', tip: 'Always download forms directly from your official state court website. Never use a Google cached or third-party copy — forms change and outdated versions get rejected.' },
  { num: '2', tip: 'Read the instruction packet before filling out anything. Every state has one; courts create them specifically for self-represented filers.' },
  { num: '3', tip: 'Make 3 copies of everything before filing: one for you, one for your spouse, one for the court. Many courts require certified copies at an additional fee.' },
  { num: '4', tip: 'Check whether your county has local forms in addition to statewide forms. Some large counties (LA, Cook, Harris) have their own supplemental requirements.' },
  { num: '5', tip: 'If you have a fee waiver, attach it to the initial filing packet, not as a separate submission.' },
]

export default function DivorceFormsByStatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow">Free Official Forms · All 50 States</p>
          <h1 className="font-display text-4xl md:text-5xl font-black text-cream-dark leading-tight mb-5">
            Divorce Forms by State — <span className="text-gold">Free Court Forms</span>
          </h1>
          <p className="font-body text-cream-dark/70 text-lg max-w-2xl mx-auto">
            Direct links to the official court forms for all 50 states. Free from the source — no sign-up required.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Tips banner */}
        <section className="mb-12 bg-white border border-border rounded-sm p-7">
          <h2 className="font-display text-xl font-bold text-navy mb-4">5 Rules Before You Download Anything</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TIPS.map(t => (
              <div key={t.num} className="flex gap-3">
                <span className="font-display text-3xl font-black text-border leading-none flex-shrink-0">{t.num}</span>
                <p className="font-body text-sm text-text-muted leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Table */}
        <section>
          <h2 className="section-heading">Official Court Forms — All 50 States</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-border text-sm">
              <thead className="bg-navy text-cream-dark">
                <tr>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-5 py-3">State</th>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-5 py-3">Court / Self-Help Center</th>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-5 py-3">Key Form(s)</th>
                  <th className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-5 py-3">Full Guide</th>
                </tr>
              </thead>
              <tbody>
                {US_STATES.map((s, i) => {
                  const court = COURT_LINKS[s.slug]
                  return (
                    <tr key={s.slug} className={`border-b border-border-light hover:bg-cream transition-colors ${i % 2 === 0 ? '' : 'bg-[#fdfcfa]'}`}>
                      <td className="px-5 py-3 font-semibold text-navy">{s.name}</td>
                      <td className="px-5 py-3">
                        {court ? (
                          <a
                            href={court.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-navy hover:text-gold transition-colors underline underline-offset-2"
                          >
                            {court.name} ↗
                          </a>
                        ) : (
                          <span className="text-text-light italic">Search "{s.name} court self-help forms"</span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-[12px] text-text-muted italic">
                        {court?.note ?? '—'}
                      </td>
                      <td className="px-5 py-3">
                        <Link
                          href={`/${s.slug}-divorce/forms`}
                          className="font-body text-[11px] font-semibold text-gold hover:underline"
                        >
                          {s.name} Forms →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-navy py-14 px-6 text-center">
        <h2 className="font-display text-2xl font-black text-cream-dark mb-3">Want forms filled out for you?</h2>
        <p className="font-body text-cream-dark/65 mb-7 max-w-md mx-auto">Online divorce services generate all court-ready forms for your state for $149–$299. Compare the top options.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/best-online-divorce-services" className="btn-gold">Compare Online Services →</Link>
          <Link href="/do-i-need-a-lawyer" className="font-body text-sm font-semibold py-3 px-7 border-2 border-gold/50 text-cream-dark/80 rounded-sm hover:border-gold transition-all">Do I Need a Lawyer?</Link>
        </div>
      </section>
    </>
  )
}
