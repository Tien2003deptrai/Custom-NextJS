export function AspectRatio({ ratio = 16 / 9, children }: { ratio?: number; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${100 / ratio}%`,
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>{children}</div>
    </div>
  )
}
