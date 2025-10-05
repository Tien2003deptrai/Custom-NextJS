'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/use-disclosure'
          className='rounded-md px-4 py-2 text-blue-500 hover:text-blue-600 border border-blue-500'
        >
          User Disclosure
        </Link>
        <Link
          href='/spinner-skeleton'
          className='rounded-md px-4 py-2 text-blue-500 hover:text-blue-600 border border-blue-500'
        >
          Spinner Skeleton
        </Link>
      </div>
    </div>
  );
}
