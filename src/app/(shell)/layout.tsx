// app/(shell)/layout.tsx
import Header from '@/app/(shell)/_components/Header'
import SidebarLeft from '@/app/(shell)/_components/SidebarLeft'

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="grid min-h-[calc(100dvh-64px)] grid-cols-[260px_1fr]">
        <aside className="bg-white shadow-lg">
          <SidebarLeft />
        </aside>

        <main className="bg-neutral-50 dark:bg-neutral-950">{children}</main>
      </div>
    </>
  )
}
