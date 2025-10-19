import { useFormContext } from 'react-hook-form'
import { TextField } from '@/components/primitives/TextField'

export function RHFTextField({ name, label, hint, ...rest }: { name: string; label?: string; hint?: string; [k: string]: any }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const err = (errors as any)[name]?.message as string | undefined
  return <TextField label={label} hint={hint} error={err} {...register(name)} {...rest} />
}
