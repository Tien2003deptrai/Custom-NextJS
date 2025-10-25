// src/components/layout/Primitives.tsx
import * as React from 'react';
import { cn } from '@/lib/cn';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/* ========== Container ========== */
type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
const sizeClass: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-none',
};

export function Container({
  className,
  children,
  size = 'xl',
  ...props
}: DivProps & { size?: ContainerSize }) {
  return (
    <div className={cn('mx-auto px-4', sizeClass[size], className)} {...props}>
      {children}
    </div>
  );
}

/* ========== Stack (dọc) ========== */
export function Stack({ className, children, ...props }: DivProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
    </div>
  );
}

/* ========== Cluster (ngang, wrap) ========== */
export function Cluster({ className, children, ...props }: DivProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
}

/* ========== Grid (responsive) ========== */
type Break = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export function Grid({
  className,
  children,
  cols,
  ...rest
}: DivProps & { cols?: number | Partial<Record<Break, number>> }) {
  const colsClass =
    typeof cols === 'number'
      ? `grid-cols-${cols}`
      : cols
      ? Object.entries(cols)
          .map(([k, v]) => `${k}:grid-cols-${v}`)
          .join(' ')
      : 'grid-cols-1';

  return (
    <div className={cn('grid gap-4', colsClass, className)} {...rest}>
      {children}
    </div>
  );
}
