'use client'

import * as React from 'react'
import { useEffect } from 'react'
import { cn } from '@/lib/cn'
import { useEventListener } from '@/hooks/useEventListener'

export function Modal({ open, onClose, children, className }: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string }) {
export function Modal({ open, onClose, children, className }: { open: boolean; onClose: () => void; children: React.ReactNode; className?: string }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') onClose()
  })

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-black/40" />
      <div className={cn('absolute inset-x-0 top-12 mx-auto w-full max-w-lg rounded-2xl bg-white p-4 shadow-lg', className)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
