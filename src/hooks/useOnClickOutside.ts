import { useEffect } from 'react'

export function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, handler: (e: MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) return
      handler(e)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
