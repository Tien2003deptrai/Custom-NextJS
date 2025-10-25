// examples/ProductGrid.tsx
import Image from 'next/image';
import { Container, Grid, Stack, Cluster } from '@/components/layouts/Primitives';
import { Button } from '@/components/primitives/Button';

const data = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `React Course #${i + 1}`,
  author: 'John Doe',
  price: 39 + i,
  img: `https://picsum.photos/seed/course-${i}/600/400`,
}));

export function ProductGrid() {
  return (
    <Container size="full" className="py-8">
      <Cluster className='gap-4 justify-center'>
        {data.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded-2xl border bg-white shadow-sm max-w-[300px]">
            <div className="relative aspect-[3/2]">
              <Image src={item.img} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <Stack className="p-4">
              <div className="min-h-12">
                <h3 className="line-clamp-2 text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">by {item.author}</p>
              </div>
              <Cluster>
                <span className="text-lg font-semibold text-neutral-900">${item.price}</span>
                <Cluster className='ml-auto gap-2'>
                  <Button variant="secondary" size="sm">Details</Button>
                  <Button variant="primary" size="sm">Buy</Button>
                </Cluster>
              </Cluster>
            </Stack>
          </div>
        ))}
      </Cluster>
    </Container>
  );
}
