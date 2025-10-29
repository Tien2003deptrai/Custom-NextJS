import { ListResponse, LessonItem, VideoItem, LiveSessionItem } from './types'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

/** ===================== MOCK DB ===================== */
const LESSONS: LessonItem[] = [
  { id: 1, title: 'Giới thiệu khóa học', durationMin: 8, updatedAt: '2025-10-20' },
  { id: 2, title: 'Cài đặt môi trường', durationMin: 15, updatedAt: '2025-10-21' },
  { id: 3, title: 'Xây dựng flow học', durationMin: 20, updatedAt: '2025-10-25' },
]

const VIDEOS: VideoItem[] = [
  { id: 11, title: 'Q&A tuần 42', views: 320, allow_comment: true, createdAt: '2025-10-22' },
  { id: 12, title: 'Demo dự án nhỏ', views: 780, allow_comment: false, createdAt: '2025-10-23' },
  { id: 13, title: 'Góc nhìn senior', views: 510, allow_comment: true, createdAt: '2025-10-26' },
]

const LIVES: LiveSessionItem[] = [
  { id: 21, topic: 'Live kick-off', startAt: '2025-11-01T19:00:00+07:00', durationMin: 60, speaker: 'Mr. A' },
  { id: 22, topic: 'Code review nâng cao', startAt: '2025-11-05T20:00:00+07:00', durationMin: 90, speaker: 'Ms. B' },
]

/** ===================== API Giả Lập ===================== */
// Thay bằng API thật: fetch('/api/lessons?q=...') ...
export async function fetchLessons(params: { q?: string }, signal?: AbortSignal): Promise<ListResponse<LessonItem>> {
  const wait = sleep(300 + Math.random() * 150)
  if (signal) {
    const abort = new Promise<never>((_, rej) => signal.addEventListener('abort', () => rej(new DOMException('Aborted', 'AbortError'))))
    await Promise.race([wait, abort])
  } else {
    await wait
  }
  let rows = [...LESSONS]
  if (params.q) {
    const k = params.q.toLowerCase()
    rows = rows.filter((x) => x.title.toLowerCase().includes(k))
  }
  // sort nhẹ: mới cập nhật lên trước
  rows.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
  return { items: rows, total: rows.length }
}

export async function fetchVideos(params: { q?: string }, signal?: AbortSignal): Promise<ListResponse<VideoItem>> {
  const wait = sleep(350 + Math.random() * 150)
  if (signal) {
    const abort = new Promise<never>((_, rej) => signal.addEventListener('abort', () => rej(new DOMException('Aborted', 'AbortError'))))
    await Promise.race([wait, abort])
  } else {
    await wait
  }
  let rows = [...VIDEOS]
  if (params.q) {
    const k = params.q.toLowerCase()
    rows = rows.filter((x) => x.title.toLowerCase().includes(k))
  }
  // sort nhẹ: views giảm dần
  rows.sort((a, b) => b.views - a.views)
  return { items: rows, total: rows.length }
}

export async function fetchLiveSessions(params: { q?: string }, signal?: AbortSignal): Promise<ListResponse<LiveSessionItem>> {
  const wait = sleep(300 + Math.random() * 150)
  if (signal) {
    const abort = new Promise<never>((_, rej) => signal.addEventListener('abort', () => rej(new DOMException('Aborted', 'AbortError'))))
    await Promise.race([wait, abort])
  } else {
    await wait
  }
  let rows = [...LIVES]
  if (params.q) {
    const k = params.q.toLowerCase()
    rows = rows.filter((x) => x.topic.toLowerCase().includes(k) || x.speaker.toLowerCase().includes(k))
  }
  // sort: gần nhất lên trước
  rows.sort((a, b) => Date.parse(a.startAt) - Date.parse(b.startAt))
  return { items: rows, total: rows.length }
}
