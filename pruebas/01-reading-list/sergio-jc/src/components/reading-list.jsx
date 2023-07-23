import { useReadingList } from '@hooks/index'
import { Chip } from './chip'
import { XMark } from './icons'

function BookCardList ({ title, cover, author, ISBN }) {
  const { removeBookToReadingList } = useReadingList()
  return (
    <article className='flex shadow-md rounded-md overflow-hidden'>
      <div className='aspect-[2/3] w-1/6'>
        <img src={cover} alt={`${title}_reading_list`} className='object-cover' />
      </div>
      <div className='flex flex-row justify-between items-center p-2 w-5/6'>
        <header className='w-5/6'>
          <h4 className='truncate font-semibold text-base'>
            {title}
          </h4>
          <h5 className='truncate text-sm'>{author}</h5>
        </header>
        <button onClick={() => { removeBookToReadingList({ bookId: ISBN }) }}>
          <XMark />
        </button>
      </div>
    </article>
  )
}

export function ReadingList () {
  const { readingList } = useReadingList()

  return (
    <div className='bg-white p-4 w-80 shadow-sm rounded-lg'>
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl font-semibold'>Reading list</h3>
        {readingList?.length > 0 && <Chip value={readingList?.length} />}
      </div>
      <ul className='flex flex-col gap-3 pt-3'>
        {readingList?.length > 0 &&
          readingList?.map(
            ({ title, cover, ISBN, author: { name }, ...restProps }) => (
              <li key={ISBN}>
                <BookCardList title={title} cover={cover} author={name} ISBN={ISBN} />
              </li>
            )
          )}
      </ul>
    </div>
  )
}
