import { useEffect, useRef } from 'react'

export function useEventListener<K extends keyof WindowEventMap>(event: K, handler: (evt: WindowEventMap[K]) => void, target: Window | Document | HTMLElement = window) {
  const saved = useRef(handler)
  useEffect(() => {
    saved.current = handler
  }, [handler])
  useEffect(() => {
    const t: any = target
    if (!t?.addEventListener) return
    const wrap = (e: any) => saved.current(e)
    t.addEventListener(event, wrap)
    return () => t.removeEventListener(event, wrap)
  }, [event, target])
}
