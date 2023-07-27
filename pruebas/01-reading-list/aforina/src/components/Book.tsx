import { useBooks, useListedBooks } from '../store/useBooks'

export interface BookProps {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorProps
}

export interface AuthorProps {
  name: string
  otherBooks: string[]
}

export const Book = ({
  title,
  pages,
  genre,
  cover,
  synopsis,
  year,
  ISBN,
  author
}: BookProps) => {
  const { addListedBook } = useBooks()
  const { listedIds, addListedId } = useListedBooks()
  const isListed = listedIds.includes(ISBN)

  const addCard = () => {
    if (!isListed) {
      const aux: BookProps = {
        title: title,
        pages: pages,
        genre: genre,
        cover: cover,
        synopsis: synopsis,
        year: year,
        ISBN: ISBN,
        author: author
      }

      addListedId(ISBN)
      addListedBook({ book: aux })
    }
  }

  return (
    <article className='h-fit text-sm flex flex-col divide-y-1 divide-black border-1 border-solid border-black rounded-md shadow-[2px_3px_0px_rgba(0,0,0,1)]'>
      <div className='p-2 pt-4 flex justify-center'>
        <img src={cover} width={'220px'} className='rounded-sm h-[300px]' />
      </div>
      <div className='flex h-full gap-x-4 items-center justify-between px-6 py-2'>
        <div>
          <p className='w-[10rem] font-bold truncate'>{title}</p>
          <p>{author.name}</p>
        </div>
        {isListed ? (
          <span className='bg-[#F4ADB1] whitespace-nowrap text-white py-1 px-3 border-1 border-black rounded-sm'>
            Added 💖
          </span>
        ) : (
          <button
            onClick={addCard}
            className='bg-customPink text-white py-1 px-3 border-1 border-black drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] hover:bg-[#F5949A] rounded-sm'
          >
            Add
          </button>
        )}
      </div>
    </article>
  )
}
