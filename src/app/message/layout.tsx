export default function MessageLayout({
  header,
  sidebarLeft,
  children,
  sidebarRight,
}: {
  header: React.ReactNode
  sidebarLeft: React.ReactNode
  children: React.ReactNode
  sidebarRight: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {header}
      <div className="flex min-h-0 flex-1 overflow-hidden bg-white">
        <aside className="h-full min-h-0 w-full max-w-[360px] min-w-[300px] overflow-y-auto overscroll-contain shadow-lg">{sidebarLeft}</aside>

        <main
          className="flex h-full min-h-0 flex-1 flex-col overflow-hidden" // ✨
        >
          <div
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5" // ✨
          >
            {children}
          </div>
        </main>

        <aside className="h-full min-h-0 w-full max-w-[380px] min-w-[300px] overflow-y-auto overscroll-contain shadow-lg">{sidebarRight}</aside>
      </div>
    </div>
  )
}
