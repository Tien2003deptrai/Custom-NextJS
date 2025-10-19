// app/(shell)/course-store/filter/_components/FilterLeft.tsx
'use client'

import { Search, Star } from 'lucide-react'
import { useState } from 'react'

export default function FilterLeft() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Digital Marketing'])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const categories = ['Công nghệ', 'Thiết kế đồ họa', 'Digital Marketing', 'Công nghệ ô tô', 'Khoa học máy tính', 'Quản trị khách sạn']

  const languages = ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Pháp', 'Tiếng Đức']

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prev) => (prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]))
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedLanguages([])
    setSelectedRating(null)
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <h2 className="mb-6 text-lg font-semibold">Bộ lọc tìm kiếm</h2>

      {/* Lĩnh vực */}
      <div className="mb-8">
        <h3 className="mb-3 font-medium">Lĩnh vực</h3>
        <div className="mb-3">
          <label className="relative block">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" />
            <input className="w-full rounded-lg border bg-neutral-50 py-2 pr-3 pl-9 text-sm outline-none focus:border-neutral-400" placeholder="Tìm kiếm lĩnh vực" />
          </label>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleCategoryChange(category)} className="rounded border-neutral-300" />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Khoảng giá */}
      <div className="mb-8">
        <h3 className="mb-3 font-medium">Khoảng giá</h3>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Tối thiểu" className="w-full rounded-lg border bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-neutral-400" />
          <span className="text-neutral-500">-</span>
          <input type="number" placeholder="Tối đa" className="w-full rounded-lg border bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-neutral-400" />
        </div>
      </div>

      {/* Ngôn ngữ */}
      <div className="mb-8">
        <h3 className="mb-3 font-medium">Ngôn ngữ</h3>
        <div className="space-y-2">
          {languages.map((language) => (
            <label key={language} className="flex items-center gap-2">
              <input type="checkbox" checked={selectedLanguages.includes(language)} onChange={() => handleLanguageChange(language)} className="rounded border-neutral-300" />
              <span className="text-sm">{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Đánh giá */}
      <div className="mb-8">
        <h3 className="mb-3 font-medium">Đánh giá</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2">
              <input type="radio" name="rating" checked={selectedRating === rating} onChange={() => setSelectedRating(rating)} className="border-neutral-300" />
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} />
                ))}
                <span className="ml-1 text-sm text-neutral-600">Trở lên</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Clear all button */}
      <button onClick={clearAll} className="w-full rounded-lg bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700">
        Xóa tất cả
      </button>
    </div>
  )
}
