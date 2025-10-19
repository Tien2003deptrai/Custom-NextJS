'use client'

import React, { useMemo } from 'react'
import { Info, Image as ImageIcon, Paperclip, Smile, Send, Camera, Mic } from 'lucide-react'
import { Image } from '@/components/primitives/Image'

type Sender = 'me' | 'them'
type Msg = { id: string; at: string; sender: Sender; type: 'text'; text: string } | { id: string; at: string; sender: Sender; type: 'image'; urls: string[] }

const FAKE: Msg[] = [
  {
    id: '1',
    at: '2025-02-10T09:20:00',
    sender: 'them',
    type: 'text',
    text: 'Hello! Jhon abraham',
  },
  {
    id: '2',
    at: '2025-02-10T14:35:00',
    sender: 'me',
    type: 'text',
    text: 'Hello! Nazrul. How are you',
  },
  {
    id: '3',
    at: '2025-02-10T14:36:00',
    sender: 'me',
    type: 'text',
    text: 'Have a great working week!',
  },
  {
    id: '4',
    at: '2025-02-10T14:36:40',
    sender: 'me',
    type: 'text',
    text: 'Hope you like it',
  },
  {
    id: '5',
    at: '2025-02-10T18:30:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },

  // Hôm qua
  {
    id: '6',
    at: '2025-02-11T09:10:00',
    sender: 'them',
    type: 'image',
    urls: ['https://i.pravatar.cc/100?img=12'],
  },
  {
    id: '7',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '8',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '9',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '10',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '11',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '12',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '13',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '14',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '15',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
  {
    id: '16',
    at: '2025-02-11T09:12:00',
    sender: 'them',
    type: 'text',
    text: 'You did your job well!',
  },
]

export default function MessagePage() {
  const groups = useMemo(() => groupMessages(FAKE), [])

  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      {/* Header */}
      <div className="flex h-16 items-center gap-3 border-b border-neutral-200 px-5">
        <div className="relative">
          <Image src="https://i.pravatar.cc/100?img=65" alt="Mai Thị Hồng" className="h-10 w-10 rounded-full object-cover" fit="cover" />
          {/* online dot */}
          <span className="absolute -right-0 -bottom-0 grid h-3 w-3 place-items-center rounded-full bg-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </div>
        <div>
          <div className="font-medium">Mai Thị Hồng</div>
          <div className="text-xs text-neutral-500">Đang hoạt động</div>
        </div>
        <div className="ml-auto">
          <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100">
            <Info className="h-5 w-5 text-neutral-600" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-5">
        {groups.map((g) => (
          <div key={g.key} className="space-y-2">
            {/* separator nếu có */}
            {g.separator && <div className="my-4 text-center text-xs text-neutral-400">{g.separator}</div>}

            {/* cụm tin nhắn */}
            <div className={g.sender === 'me' ? 'flex flex-col items-end gap-2' : 'flex flex-col items-start gap-2'}>
              {/* avatar trái khi là người kia */}
              {g.sender === 'them' && (
                <div className="flex items-start gap-2">
                  <Image src="https://i.pravatar.cc/100?img=65" alt="User avatar" className="mt-1 h-8 w-8 rounded-full object-cover" fit="cover" />
                  <div className="space-y-2">
                    {g.items.map((m) => (
                      <MessageBubble key={m.id} msg={m} align="left" />
                    ))}
                  </div>
                </div>
              )}

              {g.sender === 'me' && (
                <div className="space-y-2">
                  {g.items.map((m) => (
                    <MessageBubble key={m.id} msg={m} align="right" />
                  ))}
                </div>
              )}

              {/* time of group */}
              {g.items.length > 0 && <div className="text-[11px] text-neutral-400">{formatTime(g.items[g.items.length - 1].at)}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="flex h-[72px] items-center gap-3 px-4">
        <div className="flex-1">
          <div className="relative">
            <input placeholder="Nhắn tin…" className="h-11 w-full rounded-2xl border border-transparent bg-neutral-100 px-4 pr-28 outline-none focus:border-neutral-300" />
            <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1.5">
              <IconBtn>
                <Paperclip className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <ImageIcon className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <Camera className="h-4 w-4" />
              </IconBtn>
              <IconBtn>
                <Smile className="h-4 w-4" />
              </IconBtn>
              <button className="ml-1 flex h-9 items-center gap-1 rounded-xl bg-violet-600 px-3 text-sm text-white hover:opacity-95">
                <Send className="h-4 w-4" />
                Gửi
              </button>
            </div>
          </div>
        </div>
        <IconBtn className="lg:hidden">
          <Mic className="h-5 w-5" />
        </IconBtn>
      </div>
    </div>
  )
}

function MessageBubble({ msg, align }: { msg: Msg; align: 'left' | 'right' }) {
  const isRight = align === 'right'
  const base = 'max-w-[65vw] md:max-w-[520px] rounded-2xl px-3 py-2 text-sm shadow-sm'
  const palette = isRight ? 'bg-violet-600 text-white rounded-tr-md' : 'bg-neutral-100 text-neutral-800 rounded-tl-md'

  if (msg.type === 'text') {
    return <div className={`${base} ${palette}`}>{msg.text}</div>
  }

  return (
    <div className={`${isRight ? 'justify-end' : ''} grid grid-cols-2 gap-1 ${isRight ? '' : ''}`}>
      {msg.urls.map((u, i) => (
        <Image key={i} src={u} alt="Image" className="h-36 w-36 rounded-xl border border-neutral-200 object-cover" fit="cover" />
      ))}
    </div>
  )
}

function IconBtn({ children, className }: React.HTMLAttributes<HTMLButtonElement>) {
  return <button className={`grid h-9 w-9 cursor-pointer place-items-center rounded-full text-neutral-700 hover:bg-neutral-100 ${className ?? ''}`}>{children}</button>
}

function formatTime(iso: string) {
  const d = new Date(iso)
  const hh = d.getHours().toString().padStart(2, '0')
  const mm = d.getMinutes().toString().padStart(2, '0')
  return `${hh}:${mm}`
}

/** Gom tin nhắn theo người gửi + chèn separator “Hôm qua” theo ngày */
function groupMessages(list: Msg[]) {
  const out: {
    key: string
    sender: Sender
    items: Msg[]
    separator?: string
  }[] = []
  let cur: (typeof out)[number] | null = null
  let prevDate = ''

  list.forEach((m, idx) => {
    const d = new Date(m.at)
    const dateKey = d.toDateString()

    if (prevDate && dateKey !== prevDate) {
      // separator giữa các ngày (đơn giản: hôm qua)
      out.push({
        key: `sep-${idx}`,
        sender: 'them',
        items: [],
        separator: 'Hôm qua',
      })
      cur = null
    }
    prevDate = dateKey

    if (!cur || cur.sender !== m.sender || cur.separator) {
      cur = { key: `g-${idx}`, sender: m.sender, items: [m] }
      out.push(cur)
    } else {
      cur.items.push(m)
    }
  })

  return out
}
