'use client'

import React, { useMemo, useState } from 'react'
import { Button } from '@/components/primitives/Button'
import { Plus, Search, MoreHorizontal } from 'lucide-react'
import { Image } from '@/components/primitives/Image'
import { Tab } from '../_components/Tab'
import { cn } from '@/lib/cn'

type TabKey = 'newest' | 'oldest' | 'stranger'

type Chat = {
  id: string
  name: string
  avatar: string
  snippet: string
  time: string // "08:35"
  online?: boolean
  unread?: boolean
  type: TabKey
}

const FAKE_DATA: Chat[] = [
  {
    id: '1',
    name: 'Mai Thị Hồng',
    avatar: 'https://i.pravatar.cc/100?img=65',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: true,
    unread: false,
    type: 'newest',
  },
  {
    id: '2',
    name: 'Group Dev',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: true,
    unread: true,
    type: 'newest',
  },
  {
    id: '3',
    name: 'Nguyễn Văn Tiến',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: false,
    unread: true,
    type: 'newest',
  },
  {
    id: '4',
    name: 'Nhóm Toán nâng cao',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: true,
    unread: true,
    type: 'newest',
  },
  {
    id: '5',
    name: 'Nhóm Hóa học',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: false,
    unread: true,
    type: 'newest',
  },
  {
    id: '6',
    name: 'English Group',
    avatar: 'https://i.pravatar.cc/100?img=5',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: false,
    unread: true,
    type: 'newest',
  },
  {
    id: '7',
    name: 'Phạm Quang Hiếu',
    avatar: 'https://i.pravatar.cc/100?img=5',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: true,
    unread: true,
    type: 'newest',
  },
  {
    id: '8',
    name: 'Thùy Tiên',
    avatar: 'https://i.pravatar.cc/100?img=58',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: '08:35',
    online: false,
    unread: true,
    type: 'newest',
  },
  {
    id: '9',
    name: 'Thùy Tiên',
    avatar: 'https://i.pravatar.cc/100?img=58',
    snippet: 'Bạn: Cho em hỏi chi tiết bài toán của…',
    time: 'Hôm qua',
    unread: false,
    type: 'newest',
  },
  {
    id: '10',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  {
    id: '11',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  {
    id: '12',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  {
    id: '13',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  {
    id: '14',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  {
    id: '15',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'newest',
  },
  // cũ nhất
  {
    id: '16',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'oldest',
  },
  {
    id: '17',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'oldest',
  },
  // người lạ
  {
    id: '18',
    name: 'Số lạ 0938…',
    avatar: 'https://i.pravatar.cc/100?img=12',
    snippet: 'Bạn: Xin chào, cho hỏi lớp còn chỗ…',
    time: '07:12',
    unread: true,
    type: 'stranger',
  },
]

export default function SidebarLeft() {
  const [tab, setTab] = useState<TabKey>('newest')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const byTab = FAKE_DATA.filter((c) => c.type === tab)
    if (!q.trim()) return byTab
    const s = q.trim().toLowerCase()
    return byTab.filter((c) => c.name.toLowerCase().includes(s) || c.snippet.toLowerCase().includes(s))
  }, [tab, q])

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Header / Tabs / Search (không cuộn) */}
      <div className="shrink-0 px-4 py-4 pb-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold">Tin nhắn</h2>
          <Button size="sm" variant="secondary" className="h-8 w-8 rounded-lg p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Tab active={tab === 'newest'} onClick={() => setTab('newest')}>
            Mới nhất
          </Tab>
          <Tab active={tab === 'oldest'} onClick={() => setTab('oldest')}>
            Cũ nhất
          </Tab>
          <Tab active={tab === 'stranger'} onClick={() => setTab('stranger')}>
            Người lạ
          </Tab>
        </div>

        <div className="mt-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm kiếm"
              className="h-10 w-full rounded-lg border border-neutral-200 pr-3 pl-9 text-sm outline-none focus:border-neutral-400"
            />
          </div>
        </div>
      </div>

      {/* List (chỉ phần này cuộn) */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pr-1 pb-3">
        <ul className="space-y-2">
          {filtered.map((c, idx) => (
            <ChatRow key={c.id} chat={c} active={idx === 0 && tab === 'newest'} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function ChatRow({ chat, active }: { chat: Chat; active?: boolean }) {
  return (
    <li
      className={cn('group flex items-center gap-3 rounded-lg border', active ? 'border-neutral-200 bg-neutral-100' : 'border-transparent hover:bg-neutral-50', 'cursor-pointer px-3 py-2')}
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        <Image src={chat.avatar} alt={chat.name} className="h-10 w-10 rounded-full" />
        {chat.online && (
          <span className="absolute -right-0.5 -bottom-0.5 grid h-3 w-3 place-items-center rounded-full bg-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium">{chat.name}</p>
          <span className="ml-auto text-[11px] whitespace-nowrap text-neutral-500">{chat.time}</span>
        </div>
        <p className="mt-0.5 truncate text-[12px] text-neutral-500">{chat.snippet}</p>
      </div>

      <div className="ml-2 flex items-center gap-2">
        {chat.unread && <span aria-label="unread" className="h-2.5 w-2.5 rounded-full bg-violet-600" />}
        <button className="opacity-0 transition-opacity group-hover:opacity-100">
          <MoreHorizontal className="h-4 w-4 text-neutral-500" />
        </button>
      </div>
    </li>
  )
}
