import { cn } from '@/lib/cn';

export function Tab({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <div onClick={onClick} className={cn('px-3 cursor-pointer', active ? 'border-b-2 border-blue-700 text-blue-700' : 'text-neutral-500')}>
      <span className='text-base'>{children}</span>
    </div>
  );
}
