import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type StateGuideType =
  | 'main'
  | 'without-children'
  | 'with-children'
  | 'filing-fees'
  | 'forms'
  | 'timeline'
  | 'with-a-house'
  | 'default-divorce'
  | 'mistakes-to-avoid'
  | 'property-division'
  | 'checklist'
  | 'faq'
  | 'eligibility'

export interface StateFrontmatter {
  title: string
  description: string
  state: string
  residency?: string
  waitPeriod?: string
  filingFee?: string
  propertyType?: string
  court?: string
  lastUpdated?: string
}

export function getStateContent(stateSlug: string, guideType: StateGuideType) {
  const filePath = path.join(
    process.cwd(),
    'src/content/states',
    stateSlug,
    `${guideType}.md`
  )

  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)
    return {
      frontmatter: data as StateFrontmatter,
      content,
    }
  } catch {
    return null
  }
}

export function stateContentExists(stateSlug: string, guideType: StateGuideType) {
  const filePath = path.join(
    process.cwd(),
    'src/content/states',
    stateSlug,
    `${guideType}.md`
  )
  return fs.existsSync(filePath)
}
