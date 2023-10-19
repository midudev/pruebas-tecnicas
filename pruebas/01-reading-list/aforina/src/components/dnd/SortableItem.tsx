import { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Item from './Item'
import { Book } from '../../domain/Book'

export interface BookProps {
  book: Book
}

const SortableItem: FC<BookProps> = props => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.book.ISBN })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined
  }

  return (
    <Item
      id={props.book.ISBN}
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default SortableItem
