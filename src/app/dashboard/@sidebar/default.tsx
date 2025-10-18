import Link from 'next/link';

export default function SidebarSlot() {
  return (
    <div className='h-full p-4'>
      <div className='text-white text-lg font-semibold mb-6'>Sidebar</div>
      <div className='flex flex-col gap-3'>
        <Link href='/dashboard' className='text-white hover:text-gray-300 transition-colors'>
          Dashboard
        </Link>
        <Link href='/product' className='text-white hover:text-gray-300 transition-colors'>
          Product
        </Link>
        <Link href='/category' className='text-white hover:text-gray-300 transition-colors'>
          Category
        </Link>
        <Link href='/dashboard/users' className='text-white hover:text-gray-300 transition-colors'>
          Users
        </Link>
        <Link href='/setting' className='text-white hover:text-gray-300 transition-colors'>
          Setting
        </Link>
      </div>
    </div>
  );
}
