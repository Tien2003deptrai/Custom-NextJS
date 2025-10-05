interface Option {
  label: string;
  value: string | number;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
}
export function Select({ label, error, options, ...props }: Props) {
  return (
    <label className='block space-y-1.5'>
      {label && (
        <span className='text-sm font-medium text-gray-800'>{label}</span>
      )}
      <select
        className={`w-full h-10 px-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
        {...props}
      >
        {options.map(o => (
          <option key={String(o.value)} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className='text-xs text-red-600'>{error}</span>}
    </label>
  );
}
