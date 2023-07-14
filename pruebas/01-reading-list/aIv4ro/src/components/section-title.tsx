import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function SectionTitle ({ children }: Props) {
  return (
    <h3 className='text-xl font-semibold mb-2'>
      {children}
    </h3>
  )
}
