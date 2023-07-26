import { ReactNode } from 'react'
import { useDrag } from '../hooks/useDrag'
import { DragOrigin } from '../store/booksStore'

interface Props {
  children: ReactNode
  className: string
  container: DragOrigin
}

export default function DragAndDropContainer({
  children,
  className,
  container
}: Props) {
  const { drag, handleDragLeave, handleDragOver, handleDrop } =
    useDrag(container)

  return (
    <section
      className={
        className +
        ' ' +
        `border-dashed border-2 transition-all duration-300  ${
          drag ? ' border-slate-400' : 'border-transparent'
        }`
      }
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </section>
  )
}
