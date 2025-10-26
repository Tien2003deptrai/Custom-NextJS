'use client'

import React, { ReactNode } from 'react'

const Skeleton = (layout: 'v' | 'h', n: number, cols = 3) => {
  const Bar = (h: string, w: string) => React.createElement('div', { className: `h-${h} w-${w} bg-gray-200 animate-pulse rounded` })

  const VCard = (i: number) =>
    React.createElement(
      'div',
      { key: i, className: 'overflow-hidden rounded-lg border bg-white shadow-sm' },
      Bar('48', 'full'),
      React.createElement(
        'div',
        { className: 'space-y-3 p-4' },
        Array.from({ length: 3 }).map((_, j) => Bar('4', '3/4'))
      )
    )

  const HCard = (i: number) =>
    React.createElement(
      'div',
      { key: i, className: 'flex overflow-hidden rounded-lg border bg-white shadow-sm' },
      Bar('32', '48'),
      React.createElement(
        'div',
        { className: 'flex-1 space-y-3 p-4' },
        Bar('6', '2/3'),
        Bar('3', '1/3'),
        Bar('3', 'full'),
        React.createElement(
          'div',
          { className: 'flex space-x-2' },
          Array.from({ length: 3 }).map((_, j) => Bar('6', '16'))
        )
      )
    )

  return React.createElement(
    'div',
    { className: `grid grid-cols-${cols} gap-4` },
    Array.from({ length: n }).map((_, i) => (layout === 'v' ? VCard(i) : HCard(i)))
  )
}

export const SmartWrapper = ({
  isLoading,
  error,
  retry,
  layout = 'v',
  count = 3,
  cols = 3,
  customSkeleton,
  children,
}: {
  isLoading: boolean
  error?: Error | null
  retry?: () => void
  layout?: 'v' | 'h'
  count?: number
  cols?: number
  customSkeleton?: ReactNode
  children: ReactNode
}) => {
  if (error)
    return React.createElement(
      'div',
      { className: 'rounded-lg border border-red-200 bg-red-50 p-4' },
      React.createElement('p', { className: 'text-red-600' }, `Error: ${error.message}`),
      retry && React.createElement('button', { onClick: retry, className: 'mt-2 rounded bg-red-600 px-3 py-1 text-white' }, 'Retry')
    )
  if (isLoading) return customSkeleton || Skeleton(layout, count, cols)
  return React.createElement(React.Fragment, null, children)
}
