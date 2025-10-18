// app/dashboard/users/page.tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UsersPage() {
  const router = useRouter();
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  const handleUserClick = (userId: number) => {
    router.push(`/dashboard/users/${userId}`);
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Danh sách Users</h1>
      <div className='mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded'>
        <p className='text-sm text-yellow-800'>
          <strong>Test Intercepting Route:</strong> Click vào link bên dưới để test modal. Nếu intercepting route hoạt động, bạn sẽ thấy modal overlay thay vì navigate đến page mới.
        </p>
      </div>
      <div className='space-y-2'>
        {users.map(u => (
          <div key={u.id} className='flex gap-4 items-center'>
            <Link href={`/dashboard/users/${u.id}`} className='p-3 border rounded hover:bg-gray-50 transition-colors flex-1 bg-blue-50'>
              {u.name} (Link - Test Modal)
            </Link>
            <button onClick={() => handleUserClick(u.id)} className='p-3 border rounded hover:bg-gray-50 transition-colors bg-green-50'>
              {u.name} (Router - Test Modal)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
