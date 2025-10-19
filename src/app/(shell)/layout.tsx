// app/(shell)/layout.tsx
import Header from '@/app/(shell)/_components/Header'

export default function ShellLayout({ children, left, right }: { children: React.ReactNode; left: React.ReactNode; right?: React.ReactNode }) {
  const hasRightSidebar = !!right
  const hasLeftSidebar = !!left

  let gridCols = 'grid-cols-[1fr]'

  if (hasLeftSidebar && hasRightSidebar) {
    gridCols = 'grid-cols-[320px_1fr_360px]'
  } else if (hasLeftSidebar && !hasRightSidebar) {
    gridCols = 'grid-cols-[320px_1fr]'
  } else if (!hasLeftSidebar && hasRightSidebar) {
    gridCols = 'grid-cols-[1fr_360px]'
  }

  return (
    <>
      <Header />
      <div className={`grid min-h-[calc(100dvh-64px)] ${gridCols}`}>
        {hasLeftSidebar && <aside className="border-r bg-white dark:bg-neutral-900">{left}</aside>}

        <main className="bg-neutral-50 dark:bg-neutral-950">{children}</main>

        {hasRightSidebar && <aside className="border-l bg-white dark:bg-neutral-900">{right}</aside>}
      </div>
    </>
  )
}
