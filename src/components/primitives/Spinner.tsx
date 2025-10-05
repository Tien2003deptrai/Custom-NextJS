export function Spinner({ size = 20 }: { size?: number }) {
  const s = `${size}px`;
  return (
    <span
      className='inline-block animate-spin rounded-full border-2 border-gray-300 border-t-gray-900'
      style={{ width: s, height: s }}
      aria-label='loading'
    />
  );
}
