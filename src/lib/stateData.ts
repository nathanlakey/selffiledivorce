export interface StateCostData {
  state: string
  filing: string
  diy: string
  contested: string
  wait: string
  property: 'Community' | 'Equitable'
  note: string
}

export interface StateTimelineData {
  state: string
  residency: string
  waitPeriod: string
  separation: string
  uncontested: string
  contested: string
  notes: string
}

export const COMMUNITY_PROPERTY_STATES = [
  'Arizona', 'California', 'Idaho', 'Louisiana', 'Nevada',
  'New Mexico', 'Texas', 'Washington', 'Wisconsin',
]

export const FAST_STATES = [
  'Georgia', 'Nevada', 'Oklahoma', 'Alaska', 'South Dakota',
  'North Dakota', 'Delaware', 'Hawaii', 'Montana', 'Maine',
  'New Hampshire', 'West Virginia', 'Wyoming', 'Idaho',
]

export const LONG_STATES = [
  'California', 'North Carolina', 'South Carolina',
  'Virginia', 'Louisiana', 'Massachusetts', 'Wisconsin',
]

export const SEPARATION_STATES = [
  'Arkansas', 'Louisiana', 'North Carolina', 'South Carolina', 'Virginia',
]

export const STATE_COST_DATA: StateCostData[] = [
  { state: 'Alabama', filing: '$150–$200', diy: '$200–$300', contested: '$10,000–$20,000', wait: '30 days', property: 'Equitable', note: 'Spouse-in-AL exception: file immediately if spouse is AL resident' },
  { state: 'Alaska', filing: '$250', diy: '$280–$380', contested: '$9,000–$18,000', wait: 'None', property: 'Equitable', note: 'Uncontested by affidavit — no hearing required' },
  { state: 'Arizona', filing: '$338–$364', diy: '$380–$480', contested: '$12,000–$25,000', wait: '60 days', property: 'Community', note: 'Self Service Center generates all forms free' },
  { state: 'Arkansas', filing: '$165', diy: '$200–$300', contested: '$9,000–$18,000', wait: '30 days', property: 'Equitable', note: 'Uniform $165 fee across all 75 counties' },
  { state: 'California', filing: '$435', diy: '$500–$700', contested: '$17,000–$100,000+', wait: '6 months', property: 'Community', note: 'Longest waiting period in the US' },
  { state: 'Colorado', filing: '$230', diy: '$270–$370', contested: '$11,000–$22,000', wait: '91 days', property: 'Equitable', note: 'Co-petition option; JDF forms free' },
  { state: 'Connecticut', filing: '$350', diy: '$420–$520', contested: '$13,000–$30,000', wait: '90 days*', property: 'Equitable', note: '90-day wait waivable when both parties agree' },
  { state: 'Delaware', filing: '$165', diy: '$210–$300', contested: '$10,000–$20,000', wait: 'None', property: 'Equitable', note: 'Dedicated Family Court; no wait' },
  { state: 'Florida', filing: '$395–$410', diy: '$450–$570', contested: '$12,000–$25,000', wait: '20 days', property: 'Equitable', note: 'Simplified dissolution for short marriages' },
  { state: 'Georgia', filing: '$215–$230', diy: '$270–$380', contested: '$14,700–$23,500', wait: 'None', property: 'Equitable', note: 'No waiting period; lowest fees among large states' },
  { state: 'Hawaii', filing: '$215–$265', diy: '$260–$360', contested: '$10,000–$20,000', wait: 'None', property: 'Equitable', note: 'No residency minimum since 2021 law change' },
  { state: 'Idaho', filing: '$207', diy: '$250–$360', contested: '$9,000–$18,000', wait: '20 days', property: 'Community', note: '6-week residency; community property' },
  { state: 'Illinois', filing: '$210–$337', diy: '$260–$420', contested: '$12,000–$25,000', wait: 'None', property: 'Equitable', note: 'No waiting period; allocation of parental responsibilities' },
  { state: 'Indiana', filing: '$131–$176', diy: '$160–$260', contested: '$10,000–$20,000', wait: '60 days', property: 'Equitable', note: 'Lowest fees of any large state; 50/50 presumption' },
  { state: 'Iowa', filing: '$185–$220', diy: '$230–$310', contested: '$10,000–$20,000', wait: '90 days', property: 'Equitable', note: 'Electronic divorce system for childless cases' },
  { state: 'Kansas', filing: '$195–$225', diy: '$240–$330', contested: '$10,000–$20,000', wait: '60 days*', property: 'Equitable', note: '60-day wait waivable by mutual agreement' },
  { state: 'Kentucky', filing: '$113–$148', diy: '$140–$230', contested: '$9,000–$18,000', wait: '60 days', property: 'Equitable', note: 'AOC forms; paper-only filing for self-reps' },
  { state: 'Louisiana', filing: '$200–$400', diy: '$250–$520', contested: '$13,000–$28,000', wait: '180/365 days', property: 'Community', note: 'Civil law state; Article 102 vs. 103 paths' },
  { state: 'Maine', filing: '$120', diy: '$160–$240', contested: '$8,000–$18,000', wait: 'None', property: 'Equitable', note: 'Very low fees; Pine Tree Legal resources' },
  { state: 'Maryland', filing: '$165', diy: '$210–$300', contested: '$11,000–$22,000', wait: 'None', property: 'Equitable', note: '2023 reform: mutual consent requires no separation' },
  { state: 'Massachusetts', filing: '$200–$220', diy: '$240–$320', contested: '$13,000–$30,000', wait: '90–120 days nisi', property: 'Equitable', note: 'Unique nisi period; courts can reach all property' },
  { state: 'Michigan', filing: '$175–$250', diy: '$220–$340', contested: '$11,000–$22,000', wait: '60/180 days', property: 'Equitable', note: '180-day wait with minor children' },
  { state: 'Minnesota', filing: '$360–$400', diy: '$410–$510', contested: '$12,000–$25,000', wait: 'None', property: 'Equitable', note: 'No waiting period; higher filing fees' },
  { state: 'Mississippi', filing: '$52–$100', diy: '$90–$180', contested: '$8,000–$18,000', wait: '60 days', property: 'Equitable', note: 'Lowest fees in the US; Chancery Court' },
  { state: 'Missouri', filing: '$100–$163', diy: '$140–$250', contested: '$9,000–$18,000', wait: '30 days', property: 'Equitable', note: 'Short 30-day wait; Form 14 for child support' },
  { state: 'Montana', filing: '$200', diy: '$240–$330', contested: '$9,000–$18,000', wait: 'None', property: 'Equitable', note: '90-day residency; no waiting period' },
  { state: 'Nebraska', filing: '$158', diy: '$200–$290', contested: '$10,000–$20,000', wait: '60 days', property: 'Equitable', note: '1-year residency; 60-day wait from service' },
  { state: 'Nevada', filing: '$284–$320', diy: '$320–$420', contested: '$11,000–$22,000', wait: 'None', property: 'Community', note: 'Fastest state: 6-week residency, no waiting period' },
  { state: 'New Hampshire', filing: '$260', diy: '$300–$400', contested: '$10,000–$20,000', wait: 'None', property: 'Equitable', note: 'Joint petition; no residency minimum; no wait' },
  { state: 'New Jersey', filing: '$300–$325', diy: '$360–$480', contested: '$12,500–$50,000+', wait: 'None', property: 'Equitable', note: '1-year residency; CIS required' },
  { state: 'New Mexico', filing: '$135–$155', diy: '$175–$270', contested: '$10,000–$20,000', wait: 'None', property: 'Community', note: 'Community property; no waiting period' },
  { state: 'New York', filing: '$335', diy: '$390–$500', contested: '$16,000–$50,000+', wait: 'None', property: 'Equitable', note: 'Supreme Court is the trial court; UD forms' },
  { state: 'North Carolina', filing: '$225', diy: '$280–$380', contested: '$12,000–$25,000', wait: '1-year separation', property: 'Equitable', note: '1-year separation required; divorce \u2260 property division' },
  { state: 'North Dakota', filing: '$80', diy: '$120–$200', contested: '$8,000–$16,000', wait: 'None', property: 'Equitable', note: '$80 filing fee \u2014 lowest in the US' },
  { state: 'Ohio', filing: '$150–$475', diy: '$200–$570', contested: '$11,000–$22,000', wait: '30–90 days', property: 'Equitable', note: 'Unique dissolution vs. divorce distinction' },
  { state: 'Oklahoma', filing: '$183–$210', diy: '$220–$320', contested: '$10,000–$20,000', wait: '10/90 days', property: 'Equitable', note: '10-day wait (no children) \u2014 one of fastest states' },
  { state: 'Oregon', filing: '$287–$301', diy: '$330–$430', contested: '$11,000–$22,000', wait: 'None', property: 'Equitable', note: 'OJD form packets; co-petition; no wait' },
  { state: 'Pennsylvania', filing: '$250–$350', diy: '$300–$440', contested: '$12,000–$25,000', wait: '90 days', property: 'Equitable', note: 'Property division is a separate claim from divorce' },
  { state: 'Rhode Island', filing: '$160', diy: '$200–$300', contested: '$9,000–$18,000', wait: 'None', property: 'Equitable', note: 'Family Court; 6-month if married in RI' },
  { state: 'South Carolina', filing: '$150', diy: '$190–$280', contested: '$10,000–$22,000', wait: '1-year separation', property: 'Equitable', note: '1-year separation; fault affects property division' },
  { state: 'South Dakota', filing: '$95', diy: '$130–$220', contested: '$8,000–$16,000', wait: 'None', property: 'Equitable', note: 'No residency minimum; very low fees' },
  { state: 'Tennessee', filing: '$184–$300', diy: '$230–$400', contested: '$11,000–$22,000', wait: '60/90 days', property: 'Equitable', note: 'MDA required; PPP required with children' },
  { state: 'Texas', filing: '$250–$400', diy: '$310–$500', contested: '$15,000–$30,000', wait: '60 days', property: 'Community', note: 'Community property; 60-day wait from filing' },
  { state: 'Utah', filing: '$325', diy: '$365–$470', contested: '$11,000–$22,000', wait: '30 days*', property: 'Equitable', note: 'MyPaperwork system; 30-day wait waivable' },
  { state: 'Vermont', filing: '$100', diy: '$140–$230', contested: '$9,000–$18,000', wait: 'None', property: 'Equitable', note: 'Very low fees; 6 months required before decree' },
  { state: 'Virginia', filing: '$100–$200', diy: '$150–$300', contested: '$12,000–$25,000', wait: '6mo/1yr separation', property: 'Equitable', note: 'Mandatory separation; corroborating witness' },
  { state: 'Washington', filing: '$280–$314', diy: '$330–$430', contested: '$11,000–$12,000', wait: '90 days', property: 'Community', note: 'No residency minimum; co-petition option' },
  { state: 'West Virginia', filing: '$135', diy: '$175–$270', contested: '$9,000–$18,000', wait: '20 days', property: 'Equitable', note: 'Family Court; married-in-WV exception' },
  { state: 'Wisconsin', filing: '$184–$235', diy: '$230–$340', contested: '$11,000–$22,000', wait: '120 days', property: 'Community', note: 'Community property; physical placement terminology' },
  { state: 'Wyoming', filing: '$75–$100', diy: '$115–$210', contested: '$8,000–$16,000', wait: '20 days', property: 'Equitable', note: 'Very low fees; short residency (60 days)' },
]

export const STATE_TIMELINE_DATA: StateTimelineData[] = [
  { state: 'Alabama', residency: '6 months*', waitPeriod: '30 days', separation: 'None', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: 'Spouse-in-AL exception: file immediately if spouse is AL resident' },
  { state: 'Alaska', residency: 'Current domicile', waitPeriod: 'None', separation: 'None', uncontested: '1\u20133 months', contested: '6\u201318 months', notes: 'Uncontested by affidavit \u2014 no hearing required' },
  { state: 'Arizona', residency: '90 days', waitPeriod: '60 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '60-day period cannot be waived' },
  { state: 'Arkansas', residency: '60 days (file); 3 months (decree)', waitPeriod: '30 days', separation: '18 months (no-fault)', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: 'General indignities ground used in most DIY cases' },
  { state: 'California', residency: '6 months state; 3 months county', waitPeriod: '6 months', separation: 'None', uncontested: '6\u20138 months', contested: '12\u201324+ months', notes: 'Longest mandatory wait in the US \u2014 cannot be waived' },
  { state: 'Colorado', residency: '91 days', waitPeriod: '91 days', separation: 'None', uncontested: '4\u20136 months', contested: '9\u201318 months', notes: 'Initial Status Conference scheduled automatically' },
  { state: 'Connecticut', residency: '12 months', waitPeriod: '90 days*', separation: 'None', uncontested: '3\u20136 months', contested: '9\u201324 months', notes: '90-day wait waivable when both parties agree' },
  { state: 'Delaware', residency: '6 months', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Dedicated Family Court; no waiting period' },
  { state: 'Florida', residency: '6 months', waitPeriod: '20 days*', separation: 'None', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: '20-day wait waivable by agreement in MSA' },
  { state: 'Georgia', residency: '6 months', waitPeriod: 'None', separation: 'None', uncontested: '1\u20133 months', contested: '9\u201318 months', notes: 'No waiting period \u2014 one of the fastest states' },
  { state: 'Hawaii', residency: 'Current domicile', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: '2021 law eliminated 6-month residency requirement' },
  { state: 'Idaho', residency: '6 weeks', waitPeriod: '20 days', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: '6-week residency; community property state' },
  { state: 'Illinois', residency: '90 days', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: 'No waiting period; 6-month separation creates irrebuttable presumption' },
  { state: 'Indiana', residency: '6 months state; 3 months county', waitPeriod: '60 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '60-day clock starts from filing date, not service' },
  { state: 'Iowa', residency: '1 year*', waitPeriod: '90 days', separation: 'None', uncontested: '4\u20137 months', contested: '9\u201324 months', notes: 'Spouse-in-IA exception; electronic divorce for childless cases' },
  { state: 'Kansas', residency: '60 days', waitPeriod: '60 days*', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '60-day wait can be waived by mutual agreement' },
  { state: 'Kentucky', residency: '180 days', waitPeriod: '60 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '60-day separation required before final decree; AOC forms' },
  { state: 'Louisiana', residency: '6 months domicile', waitPeriod: '180/365 days', separation: '180 or 365 days', uncontested: '7\u201318 months', contested: '12\u201336 months', notes: 'Article 102 vs. 103 paths; community property terminates at Art. 102 filing' },
  { state: 'Maine', residency: 'Current resident', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Very low fees; Pine Tree Legal resources' },
  { state: 'Maryland', residency: 'Current resident*', waitPeriod: 'None', separation: 'None (mutual consent) or 6 months', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: '2023 reform: mutual consent requires no separation' },
  { state: 'Massachusetts', residency: '1 year*', waitPeriod: '90\u2013120 days nisi', separation: 'None', uncontested: '5\u20138 months', contested: '12\u201324 months', notes: 'Unique nisi period: still legally married 90\u2013120 days after judge approves' },
  { state: 'Michigan', residency: '180 days state; 10 days county', waitPeriod: '60/180 days', separation: 'None', uncontested: '3\u201310 months', contested: '12\u201324 months', notes: 'Wait period doubles with minor children' },
  { state: 'Minnesota', residency: '180 days', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: 'No waiting period; higher filing fees (~$400)' },
  { state: 'Mississippi', residency: '6 months', waitPeriod: '60 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: 'Chancery Court; both spouses must sign for no-fault' },
  { state: 'Missouri', residency: '90 days', waitPeriod: '30 days', separation: 'None', uncontested: '2\u20134 months', contested: '9\u201318 months', notes: 'One of the shortest waits; Form 14 mandatory for child support' },
  { state: 'Montana', residency: '90 days', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'No waiting period; no-fault only' },
  { state: 'Nebraska', residency: '1 year', waitPeriod: '60 days', separation: 'None', uncontested: '4\u20137 months', contested: '9\u201318 months', notes: '60-day clock starts from service (not filing)' },
  { state: 'Nevada', residency: '6 weeks', waitPeriod: 'None', separation: 'None', uncontested: '1\u20133 months', contested: '6\u201318 months', notes: 'Fastest state: 6-week residency + no waiting period' },
  { state: 'New Hampshire', residency: 'Current resident', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Joint petition available; no waiting period' },
  { state: 'New Jersey', residency: '1 year', waitPeriod: 'None', separation: 'None', uncontested: '3\u20136 months', contested: '9\u201324 months', notes: 'Case Management Conference scheduled automatically' },
  { state: 'New Mexico', residency: '6 months', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Community property; no waiting period' },
  { state: 'New York', residency: '2 years*', waitPeriod: 'None', separation: 'None', uncontested: '3\u20136 months', contested: '9\u201318 months', notes: 'Supreme Court is the trial court; 5 residency pathways' },
  { state: 'North Carolina', residency: '6 months', waitPeriod: 'None (1-year pre-filing separation)', separation: '1 year (required before filing)', uncontested: '13\u201318 months total', contested: '18\u201336 months', notes: 'Must live apart 1 full year before filing' },
  { state: 'North Dakota', residency: '6 months', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: '$80 filing fee \u2014 lowest in the US; no waiting period' },
  { state: 'Ohio', residency: '6 months state; 90 days county', waitPeriod: '30\u201390 days', separation: 'None', uncontested: '3\u20136 months', contested: '9\u201324 months', notes: 'Unique dissolution vs. divorce distinction' },
  { state: 'Oklahoma', residency: '6 months', waitPeriod: '10/90 days', separation: 'None', uncontested: '1\u20135 months', contested: '9\u201318 months', notes: '10-day wait (no children) \u2014 one of fastest in US' },
  { state: 'Oregon', residency: '6 months*', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Oregon-married exception; OJD form packets' },
  { state: 'Pennsylvania', residency: '6 months', waitPeriod: '90 days (mutual consent)', separation: 'None', uncontested: '4\u20137 months', contested: '12\u201324 months', notes: '90-day mutual consent period cannot be shortened' },
  { state: 'Rhode Island', residency: '1 year*', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: '6-month if married in RI; Family Court' },
  { state: 'South Carolina', residency: '3 months* or 1 year', waitPeriod: 'None (1-year separation)', separation: '1 year (required for no-fault)', uncontested: '13\u201318 months total', contested: '18\u201336 months', notes: 'Fault grounds bypass separation requirement' },
  { state: 'South Dakota', residency: 'Current domicile', waitPeriod: 'None', separation: 'None', uncontested: '1\u20133 months', contested: '6\u201318 months', notes: 'No residency minimum; no waiting period; very low fees' },
  { state: 'Tennessee', residency: '6 months', waitPeriod: '60/90 days', separation: 'None', uncontested: '3\u20137 months', contested: '9\u201324 months', notes: 'MDA required; PPP required with children' },
  { state: 'Texas', residency: '6 months state; 90 days county', waitPeriod: '60 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '60-day clock starts at filing; DV exception available' },
  { state: 'Utah', residency: '90 days (county)', waitPeriod: '30 days*', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: '30-day wait waivable for extraordinary circumstances' },
  { state: 'Vermont', residency: '6 months (before decree)', waitPeriod: 'None', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: '6-month requirement applies to decree, not filing' },
  { state: 'Virginia', residency: '6 months', waitPeriod: 'None (6mo/1yr separation)', separation: '6 months (no children + PSA) or 1 year', uncontested: '8\u201314 months total', contested: '14\u201336 months', notes: 'Corroborating witness required; separation is the main driver' },
  { state: 'Washington', residency: 'Current resident', waitPeriod: '90 days', separation: 'None', uncontested: '3\u20135 months', contested: '9\u201318 months', notes: 'No residency minimum; co-petition recommended' },
  { state: 'West Virginia', residency: 'Current resident*', waitPeriod: '20 days', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Family Court; married-in-WV exception; very short wait' },
  { state: 'Wisconsin', residency: '6 months state; 30 days county', waitPeriod: '120 days', separation: 'None', uncontested: '5\u20137 months', contested: '12\u201324 months', notes: '120-day wait rarely waivable; community property' },
  { state: 'Wyoming', residency: '60 days', waitPeriod: '20 days', separation: 'None', uncontested: '2\u20134 months', contested: '6\u201318 months', notes: 'Very low fees; short residency and wait' },
]
