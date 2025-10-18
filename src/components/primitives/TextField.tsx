import { cn } from '@/lib/cn'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}
export function TextField({ label, error, hint, className, ...props }: Props) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-sm font-medium text-gray-800">{label}</span>}
      <input
        className={cn(
          'h-10 w-full rounded-lg border px-3 outline-none',
          'border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-200',
          error && 'border-red-500 focus:ring-red-100',
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : hint ? <span className="text-xs text-gray-500">{hint}</span> : null}
    </label>
  )
}
