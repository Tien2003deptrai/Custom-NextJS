'use client'

import { SmartWrapper } from '@/components/feedback/SmartSkeleton'
import { useEffect, useState } from 'react'

// Mock APIs
const fetchProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return [
    { id: 1, name: 'Product 1', price: 100, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 4, name: 'Product 4', price: 400, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 5, name: 'Product 5', price: 500, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 6, name: 'Product 6', price: 600, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 7, name: 'Product 7', price: 700, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 8, name: 'Product 8', price: 800, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 9, name: 'Product 9', price: 900, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 10, name: 'Product 10', price: 1000, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
  ]
}

const fetchBlogs = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return [
    { id: 1, title: 'Big Fish', date: 'Mon, May 25th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    { id: 2, title: 'Funny Panda', date: 'Sat, July 10th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
    { id: 3, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 4, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 5, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 6, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 7, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 8, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 9, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
    { id: 10, title: 'Cute Dog', date: 'Sun, August 15th 2021', content: 'Lorem ipsum...', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
  ]
}

// Components
function ProductCard({ product }: { product: any }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-3 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Learn More</button>
      </div>
    </div>
  )
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="flex overflow-hidden rounded-lg border bg-white shadow-sm">
      <img src={blog.image} alt={blog.title} className="h-32 w-48 object-cover" />
      <div className="flex-1 p-4">
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-sm text-gray-500">{blog.date}</p>
        <p className="mt-2 text-sm text-gray-600">{blog.content}</p>
        <div className="mt-3 flex space-x-2">
          <button className="rounded bg-purple-600 px-3 py-1 text-xs text-white">Tailwind</button>
          <button className="rounded bg-gray-600 px-3 py-1 text-xs text-white">30 mins</button>
          <button className="rounded bg-green-600 px-3 py-1 text-xs text-white">Play</button>
        </div>
      </div>
    </div>
  )
}

export default function SpinnerSkeletonPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'blogs'>('blogs')
  const [products, setProducts] = useState<any[]>([])
  const [blogs, setBlogs] = useState<any[]>([])
  const [productsLoading, setProductsLoading] = useState(false)
  const [blogsLoading, setBlogsLoading] = useState(false)

  // Demo with static data - Replace with react-query
  useEffect(() => {
    setProductsLoading(true)
    fetchProducts().then((data) => {
      setProducts(data)
      setProductsLoading(false)
    })
    setBlogsLoading(true)
    fetchBlogs().then((data) => {
      setBlogs(data)
      setBlogsLoading(false)
    })
  }, [])

  return (
    <div className="flex h-screen flex-1 flex-col overflow-y-auto p-6">
      <h1 className="text-2xl font-bold">Smart Loading Demo</h1>

      <div className="flex space-x-4 border-b py-4">
        {[
          { key: 'products', label: 'Products (Grid)' },
          { key: 'blogs', label: 'Blogs (List)' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 font-medium ${activeTab === tab.key ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* scroll */}
      <div className="py-4">
        {activeTab === 'products' && (
          <SmartWrapper isLoading={productsLoading} layout="v" count={9} cols={3}>
            <div className="grid grid-cols-3 gap-4">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </SmartWrapper>
        )}

        {activeTab === 'blogs' && (
          <SmartWrapper isLoading={blogsLoading} layout="h" count={10} cols={2}>
            <div className="grid grid-cols-2 gap-4">
              {blogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </SmartWrapper>
        )}
      </div>
    </div>
  )
}
