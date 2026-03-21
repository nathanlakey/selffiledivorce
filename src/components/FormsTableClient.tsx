'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { StateFormsEntry } from '@/lib/formsData'

interface FormsTableClientProps {
  data: StateFormsEntry[]
}

export function FormsTableClient({ data }: FormsTableClientProps) {
  const [search, setSearch] = useState('')

  const filtered = data.filter(s =>
    s.state.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="mb-4">
        <input
          className="font-body text-sm px-4 py-2.5 border-2 border-border rounded-sm bg-white outline-none focus:border-gold w-full max-w-sm transition-colors"
          placeholder="Search your state..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <p className="font-body text-xs text-text-light mb-4">
        Showing {filtered.length} of 50 states
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white border border-border min-w-[640px]">
          <thead className="bg-navy text-cream-dark">
            <tr>
              {['State', 'Official Form Source', 'Notes', 'Full Guide'].map(h => (
                <th key={h} className="font-body text-[10px] font-semibold tracking-[1.8px] uppercase text-left px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.slug} className="border-b border-border-light hover:bg-cream transition-colors">
                <td className="px-4 py-3 font-semibold text-navy whitespace-nowrap">{s.state}</td>
                <td className="px-4 py-3">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                  >
                    {s.court} →
                  </a>
                </td>
                <td className="px-4 py-3 font-body text-xs text-text-light italic max-w-[220px]">
                  {s.notes}
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/${s.slug}-divorce`}
                    className="font-body text-xs font-medium text-text-muted hover:text-gold transition-colors whitespace-nowrap"
                  >
                    {s.state} Guide →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="font-body text-sm text-text-light py-8 text-center">
          No states match &quot;{search}&quot;
        </p>
      )}
    </>
  )
}
