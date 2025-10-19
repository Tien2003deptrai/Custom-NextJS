import Link from 'next/link'

export default function SidebarSlot() {
  return (
    <div className="h-full p-4">
      <div className="mb-6 text-lg font-semibold text-white">Sidebar</div>
      <div className="flex flex-col gap-3">
        <Link href="/dashboard" className="text-white transition-colors hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/product" className="text-white transition-colors hover:text-gray-300">
          Product
        </Link>
        <Link href="/category" className="text-white transition-colors hover:text-gray-300">
          Category
        </Link>
        <Link href="/dashboard/users" className="text-white transition-colors hover:text-gray-300">
          Users
        </Link>
        <Link href="/setting" className="text-white transition-colors hover:text-gray-300">
          Setting
        </Link>
      </div>
    </div>
  )
}
