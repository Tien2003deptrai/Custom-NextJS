import { redirect } from 'next/navigation';
import { Message } from './message/page';

export default function DashboardPage() {
  return (
    // <div className='text-gray-800'>
    //   <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>
    //   <p className='text-lg text-gray-600'>
    //     Welcome to your dashboard! This is the main content area that takes up
    //     the remaining space next to the sidebar.
    //   </p>
    // </div>
    <>
      <Message />
    </>
  );
  // redirect('/dashboard/message');
}
