import { Book } from './Book'
import { useBooks } from '../hooks/useBooks'

export const Books: React.FC = () => {
  console.log('Books rendered')
  const { filteredBooks, pageFrom, pageTo } = useBooks()

  return (
    <section className='grid grid-cols-4 gap-4 p-4 flex-1'>
      {filteredBooks.slice(pageFrom, pageTo).map(({ ISBN, title, author, cover, isSelected }) =>
        <Book
          key={ISBN}
          title={title}
          author={author}
          cover={cover}
          ISBN={ISBN}
          isSelected={isSelected} />
      )}
    </section>
  )
}
