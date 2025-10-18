'use client';

import { useRouter, useParams } from 'next/navigation';

export default function UserDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4'>
        <div className='mb-4 p-3 bg-green-100 border border-green-400 rounded'>
          <p className='text-sm text-green-800 font-bold'>✅ INTERCEPTING ROUTE HOẠT ĐỘNG!</p>
        </div>
        <h2 className='text-xl font-bold mb-4'>Chi tiết User {id}</h2>
        <p className='text-gray-600 mb-4'>Đây là modal hiển thị chi tiết user {id} thông qua intercepting route.</p>
        <p className='text-sm text-gray-500 mb-4'>URL hiện tại: /dashboard/users/{id}</p>
        <button onClick={() => router.back()} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
          Đóng Modal
        </button>
      </div>
    </div>
  );
}
