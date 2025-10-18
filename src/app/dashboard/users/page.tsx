// app/dashboard/users/page.tsx
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UsersPage() {
  const router = useRouter()
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  const handleUserClick = (userId: number) => {
    router.push(`/dashboard/users/${userId}`)
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Danh sách Users</h1>
      <div className="mb-4 rounded border border-yellow-400 bg-yellow-100 p-4">
        <p className="text-sm text-yellow-800">
          <strong>Test Intercepting Route:</strong> Click vào link bên dưới để test modal. Nếu intercepting route hoạt động, bạn sẽ thấy modal overlay thay vì navigate đến page mới.
        </p>
      </div>
      <div className="space-y-2">
        {users.map((u) => (
          <div key={u.id} className="flex items-center gap-4">
            <Link href={`/dashboard/users/${u.id}`} className="flex-1 rounded border bg-blue-50 p-3 transition-colors hover:bg-gray-50">
              {u.name} (Link - Test Modal)
            </Link>
            <button onClick={() => handleUserClick(u.id)} className="rounded border bg-green-50 p-3 transition-colors hover:bg-gray-50">
              {u.name} (Router - Test Modal)
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
