import { FC } from 'react'
import { LibraryElement as LibraryElementType } from '../../types'
import { useLibraryStore } from '../../store'

type ReadListElementProps = {
  readListElement: LibraryElementType
}

const ReadListElement: FC<ReadListElementProps> = ({ readListElement }) => {
  const { removeReadListBook } = useLibraryStore()

  const { title, author, cover } = readListElement.book
  const { name: authorName } = author

  const onClickBook = () => {
    removeReadListBook(readListElement)
  }

  return (
    <article className=" relative  group overflow-hidden  w-full">
      <button
        onClick={onClickBook}
        className="absolute bg-blue-500 p-2 rounded-full top-2 right-2 cursor-pointer z-20 hover:rotate-180 transition-transform duration-300"
        aria-label="Remove book from read list"
      >
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <figure className="w-full h-full bg-slate-600/30">
        <img className="w-full h-full  object-cover" src={cover} width={340} height={500} alt={`${cover} - ${title}`} />
        <figcaption className="bg-gradient-to-b from-transparent group-hover:opacity-100 transition-opacity duration-200 opacity-0 to-zinc-900 h-full grid items-end content-end text-center space-y-2 absolute z-10 bottom-0 left-0 p-5 w-full text-white ">
          <h3 className=" font-bold">{title}</h3>
          <h4>
            by: <span className="font-bold">{authorName}</span>
          </h4>
        </figcaption>
      </figure>
    </article>
  )
}

export default ReadListElement
