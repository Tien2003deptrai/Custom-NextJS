'use client'
import { useLessons } from '../_section/queries'

export default function LessonList({ searchKey }: { searchKey: string }) {
  const { data, isLoading, isError, error, isFetching } = useLessons(searchKey)

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
        <div className="p-6 text-sm text-gray-500">Không có lesson nào.</div>
      ) : (
        <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
          {data.items.map((x) => (
            <div key={x.id} className="rounded-xl border border-gray-200 p-3 transition hover:shadow-sm">
              <div className="font-semibold">{x.title}</div>
              <div className="mt-1 text-sm text-gray-500">⏱️ {x.durationMin} phút</div>
              <div className="mt-1 text-xs text-gray-400">Cập nhật: {x.updatedAt}</div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
