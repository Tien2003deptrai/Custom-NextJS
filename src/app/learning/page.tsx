'use client'
import React, { startTransition, useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Heading from './ui/Heading'
import LessonList from './ui/LessonList'
import VideoList from './ui/VideoList'
import LiveList from './ui/LiveList'
import { TabKey } from './_section/types'
import { useDebounce } from '@/hooks/useDebounce'

const queryClient = new QueryClient()
const VALID_TABS: TabKey[] = ['lesson', 'video', 'live']

function PageInner() {
  const router = useRouter()
  const pathname = usePathname()
  const sp = useSearchParams()

  const tabParam = (sp.get('tab') ?? 'lesson') as TabKey
  const tab: TabKey = VALID_TABS.includes(tabParam) ? tabParam : 'lesson'

  const [searchKey, setSearchKey] = useState(sp.get('k') ?? '')
  const qDebounced = useDebounce(searchKey, 450)

  // normalize tab nếu sai, chỉ chạy 1 lần
  useEffect(() => {
    if (!VALID_TABS.includes(tabParam)) {
      const params = new URLSearchParams(Array.from(sp.entries()))
      params.set('tab', 'lesson')
      startTransition(() => router.replace(`${pathname}?${params.toString()}`))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setParams = useCallback(
    (patch: Record<string, string | null>) => {
      const params = new URLSearchParams(Array.from(sp.entries()))
      for (const [k, v] of Object.entries(patch)) {
        if (v === null) params.delete(k)
        else params.set(k, v)
      }
      startTransition(() => router.replace(`${pathname}?${params.toString()}`))
    },
    [router, pathname, sp]
  )

  const handleTab = useCallback((t: TabKey) => setParams({ tab: t }), [setParams])
  const handleSearch = useCallback(
    (value: string) => {
      setSearchKey(value)
      setParams({ k: value || null })
    },
    [setParams]
  )

  return (
    <div className="flex h-full flex-col">
      <Heading tab={tab} searchKey={qDebounced} onTab={handleTab} onSearch={handleSearch} />

      <div className="flex-1 overflow-y-auto bg-gray-50">
        {tab === 'lesson' && <LessonList searchKey={qDebounced} />}
        {tab === 'video' && <VideoList searchKey={qDebounced} />}
        {tab === 'live' && <LiveList searchKey={qDebounced} />}
      </div>
    </div>
  )
}

export default function LearningPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageInner />
    </QueryClientProvider>
  )
}
