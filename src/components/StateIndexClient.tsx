'use client'

import { useState } from 'react'
import Link from 'next/link'

interface StateEntry {
  name: string
  slug: string
}

interface GuideLinkEntry {
  label: string
  suffix: string
}

interface StateIndexClientProps {
  states: StateEntry[]
  regions: Record<string, string[]>
  guideLinks: GuideLinkEntry[]
}

function StateCard({
  name,
  slug,
  guideLinks,
}: {
  name: string
  slug: string
  guideLinks: GuideLinkEntry[]
}) {
  return (
    <div className="bg-white border border-border rounded-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 group">
      <Link
        href={`/${slug}-divorce`}
        className="block px-4 pt-4 pb-3"
      >
        <div className="font-display text-[15px] font-bold text-navy group-hover:text-gold transition-colors leading-snug">
          {name}
        </div>
        <div className="font-body text-[11px] text-text-light mt-0.5">
          Complete divorce guide
        </div>
      </Link>
      <div className="flex border-t border-border-light">
        {guideLinks.map((gl, i) => (
          <Link
            key={gl.suffix}
            href={`/${slug}-divorce${gl.suffix}`}
            className={`flex-1 font-body text-[11px] font-medium text-text-light py-2 text-center hover:bg-cream hover:text-gold transition-colors ${
              i < guideLinks.length - 1 ? 'border-r border-border-light' : ''
            }`}
          >
            {gl.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function StateIndexClient({
  states,
  regions,
  guideLinks,
}: StateIndexClientProps) {
  const [search, setSearch] = useState('')
  const [view, setView] = useState<'alpha' | 'region'>('alpha')

  const filteredStates = states.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const isSearching = search.length > 0

  return (
    <>
      {/* Controls */}
      <div className="flex gap-3 items-center flex-wrap mb-6">
        <input
          className="font-body text-sm px-4 py-2.5 border-2 border-border rounded-sm bg-white outline-none focus:border-gold w-64 transition-colors"
          placeholder="Search states..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {!isSearching && (
          <>
            <button
              onClick={() => setView('alpha')}
              className={`font-body text-[11px] font-semibold tracking-wide uppercase px-4 py-2.5 border rounded-sm transition-all ${
                view === 'alpha'
                  ? 'bg-navy text-cream-dark border-navy'
                  : 'bg-white text-text-muted border-border hover:border-gold hover:text-gold'
              }`}
            >
              A–Z
            </button>
            <button
              onClick={() => setView('region')}
              className={`font-body text-[11px] font-semibold tracking-wide uppercase px-4 py-2.5 border rounded-sm transition-all ${
                view === 'region'
                  ? 'bg-navy text-cream-dark border-navy'
                  : 'bg-white text-text-muted border-border hover:border-gold hover:text-gold'
              }`}
            >
              By Region
            </button>
          </>
        )}
        {isSearching && (
          <span className="font-body text-sm text-text-light">
            {filteredStates.length} state{filteredStates.length !== 1 ? 's' : ''} found
          </span>
        )}
      </div>

      {/* Search results or A–Z view */}
      {(isSearching || view === 'alpha') && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredStates.map(s => (
            <StateCard key={s.slug} name={s.name} slug={s.slug} guideLinks={guideLinks} />
          ))}
          {filteredStates.length === 0 && (
            <p className="font-body text-sm text-text-light col-span-4 py-8 text-center">
              No states match &quot;{search}&quot;
            </p>
          )}
        </div>
      )}

      {/* Region view */}
      {!isSearching && view === 'region' && (
        <div className="space-y-12">
          {Object.entries(regions).map(([region, stateNames]) => {
            const regionStates = stateNames
              .map(name => states.find(s => s.name === name))
              .filter((s): s is StateEntry => s !== undefined)

            return (
              <div key={region}>
                <h2 className="font-display text-2xl font-bold text-navy mb-5 pb-3 border-b-2 border-gold inline-block">
                  {region}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {regionStates.map(s => (
                    <StateCard key={s.slug} name={s.name} slug={s.slug} guideLinks={guideLinks} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
