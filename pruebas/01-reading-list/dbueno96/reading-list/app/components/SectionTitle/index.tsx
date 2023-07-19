import React from 'react'

export interface IWithTitle {
 title: string
}

export interface IWithClassName {
    className: string
}

export interface IWithChildren {
    children: React.ReactNode
}
export interface IWithTiltleAndClassName extends IWithClassName, IWithTitle {}

interface ISectionTitle extends IWithTitle {}

export default function SectionTitle (props: ISectionTitle) {
  const { title } = props
  return <h3>{title}</h3>
}
