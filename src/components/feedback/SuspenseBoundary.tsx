export function SuspenseBoundary({
  children,
  fallback = <div className='p-4'>Loading…</div>,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return <>{children}</>;
}
