// app/(shell)/course-store/filter/page.tsx
export default function CourseStoreFilterPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Bộ lọc tìm kiếm</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Course cards sẽ được hiển thị ở đây */}
        <div className="rounded-lg border bg-white p-4">
          <div className="mb-3 aspect-video rounded-lg bg-neutral-200"></div>
          <h3 className="font-semibold">Course Title</h3>
          <p className="text-sm text-neutral-600">Instructor Name</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold">13,500</span>
            <span className="text-sm">⭐ 4.7</span>
          </div>
        </div>
        {/* Thêm more course cards... */}
      </div>
    </div>
  )
}
