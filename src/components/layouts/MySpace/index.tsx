import React from 'react'

const MySpace = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex h-full w-full flex-col">{children}</div>
}

const Heading = ({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`p-5 ${className}`} {...props}>
      {children}
    </div>
  )
}

const Body = ({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={`flex-1 bg-[#f6f6f6] p-5 ${className}`} {...props}>
      {children}
    </div>
  )
}

MySpace.Heading = Heading
MySpace.Body = Body
export default MySpace
