'use client';

import { Button } from '@/components/primitives/Button';
import { Bell, MessageSquare, ChevronDown, Search, Plus } from 'lucide-react';
import { Image } from '@/components/primitives/Image';

export default function HeaderMessage() {
  return (
    <header className='h-16 bg-white shadow-sm sticky top-0 z-30'>
      <div className='h-full px-4 flex items-center gap-4'>
        <div className='flex items-center gap-2 min-w-[150px]'>
          <div className='leading-tight select-none'>
            <div className='font-semibold text-[18px] text-violet-600'>
              Click QA
            </div>
            <div className='text-[10px] tracking-wide text-neutral-500 -mt-0.5'>
              MASTER OF Q&A
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <div className='relative w-full max-w-[680px]'>
            <input
              type='text'
              placeholder='Tìm kiếm'
              className='w-full h-11 rounded-lg bg-neutral-100 text-sm
                         pl-4 pr-10 outline-none border border-transparent placeholder:text-black
                         focus:border-neutral-300 focus:bg-white'
            />
            <Search className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400' />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <IconButton aria-label='Thông báo'>
            <Bell className='h-5 w-5' />
          </IconButton>

          <div className='relative'>
            <IconButton aria-label='Tin nhắn'>
              <MessageSquare className='h-5 w-5' />
            </IconButton>
            <span className='absolute -right-1 -top-1 h-5 min-w-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] leading-5 text-center'>
              9
            </span>
          </div>

          <Image
            src='https://i.pravatar.cc/100?img=15'
            alt='User avatar'
            className='w-8 h-8 rounded-full'
            fit='cover'
          />

          <ChevronDown className='h-4 w-4 text-neutral-600' />
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) {
  return (
    <button
      className={
        'h-10 w-10 grid place-items-center rounded-full hover:bg-neutral-100 text-neutral-700 ' +
        (className ?? '')
      }
      {...rest}
    >
      {children}
    </button>
  );
}
