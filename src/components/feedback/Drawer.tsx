import * as React from 'react';

export function Drawer({ open, onClose, side = 'right', children }: { open: boolean; onClose: () => void; side?: 'left' | 'right'; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className='fixed inset-0 z-50'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />
      <div className={`absolute top-0 ${side === 'right' ? 'right-0' : 'left-0'} h-full w-80 bg-white p-4 shadow-xl`}>{children}</div>
    </div>
  );
}
