'use client'
import { FilterState, TabKey, TABS } from '../types'
import React from 'react'

interface Props {
  tab: TabKey
  filter: FilterState
  onTab: (t: TabKey) => void
  onSearch: (v: string) => void
  onToggleSort: () => void
  onToggleCmt: () => void
}

export default function Heading({ tab, filter, onTab, onSearch, onToggleSort, onToggleCmt }: Props) {
  return (
    <div className="flex flex-col gap-4 border-b bg-white px-5 py-3">
      <div className="flex gap-2">
        {TABS.map((t) => {
          const active = tab === t.key
          return (
            <button key={t.key} onClick={() => onTab(t.key)} className={`rounded-lg px-3 py-2 text-sm ${active ? 'bg-[#9894ff] text-white' : 'bg-gray-100 text-gray-700'}`} title={t.status}>
              {t.label}
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          className="h-9 w-64 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#9894ff]"
          placeholder="Tìm kiếm video…"
          value={filter.search_key}
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="h-9 rounded-md bg-gray-100 px-3 text-sm hover:bg-gray-200" onClick={onToggleSort}>
          Sort: {filter.sort || 'none'}
        </button>
        <button className="h-9 rounded-md bg-gray-100 px-3 text-sm hover:bg-gray-200" onClick={onToggleCmt}>
          Comment: {filter.allow_comment}
        </button>
      </div>
    </div>
  )
}
