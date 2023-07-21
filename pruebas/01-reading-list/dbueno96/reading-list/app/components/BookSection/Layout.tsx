import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionBody from '../SectionBody'

interface ILayout extends IWithTiltleAndClassName {
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
