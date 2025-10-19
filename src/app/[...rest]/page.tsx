import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 md:flex-row">
      {/* Left Image */}
      <div className="flex flex-1 justify-center">
        <img src="https://res.cloudinary.com/dw4yhyvak/image/upload/v1755054129/result-not-found-7621826-6166980_preview_rev_1_tabs7y.png" alt="404 Illustration" className="w-full max-w-md" />
      </div>

      {/* Right Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold text-blue-600">404</h1>
        <h2 className="mt-2 text-xl font-semibold">OOps! Page Not Found.</h2>
        <p className="mt-2 text-gray-500">This page doesn’t exist or was removed! We suggest you back to Openedu</p>
        <Link href={'/'} className="mt-4 inline-block rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
