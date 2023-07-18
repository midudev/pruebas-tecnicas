import React from 'react'

export default function Layout ({ className, children }:{className: string, children:React.ReactNode}) {
  return <section className={className}>{children}</section>
}
