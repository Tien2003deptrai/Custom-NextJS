'use client'

import { AspectRatio } from '@/components/primitives/AspectRatio'
import { Button } from '@/components/primitives/Button'
import { Image } from '@/components/primitives/Image'
import { Skeleton } from '@/components/primitives/Skeleton'
import { Spinner } from '@/components/primitives/Spinner'
import { useDisclosure } from '@/hooks/useDisclosure'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useEventListener } from '@/hooks/useEventListener'
import { useRef } from 'react'

// write data fake 5 + spinner + grid + card + loading skeleton
const data = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
]

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-md border border-gray-200 p-4">{children}</div>
}

function Cards({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.id}>{item.name}</Card>
      ))}
    </div>
  )
}

export default function SpinnerSkeletonPage() {
  const isLoading = true
  if (data.length === 0) return <Spinner />
  const d = useDisclosure()
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, d.close)
  useEventListener('keydown', (e) => e.key === 'Escape' && d.close())

  // return isLoading ? (
  //   <div className='grid grid-cols-3 gap-4'>
  //     {/* {Array.from({ length: 6 }).map((_, i) => (
  //       <div key={i} className='space-y-2'>
  //         <Skeleton className='h-40 w-full' />
  //         <Skeleton className='h-4 w-3/4' />
  //         <Skeleton className='h-4 w-1/2' />
  //       </div>
  //     ))} */}

  //     {/* <AspectRatio ratio={16 / 9}>
  //       <Image
  //         src={
  //           'https://variety.com/wp-content/uploads/2015/02/spidey.jpg?w=1000&h=667&crop=1'
  //         }
  //         className='rounded-md'
  //         alt='image'
  //         fit='cover'
  //       />
  //     </AspectRatio> */}
  //   </div>

  // ) : (
  //   <Cards data={data} />
  // );
  return (
    <>
      <div className="w-1/2">
        <AspectRatio ratio={16 / 9}>
          <Image src={'https://variety.com/wp-content/uploads/2015/02/spidey.jpg?w=1000&h=667&crop=1'} alt="image" fit="cover" />
        </AspectRatio>
      </div>
    </>
  )
}
