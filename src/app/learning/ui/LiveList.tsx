'use client'
import { useLives } from '../_section/queries'

export default function LiveList({ searchKey }: { searchKey: string }) {
  const { data, isLoading, isError, error, isFetching } = useLives(searchKey)

  if (isLoading) {
    return (
      <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-xl border border-gray-200 p-3">
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-2/3 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    )
  }
  if (isError) return <div className="p-6 text-sm text-red-600">Lỗi: {(error as Error)?.message}</div>

  return (
    <>
      {isFetching && <div className="sticky top-[45px] z-10 bg-yellow-50 px-4 py-1 text-xs text-yellow-700">Đang cập nhật dữ liệu…</div>}
      {!data?.items.length ? (
        <div className="p-6 text-sm text-gray-500">Không có live session nào.</div>
      ) : (
        <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
          {data.items.map((l) => (
            <div key={l.id} className="rounded-xl border border-gray-200 p-3 transition hover:shadow-sm">
              <div className="font-semibold">{l.topic}</div>
              <div className="mt-1 text-sm text-gray-500">🗣️ {l.speaker}</div>
              <div className="mt-1 text-xs text-gray-400">⏰ {new Date(l.startAt).toLocaleString()}</div>
              <div className="mt-1 text-xs">⏱️ {l.durationMin} phút</div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
