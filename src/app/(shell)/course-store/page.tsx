// app/(shell)/page.tsx
export default function ShellHomePage() {
  return (
    <div className="space-y-6 p-4">
      {/* Breadcrumbs giả lập */}
      <nav className="text-sm text-neutral-500">
        <span>Trang chủ</span> <span className="mx-2">›</span>
        <span>Khóa học</span>
      </nav>

      {/* Hero / chào mừng */}
      <section className="rounded-xl border bg-white p-5">
        <h1 className="text-lg font-semibold">Danh sách bài học</h1>
        <p className="mt-1 text-sm text-neutral-500">Chọn một khóa ở bên trái, hoặc tiếp tục học bài đang dở.</p>
      </section>

      {/* Lưới thẻ khóa học (placeholder) */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="group overflow-hidden rounded-xl border bg-white">
            <div className="aspect-video bg-neutral-200" />
            <div className="p-4">
              <h3 className="truncate text-sm font-medium">Khóa học mẫu #{i + 1}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-neutral-500">Mô tả ngắn gọn về nội dung khóa học, số bài, thời lượng, và mục tiêu.</p>
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                <span>12 bài</span>
                <span>3h 24’</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
