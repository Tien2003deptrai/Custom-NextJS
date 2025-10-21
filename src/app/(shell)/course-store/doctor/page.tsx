'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarClock, Users2, Activity, Stethoscope, MessageSquareText, Pill, FileText, ChevronRight, Search, Plus } from 'lucide-react'

/**
 * Doctor Dashboard – Home page
 * Tailwind-only, dark‑mode friendly, no chart libs.
 *
 * Sections:
 *  - Greeting + quick search + actions
 *  - KPI cards
 *  - Today: Schedule / Appointments
 *  - Recent messages
 *  - Recent prescriptions & lab reports
 */
export default function DashboardHomePage() {
  const [q, setQ] = useState('')

  // Fake data for demo
  const kpis = useMemo(
    () => [
      { label: 'Bệnh nhân đang theo dõi', value: 128, icon: Users2, trend: 12 },
      { label: 'Lịch khám hôm nay', value: 8, icon: CalendarClock, trend: -1 },
      { label: 'Chỉ số sức khoẻ bất thường', value: 3, icon: Activity, trend: 1 },
      { label: 'Đơn thuốc chờ duyệt', value: 5, icon: Pill, trend: 2 },
    ],
    []
  )

  const today = useMemo(
    () => [
      {
        time: '08:00',
        name: 'Trần Minh Khoa',
        note: 'Tái khám huyết áp',
        room: 'P.201',
      },
      { time: '09:15', name: 'Lê Thảo Nhi', note: 'Đau đầu, chóng mặt', room: 'P.203' },
      { time: '10:30', name: 'Nguyễn Đức Long', note: 'Đọc KQ xét nghiệm', room: 'P.201' },
      { time: '14:00', name: 'Phạm Hoàng Yến', note: 'Đau dạ dày', room: 'P.205' },
    ],
    []
  )

  const messages = useMemo(
    () => [
      { from: 'BS. Điều dưỡng Lan', text: 'Đã sắp xếp hồ sơ bệnh nhân Khoa.', at: '5 phút' },
      { from: 'Hệ thống', text: 'Có 1 chỉ số bất thường từ máy theo dõi.', at: '25 phút' },
      { from: 'BS. Dũng', text: 'Chiều họp khoa 15:00 tại P.301.', at: '1 giờ' },
    ],
    []
  )

  const docs = useMemo(
    () => [
      { kind: 'Đơn thuốc', id: 'RX-2025-00123', patient: 'Lê Thảo Nhi', href: '/dashboard/prescriptions/123' },
      { kind: 'KQ xét nghiệm', id: 'LAB-AX98', patient: 'Nguyễn Đức Long', href: '/dashboard/reports/lab-ax98' },
      { kind: 'Chuẩn đoán', id: 'DX-7781', patient: 'Trần Minh Khoa', href: '/dashboard/records/dx-7781' },
    ],
    []
  )

  const filtered = q ? today.filter((t) => [t.name, t.note, t.room, t.time].join(' ').toLowerCase().includes(q.toLowerCase())) : today

  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Xin chào, BS. Nguyễn An</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Chúc bạn một ngày hiệu quả. Dưới đây là tổng quan hôm nay.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Link href="/dashboard/appointments/new" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Tạo lịch khám
          </Link>
          <Link
            href="/dashboard/patients/new"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900"
          >
            Thêm bệnh nhân
          </Link>
        </div>
      </div>

      {/* Search + KPIs */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-800">
              <Search className="h-4 w-4" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm lịch hôm nay / bệnh nhân..." className="w-full bg-transparent outline-none placeholder:text-gray-400" />
            </div>
            <p className="mt-2 text-xs text-gray-500">Gợi ý: gõ phòng (vd: P.201) hoặc loại lịch (vd: xét nghiệm).</p>
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <KpiCard key={k.label} {...k} />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Today schedule */}
        <div className="lg:col-span-7">
          <Section title="Lịch khám hôm nay">
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
              {filtered.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 dark:from-neutral-800 dark:to-neutral-800">
                      <CalendarClock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-neutral-800 dark:text-gray-300">{item.room}</span>
                    <span className="font-semibold tracking-tight">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right">
              <Link href="/dashboard/appointments" className="inline-flex items-center text-sm font-semibold">
                Xem tất cả <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Section>
        </div>

        {/* Side column */}
        <div className="lg:col-span-5">
          <Section title="Tin nhắn gần đây">
            <ul className="space-y-3">
              {messages.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-100 to-pink-100 text-pink-700 dark:from-neutral-800 dark:to-neutral-800">
                    <MessageSquareText className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{m.from}</span>: {m.text}
                    </p>
                    <p className="text-xs text-gray-500">{m.at} trước</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right">
              <Link href="/dashboard/messages" className="inline-flex items-center text-sm font-semibold">
                Xem hộp thư <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </Section>

          <Section title="Tài liệu & chỉ định gần đây">
            <ul className="space-y-2">
              {docs.map((d) => (
                <li key={d.id}>
                  <Link
                    href={d.href}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm hover:bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-700 dark:from-neutral-800 dark:to-neutral-800">
                        {d.kind === 'Đơn thuốc' ? <Pill className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">
                          {d.kind} · {d.id}
                        </p>
                        <p className="text-xs text-gray-500">Bệnh nhân: {d.patient}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Components ---------------- */
function KpiCard({
  label,
  value,
  icon: Icon,
  trend,
}: {
  label: string
  value: number | string
  icon: React.ComponentType<{ className?: string }>
  trend?: number // +/- vs hôm qua
}) {
  const isUp = (trend ?? 0) >= 0
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 dark:from-neutral-800 dark:to-neutral-800">
          <Icon className="h-5 w-5" />
        </div>
        {typeof trend === 'number' && (
          <span
            className={
              'rounded-full px-2 py-0.5 text-xs font-semibold ' +
              (isUp ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300')
            }
          >
            {isUp ? '+' : ''}
            {trend}%
          </span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold tracking-tight">{value}</p>
        <p className="mt-1 text-xs text-gray-500">{label}</p>
      </div>
      {/* Mini trend bar (decorative) */}
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${Math.min(100, 50 + (trend ?? 0) * 3)}%` }} />
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">{title}</h2>
        <Stethoscope className="h-4 w-4 opacity-50" />
      </div>
      {children}
    </section>
  )
}
