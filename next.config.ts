import type { NextConfig } from "next";

const SUB_GUIDES = [
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
];

const nextConfig: NextConfig = {
  async redirects() {
    return SUB_GUIDES.map((guide) => ({
      source: '/:state-divorce/' + guide,
      destination: '/:state-divorce-' + guide,
      permanent: true,
    }));
  },
};

export default nextConfig;
