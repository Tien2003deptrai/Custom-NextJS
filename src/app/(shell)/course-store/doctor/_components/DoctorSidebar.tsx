'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, CalendarClock, Stethoscope, Pill, CreditCard, BarChart3, MessageSquareText, Settings, HelpCircle, Menu, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * SidebarLeft – a sleek, responsive sidebar for a Doctor Dashboard.
 * - Collapsible (desktop) with animated width
 * - Mobile drawer with overlay
 * - Active route highlighting via usePathname
 * - Dark-mode friendly Tailwind styles
 * - Tiny tooltip on collapsed state
 */
export default function SidebarLeft() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = useMemo(
    () => [
      { label: 'Tổng quan', href: '/dashboard', icon: LayoutDashboard },
      { label: 'Lịch khám', href: '/dashboard/appointments', icon: CalendarClock },
      { label: 'Bệnh nhân', href: '/dashboard/patients', icon: Stethoscope },
      { label: 'Đơn thuốc', href: '/dashboard/prescriptions', icon: Pill },
      { label: 'Thanh toán', href: '/dashboard/billing', icon: CreditCard },
      { label: 'Phân tích', href: '/dashboard/analytics', icon: BarChart3 },
      { label: 'Tin nhắn', href: '/dashboard/messages', icon: MessageSquareText },
    ],
    []
  )

  const bottomNav = useMemo(
    () => [
      { label: 'Cài đặt', href: '/dashboard/settings', icon: Settings },
      { label: 'Hỗ trợ', href: '/dashboard/support', icon: HelpCircle },
    ],
    []
  )

  const isActive = (href: string) => (href === '/dashboard' ? pathname === href : pathname?.startsWith(href))

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <aside
      className={[
        'group inset-y-0 left-0 z-40 flex flex-col border-r border-gray-200/70 bg-white dark:border-neutral-800 dark:bg-neutral-900',
        'transition-[width] duration-300 ease-out',
        collapsed ? 'w-[84px]' : 'w-full',
        // Hide on mobile unless opened
        mobileOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0',
      ].join(' ')}
      aria-label="Sidebar điều hướng bác sĩ"
    >
      {children}
    </aside>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 flex h-14 items-center gap-4 bg-white px-4 sm:hidden">
        <button
          aria-label="Mở sidebar"
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm active:scale-[0.98] dark:bg-neutral-900"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-semibold">Bác sĩ Dashboard</span>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px] sm:hidden" onClick={() => setMobileOpen(false)} />}

      <Wrapper>
        {/* Brand */}
        <div className="flex h-14 items-center justify-between px-3">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-sm" />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm leading-4 font-semibold">MedixPro</span>
                <span className="text-[11px] text-gray-500">Doctor Console</span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="hidden h-8 w-8 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm sm:inline-flex dark:border-neutral-800 dark:bg-neutral-900"
            aria-label={collapsed ? 'Mở rộng' : 'Thu gọn'}
            title={collapsed ? 'Mở rộng' : 'Thu gọn'}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Search (hidden when collapsed) */}
        {!collapsed && (
          <div className="px-3 pb-2">
            <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-3.9-3.9" />
              </svg>
              <input placeholder="Tìm bệnh nhân, hồ sơ..." className="w-full bg-transparent outline-none placeholder:text-gray-400" />
            </div>
          </div>
        )}

        {/* Main nav */}
        <nav className="mt-1 flex-1 space-y-6 overflow-y-auto px-2 py-3 [scrollbar-width:thin]">
          <Section title={!collapsed ? 'Điều hướng' : undefined} items={nav} isActive={isActive} collapsed={collapsed} onItemClick={() => setMobileOpen(false)} />

          {/* Quick card (only expanded) */}
          {!collapsed && (
            <div className="mx-1 rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-900">
              <p className="mb-2 text-sm font-medium">Tạo lịch khám nhanh</p>
              <p className="mb-3 text-xs text-gray-500">Đặt lịch cho bệnh nhân mới trong 10 giây.</p>
              <Link
                href="/dashboard/appointments/new"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Bắt đầu
              </Link>
            </div>
          )}

          <Section title={!collapsed ? 'Khác' : undefined} items={bottomNav} isActive={isActive} collapsed={collapsed} onItemClick={() => setMobileOpen(false)} />
        </nav>

        {/* User card */}
        <div className="mt-auto border-t border-gray-100 p-3 dark:border-neutral-800">
          <button onClick={() => setMobileOpen(false)} className="flex w-full items-center gap-3 rounded-2xl p-2 hover:bg-gray-50 dark:hover:bg-neutral-800">
            <div className="h-9 w-9 shrink-0 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-600" />
            {!collapsed && (
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">BS. Nguyễn An</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Online</span>
                </div>
                <p className="text-xs text-gray-500">Nội khoa · #A-1023</p>
              </div>
            )}
          </button>
        </div>
      </Wrapper>

      {/* Layout spacer so page content doesn’t go under sidebar */}
      <div className={[collapsed ? 'sm:w-[84px]' : 'sm:w-full', 'hidden sm:block'].join(' ')} />
    </>
  )
}

/* ---------------------- Subcomponents ---------------------- */
function Section({
  title,
  items,
  isActive,
  collapsed,
  onItemClick,
}: {
  title?: string
  items: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[]
  isActive: (href: string) => boolean
  collapsed: boolean
  onItemClick?: () => void
}) {
  return (
    <div>
      {title && <p className="mb-2 px-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">{title}</p>}
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <NavItem href={it.href} icon={it.icon} label={it.label} active={isActive(it.href)} collapsed={collapsed} onClick={onItemClick} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
  collapsed,
  onClick,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  active?: boolean
  collapsed?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        'group/nav relative mx-1 flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium',
        'transition-colors',
        active ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-neutral-800',
      ].join(' ')}
    >
      {/* Active rail */}
      <span className={['absolute top-1/2 left-0 h-6 -translate-y-1/2 rounded-r-full', active ? 'w-1 bg-blue-600' : 'w-0'].join(' ')} />

      <Icon className={'h-5 w-5 shrink-0 ' + (active ? 'opacity-100' : 'opacity-90')} />

      {!collapsed && <span className="truncate">{label}</span>}

      {/* Tooltip when collapsed */}
      {collapsed && (
        <span className="pointer-events-none absolute top-1/2 left-full ml-2 -translate-y-1/2 rounded-lg bg-gray-900 px-2 py-1 text-[11px] font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover/nav:opacity-100">
          {label}
        </span>
      )}
    </Link>
  )
}

/* ---------------------- Usage (example) ---------------------- */
/**
 * In your app layout:
 *
 * // app/(dashboard)/layout.tsx
 * export default function DashboardLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
 *       <SidebarLeft />
 *       <main className="sm:ml-[270px] sm:transition-[margin] sm:duration-300">
 *         {children}
 *       </main>
 *     </div>
 *   );
 * }
 *
 * Tailwind: ensure these classes aren’t purged by using JIT (default in Next.js).
 */
