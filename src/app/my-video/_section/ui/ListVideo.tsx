'use client'
import { useVideos } from '../useVideos'
import { FilterState, TabKey } from '../types'
import Grid from './Grid'
import React from 'react'

export default function ListVideo({ tab, filter }: { tab: TabKey; filter: FilterState }) {
  const { data, isLoading, isError, error, isFetching } = useVideos(tab, filter)

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

  if (isError) {
    return <div className="p-6 text-sm text-red-600">Lỗi tải dữ liệu: {(error as Error)?.message}</div>
  }

  return (
    <>
      {isFetching && <div className="sticky top-[45px] z-10 bg-yellow-50 px-4 py-1 text-xs text-yellow-700">Đang cập nhật dữ liệu…</div>}
      <Grid items={data?.items ?? []} />
    </>
  )
}
