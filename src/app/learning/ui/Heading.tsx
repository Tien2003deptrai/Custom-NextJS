'use client'
import { TabKey } from '../_section/types'
import React from 'react'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'lesson', label: 'Lessons' },
  { key: 'video', label: 'Videos' },
  { key: 'live', label: 'Live Sessions' },
]

export default function Heading({ tab, searchKey, onTab, onSearch }: { tab: TabKey; searchKey: string; onTab: (t: TabKey) => void; onSearch: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-4 border-b bg-white px-5 py-3">
      <div className="flex gap-2">
        {TABS.map((t) => {
          const active = tab === t.key
          return (
            <button key={t.key} onClick={() => onTab(t.key)} className={`rounded-lg px-3 py-2 text-sm ${active ? 'bg-[#9894ff] text-white' : 'bg-gray-100 text-gray-700'}`}>
              {t.label}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-2">
        <input
          className="h-9 w-72 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#9894ff]"
          placeholder="Tìm kiếm (tiêu đề/bài/live/speaker)…"
          value={searchKey}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
