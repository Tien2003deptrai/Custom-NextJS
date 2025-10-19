'use client'

import { Button } from '@/components/primitives/Button'
import { Bell, MessageSquare, ChevronDown, Search, Plus } from 'lucide-react'
import { Image } from '@/components/primitives/Image'

export default function HeaderMessage() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white shadow-sm">
      <div className="flex h-full items-center gap-4 px-4">
        <div className="flex min-w-[150px] items-center gap-2">
          <div className="leading-tight select-none">
            <div className="text-[18px] font-semibold text-violet-600">Click QA</div>
            <div className="-mt-0.5 text-[10px] tracking-wide text-neutral-500">MASTER OF Q&A</div>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-[680px]">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="h-11 w-full rounded-lg border border-transparent bg-neutral-100 pr-10 pl-4 text-sm outline-none placeholder:text-black focus:border-neutral-300 focus:bg-white"
            />
            <Search className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <IconButton aria-label="Thông báo">
            <Bell className="h-5 w-5" />
          </IconButton>

          <div className="relative">
            <IconButton aria-label="Tin nhắn">
              <MessageSquare className="h-5 w-5" />
            </IconButton>
            <span className="absolute -top-1 -right-1 h-5 min-w-[18px] rounded-full bg-red-500 px-1 text-center text-[10px] leading-5 text-white">9</span>
          </div>

          <Image src="https://i.pravatar.cc/100?img=15" alt="User avatar" className="h-8 w-8 rounded-full" fit="cover" />

          <ChevronDown className="h-4 w-4 text-neutral-600" />
        </div>
      </div>
    </header>
  )
}

function IconButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}) {
  return (
    <button className={'grid h-10 w-10 place-items-center rounded-full text-neutral-700 hover:bg-neutral-100 ' + (className ?? '')} {...rest}>
      {children}
    </button>
  )
}
