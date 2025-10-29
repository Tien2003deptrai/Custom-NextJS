export type TabKey = '0' | '1' | '2' | '3'

export const TABS: { key: TabKey; label: string; status: 'CREATED' | 'DRAFT' | 'SAVED' | 'REJECTED' }[] = [
  { key: '0', label: 'Video đã tạo', status: 'CREATED' },
  { key: '1', label: 'Bản nháp', status: 'DRAFT' },
  { key: '2', label: 'Đã lưu', status: 'SAVED' },
  { key: '3', label: 'Từ chối', status: 'REJECTED' },
]

export interface FilterState {
  search_key: string
  role_viewer: 'all' | 'me' | 'other'
  sort: '' | 'latest' | 'popular'
  from_to_date: 'all' | '7days' | '30days'
  allow_comment: 'all' | 'yes' | 'no'
}

export interface VideoItem {
  id: number
  title: string
  views: number
  author: string
  allow_comment: boolean
  createdAt: string
  status: 'CREATED' | 'DRAFT' | 'SAVED' | 'REJECTED'
}

export interface ListResponse<T> {
  items: T[]
  total: number
}
