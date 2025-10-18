import { FormProvider, UseFormReturn } from 'react-hook-form'

export function RHFProvider({ methods, onSubmit, children }: { methods: UseFormReturn<any>; onSubmit: (values: any) => void; children: React.ReactNode }) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
