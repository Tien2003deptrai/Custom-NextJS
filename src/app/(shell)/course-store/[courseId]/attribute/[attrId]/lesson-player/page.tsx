// app/(shell)/course-store/[courseId]/attribute/[attrId]/lesson-player/page.tsx
type Props = { params: { courseId: string; attrId: string } }

export default async function LessonPlayerPage({ params }: Props) {
  // fetch dữ liệu khoá học/bài học...
  return (
    <div className="p-4">
      {/* khung video */}
      <div className="aspect-video rounded-lg bg-black" />
      {/* breadcrumbs, title... */}
    </div>
  )
}
