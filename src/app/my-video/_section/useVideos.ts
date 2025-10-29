'use client'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchVideos } from './videoApi'
import { FilterState, TABS, TabKey } from './types'

function useDebounce<T>(value: T, delay = 450) {
  const [debounced, setDebounced] = (require('react') as typeof import('react')).useState(value)
  ;(require('react') as typeof import('react')).useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

export function useVideos(tab: TabKey, filter: FilterState) {
  const status = TABS.find((t) => t.key === tab)!.status
  const debouncedQ = useDebounce(filter.search_key, 450)

  const key = useMemo(() => ['videos', '/videos', `status=${status}`, `q=${debouncedQ}`, `sort=${filter.sort}`, `cmt=${filter.allow_comment}`], [status, debouncedQ, filter.sort, filter.allow_comment])

  return useQuery({
    queryKey: key,
    queryFn: ({ signal }) =>
      fetchVideos(
        {
          status,
          q: debouncedQ || undefined,
          sort: filter.sort || undefined,
          allow_comment: filter.allow_comment || undefined,
        },
        signal
      ),
    staleTime: 10_000,
    retry: 1,
  })
}
