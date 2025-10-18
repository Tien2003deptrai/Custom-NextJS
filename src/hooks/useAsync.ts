import { useCallback, useState } from 'react'

export function useAsync<T extends unknown[], R>(fn: (...args: T) => Promise<R>) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const run = useCallback(
    async (...args: T) => {
      setLoading(true)
      setError(null)
      try {
        return await fn(...args)
      } catch (e) {
        setError(e as Error)
        throw e
      } finally {
        setLoading(false)
      }
    },
    [fn]
  )

  return { run, loading, error }
}
