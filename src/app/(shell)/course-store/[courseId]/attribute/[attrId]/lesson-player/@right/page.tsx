// components/layout/SidebarRight.tsx
'use client'

import { Ellipsis, Plus } from 'lucide-react'
import clsx from 'clsx'

type Lesson = {
  id: number
  title: string
  duration: string // "07:11"
  type?: 'Video' | 'Quiz' | 'Doc'
  done?: boolean
  progress?: number // 0..100
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Hướng dẫn nội dung cấu trúc',
    duration: '07:11',
    type: 'Video',
    progress: 20,
  },
  {
    id: 2,
    title: 'Tổng quan về giao diện người dùng',
    duration: '05:30',
    type: 'Video',
    progress: 70,
  },
  {
    id: 3,
    title: 'Kết nối với cơ sở dữ liệu',
    duration: '09:45',
    type: 'Video',
    done: false,
  },
  {
    id: 4,
    title: 'Xử lý sự kiện trong ứng dụng',
    duration: '06:20',
    type: 'Video',
    done: false,
  },
]

export default function SidebarRight() {
  return (
    <aside className="h-[calc(100dvh-64px)] w-[360px] bg-white shadow-lg">
      <div className="flex h-full flex-col">
        {/* Tabs */}
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex gap-6">
            <button className="relative pb-2 text-sm font-medium">
              Video
              <span className="absolute right-0 -bottom-px left-0 h-[2px] rounded bg-indigo-600" />
            </button>
            <button className="pb-2 text-sm text-neutral-500 hover:text-neutral-800">Bài tập</button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-2 mb-2 h-px bg-neutral-200" />

        {/* Lessons */}
        <div className="flex-1 overflow-y-auto px-3 pb-6">
          <ol className="space-y-2">
            {lessons.map((l) => (
              <li key={l.id} className="rounded-lg border bg-white p-3">
                <div className="flex items-start gap-3">
                  <div className={clsx('grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold', l.done ? 'bg-green-600 text-white' : 'bg-indigo-50 text-indigo-700')}>{l.id}</div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium">{l.title}</p>
                      <button className="grid size-8 place-items-center rounded-md text-neutral-500 hover:bg-neutral-50">
                        <Ellipsis className="size-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {l.type ?? 'Video'} • {l.duration} phút
                    </p>

                    {/* Progress */}
                    {typeof l.progress === 'number' && (
                      <div className="mt-2">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                          <div className="h-full rounded-full bg-indigo-600" style={{ width: `${l.progress}%` }} />
                        </div>
                        <div className="mt-1 text-right text-[10px] text-neutral-500">{l.progress}%</div>
                      </div>
                    )}
                  </div>

                  <button className="grid size-8 shrink-0 place-items-center rounded-md border text-neutral-600 hover:bg-neutral-50">
                    <Plus className="size-4" />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  )
}
