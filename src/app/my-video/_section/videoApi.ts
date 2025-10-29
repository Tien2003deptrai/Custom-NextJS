import { ListResponse, VideoItem } from './types'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

// mock database duy nhất cho /videos
const MOCK_DB: VideoItem[] = [
  { id: 1, title: 'Video của tôi #1', views: 120, author: 'Me', allow_comment: true, createdAt: '2025-10-20', status: 'CREATED' },
  { id: 2, title: 'Video của tôi #2', views: 80, author: 'Me', allow_comment: false, createdAt: '2025-10-21', status: 'CREATED' },
  { id: 11, title: 'Bản nháp #1', views: 0, author: 'Me', allow_comment: true, createdAt: '2025-10-19', status: 'DRAFT' },
  { id: 21, title: 'Video đã lưu #A', views: 450, author: 'Other', allow_comment: true, createdAt: '2025-10-10', status: 'SAVED' },
  { id: 22, title: 'Video đã lưu #B', views: 300, author: 'Other', allow_comment: true, createdAt: '2025-10-12', status: 'SAVED' },
  { id: 23, title: 'Video đã lưu #C', views: 150, author: 'Other', allow_comment: false, createdAt: '2025-10-14', status: 'SAVED' },
  { id: 31, title: 'Video bị từ chối #1', views: 70, author: 'Me', allow_comment: false, createdAt: '2025-10-18', status: 'REJECTED' },
]

// ONE endpoint: /videos?status=...&q=...&sort=...&allow_comment=...
export async function fetchVideos(
  params: { status: VideoItem['status']; q?: string; sort?: 'latest' | 'popular' | ''; allow_comment?: 'all' | 'yes' | 'no' },
  signal?: AbortSignal
): Promise<ListResponse<VideoItem>> {
  // --- Thay bằng API thật:
  // const qs = new URLSearchParams({
  //   status: params.status,
  //   q: params.q ?? '',
  //   sort: params.sort ?? '',
  //   allow_comment: params.allow_comment ?? 'all'
  // })
  // const res = await fetch(`/videos?${qs.toString()}`, { signal })
  // if (!res.ok) throw new Error(await res.text())
  // return (await res.json()) as ListResponse<VideoItem>

  // mock latency + abort
  const wait = sleep(350 + Math.random() * 150)
  if (signal) {
    const abort = new Promise<never>((_, rej) => signal.addEventListener('abort', () => rej(new DOMException('Aborted', 'AbortError'))))
    await Promise.race([wait, abort])
  } else {
    await wait
  }

  let rows = MOCK_DB.filter((v) => v.status === params.status)
  if (params.q) {
    const k = params.q.toLowerCase()
    rows = rows.filter((v) => v.title.toLowerCase().includes(k))
  }
  if (params.allow_comment && params.allow_comment !== 'all') {
    const allow = params.allow_comment === 'yes'
    rows = rows.filter((v) => v.allow_comment === allow)
  }
  if (params.sort === 'latest') rows = rows.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  else if (params.sort === 'popular') rows = rows.sort((a, b) => b.views - a.views)

  return { items: rows, total: rows.length }
}
