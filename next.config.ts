import type { NextConfig } from "next";

const subGuides = [
  'without-children',
  'with-children',
  'filing-fees',
  'forms',
  'timeline',
  'with-a-house',
  'default-divorce',
  'mistakes-to-avoid',
  'property-division',
  'checklist',
  'faq',
  'eligibility',
]

const stateSlugsFull = [
  'alabama','alaska','arizona','arkansas','california','colorado',
  'connecticut','delaware','florida','georgia','hawaii','idaho',
  'illinois','indiana','iowa','kansas','kentucky','louisiana',
  'maine','maryland','massachusetts','michigan','minnesota',
  'mississippi','missouri','montana','nebraska','nevada',
  'new-hampshire','new-jersey','new-mexico','new-york',
  'north-carolina','north-dakota','ohio','oklahoma','oregon',
  'pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington',
  'west-virginia','wisconsin','wyoming',
]

const redirectList: { source: string; destination: string; permanent: boolean }[] = []

// Pattern 1: nested /[state]-divorce/[guide] -> /[state]-divorce-[guide]
for (const state of stateSlugsFull) {
  for (const guide of subGuides) {
    redirectList.push({
      source: `/${state}-divorce/${guide}`,
      destination: `/${state}-divorce-${guide}`,
      permanent: true,
    })
  }
}

// Pattern 2: /states/[state] -> /[state]-divorce and /states/[state]/[guide] -> /[state]-divorce-[guide]
for (const state of stateSlugsFull) {
  redirectList.push({
    source: `/states/${state}`,
    destination: `/${state}-divorce`,
    permanent: true,
  })
  for (const guide of subGuides) {
    redirectList.push({
      source: `/states/${state}/${guide}`,
      destination: `/${state}-divorce-${guide}`,
      permanent: true,
    })
  }
}

// Pattern 3: space in state slug
redirectList.push({
  source: '/south carolina-divorce',
  destination: '/south-carolina-divorce',
  permanent: true,
})

const nextConfig: NextConfig = {
  async redirects() {
    return redirectList
  },
};

export default nextConfig;
