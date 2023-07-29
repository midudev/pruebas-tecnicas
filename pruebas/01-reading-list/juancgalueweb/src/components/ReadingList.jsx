import { Badge, Card, Drawer, Rate, Switch } from 'antd'
import { shallow } from 'zustand/shallow'
import { ribbonColor } from '../services/ribbonColor'
import { useBooksStore } from '../stores/books'
import { useSearchBooks } from '../stores/searchBooks'
import { CloseIcon } from './Icons/CloseIcon'

export const ReadingList = ({ open, onClose }) => {
  const { Meta } = Card
  const addAgainBookToSearchedBooks = useSearchBooks(
    (state) => state.addAgainBookToSearchedBooks
  )
  const [
    readingList,
    removeFromReadingList,
    modifyReadingListWithPriorities,
    sortReadingListByPriority
  ] = useBooksStore(
    (state) => [
      state.readingList,
      state.removeFromReadingList,
      state.modifyReadingListWithPriorities,
      state.sortReadingListByPriority
    ],
    shallow
  )

  const onChange = (checked) => {
    sortReadingListByPriority(checked)
  }

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
      {readingList.length > 1 && (
        <div className='empty-reading-list'>
          <span style={{ marginRight: '10px' }}>Ordenar por prioridad </span>
          <Switch onChange={onChange} />
        </div>
      )}
      <div className='books-cards'>
        {readingList?.map((book) => {
          return (
            <div key={book.ISBN} className='reading-card-rate'>
              <Badge.Ribbon text={book?.genre} color={ribbonColor(book?.genre)}>
                <Card
                  title={<CloseIcon />}
                  className='book-card'
                  hoverable
                  cover={
                    <img
                      alt={`Imagel del libro ${book.title}`}
                      src={book.cover}
                    />
                  }
                  onClick={() => {
                    removeFromReadingList(book.ISBN)
                    addAgainBookToSearchedBooks(book.ISBN)
                  }}
                >
                  <Meta title={book.title} description={book.author.name} />
                </Card>
              </Badge.Ribbon>
              <div className='rate'>
                <span>Prioridad</span>
                <Rate
                  value={book.priority !== null ? book.priority : 0}
                  onChange={(value) =>
                    modifyReadingListWithPriorities(value, book.ISBN)
                  }
                />
              </div>
            </div>
          )
        })}
      </div>
    </Drawer>
  )
}
