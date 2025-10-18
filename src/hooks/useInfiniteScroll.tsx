import { useEffect, useRef, useState, type RefObject } from 'react'
import { useEffect, useRef, useState, type RefObject } from 'react';

type Opts = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  disabled?: boolean
  once?: boolean
}

export function useInfiniteScroll(
  onIntersect: () => void,
  { root = null, rootMargin = '0px 0px 320px 0px', threshold = 0, disabled = false, once = false }: Opts = {}
  { root = null, rootMargin = '0px 0px 320px 0px', threshold = 0, disabled = false, once = false }: Opts = {}
): { ref: RefObject<HTMLDivElement | null>; inView: boolean } {
  const ref = useRef<HTMLDivElement | null>(null)
  const cbRef = useRef(onIntersect)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    cbRef.current = onIntersect
  }, [onIntersect])
  useEffect(() => {
    cbRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (disabled || typeof window === 'undefined') return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;

    let stopped = false
    const io = new IntersectionObserver(
      ([entry]) => {
        const seen = entry.isIntersecting
        setInView(seen)
        if (seen && !stopped) {
          requestAnimationFrame(() => cbRef.current())
          if (once) {
            stopped = true
            io.unobserve(el)
          }
        }
      },
      { root, rootMargin, threshold }
    )
    let stopped = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        const seen = entry.isIntersecting;
        setInView(seen);
        if (seen && !stopped) {
          requestAnimationFrame(() => cbRef.current());
          if (once) {
            stopped = true;
            io.unobserve(el);
          }
        }
      },
      { root, rootMargin, threshold }
    );

    io.observe(el)
    return () => io.disconnect()
  }, [root, rootMargin, threshold, disabled, once])

  return { ref, inView }
}
