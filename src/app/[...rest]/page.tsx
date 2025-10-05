import Link from "next/link"
import React from "react"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://res.cloudinary.com/dw4yhyvak/image/upload/v1755054129/result-not-found-7621826-6166980_preview_rev_1_tabs7y.png"
          alt="404 Illustration"
          className="max-w-md w-full"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold text-blue-600">404</h1>
        <h2 className="text-xl font-semibold mt-2">OOps! Page Not Found.</h2>
        <p className="text-gray-500 mt-2">This page doesn’t exist or was removed! We suggest you back to Openedu</p>
        <Link
          href={"/"}
          className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
