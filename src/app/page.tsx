'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-2">
        <Link href="/use-disclosure" className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:text-blue-600">
          User Disclosure
        </Link>
        <Link href="/spinner-skeleton" className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:text-blue-600">
          Spinner Skeleton
        </Link>
      </div>
    </div>
  )
}
