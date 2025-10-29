'use client'
import { VideoItem } from '../types'
import React from 'react'

export default function Grid({ items }: { items: VideoItem[] }) {
  if (!items.length) return <div className="p-6 text-sm text-gray-500">Không có video nào phù hợp.</div>
  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((v) => (
        <div key={v.id} className="rounded-xl border border-gray-200 p-3 transition hover:shadow-md">
          <div className="font-semibold">{v.title}</div>
          <div className="mt-1 text-sm text-gray-500">
            👤 {v.author} • 👁️ {v.views} lượt xem
          </div>
          <div className="mt-1 text-xs text-gray-400">Ngày đăng: {v.createdAt}</div>
          <div className="mt-2 text-xs">Bình luận: {v.allow_comment ? '✅ Cho phép' : '❌ Tắt'}</div>
        </div>
      ))}
    </div>
  )
}
