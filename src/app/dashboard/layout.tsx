export default function DashboardLayout({ children, sidebar, header }: { children: React.ReactNode; header: React.ReactNode; sidebar: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="flex h-16 w-full items-center justify-center bg-gray-500">{header}</div>

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 bg-black">{sidebar}</div>

        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-6">{children}</div>
      </div>
    </div>
  )
}
