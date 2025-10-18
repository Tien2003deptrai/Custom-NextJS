'use client'

import { useRouter, useParams } from 'next/navigation'

export default function UserDetail() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 rounded border border-green-400 bg-green-100 p-3">
          <p className="text-sm font-bold text-green-800">✅ INTERCEPTING ROUTE HOẠT ĐỘNG!</p>
        </div>
        <h2 className="mb-4 text-xl font-bold">Chi tiết User {id}</h2>
        <p className="mb-4 text-gray-600">Đây là modal hiển thị chi tiết user {id} thông qua intercepting route.</p>
        <p className="mb-4 text-sm text-gray-500">URL hiện tại: /dashboard/users/{id}</p>
        <button onClick={() => router.back()} className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
          Đóng Modal
        </button>
      </div>
    </div>
  )
}
