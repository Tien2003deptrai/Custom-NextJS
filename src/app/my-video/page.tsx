'use client'
import React, { useCallback, startTransition, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Heading from './_section/ui/Heading'
import ListVideo from './_section/ui/ListVideo'
import { FilterState, TabKey } from './_section/types'

const VALID_TABS: TabKey[] = ['0', '1', '2', '3']
const queryClient = new QueryClient()

function PageInner() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tabParam = (searchParams.get('tab') ?? '0') as TabKey
  const tab: TabKey = VALID_TABS.includes(tabParam) ? tabParam : '0'

  // normalize tab nếu URL sai, chỉ chạy 1 lần
  useEffect(() => {
    if (!VALID_TABS.includes(tabParam)) {
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      params.set('tab', '0')
      startTransition(() => router.replace(`${pathname}?${params.toString()}`))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [filter, setFilter] = useState<FilterState>({
    search_key: searchParams.get('k') ?? '',
    role_viewer: 'all',
    sort: '',
    from_to_date: 'all',
    allow_comment: 'all',
  })

  const setParams = useCallback(
    (patch: Record<string, string | null>) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()))
      for (const [k, v] of Object.entries(patch)) {
        if (v === null) params.delete(k)
        else params.set(k, v)
      }
      startTransition(() => router.replace(`${pathname}?${params.toString()}`))
    },
    [router, pathname, searchParams]
  )

  const onTab = useCallback((t: TabKey) => setParams({ tab: t }), [setParams])
  const onSearch = useCallback(
    (v: string) => {
      setFilter((prev) => ({ ...prev, search_key: v }))
      setParams({ k: v || null })
    },
    [setParams]
  )
  const onToggleSort = useCallback(() => {
    setFilter((prev) => ({ ...prev, sort: prev.sort === 'latest' ? 'popular' : prev.sort === 'popular' ? '' : 'latest' }))
  }, [])
  const onToggleCmt = useCallback(() => {
    setFilter((prev) => ({ ...prev, allow_comment: prev.allow_comment === 'all' ? 'yes' : prev.allow_comment === 'yes' ? 'no' : 'all' }))
  }, [])

  if (!VALID_TABS.includes(tab)) return null

  return (
    <div className="flex h-full flex-col">
      <Heading tab={tab} filter={filter} onTab={onTab} onSearch={onSearch} onToggleSort={onToggleSort} onToggleCmt={onToggleCmt} />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <ListVideo tab={tab} filter={filter} />
      </div>
    </div>
  )
}

export default function MyVideoPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageInner />
    </QueryClientProvider>
  )
}
