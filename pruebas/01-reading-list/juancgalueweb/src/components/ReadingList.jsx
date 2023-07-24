import { Badge, Card } from 'antd'
import { shallow } from 'zustand/shallow'
import { useBooksStore } from '../stores/books'
import { CloseIcon } from './Icons/CloseIcon'

export const ReadingList = () => {
  const { Meta } = Card
  const [readingList, removeFromReadingList] = useBooksStore(
    (state) => [state.readingList, state.removeFromReadingList],
    shallow
  )

  return (
    <div className='reading-container'>
      <div className='reading-heading-h1'>
        <h1>📖 Lista de lectura</h1>
      </div>
      {/* Div vacío solo para la visual */}
      <div className='reading-heading-h2'></div>
      <div className='reading-heading-h2'>
        <h2>
          N° de libros disponibles{' '}
          <Badge
            count={readingList.length}
            color='#52c41a'
            showZero
            style={{
              borderColor: 'transparent',
              fontWeight: 700,
              marginLeft: '6px'
            }}
          />
        </h2>
      </div>
      {readingList.length === 0 && (
        <div className='empty-reading-list'>
          <p>Aún no hay libros en la lista de lectura</p>
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
    </div>
  )
}
