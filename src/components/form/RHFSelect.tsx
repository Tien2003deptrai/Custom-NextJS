import { useFormContext } from 'react-hook-form'
import { Select } from '@/components/primitives/Select'

export function RHFSelect({ name, label, options }: { name: string; label?: string; options: { label: string; value: string | number }[] }) {
export function RHFSelect({ name, label, options }: { name: string; label?: string; options: { label: string; value: string | number }[] }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const err = (errors as any)[name]?.message as string | undefined
  return <Select label={label} options={options} error={err} {...register(name)} />
}
