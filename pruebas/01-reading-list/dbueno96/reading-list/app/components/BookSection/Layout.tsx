import React from 'react'
import SectionTitle, { IWithClassName, IWithTitle } from '../SectionTitle'
import SectionBody from '../SectionBody'

interface ILayout extends IWithTitle, IWithClassName {
 children: React.ReactNode
}

export default function Layout (props:ILayout) {
  const { title, className, children } = props
  return (
    <section className={className}>
      <SectionTitle title={title} />
      <SectionBody {...props}>
        {children}
      </SectionBody>

    </section>
  )
}
