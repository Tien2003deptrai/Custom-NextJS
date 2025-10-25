'use client'

import { Cluster, Container, Grid, Stack } from '@/components/layouts/Primitives'
import { ProductGrid } from './ProductGrid'

export default function HomePage() {
  return (
    <div className="p-4">
      {/* <div className="flex flex-col gap-2">
        <Link href="/use-disclosure" className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:text-blue-600">
          User Disclosure
        </Link>
        <Link href="/spinner-skeleton" className="rounded-md border border-blue-500 px-4 py-2 text-blue-500 hover:text-blue-600">
          Spinner Skeleton
        </Link>
      </div> */}

      {/* <Container size="full">
        <Stack>
          <Split
            left={<h2 className="text-xl font-semibold">Danh sách</h2>}
            right={<button className="rounded bg-black px-3 py-2 text-white">Thêm</button>}
          />
          <Cluster>
            <button className="rounded border px-3 py-1">All</button>
            <button className="rounded border px-3 py-1">Popular</button>
            <button className="rounded border px-3 py-1">Newest</button>
          </Cluster>
          <Grid cols={{ base: 1, md: 2, xl: 3 }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-2xl border p-4 shadow-sm">Card {i + 1}</div>
            ))}
          </Grid>
        </Stack>
      </Container> */}
      {/* <Container className="py-2">
      <Stack className="gap-2">
        <Cluster className="text-sm text-neutral-500">
          <span>Home</span>
          <span>›</span>
          <span>Courses</span>
          <span>›</span>
          <span className="text-neutral-800">React Mastery</span>
        </Cluster>

        <Split
          left={<h1 className="text-2xl font-semibold leading-tight">React Mastery</h1>}
          right={
            <Cluster>
              <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-50">
                Preview
              </button>
              <button className="rounded-lg bg-black px-3 py-1.5 text-sm text-white hover:bg-black/90">
                Publish
              </button>
            </Cluster>
          }
        />
      </Stack>
    </Container> */}
    {/* <Container className="py-4">
      <Split
        left={
          <div className="relative">
            <input
              className="h-10 w-80 rounded-lg border px-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Search courses..."
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">⌘K</span>
          </div>
        }
        right={
          <Cluster>
            <Cluster>
              {['All', 'Popular', 'Newest', 'Free',].map((t, i) => (
                <button
                  key={t}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    i === 0 ? 'bg-black text-white' : 'hover:bg-neutral-50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </Cluster>
            <select className="h-10 rounded-lg border px-3 text-sm outline-none">
              <option value="relevant">Relevant</option>
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
            </select>
          </Cluster>
        }
      />
    </Container> */}
    <ProductGrid />
    </div>
  )
}
