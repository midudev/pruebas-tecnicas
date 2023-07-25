import { Badge, Button } from 'antd'
import { useDrawer } from '../hooks/useDrawer'
import { useBooksStore } from '../stores/books'
import { ReadingList } from './ReadingList'

export const Stats = () => {
  const copyBooks = useBooksStore((state) => state.copyBooks)
  const selectedCategory = useBooksStore((state) => state.selectedCategory)
  const readingList = useBooksStore((state) => state.readingList)
  const books = useBooksStore((state) => state.books)
  const { open, showDrawer, onClose } = useDrawer()

  return (
    <>
      <ReadingList open={open} onClose={onClose} />
      <div className='books-heading'>
        <Button type='primary' onClick={showDrawer}>
          Ver lista de lectura
        </Button>
        <h2>
          Libros disponibles{' '}
          <Badge
            count={books?.length - readingList?.length}
            style={{
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
        <h2>
          Libros por género seleccionado{' '}
          <Badge
            showZero
            count={selectedCategory === 'Todos' ? 0 : copyBooks?.length}
            style={{
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
        <h2>
          Libros en lista de lectura{' '}
          <Badge
            count={readingList.length}
            showZero
            style={{
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
      </div>
    </>
  )
}
