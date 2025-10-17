export default function MessageLayout({
  header,
  sidebarLeft,
  children,
  sidebarRight,
}: {
  header: React.ReactNode;
  sidebarLeft: React.ReactNode;
  children: React.ReactNode;
  sidebarRight: React.ReactNode;
}) {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      {header}
      <div className='flex-1 flex overflow-hidden bg-white min-h-0'>
        <aside
          className='min-w-[300px] max-w-[360px] w-full h-full min-h-0
                     overflow-y-auto overscroll-contain shadow-lg'
        >
          {sidebarLeft}
        </aside>

        <main
          className='flex-1 h-full flex flex-col overflow-hidden min-h-0' // ✨
        >
          <div
            className='flex-1 overflow-y-auto overscroll-contain px-4 py-5 min-h-0' // ✨
          >
            {children}
          </div>
        </main>

        <aside
          className='min-w-[300px] max-w-[380px] w-full h-full min-h-0
                     overflow-y-auto overscroll-contain shadow-lg'
        >
          {sidebarRight}
        </aside>
      </div>
    </div>
  );
}
