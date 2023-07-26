import { Book } from '../getBooks'
import { useDragStart } from '../hooks/useDragStart'
import { DragOrigin } from '../store/booksStore'

interface Props {
  children: React.ReactNode
  className: string
  book: Book
  origin: DragOrigin
  draggable?: boolean
}

export default function DraggableContainer({
  children,
  className,
  book,
  origin,
  draggable
}: Props) {
  const { handleDragStart } = useDragStart(origin)

  return (
    <section
      draggable
      className={className}
      onDragStart={() => {
        return !draggable ? handleDragStart(book) : ''
      }}
    >
      {children}
    </section>
  )
}
