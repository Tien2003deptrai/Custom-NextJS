// components/layout/SidebarLeft.tsx
'use client'

import { BookOpenCheck, CircleDollarSign, LayoutGrid, Flame, Heart, Users, Radio, Store, Wallet, IdCard, BarChart2, Settings } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

const items = [
  { icon: BookOpenCheck, label: 'Câu hỏi Miễn Phí', href: '#' },
  { icon: CircleDollarSign, label: 'Câu hỏi trả phí', href: '#' },
  { icon: LayoutGrid, label: 'Tổng hợp', href: '#' },
  { icon: Flame, label: 'Video thịnh hành', href: '#' },
  { icon: Heart, label: 'Dành cho bạn', href: '#' },
  { icon: Users, label: 'Bạn bè', href: '#' },
  { icon: Radio, label: 'Livestream', href: '#', badge: 'Hot' },
  { icon: Store, label: 'Cửa hàng', href: '#' },
  { icon: Wallet, label: 'Ví cá nhân', href: '#' },
  { icon: IdCard, label: 'Hồ sơ', href: '#' },
]

export default function SidebarLeft() {
  return (
    <aside className="h-[calc(100dvh-64px)] w-[256px] bg-white">
      <div className="flex h-full flex-col">
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-1">
            {items.map(({ icon: Icon, label, href, badge }, i) => (
              <li key={i}>
                <Link href={href} className={clsx('group flex items-center gap-3 rounded-lg px-3 py-2 text-sm', 'hover:bg-neutral-50')}>
                  <Icon className="size-4 text-neutral-500 group-hover:text-neutral-700" />
                  <span className="flex-1">{label}</span>
                  {badge && <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-xs font-medium text-rose-600">{badge}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-4 h-px bg-neutral-200" />

          <ul className="space-y-1">
            <li>
              <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">
                <BarChart2 className="size-4 text-neutral-500 group-hover:text-neutral-700" />
                <span className="flex-1">Thống kê</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50">
                <Settings className="size-4 text-neutral-500 group-hover:text-neutral-700" />
                <span className="flex-1">Cài đặt</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
