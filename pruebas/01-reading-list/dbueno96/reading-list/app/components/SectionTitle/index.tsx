import React from 'react'

interface ISectionTitle extends IWithTitle {}

export default function SectionTitle (props: ISectionTitle) {
  const { title } = props
  return <h3>{title}</h3>
}
