'use client'
import { useQuery } from '@tanstack/react-query'
import { fetchLessons, fetchLiveSessions, fetchVideos } from './apis'
import { ListResponse, LessonItem, LiveSessionItem, VideoItem } from './types'

// qDebounced là chuỗi đã debounce từ Page, hook không tự debounce nữa
export function useLessons(qDebounced: string) {
  return useQuery<ListResponse<LessonItem>>({
    queryKey: ['learning', 'lessons', qDebounced],
    queryFn: ({ signal }) => fetchLessons({ q: qDebounced || undefined }, signal),
    staleTime: 10_000,
    retry: 1,
  })
}

export function useVideos(qDebounced: string) {
  return useQuery<ListResponse<VideoItem>>({
    queryKey: ['learning', 'videos', qDebounced],
    queryFn: ({ signal }) => fetchVideos({ q: qDebounced || undefined }, signal),
    staleTime: 10_000,
    retry: 1,
  })
}

export function useLives(qDebounced: string) {
  return useQuery<ListResponse<LiveSessionItem>>({
    queryKey: ['learning', 'lives', qDebounced],
    queryFn: ({ signal }) => fetchLiveSessions({ q: qDebounced || undefined }, signal),
    staleTime: 10_000,
    retry: 1,
  })
}
