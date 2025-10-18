import { useState } from 'react';
import { cn } from '@/lib/cn';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fit?: 'cover' | 'contain';
}
export function Image({ fallbackSrc = '/avatars/default-avatar.png', fit = 'cover', className, ...props }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      className={cn('w-full h-full object-center', fit === 'cover' ? 'object-cover' : 'object-contain', className)}
      onError={() => setErrored(true)}
      src={errored ? fallbackSrc : (props.src ?? fallbackSrc)}
      alt={props.alt ?? 'image'}
      {...props}
    />
  );
}
