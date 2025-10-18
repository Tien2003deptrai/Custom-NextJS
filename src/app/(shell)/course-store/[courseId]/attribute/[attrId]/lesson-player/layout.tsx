// app/(shell)/course-store/[courseId]/attribute/[attrId]/lesson-player/layout.tsx
export default function LessonPlayerLayout({ children, right }: { children: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <div className="flex-1">{children}</div>
      <div className="w-[360px]">{right}</div>
    </div>
  )
}
