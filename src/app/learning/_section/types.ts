export type TabKey = 'lesson' | 'video' | 'live'

export interface CommonFilter {
  q: string // từ khóa search
}

export interface LessonItem {
  id: number
  title: string
  durationMin: number
  updatedAt: string // ISO
}

export interface VideoItem {
  id: number
  title: string
  views: number
  allow_comment: boolean
  createdAt: string // ISO
}

export interface LiveSessionItem {
  id: number
  topic: string
  startAt: string // ISO
  durationMin: number
  speaker: string
}

export interface ListResponse<T> {
  items: T[]
  total: number
}
