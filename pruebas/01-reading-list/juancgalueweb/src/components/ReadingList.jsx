import { Card, Drawer } from 'antd'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'
import { CloseIcon } from './Icons/CloseIcon'

export const ReadingList = ({ open, onClose }) => {
  const { Meta } = Card
  const [readingList, removeFromReadingList] = useBooksStore(
    (state) => [state.readingList, state.removeFromReadingList],
    shallow
  )

  return (
    <Drawer
      className='reading-container'
      title={
        <div className='drawer-title'>
          <span>📖</span> Lista de lectura
        </div>
      }
      placement='right'
      onClose={onClose}
      open={open}
      size='large'
    >
      {readingList.length === 0 && (
        <div className='empty-reading-list'>
          <p>Aún no hay libros en la lista de lectura 🥺</p>
        </div>
      )}
      <div className='books-cards'>
        {readingList?.map((book) => {
          return (
            <Card
              key={book.ISBN}
              title='Eliminar'
              extra={<CloseIcon />}
              className='book-card'
              hoverable
              cover={
                <img alt={`Imagel del libro ${book.title}`} src={book.cover} />
              }
              onClick={() => removeFromReadingList(book.ISBN)}
            >
              <Meta title={book.title} description={book.author.name} />
            </Card>
          )
        })}
      </div>
    </Drawer>
  )
}
