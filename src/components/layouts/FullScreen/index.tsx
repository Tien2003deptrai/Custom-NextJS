interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function FullScreen({ children, className = '', ...props }: Props) {
  return (
    <section className={`h-full w-full ${className}`} {...props}>
      {children}
    </section>
  )
}
