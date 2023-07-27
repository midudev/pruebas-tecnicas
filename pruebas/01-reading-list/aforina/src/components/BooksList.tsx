import { FC, useState, useCallback } from 'react'
import {
  DndContext,
  closestCenter,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent
} from '@dnd-kit/core'

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy
} from '@dnd-kit/sortable'

import Grid from './dnd/Grid'
import SortableItem from './dnd/SortableItem'
import Item from './dnd/Item'

import { useBooks } from '../store/useBooks'
import { BookProps } from './Book'

export const BooksList: FC = () => {
  const { listedBooks } = useBooks()
  const [items, setItems] = useState(listedBooks)
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id.toString())
  }, [])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      setItems(items => {
        const map = items.map(book => book.book.ISBN)
        const oldIndex = map.indexOf(active.id.toString())
        const newIndex = map.indexOf(over!.id.toString())

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }, [])

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
  }, [])

  const getBookActive = () => {
    const book = items.find(d => d.book.ISBN === activeId)
    return book ? book.book : ({} as BookProps)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid>
          {items.map(book => (
            <SortableItem key={book.book.ISBN} book={book.book} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
        {activeId && <Item id={activeId} isDragging book={getBookActive()} />}
      </DragOverlay>
    </DndContext>
  )
}
