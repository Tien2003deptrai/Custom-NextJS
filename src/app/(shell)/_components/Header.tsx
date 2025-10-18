// components/layout/Header.tsx
'use client'

import { Bell, ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 bg-white/80 shadow-lg backdrop-blur">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center gap-4 px-4">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="relative h-8 w-8 rounded-full bg-indigo-600">
            {/* thay bằng <Image src="/logo.svg" .../> nếu có */}
            <span className="absolute inset-0 grid place-items-center font-bold text-white">C</span>
          </div>
          <span className="font-semibold">Click QA</span>
        </div>

        {/* Search */}
        <div className="ml-4 flex-1">
          <label className="relative block">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" />
            <input className="w-full rounded-lg border bg-neutral-50 py-2 pr-3 pl-9 text-sm outline-none focus:border-neutral-400" placeholder="Tìm kiếm khóa học, bài học..." />
          </label>
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-3">
          <button className="relative grid size-9 place-items-center rounded-full border hover:bg-neutral-50">
            <Bell className="size-4" />
            <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-rose-500 text-[10px] text-white">3</span>
          </button>

          <button className="flex items-center gap-2 rounded-full border px-2 py-1 hover:bg-neutral-50">
            <div className="relative size-8 overflow-hidden rounded-full bg-neutral-200">
              <Image alt="avatar" src="https://i.pravatar.cc/80" fill sizes="32px" className="object-cover" />
            </div>
            <span className="hidden text-sm font-medium sm:inline">Bạn</span>
            <ChevronDown className="size-4 text-neutral-500" />
          </button>
        </nav>
      </div>
    </header>
  )
}
