export default function DashboardLayout({
  children,
  sidebar,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <div className='w-full h-16 bg-gray-500 flex items-center justify-center'>
        {header}
      </div>

      {/* Main content area */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='w-64 bg-black flex-shrink-0'>{sidebar}</div>

        {/* Main content */}
        <div className='flex-1 bg-gray-100 p-6'>{children}</div>
      </div>
    </div>
  );
}
