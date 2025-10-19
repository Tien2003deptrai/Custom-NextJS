'use client'

import React, { useMemo, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Image } from '@/components/primitives/Image'
import { Button } from '@/index'
import { Tab } from '../_components/Tab'

type TabKey = 'photo' | 'video'

type MediaItem = {
  id: string
  url: string
  type: TabKey
}

const FAKE_MEDIA: MediaItem[] = [
  // ẢNH
  {
    id: 'p1',
    url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p2',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p3',
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p4',
    url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p5',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p6',
    url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p7',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p8',
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400',
    type: 'photo',
  },
  {
    id: 'p9',
    url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=400',
    type: 'photo',
  },

  // VIDEO (use different thumbs)
  {
    id: 'v1',
    url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400',
    type: 'video',
  },
  {
    id: 'v2',
    url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400',
    type: 'video',
  },
  {
    id: 'v3',
    url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400',
    type: 'video',
  },
  {
    id: 'v4',
    url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400',
    type: 'video',
  },
  {
    id: 'v5',
    url: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=400',
    type: 'video',
  },
  {
    id: 'v6',
    url: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=400',
    type: 'video',
  },
]

export default function SidebarRight() {
  const [tab, setTab] = useState<TabKey>('photo')

  const list = useMemo(() => FAKE_MEDIA.filter((m) => m.type === tab), [tab])

  return (
    <aside className="px-4 py-4">
      <div className="flex items-center justify-between">
        <Button variant="secondary" size="sm" className="h-8 w-8 cursor-pointer rounded-lg p-0">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold">Media</h2>
        <div className="h-9 w-9" />
      </div>

      <div className="flex items-center justify-around">
        <Tab active={tab === 'photo'} onClick={() => setTab('photo')}>
          Ảnh
        </Tab>
        <Tab active={tab === 'video'} onClick={() => setTab('video')}>
          Video
        </Tab>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 gap-2.5">
          {list.map((m) => (
            <Image key={m.id} src={m.url} alt={m.id} className="h-full w-full object-cover" fit="cover" />
          ))}
        </div>
      </div>
    </aside>
  )
}
